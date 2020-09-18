import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';
import cookie from 'cookie';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const db = await sqlite.open('./mydb.sqlite');

  if (req.method === 'POST') {
    console.log(req.body?.email, 'email query');
    const person = await db.get('SELECT * FROM person WHERE email =?', [
      req.body?.email,
    ]);

    if (!person)
      return res.status(400).json({ message: 'User doesnot exists' });

    const isMatch = await bcrypt.compare(req.body?.password, person.password);

    if (!isMatch)
      return res.status(400).json({ message: 'Invalid credentials' });

    const payload = {
      sub: person.id,
      personEmail: person.email,
    };

    const token = jwt.sign(payload, `${process.env.JWT_SECRET}`, {
      expiresIn: 360000,
    });
    res.setHeader(
      'set-cookie',
      cookie.serialize('auth', token, {
        // cookie authorization name="auth"
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 360000,
        path: '/',
      })
    );

    res.json({ message: 'Welcome back to app!' });
    // return res.json({ token });
  } else {
    res.status(405).json({ message: 'Only POST req accepted' });
  }
}

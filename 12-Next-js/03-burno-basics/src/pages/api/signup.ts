import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';
import bcrypt from 'bcrypt';

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await sqlite.open('./mydb.sqlite');

  if (req.method === 'POST') {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const statement = await db.prepare(
      'INSERT INTO person (name, email, password) values (? , ?, ?)'
    );
    const result = await statement.run(
      req.body.name,
      req.body.email,
      password
    );
 
    (await result).finalize();
    const person = await db.all('SELECT * FROM person');
    res.json(person);
  } else {
    res.status(405).json({ message: 'Only POST req accepted' });
  }
}

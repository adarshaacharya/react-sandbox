import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';
import { authenticated } from './utils/auth';

export default authenticated(async function getPeople(
  _: NextApiRequest,
  res: NextApiResponse
) {
  const db = await sqlite.open('./mydb.sqlite');

  const people = await db.all('SELECT id, email, name from person');
  res.json(people);
});

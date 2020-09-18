import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';
import { authenticated } from './utils/auth';

export default authenticated(async function getAllVehicles(
  _: NextApiRequest,
  res: NextApiResponse
) {
  const db = await sqlite.open('./mydb.sqlite');
  const vehicles = await db.all('SELECT * from vehicle');

  res.json(vehicles);
});

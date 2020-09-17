import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

export default async function getAllVehiclesbyPersonId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await sqlite.open('./mydb.sqlite');

  const allVehicles = await db.all('SELECT * FROM vehicle WHERE ownerId =?', [
    req.query.id,
  ]);

  res.json(allVehicles);
}

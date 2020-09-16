import { NextApiRequest, NextApiResponse } from 'next';

export default function getAllVehicles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(500).json({
      message: 'Sorry we can only accept GET request',
    });
  }
  res.json([
    {
      name: 'John',
    },
    {
      name: 'Jake',
    },
  ]);
}

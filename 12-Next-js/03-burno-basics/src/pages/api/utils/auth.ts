import jwt from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

// resuable component
export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const token = req.cookies.auth; // key used as cookie while login

  // check if token exists
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' }); // actually useful
  }

  const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);

  if (decoded) {
    return await fn(req, res);
  }
};

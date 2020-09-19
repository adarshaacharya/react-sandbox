import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

const handler = nc()
  .get((_: NextApiRequest, res: NextApiResponse) => {
    res.send('Hello world');
  })
  .post((_: NextApiRequest, res: NextApiResponse) => {
    res.json({ hello: 'world' });
  })
  .put(async (_: NextApiRequest, res: NextApiResponse) => {
    res.end('hello');
  });

export default handler;

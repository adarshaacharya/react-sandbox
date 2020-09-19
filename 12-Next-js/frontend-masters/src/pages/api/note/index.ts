import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import notes from 'src/data';

const handler = nc()
  .get((_: NextApiRequest, res: NextApiResponse) => {
    res.json({ data: notes });
  })
  .post((req: NextApiRequest, res: NextApiResponse) => {
    const note = {
      ...req.body,
      id: Date.now(),
    };

    notes.push(note);
    res.json({ data: note });
  });

export default handler;

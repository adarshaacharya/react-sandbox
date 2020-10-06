import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import notes from 'src/data';

const getNote = (id: string) => notes.find((n) => n.id === parseInt(id));

const handler = nc()
  .get((req: NextApiRequest, res: NextApiResponse) => {
    const note = getNote(req.query.id as string); // might be array so
    if (!note) {
      res.status(404);
      res.end();
      return;
    }
    res.json({ data: note });
  })
  .patch((req: NextApiRequest, res: NextApiResponse) => {
    const note = getNote(req.query.id as string);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }
    const i = notes.findIndex((n) => n.id === parseInt(req.query.id as string));
    const updated = { ...note, ...req.body };

    notes[i] = updated;
    res.json({ data: updated });
  })
  .delete((req: NextApiRequest, res: NextApiResponse) => {
    const note = getNote(req.query.id as string);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }
    const i = notes.findIndex((n) => n.id === parseInt(req.query.id as string));

    notes.splice(i, 1);

    res.json({ data: req.query.id });
  });

export default handler;

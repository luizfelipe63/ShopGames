import { NextApiRequest, NextApiResponse } from 'next'

export default function Hello(req: NextApiRequest, res: NextApiResponse) {
  return res.json({ message: 'Hello Wold' })
}

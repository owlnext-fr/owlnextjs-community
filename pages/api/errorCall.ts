import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export const config = {
  api: {
    bodyParser: true,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let results = {};
  
  if (req.method === 'POST' && process.env.INTERNAL_API_MODE === 'prod') {
    try {
      /**
       * INSERT CALL TO DISTANT ERROR API
       */
    } catch (error: any) {
      res.status(500).json(results)
    }
  
    res.status(200).json(results)
  }
}
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: true,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let results = {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjpbIlJPTEVfVEVTVCJdfQ.t6WnwRJbdhV9JlpGMnNleP1vPRUddjkl8YZw7124UYM',
        refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjpbIlJPTEVfVEVTVCJdfQ.t6WnwRJbdhV9JlpGMnNleP1vPRUddjkl8YZw7124UYM'
    };
  
    res.status(200).json(results)
}
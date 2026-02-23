import client from '../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.body;

  if (id) {
    return res.status(200).json({ message: 'id successfully received' });
  }

  console.log('the received id is: ', id);
}

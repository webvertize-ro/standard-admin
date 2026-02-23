import client from '../lib/mongodb.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.body;

  console.log('the received id is: ', id);

  if (id) {
    return res.status(200).json({ message: 'id successfully received' });
  }
}

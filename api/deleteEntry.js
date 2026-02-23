import client from '../lib/mongodb.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.body;

  try {
    const database = client.db('PacheteWebvertize');
    const entries = database.collection('PachetulWebvertizeStandard');

    console.log('the entries are: ', entries);

    const query = { _id: `ObjectId(${id})` };
    const result = await entries.deleteOne(query);
    console.log('the result is: ', result);
  } catch (error) {}
}

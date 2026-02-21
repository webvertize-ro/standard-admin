import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Submission from '../components/Submission';

export default function Admin() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // const entries = [
  //   {
  //     name: 'Ion Popescu',
  //     email: 'ion@test.com',
  //     message: 'Buna ziua!',
  //     date: '21.02.2026',
  //   },
  //   {
  //     name: 'Vasile Ionescu',
  //     email: 'vasile@test.com',
  //     message: 'Buna seara!',
  //     date: '20.02.2026',
  //   },
  // ];

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      window.location.href = '/';
      return;
    }

    async function getData() {
      try {
        const res = await fetch('/api/submissions', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });

        if (!res.ok) {
          setError('Error loading data');
          return;
        }

        const data = await res.json();
        setEntries(data);
      } catch (error) {
        setError('Error loading data');
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  // Show spinner while loading
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <div className="container">
        <h2>Solicitări trimise</h2>

        {error && <p>{error}</p>}
        <div className="container">
          {entries.map((e) => (
            <Submission
              name={e.name}
              email={e.email}
              message={e.message}
              date={e.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

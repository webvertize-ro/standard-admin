import { useState } from 'react';
import Logo from '../components/Logo';
import styled from 'styled-components';
import LoadingSpinner from '../components/LoadingSpinner';

const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 300px;
`;

function Login() {
  const [username, setU] = useState('');
  const [password, setP] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await fetch('/api/login', {
      method: 'POST',

      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error);
      return;
    }

    localStorage.setItem('token', data.token);
    window.location.href = '/admin';
  }

  return (
    <StyledLogin>
      <div className="mb-3">
        <Logo />
      </div>
      <h2 className="mb-4">Admin Login</h2>
      <StyledForm onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setU(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setP(e.target.value)}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          {loading && <LoadingSpinner />}
          Login
        </button>
      </StyledForm>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </StyledLogin>
  );
}

export default Login;

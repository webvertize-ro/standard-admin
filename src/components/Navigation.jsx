import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  /* glassmorphism effect */
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const LogoutButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1.25rem;
  text-transform: uppercase;
  background-color: #88304e;
  color: #fff;
`;

function Navigation() {
  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');

    // Redirect to login page
    window.location.href = '/';
  };

  return (
    <StyledNav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/admin">
          <Logo mode="dark" />
        </Link>

        <div className="d-flex">
          <LogoutButton className="" onClick={handleLogout}>
            Logout
          </LogoutButton>
        </div>
      </div>
    </StyledNav>
  );
}

export default Navigation;

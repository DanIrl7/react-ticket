import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../utils/auth';

const NavContainer = styled.nav`
  background-color: var(--color-primary-dark);
  padding: var(--spacing-md) var(--spacing-lg);
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--box-shadow-sm);
`;

const Logo = styled(Link)`
  font-family: var(--font-family-headings);
  font-size: var(--font-size-large);
  font-weight: 700;
  color: var(--color-white);
  text-decoration: none;

  &:hover {
    color: var(--color-accent);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: var(--spacing-lg);
`;

const NavLink = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  font-size: var(--font-size-base);
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent);
  }
`;

const AuthButton = styled.button`
  background-color: var(--color-accent);
  color: var(--color-white);
  padding: var(--spacing-xs) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: var(--font-size-base);

  &:hover {
    background-color: var(--color-primary-light);
    box-shadow: var(--box-shadow-sm);
  }
`;

function Navbar() {
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <NavContainer>
      <Logo to="/">TicketApp</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        {loggedIn ? (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/tickets">Tickets</NavLink>
            <AuthButton onClick={handleLogout}>Logout</AuthButton>
          </>
        ) : (
          <>
            <NavLink to="/auth/login">Login</NavLink>
            <NavLink to="/auth/signup">Sign Up</NavLink>
          </>
        )}
      </NavLinks>
    </NavContainer>
  );
}

export default Navbar;
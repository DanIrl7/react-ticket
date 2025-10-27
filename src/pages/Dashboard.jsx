import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { logout, isAuthenticated } from '../utils/auth';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
  background-color: var(--color-white);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-sm);

  h1 {
    color: var(--color-primary-dark);
    margin: 0;
    font-size: var(--font-size-xl);
  }
`;

const Nav = styled.nav`
  a {
    margin-left: var(--spacing-lg);
    color: var(--color-primary-dark);
    text-decoration: none;
    font-weight: 500;
    font-size: var(--font-size-base);
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-accent);
    }
  }
`;

const LogoutButton = styled.button`
  background-color: #e74c3c; /* Specific danger color */
  color: var(--color-white);
  padding: var(--spacing-xs) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: var(--spacing-lg);

  &:hover {
    background-color: #c0392b;
    box-shadow: var(--box-shadow-sm);
  }
`;

const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
`;

const StatBox = styled.div`
  background-color: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-sm);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow-md);
  }

  h3 {
    color: var(--color-primary-dark);
    margin-bottom: var(--spacing-sm);
    font-size: var(--font-size-large);
  }

  p {
    font-size: var(--font-size-xxl);
    color: var(--color-accent);
    font-weight: 700;
  }
`;

const Footer = styled.footer`
  background-color: var(--color-primary-dark);
  color: var(--color-white);
  padding: var(--spacing-md);
  text-align: center;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-small);
`;

function Dashboard() {
  const navigate = useNavigate();
  const [totalTickets, setTotalTickets] = useState(0);
  const [openTickets, setOpenTickets] = useState(0);
  const [resolvedTickets, setResolvedTickets] = useState(0);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/auth/login');
    }
    // Simulate fetching data
    setTotalTickets(100);
    setOpenTickets(30);
    setResolvedTickets(70);
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <DashboardContainer>
      <Header>
        <h1>Dashboard</h1>
        <Nav>
          <Link to="/tickets">Ticket Management</Link>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </Nav>
      </Header>

      <StatsSection>
        <StatBox>
          <h3>Total Tickets</h3>
          <p>{totalTickets}</p>
        </StatBox>
        <StatBox>
          <h3>Open Tickets</h3>
          <p>{openTickets}</p>
        </StatBox>
        <StatBox>
          <h3>Resolved Tickets</h3>
          <p>{resolvedTickets}</p>
        </StatBox>
      </StatsSection>

      <Footer>
        &copy; 2025 TicketApp. All rights reserved.
      </Footer>
    </DashboardContainer>
  );
}

export default Dashboard;
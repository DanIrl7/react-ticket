import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TicketManagementContainer = styled.div`
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

const BackButton = styled.button`
  background-color: var(--color-gray-medium);
  color: var(--color-white);
  padding: var(--spacing-xs) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-gray-dark);
    box-shadow: var(--box-shadow-sm);
  }
`;

const TicketList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
`;

const TicketCard = styled.div`
  background-color: var(--color-white);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-sm);
  text-align: left;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow-md);
  }

  h3 {
    color: var(--color-primary-dark);
    margin-bottom: var(--spacing-xs);
    font-size: var(--font-size-large);
  }

  p {
    color: var(--color-gray-dark);
    font-size: var(--font-size-small);
    margin-bottom: var(--spacing-xxs);
  }
`;

const StatusTag = styled.span`
  display: inline-block;
  padding: var(--spacing-xxs) var(--spacing-xs);
  border-radius: var(--border-radius-sm);
  font-size: 0.75em;
  font-weight: 700;
  color: var(--color-white);
  background-color: ${(props) => {
    switch (props.status) {
      case 'open':
        return '#27ae60'; /* Green */
      case 'in_progress':
        return '#f39c12'; /* Orange */
      case 'closed':
        return '#7f8c8d'; /* Gray */
      default:
        return '#7f8c8d';
    }
  }};
  margin-top: var(--spacing-sm);
`;

const ActionButtons = styled.div`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: var(--font-size-medium);
    margin-left: var(--spacing-xs);
    color: var(--color-primary-dark);
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-accent);
    }
  }
`;

const FormContainer = styled.div`
  background-color: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-sm);
  margin-bottom: var(--spacing-xl);
  text-align: left;

  h2 {
    color: var(--color-primary-dark);
    margin-bottom: var(--spacing-lg);
    font-size: var(--font-size-xl);
  }
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-md);

  label {
    display: block;
    margin-bottom: var(--spacing-xxs);
    color: var(--color-text-dark);
    font-weight: 500;
    font-size: var(--font-size-base);
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: var(--spacing-xs);
    border: 1px solid var(--color-gray-medium);
    border-radius: var(--border-radius-sm);
    box-sizing: border-box;
    font-size: var(--font-size-base);
    font-family: var(--font-family-base);

    &:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
    }
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }
`;

const SubmitButton = styled.button`
  background-color: var(--color-accent);
  color: var(--color-white);
  padding: var(--spacing-sm) var(--spacing-lg);
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-medium);
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: var(--spacing-md);

  &:hover {
    background-color: darken(var(--color-accent), 10%);
    box-shadow: var(--box-shadow-sm);
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c; /* Specific error color */
  font-size: var(--font-size-small);
  margin-top: var(--spacing-xxs);
`;

const Footer = styled.footer`
  background-color: var(--color-primary-dark);
  color: var(--color-white);
  padding: var(--spacing-md);
  text-align: center;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-small);
`;

function TicketManagement() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState({
    id: null,
    title: '',
    description: '',
    status: 'open',
    priority: 'low',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const sessionToken = localStorage.getItem('ticketapp_session');
    if (!sessionToken) {
      navigate('/auth/login');
    }
    // Simulate fetching tickets
    setTickets([
      { id: 1, title: 'Fix login bug', description: 'Users cannot log in', status: 'open', priority: 'high' },
      { id: 2, title: 'Implement new feature', description: 'Add a new dashboard widget', status: 'in_progress', priority: 'medium' },
      { id: 3, title: 'Update styling', description: 'Refresh the UI design', status: 'closed', priority: 'low' },
    ]);
  }, [navigate]);

  const validateForm = () => {
    const newErrors = {};
    if (!form.title) newErrors.title = 'Title is mandatory';
    if (!['open', 'in_progress', 'closed'].includes(form.status)) newErrors.status = 'Invalid status value';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (form.id) {
        // Update ticket
        setTickets(tickets.map((ticket) => (ticket.id === form.id ? form : ticket)));
      } else {
        // Create new ticket
        setTickets([...tickets, { ...form, id: tickets.length + 1 }]);
      }
      setForm({ id: null, title: '', description: '', status: 'open', priority: 'low' });
    }
  };

  const handleEdit = (ticket) => {
    setForm({ ...ticket });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this ticket?')) {
      setTickets(tickets.filter((ticket) => ticket.id !== id));
    }
  };

  return (
    <TicketManagementContainer>
      <Header>
        <h1>Ticket Management</h1>
        <BackButton onClick={() => navigate('/dashboard')}>Back to Dashboard</BackButton>
      </Header>

      <FormContainer>
        <h2>{form.id ? 'Edit Ticket' : 'Create New Ticket'}</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
            {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
            ></textarea>
          </FormGroup>
          <FormGroup>
            <label htmlFor="status">Status</label>
            <select id="status" name="status" value={form.status} onChange={handleChange}>
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
            {errors.status && <ErrorMessage>{errors.status}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <label htmlFor="priority">Priority</label>
            <select id="priority" name="priority" value={form.priority} onChange={handleChange}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </FormGroup>
          <SubmitButton type="submit">{form.id ? 'Update Ticket' : 'Create Ticket'}</SubmitButton>
        </form>
      </FormContainer>

      <TicketList>
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id}>
            <ActionButtons>
              <button onClick={() => handleEdit(ticket)}>✏️</button>
              <button onClick={() => handleDelete(ticket.id)}>🗑️</button>
            </ActionButtons>
            <h3>{ticket.title}</h3>
            <p>Description: {ticket.description}</p>
            <p>Priority: {ticket.priority}</p>
            <StatusTag status={ticket.status}>{ticket.status.replace('_', ' ')}</StatusTag>
          </TicketCard>
        ))}
      </TicketList>

      <Footer>
        &copy; 2025 TicketApp. All rights reserved.
      </Footer>
    </TicketManagementContainer>
  );
}

export default TicketManagement;
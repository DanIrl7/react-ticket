import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { register } from '../utils/auth';

const AuthContainer = styled.div`
  max-width: 400px;
  margin: var(--spacing-xl) auto;
  padding: var(--spacing-xl);
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-md);
  text-align: center;
`;

const Title = styled.h2`
  color: var(--color-primary-dark);
  margin-bottom: var(--spacing-xl);
  font-size: var(--font-size-xl);
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-lg);
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-dark);
  font-weight: 500;
  font-size: var(--font-size-base);
`;

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-sm);
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
`;

const ErrorMessage = styled.p`
  color: #e74c3c; /* Specific error color */
  font-size: var(--font-size-small);
  margin-top: var(--spacing-xxs);
`;

const SubmitButton = styled.button`
  background-color: var(--color-primary-dark);
  color: var(--color-white);
  padding: var(--spacing-sm) var(--spacing-lg);
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-medium);
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: var(--spacing-md);

  &:hover {
    background-color: var(--color-primary-light);
    box-shadow: var(--box-shadow-sm);
  }
`;

const LinkText = styled.p`
  margin-top: var(--spacing-lg);
  color: var(--color-gray-dark);
  font-size: var(--font-size-base);

  a {
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Register user
      const result = await register(email, password);
      if (result.success) {
        navigate('/auth/login');
      } else {
        setErrors({ general: 'Registration failed' });
      }
    }
  };

  return (
    <AuthContainer>
      <Title>Sign Up</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
        </FormGroup>
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </form>
      <LinkText>
        Already have an account? <a href="/auth/login">Login</a>
      </LinkText>
    </AuthContainer>
  );
}

export default SignupPage;
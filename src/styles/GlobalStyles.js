import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary-dark: #2c3e50;
    --color-primary-light: #34495e;
    --color-accent: #42b983;
    --color-text-light: #ecf0f1;
    --color-text-dark: #2c3e50;
    --color-background-light: #f4f7f6;
    --color-background-dark: #2c3e50;
    --color-white: #ffffff;
    --color-gray-light: #ecf0f1;
    --color-gray-medium: #bdc3c7;
    --color-gray-dark: #7f8c8d;

    --font-family-base: 'Roboto', sans-serif;
    --font-family-headings: 'Montserrat', sans-serif;

    --font-size-small: 0.875rem;
    --font-size-base: 1rem;
    --font-size-medium: 1.125rem;
    --font-size-large: 1.5rem;
    --font-size-xl: 2rem;
    --font-size-xxl: 3rem;

    --spacing-xxs: 4px;
    --spacing-xs: 8px;
    --spacing-sm: 12px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-xxl: 48px;

    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;

    --box-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    --box-shadow-md: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    --box-shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--font-family-base);
    color: var(--color-text-dark);
    background-color: var(--color-background-light);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-headings);
    color: var(--color-primary-dark);
    margin-bottom: var(--spacing-md);
    line-height: 1.2;
  }

  h1 { font-size: var(--font-size-xxl); }
  h2 { font-size: var(--font-size-xl); }
  h3 { font-size: var(--font-size-large); }
  h4 { font-size: var(--font-size-medium); }
  h5 { font-size: var(--font-size-base); }
  h6 { font-size: var(--font-size-small); }

  p {
    margin-bottom: var(--spacing-md);
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--color-primary-dark);
  }

  button {
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
  }

  button.primary {
    background-color: var(--color-primary-dark);
    color: var(--color-white);
  }

  button.primary:hover {
    background-color: var(--color-primary-light);
  }

  button.accent {
    background-color: var(--color-accent);
    color: var(--color-white);
  }

  button.accent:hover {
    background-color: darken(var(--color-accent), 10%);
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  textarea {
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    padding: var(--spacing-xs);
    border: 1px solid var(--color-gray-medium);
    border-radius: var(--border-radius-sm);
    width: 100%;
    max-width: 300px;
    margin-bottom: var(--spacing-md);
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
  }
`;

export default GlobalStyles;
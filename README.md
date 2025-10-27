# React Ticket Management Application

This project is a React implementation of a robust ticket management web application, designed to deliver a seamless user experience with a consistent layout and design language.

## Core Features

1.  **Landing Page**: Presents the app's name, description, and Call-to-Action buttons ("Login" and "Get Started"). Features a wavy background, decorative circles, and box-shaped sections. The layout is responsive and centered with a max-width of 1440px. Includes a consistent footer.

2.  **Authentication Screen**:
    *   **Login and Signup pages** with form validation.
    *   Inline error messages and toast/snackbar notifications for feedback.
    *   Redirects to the Dashboard on successful authentication.
    *   Authentication is simulated using `localStorage` with the key `ticketapp_session`.

3.  **Dashboard**:
    *   Displays summary statistics (Total, Open, Resolved tickets).
    *   Includes navigation links to the Ticket Management screen.
    *   Visible Logout button that clears the session and redirects to the Login screen.
    *   Follows the same visual structure and container width rule (max-width: 1440px, centered layout).

4.  **Ticket Management Screen (CRUD)**:
    *   **Create**: Form to create new tickets.
    *   **Read**: Displays a list of existing tickets using card-style boxes with status tags.
    *   **Update**: Edits existing ticket details with form validation.
    *   **Delete**: Allows users to remove tickets with a confirmation step.
    *   All actions include real-time validation and display clear success or error feedback.

## Data Validation Mandates

*   `title` and `status` fields are mandatory.
*   `status` field strictly accepts "open", "in_progress", "closed".
*   Validation errors are displayed in a user-friendly manner (inline).
*   Optional fields (description, priority) are validated for length/type where applicable.

## Flawless Error Handling

*   Consistent error-handling system for:
    *   Invalid form inputs (e.g., empty title).
    *   Unauthorized access (redirects users to Login).
    *   Failed network/API calls (simulated with inline messages).
*   Clear and descriptive error messages are used.

## Security & Authorization

*   Dashboard and Ticket Management pages are protected, accessible only with a valid session token.
*   Authentication simulation uses `localStorage` with the key `ticketapp_session`.
*   Unauthorized users attempting to access restricted routes are redirected to `/auth/login`.
*   Logout clears the session and returns the user to the landing page.

## Layout and Design Consistency Requirements

*   **Max Width**: Content is centered with `max-width: 1440px` on large screens.
*   **Hero Section**: Includes a wavy SVG background at the bottom edge.
*   At least one decorative circle (CSS or SVG) overlaps the hero section.
*   **Other Sections**: Uses card-like boxes for stats, tickets, or features. Includes at least two circular decorative elements across the site.
*   **Responsive Behavior**:
    *   Mobile: stacked layout with collapsible navigation (simulated).
    *   Tablet/Desktop: multi-column grid and consistent spacing.
*   **Color & Status Rules**:
    *   `open` → Green tone
    *   `in_progress` → Amber tone
    *   `closed` → Gray tone
*   **Accessibility**: Uses semantic HTML, alt text (where applicable), visible focus states, and sufficient color contrast.

## Frameworks and Libraries Used

*   **React**: Frontend JavaScript library for building user interfaces.
*   **React Router DOM**: For declarative routing in React applications.
*   **Styled Components**: For writing CSS in JavaScript to style components.

## Setup and Execution Steps

1.  **Clone the repository**: (If this were a fresh clone)
    ```bash
    git clone [repository-url]
    cd react-ticket
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Instructions for Switching Between React, Vue, and Twig Versions

This `README.md` specifically details the React implementation. Separate directories or branches would contain the Vue.js and Twig implementations, each with their own `README.md` files detailing their setup and usage.

## Short Explanation of UI Components and State Structure

*   **`App.jsx`**: Main application component, sets up routing and global styles.
*   **`GlobalStyles.js`**: Defines global CSS styles using Styled Components.
*   **`pages/LandingPage.jsx`**: Displays the initial landing page with hero section, features, and footer. Manages no local state.
*   **`pages/LoginPage.jsx`**: Handles user login, local state for email/password, form validation, and redirects on success/failure.
*   **`pages/SignupPage.jsx`**: Handles user registration, local state for email/password/confirm password, form validation, and redirects on success.
*   **`pages/Dashboard.jsx`**: Displays summary statistics, navigation, and logout functionality. Fetches simulated ticket data.
*   **`pages/TicketManagement.jsx`**: Provides CRUD operations for tickets. Manages local state for tickets and form inputs, includes validation.
*   **`components/PrivateRoute.jsx`**: A higher-order component to protect routes based on authentication status.
*   **`utils/auth.js`**: Utility functions for simulating login, logout, and checking authentication status using `localStorage`.

## Notes on Accessibility and Known Issues

*   **Accessibility**: Semantic HTML elements are used. Basic color contrast is considered. Further enhancements for keyboard navigation and screen reader support can be implemented.
*   **Known Issues**:
    *   Toast/snackbar notifications are not yet implemented; inline error messages are used for now.
    *   API calls are simulated using local state and `localStorage`. A real backend would require actual API integration.
    *   Responsive design is implemented with basic media queries; further fine-tuning for various devices may be needed.

## Example Test User Credentials

*   **Email**: `test@example.com`
*   **Password**: `password`

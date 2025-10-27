export const register = async (email, password) => {
  // Store user credentials in localStorage
  localStorage.setItem(`user_${email}`, JSON.stringify({ email, password }));
  return { success: true };
};

export const login = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Get stored user data
      const userData = localStorage.getItem(`user_${email}`);
      
      if (userData) {
        const user = JSON.parse(userData);
        if (user.password === password) {
          localStorage.setItem('ticketapp_session', 'mock-token-123');
          resolve({ success: true });
        } else {
          resolve({ success: false, message: 'Invalid email or password' });
        }
      } else {
        resolve({ success: false, message: 'User not found' });
      }
    }, 500); // Simulate network delay
  });
};

export const logout = () => {
  localStorage.removeItem('ticketapp_session');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('ticketapp_session');
};
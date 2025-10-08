import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

// Custom hook cho việc fetch data từ API
export const useAPI = (endpoint, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await endpoint();
        setData(result);
      } catch (err) {
        setError(err);
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
};

// Hook cho personal info
export const usePersonalInfo = () => {
  return useAPI(() => apiService.getPersonalInfo());
};

// Hook cho projects
export const useProjects = (category = null) => {
  return useAPI(() => apiService.getProjects(category), [category]);
};

// Hook cho skills
export const useSkills = () => {
  return useAPI(() => apiService.getSkills());
};

// Hook cho settings
export const useSettings = () => {
  return useAPI(() => apiService.getSettings());
};

// Hook cho contact form
export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendMessage = async (formData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      await apiService.sendMessage(formData);
      setSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, error, success };
};

// Hook cho admin authentication
export const useAdminAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const result = await apiService.checkAuth();
      setAuthenticated(result.authenticated);
      setUser(result.user);
    } catch (error) {
      setAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      const result = await apiService.login(credentials);
      setAuthenticated(true);
      setUser(result.user);
      localStorage.setItem('admin_token', 'dummy_token'); // In real app, use JWT
      return result;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await apiService.logout();
      setAuthenticated(false);
      setUser(null);
      localStorage.removeItem('admin_token');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return { authenticated, user, loading, login, logout, checkAuth };
};

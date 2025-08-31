import { useState, useEffect, useCallback } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

interface User {
  id: string;
  email: string;
  user_metadata?: {
    full_name?: string;
  };
}

interface AuthState {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    isAuthenticated: false,
    isAdmin: false,
  });

  // Initialize Netlify Identity
  useEffect(() => {
    netlifyIdentity.init({
      namePlaceholder: "Full Name",
    });

    // Check if user is already logged in
    const currentUser = netlifyIdentity.currentUser();
    if (currentUser) {
      const isUserAdmin = currentUser.email === 'orelnew@gmail.com';
      setAuthState({
        user: currentUser as User,
        loading: false,
        isAuthenticated: true,
        isAdmin: isUserAdmin,
      });
    } else {
      setAuthState(prev => ({ ...prev, loading: false }));
    }

    // Listen for auth events
    const handleLogin = (user: any) => {
      const isUserAdmin = user.email === 'orelnew@gmail.com';
      setAuthState({
        user: user as User,
        loading: false,
        isAuthenticated: true,
        isAdmin: isUserAdmin,
      });
      netlifyIdentity.close();
    };

    const handleLogout = () => {
      setAuthState({
        user: null,
        loading: false,
        isAuthenticated: false,
        isAdmin: false,
      });
    };

    const handleError = (error: any) => {
      console.error('Auth error:', error);
      setAuthState(prev => ({ ...prev, loading: false }));
    };

    netlifyIdentity.on('login', handleLogin);
    netlifyIdentity.on('logout', handleLogout);
    netlifyIdentity.on('error', handleError);

    // Cleanup
    return () => {
      netlifyIdentity.off('login', handleLogin);
      netlifyIdentity.off('logout', handleLogout);
      netlifyIdentity.off('error', handleError);
    };
  }, []);

  const login = useCallback(() => {
    netlifyIdentity.open('login');
  }, []);

  const logout = useCallback(() => {
    netlifyIdentity.logout();
  }, []);

  const signup = useCallback(() => {
    netlifyIdentity.open('signup');
  }, []);

  return {
    ...authState,
    login,
    logout,
    signup,
  };
};
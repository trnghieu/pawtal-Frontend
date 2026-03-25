import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { AuthAPI } from '../api/services';

const AuthContext = createContext(null);
const TOKEN_KEY = 'pawtal_token';
const USER_KEY = 'pawtal_user';

function readStoredUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
  const [user, setUser] = useState(() => readStoredUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    const storedUser = readStoredUser();

    if (!storedToken) {
      setLoading(false);
      return;
    }

    if (storedUser) {
      setUser(storedUser);
      setToken(storedToken);
      setLoading(false);
      AuthAPI.me().then((res) => {
        const nextUser = res.data?.data || res.data?.user || storedUser;
        setUser(nextUser);
        localStorage.setItem(USER_KEY, JSON.stringify(nextUser));
      }).catch(() => {});
      return;
    }

    AuthAPI.me()
      .then((res) => {
        const nextUser = res.data?.data || res.data?.user || { authenticated: true };
        setUser(nextUser);
        setToken(storedToken);
        localStorage.setItem(USER_KEY, JSON.stringify(nextUser));
      })
      .catch(() => {
        setToken(storedToken);
        setUser({ authenticated: true });
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (credentials) => {
    const res = await AuthAPI.login(credentials);
    const nextToken = res.data?.token || res.data?.data?.token || null;
    const nextUser = res.data?.user || res.data?.data?.user || { email: credentials.email, authenticated: true };
    if (nextToken) {
      localStorage.setItem(TOKEN_KEY, nextToken);
      setToken(nextToken);
    }
    localStorage.setItem(USER_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
    return res;
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setToken(null);
    setUser(null);
  };

  const value = useMemo(() => ({ user, token, loading, isAuthenticated: !!token || !!user, login, logout }), [user, token, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth phải được dùng trong AuthProvider');
  return ctx;
}

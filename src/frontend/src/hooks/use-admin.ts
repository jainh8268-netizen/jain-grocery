import { useCallback, useState } from "react";

const ADMIN_TOKEN_KEY = "jain_grocery_admin_token";

export function useAdmin() {
  // Initialize directly from localStorage — token is permanent until manual logout
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem(ADMIN_TOKEN_KEY),
  );

  const saveToken = useCallback((newToken: string) => {
    localStorage.setItem(ADMIN_TOKEN_KEY, newToken);
    setToken(newToken);
  }, []);

  const clearToken = useCallback(() => {
    localStorage.removeItem(ADMIN_TOKEN_KEY);
    setToken(null);
  }, []);

  return {
    token,
    isLoggedIn: token !== null && token.length > 0,
    saveToken,
    clearToken,
  };
}

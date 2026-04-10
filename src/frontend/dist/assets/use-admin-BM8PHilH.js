import { r as reactExports } from "./index-BUXfmnrd.js";
const ADMIN_TOKEN_KEY = "jain_grocery_admin_token";
function useAdmin() {
  const [token, setToken] = reactExports.useState(
    () => localStorage.getItem(ADMIN_TOKEN_KEY)
  );
  const saveToken = reactExports.useCallback((newToken) => {
    localStorage.setItem(ADMIN_TOKEN_KEY, newToken);
    setToken(newToken);
  }, []);
  const clearToken = reactExports.useCallback(() => {
    localStorage.removeItem(ADMIN_TOKEN_KEY);
    setToken(null);
  }, []);
  return {
    token,
    isLoggedIn: token !== null && token.length > 0,
    saveToken,
    clearToken
  };
}
export {
  useAdmin as u
};

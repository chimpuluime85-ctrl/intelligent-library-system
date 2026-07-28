import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  loginUser,
  registerUser,
  getProfile,
} from "../services/authService";

const AuthContext =
  createContext();

export const AuthProvider = ({
  children,
}) => {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const login = async (
    credentials
  ) => {
    const data =
      await loginUser(credentials);

    localStorage.setItem(
      "token",
      data.token
    );

    setUser(data.user);

    return data;
  };

  const register = async (
    userData
  ) => {
    const data =
      await registerUser(userData);

    localStorage.setItem(
      "token",
      data.token
    );

    setUser(data.user);

    return data;
  };

  const logout = () => {
    localStorage.removeItem(
      "token"
    );

    setUser(null);
  };

  useEffect(() => {
    const loadUser =
      async () => {
        try {
          const token =
            localStorage.getItem(
              "token"
            );

          if (!token) {
            setLoading(false);
            return;
          }

          const data =
            await getProfile();

          setUser(data.user);
        } catch (error) {
          localStorage.removeItem(
            "token"
          );

          setUser(null);
        } finally {
          setLoading(false);
        }
      };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);
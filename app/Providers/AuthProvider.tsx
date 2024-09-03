import { createContext, useContext, useState } from "react";

// Define the type for auth context
interface AuthContextType {
  user: User | null;
  handleSetUser: (user: User, type: "admin" | "owner" | null) => void;
}

// Create a default value for the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the AuthProvider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  function handleSetUser(user: User) {
    setUser(user);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        handleSetUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

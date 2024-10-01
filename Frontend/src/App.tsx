// src/App.tsx
import { useState, useEffect } from 'react';
import { User } from 'firebase/auth'; // or wherever the User type is defined
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import routes from "./routes/routes";
import { auth } from "./services/firebase";
import AuthChecker from "./context/AuthChecker";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.protected ? (
                <AuthChecker>
                  {user ? <route.component /> : <Navigate to="/login" replace />}
                </AuthChecker>
              ) : (
                user ? <Navigate to="/home" replace /> : <route.component />
              )
            }
          />
        ))}
        <Route path="*" element={<Navigate to={user ? "/home" : "/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
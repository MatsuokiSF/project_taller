// src/App.tsx
import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import routes from "./routes/routes";
import Login from './pages/Login';
import { auth } from "./services/firebase";
import AuthChecker from "./context/AuthChecker";
import LoadingSpinner from './components/LoadingSpinner';
import Layout from './Layout';

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

  if (loading) return <LoadingSpinner />;

  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas sin Layout */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" replace />} />

        {/* Rutas protegidas dentro de Layout */}
        <Route element={user ? <Layout /> : <Navigate to="/login" replace />}>
          {routes.map((route, index) => (
            route.protected && (
              <Route
                key={index}
                path={route.path}
                element={<AuthChecker><route.component /></AuthChecker>}
              />
            )
          ))}
        </Route>

        {/* Ruta de fallback en caso de rutas no definidas */}
        <Route path="*" element={<Navigate to={user ? "/home" : "/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

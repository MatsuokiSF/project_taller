//src /context/AuthContainer.tsx
import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, Providers } from "../services/firebase";

const AuthContainer: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, Providers.google);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(`Error: ${error.message}`);
      } else {
        setErrorMessage("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button 
        className="text-googlefont font-sm py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline" 
        type="button" 
        onClick={signInWithGoogle} 
        disabled={isLoading}
        >
        <p>
          No tienes Cuenta?
          <a>
            <span className="font-bold text-blue-700 ">Registrate</span>
          </a>
        </p>
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} 
      {/*Utilizar alguna libreria que permita enviar el mensaje desplegable (Formato mas amigable) */}
      
    </div>
  );
};

export default AuthContainer;
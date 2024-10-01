// src /components/auth/logout.tsx
//En primera version el boton de logout se encuentra en Home por temas de entender las 2 primeras paginas
// Por tanto en la segunda version se espera un nav bar que incluya el boton de logout, donde se renderiza el componente Logout
// Ojo con la forma en que estas renderizando los botones
import { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";

interface Props {
  navigateTo?: string;
}

const Logout = ({ navigateTo = "/login" }: Props) => {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    setDisabled(true);
    signOut(auth)
      .then(() => {
        navigate(navigateTo);
      })
      .catch((error) => {
        console.error(error);
        setDisabled(false);
      });
  };

  return (
    <div>
      <button disabled={disabled} onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContainer from "../../context/AuthContainer";
import logouach from '../../assets/logo_uach.svg';
import logoinfor from '../../assets/logo-infor.png';
import { signInWithPopup } from "firebase/auth";
import { auth, Providers } from "../../services/firebase";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedAuthMethod, setSelectedAuthMethod] = useState<"email" | "google" | null>(null);
    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // Implementar la lógica de inicio de sesión aquí con Correo y Contraseña
            navigate('/home');
        } catch (err) {
            console.error('Error al iniciar sesión:', err);
            setError('Error al iniciar sesión. Verifica tus credenciales.');
        }
    };

    const signInWithGoogle = async () => {
        setIsLoading(true);
        try {
            await signInWithPopup(auth, Providers.google);
            navigate("/home");
        } catch (error) {
            if (error instanceof Error) {
                setError(`Error: ${error.message}`);
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-[300px] h-[460px] bg-login shadow-lg rounded-3xl flex flex-col justify-between p-10">
            <div className="flex justify-center gap-10">
                <img src={logouach} className="w-14" alt="Logo UACH" />
                <img src={logoinfor} className="w-14" alt="Logo Infor" />
            </div>

            {/* Botones de selección de método de autenticación */}
            {!selectedAuthMethod && (
                <div className="flex flex-col space-y-4 mb-4">
                    <button
                        onClick={() => setSelectedAuthMethod("email")}
                        className="w-full h-full py-2 font-bold rounded-lg bg-gray-200 text-gray-700 hover:bg-cream hover:text-white"
                    >
                        Email
                    </button>
                    <button
                        onClick={() => {
                            setSelectedAuthMethod("google");
                            signInWithGoogle();
                        }}
                        className="w-full py-2 font-bold rounded-lg bg-white text-gray-700 border border-gray-300 hover:bg-blue-300 flex items-center justify-center"
                    >
                        <span className="mr-2">Google</span>
                        {/* Aquí se podría agregar un icono de Google si es necesario */}
                    </button>
                </div>

            )}
            {/* Formulario de autenticación por Email */}
            {selectedAuthMethod === "email" && (
                <form className="flex flex-col space-y-3" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-1 pl-1" htmlFor="email">
                            Usuario
                        </label>
                        <input
                            className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Ingresa tu correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-1 pl-1" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="text-center text-sm mt-2">
                        <a href="/auth/register" className="font-bold text-black">  
                            ¿Olvidó su Contraseña?
                        </a>
                    </div>
                    {error && <p className="text-red-500 text-xs italic">{error}</p>}
                    <button
                        className="bg-cream hover:bg-cream-dark text-gray-700 font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Acceder
                    </button>
                </form>
            )}
            <AuthContainer />
        </div>
    );
};

export default LoginForm;

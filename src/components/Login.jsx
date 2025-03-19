import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Login = () => {

    const googleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        } catch (err) {
            console.error("Error en la autenticación:", err);
        }
    };


    return (
        <>
                <button className="btn-login" onClick={googleLogin}>
                  <i className="fa-brands fa-google"></i>
                  Iniciar sesión con Google
                </button>
        
        </>
    );
};

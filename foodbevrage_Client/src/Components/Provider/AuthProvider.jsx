import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";



export const AuthContext = createContext({ auth: null });
// eslint-disable-next-line react-refresh/only-export-components
//  const auth = getAuth(ap);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();



// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }



    const signInWithGoogle = async () => {
        setLoading(true);
        try {
            // Sign in with Google using a popup window
            await signInWithPopup(auth, googleProvider);
            setLoading(false);
        } catch (error) {
            console.error("Google Sign-In Error:", error);
            setLoading(false);
        }
    };
    

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        auth,
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from 'firebase/auth';
import { React, createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

export const AutnContext = createContext();

export const userAuth = () => {
    const context = useContext(AutnContext);
    if (!context) throw new Error('There is no auth provider');
    return context;
};
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const login = async (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    const resetPassword = email => sendPasswordResetEmail(auth, email);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AutnContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle, resetPassword }}>
            {children}
        </AutnContext.Provider>
    );
}

import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeFirebase from "./Firebase.init";



initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isloading, setIsloading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithgoogle = () => {
        return signInWithPopup(auth, googleProvider)
    };
    const signUpWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => setError(error.message))
            .finally(() => {
                setIsloading(false)
            })
    };
    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => setError(error.message))
            .finally(() => {
                setIsloading(false)
            })
    };
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsloading(false)
        })
    }, []);
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    };
    return (
        {
            user,
            error,
            signInWithgoogle,
            signUpWithEmail,
            signInWithEmail,
            isloading,
            logOut
        }
    )
};
export default useFirebase;








































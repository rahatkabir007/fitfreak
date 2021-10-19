import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
          
        
    }
    
    //observing user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
        .finally(()=> setIsLoading(false));
    }
    
    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading
    }
};

export default useFirebase;
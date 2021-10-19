import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,sendEmailVerification,updateProfile} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
          
        
    }
    //form behaviour er jonne page reload hoi jai...tai ota prevent korte ei function
    const handleSignupSignin = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must Be At Least 6 Characters Long!');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must Contain Two Uppercase');
            return;
        }
        createNewUser(email, password);
        processLogin(email, password);
    }

    const createNewUser = (email, password) => {
         return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log((user));
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
        .then(result => {})
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
            
        })
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {

        setPassword(e.target.value);
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
        isLoading,
        error,
        handleSignupSignin,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        signInUsingGoogle,
        logOut,
        
      
    }
};

export default useFirebase;
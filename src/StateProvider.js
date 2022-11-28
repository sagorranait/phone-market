import React, { createContext, useEffect, useState } from 'react';
import { 
   createUserWithEmailAndPassword, 
   signInWithEmailAndPassword, 
   onAuthStateChanged, 
   signInWithPopup, 
   updateProfile,
   signOut
} from 'firebase/auth';

import { auth } from './firebase.config';
import axios from 'axios';


export const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [currentUser, setCurrentUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);   
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
      // Getting the user info from the MongoDB
     axios.get(`http://localhost:5000/user?email=${user?.email}`)
     .then(result => {
        setCurrentUser(result?.data[0]);
     })
     .catch((error) => {
           console.log(error);
     });
    }, [user?.email]);
    

    const authInfo = { 
        user,
        setUser,
        loading, 
        setLoading,
        register, 
        login,
        logOut, 
        providerLogin, 
        updateUserProfile,
        currentUser,
        setCurrentUser
    };

    return (
        <StateContext.Provider value={authInfo}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;
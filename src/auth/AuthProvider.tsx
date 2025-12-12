import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase/firebase.config';


import {

  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  type User,
  sendEmailVerification,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";

// 1. Define type
interface AuthContextType {
  createAccount: (email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  loading: boolean;
  user: User | null;
  verificationViaEmail:()=>Promise<any>;
  googleLogin:()=>Promise<any>;
  logout:()=>Promise<any>;
}

// 2. Create context with type
export const AuthContext = createContext<AuthContextType | null>(null);



const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const provider = new GoogleAuthProvider();
  const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  const createAccount = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const verificationViaEmail = () => {
    setLoading(true);
    
    if (auth.currentUser) {
      return sendEmailVerification(auth.currentUser);
    } else {
      setLoading(false);
      return Promise.reject("No user is currently logged in.");
    }
  };
  const logout =()=>{
    return signOut(auth)
  }

  const userInfo =async(data:any)=>{
    if(!data){
      return 
    }
    try {
       await axios.post('https://aadymart-backend.onrender.com/api/user/create',data)
    
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     
      const userDetails ={
        displayName :currentUser?.displayName,
        email:currentUser?.email
      }
      userInfo(userDetails)
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const authInfo: AuthContextType = {
    createAccount,
    login,
    verificationViaEmail,
    loading,
    user,
    googleLogin,
    logout
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

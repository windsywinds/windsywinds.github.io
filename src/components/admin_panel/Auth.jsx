import React from "react";

import { useState, useEffect, useRef } from "react";

import { db, auth, googleProvider } from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  signOut,
  signInWithRedirect,
} from "firebase/auth";

import { View } from "./View";

const Auth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [loginError, setLoginError] = useState('')
  const loginDropDownRef = useRef(null);

  const signInWithEmail = async () => {
    try {
      // Sign in with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      // Check if the user exists and the credentials are correct
      if (user) {
        setLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        checkAuthState();
        setShowDropdown(false);
      } else {
        console.log("Invalid credentials");
        setLoginError("Invalid credentials")
      }
    } catch (error) {
      console.error(error);
      setLoginError("Error logging in: Invalid credentials")
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      checkAuthState();
      setShowDropdown(false);
    } catch (error) {
      console.error(error);
      setLoginError("Error logging in with Google")
    }
  };

  const logoutClick = async () => {
    try {
      try {
        await signOut(auth);
        window.top.location = window.top.location; //refresh html only
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkAuthState = async () => {
    try {
      const user = await new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(resolve, reject);
        return () => unsubscribe();
      });

      if (user) {
        setLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("isOwner", "true");
        setLoginError('')
      } else {
        localStorage.setItem("isLoggedIn", "false");
      }
    } catch (error) {
      console.error("Error checking auth state:", error);
      setLoginError("Error verifying authorisation.")
    }
  };

  useEffect(() => {
    checkAuthState();

    // Other useEffect cleanup or dependencies, if needed
  }, []);

  const handleClickOutsideLogin = (event) => {
    if (
      loginDropDownRef.current &&
      !loginDropDownRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
      setLoginError('')
    } else {
      null;
    }
  };
  useEffect(() => {
    //Handle click outside user Login dropdown box
    document.addEventListener("mousedown", handleClickOutsideLogin);
    

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideLogin);
      
    };
  }, []);

  return (
    <div className="w-full">
      {!loggedIn ? (
        <div className="flex w-1/3 bg-[#1d1a18]">
          <div
            className="flex w-1/6 h-[50px] z-9 absolute cursor-default"
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
          ></div>
        </div>
      ) : (
        <div className="flex w-1/6 py-2 px-2">
          <button
            className="bg-slate-200 rounded-xl pl-2 outline-none w-full py-2"
            onClick={logoutClick}
          >
            Logout
          </button>
        </div>
      )}

      {showDropdown && (
        <div className="fixed inset-0 flex justify-center items-center bg-slate-900 bg-opacity-95 text-black">
          <div
            className="bg-white border border-gray-300 rounded-xl shadow p-5 w-full max-w-xl"
            ref={loginDropDownRef}
          >
            <div className="flex flex-col w-full">
              <div className="flex flex-col pb-0">
                <div className="flex items-center justify-center pb-2 text-2xl font-bold">
                  <p>Admin Login</p>
                </div>
                <div className="pb-2">
                  <input
                    className="bg-slate-200 rounded-xl pl-2 outline-none w-full py-2"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="pb-2">
                  <input
                    className="bg-slate-200 rounded-xl pl-2 outline-none w-full py-2"
                    placeholder="Enter password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="font-bold text-red-500 text-2xl">{loginError ? (<p>{loginError}</p>) : (<p className="h-[20px]"></p>)}</div>
                <div className="flex flex-row pt-3">
                  <div className="pl-3">
                    <button
                      className="flex items-center justify-center whitespace-nowrap button-72 bg-blue-500 text-white hover:bg-blue-600 font-semibold rounded-xl py-2 px-6 transition-colors duration-400 ease-in-out shadow-sm"
                      onClick={signInWithEmail}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex w-full">{loggedIn && <View />}</div>
    </div>
  );
};
export default Auth;

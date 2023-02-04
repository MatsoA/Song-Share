// Initialize Firebase
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebaseApp, authProvider } from "./firebaseConfig";
import { useState, useEffect } from "react";

//userDetails and setUserDetails expected to be passed in from App.js

//Google Authentication Documentation: https://firebase.google.com/docs/auth/web/google-signin?authuser=0#handle_the_sign-in_flow_with_the_firebase_sdk

export default function Signin({userDetails, setUserDetails}) {

    //needed for signInWithPopup
    const auth = getAuth();

    //use effect hook allows us to handle behavior after promise correctly (useEffect waits for a change)
    //https://upmostly.com/tutorials/how-to-handle-promises-in-react
    useEffect(() => {
        
        //Trigger popup
        signInWithPopup(auth, authProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                console.log(user);
                
                //after popup is completed, update values of userDetails 
                setUserDetails({
                    userName: user.displayName,
                    email: user.email,
                    profilePicture: user.photoURL
                });
                

                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });


    }, [])

}


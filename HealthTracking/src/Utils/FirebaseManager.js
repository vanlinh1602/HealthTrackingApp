import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useState} from "react";

export class FirebaseManager {

    constructor() {

    }
    // Login with Email and Pass
    signIn(mail, pass) {
        auth()
            .signInWithEmailAndPassword(mail, pass)
            .then(() => {
                console.log("Connected");
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    };

    //Log out
    SignOut() {
        auth().signOut().then(() => { console.log("Log out succesed") })
    };

    // Get data from firebase
    getData(collection, doc) {
        const [data, setData] = useState(); 
        //     var getData = firestore()
        //         .collection(collection)
        //         .doc(doc)
        //         .onSnapshot(
        //             docx => {
        //                 console.log(docx.data().name)
        //                   setData(docx.data())
        //             }
        //         )
        //console.log(data);
        async function getDatabase(){
            const user = await firestore().collection(collection).doc(doc).get();
           // return user.data();
            setData(user.data())
            return 1;
        }
        //setData(getDatabase());
        //console.log(data)
        getDatabase();
        //console.log(data);
        return data;
    };
};
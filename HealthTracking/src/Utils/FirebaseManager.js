import React, { Component } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useState } from "react";

export class FirebaseManager {
    // Data của Nhật ký
    dataDiary = {
        userName: "",
        status: "",
        image: "",
        day: "",
    }
    // Data của chỉ số sức khỏe
    dataHealthInfor = {
        day: "",
        height: "",
        weight: "",
        userName: ""
    }
    // Data của thông tin người dùng
    dataInformation = {
        mail: "",
        userName: "",
        phone: "",
        name: "",
    }
    // Data của bảng thống kê
    dataStatistical = {
        userName: "",
        day: "",
        status: "",
        type: "",
    }

    constructor(props) {

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

    };
    // Thêm dữ liệu lên database với document ngẫu nhiên
    AddDataRandomDoc(collection, data) {
        firestore()
            .collection(collection)
            .add(data)
            .then(() => {
                console.log('User added!');
            });
    }
    //Thêm dữ liệu lên database với document đặt tên
    AddDataWithDoc(collection, document, data) {
        firestore()
            .collection(collection)
            .doc(document)
            .set(data)
            .then(() => {
                console.log('User added!');
            });
    }
    // Cập nhập dữ liệu lên database
    UpdateData(collection, document, data) {
        firestore()
            .collection(collection)
            .doc(document)
            .update(data)
            .then(() => {
                console.log('User updated!');
            });
    }
    // Xóa dữ liệu database 
    RemoveData(collection, document) {
        firestore()
            .collection(collection)
            .doc(document)
            .delete()
            .then(() => {
                console.log('User deleted!');
            });
    }
};
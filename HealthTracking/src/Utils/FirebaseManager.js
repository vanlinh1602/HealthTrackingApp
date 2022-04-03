import React, { Component, useEffect } from 'react';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useState } from "react";
import { getActionFromState } from '@react-navigation/native';

export class FirebaseManager extends Component {

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
        height: 0,
        weight: 0,
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
        super(props)
    }
    // Login with Email and Pass
    signIn(mail, pass) {
        auth()
            .signInWithEmailAndPassword(mail, pass)
            .then(() => {
                console.log("Sign in succesed");
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
    // Đăng kí tài khoảng với mail và pass
    singUp(mail, pass) {
        auth().createUserWithEmailAndPassword(mail, pass)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
            })
    }
    ChangePassword(mail, oldPassword, newPassword) {
        this.signIn(mail, oldPassword)
        const user = auth().currentUser;
        user.updatePassword(newPassword)
            .then(() => {
                console.log("Update succesed");
                this.SignOut();
            })
            .catch(error => {
                console.log(error)
            })
    }
    //Log out
    SignOut() {
        auth().signOut().then(() => { console.log("Log out succesed") })
    };
    // Get data from firebase
    async getData(collection, document) {
        let temp = []
        const data = (await firestore().collection(collection).doc(document).get())
        switch (collection) {
            case 'Information': {
                this.dataInformation = data.data();
                return this.dataInformation;
                break;
            }
            case 'Diary': {
                this.dataDiary = data.data();
                return this.dataDiary;
                break;
            }
            case 'HealthInfor': {
                this.dataHealthInfor = data.data();
                return this.dataHealthInfor;
                break;
            }
            case 'Statistical': {
                this.dataStatistical = data.data();
                return this.dataStatistical;
                break;
            }
        }
    };
    // Lấy data với query return List data
    async getDataWithQuery(collection, user, field, operators, value) {
        let temp = []
        const data = await firestore()
            .collectionGroup(collection)
            // Filter results
            .where('User', '==', user)
            .where(field, operators, value)
            .get()
        data.forEach(doc => {
            temp.push(doc.data())
        })
        return temp;
    }
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
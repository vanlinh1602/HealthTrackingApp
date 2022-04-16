import React, { Component, useEffect, useState } from 'react';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { getActionFromState } from '@react-navigation/native';

export class FirebaseManager extends Component {
    userName;
    // Data của Nhật ký
    dataDiary = {
        userName: "",
        status: "",
        image: "",
        day: "",
        title: "",
    }
    // Data của chỉ số sức khỏe
    dataHealthInfor = {
        day: "",
        height: 0,
        weight: 0,
        userName: "",
    }
    // Data của thông tin người dùng
    dataInformation = {
        mail: "",
        userName: "",
        phone: "",
        name: "",
        gender:"",
        yearold:"",
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
        this.userName = this.GetUserName();
    }

    checkLogin() {
        const [initializing, setInitializing] = useState(true);
        const [user, setUser] = useState();
        function onAuthStateChanged(user) {
            setUser(user);
            if (initializing) setInitializing(false);
        }

        useEffect(() => {
            const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
            return subscriber; // unsubscribe on unmount
        }, []);

        if (initializing) return null;
        return user;
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
    singUp(userName, mail, pass) {
        auth().createUserWithEmailAndPassword(mail, pass)
            .then((res) => {
                const user = firebase.auth().currentUser;
                return user.updateProfile({
                    displayName: userName
                })
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
    //Thay đổi password của user hiện tại
    ChangeUserPassword(newPassword){
        const user=auth().currentUser;
        user.updatePassword(newPassword)
            .then(() => {
                console.log("Update succesed");
            })
            .catch(error => {
                console.log(error)
            })
    }
    //Lấy user name
    GetUserName(){
        const user = auth().currentUser;
        if(user)
            return user.displayName;
    }
    //Log out
    SignOut() {
        auth().signOut().then(() => { console.log("Log out succesed") })
    };
    // Lấy data với query return List data
    async getDataWithQuery(collection,field, operators, value) {
        let temp = []
        const data = await firestore()
            .collectionGroup(collection)
            // Filter results
            .where('userName', '==', this.userName)
            .where(field, operators, value)
            .get()
        data.forEach(doc => {
            temp.push(doc.data())
        })
        return temp;
    }
    // Lấy data với collection
    async getDataWithCollection(collection) {
        let temp = []
        const data = await firestore()
            .collection(collection)
            .where('userName', '==', this.userName)
            .get()
        data.forEach(doc => {
            temp.push(doc.data())
        })
        return temp;
    }
    // Thêm dữ liệu lên database với document ngẫu nhiên
    AddDataRandomDoc(collection, data) {
        data.userName = this.userName;
        firestore()
            .collection(collection)
            .add(data)
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
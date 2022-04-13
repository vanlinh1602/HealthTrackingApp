import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Pressable,
    Image,

} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import CustomButton from './CustomButton';
import { FirebaseManager } from './FirebaseManager';

export default function ModelReadDiary(props) {
    const manager = new FirebaseManager();
    const [isFix, setIsFix] = useState(false);
    var data = manager.dataDiary;
    function FixData() {
        setIsFix(true)
    }
    return (
        <View style={{ ...props.style, justifyContent: 'center' }}>
            <Modal
                visible={props.visible}
                transparent
                onRequestClose={props.close}
            >
                <View style={styles.container}>
                    <View style={styles.mainView} >
                        <View style={{ backgroundColor: "#FCD0D0", alignItems: 'center', borderRadius: 20 }}>
                            <Pressable
                                style={{ marginLeft: '80%', marginTop: 15, }}
                                onPress={FixData}
                            >
                                <Image
                                    resizeMode="stretch"
                                    source={require('../Image/icons8-write.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </Pressable>
                            <Pressable
                                style={{ marginLeft: '-85%', marginTop: -35, }}
                                onPress={props.close}
                            >
                                <Image
                                    resizeMode="stretch"
                                    source={require('../Image/icons8-back-50.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                            </Pressable>
                            <Text style={styles.diary}>Nhật kí</Text>
                        </View>
                        {!isFix ? (
                            <ScrollView>
                                <Text style={styles.day}>Ngày {props.day}</Text>
                                <Text style={styles.title}>{props.title}</Text>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Image
                                        resizeMode="stretch"
                                        source={require('../Image/imagenice.jpg')}
                                        style={{ width: 200, height: 200 }}
                                    />
                                    <Text style={styles.content}>{props.status}</Text>
                                </View>
                            </ScrollView>
                        ) : (
                            <View>
                                {/* <View>
                                    <Text style={styles.day}>Ngày {props.day}</Text>
                                    <TextInput
                                        style={styles.title}
                                        multiline
                                    >{props.title}</TextInput>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Image
                                            resizeMode="stretch"
                                            source={require('../Image/imagenice.jpg')}
                                            style={{ width: 200, height: 200 }}
                                        />
                                        <TextInput
                                            style={styles.content}
                                            multiline
                                        >{props.status}</TextInput>
                                    </View>
                                </View> */}
                                <CustomButton
                                    content="Xong"
                                    color='#F9476C99'
                                    style={styles.btnSubmit}
                                    size={20}
                                    onPress={() => {
                                        setIsFix(false);
                                        //props.close()
                                    }}
                                    width={150}
                                    height={50}
                                />
                            </View>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00000099',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainView: {
        backgroundColor: '#FDE7E7',
        with: 300,
        maxHeight: 700,
        borderRadius: 20,

    },
    diary: {
        fontFamily: 'Playball-Regular',
        width: 300,
        textAlign: 'center',
        fontSize: 40,
        padding: 10,
        color: '#000',
        marginTop: -55,
    },
    day: {
        fontFamily: 'Mulish-Regular',
        fontSize: 20,
        paddingTop: 10,
        paddingLeft: 10,
        color: "#F9476C",
        fontStyle: 'italic'
    },
    title: {
        fontFamily: 'Mulish-Regular',
        //fontFamily: 'Playball-Regular',
        fontSize: 35,
        textAlign: 'center',
        padding: 10,
        color: '#F178B6'
    },
    content: {
        fontFamily: 'Mulish-Regular',
        fontSize: 20,
        //padding: 20,
    },
    btnSubmit:{
        //marginTop: -60,
    },  
});


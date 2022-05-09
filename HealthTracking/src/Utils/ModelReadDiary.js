import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Pressable,
    Image,
    Dimensions,
    FlatList,
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import CustomButton from './CustomButton';
import { FirebaseManager } from './FirebaseManager';
import ModelAddDiary from './ModelAddDiary'

export default function ModelReadDiary(props) {
    const manager = new FirebaseManager();
    const [isFix, setIsFix] = useState(false);
    function FixData() {
        setIsFix(true)
    }

    const RenderImage = () => (
        <View>
        <FlatList
            showsHorizontalScrollIndicator = {false}
            horizontal = {true}
            data={props.image}
            renderItem = {({item}) => (
                    <View>
                        <Image
                            resizeMode='stretch'
                            style = {{height : 200, width : 200, marginLeft: 5, marginRight : 5}}
                            source  = {{uri : item}}
                        />
                    </View>
            )}
        />
        </View>
    )

    return (
        <View style={{ ...props.style}}>
            <Modal
                visible={props.visible}
                transparent
                onRequestClose={props.close}
            >
                <View style={styles.container}>
                    <View style={styles.mainView} >
                        <View style={{ backgroundColor: "#FCD0D0", alignItems: 'center', borderRadius: 20}}>
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
                            <ScrollView
                                showsVerticalScrollIndicator = {false}
                            >
                                <Text style={styles.day}>Ngày {props.day}</Text>
                                <Text style={styles.title}>{props.title}</Text>
                                {RenderImage()}
                                <Text style={styles.content}>{props.status}</Text>
                            </ScrollView>
                        ) : (
                            <ModelAddDiary
                                fixTitle = {props.title}
                                fixStatus = {props.status}
                                day = {props.day}
                                image = {props.image}
                                visible = {isFix}
                                close = {()=> setIsFix(false)}
                            />
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
        //alignItems: 'center',
    },
    mainView: {
        backgroundColor: '#FDE7E7',
        with: Dimensions.get("window").width,
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
        //fontFamily: 'Mulish-Regular',
        fontFamily: 'DancingScript-Regular',
        fontSize: 35,
        textAlign: 'center',
        padding: 10,
        color: '#F178B6'
    },
    content: {
        textAlign : 'center',
        fontFamily: 'Mulish-Regular',
        fontSize: 20,
        padding: 10,
    },
    btnSubmit:{
        //marginTop: -60,
    },  
});


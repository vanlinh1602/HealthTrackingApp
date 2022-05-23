import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';
import CustomButton from '../Utils/CustomButton';
import { FirebaseManager } from '../Utils/FirebaseManager';

const Scale = () => {
  const [bmi, setBmi] = useState(null);
  const [info, setInfo] = useState('');
  const [dataInfo, setDataInfo] = useState({height: "", weight: ""})
  const [getWater, SetgetWater] = useState();
  const [currentDate, setCurrentDate] = useState('');
  const [alertNoinput, setAlertNoinput] = useState(false);
  const manager = new FirebaseManager();

  const [data, setData] = useState(manager.dataHealthInfor);

  const HandleChange = async () => {
    if (height == null || weight == null) {
      ModalAlertNoInputOn();
    } else {
    var date = new Date(Date.now());
    data.day = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    data.Height = height;
    data.Weight = weight;
    await handleBmi();
    const query = ["day", '==', data.day.toString()]
    var arr = await manager.getDataWithQuery("HealthInfo", "day", "==", data.day);
      if (arr.length == 0) {
        manager.AddDataRandomDoc("HealthInfo", data)
      }
      else {
        await manager.UpdateData("HealthInfo", data, query)
      } 
    }
  }

  useEffect(() => {
    var thisDay = new Date(Date.now());
    var date = new Date().getDate()
    var month = new Date().getMonth() + 1
    var year = new Date().getFullYear()
    var hour = new Date().getHours()
    var minutes = new Date().getMinutes()
    setCurrentDate(
      date + '/' + month + '/' + year + ' - ' + hour + ':' + minutes
    )
    data.day = thisDay.getDate() + '/' + (thisDay.getMonth() + 1) + '/' + thisDay.getFullYear();
  }, []);

  const ModalAlertNoInputOn = () => {
    setAlertNoinput(true);
  }
  const ModalAlertNoInputOff = () => {
    setAlertNoinput(false);
  }

  const handleEnter = async () => {
    if (height == null || weight == null) {
      ModalAlertNoInputOn();
    } else {
      handleBmi();
    }
  }

  const handleBmi = () => {
    if(dataInfo.height == "" || dataInfo.weight == ""){
      setBmi(null);
      return;
    }
    let val = (
      [Number(dataInfo.weight) / Number(dataInfo.height) / Number(dataInfo.height)] * 10000
    ).toFixed(1);
    setBmi(val);
    data.BMI = val;
    let waterInput = Number(dataInfo.weight) * 0.03;
    SetgetWater(waterInput);
    if (val < 18.5) {
      setInfo('Gầy');
    } else if (val > 18.5 && val <= 24.9) {
      setInfo('Khỏe mạnh');
    } else if (val > 24.9 && val < 30) {
      setInfo('Mũm mỉm');
    } else {
      setInfo('Béo');
    }
  };

  return (
    <View style={styles.body}>
      <View style={{ marginTop: '5%', marginRight: '45%' }}>
        <Text style={styles.time}>{currentDate}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 35, fontFamily: 'PlayBall-Regular', color: '#EF5DA8' }}>Phân tích chỉ số</Text>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Modal
          visible={alertNoinput}
          transparent
          onRequestClose={alertNoinput}
          animationType='fade'>
          <View style={styles.container}>
            <View style={styles.view}>
              <View style={styles.header}>

                <Text style={styles.text1}>Cảnh báo</Text>
              </View>
              <View style={styles.content}>
                <Text style={{ fontSize: 22 }}>
                  Hãy nhập chỉ số vào trước!
                </Text>
                <Image
                  style={styles.ImageStyle}
                  source={require('../Image/warning.png')}
                />
              </View>
              <View style={{ marginLeft: '80%' }}>
                <TouchableOpacity onPress={ModalAlertNoInputOff}>
                  <Image
                    source={require('../Image/OK.png')}
                    style={{ height: 30, width: 30 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>


      <View style={styles.InformationBox}>
        <Text style={styles.text}>Chiều cao: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(value) => {
            dataInfo.height = value;
            handleBmi()
          }}
          placeholder="cm"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.InformationBox}>
        <Text style={styles.text}>Cân nặng : </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(value) => {
            dataInfo.weight = value;
            handleBmi()
          }}
          placeholder="kg"
          keyboardType="numeric"
        />
      </View>
      <View>
        <CustomButton
          content="Xác nhận"
          color="#EF5DA8"
          size={25}
          style={styles.enter}
          onPress={HandleChange}
          width={150}
          height={50}
        />

        <TouchableOpacity onPress={handleEnter}>
          <Image
            source={require('../Image/Change.png')}
            style={{ marginLeft: '38%', marginTop: '-15%', shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2 }}
          />

        </TouchableOpacity>
      </View>

      {(bmi == null) ? null : (
        <View style={styles.InformationBox}>
          <View>
            <Text style={styles.text}>
              BMI: {bmi}   {info}
            </Text>
          </View>

          <View style={styles.InformationBox}>
            <Text style={styles.text}>Lượng nước cần: {getWater} lít</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FDE7E7',
    alignItems: 'center',
    justifyContend: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 25,
    fontStyle: 'italic',

    margin: 20,
  },
  text1: {
    color: '#000000',
    fontSize: 25,
    fontStyle: 'italic',
    margin: 10
  },
  InformationBox: {
    backgroundColor: '#FCD0D0',
    height: 80,
    width: 390,
    padding: 2,
    borderRadius: 40,
    marginTop: "5%",
    justifyContend: 'space-around',
    flexDirection: 'column',
  },
  image: {
    height: 300,
    width: 300,
  },
  textInput: {
    fontSize: 25,
    color: '#000000',
    marginLeft: "40%",
    marginTop: '-16%'
  },
  enter: {
    marginTop: '5%',
    width: 110,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '50%',
    borderRadius: 20,
  },
  noteScale: {
    color: '#000000',
    fontSize: 25,
    fontStyle: 'italic',
    margin: '7.5%'
  },
  time: {
    fontSize: 25,
    color: '#F9476C',
    fontWeight: '600',
    fontFamily: 'Mulish-Regular'
  },
  container: {
    backgroundColor: '#00000099',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    width: 350,
    height: 150,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#FAA1A1',
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row-reverse',
    flex: 1,
    margin: 5
  },
  ImageStyle: {
    resizeMode: 'cover',
    height: 50,
    width: 50,
  }
});

export default Scale;

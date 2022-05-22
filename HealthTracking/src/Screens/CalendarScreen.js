import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Dimensions
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import { BoxShadow } from 'react-native-shadow';
import CustomButton from '../Utils/CustomButton';
import { FirebaseManager } from '../Utils/FirebaseManager';
import ModelReadDiary from '../Utils/ModelReadDiary';
import ModelAddDiary from '../Utils/ModelAddDiary';


const getDay = () => {
  const DayNow = new Date(Date.now());
  var dd = DayNow.getDate();
  var mm = DayNow.getMonth() + 1;
  var yy = DayNow.getFullYear().toString();
  if (DayNow.getDate() < 10) {
    dd = '0' + DayNow.getDate();
  }
  if ((DayNow.getMonth() + 1) < 10) {
    mm = '0' + (DayNow.getMonth() + 1).toString();
  }
  return yy + '-' + mm + '-' + dd;
}

const INITIAL_DATE = getDay();

export default function CalendarScreen() {
  const manager = new FirebaseManager();
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [showDiary, setShowDiary] = useState(false);
  const [showAddDiary, setShowAddDiary] = useState(false);
  const [dataDiary, setDataDiary] = useState([])
  const [data, setData] = useState(manager.dataDiary);
  const [sourceImage, setSourceImage] = useState([])
  const [countImage, setCountImage] = useState(0);
  const onDayPress: CalendarProps['onDayPress'] = useCallback(day => {
    setSelected(day.dateString);
    var stringDay = day.day + '/' + day.month + '/' + day.year;
    GetDataFromDatabase(stringDay)
  }, []);

  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: '#F9476C',
        selectedTextColor: 'white'
      }
    };
  }, [selected]);
  async function GetDataFromDatabase(day) {
    var maxName = 1;
    setDataDiary([])
    var getdata = await manager.getDataWithQuery("Diary", 'day', '==', day);
    getdata.forEach((value => {
      setDataDiary(doc => [...doc, value])
      value.image.forEach((item) => {
        if (maxName  < parseInt(item[item.length - 1]))
          maxName = parseInt(item[item.length - 1])
      })
    }));
    setCountImage(maxName);
  }
  function LoadingDiary() {
    var date = new Date(Date.now());
    var day = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    GetDataFromDatabase(day);
  }
  useEffect(LoadingDiary, []);
  const RenderDiary = ({ item }) => (
    <Pressable
      onPress={async () => {
        var temp = dataDiary;
        temp.forEach((value => {
          if (value.title == item.title)
            setData(value);
        }))
        setShowDiary(true);
      }}
    >
      <View style={styles.StatusToday}>
        <Text
          style={styles.ContentStatusDay}
        >{item.day}</Text>
        <Text
          style={styles.ContentStatus}
        >{item.title}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.calendarBackground}>
      {(showDiary) ?
        <ModelReadDiary
          visible={showDiary}
          close={() => setShowDiary(false)}
          reload={LoadingDiary}
          title={data.title}
          day={data.day}
          image={data.image}
          status={data.status}
          count={countImage}
        />
        : null
      }
      {(showAddDiary) ?
        <ModelAddDiary
          count={countImage}
          visible={showAddDiary}
          close={() => {
            setShowAddDiary(false)
            LoadingDiary();
          }}
        />
        : null
      }
      <View style={{ alignItems: 'center' }}>
        <Calendar
          style={styles.Calendar}
          theme={
            {
              textSectionTitleColor: '#EF5DA8',
              calendarBackground: '#FCD0D0',
              todayTextColor: '#F9476C',
              textDisabledColor: '#53485950',
            }
          }
          enableSwipeMonths
          current={INITIAL_DATE}
          onDayPress={onDayPress}
          markedDates={marked}
        />
      </View>
      <View style={{ marginBottom: 10, alignItems: 'flex-start' }}>
        <Text style={styles.TextDiary}>Diary List:</Text>
        <Pressable style={styles.AddDiary}
          onPress={() => {
            setShowAddDiary(true)
          }}
        >
          <Image
            source={require('../Image/iconAdd.png')}
            style={{ width: 55, height: 55 }}
            resizeMode="stretch"
          />
        </Pressable>
      </View>
      <FlatList
        data={dataDiary}
        renderItem={RenderDiary}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  calendarBackground: {
    flex: 1,
    backgroundColor: '#FDE7E7',
  },
  Calendar: {
    width: Dimensions.get("window").width * 0.95,
    margin: 20,
    borderRadius: 15,
    paddingBottom: 10,
  },
  TextDiary: {
    fontFamily: 'Playball-Regular',
    fontSize: 40,
    marginLeft: 15,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: "#F9476C99"
  },
  AddDiary: {
    marginTop: "-15%",
    marginLeft: "80%",
    marginBottom: 10,
  },
  StatusToday: {
    width: '90%',
    marginLeft: '10%',
    marginBottom: 10,
    backgroundColor: '#FCD0D0',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    fontSize: 15,
    color: '#000',
    padding: 10
  },
  ContentStatus: {
    color: '#000',
    fontSize: 20,
    marginLeft: 5,
    marginTop: 5,
    fontFamily: 'Mulish-Regular',
  },
  ContentStatusDay: {
    fontSize: 15,
    marginLeft: 5,
    marginTop: 5,
    fontFamily: 'Mulish-Regular',
  },
});

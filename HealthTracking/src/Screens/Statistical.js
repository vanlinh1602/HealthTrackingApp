import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Image
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { ScrollView } from 'react-native-gesture-handler';
import OptionsStatistical from '../Utils/OptionsStatistical'
import DateTimePickerModal from "react-native-modal-datetime-picker";

function InforCheck(props) {
  return (
    <View style={{ alignItems: 'center', height: 40, justifyContent: 'center', marginBottom: 10, }}>
      <ScrollView
        horizontal
      >
        <Text style={styles.InforCheck}>{props.infor}</Text>
        <Pressable
          style={styles.ButtonChange}
          onPress={props.onPress}
        >
          <Image
            source={require('../Image/icons8-expand-arrow-48.png')}
            style={{ width: 30, height: 30 }}
            resizeMode='stretch'
          />
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default function Statistical() {
  const [title, setTitle] = useState("");
  const [valueScale, setValueScale] = useState("Cân nặng")
  const [valueTime, setValueTime] = useState(new Date(Date.now()).toDateString())
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const [labels, setLabels] = useState();
  const weekDay = [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [showOption, setShowOption] = useState(false);
  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false)
  };

  useEffect(()=>{
    getDataForTable(new Date(Date.now()))
  },[])


  const getDataForTable = (date) => {
    const data = []
    for (var i = 0; i < 7; i++){
      var name = weekDay[date.getDay()];
      data.push(name);
      date.setHours(date.getHours() - 24);
    }
    setLabels(data.reverse());
  }
  const handleConfirm = (date) => {
    getDataForTable(date)
    setValueTime(date.toDateString());
    setIsDateTimePickerVisible(false)
  };
  return (
    <View style={{ alignItems: 'center', backgroundColor: '#FDE7E7', flex: 1 }}>
      <OptionsStatistical
        title={title}
        onPress={(value) => {
          if (title == "Chỉ số") {
            setValueScale(value);
            setShowOption(false);
          }
          else {
            setValueTime(value);
            setShowOption(false);
          }
        }}
        visible={showOption}
        close={() => setShowOption(false)}
      />
      <View style={{ marginBottom: 20, alignItems: 'center', flex: 1 }}>
        <Text style={styles.Header}>Thống Kê </Text>
        <InforCheck
          style={{ marginBottom: 20, }}
          infor={valueScale}
          onPress={() => {
            setTitle("Chỉ số")
            setShowOption(true)
          }}
        />
        <InforCheck
          infor={valueTime}
          onPress={() => {
            //setTitle("Thời gian")
            setIsDateTimePickerVisible(true)
            console.log("yes")
          }}
        />
      </View>
      <View style={{ marginTop: 20, flex: 2 }}>
        <LineChart
          data={{
            labels: labels,
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width * 0.95} // from react-native
          height={300}
          //yAxisLabel="$"
          //yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#F178B6",
            backgroundGradientTo: "#EF5DA8",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#FAA1A1"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
      <View style={{ alignItems: 'center', marginTop: 35, flex: 1, }} >
        <Text
          style={{
            fontFamily: 'Mulish-Regular',
            fontSize: 25,
            borderBottomWidth: 1,
            color: "#000"
          }}
        >Tips :</Text>
        <Text
          style={{
            fontFamily: 'Mulish-Regular',
            fontSize: 20,
            textAlign: 'center',
            padding: 10,
          }}
        >Ăn uống đều độ mỗi ngày sẽ giúp cơ thể khỏe mạnh hơn</Text>
      </View>
      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDateTimePicker}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  Header: {
    marginTop: 10,
    fontSize: 50,
    color: '#000',
    marginBottom: 10,
    fontFamily: 'Playball-Regular',
  },
  InforCheck: {
    fontSize: 24,
    fontFamily: 'Mulish-Regular',
    color: "#000",
    //borderBottomWidth: 2,
    //borderColor: "#F9476C"
  },
  ButtonChange: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9476C',
    borderRadius: 20,
    marginLeft: 10
  },
  Option: {
    backgroundColor: "#FAA1A1",
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#00000055',
    borderBottomWidth: 3,
    borderRightWidth: 5,
  },
});
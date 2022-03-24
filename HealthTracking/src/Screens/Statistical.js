import React from 'react';
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

function InforCheck(props) {
  return (
    <View style={{ alignItems: 'center', height: 40, justifyContent:'center', marginBottom: 10,}}>
      <ScrollView
        horizontal
      >
      <Text style={styles.InforCheck}>{props.infor}</Text>
      <Pressable style = {styles.ButtonChange}>
        <Image
          source={require('../Image/icons8-expand-arrow-48.png')}
          style={{resizeMode: 'stretch', width: 25, height: 25}}
        />
      </Pressable>
      </ScrollView>
    </View>
  );
}

export default function Statistical() {
  const week = "1"
  const month = "5"
  const value = 'Tuần ' + week + ' Tháng ' + month
  return (
    <View style={{ alignItems: 'center', backgroundColor: '#FDE7E7', flex: 1 }}>
      <View style = {{marginBottom: 20}}>
        <Text style={styles.Header}>Thống Kê</Text>
        <InforCheck
          style = {{marginBottom: 30,}}
          infor="Cân nặng"
        />
        <InforCheck
          infor= {value}
        />
      </View>
      <LineChart
        data={{
          labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
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
        width={Dimensions.get("window").width} // from react-native
        height={220}
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
  );
};

const styles = StyleSheet.create({
  Header: {
    marginTop: 20,
    fontSize: 40,
    color: '#000',
    marginBottom: 20,
  },
  InforCheck: {
    fontSize: 20,
    //fontWeight: 'bold'
  },
  ButtonChange: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
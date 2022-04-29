import React, { useState } from 'react';
import {
  
  StyleSheet,
  Image, 
  Pressable, 
  Text,
  View,
  
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { createStackNavigator } from '@react-navigation/stack';
import { BarChart } from "react-native-chart-kit";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

function Home({ navigation }) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [fajar, setfajar] = useState("");
  const [zohar, setzohar] = useState("");
  const [asar, setasar] = useState("");
  const [mag, setmag] = useState("");
  const [esha, setesha] = useState("");

  const onDateChange = (date, type) => {

    setfajar(null);
    setzohar(null);
    setasar(null);
    setmag(null);
    setesha(null);
    
    
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }


  };

  return (
    <View style={styles.container}>

      <Text style={styles.headerText}> Salah app </Text>
      
      <CalendarPicker
        startFromMonday={true}
        //allowRangeSelection={true}

        minDate={new Date(2018, 1, 1)}
        maxDate={new Date()}
        previousTitle="Previous"
        todayBackgroundColor="#e6ffe6"
        selectedDayColor="#66ff33"
        selectedDayTextColor="#000000"
        width={600}

        textStyle={{
          fontFamily: 'Cochin',
          color: 'black',
          alignSelf: 'center',

        }}

        onDateChange={onDateChange}

      />



      <View style={styles.pray}>

        <View style={styles.prop} >

          <Image
            style={styles.pic}
            source={require("./assets/fajrprayer.png")}
          ></Image>

          <RadioButtonGroup

            selected={fajar}
            containerStyle={{ flexDirection: "row" }}
            onSelected={(value) => setfajar(value)}
            radioBackground="blue">
            <RadioButtonItem value="fajarof" label={<Text style={{ color: "black", fontSize: 20, fontWeight: '400',marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />

            <Image
              style={styles.pic}
              source={require('./assets/prayer.png')}
            />

            <RadioButtonItem value="fajarnotof" label={
              <Text style={{ color: "black", fontSize: 20, fontWeight: '400', marginLeft: 15, marginRight: 15 }}>Not Offered</Text>
            } />

            <Image
              style={styles.pic}
              source={require('./assets/peoples.png')}
            />
          </RadioButtonGroup>

        </View >
        <View style={styles.prop} >

          <Image
            style={styles.pic}
            source={require("./assets/zuhar.png")}
          ></Image>

          <RadioButtonGroup

            selected={zohar}
            containerStyle={{ flexDirection: "row" }}
            onSelected={(value) => setzohar(value)}
            radioBackground="blue">

            <RadioButtonItem value="zoharof" label={<Text style={{ color: "black", fontSize: 20, fontWeight: '400', marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />

            <Image
              style={styles.pic}
              source={require('./assets/prayer.png')}
            />
            <RadioButtonItem value="zoharnotof" label={
              <Text style={{ color: "black",fontSize: 20, fontWeight: '400', marginLeft: 15, marginRight: 15 }} >Not Offered</Text>
            } />

            <Image
              style={styles.pic}
              source={require('./assets/peoples.png')}
            />
          </RadioButtonGroup>

        </View >
        <View style={styles.prop} >

          <Image
            style={styles.pic}
            source={require("./assets/asar.png")}
          ></Image>

          <RadioButtonGroup

            selected={asar}
            containerStyle={{ flexDirection: "row" }}
            onSelected={(value) => setasar(value)}
            radioBackground="blue">
            <RadioButtonItem value="asarof" label={<Text style={{ color: "black", fontSize: 20, fontWeight: '400', marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />

            <Image
              style={styles.pic}
              source={require('./assets/prayer.png')}
            />
            <RadioButtonItem value="asarnotof" label={
              <Text style={{ color: "black", fontSize: 20, fontWeight: '400', marginLeft: 15, marginRight: 15 }}>Not Offered</Text>
            } />

            <Image
              style={styles.pic}
              source={require('./assets/peoples.png')}
            />
          </RadioButtonGroup>

        </View >
        <View style={styles.prop} >

          <Image
            style={styles.pic}
            source={require("./assets/magrab.png")}
          ></Image>

          <RadioButtonGroup

            selected={mag}
            containerStyle={{ flexDirection: "row" }}
            onSelected={(value) => setmag(value)}
            radioBackground="blue">
            <RadioButtonItem value="magof" label={<Text style={{ color: "black",fontSize: 20, fontWeight: '400', marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />

            <Image
              style={styles.pic}
              source={require('./assets/prayer.png')}
            />

            <RadioButtonItem value="magnotof" label={
              <Text style={{ color: "black", fontSize: 20, fontWeight: '400', marginLeft: 15, marginRight: 15 }}>Not Offered</Text>
            } />

            <Image
              style={styles.pic}
              source={require('./assets/peoples.png')}
            />
          </RadioButtonGroup>

        </View >
        <View style={styles.prop} >

          <Image
            style={styles.pic}
            source={require("./assets/esha.png")}
          ></Image>

          <RadioButtonGroup

            selected={esha}
            containerStyle={{ flexDirection: "row" }}
            onSelected={(value) => setesha(value)}
            radioBackground="blue">
            <RadioButtonItem value="eshaof" label={<Text style={{ color: "black", fontSize: 20, fontWeight: '400', marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />

            <Image
              style={styles.pic}
              source={require('./assets/prayer.png')}
            />

            <RadioButtonItem value="eshanotof" label={
              <Text style={{ color: "black", fontSize: 20, fontWeight: '400', marginLeft: 15, marginRight: 15 }}>Not Offered</Text>
            } />

            <Image
              style={styles.pic}
              source={require('./assets/peoples.png')}
            />
          </RadioButtonGroup>

        </View >

      </View>

      <View style={styles.toggle}>
        <Text style={styles.headerText}> Streaks </Text>
        <CountdownCircleTimer

          duration={0}
          colors={["#C6C6C6", "#1B1B1B"]}
          colorsTime={[0]}

        >
          {({ remainingTime }) => (
            <Text style={{ color: "#1B1B1B", fontSize: 40 }}>
              {remainingTime}
            </Text>
          )}
        </CountdownCircleTimer>
      </View>

      <Text style={styles.headerText}> Previous Record </Text>

      <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 100 }}>


        <Pressable
          onPress={() => navigation.navigate('weekly')}
          style={{ backgroundColor: 'green', padding: 25, marginTop: 5, marginRight: 20, borderRadius: 50 }}
        >
          <Text style={styles.textsty}>Weekly</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('monthly')}
          style={{ backgroundColor: 'green', padding: 25, marginTop: 10, marginRight: 20, borderRadius: 50 }}
        >
          <Text style={styles.textsty}>Monthly</Text>
        </Pressable>

      </View>
    </View>
  );
}

function Days({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <BarChart
        data={{

          labels: ['FAJAR', 'ZOHAR', 'ASSAR', 'MAGRIB', 'ESHA'],
          datasets: [{ data: [3, 5, 1, 2, 4] }],

        }}
        width={800}
        height={450}
        barColor="plum"
        chartConfig={{
          barPercentage: 1.5,
          barRadius: 5,
          propsForLabels: {
            fontSize: '10',
          },
          backgroundColor: 'white',
          backgroundGradientFrom: 'green',
          backgroundGradientTo: 'purple',
          decimalPlaces: false,
          color: (opacity = 255) => '#ECEFF1',
          style: {
            borderRadius: 20,
          },
        }}
        fromZero={true}
        showValuesOnTopOfBars={true}



      />
    </View>

  );
}

function Month({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


      <BarChart
        data={{

          labels: ['JAN 2022', 'FEB 2022', 'MARCH 2022', 'APRIL 2022'],
          datasets: [{ data: [130, 162, 205, 110,] }],

        }}
        width={800}
        height={450}


        barColor="plum"
        chartConfig={{
          barPercentage: 1.5,
          barRadius: 5,
          propsForLabels: {
            fontSize: '10',
          },
          backgroundColor: 'white',
          backgroundGradientFrom: 'green',
          backgroundGradientTo: '#663399',
          decimalPlaces: false,
          color: (opacity = 255) => '#ECEFF1',
          style: {
            borderRadius: 20,
          },
        }}
        fromZero={true}
        showValuesOnTopOfBars={true}
      />
    </View>

  );
}




const Stack = createStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} style={{backgroundColor:"red"}}  />
        <Stack.Screen name="weekly" component={Days} />
        <Stack.Screen name="monthly" component={Month} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 30,


  },
  custom: {
    
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    marginTop: 10,
    alignItems: 'center',
    fontSize: 20,
    marginBottom: 20


  },
  checkbox: {
    alignSelf: 'center',
    height: 20,
    marginLeft: 40,
    width: 20
  },

  pray: {
    height: 600,
    width: 1000,
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 10, height: 14}, 
    shadowOpacity: 0.5, shadowRadius: 20,
    marginTop: 28,
  },
  prop: {

    height: 80,
    width: 500,
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',


  },
  pic: {
    height: 70,
    width: 70,
    marginRight: 80,
  },

  text_off: {
    fontSize: 20,

    marginLeft: 20,
    alignSelf: 'center'
  },

  headerText: {

    color: '#0000FF',
    marginTop: 70,
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    fontWeight: 900,
    marginBottom: 78,
  },

  previous: {
    backgroundColor: '#f8f8ff',
    height: 600,
    width: 500,

  },

  toggle: {

    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,

  },

  MainContainer: {

    alignItems: 'center',
    justifyContent: 'center'
  },

  textsty: {
    fontSize: 20,
    fontWeight: 'bold'
  }

});
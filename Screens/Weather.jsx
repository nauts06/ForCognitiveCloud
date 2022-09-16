import { View, Text, Image , ScrollView , ToastAndroid} from "react-native";
import React, { useEffect, useContext } from "react";
import { Headline } from "react-native-paper";
import { useState } from "react";
import { PracticeContext } from "./PracticeContext";
import { style, width } from "@mui/system";

const Weather = () => {
  const [myUserData, setMyData] = useState([]);
  const [icon, setIcon] = useState("");
  const { val, setVal, capital, setCapital } = useContext(PracticeContext);
  //console.log("myUserData---ooo>>>", myUserData);

  const getData = async () => {
    try {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=5b5658f5535462dba60a846d205e13a2&query=${capital}`
      );
      const myData = await response.json();
      setMyData(myData);
    } catch (error) {
      ToastAndroid.show(error,"error",ToastAndroid.SHORT)
      // console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
    <View>
      <Headline style={{
          textAlign: "center",
          marginTop: 25,
          fontWeight: "700",
          fontSize: 26,
        }}>Weather Details</Headline>
      <Image
        source={{ uri: `${myUserData?.current?.weather_icons[0]}` }}
        style={{
          width: 120,
          height: 120,
          marginTop: 120,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></Image>
      {/* {setIcon(myUserData?.current?.weather_icons)} */}
      {/* {console.log(myUserData?.current?.weather_icons[0])} */}
      <Text style={{
                 textAlign:"center",
                  marginTop: 35,
                  fontWeight: "400",
                  fontSize: 22,
                  color: "grey",
                }}>
        Temperature : {myUserData?.current?.temperature} °C
      </Text>
      <Text style={{
                  textAlign:"center",
                  marginTop: 35,
                  fontWeight: "400",
                  fontSize: 22,
                  color: "grey",
                }}>
        Precipitation : {myUserData?.current?.precip} %
      </Text>
      <Text style={{
                  textAlign:"center",
                  marginTop: 35,
                  fontWeight: "400",
                  fontSize: 22,
                  color: "grey",
                }}>
        Wind Speed : {myUserData?.current?.wind_speed} kmph
      </Text>
    </View>
    </ScrollView>
  );
};

export default Weather;

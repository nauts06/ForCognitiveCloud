import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView, 
  ToastAndroid,
} from "react-native";
import { Headline, Button } from "react-native-paper";
import React, { useEffect, useState, useContext } from "react";
import { PracticeContext } from "./PracticeContext";

const Country = ({ navigation }) => {
  const [myUserData, setMyUserData] = useState();
  //const [ isLoaded , setIsLoaded] = useState(true)

  const { val, setVal, capital, setCapital } = useContext(PracticeContext);

  // console.log(capital);

  const getUserData = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${val}`
      );
      const myData = await response.json();
      setMyUserData(myData);
      // setIsLoaded(false)
    } catch (error) {
      // ToastAndroid.show(error, "error", ToastAndroid.SHORT);
       console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
    // console.log(search);
  }, []);

  return (
    <ScrollView>
      <View>
        <Headline
          style={{
            textAlign: "center",
            marginTop: 25,
            fontWeight: "700",
            fontSize: 26,
          }}
        >
          Country Details
        </Headline>
        <FlatList
          data={myUserData}
          renderItem={({ item }) => {
            return (
              <View>
                <Image
                  source={{ uri: `${item.flags?.png}` }}
                  style={{
                    width: 200,
                    height: 200,
                    marginTop: 25,
                    marginLeft: 25,
                  }}
                ></Image>
                <Text
                  style={{
                    marginLeft: 25,
                    marginTop: 35,
                    fontWeight: "400",
                    fontSize: 22,
                    color: "grey",
                  }}
                >
                  Capital : {item.capital}
                  {/* {  console.log(item.capital[0])} */}
                  {setCapital(item.capital[0])}
                </Text>
                <Text
                  style={{
                    marginLeft: 25,
                    marginTop: 35,
                    fontWeight: "400",
                    fontSize: 22,
                    color: "grey",
                  }}
                >
                  Country's Population : {item.population}
                </Text>
                <Text
                  style={{
                    marginLeft: 25,
                    marginTop: 35,
                    fontWeight: "400",
                    fontSize: 22,
                    color: "grey",
                  }}
                >
                  Latitude : {item.latlng[0]} deg
                </Text>
                <Text
                  style={{
                    marginLeft: 25,
                    marginTop: 35,
                    fontWeight: "400",
                    fontSize: 22,
                    color: "grey",
                  }}
                >
                  Longitude : {item.latlng[1]} deg
                </Text>
              </View>
            );
          }}
        />

        <Button
          style={{
            width: 180,
            marginLeft: 85,
            borderRadius: 10,
            marginTop: 40,
            marginBottom: 80,
            backgroundColor: "rgb(43, 174, 250)",
          }}
          onPress={() => navigation.navigate("Weather")}
        >
          <Text style={{ color: "white" }}>Capital Weather</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default Country;

const styles = StyleSheet.create({
  btn: {
    width: "50%",
    borderRadius: 50,
    paddingVertical: 10,
    padding: 10,
  },
});

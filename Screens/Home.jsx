import { View, Text} from "react-native";
import { TextInput, Button } from "react-native-paper";
import React, { useContext} from "react";
import { PracticeContext } from "./PracticeContext";

const Home = ({ navigation }) => {
  //const [search, setSearch] = useState("");
  const { val, setVal } = useContext(PracticeContext);

  const Submit = () => {
    // return console.log(val);
    
  };
  return (
    <View>
      <TextInput
        style={{ marginTop: 300, width: 220, marginLeft: 65 }}
        label="Country"
        placeholder="Enter country"
        mode="outlined"
        onChangeText={(text) => setVal(text)}
        value={val}
      />

      <Button
        style={{
          width: 180,
          marginLeft: 85,
          borderRadius: 10,
          marginTop: 10,
          backgroundColor: "rgb(43, 174, 250)",
        }}
        disabled={!val}
        onPress={() => Submit(navigation.navigate("Country"))}
      >
        <Text style={{ color: "white" }}>Submit</Text>
      </Button>
    </View>
  );
};

export default Home;

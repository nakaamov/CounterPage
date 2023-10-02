import React, { useState, useRef } from "react";
import { Alert } from "react-native";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from "react-native";

function MyCustomButton(props) {
  return (
    <TouchableOpacity
      style={[style.button, props.style]}
      onPress={props.onPress}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
    >
      <Text style={style.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count === 0) {
      Alert.alert("Eksiler olmuyor!!");
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleDecrementStart = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      } else {
        clearInterval(intervalRef.current);
        Alert.alert("Eksiler olmuyor!!");
      }
    }, 200);
  };

  const handleDecrementEnd = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <SafeAreaView>
      <View style={style.container}>
        <Image
          source={require("./assets/adaptive-icon.png")}
          style={style.image}
        />
        <Text style={style.text}>Adet: {count}</Text>
        <Text style={style.subtitle}>Yeşile basarak artırabilirsiniz.Kırmızıya basarak azaltabilirsiniz.</Text>

        <View style={style.buttonContainer}>
          <MyCustomButton title="Arttır +" onPress={handleIncrement} />
          <MyCustomButton
            title="Eksilt -"
            onPress={handleDecrement}
            onPressIn={handleDecrementStart}
            onPressOut={handleDecrementEnd}
            style={{ backgroundColor: "pink", marginStart: 16 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    margin: 16,
  },
  text: {
    fontSize: 30,
    marginTop: 16,
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
    marginTop: 4,
  },
  subtitleSmall: {
    fontSize: 16,
    color: "gray",
    marginTop: 4,
  },
  image: {
    height: "41%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    backgroundColor: "lightgreen",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "black",
  },
});
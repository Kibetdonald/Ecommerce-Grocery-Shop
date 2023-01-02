import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const GotoDashboard = () => {
    navigation.navigate("Dashboard");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.WelcomeImage}
        source={require("../assets/images/grocery.png")}
      />
      <Text style={styles.Text1}>Shop Your Daily Grocery</Text>
      <Text style={styles.Text2}>
        The easiest way to share your family's grocery shopping. Try it out.
      </Text>
      <Pressable onPress={GotoDashboard} style={styles.WelcomeButtton}>
        <Text style={styles.Text3}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: height / 12,
    alignItems: "center",
  },
  WelcomeImage: {
    resizeMode: "contain",
    width: width,
    height: height / 2,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  Text1: {
    fontSize: 30,
    paddingTop: 20,
    fontWeight: "bold",
  },
  Text2: {
    fontSize: 20,
    width: "80%",
    textAlign: "center",
    fontWeight: "500",
    marginTop: 20,
  },
  Text3: {
    color: "#fff",
    fontSize: 18,
  },
  WelcomeButtton: {
    width: "80%",
    backgroundColor: "#FF725E",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height / 12,
    borderRadius: 5,
  },
});

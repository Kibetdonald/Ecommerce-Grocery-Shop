import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Category from "../components/Category";
import Products from "../components/Products";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation()
  const TrackOrder=()=>{
    navigation.navigate('Track')
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <View>
          <Text style={styles.text1}>Daily</Text>
          <Text style={styles.text2}>Grocery Food</Text>
        </View>
        <Ionicons onPress={TrackOrder} name="notifications" size={30} color="black" />
      </View>
      <Category/>
      <Products/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  headerSection: {
    paddingHorizontal: 25,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text1: {
    fontSize: 35,
    fontWeight: "bold",
    // color: "#FF725E"
  },
  text2: {
    fontSize: 35,
    fontWeight: "bold",
    // color: "#FF725E"
  },
});

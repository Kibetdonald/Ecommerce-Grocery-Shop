import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { AntDesign, Feather, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation()
  const TrackOrder=()=>{
    navigation.navigate("Track")
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Profile</Text>
        <Ionicons name="notifications" size={24} color="black" />
      </View>
      <View style={styles.profileContent}>
        <Image
          source={require("../assets/images/profile.jpg")}
          style={styles.profile}
        />
        <Text style={styles.text1}>John Kamau</Text>
        <Text style={styles.text2}>johnkamau@gmail.com</Text>
        <Pressable style={styles.Seller}>
          <Text style={styles.text4}>Become a Seller</Text>
        </Pressable>
           {/* Track Order */}
           <Pressable onPress={TrackOrder} style={styles.button}>
           <MaterialIcons name="track-changes" size={24} color="black" />
          <Text style={styles.text3}>Track Order</Text>
          <AntDesign name="right" size={20} color="black" />
        </Pressable>
        {/* Purchase History */}
        <Pressable onPress={TrackOrder} style={styles.button}>
        <FontAwesome name="history" size={24} color="#333" />
          <Text style={styles.text3}>Purchase History</Text>
          <AntDesign name="right" size={20} color="grey" />
        </Pressable>
        {/* Vouchers */}
        <Pressable onPress={TrackOrder} style={styles.button}>
        <Ionicons name="cash-outline" size={24} color="black" />
          <Text style={styles.text3}>Vouchers</Text>
          <AntDesign name="right" size={20} color="black" />
        </Pressable>
        {/* Help & Support */}
        <Pressable onPress={TrackOrder} style={styles.button}>
        <Feather name="help-circle" size={24} color="black" />
          <Text style={styles.text3}>Help & Support</Text>
          <AntDesign name="right" size={20} color="black" />
        </Pressable>
        {/* Settings */}
        <Pressable onPress={TrackOrder} style={styles.button}>
        <Feather name="settings" size={24} color="black" />
          <Text style={styles.text3}>Settings</Text>
          <AntDesign name="right" size={20} color="black" />
        </Pressable>
        {/* LogOut */}
        <Pressable onPress={TrackOrder} style={styles.button}>
        <AntDesign name="login" size={24} color="black" />
          <Text style={styles.text3}>Log out</Text>
          <AntDesign name="right" size={20} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    backgroundColor: "#FF725E",
    paddingTop: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  profileContent: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: "center",
  },
  profile: {
    resizeMode: "contain",
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  text2: {
    fontSize: 15,
    fontWeight: "200",
    marginTop: 5,
    color: "grey"
  },

  button: {
    marginTop: 10,
    paddingVertical: 13,
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: "#ddd",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text3: {
    fontSize: 17,
    paddingLeft: 10,
    width: "80%",
  },
  Seller: {
    backgroundColor: "#FF725E",
    width: "60%",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10
  },
  text4: {
    fontSize: 18,
    color: "#fff",
  },
});

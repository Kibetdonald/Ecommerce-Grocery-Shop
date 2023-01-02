import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { mapStyle } from "../assets/style/style";
import {
  Feather,
  EvilIcons,
  FontAwesome5,
  Ionicons,
  Zocial,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
export default function TrackOrder() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Track Order</Text>
        <Ionicons name="notifications" size={24} color="black" />
      </View>
      <View style={{ height: "60%" }}>
        <MapView
          provider="google"
          style={StyleSheet.absoluteFillObject}
          initialRegion={{
            latitude: -1.2889182476058183,
            longitude: 36.82314591328698,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02 * ASPECT_RATIO,
          }}
          customMapStyle={mapStyle}
        >
          <Marker
            coordinate={{
              latitude: -1.2850055069925186,
              longitude: 36.824796772815084,
            }}
          >
            <View style={styles.pin}>
              <FontAwesome5 name="map-marker-alt" size={24} color="#0ddda2" />
            </View>
          </Marker>
          <Marker
            coordinate={{
              latitude: -1.2896005766912968,
              longitude: 36.824502945833885,
            }}
          >
            <View style={styles.navigate}>
              <Ionicons name="navigate" size={24} color="black" />
            </View>
          </Marker>
        </MapView>
      </View>
      <View>
        <Pressable style={styles.deliveryStatus}>
          <Image
            source={require("../assets/images/driver.jpg")}
            style={styles.driver}
          />
          <View style={{ width: "60%", marginLeft: 20 }}>
            <Text style={styles.text1}>John Doe</Text>
            <Text style={styles.text2}>Delivery Person</Text>
          </View>
          <Zocial name="call" size={28} color="black" />
        </Pressable>
        <Pressable style={styles.deliveryStatus}>
          <MaterialIcons name="my-location" size={24} color="black" />
          <View style={{ width: "60%", marginLeft: 20 }}>
            <Text style={styles.text1}>72, Kimathi Street, Nairobi</Text>
            <Text style={styles.text2}>Delivery Location | 12:20pm</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: "#FF725E",
    paddingTop: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  pin: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: "rgba(2,220,159,.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  navigate: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  driver: {
    width: 60,
    height: 60,
    borderRadius: 80,
  },
  deliveryStatus: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 8,
  },
  text1: {
    fontSize: 20,
    fontWeight: "300",
  },
  text2: {
    fontSize: 16,
    color: "grey",
  },
});

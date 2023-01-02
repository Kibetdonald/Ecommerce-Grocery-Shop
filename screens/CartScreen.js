import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {

  const navigation = useNavigation();
  const Checkout=()=>{
    navigation.navigate("Checkout")
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>My Cart</Text>
        <Ionicons name="notifications" size={24} color="black" />
      </View>
      {/* Cart View */}
      <View style={styles.cartProducts}>
        <Image
          source={require("../assets/images/strawberry.png")}
          style={styles.ProductImage}
        />

        <View style={{ marginLeft: 20 }}>
          <Text style={styles.text1}>Strawberry</Text>
          <Text style={styles.text2}>Fruit</Text>
          <Text style={styles.text3}>$5.60/kg</Text>
        </View>

        <View
          style={{ left: 80, height: 100, justifyContent: "space-between" }}
        >
          <Pressable style={styles.QuantityButton}>
            <Text style={styles.Operation}>+</Text>
          </Pressable>
          <Text style={styles.Quantity}>1Kg</Text>
          <Pressable style={styles.QuantityButton}>
            <Text style={styles.Operation}>-</Text>
          </Pressable>
        </View>
      </View>
      {/* Second */}
      <View style={styles.cartProducts}>
        <Image
          source={require("../assets/images/Dhania.png")}
          style={styles.ProductImage}
        />

        <View style={{ marginLeft: 20 }}>
          <Text style={styles.text1}>Dhania</Text>
          <Text style={styles.text2}>Vegetable</Text>
          <Text style={styles.text3}>$2.20/kg</Text>
        </View>

        <View
          style={{ left: 110, height: 100, justifyContent: "space-between" }}
        >
          <Pressable style={styles.QuantityButton}>
            <Text style={styles.Operation}>+</Text>
          </Pressable>
          <Text style={styles.Quantity}>2Kg</Text>
          <Pressable style={styles.QuantityButton}>
            <Text style={styles.Operation}>-</Text>
          </Pressable>
        </View>
      </View>
      {/* Order Info */}
      <Text style={styles.text4}>Order Information</Text>
      <View style={styles.orderInfo}>
        <Text style={styles.text5}>Subtotal:</Text>
        <Text style={styles.text5}>$85.52</Text>
      </View>
      <View style={styles.orderInfo}>
        <Text style={styles.text5}>Delivery Fee:</Text>
        <Text style={styles.text5}>$1.50</Text>
      </View>
      <View style={styles.orderInfo}>
        <Text style={styles.text5}>Discount:</Text>
        <Text style={styles.text5}>0.60%</Text>
      </View>
      <View
        style={{
          borderStyle: "dotted",
          borderWidth: 1,
          borderRadius: 1,
          marginTop: 10,
        }}
      />
      <View style={styles.orderInfo}>
        <Text style={styles.text6}>Total:</Text>
        <Text style={styles.text6}>$87.65</Text>
      </View>
      <Pressable onPress={Checkout} style={styles.CheckOutButtton}>
        <Text style={styles.text7}>Checkout</Text>
      </Pressable>
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

  productQuantity: {
    paddingHorizontal: 30,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
  },
  QuantityButton: {
    backgroundColor: "#FF725E",
    width: 30,
    height: 30,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  Quantity: {
    fontSize: 15,
    marginTop: 8,
  },
  Operation: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  cartProducts: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginHorizontal: 10,
    backgroundColor: "#ddd",
    marginTop: 30,
    borderRadius: 8,
    padding: 18,
  },
  ProductImage: {
    width: 100,
    height: 100,
    resizeMode: "center",
  },
  text1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 20,
    fontWeight: "200",
    color: "grey",
  },
  text3: {
    fontSize: 20,
    fontWeight: "500",
  },
  text4: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
  },
  text5: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
  text6: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  text7: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  orderInfo: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 30,
    marginTop: 10,
  },
  CheckOutButtton: {
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: "#FF725E",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

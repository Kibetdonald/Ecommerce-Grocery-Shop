import { View, Text, StyleSheet, Image, Pressable, Modal } from "react-native";
// import CheckBox from '@react-native-community/checkbox';
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

export default function CheckOutScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Checkout</Text>
        <Ionicons name="notifications" size={24} color="black" />
      </View>
      {/* Second View */}
      <View style={styles.HeaderText}>
        <Text style={styles.text1}>Delivery Address</Text>
        <Text style={styles.text2}>Add Here</Text>
      </View>
      <View style={styles.SelectStation}>
        {/* <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        /> */}
        <Text style={styles.Location}>Home</Text>
        <Text style={styles.Address}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
      </View>
      <View style={styles.SelectStation}>
        {/* <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        /> */}

        <Text style={styles.Location}>Office</Text>
        <Text style={styles.Address}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
      </View>
      {/* Payment Method */}
      <View style={styles.payment}>
        <Text style={styles.text1}>Payment Method</Text>
      </View>
      {/* Means 1 */}
      <View style={styles.PaymentMethod}>
        {/* <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        /> */}
        <Image
          style={styles.logo}
          source={require("../assets/images/mpesa.png")}
        />
        <Text style={styles.PaymentText}>M-Pesa</Text>
      </View>
      {/* Means 1 */}
      <View style={styles.PaymentMethod}>
        {/* <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        /> */}
        <Image
          style={styles.logo}
          source={require("../assets/images/mastercard.png")}
        />
        <Text style={styles.PaymentText}>Mastercard</Text>
      </View>
      {/* Means 1 */}
      <View style={styles.PaymentMethod}>
        {/* <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        /> */}
        <Image
          style={styles.logo}
          source={require("../assets/images/apple.png")}
        />
        <Text style={styles.PaymentText}>Apple Pay</Text>
      </View>
      <Text style={styles.Total}>Total: $80.65</Text>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.textButton}>Place Order</Text>
      </Pressable>

      {/* Modal */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image style={styles.modalImage} source={require("../assets/images/tick.png")} />
              <Text style={styles.modalText}>Order Placed Successfully!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
  HeaderText: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  SelectStation: {
    borderWidth: 2,
    borderColor: "#ddd",
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  Location: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Address: {},
  text1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 18,
  },
  payment: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  PaymentMethod: {
    borderWidth: 2,
    borderColor: "#ddd",
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "center",
  },
  PaymentText: {
    fontWeight: "bold",
    marginLeft: 20,
    fontSize: 21,
  },
  Total: {
    textAlign: "center",
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 18,
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: "#FF725E",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
  },
  // Modal styling
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalImage:{
    resizeMode: "center"
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 45,
    paddingBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: "#1aaa1a",
    paddingHorizontal: 50
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

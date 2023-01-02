import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import productsData from "../Data/productsData";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

export default function Products() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      image={item.image}
      price={item.price}
      favourite={item.favourite}
      rating={item.rating}
      desc={item.desc}
    />
  );
  const Item = ({ name, image, price, favourite, rating, desc }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details", {
          name,
          image,
          desc,
        });
      }}
    >
      <View style={styles.item}>
        <View style={styles.ImageView}>
          <Image source={image} style={styles.ProductImage} />
        </View>
        <View style={styles.ProductInfo}>
          <Text style={styles.productName}>{name}</Text>
          <Text>{price}</Text>
          {favourite == "Yes" ? (
            <MaterialIcons name="favorite" size={20} color="#FF725E" />
          ) : (
            <Text></Text>
          )}
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <FontAwesome name="star" size={16} color="orange" />
            <FontAwesome name="star" size={16} color="orange" />
            <FontAwesome name="star" size={16} color="orange" />
            <FontAwesome name="star" size={16} color="orange" />
            <FontAwesome name="star" size={16} color="orange" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={productsData}
        numColumns={2}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        style={{ marginBottom: 140 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: width / 2.2,
    backgroundColor: "#ddd",
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  ImageView: {
    alignItems: "center",
    justifyContent: "center",
  },
  ProductImage: {
    resizeMode: "center",
    height: 160,
    width: "80%",
  },
  ProductInfo: {
    paddingLeft: 30,
    paddingBottom: 12
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

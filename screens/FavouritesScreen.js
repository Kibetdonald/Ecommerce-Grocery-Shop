import { View, Text, StyleSheet, Dimensions , FlatList, Image} from "react-native";
import React from "react";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import favouriteProducts from "../Data/favouriteProducts";

const { height, width } = Dimensions.get("window");
export default function FavouritesScreen() {
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
  );
  return (
    <View>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Wish List</Text>
        <FontAwesome name="search" size={24} color="black" />
      </View>
      <View>
        <FlatList
          data={favouriteProducts}
          numColumns={2}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          style={{ paddingBottom: 500 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "#FF725E",
    paddingTop: 40,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
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
    paddingBottom: 20
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

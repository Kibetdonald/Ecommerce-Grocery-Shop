import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  Fontisto,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
// import useNavigation from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
export default function DetailsScreen() {
  const route = useRoute();
//   const navigation = useNavigation();
  //   Dummy data
  const RelatedProducts = [
    {
      id: "1",
      name: "Strawberry",
      image: require("../assets/images/strawberry.png"),
      price: "$1.50/kg",
      favourite: "Yes",
      rating: 4,
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      id: "2",
      name: "Cabbage",
      image: require("../assets/images/cabbage.png"),
      price: "$1.50/kg",
      favourite: "No",
      rating: 4,
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      id: "3",
      name: "Beef",
      image: require("../assets/images/beef.png"),
      price: "$1.50/kg",
      favourite: "Yes",
      rating: 4,
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      id: "4",
      name: "Dhania",
      image: require("../assets/images/Dhania.png"),
      price: "$1.50/kg",
      favourite: "Yes",
      rating: 4,
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
  ];
  //   Related Products
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
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="star" size={17} color="orange" />
            <FontAwesome name="star" size={17} color="orange" />
            <FontAwesome name="star" size={17} color="orange" />
            <FontAwesome name="star" size={17} color="orange" />
            <FontAwesome name="star" size={17} color="orange" />
          </View>
        </View>
      </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Fontisto name="more-v-a" size={24} color="black" />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ddd",
          paddingBottom: 40,
        }}
      >
        <Image source={route.params.image} style={styles.ProductImage} />
      </View>
      <View style={styles.productInfo}>
        <View style={styles.productQuantity}>
          <View>
            <Text style={styles.Text1}>{route.params.name}</Text>
            <Text style={styles.Text2}>Available in stock</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: 100,
              justifyContent: "space-between",
            }}
          >
            <Pressable style={styles.QuantityButton}>
              <Text style={styles.Operation}>+</Text>
            </Pressable>
            <Text style={styles.Quantity}>1 Kg</Text>
            <Pressable style={styles.QuantityButton}>
              <Text style={styles.Operation}>-</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.Text3}>
          {route.params.desc}{" "}
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>View More</Text>
        </Text>
      </View>
      {/* Related Products */}
      <View style={styles.relatedProducts}>
        <Text style={styles.text4}>Related Products</Text>
        <FlatList
          data={RelatedProducts}
          numColumns={2}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          style={{height: 550, marginBottom: 110}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 120
  },
  header: {
    height: height / 10,
    backgroundColor: "#FF725E",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  ProductImage: {
    marginTop: 40,
  },
  productInfo: {
    borderTopColor: "#ddd",
    borderTopWidth: 2,
  },
  Text1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  Text2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "grey",
  },
  Text3: {
    fontSize: 16,
    paddingHorizontal: 30,
    marginTop: 20,
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
  relatedProducts: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  text4: {
    fontSize: 18,
    fontWeight: "bold",
  },
  //   New
  item: {
    width: width / 2.2,
    backgroundColor: "#ddd",
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10
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
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

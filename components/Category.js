import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import CategoryData from "../Data/categoryData";

export default function Category() {
  const renderItem = ({ item }) => <Item name={item.name} />;
  const Item = ({ name }) => (
    <View style={styles.item}>
      {name == "Fruits" ? (
        <Pressable style={styles.CategoryButtonActive}>
          <Text style={styles.category}>{name}</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.CategoryButton}>
          <Text style={styles.category}>{name}</Text>
        </Pressable>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CategoryData}
        horizontal={true}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20
  },
  item: {
    justifyContent: "space-around",
  },
  CategoryButton: {
    padding: 15,
    borderRadius: 5,
    marginLeft: 15,
    justifyContent: "center",
    alignContent: "center",
  },
  CategoryButtonActive: {
    padding: 15,
    borderRadius: 5,
    marginLeft: 15,
    backgroundColor: "#FF725E",
    justifyContent: "center",
    alignContent: "center",
  },
  category: {
    color: "#000",
  },
});

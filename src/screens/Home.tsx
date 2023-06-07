import { FlatList, StyleSheet, Text, View } from "react-native";
import useUserStore from "../store/user";

const renderItem = ({ item }) => (
  <View style={styles.userInfoContainer}>
    <Text style={styles.userInfo}>Name: {item.name}</Text>
    <Text style={styles.userInfo}>E-mail: {item.email}</Text>
  </View>
);

export default function Home() {
  const users = useUserStore((state) => state.users);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.email}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  userInfo: {
    fontSize: 18,
    color: "white",
  },
  userInfoContainer: {
    marginTop: 20,
    backgroundColor: "#0065FE",
    gap: 10,
    padding: 10,
  },
});

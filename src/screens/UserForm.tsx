import { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import useUserStore from "../store/user";

export default function UserForm() {
  const addUser = useUserStore((state) => state.addUser);

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChangeText = (field: "name" | "email", value: string) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [field]: value,
      };
    });
  };

  const onSubmit = () => {
    const { name, email } = form;

    addUser({
      name,
      email,
    });

    alert("User created successfully!");

    setForm({
      name: "",
      email: "",
    });
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={form.name}
          placeholder="Nome"
          onChangeText={(text) => handleChangeText("name", text)}
          autoCapitalize="none"
          autoFocus
        />
        <TextInput
          style={styles.input}
          value={form.email}
          placeholder="E-mail"
          keyboardType="email-address"
          onChangeText={(text) => handleChangeText("email", text)}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Create User</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  input: {
    width: "90%",
    height: 45,
    fontSize: 26,
    borderWidth: 1,
    padding: 5,
  },
  button: {
    backgroundColor: "#0065FE",
    width: "90%",
    height: 45,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 20,
  },
});

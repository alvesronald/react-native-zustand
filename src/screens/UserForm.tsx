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

export default function UserForm() {
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
    console.log({ form });
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

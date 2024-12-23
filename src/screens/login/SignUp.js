import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { CustomTextInput, Button } from "../../components";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topText}>SignUp</Text>

      <Image source={require("../../../assets/images/signUp.png")} />

      <CustomTextInput
        isSecureText={false}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter email"
      />
      <CustomTextInput
        isSecureText={true}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter password"
      />

      <CustomTextInput
        isSecureText={true}
        onChangeText={setPassword}
        value={password}
        placeholder="Confirm password"
      />

      <Button
        title={"Sign Up"}
        pressedButton="lightgrey"
        buttonColor="#20c3af"
      />

      <Text style={{ textAlign: "center" }}>or</Text>
      <View style={styles.or}>
        <Pressable style={({pressed})=>[
          {
            backgroundColor: pressed ?
            "lightgray" : "#fff",
          },styles.orItem]}>
          <Text>Gmail</Text>
        </Pressable>
        <Pressable style={({pressed})=>[
          {
            backgroundColor: pressed ?
            "lightgray" : "#fff",
          },styles.orItem]}>
          <Text>LinkedIn</Text>
        </Pressable>
        <Pressable style={({pressed})=>[
          {
            backgroundColor: pressed ?
            "lightgray" : "#fff",
          },styles.orItem]}>
          <Text>Twitter</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.account}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>
          Already have an account?
          <Text style={{ color: "#ffb19d" }}> LogIn</Text>
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
  topText: {
    justifyContent: "center",
    textAlign: "center",
    width: "80%",
    fontSize: 23,
    color: "#525464",
    marginTop: 25,
  },
  forgot: {
    width: "80%",
    textAlign: "right",
  },
  or: {
    flexDirection: "row",
    height: 60,
    width: "80%",
    justifyContent: "space-between",
  },
  orItem: {
    width: "30%",
    borderWidth: 1,
    borderColor: "#F1F1F1",
    alignItems: "center",
    justifyContent: "center",
  },
  account: {
    width: "80%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  Alert
} from "react-native";
import React from "react";
import { CustomTextInput, Button } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setLogin } from "../../redux/userSlice";

const Login = ({ navigation }) => {
  const { email, password } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topText}>Login</Text>

      <Image source={require("../../../assets/images/home.png")} />

      <CustomTextInput
        isSecureText={false}
        onChangeText={(text) => dispatch(setEmail(text))}
        value={email}
        placeholder="Email"
      />

      <CustomTextInput
        isSecureText={true}
        onChangeText={(password) => dispatch(setPassword(password))}
        value={password}
        placeholder="Password"
      />
      <Pressable
      style={{width:'30%', alignSelf: 'flex-end', right:'10%'}}
      onPress={()=>{Alert.alert('bilgiler','email: test@test.com \npassword: 123456', [{text:'tamam'}])}}
      >
      <Text style={styles.forgot}>Forgot your {"\n"} Password?</Text>
      </Pressable>
      <Button 
        title={"Login"} 
      onPress={() => dispatch(setLogin())} 
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
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text>
          Don't have an account?{" "}
          <Text style={{ color: "#ffb19d" }}> Sign Up</Text>
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Login;

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
    width: "100%",
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

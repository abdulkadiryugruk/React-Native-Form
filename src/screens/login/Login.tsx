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

const Login = ({navigation}) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
  return (
    <SafeAreaView style={styles.container}>

        <Text style={styles.topText}>Login</Text>

      <Image source={require("../../../assets/images/home.png")} />

	  <CustomTextInput
	  isSecureText={false}
	  onChangeText={setUsername}
	  value={username}
	  placeholder="Username"
	  />

	  <CustomTextInput
	  isSecureText={true}
	  onChangeText={setPassword}
	  value={password}
	  placeholder="Password"
	  />

      <Text style={styles.forgot}>Forgot your {"\n"} Password?</Text>

		<Button
		title={'Login'}
		/>

      <Text style={{ textAlign: "center" }}>or</Text>
      <View style={styles.or}>
        <Pressable style={styles.orItem}>
          <Text>Gmail</Text>
        </Pressable>
        <Pressable style={styles.orItem}>
          <Text>LinkedIn</Text>
        </Pressable>
        <Pressable style={styles.orItem}>
          <Text>Twitter</Text>
        </Pressable>
      </View>
      <Pressable style={styles.account}
      onPress={()=>navigation.navigate('SignUp')}
      >
		<Text>Don't have an account? <Text style={{color:'#ffb19d'}}> Sign Up</Text></Text>
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
	justifyContent:'center',
	textAlign:'center',
    width: "80%",
    fontSize: 23,
    color: "#525464",
	marginTop:20

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
	alignItems:'center',
	justifyContent:'center'
  },
  account:{
	width: "80%",
	height:40,
	alignItems:'center',
	justifyContent:'center',
	marginBottom:10
  },
});

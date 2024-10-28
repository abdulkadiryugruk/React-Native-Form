import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "../../components";
import { setLogout } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth); 

  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() => {
          dispatch(setLogout());
        }}
        title={"Logout"}
        pressedButton="lightgray"
        buttonColor="#20c3af"
      />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
});

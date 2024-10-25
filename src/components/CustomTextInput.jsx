import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({isSecureText, onChangeText, value,placeholder}) => {
  return (
	<View style={styles.inputContainer}>
	  <TextInput 
	  secureTextEntry={isSecureText}
	  style={styles.input} 	
	  onChangeText={onChangeText}
	  value={value}
	  placeholder={placeholder}
	  />
	</View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
	inputContainer:{
		width:'80%'
	},
	input: {
		width: "100%",
		height: 50,
		backgroundColor: "#F7F7F7",
		borderWidth:0.2,
		borderColor:'#B0B0C3'
	  },
})
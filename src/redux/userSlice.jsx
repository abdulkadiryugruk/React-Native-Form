import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

const initialState = {
  email: null,
  password: null,
  isAuth:false,
  users: {
    userEmail : 'test@test.com',
    userPassword : '123456'
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action)=>{
      const loverCaseEmail = action.payload.toLowerCase()
      state.email = loverCaseEmail;
    },
    setPassword:(state, action)=> {
      state.password = action.payload;
    },
    setLogin : (state) =>{
      if(state.email === state.users.userEmail && state.password === state.users.userPassword ){
        state.isAuth = true
      } else{
        state.isAuth = false
        Alert.alert("Giriş Hatası", "Email veya Sifreniz hatali, lutfen tekrar deneyiniz!", [{ text: "Tamam" }]);
        
      }
    },
    setLogout: (state) => {
      state.isAuth = false;
    },
  },
});
export const { setEmail, setPassword, setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;

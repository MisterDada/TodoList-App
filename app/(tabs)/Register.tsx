import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TextInput,
    TouchableOpacity,
    Alert,
  } from "react-native";
  import { useState } from "react";
  import React from "react";
  
  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const errorMessage = () => {
        if (email === "") {
            setEmailError("Email cannot be empty");
        } else if (password === "") {
            setPasswordError("Password cannot be empty");
        } else if (confirm === "") {
            setConfirmError("Please re-enter password");
        } else if (password !== confirm) {
            setPasswordError("Passwords do not match");
        } else {
            Alert.alert("Registration Successful");

        }
    }
  
  
  
  
  
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 30, fontWeight: 700, marginBottom: 5 }}>
            Register
          </Text>
          <Text style={{ marginBottom: 15, fontSize: 20, fontWeight: 400}}>
            Welcome! Create an account
          </Text>
          <TouchableWithoutFeedback>
            <View>
              <Text style={{ marginBottom: 5, fontSize: 18 }}>Email</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "black",
                  height: 50,
                  marginBottom: 10,
                  borderRadius: 8,
                  paddingLeft: 10,
                }}
                autoCapitalize="none"
                placeholder="example@gmail.com"
                value={email}
                onChangeText={(email) => setEmail(email)}
              />
                
                    <Text style={{color: 'red', display: 'flex'}}>{emailError}</Text>

              <Text style={{ marginBottom: 5, fontSize: 18 }}>Create Password</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "black",
                  height: 50,
                  marginBottom: 20,
                  borderRadius: 8,
                  paddingLeft: 10,
                }}
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                secureTextEntry={true}
                autoCapitalize="none"
                value={password}
                onChangeText={(password) => setPassword(password)}
              />
               <Text style={{color: 'red'}}>{passwordError}</Text>
              <Text style={{ marginBottom: 5, fontSize: 18 }}>Confirm Password</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "black",
                  height: 50,
                  marginBottom: 20,
                  borderRadius: 8,
                  paddingLeft: 10,
                }}
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                secureTextEntry={true}
                autoCapitalize="none"
                value={confirm}
                onChangeText={(confirm) => setConfirm(confirm)}
              />
               <Text style={{color: 'red'}}>{confirmError}</Text>
  
              <TouchableOpacity
              onPress={() => errorMessage()}
                style={{
                  width: "100%",
                  backgroundColor: "rgb(9, 121, 105)",
                  height: 50,
                  justifyContent: "center",
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{ color: "white", textAlign: "center", fontSize: 20 }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
  
      </View>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 80,
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 30,
      justifyContent: "space-between",
      flexDirection: "column",
      flex: 1,
    },
  });
  
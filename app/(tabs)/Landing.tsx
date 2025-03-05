import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<any>;
};

const Landing = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
       
        <Text
        style={{ marginBottom: 60, fontSize: 30, color: "black" }}
      >
        Welcome To Pigeon
      </Text>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() =>
            navigation.navigate("Login", {
              screen: "Login",
            })
          }
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() =>
            navigation.navigate("Register", {
              screen: "Register",
            })
          }
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  loginButtonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  loginButton: {
    color: "white",
    fontSize: 20,
    backgroundColor: "rgb(9, 121, 105)",
    padding: 10,
    borderRadius: 10,
    height: 50,
    width: 150,
  },
  registerButton: {
    fontSize: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    height: 50,
    width: 150,
  },
  registerButtonText: {
    color: "rgb(9, 121, 105)",
    textAlign: "center",
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: '100%', 
    flex: 1, 
    justifyContent: "center",
    alignItems: 'center'
  }
});

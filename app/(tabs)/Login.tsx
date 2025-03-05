import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import React from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");





  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 30, fontWeight: 700, marginBottom: 5 }}>
          Login
        </Text>
        <Text style={{ marginBottom: 15, fontSize: 20, fontWeight: 400}}>
          Welcome back! Enter your details
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
              placeholder="Enter Email"
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
            <Text style={{ marginBottom: 5, fontSize: 18 }}>Password</Text>
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
            <View style={{ marginBottom: 20, alignItems: "flex-end" }}>
              <TouchableOpacity>
                <Text style={{ fontSize: 18, color: "rgb(9, 121, 105)" }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
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

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 18, color: "rgb(9, 121, 105)" }}>
            Don't have an account? Register
          </Text>
        </TouchableOpacity>
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

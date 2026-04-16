import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }
    onLogin();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#F9F5FF" }}>
      
      <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 5 }}>
        Welcome Back 👋
      </Text>

      <Text style={{ color: "#6B7280", marginBottom: 30 }}>
        Login to continue
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          backgroundColor: "#FFFFFF",
          padding: 15,
          borderRadius: 12,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          backgroundColor: "#FFFFFF",
          padding: 15,
          borderRadius: 12,
          marginBottom: 25,
        }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: "#6B46C1",
          padding: 16,
          borderRadius: 12,
          marginBottom: 15,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold", fontSize: 16 }}>
          Login
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default LoginScreen;
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { AuthContext } from "../../hooks/authContext";

export default function Profile({ navigation }) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProfilePage</Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          width: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => signOut()}
      >
        <Text style={{ color: "#FFF" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

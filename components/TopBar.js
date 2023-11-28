import { View, Text, Image } from "react-native";
import React from "react";
import { Bars3Icon } from "react-native-heroicons/outline";

export default function TopBar() {
  return (
    <View className="flex-row justify-between align-middle top-6">
      <Bars3Icon size="40" color="grey" />
      <Image
        style={{ width: 200, height: 50 }}
        source={require("../assets/images/40love.png")}
      />
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../assets/images/user.png")}
      />
    </View>
  );
}

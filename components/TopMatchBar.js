import { View, Text } from "react-native";
import React from "react";
import { ArrowPathIcon } from "react-native-heroicons/outline";

export default function TopMatchBar() {
  return (
    <View className="flex-row align-middle justify-evenly absolute">
      <Text className="text-black font-semibold text-lg">
        Track Live Match {"              "}
      </Text>

      <ArrowPathIcon size="40" color="grey" className="ml-11" />
    </View>
  );
}

import { View, Text } from "react-native";
import React from "react";
import { ArrowPathIcon } from "react-native-heroicons/outline";

export default function TopMatchBar() {
  return (
    <View className="flex-1 flex-row items-center justify-center">
      <View className="justify-center">
        <Text className="text-black font-semibold text-lg">
          Track Live Match
        </Text>
      </View>
      <ArrowPathIcon size="40" color="grey" />
    </View>
  );
}

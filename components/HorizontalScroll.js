import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function HorizontalScroll() {
  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        <View
          className="flex justify-center items-center w-36  h-60 rounded-3xl py-3 space-y-1 mb-24 mr-3 top-24"
          style={{ backgroundColor: "#31da60" }}
        >
          <Image
            source={require("../assets/images/two_players.jpg")}
            className="w-28 h-28 rounded-lg"
          />
          <Text className="text-white text-base font-semibold">
            Maida & John
          </Text>
          <Text className="text-white text-lg font-semibold">Fri, 2 Sep</Text>
          <Text className="text-white">More Info</Text>
        </View>
        <View
          className="flex justify-center items-center w-36 h-60  rounded-3xl py-3 space-y-1 mr-3 top-24"
          style={{ backgroundColor: "#31da60" }}
        >
          <Image
            source={require("../assets/images/two_players.jpg")}
            className="w-28 h-28 rounded-lg"
          />
          <Text className="text-white">Maida & John</Text>
          <Text className="text-white text-xl font-semibold">Fri, 2 Sep</Text>
          <Text className="text-white">More Info</Text>
        </View>
        <View
          className="flex justify-center items-center w-36 h-60  rounded-3xl py-3 space-y-1 mr-3 top-24"
          style={{ backgroundColor: "#31da60" }}
        >
          <Image
            source={require("../assets/images/two_players.jpg")}
            className="w-28 h-28 rounded-lg"
          />
          <Text className="text-white">Maida & John</Text>
          <Text className="text-white text-xl font-semibold">Fri, 2 Sep</Text>
          <Text className="text-white">More Info</Text>
        </View>
        <View
          className="flex justify-center items-center w-36 h-60  rounded-3xl py-3 space-y-1 mr-3 top-24"
          style={{ backgroundColor: "#31da60" }}
        >
          <Image
            source={require("../assets/images/two_players.jpg")}
            className="w-28 h-28 rounded-lg"
          />
          <Text className="text-white">Maida & John</Text>
          <Text className="text-white text-xl font-semibold">Fri, 2 Sep</Text>
          <Text className="text-white">More Info</Text>
        </View>
      </ScrollView>
    </View>
  );
}

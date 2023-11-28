import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import {
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  AdjustmentsVerticalIcon,
  Bars3Icon,
} from "react-native-heroicons/outline";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useCallback, useState } from "react";
import VerticalScroll from "../components/VerticalScroll";
import HorizontalScroll from "../components/HorizontalScroll";
import TopBar from "../components/TopBar";
export default function Page() {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light"></StatusBar>

      {/*content*/}
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? 40 : 0,
          flex: 1,
        }}
        className="flex flex-1"
      >
        <View className=" style={{height:'auto',justifyContent:'space-between'}} mx-4 relative z-40 ">
          {/* top bar 40lovelogo*/}
          <TopBar></TopBar>
          {/* User Greeting*/}
          <View className="flex-col items-start  space-x-2 top-8">
            <Text className="text-black text-lg font-normal"> Hi Ruth</Text>
            <Text className="text-black text-lg font-semibold">
              Find Your Match
            </Text>
          </View>

          {/*  search bar*/}
          <View className="flex-row justify-normal rounded-full z-50 top-16">
            <MagnifyingGlassIcon size="30" color="grey" />
            <TextInput
              placeholder="Search"
              placeholderTextColor={"gray"}
              className="pl-6 pb-4 h-10 flex-1 text-base text-gray-700"
            ></TextInput>
            <AdjustmentsVerticalIcon size="30" color="grey" />
          </View>
          {/*  matches nearby */}
          <View className="flex-row items-stretch  space-x-32 top-20">
            <Text className="text-black text-lg font-semibold">
              Matches Nearby
            </Text>
            <Text className="text-gray-300 text-lg font-normal">See All</Text>
          </View>

          {/*horizontal scroll*/}
          <HorizontalScroll></HorizontalScroll>
          {/*  Trending Players */}
          <View className="flex-row items-stretch  space-x-32 top-4 z-40">
            <Text className="text-black text-lg font-semibold">
              Trending Players
            </Text>
            <Text className="text-gray-300 text-lg font-normal">See All</Text>
          </View>

          {/*vertical scroll*/}
          <VerticalScroll />
        </View>
      </SafeAreaView>
    </View>
  );
}

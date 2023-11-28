import { View, Text, SafeAreaView, StatusBar, Platform } from "react-native";
import React from "react";
import TopMatchBar from "../components/TopMatchBar";
import ScoreGrid from "../components/ScoreGrid";
import MatchTrack from "../components/MatchTrack";
import UndoButton from "../components/UndoButton";

export default function Match() {
  return (
    <View flex-1 relative>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? 60 : 0,
          flex: 1,
        }}
        className="flex flex-1"
      >
        <View className="  relative z-40 justify-normal justify-items-center">
          <View className="  flex-col relative  ">
            <TopMatchBar />
            <ScoreGrid />
            <MatchTrack />
            <UndoButton />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

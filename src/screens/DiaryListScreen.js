import React, { useCallback } from "react";
import { Header } from "../components/header/Header";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const DiaryListScreen = () => {
  const navigation = useNavigation();
  const onPressSetting = useCallback(() => {
    navigation.navigate("Setting");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="DIARY LIST"></Header.Title>
        </Header.Group>
        <Header.Icon iconName="settings" onPress={onPressSetting} />
      </Header>
    </View>
  );
};

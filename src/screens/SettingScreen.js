import React, { useCallback } from "react";
import { Header } from "../components/header/Header";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../components/Spacer";
import { View } from "react-native";

export const SettingScreen = () => {
  const navigation = useNavigation();
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName="close" onPress={onPressBack} />
          <Spacer space={12} horizontal />
          <Header.Title title="SETTING"></Header.Title>
        </Header.Group>
      </Header>
    </View>
  );
};

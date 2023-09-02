import React, { useCallback } from "react";
import { Header } from "../components/header/Header";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
export const DiaryDetailScreen = () => {
  const navigation = useNavigation();
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName="close" onPress={onPressBack} />
          <Header.Title title="DIARY DETAIL"></Header.Title>
        </Header.Group>
      </Header>
    </View>
  );
};

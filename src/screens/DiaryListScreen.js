import React, { useCallback } from "react";
import { Header } from "../components/header/Header";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { Icon } from "../components/Icons";
export const DiaryListScreen = () => {
  const safeAreaInset = useSafeAreaInsets();

  const navigation = useNavigation();
  const onPressSetting = useCallback(() => {
    navigation.navigate("Setting");
  }, []);

  const onPressAdd = useCallback(() => {
    navigation.navigate("AddDiary");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header>
          <Header.Group>
            <Header.Title title="DIARY LIST"></Header.Title>
          </Header.Group>
          <Header.Icon iconName="settings" onPress={onPressSetting} />
        </Header>
      </View>
      <View
        style={{
          position: "absolute",
          right: 12,
          bottom: safeAreaInset.bottom + 24,
        }}
      >
        <Button onPress={onPressAdd}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="add" color="white" size={30} />
          </View>
        </Button>
      </View>
    </View>
  );
};

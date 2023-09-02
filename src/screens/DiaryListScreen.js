import React, { useCallback, useState } from "react";
import { Header } from "../components/header/Header";
import { FlatList, useWindowDimensions, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { Icon } from "../components/Icons";
import { RemoteImage } from "../components/RemoteImage";
import { Spacer } from "../components/Spacer";
import { Typography } from "../components/Typography";
export const DiaryListScreen = () => {
  // 더미데이터 선언

  const [data, setData] = useState([
    {
      id: 0,
      title: "TITLE_01 ",
      content: "CONTENT_01",
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      imageUrl:
        "https://docs.expo.dev/static/images/tutorial/background-image.png",
    },
    {
      id: 1,
      title: "TITLE_02 ",
      content: "CONTENT_02",
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      imageUrl:
        "https://docs.expo.dev/static/images/tutorial/background-image.png",
    },
    {
      id: 2,
      title: "TITLE_02 ",
      content: "CONTENT_02",
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      imageUrl: null,
    },
  ]);

  const safeAreaInset = useSafeAreaInsets();
  const { width } = useWindowDimensions();

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
        <FlatList
          data={data}
          contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 28 }}
          renderItem={({ item }) => {
            return (
              <Button
                onPress={() => {
                  navigation.navigate("DiaryDetail", { item });
                }}
              >
                <View style={{ paddingVertical: 12 }}>
                  {item.imageUrl !== null && (
                    <View>
                      <RemoteImage
                        url={item.imageUrl}
                        width={width - 48}
                        height={(width - 48) * 0.5}
                        style={{ borderRadius: 8 }}
                      />
                      <Spacer space={4} />
                    </View>
                  )}
                  <View
                    style={{
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}
                  >
                    <View>
                      <Typography fontSize={18}>{item.title}</Typography>
                      <Spacer space={4} />
                      <Typography fontSize={12}>{item.content}</Typography>
                    </View>
                    <Typography fontSize={12}>{item.updatedAt}</Typography>
                  </View>
                </View>
              </Button>
            );
          }}
        />
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

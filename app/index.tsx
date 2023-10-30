import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
const styles = StyleSheet.create({
  stylesContentHeaderHomePage: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default function Page() {
  const [toggleDarkLight, setToggleDarkLight] = useState(true);
  const handleClickIconDarkLight = () => {
    setToggleDarkLight((toggleDarkLight) => !toggleDarkLight);
  };
  return (
    <View className="screen-home-page">
      {toggleDarkLight === true ? (
        <View className="background-image-home-page">
          <ImageBackground
            resizeMode="cover"
            className="h-full w-full object-cover "
            source={require("../assets/images/background-dark.jpg")}
          />
        </View>
      ) : (
        <View className="background-image-home-page">
          <ImageBackground
            resizeMode="cover"
            className="h-full w-full object-cover "
            source={require("../assets/images/background.jpg")}
          />
        </View>
      )}
      <View className="content-page absolute p-[10px]">
        <View className="header-content">
          <View className="flex justify-between items-center flex-row">
            <Text className="text-[25px] text-[#c6e2ff]">Từ điển Hán Nôm</Text>
            <TouchableOpacity
              onPress={handleClickIconDarkLight}
              className="icon-dark-light-header-content"
            >
              <MaterialCommunityIcons
                name="theme-light-dark"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

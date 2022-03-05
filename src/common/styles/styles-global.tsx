import { StyleSheet } from "react-native";
import { ColorsGlobal } from "./colors-global";
import { StylesGlobalDefinitions } from "./styles-global-definations";

export const StyleGlobal = StyleSheet.create({
  title: {
    fontSize: StylesGlobalDefinitions.textSizeTitle.fontSize,
    color: ColorsGlobal.White,
  },
  subTitle: {
    fontSize: StylesGlobalDefinitions.textSizeSubTitle.fontSize,
    color: ColorsGlobal.White,
  },
  container: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

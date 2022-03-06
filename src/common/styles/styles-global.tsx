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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ColorsGlobal.Secondary,
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    fontSize: StylesGlobalDefinitions.textSizeContent.fontSize,
    marginBottom: StylesGlobalDefinitions.m_b_10.marginBottom,
    color: ColorsGlobal.White,
  },
  errorContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    fontSize: StylesGlobalDefinitions.textSizeContent.fontSize,
    marginBottom: StylesGlobalDefinitions.m_b_10.marginBottom,
    color: ColorsGlobal.White,
  },
});

import { PixelRatio, StyleSheet } from "react-native";

export const StylesGlobalDefinitions = StyleSheet.create({
  textSizeTitle: {
    fontSize: PixelRatio.roundToNearestPixel(20 / PixelRatio.getFontScale()),
  },

  textSizeSubTitle: {
    fontSize: PixelRatio.roundToNearestPixel(10 / PixelRatio.getFontScale()),
  },
});

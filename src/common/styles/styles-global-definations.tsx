import { PixelRatio, StyleSheet } from "react-native";

export const StylesGlobalDefinitions = StyleSheet.create({
  textSizeTitle: {
    fontSize: PixelRatio.roundToNearestPixel(36 / PixelRatio.getFontScale()),
  },

  textSizeSubTitle: {
    fontSize: PixelRatio.roundToNearestPixel(27 / PixelRatio.getFontScale()),
  },
});

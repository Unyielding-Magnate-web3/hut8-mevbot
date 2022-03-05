import { PixelRatio, StyleSheet } from "react-native";

export const StylesGlobalDefinitions = StyleSheet.create({
  textSizeTitle: {
    fontSize: PixelRatio.roundToNearestPixel(20 / PixelRatio.getFontScale()),
  },

  textSizeSubTitle: {
    fontSize: PixelRatio.roundToNearestPixel(10 / PixelRatio.getFontScale()),
  },
  textSizeContent: {
    fontSize: PixelRatio.roundToNearestPixel(15 / PixelRatio.getFontScale()),
  },
  m_b_10: {
    marginBottom: PixelRatio.roundToNearestPixel(10 / PixelRatio.getFontScale()),
  },
});

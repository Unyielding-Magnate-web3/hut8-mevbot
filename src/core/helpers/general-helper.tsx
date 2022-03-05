import { PixelRatio } from "react-native";

export class GeneralHelper {
  static ScaledSize(size: number) {
    return PixelRatio.roundToNearestPixel(size / PixelRatio.getFontScale());
  }
  static CurrencyToString(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

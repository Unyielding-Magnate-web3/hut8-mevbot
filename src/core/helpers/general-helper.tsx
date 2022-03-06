import { PixelRatio } from "react-native";
import { Language } from "../constants/language";

export class GeneralHelper {
  static ScaledSize(size: number) {
    return PixelRatio.roundToNearestPixel(size / PixelRatio.getFontScale());
  }

  static CurrencyToString(value: number, symbol: boolean = false) {
    return (
      (symbol ? Language.Currency + " " : "") +
      value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  }

  static CardNumberToString(value: string, masked: boolean = true) {
    if (masked) return "●●●● ●●●● ●●●● 1234";
    return "1234 1234 1234 1234";
  }

  static CardExpiryToString(value: Date) {
    return "Thru: 12/20";
  }

  static CardCVVToString(value: string, masked: boolean = true) {
    if (masked) return "CVV: ***";
    return "CVV: 123";
  }
}

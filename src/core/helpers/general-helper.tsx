import { PixelRatio } from "react-native";
import { eCurrencyFormat } from "../constants/enums";
import { Language } from "../constants/language";

export class GeneralHelper {
  static ScaledSize(size: number) {
    return PixelRatio.roundToNearestPixel(size / PixelRatio.getFontScale());
  }

  static CurrencyToString(
    value: number,
    format: eCurrencyFormat = eCurrencyFormat.None,
    showZero: boolean = false
  ) {
    if (isNaN(value) || (value == 0 && showZero == false)) {
      return "";
    }
    return (
      (format == eCurrencyFormat.Full
        ? Language.Currency + " "
        : format == eCurrencyFormat.Min
        ? Language.CurrencyMin
        : "") + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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

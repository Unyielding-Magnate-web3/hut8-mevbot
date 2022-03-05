import { StyleSheet } from "react-native";
import { ColorsGlobal } from "../../../common/styles/colors-global";
import { GeneralHelper } from "../../../core/helpers/general-helper";
export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: ColorsGlobal.White,
    paddingHorizontal: GeneralHelper.ScaledSize(20),
    borderTopRightRadius: GeneralHelper.ScaledSize(30),
    borderTopLeftRadius: GeneralHelper.ScaledSize(30),
    paddingBottom: GeneralHelper.ScaledSize(50),
  },
  spacer: {
    height: GeneralHelper.ScaledSize(100),
  },
});

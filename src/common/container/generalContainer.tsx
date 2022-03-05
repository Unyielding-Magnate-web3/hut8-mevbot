import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { ErrorComponent } from "../components/ErrorComponent";
import { LoadingComponent } from "../components/LoadingComponent";
import { ColorsGlobal } from "../styles/colors-global";

type TProps = {
  containerStyle?: ViewStyle | Array<ViewStyle>;
  containerInnerStyle?: ViewStyle | Array<ViewStyle>;
  children: React.ReactNode;
  isLoading?: boolean;
  isError?: boolean;
};

const GeneralContainer: React.FC<TProps> = ({
  containerInnerStyle = {},
  containerStyle,
  children,
  isError,
  isLoading,
}) => {
  return (
    <SafeAreaView style={containerStyle || stylesDefault.container}>
      <View style={containerInnerStyle || stylesDefault.containerInner}>
        <StatusBar animated barStyle={"dark-content"} />
        {isLoading ? (
          <LoadingComponent />
        ) : isError ? (
          <ErrorComponent />
        ) : (
          children
        )}
      </View>
    </SafeAreaView>
  );
};
const stylesDefault = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsGlobal.Secondary,
  },
  containerInner: {
    flex: 1,
    backgroundColor: ColorsGlobal.White,
  },
});

export default GeneralContainer;

import React from "react";
import { View } from "react-native";
import styles from "./styles";

type TProps = {
  children: any;
};

const GeneralContainer = (props: TProps) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default GeneralContainer;

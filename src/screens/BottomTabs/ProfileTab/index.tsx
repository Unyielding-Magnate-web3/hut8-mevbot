import React from "react";
import { Text, View } from "react-native";
import GeneralContainer from "../../../common/container/generalContainer";
import { StyleGlobal } from "../../../common/styles/styles-global";

const ProfileTab = () => {
  return (
    <GeneralContainer>
      <View style={StyleGlobal.container}>
        <Text style={StyleGlobal.title}>{"Profile"}</Text>
        <Text style={StyleGlobal.subTitle}>{"well you can visit mine"}</Text>
      </View>
    </GeneralContainer>
  );
};

export default ProfileTab;

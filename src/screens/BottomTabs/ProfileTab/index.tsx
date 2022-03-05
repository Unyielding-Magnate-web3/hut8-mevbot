import React from "react";
import { Text } from "react-native";
import GeneralContainer from "../../../common/container/generalContainer";
import { StyleGlobal } from "../../../common/styles/styles-global";

const ProfileTab = () => {
  return (
    <GeneralContainer>
      <Text style={StyleGlobal.title}>{"Profile"}</Text>
      <Text style={StyleGlobal.subTitle}>{"well you can visit mine"}</Text>
    </GeneralContainer>
  );
};

export default ProfileTab;

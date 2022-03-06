import React from "react";
import { ScrollView, View } from "react-native";
import AvailableBalance from "../../../common/components/AvailableBalance";
import CardComponent from "../../../common/components/CardComponent";
import HeaderStyle1Component from "../../../common/components/HeaderType1Component";
import GeneralContainer from "../../../common/container/generalContainer";
import styles from "./styles";

const DebitCardTab = () => {
  return (
    <GeneralContainer containerInnerStyle={styles.container}>
      <HeaderStyle1Component title="Debit Card">
        <AvailableBalance balance={3000} />
      </HeaderStyle1Component>

      <ScrollView
        style={styles.scrollViewMainContainer}
        contentContainerStyle={styles.compensateBottomBar}
      >
        <View style={styles.spacer}></View>
        <View style={styles.content}>
          <CardComponent cardDetails={{}} />
        </View>
      </ScrollView>
    </GeneralContainer>
  );
};

export default DebitCardTab;

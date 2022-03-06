import React from "react";
import { ScrollView, View } from "react-native";
import AvailableBalance from "../../../common/components/AvailableBalance";
import CardComponent from "../../../common/components/CardComponent";
import HeaderStyle1Component from "../../../common/components/HeaderType1Component";
import GeneralContainer from "../../../common/container/generalContainer";
import { ImagesGlobal } from "../../../common/styles/images-global";
import { eMenuItemType, eMenuItemValue } from "../../../core/constants/enums";
import { Language } from "../../../core/constants/language";
import MenuItem from "./components/MenuItem";
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

          <View style={{ paddingTop: 20 }}>
            <MenuItem
              icon={ImagesGlobal.IconMenuDebitTopUp}
              title={Language.MenuItemTitleDebitTopUp}
              description={Language.MenuItemDescriptionDebitTopUp}
              type={eMenuItemType.Link}
              value={eMenuItemValue.None}
            ></MenuItem>
            <MenuItem
              onPress={() => {}}
              icon={ImagesGlobal.IconMenuDebitWeekly}
              title={Language.MenuItemTitleDebitWeeklySpending}
              description={Language.MenuItemDescriptionDebitWeeklySpending}
              type={eMenuItemType.Toggle}
              value={eMenuItemValue.Inactive}
            ></MenuItem>
            <MenuItem
              icon={ImagesGlobal.IconMenuDebitFreeze}
              title={Language.MenuItemTitleDebitFreezeCard}
              description={Language.MenuItemDescriptionDebitFreezeCard}
              type={eMenuItemType.Toggle}
              value={eMenuItemValue.Inactive}
            ></MenuItem>
            <MenuItem
              icon={ImagesGlobal.IconMenuDebitGetANew}
              title={Language.MenuItemTitleDebitGetANew}
              description={Language.MenuItemDescriptionDebitGetANew}
              type={eMenuItemType.Link}
              value={eMenuItemValue.None}
            ></MenuItem>
            <MenuItem
              icon={ImagesGlobal.IconMenuDebitDeactivate}
              title={Language.MenuItemTitleDebitDeactivated}
              description={Language.MenuItemDescriptionDebitDeactivated}
              type={eMenuItemType.Link}
              value={eMenuItemValue.None}
            ></MenuItem>
          </View>
        </View>
      </ScrollView>
    </GeneralContainer>
  );
};

export default DebitCardTab;

import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { RootStackParamList } from "../../../AppContainer";
import AvailableBalance from "../../../common/components/AvailableBalance";
import CardComponent from "../../../common/components/CardComponent";
import HeaderStyle1Component from "../../../common/components/HeaderType1Component";
import GeneralContainer from "../../../common/container/generalContainer";
import { ImagesGlobal } from "../../../common/styles/images-global";
import { eMenuItemType, eMenuItemValue } from "../../../core/constants/enums";
import { Language } from "../../../core/constants/language";
import MenuItem from "./components/MenuItem";
import styles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { ROUTE_LIST } from "../../../core/constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../redux/reducers";
import {
  actionLoadMemberData,
  actionSetSpendingLimit,
} from "../../../redux/actions";
import SpendingLimitGuageComponent from "../../../common/components/SpendingLimitGuageComponent";
import { MemberData } from "../../../core/models/MemberData";

const DebitCardTab = () => {
  type NavigationProps = StackNavigationProp<
    RootStackParamList,
    ROUTE_LIST.BOTTOM_TAB
  >;
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const selectMember = useSelector<IRootState, MemberData>(
    (state) => state.generalState.member
  );
  const selectSpendingLimit = useSelector<IRootState, number>(
    (state) => state.generalState.spendingLimit
  );

  useEffect(() => {
    dispatch(actionLoadMemberData(onError));
  }, []);

  useEffect(() => {
    if (selectMember && selectMember.id) {
      setIsLoading(false);
    }
  }, [selectMember]);

  const onError = (status: string) => {
    setIsLoading(false);
    setIsError(true);
  };

  const onMenuItemWeeklyPress = () => {
    if (selectSpendingLimit <= 0) {
      navigation.navigate(ROUTE_LIST.SPENDING_LIMIT_SCREEN);
    } else {
      dispatch(actionSetSpendingLimit(0));
    }
  };

  return (
    <GeneralContainer
      containerInnerStyle={styles.container}
      isLoading={isLoading}
      isError={isError}
    >
      <HeaderStyle1Component title={Language.DebitCardTabTitle}>
        <AvailableBalance balance={3000} />
      </HeaderStyle1Component>

      <ScrollView
        style={styles.scrollViewMainContainer}
        contentContainerStyle={styles.compensateBottomBar}
      >
        <View style={styles.spacer}></View>
        <View style={styles.content}>
          <CardComponent cardDetails={{}} />

          {selectSpendingLimit > 0 && (
            <SpendingLimitGuageComponent
              spendingLimit={selectSpendingLimit}
              spent={5000}
            />
          )}

          <View style={{ paddingTop: 20 }}>
            <MenuItem
              icon={ImagesGlobal.IconMenuDebitTopUp}
              title={Language.MenuItemTitleDebitTopUp}
              description={Language.MenuItemDescriptionDebitTopUp}
              type={eMenuItemType.Link}
              value={eMenuItemValue.None}
            ></MenuItem>
            <MenuItem
              onPress={onMenuItemWeeklyPress}
              icon={ImagesGlobal.IconMenuDebitWeekly}
              title={Language.MenuItemTitleDebitWeeklySpending}
              description={Language.MenuItemDescriptionDebitWeeklySpending}
              type={eMenuItemType.Toggle}
              value={
                selectSpendingLimit > 0
                  ? eMenuItemValue.Active
                  : eMenuItemValue.Inactive
              }
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

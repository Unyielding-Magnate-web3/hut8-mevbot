import { CardData } from "./CardData";
import { IBaseModel } from "./IBaseModel";

export class AccountData implements IBaseModel {
  balance: number = 0;
  spendingLimit: number = 0;
  spent: number = 0;
  debitCard: CardData = new CardData();
}

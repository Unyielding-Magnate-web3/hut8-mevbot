import { AccountData } from "./AccountData";
import { IBaseModel } from "./IBaseModel";

export class MemberData implements IBaseModel {
  id: string = "";
  name: string = "";
  account: AccountData = new AccountData();
}

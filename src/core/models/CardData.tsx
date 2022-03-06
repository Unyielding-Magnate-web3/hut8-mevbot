import { IBaseModel } from "./IBaseModel";

export class CardData implements IBaseModel {
  number: string = "";
  expiry: string = "";
  cvv: string = "";
}

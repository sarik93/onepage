import { makeObservable, observable, action } from "mobx";
import {
  HorizontalAlignment,
  ButtonSize,
  VerticalAlignment,
  ButtonProperties,
} from "../../api/models/button";
import { sizes } from "./properties";
import elementApi from "../../api/element";

class Button {
  id = 0;
  label = "Button";
  buttonAction = "";
  horizontalAlignment = HorizontalAlignment.CENTER;
  verticalAlignment = VerticalAlignment.CENTER;
  size = ButtonSize.M;

  get style() {
    return {
      ...sizes[this.size],
    };
  }

  constructor({
    id,
    label = "Button",
    buttonAction = "",
    horizontalAlignment = HorizontalAlignment.CENTER,
    verticalAlignment = VerticalAlignment.CENTER,
    size = ButtonSize.M,
  }: ButtonProperties & { id: number }) {
    makeObservable(this, {
      label: observable,
      buttonAction: observable,
      horizontalAlignment: observable,
      verticalAlignment: observable,
      size: observable,
      updateProperty: action,
      editButtonElement: action,
    });

    this.id = id;
    this.label = label;
    this.buttonAction = buttonAction;
    this.horizontalAlignment = horizontalAlignment;
    this.verticalAlignment = verticalAlignment;
    this.size = size;
  }

  log<K extends keyof ButtonProperties, V extends ButtonProperties[K]>({
    key,
    value,
  }: {
    key: K;
    value: V;
  }) {
    console.log(`Update Button Property "${key}"
      Old value: ${this[key]}
      New value: ${value}
    `);
  }

  async editButtonElement() {
    try {
      await elementApi.editElement(this.id, {
        label: this.label,
        buttonAction: this.buttonAction,
        horizontalAlignment: this.horizontalAlignment,
        verticalAlignment: this.verticalAlignment,
        size: this.size,
        id: this.id,
        type: "button",
      });
    } catch (error) {
      console.error("Update Button Element", error);
    }
  }

  updateProperty<
    K extends keyof ButtonProperties,
    V extends ButtonProperties[K],
  >({ key, value }: { key: K; value: V }) {
    this.log({ key, value });

    const that = this as ButtonProperties;
    that[key] = value as (typeof that)[K];
  }
}

export default Button;

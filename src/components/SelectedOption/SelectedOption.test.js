import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SelectedOption from "./SelectedOption";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

const discount_price = 500000;
const selectedOptions = [["네이비", "Small", ["Short", 5000, 20]]];
const selectedOptionsCount = [1];
const optionPlus = jest.fn();
const optionMinus = jest.fn();
const cancelSelected = jest.fn();
describe("SelectedOption compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <SelectedOption
          discount_price={discount_price}
          selectedOptions={selectedOptions}
          selectedOptionsCount={selectedOptionsCount}
          optionPlus={optionPlus}
          optionMinus={optionMinus}
          cancelSelected={cancelSelected}
        />
      </MemoryRouter>
    );
  });
  it("component text test", () => {
    const option = component.find(".itemDetail-selected-option");
    const price = component.find(".itemDetail-itemPrice");
    expect(option.text()).toBe("네이비/Small/Short");
    expect(price.text()).toBe("505,000원");
  });
});

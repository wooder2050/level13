import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ItemDetailOptions from "./ItemDetailOptions";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

const options = {
  names: ["색상", "사이즈", "기장"],
  contents: [
    ["네이비", "브라운", "블랙", "화이트"],
    ["Small", "Medium", "Large"],
    ["Short", "Long"]
  ],
  data: [
    {
      positions: ["네이비", "Small", "Short"],
      data: { stock_count: 20, option_price: 0 }
    },
    {
      positions: ["네이비", "Small", "Long"],
      data: { stock_count: 20, option_price: 5000 }
    },
    {
      positions: ["브라운", "Small", "Short"],
      data: { stock_count: 15, option_price: 5000 }
    },
    {
      positions: ["블랙", "Medium", "Short"],
      data: { stock_count: 10, option_price: 15000 }
    },
    {
      positions: ["블랙", "Medium", "Long"],
      data: { stock_count: 0, option_price: 20000 }
    },
    {
      positions: ["화이트", "Small", "Short"],
      data: { stock_count: 0, option_price: 15000 }
    }
  ]
};
const optionModal = [["네이비", "브라운", "블랙", "화이트"]];
const optionState = [0];
const toggleState = true;
const selectedOptions = null;
const selectedOptionsCount = null;
const optionOpen = jest.fn();
const optionChoice = jest.fn();
describe("ItemDetailOptions compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <ItemDetailOptions
          options={options}
          optionModal={optionModal}
          optionState={optionState}
          toggleState={toggleState}
          selectedOptions={selectedOptions}
          selectedOptionsCount={selectedOptionsCount}
          optionOpen={optionOpen}
          optionChoice={optionChoice}
        />
      </MemoryRouter>
    );
  });
  it("component text test", () => {
    const title = component.find(".option-contents-title");
    const text1 = component.find(".option-contents-text").at(0);
    const text2 = component.find(".option-contents-text").at(1);
    const text3 = component.find(".option-contents-text").at(2);
    const text4 = component.find(".option-contents-text").at(3);
    expect(title.text()).toBe("색상");
    expect(text1.text()).toBe("네이비");
    expect(text2.text()).toBe("브라운");
    expect(text3.text()).toBe("블랙");
    expect(text4.text()).toBe("화이트");
  });
});

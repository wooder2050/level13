import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ErrorModal from "./ErrorModal";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

const optionCountError = false;
const soldOutMsg = false;
const alreadySelectedMsg = true;
const closeErrorModal = jest.fn();
describe("ErrorModal compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <ErrorModal
          optionCountError={optionCountError}
          soldOutMsg={soldOutMsg}
          alreadySelectedMsg={alreadySelectedMsg}
          closeErrorModal={closeErrorModal}
        />
      </MemoryRouter>
    );
  });
  it("component text test", () => {
    const text = component.find(".error-modal-text");
    expect(text.text()).toBe("이미 있는 상품입니다.");
  });
});

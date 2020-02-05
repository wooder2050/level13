import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainImg from "./MainImg";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });
const photo_url =
  "https://s3.ap-northeast-2.amazonaws.com/coordi-img/062310d6c7db1e24fe95b5c976346b7d";
describe("MainImg compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <MainImg photo_url={photo_url} />
      </MemoryRouter>
    );
  });
  it("component src test", () => {
    const mainImg = component.find(".main-img");
    expect(mainImg.prop("src")).toEqual(photo_url);
  });
});

import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SubImg from "./SubImg";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

const images = [
  "https://s3.ap-northeast-2.amazonaws.com/coordi-img/062310d6c7db1e24fe95b5c976346b7d",
  "https://dmhav9aom0ctr.cloudfront.net/29c218bb23b5116caee80fa57f669567"
];
const changeMainImg = jest.fn();
describe("SubImg compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <SubImg images={images} changeMainImg={changeMainImg} />
      </MemoryRouter>
    );
  });
  it("component src test", () => {
    const subImg1 = component.find(".sub-img").at(0);
    const subImg2 = component.find(".sub-img").at(1);
    expect(subImg1.prop("src")).toEqual(images[0]);
    expect(subImg2.prop("src")).toEqual(images[1]);
  });
});

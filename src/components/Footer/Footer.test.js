import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

const partner = {
  name: "lookpin-mall",
  message: "최대 50% SALE!",
  photo_url:
    "https://s3.ap-northeast-2.amazonaws.com/store-main-img/7e67be079de5fc2d02bb6bfcae25b789",
  product_info: [
    ["제품소재", "상품상세 참조"],
    ["색상", "상품상세 참조"],
    ["치수", "상품상세 참조"],
    ["제조자", "상품상세 참조"],
    ["제조국", "상품상세 참조"],
    ["제조연월", "상품상세 참조"],
    ["세탁방법", "상품상세 참조"],
    ["취급주의사항", "상품상세 참조"],
    ["품질보증기준", "상품상세 참조"]
  ],
  partner_info: [
    ["업체명", "업체"],
    ["사업자등록번호", "000-00-00000"],
    ["대표자명", "대표자"],
    ["전자우편주소", "look@pin.co.kr"],
    ["통신판매신고번호", "2019-서울강남-00000"],
    ["AS전화번호", "02-0000-0000"],
    ["운영시간", "오전11시-오후6시 전화 010-0000-0000 010-0000-0000"],
    ["반품주소지", "서울특별시 OO구 OO로 00길 00-00 501호"],
    ["반송택배비", "착불 택배비 5000원"],
    ["", "선불 택배비 5000원"]
  ]
};

describe("Footer compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <Footer partner={partner} />
      </MemoryRouter>
    );
  });
  it("component text test", () => {
    const title = component.find(".infoContents-title").at(0);
    const content = component.find(".infoContents-content").at(0);
    expect(title.text()).toBe("제품소재");
    expect(content.text()).toBe("상품상세 참조");
  });
});

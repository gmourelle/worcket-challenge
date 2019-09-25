import React from "react";
import Header from "../Header";
import { shallow } from "enzyme";

const PROPS = {
  itemsAmount: 2
};
describe("Header", () => {
  let wrapper;

  describe("render", () => {
    wrapper = shallow(<Header {...PROPS} />);

    describe("header", () => {
      let headerWrapper = wrapper.find("div.header");

      it("should render an div element with header class", () => {
        expect(headerWrapper).toHaveLength(1);
      });

      it('should render a <h1> element with "Supermarket List" ', () => {
        const h1Wrapper = headerWrapper.find("h1");
        expect(h1Wrapper).toHaveLength(1);
        expect(h1Wrapper.text()).toEqual("Supermarket List");
      });

      it("should a <h3> element with header__items class & 2 items", () => {
        const h3Wrapper = headerWrapper.find("h3.header__items");
        expect(h3Wrapper).toHaveLength(1);
        expect(h3Wrapper.text()).toEqual("2 ITEMS");
      });
    });
  });
});

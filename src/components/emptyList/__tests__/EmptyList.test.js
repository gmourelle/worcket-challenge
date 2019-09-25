import React from "react";
import EmptyList from "../EmptyList";
import { shallow } from "enzyme";

describe("EmptyList", () => {
  let wrapper;

  describe("render", () => {
    wrapper = shallow(<EmptyList />);

    describe("span", () => {
      let spanWrapper = wrapper.find("span");
      it("should render an span element", () => {
        expect(spanWrapper).toHaveLength(1);
      });
    });
  });
});

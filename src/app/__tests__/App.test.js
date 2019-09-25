import React from "react";
import App from "../App";
import { shallow } from "enzyme";

describe("App", () => {
  let wrapper;

  describe("render", () => {
    wrapper = shallow(<App />);

    describe("div", () => {
      let divWrapper = wrapper.find("div.app-body");

      it("should render a div element with app-body class", () => {
        expect(divWrapper).toHaveLength(1);
      });

      it('should render an span element with "Loading..." as text', () => {
        const spanWrapper = divWrapper.find("span");
        expect(spanWrapper).toHaveLength(1);
        expect(spanWrapper.text()).toEqual("Loading...");
      });
    });
  });
});

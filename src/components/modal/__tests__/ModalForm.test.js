import React from "react";
import ModalForm from "../ModalForm";
import { shallow } from "enzyme";

const PROPS = {
  addItem: jest.fn(),
  isOpen: false,
  closeModal: jest.fn(),
  status: "pending"
};
describe("ModalForm", () => {
  let wrapper;

  describe("render", () => {
    wrapper = shallow(<ModalForm {...PROPS} />);

    describe("Modal", () => {
      let modalWrapper = wrapper.find("Modal");

      it("should render Modal component", () => {
        expect(modalWrapper).toHaveLength(1);
      });

      describe("form", () => {
        const formWrapper = modalWrapper.find("form");

        it("should render a <form> element", () => {
          expect(formWrapper).toHaveLength(1);
        });

        it("should render a <h2> element", () => {
          const h2Wrapper = formWrapper.find("h2");
          expect(h2Wrapper).toHaveLength(1);
        });

        it("should render an input element", () => {
          const inputWrapper = formWrapper.find("input");
          expect(inputWrapper).toHaveLength(1);
        });

        describe("buttons", () => {
          const divButtonsWrapper = formWrapper.find(
            "div.form-container__action-buttons"
          );

          it('should render a div with "form-container__action-buttons" class', () => {
            expect(divButtonsWrapper).toHaveLength(1);
          });

          it("should 2 buttons", () => {
            const buttonsWrapper = divButtonsWrapper.find("button");
            expect(buttonsWrapper).toHaveLength(2);
          });
        });
      });
    });
  });
});

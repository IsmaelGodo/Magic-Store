import React from "react";
import { shallow } from "enzyme";
import Illustrator from "./Illustrator";

describe("Illustrator", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Illustrator />);
    expect(wrapper).toMatchSnapshot();
  });
});

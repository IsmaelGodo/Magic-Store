import React from "react";
import { shallow } from "enzyme";
import Visor from "./Visor";

describe("Visor", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Visor />);
    expect(wrapper).toMatchSnapshot();
  });
});

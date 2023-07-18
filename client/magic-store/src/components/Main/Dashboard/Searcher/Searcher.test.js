import React from "react";
import { shallow } from "enzyme";
import Searcher from "./Searcher";

describe("Searcher", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Searcher />);
    expect(wrapper).toMatchSnapshot();
  });
});

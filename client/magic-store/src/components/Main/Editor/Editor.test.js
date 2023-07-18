import React from "react";
import { shallow } from "enzyme";
import Editor from "./Editor";

describe("Editor", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Editor />);
    expect(wrapper).toMatchSnapshot();
  });
});

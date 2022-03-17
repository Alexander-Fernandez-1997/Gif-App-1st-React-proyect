import React from "react";
const { shallow } = require("enzyme");
const { default: GifExpertApp } = require("../GifExpertApp");

describe("Test de GifExpertApp", () => {
  test("Match con el snapshot", () => {
    const wrapper = shallow(<GifExpertApp></GifExpertApp>);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar una lista de categorias", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});

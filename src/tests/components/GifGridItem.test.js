import { shallow } from "enzyme";
import React from "react";
import GifGriditem, { GifGridItem } from "../../components/GifGridItem";

describe("Prueba en el archivo GifGridItem", () => {
  const title = "Chanchito Feliz";
  const url = "https//:localhost.jgp";
  const wrapper = shallow(<GifGridItem url={url} title={title} />);

  test("debe coincidir con el snapshop", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });
  test("debe de tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    // console.log(img.props());
    // console.log(img.prop("src"));
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
  test("debe tener animate_fadeIn", () => {
    const div = wrapper.find("div");
    // console.log(div.prop("className"));
    const className = div.prop("className");

    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});

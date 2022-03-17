import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Chequeando AddCategory", () => {
  const setCategories = jest.fn();
  // me dice si fue llamado y cuantas veces

  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    // resetea todos los mocks
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("chequear el snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // test("debe de cambiar la caja de texto", () => {
  //   const input = wrapper.find("input");
  //   const value = "Hola mundo";

  //   input.simulate("change", {
  //     target: { value },
  //   });
  //   expect(wrapper.find("p").text().trim()).toBe(value);
  // });

  test("No debe de postear la informacion con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar al setCategories y limpiar la caja de texto", () => {
    const value = "Hola mundo";

    wrapper.find("input").simulate("change", {
      target: { value },
    });
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});

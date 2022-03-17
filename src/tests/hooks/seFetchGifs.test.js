import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Testeando el custom hook <seFetchGifs/>", () => {
  test("Debe de retornar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { data, loading } = result.current;
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
});

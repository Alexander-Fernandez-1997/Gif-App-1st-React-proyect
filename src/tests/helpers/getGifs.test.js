import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs Fetch", () => {
  test("debe traer de 10 elementos", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBe(10);
  });
  test("debe traer de 0 elementos", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});

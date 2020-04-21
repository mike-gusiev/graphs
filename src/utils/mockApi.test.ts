import {linear, cubed, squared} from "./mockedApi";

describe("testing custom api", () => {
    it("test linear range function", () => {
        const linearData = linear(1, 2, .5)
        expect(linearData).toStrictEqual([1, 1.5, 2])
    })

    it("test cubed range function", () => {
        const squaredData = squared(1, 2, .5)
        expect(squaredData).toStrictEqual([1, 2.25, 4])
    })
    it("test squared range function", () => {
        const cubedData = cubed(1, 2, .5)
        expect(cubedData).toStrictEqual([1, 3.38, 8])
    })
})

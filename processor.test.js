const processor = require('./processor.js');

describe("transmission processor", function () {

    test("takes a string and returns an object", function () {
        let result = processor("9701::<489584872710>");
        expect(typeof result).toEqual("object");
    });

    test("throws error if '::' not found", function () {
        const expectedError = new Error('Data is invalid ; should contain "::"');
        expect(() => {
            processor("9701<489584872710>");
        }).toThrow(expectedError);
    });

    test("returns id in object", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).not.toEqual(undefined);
    });

    test("Convert id to a Number", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).toEqual(9701);
    })

    test("returns rawData in object", function () {
        let result = processor("9701::<489584872710>");
        expect(result.rawData).not.toEqual(undefined);
    });

    test("rawData must be a String", function () {
        let result = processor("9701::<489584872710>");
        expect(result.rawData).toEqual("<489584872710>")
    })

});

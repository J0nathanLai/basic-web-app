import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });
    test('should return Andrew ID description', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "My Andrew ID is jklai"
          ));
    });
    test('should return Name description', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Jon"
          ));
    });
    test('should add', () => {
        const query = "largest: 34, 81, 35?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "81"
          ));
    });
    test('should add', () => {
        const query = "86 plus 8?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "94"
          ));
    });
    test('should add', () => {
        const query = "44 plus 69?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "113"
          ));
    });
    test('should add', () => {
        const query = "What is 1 plus 2?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "3"
          ));
    });
    test('should multiply', () => {
        const query = "What is 1 multiplied by 10?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "10"
          ));
    });

});
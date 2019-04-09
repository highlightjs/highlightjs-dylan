const hljs = require("highlight.js/lib/highlight");
const {
    definer: dylan
} = require("../dylan");
const fs = require("fs");
const path = require("path");
hljs.registerLanguage("dylan", dylan);

describe("respec-highlight bundle", () => {
    it("highlights dylan", () => {
        // Load the input file...
        const input = fs.readFileSync(
            path.resolve(__dirname, "./input.txt"),
            "utf-8"
        );

        // Do the highlight...
        const {
            value: result,
            language
        } = hljs.highlightAuto(input);
        expect(language).toBe("dylan");

        // Check the output is what we expect...
        const expected = fs.readFileSync(
            path.resolve(__dirname, "./expected.txt"),
            "utf-8"
        );
        expect(result).toBe(expected);
    });
});
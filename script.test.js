const Convert = require("./script");

test("test cel to far", () => {
	const transform = new Convert();
	expect(transform.fromCelcius("far", 32)).toBe(89.6);
});

test("test cel to rea", () => {
	const transform = new Convert();
	expect(transform.fromCelcius("rea", 32)).toBe(25.6);
});

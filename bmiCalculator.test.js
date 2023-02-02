const myFunctions = require("./bmiCalculator")

test("Check if bmi kgs/x is equal to 24.7318", () => {
    expect(myFunctions.calbmi(67,5.4)).toBe(24.731892932769245);
});
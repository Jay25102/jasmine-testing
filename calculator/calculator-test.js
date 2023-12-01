
it('should calculate the monthly rate correctly', function () {
  const testValues = {amount: 10000, years: 5, rate: 3.5};
  expect(calculateMonthlyPayment(testValues)).toEqual("181.92");
});


it("should return a result with 2 decimal places", function() {
  const testValues = {amount: 10000, years: 20, rate: 3.12};
  expect(calculateMonthlyPayment(testValues)).toEqual("56.06");
});

/// etc

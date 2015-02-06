describe("average", function() {

  it("should be a function.", function() {
    expect(typeof average).toBe('function');
  });

  it("should average an array of numbers.", function() {
    expect(average([5, 3, 10, 7])).toBe(6.25);
  });

  it("should allow submitted numbers to be formatted as strings.", function() {
    expect(average([5, "3", 10, 7])).toBe(6.25);
  });

  it("should return 0 for an empty array.", function() {
    expect(average([])).toBe(0);
  });
});

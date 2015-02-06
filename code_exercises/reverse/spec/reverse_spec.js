describe("average", function() {

  it("should be a function.", function() {
    expect(typeof reverse).toBe('function');
  });

  it("should reverse the order of characters in a string.", function() {
    expect(reverse("zebra")).toBe("arbez");
  });
  
});

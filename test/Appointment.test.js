describe("Appointment", () => {
  it("render the customer first name", () => {
    expect(document.body.textContent).toMatch("Todd");
  });
});

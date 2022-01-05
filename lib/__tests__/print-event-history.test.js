const printEventHistory = require("../print-event-history");

test.skip("prints users evenets", () => {
  const user = {
    name: "John",
    events: [
      {
        title: "Event 1",
        user: "John",
        date: "2020-01-01",
        description: "Event 1 description",
      },
    ],
  };
  const consoleSpy = jest.spyOn(console, "log");
  printEventHistory(user);
  expect(consoleSpy).toHaveBeenCalledWith(
    "John will go to Event 1 on 2020-01-01"
  );
  consoleSpy.mockRestore();
});

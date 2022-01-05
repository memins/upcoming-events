const app = require("../..");
const request = require("supertest")(app);

test.skip("create a new user", (done) => {
  const userToCreate = {
    name: "John",
    email: "m@mail.com",
  };

  const response = await request.post("/users").send(userToCreate).expect(200);

  console.log("do they match", response.body, userToCreate);
  const userCreated = response.body;

  expect(userCreated).toMatchObject(userToCreate);
  expect(userCreated.events).toEqual([]);

  done();
});

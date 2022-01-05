const app = require("../..");
const request = require("supertest")(app);

test("creates a new event", async (done) => {
  const userToCreate = {
    name: "Test user",
  };

  const title = "new Eventtttt";
  const description = "Bostanci";

  const userResponse = await request
    .post("/users")
    .send(userToCreate)
    .expect(200);

  const eventResponse = await request
    .post(`/users/${userResponse.body._id}/events`)
    .send({
      title,
      description,
    })
    .expect(200);

  const eventCreated = eventResponse.body;

  expect(eventCreated).toMatchObject({
    user: userResponse.body,
    title,
    description,
  });

  done();
});

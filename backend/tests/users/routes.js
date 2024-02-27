require("dotenv").config({
  path: ".env.test",
});
const crypto = require("node:crypto");
// Import required dependencies
const { app, request, tables } = require("../setup");

describe("POST /api/add/user", () => {
  it("should return created user", async () => {
    const myUser = {
      firstname: "Marie",
      lastname: "Martin",
      pseudo: "mama",
      email: `${crypto.randomUUID()}@wild.co`,
      password: `${crypto.randomUUID()}`,
      birth_date: "1990-01-01",
    };

    // Send a POST request to the /api/add/user endpoint with a test user
    const response = await request(app).post("api/add/user").send(myUser);

    // Assertions
    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.insertId).toEqual(expect.any(Number));

    // Check if the newly added user exists in the database
    const foundUser = await tables.user.read(response.body.insertId);

    // Assertions
    expect(foundUser).toBeDefined();
    expect(foundUser.pseudo).toBe(myUser.pseudo);
  });
});

// TODO: implement PUT and DELETE routes

/*
// Test suite for the PUT /api/items/:id route
describe("PUT /api/items/:id", () => {
  it("should update an existing item successfully", async () => {
    // Define a sample item for testing
    const testItem = {
      title: "Sample Item",
    };

    // Create a sample item in the database
    const insertId = await tables.item.create(testItem);

    // Define an updated item object
    const updatedItem = {
      title: "Updated Item",
    };

    // Send a PUT request to the /api/items/:id endpoint with updated data
    const response = await request(app)
      .put(`/api/items/${insertId}`)
      .send(updatedItem);

    // Assertions
    expect(response.status).toBe(204);

    // Check if the item has been updated in the database
    const foundItem = await tables.item.read(insertId);

    // Assertions
    expect(foundItem).toBeDefined();
    expect(foundItem.title).toBe(updatedItem.title);
  });
});

// Test suite for the DELETE /api/items/:id route
describe("DELETE /api/items/:id", () => {
  it("should delete an existing item successfully", async () => {
    // Define a sample item for testing
    const testItem = {
      title: "Sample Item",
    };

    // Create a sample item in the database
    const insertId = await tables.item.create(testItem);

    // Send a DELETE request to the /api/items/:id endpoint
    const response = await request(app).delete(`/api/items/${insertId}`);

    // Assertions
    expect(response.status).toBe(204);

    // Check if the item has been deleted from the database
    const foundItem = await tables.item.read(insertId);

    // Assertions
    expect(foundItem).toBeUndefined();
  });
});
*/

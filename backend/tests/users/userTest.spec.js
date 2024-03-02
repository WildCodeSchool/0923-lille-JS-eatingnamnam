const crypto = require("node:crypto");
const request = require("supertest");
const app = require("../../src/app");
const tables = require("../../src/tables");
const database = require("../../database/client");

describe("CREATE USER", () => {
  it("should return created user", async () => {
    const myUser = {
      firstname: "Marie",
      lastname: "Martin",
      pseudo: "mama",
      email: `${crypto.randomUUID()}@wild.co`,
      birthdate: "1990-01-01",
    };
    const hashedPassword = `${crypto.randomUUID()}`;
    // Send a create request to the user table with a test user
    const { insertId } = await tables.user.create(myUser, hashedPassword);
    // Check if the newly added user exists in the database
    const [rows] = await database.query(
      `SELECT * FROM user WHERE id = ?`,
      insertId
    );
    const foundUser = rows[0];

    // Assertions
    expect(foundUser).toBeDefined();
    expect(foundUser.pseudo).toBe(myUser.pseudo);
  });

  it("should throw when passing invalid object", async () => {
    // Thx https://jestjs.io/docs/asynchronous#asyncawait

    // Send a create request to the user table with an empty object
    const promise = tables.user.create({});

    // Assertions
    await expect(promise).rejects.toThrow();
  });
});

/* describe("POST /api/add/user", () => {
  it("should return created user", async () => {
    const myUser = {
      firstname: "Marie",
      lastname: "Martin",
      pseudo: "mama",
      email: `${crypto.randomUUID()}@wild.co`,
      password: `${crypto.randomUUID()}`,
      birth_date: "1990-01-01",
    };
    const hashedPassword = `${crypto.randomUUID()}`;
    // Send a POST request to the /api/add/user endpoint with a test user
    const response = await request(app)
      .post("/add/user")
      .send(myUser, hashedPassword);
    console.log("response:", response.body);
    // Assertions
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);

    // Check if the newly added user exists in the database
    const foundUser = await tables.user.read(response.body.insertId);
    console.log("foundUer", foundUser);

    // Assertions
    expect(foundUser).toBeDefined();
    expect(foundUser.pseudo).toBe(myUser.pseudo);
  });
}); */

describe("GET /api/user", () => {
  it("should return all users", async () => {
    const response = await request(app).get("/api/user");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

afterAll((done) => {
  database.end().then(done);
});

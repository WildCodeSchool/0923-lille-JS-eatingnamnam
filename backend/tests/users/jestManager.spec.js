require("dotenv").config();
const crypto = require("node:crypto");
const { database, tables } = require("../setup");

describe("POST /api/add/User", () => {
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

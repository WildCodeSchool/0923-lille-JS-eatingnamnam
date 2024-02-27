const crypto = require("node:crypto");

// Import required dependencies
const { database, tables } = require("../setup");

// Test suite for the create method of ItemManager
/* describe("Create item", () => {
  it("should create an item successfully", async () => {
    // Define a sample item for testing
    const testItem = {
      title: "Sample Item",
    };

    // Send a create request to the item table with a test item
    const insertId = await tables.item.create(testItem);

    // Check if the newly added item exists in the database
    const [rows] = await database.query(
      "select * from item where id = ?",
      insertId
    );

    const foundItem = rows[0];

    // Assertions
    expect(foundItem).toBeDefined();
    expect(foundItem.title).toBe(testItem.title);
  });

  it("should throw when passing invalid object", async () => {
    // Thx https://jestjs.io/docs/asynchronous#asyncawait

    // Send a create request to the item table with an empty object
    const promise = tables.item.create({});

    // Assertions
    await expect(promise).rejects.toThrow();
  });
}); */

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

    // Send a create request to the item table with an empty object
    const promise = tables.user.create({});

    // Assertions
    await expect(promise).rejects.toThrow();
  });
});

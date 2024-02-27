// eslint-disable-next-line import/no-extraneous-dependencies
import { afterEach, describe, expect, it } from "vitest";

require("dotenv").config();
// eslint-disable-next-line import/no-extraneous-dependencies

const mysql = require("mysql2/promise");

const crypto = require("node:crypto");
const tables = require("../../src/tables");

const DB_NAME = "namnam";

const database = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "thomas",
  password: "TNIG",
  database: "nam_nam",
});

database
  .getConnection()
  .then((connection) => {
    console.info(`Using database ${DB_NAME}`);

    connection.release();
  })
  .catch((error) => {
    console.warn(
      "Warning:",
      "Failed to establish a database connection.",
      "Please check your database credentials in the .env file if you need a database access."
    );
    console.error("Error message:", error.message);
  });

// Store database name into client for further uses
database.databaseName = DB_NAME;

afterEach((done) => {
  database.end().then(done);
});

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

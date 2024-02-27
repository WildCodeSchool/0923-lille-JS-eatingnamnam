require("dotenv").config();

// eslint-disable-next-line import/no-extraneous-dependencies
const request = require("supertest");
const app = require("../src/app");
const router = require("../src/router");
const tables = require("../src/tables");
const database = require("../database/client");

afterAll((done) => {
  database.end().then(done);
});

module.exports = {
  app,
  database,
  request,
  tables,
  router,
};

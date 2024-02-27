const database = require("../../database/client");

// Provide database access through AbstractManager class
class AbstractManager {
  constructor({ table }) {
    this.table = table;
    this.database = database;
  }
}

module.exports = AbstractManager;

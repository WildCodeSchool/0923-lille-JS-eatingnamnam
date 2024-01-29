const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(myUser, hashedPassword) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (first_name, last_name, pseudo, email, password, birth_date, role) VALUES (?,?,?,?,?,?,?)`,
      [
        myUser.firstname,
        myUser.lastname,
        myUser.pseudo,
        myUser.email,
        hashedPassword,
        myUser.birthdate,
        "user",
      ]
    );
    // Return the ID of the newly inserted item
    return result;
  }

  async getById(id) {
    const [user] = await this.database.query(
      `SELECT id, username, email, role FROM ${this.table}  WHERE id = ?`,
      [id]
    );
    return user;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [user] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    // Return the first row of the result, which represents the item
    return user[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of items
    return rows;
  }

  async readByEmail(mail) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [mail]
    );
    // Return the first row of the result, which represents the user
    return rows[0];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = UserManager;

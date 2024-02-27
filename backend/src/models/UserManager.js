const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  async create(myUser, hashedPassword) {
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
    const [user] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return user[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async readByEmail(mail) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [mail]
    );
    return rows[0];
  }
}

module.exports = UserManager;

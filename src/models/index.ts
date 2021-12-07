// "use strict";
// import fs from "fs";
// import path from "path";
// import { Sequelize, DataTypes } from "sequelize";
// import { Idb } from "../interfaces/models";

// const sequelize = new Sequelize(process.env.DATABASE_URL || "", {
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });
// const db = {} as Idb;

// fs.readdirSync(__dirname)
//   .filter((file: string) => {
//     return (
//       (file.indexOf(".") !== 0 &&
//         file !== "index.js" &&
//         file.slice(-3) === ".js") ||
//       file.slice(-3) === ".ts"
//     );
//   })
//   .forEach((file: string) => {
//     const model = require(path.join(__dirname, file));
//     if (typeof model != "function") return;
//     db[model.name] = model(sequelize, DataTypes);
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// export default db;

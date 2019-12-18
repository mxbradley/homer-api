require("dotenv").config();
const pgPromise = require("pg-promise");

const pgp = pgPromise({});

const config = {
    host: process.env.LAB_PG_HOST,
    port: process.env.LAB_PG_PORT,
    database: process.env.LAB_PG_DB,
    user: process.env.LAB_PG_WRITER,
    password: process.env.LAB_PG_PASS
};

const db = pgp(config);

exports.db = db;

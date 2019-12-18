const db = require("../database/postgresConnection").db;

try {
    db.one('SELECT COUNT(title) FROM stories')
        .then(res => {
            console.log(res);
        });
} catch (e) {
    throw `DB connection error: ${e}`;
}

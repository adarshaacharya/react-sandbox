const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

(async function setup() {
  const db = await sqlite.open('./mydb.sqlite');

  await db.migrate({ force: true });
  const people = await db.all('SELECT * FROM Person');
  console.log('all people', JSON.stringify(people, null, 2));

  const vehicles = await db.all('SELECT * FROM Vehicle');
  console.log('all vehicles', JSON.stringify(vehicles, null, 2));

})();

// db.js
const users = require("./users.json");
const curriculum = require("./curriculum.json");
const famiglia = require("./famiglia.json");

module.exports = function() {
  return {
    'users' : users,
    'curriculum' : curriculum,
    'famiglia'  : famiglia
  }
}

// module.exports = {
//   '/posts': require('./data/posts.json'),
//   '/user/login': require('./data/user/login.json'),
//   '/user/logout': require('./data/user/logout.json')
//}
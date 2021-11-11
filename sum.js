const config = require("./config");

function sum(a, b) {
  return a + b * config.FOO.BAR;
}
module.exports = sum;

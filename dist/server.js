"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
require("dotenv").config();
const port = process.env.SERVER_PORT;

_app2.default.listen(port, () => {
  console.log(`Server listening on ${port}...`);
});
"use strict";

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _icons = _interopRequireDefault(require("./routes/icons.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async function init() {
  const app = (0, _express.default)();
  app.use((0, _cors.default)());
  app.use(_icons.default);
  await app.listen(4000);
})();
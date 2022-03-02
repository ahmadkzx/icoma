"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _icons = require("../controllers/icons.controller");

const route = (0, _express.Router)();
route.put('/icons', _icons.addIcon);
route.get('/icons', _icons.getIcons);
route.delete('/icons', _icons.deleteIcon);
var _default = route;
exports.default = _default;
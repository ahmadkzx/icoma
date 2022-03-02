"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addIcon = addIcon;
exports.deleteIcon = deleteIcon;
exports.getIcons = getIcons;

var _path = _interopRequireDefault(require("path"));

var _promises = _interopRequireDefault(require("fs/promises"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addIcon() {}

async function getIcons(req, res) {
  try {
    const src = _path.default.join(__dirname, '../../../mock/icons');

    const filesName = await _promises.default.readdir(src);
    const files = await Promise.all(filesName.map(async name => {
      const filePath = _path.default.join(src, name);

      const file = await _promises.default.readFile(filePath, {
        encoding: 'utf-8'
      });
      const fileName = name.replace('.svg', '');
      return {
        name: fileName,
        content: file
      };
    }));
    res.status(200).json({
      data: files
    });
  } catch (err) {
    console.error('[SERVER ERROR]: ', err);
    res.status(500);
  }
}

function deleteIcon() {}
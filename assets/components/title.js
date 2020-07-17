"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Title = function Title(_ref) {
  var name = _ref.name,
      publisher = _ref.publisher;

  if (publisher) {
    return /*#__PURE__*/_react["default"].createElement("h3", null, name, /*#__PURE__*/_react["default"].createElement("span", {
      className: "connector"
    }, "by "), /*#__PURE__*/_react["default"].createElement("span", {
      className: "publisher"
    }, publisher));
  }

  return /*#__PURE__*/_react["default"].createElement("h3", null, name);
};

var _default = Title;
exports["default"] = _default;
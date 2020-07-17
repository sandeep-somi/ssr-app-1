"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CardLeft = function CardLeft(_ref) {
  var appno = _ref.appno,
      totalapps = _ref.totalapps,
      img = _ref.img;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-left"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-no"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "current"
  }, "0".concat(appno)), /*#__PURE__*/_react["default"].createElement("span", {
    className: "connector"
  }, "of "), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
    className: "total"
  }, "0".concat(totalapps))), /*#__PURE__*/_react["default"].createElement("img", {
    className: "app-icon",
    src: img.src,
    alt: img.alt,
    height: "120",
    width: "120"
  }));
};

var _default = CardLeft;
exports["default"] = _default;
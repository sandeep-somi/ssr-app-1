"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _cardLeft = _interopRequireDefault(require("./card-left"));

var _cardRight = _interopRequireDefault(require("./card-right"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Card = function Card(_ref) {
  var apps = _ref.apps,
      totalapps = _ref.totalapps;
  var cards = apps.map(function (app, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "app-card",
      key: app.name
    }, /*#__PURE__*/_react["default"].createElement(_cardLeft["default"], {
      img: app.img,
      appno: index + 1,
      totalapps: totalapps
    }), /*#__PURE__*/_react["default"].createElement(_cardRight["default"], {
      app: app
    }));
  });
  return cards;
};

var _default = Card;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _title = _interopRequireDefault(require("./title"));

var _tweet = _interopRequireDefault(require("./tweet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CardRight = function CardRight(_ref) {
  var app = _ref.app;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-meta"
  }, /*#__PURE__*/_react["default"].createElement(_title["default"], {
    name: app.name,
    publisher: app.publisher
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "app-lic"
  }, app.price)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-intro",
    dangerouslySetInnerHTML: {
      __html: app.desc
    }
  }), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-link"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "btn",
    href: app.link,
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Get App"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "ml-10 btn btn-twitter",
    onClick: function onClick() {
      (0, _tweet["default"])(app.tweet);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "icon icon-inline icon-twitter-light"
  }), "Share on Twitter")));
};

var _default = CardRight;
exports["default"] = _default;
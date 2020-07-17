"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reducers = _interopRequireDefault(require("./reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(preloadedState) {
  return (0, _redux.createStore)(_reducers["default"], preloadedState, (0, _redux.applyMiddleware)(_reduxThunk["default"]));
}
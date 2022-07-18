"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoHeaderNavContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _NavCallout = require("./items/NavCallout");

var _FaNavItems = require("./items/FaNavItems");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NoHeaderNavContent = _ref => {
  let {
    links,
    calloutIcon,
    calloutTitle,
    calloutContent
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    direction: "row",
    spacing: 1
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    item: true,
    xs: 12,
    spacing: 1,
    direction: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }, /*#__PURE__*/_react.default.createElement(_FaNavItems.FaNavItems, {
    items: links,
    noHeaderWidth: 3
  })), calloutTitle && /*#__PURE__*/_react.default.createElement(_NavCallout.NavCallout, {
    calloutIcon: calloutIcon,
    calloutTitle: calloutTitle,
    calloutContent: calloutContent
  }));
};

exports.NoHeaderNavContent = NoHeaderNavContent;
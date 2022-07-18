"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderNavContent = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _NavCallout = require("./items/NavCallout");

var _FaNavItems = require("./items/FaNavItems");

var _ProductNavItems = require("./items/ProductNavItems");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  header: {
    fontWeight: 600,
    color: '#595959',
    marginBottom: '.2rem'
  }
}));

const Section = _ref => {
  let {
    header,
    content
  } = _ref;
  const classes = useStyles();
  const [chunked, setChunked] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    setChunked((0, _lodash.chunk)(content, 4));
  }, [content]);
  return /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    direction: "row",
    xs: chunked.length * 3
  }, header && /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    direction: "row"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "h6",
    className: classes.header
  }, header)), chunked.map(chunk => /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    item: true,
    xs: true,
    spacing: 1,
    justifyContent: "flex-start",
    direction: "column"
  }, chunk[0].type === 'products' ? /*#__PURE__*/_react.default.createElement(_ProductNavItems.ProductNavItems, {
    items: chunk,
    noHeaderWidth: null
  }) : /*#__PURE__*/_react.default.createElement(_FaNavItems.FaNavItems, {
    items: chunk,
    noHeaderWidth: null
  }))));
};

const HeaderNavContent = _ref2 => {
  let {
    links,
    calloutIcon,
    calloutTitle,
    calloutContent
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    direction: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    spacing: 2
  }, Object.keys(links).map(link => /*#__PURE__*/_react.default.createElement(Section, {
    header: link,
    content: links[link]
  })), calloutTitle && /*#__PURE__*/_react.default.createElement(_NavCallout.NavCallout, {
    calloutIcon: calloutIcon,
    calloutTitle: calloutTitle,
    calloutContent: calloutContent
  }));
};

exports.HeaderNavContent = HeaderNavContent;
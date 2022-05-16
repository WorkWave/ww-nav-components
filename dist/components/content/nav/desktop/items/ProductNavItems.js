"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductNavItems = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _grey = _interopRequireDefault(require("@material-ui/core/colors/grey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  link: {
    color: theme.workwaveBlue,
    textDecoration: 'none',
    fontWeight: 600,
    paddingLeft: 0,
    margin: 0
  },
  header: {
    fontWeight: 600,
    color: '#595959'
  },
  item: {
    margin: '6px 0',
    '&:hover': {
      background: _grey.default[200]
    }
  }
}));

const ProductNavItems = _ref => {
  let {
    items,
    noHeaderWidth,
    close
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, items.map((item, index) => /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    key: index,
    className: classes.item,
    onClick: () => close,
    style: {
      maxWidth: noHeaderWidth ? null : '95%'
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: item.slug.current,
    rel: "noopener noreferrer",
    target: "_blank",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.link
  }, /*#__PURE__*/_react.default.createElement("span", null, item.mainName), ' ', item.secondaryName && /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: '#2F7FC1'
    }
  }, item.secondaryName)), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    style: {
      textDecoration: 'none',
      color: '#6F6D71'
    }
  }, item.description)))));
};

exports.ProductNavItems = ProductNavItems;
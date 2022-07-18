"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileProductItem = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _grey = _interopRequireDefault(require("@material-ui/core/colors/grey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  link: {
    textDecoration: 'none',
    color: theme.workwaveBlue
  },
  mobileProductLink: {
    fontSize: '1.25rem',
    fontWeight: '500',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.02rem'
    }
  },
  item: {
    '&:hover': {
      background: _grey.default[200]
    },
    '&:last-of-type': {
      marginBottom: '1rem'
    }
  }
}));

const MobileProductItem = _ref => {
  let {
    link,
    closeNav,
    index
  } = _ref;
  const classes = useStyles();
  const xs = (0, _useMediaQuery.default)('(max-width: 480px)');
  return /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 6,
    key: index,
    className: classes.item
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: link.slug.current,
    className: classes.link,
    style: {
      textDecoration: 'none'
    },
    target: "_blank",
    rel: "noopener"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.mobileProductLink,
    onMouseUp: e => closeNav(e)
  }, /*#__PURE__*/_react.default.createElement("span", null, link.mainName, " "), ' ', link.secondaryName && /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: '#2F7FC1',
      marginLeft: '0px'
    }
  }, link.secondaryName)), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    style: {
      textDecoration: 'none',
      color: '#6F6D71' // marginLeft: xs ? null : '1rem',
      // marginTop: '-.8rem',

    }
  }, link.description)));
};

exports.MobileProductItem = MobileProductItem;
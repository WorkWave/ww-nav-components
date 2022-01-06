"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  bar: {
    background: theme.white,
    padding: '1rem'
  },
  numbers: {
    fontSize: '14px',
    fontWeight: 600,
    color: theme.workwaveBlue,
    margin: '0 .75rem',
    transition: 'all .5s',
    '&:hover': {
      color: '#2F7FC1'
    }
  }
}));

const StandaloneResourceLink = _ref => {
  let {
    link,
    title,
    internal,
    icon
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, internal ? /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    to: "/".concat(link)
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.numbers
  }, icon && /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fad', icon]
  }), title)) : /*#__PURE__*/_react.default.createElement("a", {
    href: link,
    target: icon === 'phone-alt' ? '_self' : '_blank',
    rel: "noopener",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.numbers
  }, icon && /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fad', icon]
  }), " ", title)));
};

var _default = StandaloneResourceLink;
exports.default = _default;
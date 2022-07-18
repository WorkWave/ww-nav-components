"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  link: {
    color: theme.workwaveBlue,
    cursor: 'pointer',
    marginRight: '8px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: '12px',
    textDecoration: 'none',
    position: 'relative',
    transition: 'all .5s',
    '&:hover': {
      color: '#2F7FC1'
    }
  }
}));

const StandaloneNavLink = _ref => {
  let {
    title = 'Example',
    link = 'Example',
    internal = true,
    icon
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Typography, null, internal ? /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    to: "/".concat(link.toLowerCase()),
    className: classes.link
  }, title) : /*#__PURE__*/_react.default.createElement("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    className: classes.link
  }, icon && /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fad', icon]
  }), " ", title));
};

var _default = StandaloneNavLink;
exports.default = _default;
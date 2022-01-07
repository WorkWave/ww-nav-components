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
  standaloneLinkContainer: {
    padding: '15px 0',
    borderBottom: "1px ".concat(theme.white, " solid")
  },
  standaloneLink: {
    textDecoration: 'none',
    color: theme.white
  }
}));

const MobileStandaloneNavLink = _ref => {
  let {
    link = 'Example',
    icon,
    internal = true,
    closeNav,
    title = 'Example'
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, internal ? /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    to: "/".concat(link.toLowerCase()),
    className: classes.standaloneLink
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    alignItems: "center",
    onMouseUp: e => closeNav(e),
    className: classes.standaloneLinkContainer
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fad', icon],
    style: {
      marginRight: '.5rem',
      color: 'white',
      marginLeft: '1rem',
      fontSize: '1.25rem'
    }
  }), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      fontSize: '1.25rem',
      fontWeight: 500
    }
  }, title))) : /*#__PURE__*/_react.default.createElement("a", {
    href: link,
    target: "_blank",
    rel: "noopener",
    className: classes.standaloneLink
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    alignItems: "center",
    onMouseUp: e => closeNav(e),
    className: classes.standaloneLinkContainer
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      fontSize: '1.25rem',
      fontWeight: 500
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fad', icon],
    style: {
      marginRight: '.5rem',
      color: 'white',
      marginLeft: '1rem',
      fontSize: '1.25rem'
    }
  }), title))));
};

var _default = MobileStandaloneNavLink;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FaMobileNavItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  link: {
    textDecoration: 'none',
    color: theme.workwaveBlue
  }
}));

const FaMobileNavItem = _ref => {
  let {
    link,
    closeNav,
    index
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    className: classes.link,
    to: "/".concat(link.slug.current)
  }, /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
    key: index,
    onMouseUp: e => closeNav(e)
  }, ' ', /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fad', link.faIcon],
    style: {
      height: '35px',
      width: '35px',
      marginRight: '5px',
      border: "1px solid #F1F2F5",
      background: '#F1F2F5',
      borderRadius: '5px',
      padding: '5px',
      color: index % 2 === 0 ? '#002D5C' : index % 3 === 0 ? '#0F95A4' : index % 4 === 0 ? '#055291' : '#2A7ABC'
    }
  }), ' ', /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 400
    }
  }, link.title))));
};

exports.FaMobileNavItem = FaMobileNavItem;
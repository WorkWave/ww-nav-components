"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FaNavItems = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  link: {
    color: theme.workwaveBlue,
    textDecoration: 'none',
    fontWeight: 600
  },
  item: {
    padding: '.2rem 0'
  }
}));

const FaNavItems = _ref => {
  let {
    items,
    noHeaderWidth
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, items.map((item, index) => /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: noHeaderWidth,
    key: index,
    className: classes.item,
    style: {
      maxWidth: noHeaderWidth ? null : '95%'
    }
  }, /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    to: "/".concat(item.slug.current),
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
    style: {
      paddingLeft: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fad', item.faIcon],
    style: {
      height: '25px',
      width: '25px',
      marginRight: '5px',
      border: "1px solid #F1F2F5",
      background: '#F1F2F5',
      borderRadius: '5px',
      padding: '3px',
      color: index % 2 === 0 ? '#002D5C' : index % 3 === 0 ? '#0F95A4' : index % 4 === 0 ? '#055291' : '#2A7ABC'
    }
  }), ' ', /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.link
  }, item.title)))))));
};

exports.FaNavItems = FaNavItems;
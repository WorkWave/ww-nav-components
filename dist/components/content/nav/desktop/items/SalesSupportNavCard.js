"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SalesSupportNavCard = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  card: {
    color: theme.workwaveBlue,
    height: '100%',
    width: '100%',
    textAlign: 'center',
    margin: '0 1rem',
    padding: '2rem 0',
    transition: 'all .5s'
  }
}));

const SalesSupportNavCard = _ref => {
  let {
    cardContent,
    selected,
    handleHover,
    setSelected,
    handleClick
  } = _ref;
  const {
    description,
    faIcon,
    name
  } = cardContent;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    item: true,
    xs: 6,
    alignItems: "center",
    justifyContent: "center",
    style: {
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Card, {
    className: classes.card,
    onMouseOver: e => handleHover(e),
    onMouseLeave: e => setSelected(null),
    onClick: e => handleClick(e),
    name: name,
    elevation: 3,
    style: {
      cursor: 'pointer',
      color: name === selected ? '#2F7FC1' : '#002D5C'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    onMouseOver: e => handleHover(e),
    name: name,
    icon: ['fad', faIcon],
    style: {
      height: '20px',
      width: '20px',
      marginTop: '.5px',
      marginRight: '.5px'
    }
  }), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    onMouseOver: e => handleHover(e),
    name: name,
    variant: "h5",
    style: {
      fontWeight: 700
    }
  }, name), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    onMouseOver: e => handleHover(e),
    name: name,
    variant: "body2"
  }, description)));
};

exports.SalesSupportNavCard = SalesSupportNavCard;
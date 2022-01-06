"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { StandaloneResourceLink } from '../links/StandaloneResourceLink'
// import { ResourceLink } from './ResourceBarPieces/ResourceLink';
// import FormModalContext from '../../../context/FormModalContext';
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

const ResourceBar = _ref => {
  let {
    children
  } = _ref;
  const classes = useStyles();
  const sm = (0, _useMediaQuery.default)('(max-width: 630px)');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.bar
  }, /*#__PURE__*/_react.default.createElement(_core.Container, {
    fixed: true
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    direction: sm ? 'column' : 'row',
    justifyContent: sm ? 'center' : 'flex-end',
    alignItems: "center"
  }, children)));
};

var _default = ResourceBar;
exports.default = _default;
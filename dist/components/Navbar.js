"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { NavLink } from './desktop/NavLink';
// import FormModalContext from '../../../context/FormModalContext';
// import { MobileNav } from './mobile/MobileNav';
// import { StandaloneNavLink } from './desktop/StandaloneNavLink';
const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    background: theme.white,
    color: theme.workwaveBlue,
    padding: '0 0',
    borderTop: "1.3px ".concat(theme.lightGray, " solid"),
    minHeight: '64px',
    display: 'flex',
    justifyContent: 'center'
  },
  cta: {
    fontSize: '20px',
    marginLeft: '10px',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px'
    },
    '&:hover': {
      background: '#2F7FC1'
    }
  },
  img: {
    height: '3rem',
    marginTop: '.5rem',
    [theme.breakpoints.down('xs')]: {
      height: '2.5rem'
    }
  }
}));

const Navbar = _ref => {
  let {
    image,
    children
  } = _ref;
  const classes = useStyles();
  const med = (0, _useMediaQuery.default)('(max-width: 960px)');
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.AppBar, {
    position: "sticky",
    className: classes.appBar,
    elevation: 0
  }, /*#__PURE__*/_react.default.createElement(_core.Toolbar, {
    disableGutters: true
  }, /*#__PURE__*/_react.default.createElement(_core.Container, {
    className: classes.root,
    fixed: true
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    direction: "row",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 6,
    md: 2
  }, /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    to: "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    className: classes.img,
    alt: "logo"
  }))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 6,
    md: 10,
    container: true,
    direction: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  }, children))))));
};

var _default = Navbar;
exports.default = _default;
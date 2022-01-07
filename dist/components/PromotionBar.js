"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPortableText = _interopRequireDefault(require("react-portable-text"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  bar: {
    background: theme.workwaveBlue
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 425,
    // marginLeft: '4rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0'
    },
    [theme.breakpoints.down('sm')]: {
      // marginLeft: '4rem',
      lineHeight: '1.2'
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0'
    }
  }
}));

const PromotionBar = _ref => {
  let {
    promotion,
    open = true,
    setOpen
  } = _ref;
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Collapse, {
    in: open
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    className: classes.bar
  }, /*#__PURE__*/_react.default.createElement(_core.Container, {
    fixed: true
  }, promotion._rawContent.map(content => /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "h6",
    style: {
      color: 'white',
      textAlign: 'center',
      margin: '.5rem 0'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactPortableText.default, {
    content: content,
    serializers: {
      normal: _ref2 => {
        let {
          children
        } = _ref2;
        return /*#__PURE__*/_react.default.createElement("span", null, children);
      },
      link: _ref3 => {
        let {
          blank,
          children,
          href
        } = _ref3;
        return /*#__PURE__*/_react.default.createElement("a", {
          href: href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: classes.text,
          style: {
            marginLeft: 'none',
            fontWeight: 700,
            textDecoration: '0'
          }
        }, children);
      }
    }
  })))), /*#__PURE__*/_react.default.createElement(_Close.default, {
    style: {
      cursor: 'pointer',
      color: 'white',
      position: 'relative',
      marginRight: '1rem'
    },
    onClick: e => setOpen(false)
  })));
};

var _default = PromotionBar;
exports.default = _default;
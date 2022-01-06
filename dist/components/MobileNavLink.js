"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _gatsby = require("gatsby");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _FaMobileNavItem = require("./content/nav/mobile/items/FaMobileNavItem");

var _MobileProductItem = require("./content/nav/mobile/items/MobileProductItem");

var _MobileSalesSupportItem = require("./content/nav/mobile/items/MobileSalesSupportItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: '1.25rem',
    fontWeight: 500,
    color: theme.white
  },
  summary: {
    background: theme.workwaveBlue,
    borderBottom: "1px ".concat(theme.white, " solid"),
    '& .MuiAccordionSummary-content': {
      margin: "15px 0"
    }
  },
  link: {
    textDecoration: 'none',
    color: theme.workwaveBlue
  },
  paper: {
    boxShadow: 'none'
  }
}));

const MobileNavLink = _ref => {
  let {
    header,
    links,
    icon,
    closeNav
  } = _ref;
  const classes = useStyles();
  const [industryLinks, setIndustryLinks] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    header === 'industries' && setIndustryLinks(links.slice(0, 9));
  }, [links]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_core.Accordion, {
    elevation: 0
  }, /*#__PURE__*/_react.default.createElement(_core.AccordionSummary, {
    className: classes.summary,
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, {
      style: {
        color: 'white'
      }
    }),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fad', icon],
    style: {
      marginRight: '.5rem',
      fontSize: '1.25rem',
      color: 'white'
    }
  }), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.heading
  }, header[0].toUpperCase() + header.slice(1)))), /*#__PURE__*/_react.default.createElement(_core.AccordionDetails, {
    style: {
      paddingBottom: '8px'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    direction: header === 'products' ? 'row' : 'column',
    spacing: header === 'products' ? 2 : 0
  }, industryLinks.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, industryLinks.map((link, index) => /*#__PURE__*/_react.default.createElement(_FaMobileNavItem.FaMobileNavItem, {
    link: link,
    closeNav: closeNav,
    index: index
  })), /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    to: "/".concat(industryLinks[0].type),
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    variant: "contained",
    color: "primary",
    fullWidth: true
  }, "ALL INDUSTRIES"))) : links.map((link, index) => ['products'].includes(link.type) ? /*#__PURE__*/_react.default.createElement(_MobileProductItem.MobileProductItem, {
    link: link,
    index: index,
    closeNav: closeNav
  }) : ['sales', 'support'].includes(link.type) ? /*#__PURE__*/_react.default.createElement(_MobileSalesSupportItem.MobileSalesSupportItem, {
    link: link,
    index: index,
    closeNav: closeNav
  }) : /*#__PURE__*/_react.default.createElement(_FaMobileNavItem.FaMobileNavItem, {
    link: link,
    closeNav: closeNav,
    index: index
  }))))));
};

var _default = MobileNavLink;
exports.default = _default;
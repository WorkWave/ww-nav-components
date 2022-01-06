"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.array.flat.js");

require("core-js/modules/es.array.unscopables.flat.js");

var _react = _interopRequireWildcard(require("react"));

var _gatsby = require("gatsby");

var _lodash = require("lodash");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _HoverMenu = _interopRequireDefault(require("material-ui-popup-state/HoverMenu"));

var _hooks = require("material-ui-popup-state/hooks");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _HeaderNavContent = require("./content/nav/desktop/HeaderNavContent");

var _NoHeaderNavContent = require("./content/nav/desktop/NoHeaderNavContent");

var _SalesNavContent = require("./content/nav/desktop/SalesNavContent");

var _SupportNavContent = require("./content/nav/desktop/SupportNavContent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useStyles = (0, _styles.makeStyles)(theme => ({
  options: {
    position: 'relative',
    padding: '.7rem',
    transition: 'all .5s ease'
  },
  link: {
    color: theme.workwaveBlue,
    textDecoration: 'none',
    transition: 'all .5s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: '1rem',
    height: 'auto',
    transition: 'all .5s ease'
  },
  popoverPaper: {
    maxHeight: 'none',
    width: '100%',
    boxShadow: '0px 4px 4px rgba(9, 7, 37, 0.05)',
    paddingTop: '1rem' // marginTop: '-.5rem',
    // background:
    // 	'linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(236,236,238,1) 100%)',

  },
  linkContainer: {
    height: '64px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const NavLink = _ref => {
  let {
    header,
    links,
    calloutIcon,
    calloutTitle,
    calloutContent,
    contentHeader,
    internalLink,
    handleModalClick
  } = _ref;
  const classes = useStyles();
  const [sortedLinks, setSortedLinks] = (0, _react.useState)(null);
  const popupState = (0, _hooks.usePopupState)({
    variant: 'popover',
    popupId: 'demoMenu'
  });
  (0, _react.useEffect)(() => {
    const sorted = (0, _lodash.groupBy)(links, 'category');
    Object.keys(sorted).includes('undefined') ? setSortedLinks(Object.values(sorted).flat()) : setSortedLinks(sorted);
  }, [links]);
  const {
    isOpen
  } = popupState; //if the array has length greater than 4, chunk array to length of 4 a piece, use forEach to
  //create columns, map each to the column.

  const lgNav = (0, _useMediaQuery.default)('(max-width: 1280px)');
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes.linkContainer,
    style: {
      marginRight: lgNav ? '8px' : '16px'
    }
  }, (0, _hooks.bindHover)(popupState)), /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    className: classes.link,
    to: "/".concat(header)
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.link,
    style: {
      color: isOpen ? '#2F7FC1' : '#002D5C'
    }
  }, header[0].toUpperCase() + header.slice(1), /*#__PURE__*/_react.default.createElement(_icons.ExpandMore, {
    className: classes.icon,
    style: {
      transition: 'all .5s ease',
      color: isOpen ? '#2F7FC1' : '#002D5C',
      transform: isOpen ? 'rotateZ(180deg)' : null
    }
  })))), /*#__PURE__*/_react.default.createElement(_HoverMenu.default, _extends({}, (0, _hooks.bindMenu)(popupState), {
    getContentAnchorEl: null,
    PopoverClasses: {
      paper: classes.popoverPaper
    },
    TransitionComponent: _core.Fade,
    TransitionProps: {
      timeout: 2
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    }
  }), /*#__PURE__*/_react.default.createElement(_core.Container, {
    fixed: true
  }, sortedLinks instanceof Array ? header === 'sales' ? /*#__PURE__*/_react.default.createElement(_SalesNavContent.SalesNavContent, {
    links: sortedLinks,
    contentHeader: contentHeader,
    internalLink: internalLink,
    handleModalClick: handleModalClick
  }) : header === 'support' ? /*#__PURE__*/_react.default.createElement(_SupportNavContent.SupportNavContent, {
    links: sortedLinks,
    contentHeader: contentHeader,
    internalLink: internalLink
  }) : /*#__PURE__*/_react.default.createElement(_NoHeaderNavContent.NoHeaderNavContent, {
    links: sortedLinks,
    calloutIcon: calloutIcon,
    calloutTitle: calloutTitle,
    calloutContent: calloutContent
  }) : /*#__PURE__*/_react.default.createElement(_HeaderNavContent.HeaderNavContent, {
    links: sortedLinks,
    calloutIcon: calloutIcon,
    calloutTitle: calloutTitle,
    calloutContent: calloutContent,
    header: header
  }))));
};

var _default = NavLink;
exports.default = _default;
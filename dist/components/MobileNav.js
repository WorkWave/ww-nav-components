"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _hooks = require("material-ui-popup-state/hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import { MobileNavLink } from './MobileNavLink';
// import { MobileStandaloneNavLink } from './MobileStandaloneNavLink';
const useStyles = (0, _styles.makeStyles)(theme => ({
  link: {
    color: theme.workwaveBlue,
    textDecoration: 'none'
  },
  cta: {
    margin: '0 1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '.8rem',
      padding: '10px 10px'
    }
  }
}));

const MobileNav = _ref => {
  let {
    children,
    handleModalClick,
    ctaText = 'GET STARTED'
  } = _ref;
  const classes = useStyles();
  const popupState = (0, _hooks.usePopupState)({
    variant: 'popper',
    popupId: 'mobileMenu'
  });
  const {
    isOpen,
    close
  } = popupState;
  const body = document.querySelector('body');
  (0, _react.useEffect)(() => {
    const popperScroll = () => {
      isOpen ? body.style.overflow = 'hidden' : body.style.overflow = 'visible';
    };

    popperScroll();
  }, [isOpen]);

  const closeNav = e => {
    e.preventDefault();
    setTimeout(() => {
      close();
    }, 700);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Button, {
    variant: "contained",
    color: "primary",
    size: "large",
    onClick: e => handleModalClick(e),
    className: classes.cta
  }, ctaText), /*#__PURE__*/_react.default.createElement("div", _extends({}, (0, _hooks.bindToggle)(popupState), {
    style: {
      height: '64px',
      display: 'flex',
      alignItems: 'center'
    }
  }), isOpen ? /*#__PURE__*/_react.default.createElement(_Close.default, {
    style: {
      color: '#002D5C'
    },
    size: "large"
  }) : /*#__PURE__*/_react.default.createElement(_Menu.default, {
    style: {
      color: '#002D5C'
    },
    size: "large"
  })), /*#__PURE__*/_react.default.createElement(_core.Popper, _extends({
    style: {
      marginRight: '-5px',
      width: '100vw',
      overflow: 'scroll',
      height: '100vh',
      background: '#002D5C',
      paddingBottom: '300px'
    },
    placement: "top",
    disablePortal: true,
    modifiers: {
      offset: {
        enabled: true,
        offset: '300,0'
      },
      preventOverflow: {
        enabled: true,
        boundariesElement: 'scrollParent'
      }
    }
  }, (0, _hooks.bindPopper)(popupState)), /*#__PURE__*/_react.default.createElement("div", null, children)));
};

var _default = MobileNav;
exports.default = _default;
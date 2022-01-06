"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileSalesSupportItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _gatsby = require("gatsby");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  link: {
    textDecoration: 'none',
    color: theme.workwaveBlue
  }
}));

const MobileSalesSupportItem = _ref => {
  let {
    link,
    closeNav,
    index,
    handleModalClick
  } = _ref;

  const handleClick = (e, type) => {
    e.preventDefault();
    type === 'support' ? handleModalClick() : (0, _gatsby.navigate)('/it-worked');
  };

  const classes = useStyles();
  return link.slug.current.indexOf('tel') > -1 ? /*#__PURE__*/_react.default.createElement("a", {
    href: link.slug.current,
    className: classes.link,
    style: {
      textDecoration: 'none'
    },
    target: "_self"
  }, /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
    key: index,
    onMouseUp: e => closeNav(e)
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
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
  }), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 400
    }
  }, link.title))) : /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
    className: classes.link,
    key: index,
    onClick: e => handleClick(e, link.type),
    onMouseUp: e => closeNav(e)
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
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
  }, link.title));
};

exports.MobileSalesSupportItem = MobileSalesSupportItem;
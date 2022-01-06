"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavCallout = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _gatsby = require("gatsby");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactPortableText = _interopRequireDefault(require("react-portable-text"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _core.makeStyles)(theme => ({
  // 	headline: {
  // 		margin: '1rem 0',
  // 		'&:last-of-type': {
  // 			marginBottom: 'none',
  // 		},
  // 	},
  arrow: {
    marginLeft: '.25rem',
    transition: 'transform .25s ease-in-out',
    display: 'inline-block'
  },
  content: {
    '&:hover': {
      transition: 'all 0.25s',
      cursor: 'pointer',
      '& $arrow': {
        transform: 'translateX(10px)'
      }
    }
  }
}));

const NavCallout = _ref => {
  let {
    calloutIcon,
    calloutTitle,
    calloutContent
  } = _ref;
  const classes = useStyles();
  const [hovered, setHovered] = (0, _react.useState)(null);
  return /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    direction: "row",
    justifyContent: "flex-start",
    style: {
      background: '#F6F6F8',
      borderRadius: '8px',
      margin: '1rem 0',
      padding: '1rem'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    direction: "row",
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fad', calloutIcon],
    style: {
      height: '30px',
      width: '30px',
      marginRight: '5px',
      color: '#002D5C'
    }
  }), ' ', /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "h6",
    style: {
      color: '#002D5C',
      fontWeight: 700
    }
  }, calloutTitle)), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body1"
  }, calloutContent.map((content, index) => /*#__PURE__*/_react.default.createElement(_reactPortableText.default, {
    key: index,
    content: content,
    serializers: {
      normal: _ref2 => {
        let {
          children
        } = _ref2;
        return /*#__PURE__*/_react.default.createElement(_core.Typography, {
          onMouseOver: e => setHovered(index),
          className: index === hovered && classes.content,
          style: {
            marginTop: '1rem',
            marginBottom: index === calloutContent.length - 1 ? 'none' : '1rem'
          }
        }, children);
      },
      internalLink: _ref3 => {
        let {
          children,
          internalSlug
        } = _ref3;
        return /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
          to: "/".concat(internalSlug),
          style: {
            textDecoration: 'none',
            color: '#002D5C'
          }
        }, children, ' ', /*#__PURE__*/_react.default.createElement("span", {
          className: index === hovered && classes.arrow
        }, "\u2192"));
      },
      link: _ref4 => {
        let {
          children,
          href
        } = _ref4;
        return /*#__PURE__*/_react.default.createElement("a", {
          href: href,
          target: "_blank",
          rel: "noopener",
          style: {
            textDecoration: 'none',
            color: '#002D5C'
          }
        }, children, ' ', /*#__PURE__*/_react.default.createElement("span", {
          className: index === hovered && classes.arrow
        }, "\u2192"));
      }
    }
  })))));
};

exports.NavCallout = NavCallout;
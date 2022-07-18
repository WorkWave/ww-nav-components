"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SalesNavContent = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _SalesSupportNavCard = require("./items/SalesSupportNavCard");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  text: {
    color: theme.workwaveBlue
  }
}));

const SalesNavContent = _ref => {
  let {
    links,
    contentHeader,
    handleModalClick
  } = _ref;
  const classes = useStyles();
  const [selected, setSelected] = (0, _react.useState)(null);

  const handleHover = e => {
    const name = e.target.getAttribute('name');
    setSelected(name);
  };

  const handleCall = e => {
    window.open("".concat(links[0].slug.current), '_self');
  };

  return /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    direction: "row",
    className: classes.text
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    container: true,
    direction: "row",
    justifyContent: "center"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "h4",
    style: {
      textAlign: 'center',
      margin: '2rem',
      fontWeight: 700
    }
  }, contentHeader)), /*#__PURE__*/_react.default.createElement(_SalesSupportNavCard.SalesSupportNavCard, {
    cardContent: links[0],
    selected: selected,
    handleHover: handleHover,
    setSelected: setSelected,
    handleClick: handleCall
  }), /*#__PURE__*/_react.default.createElement(_SalesSupportNavCard.SalesSupportNavCard, {
    cardContent: links[1],
    selected: selected,
    handleHover: handleHover,
    setSelected: setSelected,
    handleClick: handleModalClick
  }));
};

exports.SalesNavContent = SalesNavContent;
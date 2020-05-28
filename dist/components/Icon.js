"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AntDesign = _interopRequireDefault(require("react-native-vector-icons/AntDesign"));

var _Entypo = _interopRequireDefault(require("react-native-vector-icons/Entypo"));

var _EvilIcons = _interopRequireDefault(require("react-native-vector-icons/EvilIcons"));

var _Feather = _interopRequireDefault(require("react-native-vector-icons/Feather"));

var _FontAwesome = _interopRequireDefault(require("react-native-vector-icons/FontAwesome"));

var _FontAwesome2 = _interopRequireDefault(require("react-native-vector-icons/FontAwesome5"));

var _Fontisto = _interopRequireDefault(require("react-native-vector-icons/Fontisto"));

var _Foundation = _interopRequireDefault(require("react-native-vector-icons/Foundation"));

var _Ionicons = _interopRequireDefault(require("react-native-vector-icons/Ionicons"));

var _MaterialCommunityIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialCommunityIcons"));

var _MaterialIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialIcons"));

var _Octicons = _interopRequireDefault(require("react-native-vector-icons/Octicons"));

var _SimpleLineIcons = _interopRequireDefault(require("react-native-vector-icons/SimpleLineIcons"));

var _Zocial = _interopRequireDefault(require("react-native-vector-icons/Zocial"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Icon = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      switch (this.props.type) {
        case 'AntDesign':
          this.Icon = _AntDesign["default"];
          break;

        case 'Entypo':
          this.Icon = _Entypo["default"];
          break;

        case 'EvilIcons':
          this.Icon = _EvilIcons["default"];
          break;

        case 'Feather':
          this.Icon = _Feather["default"];
          break;

        case 'FontAwesome':
          this.Icon = _FontAwesome["default"];
          break;

        case 'FontAwesome5':
          this.Icon = _FontAwesome2["default"];
          break;

        case 'Fontisto':
          this.Icon = _Fontisto["default"];
          break;

        case 'Foundation':
          this.Icon = _Foundation["default"];
          break;

        case 'Ionicons':
          this.Icon = _Ionicons["default"];
          break;

        case 'MaterialCommunityIcons':
          this.Icon = _MaterialCommunityIcons["default"];
          break;

        case 'MaterialIcons':
          this.Icon = _MaterialIcons["default"];
          break;

        case 'Octicons':
          this.Icon = _Octicons["default"];
          break;

        case 'SimpleLineIcons':
          this.Icon = _SimpleLineIcons["default"];
          break;

        case 'Zocial':
          this.Icon = _Zocial["default"];
          break;

        default:
          this.Icon = _Ionicons["default"];
      }

      var iconFontSize = Platform.OS === "ios" ? 30 : 28;
      return /*#__PURE__*/_react["default"].createElement(this.Icon, _extends({}, this.props, {
        style: _objectSpread({
          fontSize: iconFontSize
        }, this.props.style)
      }));
    }
  }]);

  return Icon;
}(_react.Component);

exports["default"] = Icon;
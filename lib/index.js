"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PayPalButton = void 0;

require("@babel/polyfill");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _paypalCheckout = _interopRequireDefault(require("paypal-checkout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = _paypalCheckout.default.Button.driver('react', {
  React: _react.default,
  ReactDOM: _reactDom.default
});

var PayPalButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PayPalButton, _React$Component);

  function PayPalButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PayPalButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PayPalButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "client", void 0);

    return _this;
  }

  _createClass(PayPalButton, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _paypalCheckout.default;

              case 2:
                this.client = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "payment",
    value: function payment(data, actions) {
      return actions.payment.create({
        transactions: [{
          amount: {
            total: this.props.amount,
            currency: this.props.currency
          }
        }]
      });
    }
  }, {
    key: "onAuthorize",
    value: function onAuthorize(data, actions) {
      return actions.payment.execute();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(Button, {
        commit: true,
        env: this.props.env,
        client: {
          sandbox: this.props.sandboxID,
          production: this.props.productionID
        },
        payment: function payment(data, actions) {
          return _this2.payment(data, actions);
        },
        onAuthorize: function onAuthorize(data, actions) {
          return _this2.onAuthorize(data, actions);
        },
        amount: this.props.amount
      });
    }
  }]);

  return PayPalButton;
}(_react.default.Component);

exports.PayPalButton = PayPalButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiQnV0dG9uIiwicGF5cGFsIiwiZHJpdmVyIiwiUmVhY3QiLCJSZWFjdERPTSIsIlBheVBhbEJ1dHRvbiIsImNsaWVudCIsImRhdGEiLCJhY3Rpb25zIiwicGF5bWVudCIsImNyZWF0ZSIsInRyYW5zYWN0aW9ucyIsImFtb3VudCIsInRvdGFsIiwicHJvcHMiLCJjdXJyZW5jeSIsImV4ZWN1dGUiLCJlbnYiLCJzYW5kYm94Iiwic2FuZGJveElEIiwicHJvZHVjdGlvbiIsInByb2R1Y3Rpb25JRCIsIm9uQXV0aG9yaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHdCQUFPRCxNQUFQLENBQWNFLE1BQWQsQ0FBcUIsT0FBckIsRUFBOEI7QUFBRUMsRUFBQUEsS0FBSyxFQUFMQSxjQUFGO0FBQVNDLEVBQUFBLFFBQVEsRUFBUkE7QUFBVCxDQUE5QixDQUFmOztJQVVNQyxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUlrQkosdUI7OztBQUFwQixxQkFBS0ssTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUdDQyxJLEVBQVdDLE8sRUFBYztBQUMvQixhQUFPQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLE1BQWhCLENBQXVCO0FBQzVCQyxRQUFBQSxZQUFZLEVBQUUsQ0FDWjtBQUNFQyxVQUFBQSxNQUFNLEVBQUU7QUFDTkMsWUFBQUEsS0FBSyxFQUFFLEtBQUtDLEtBQUwsQ0FBV0YsTUFEWjtBQUVORyxZQUFBQSxRQUFRLEVBQUUsS0FBS0QsS0FBTCxDQUFXQztBQUZmO0FBRFYsU0FEWTtBQURjLE9BQXZCLENBQVA7QUFVRDs7O2dDQUVXUixJLEVBQVdDLE8sRUFBYztBQUNuQyxhQUFPQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JPLE9BQWhCLEVBQVA7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRSw2QkFBQyxNQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUUsSUFEVjtBQUVFLFFBQUEsR0FBRyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0csR0FGbEI7QUFHRSxRQUFBLE1BQU0sRUFBRTtBQUNOQyxVQUFBQSxPQUFPLEVBQUUsS0FBS0osS0FBTCxDQUFXSyxTQURkO0FBRU5DLFVBQUFBLFVBQVUsRUFBRSxLQUFLTixLQUFMLENBQVdPO0FBRmpCLFNBSFY7QUFPRSxRQUFBLE9BQU8sRUFBRSxpQkFBQ2QsSUFBRCxFQUFZQyxPQUFaO0FBQUEsaUJBQTZCLE1BQUksQ0FBQ0MsT0FBTCxDQUFhRixJQUFiLEVBQW1CQyxPQUFuQixDQUE3QjtBQUFBLFNBUFg7QUFRRSxRQUFBLFdBQVcsRUFBRSxxQkFBQ0QsSUFBRCxFQUFZQyxPQUFaO0FBQUEsaUJBQTZCLE1BQUksQ0FBQ2MsV0FBTCxDQUFpQmYsSUFBakIsRUFBdUJDLE9BQXZCLENBQTdCO0FBQUEsU0FSZjtBQVNFLFFBQUEsTUFBTSxFQUFFLEtBQUtNLEtBQUwsQ0FBV0Y7QUFUckIsUUFERjtBQWFEOzs7O0VBdEN3QlQsZUFBTW9CLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBwYXlwYWwgZnJvbSAncGF5cGFsLWNoZWNrb3V0JztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHBheXBhbC5CdXR0b24uZHJpdmVyKCdyZWFjdCcsIHsgUmVhY3QsIFJlYWN0RE9NIH0pO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXlQYWxCdXR0b25Qcm9wcyB7XHJcbiAgZW52OiBzdHJpbmc7XHJcbiAgc2FuZGJveElEPzogc3RyaW5nO1xyXG4gIHByb2R1Y3Rpb25JRD86IHN0cmluZztcclxuICBhbW91bnQ6IG51bWJlcjtcclxuICBjdXJyZW5jeTogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBQYXlQYWxCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UGF5UGFsQnV0dG9uUHJvcHMsIHt9PiB7XHJcbiAgY2xpZW50OiBhbnk7XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5jbGllbnQgPSBhd2FpdCBwYXlwYWxcclxuICB9XHJcblxyXG4gIHBheW1lbnQoZGF0YTogYW55LCBhY3Rpb25zOiBhbnkpIHtcclxuICAgIHJldHVybiBhY3Rpb25zLnBheW1lbnQuY3JlYXRlKHtcclxuICAgICAgdHJhbnNhY3Rpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYW1vdW50OiB7XHJcbiAgICAgICAgICAgIHRvdGFsOiB0aGlzLnByb3BzLmFtb3VudCxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHRoaXMucHJvcHMuY3VycmVuY3lcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25BdXRob3JpemUoZGF0YTogYW55LCBhY3Rpb25zOiBhbnkpIHtcclxuICAgIHJldHVybiBhY3Rpb25zLnBheW1lbnQuZXhlY3V0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNvbW1pdD17dHJ1ZX1cclxuICAgICAgICBlbnY9e3RoaXMucHJvcHMuZW52fVxyXG4gICAgICAgIGNsaWVudD17e1xyXG4gICAgICAgICAgc2FuZGJveDogdGhpcy5wcm9wcy5zYW5kYm94SUQsXHJcbiAgICAgICAgICBwcm9kdWN0aW9uOiB0aGlzLnByb3BzLnByb2R1Y3Rpb25JRFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgcGF5bWVudD17KGRhdGE6IGFueSwgYWN0aW9uczogYW55KSA9PiB0aGlzLnBheW1lbnQoZGF0YSwgYWN0aW9ucyl9XHJcbiAgICAgICAgb25BdXRob3JpemU9eyhkYXRhOiBhbnksIGFjdGlvbnM6IGFueSkgPT4gdGhpcy5vbkF1dGhvcml6ZShkYXRhLCBhY3Rpb25zKX1cclxuICAgICAgICBhbW91bnQ9e3RoaXMucHJvcHMuYW1vdW50fVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBheVBhbEJ1dHRvbiB9Il19
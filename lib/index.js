"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PayPalButton = void 0;

require("@babel/polyfill");

var _react = _interopRequireDefault(require("react"));

var _paypalCheckout = _interopRequireDefault(require("paypal-checkout"));

var _reactDom = _interopRequireDefault(require("react-dom"));

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

var Button = _paypalCheckout.default.Button.driver('react', {
  React: _react.default,
  ReactDOM: _reactDom.default
});
/** Types */


/** Component */
var PayPalButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PayPalButton, _React$Component);

  function PayPalButton(props) {
    var _this;

    _classCallCheck(this, PayPalButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PayPalButton).call(this, props));
    _this.onAuthorize = _this.onAuthorize.bind(_assertThisInitialized(_this));
    _this.payment = _this.payment.bind(_assertThisInitialized(_this));
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
      var _this2 = this;

      return actions.payment.execute().then(function (res) {
        if (_this2.props.onSuccess) {
          _this2.props.onSuccess(res);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(Button, {
        commit: true,
        env: this.props.env,
        client: {
          sandbox: this.props.sandboxID,
          production: this.props.productionID
        },
        payment: this.payment,
        onAuthorize: this.onAuthorize,
        amount: this.props.amount
      });
    }
  }]);

  return PayPalButton;
}(_react.default.Component);

exports.PayPalButton = PayPalButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiQnV0dG9uIiwicGF5cGFsIiwiZHJpdmVyIiwiUmVhY3QiLCJSZWFjdERPTSIsIlBheVBhbEJ1dHRvbiIsInByb3BzIiwib25BdXRob3JpemUiLCJiaW5kIiwicGF5bWVudCIsImRhdGEiLCJhY3Rpb25zIiwiY3JlYXRlIiwidHJhbnNhY3Rpb25zIiwiYW1vdW50IiwidG90YWwiLCJjdXJyZW5jeSIsImV4ZWN1dGUiLCJ0aGVuIiwicmVzIiwib25TdWNjZXNzIiwiZW52Iiwic2FuZGJveCIsInNhbmRib3hJRCIsInByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uSUQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHdCQUFPRCxNQUFQLENBQWNFLE1BQWQsQ0FBcUIsT0FBckIsRUFBOEI7QUFBRUMsRUFBQUEsS0FBSyxFQUFMQSxjQUFGO0FBQVNDLEVBQUFBLFFBQVEsRUFBUkE7QUFBVCxDQUE5QixDQUFmO0FBRUE7OztBQTBDQTtJQUNNQyxZOzs7OztBQUNKLHdCQUFZQyxLQUFaLEVBQXNDO0FBQUE7O0FBQUE7O0FBQ3BDLHNGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQiwrQkFBbkI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLCtCQUFmO0FBSG9DO0FBSXJDOzs7Ozs7Ozs7Ozs7O3VCQUlPUCx1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUdBUyxJLEVBQU1DLE8sRUFBZTtBQUMzQixhQUFPQSxPQUFPLENBQUNGLE9BQVIsQ0FBZ0JHLE1BQWhCLENBQXVCO0FBQzVCQyxRQUFBQSxZQUFZLEVBQUUsQ0FDWjtBQUNFQyxVQUFBQSxNQUFNLEVBQUU7QUFDTkMsWUFBQUEsS0FBSyxFQUFFLEtBQUtULEtBQUwsQ0FBV1EsTUFEWjtBQUVORSxZQUFBQSxRQUFRLEVBQUUsS0FBS1YsS0FBTCxDQUFXVTtBQUZmO0FBRFYsU0FEWTtBQURjLE9BQXZCLENBQVA7QUFVRDs7O2dDQUVXTixJLEVBQU1DLE8sRUFBZTtBQUFBOztBQUMvQixhQUFPQSxPQUFPLENBQUNGLE9BQVIsQ0FBZ0JRLE9BQWhCLEdBQ0pDLElBREksQ0FDQyxVQUFDQyxHQUFELEVBQXdCO0FBQzVCLFlBQUksTUFBSSxDQUFDYixLQUFMLENBQVdjLFNBQWYsRUFBMEI7QUFDeEIsVUFBQSxNQUFJLENBQUNkLEtBQUwsQ0FBV2MsU0FBWCxDQUFxQkQsR0FBckI7QUFDRDtBQUNGLE9BTEksQ0FBUDtBQU1EOzs7NkJBRVE7QUFDUCxhQUNFLDZCQUFDLE1BQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRSxJQURWO0FBRUUsUUFBQSxHQUFHLEVBQUUsS0FBS2IsS0FBTCxDQUFXZSxHQUZsQjtBQUdFLFFBQUEsTUFBTSxFQUFFO0FBQ05DLFVBQUFBLE9BQU8sRUFBRSxLQUFLaEIsS0FBTCxDQUFXaUIsU0FEZDtBQUVOQyxVQUFBQSxVQUFVLEVBQUUsS0FBS2xCLEtBQUwsQ0FBV21CO0FBRmpCLFNBSFY7QUFPRSxRQUFBLE9BQU8sRUFBRSxLQUFLaEIsT0FQaEI7QUFRRSxRQUFBLFdBQVcsRUFBRSxLQUFLRixXQVJwQjtBQVNFLFFBQUEsTUFBTSxFQUFFLEtBQUtELEtBQUwsQ0FBV1E7QUFUckIsUUFERjtBQWFEOzs7O0VBaER3QlgsZUFBTXVCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHBheXBhbCBmcm9tICdwYXlwYWwtY2hlY2tvdXQnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHBheXBhbC5CdXR0b24uZHJpdmVyKCdyZWFjdCcsIHsgUmVhY3QsIFJlYWN0RE9NIH0pO1xyXG5cclxuLyoqIFR5cGVzICovXHJcbmV4cG9ydCB0eXBlIEVudlN0cmluZyA9ICdzYW5kYm94JyB8ICdwcm9kdWN0aW9uJ1xyXG5cclxuZXhwb3J0IHR5cGUgUGF5bWVudE9iamVjdCA9IHtcclxuICBjYXJ0OiBzdHJpbmc7XHJcbiAgY3JlYXRlX3RpbWU6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIGludGVudDogJ3NhbGUnIHwgJ3B1cmNoYXNlJztcclxuICBwYXllcjoge1xyXG4gICAgcGF5ZXJfaW5mbzoge1xyXG4gICAgICBjb3VudHJ5X2NvZGU6IHN0cmluZztcclxuICAgICAgZW1haWw6IHN0cmluZztcclxuICAgICAgZmlyc3RfbmFtZTogc3RyaW5nO1xyXG4gICAgICBsYXN0X25hbWU6IHN0cmluZztcclxuICAgICAgbWlkZGxlX25hbWU6IHN0cmluZztcclxuICAgICAgcGF5ZXJfaWQ6IHN0cmluZztcclxuICAgICAgc2hpcHBpbmdfYWRkcmVzczoge1xyXG4gICAgICAgIGNpdHk6IHN0cmluZztcclxuICAgICAgICBjb3VudHJ5X2NvZGU6IHN0cmluZztcclxuICAgICAgICBsaW5lMTogc3RyaW5nO1xyXG4gICAgICAgIHBvc3RhbF9jb2RlOiBzdHJpbmdcclxuICAgICAgICByZWNpcGllbnRfbmFtZTogc3RyaW5nO1xyXG4gICAgICAgIHN0YXRlOiBzdHJpbmc7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBwYXltZW50X21ldGhvZDogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiAnVU5WRVJJRklFRCcgfCAnVkVSSUZJRUQnO1xyXG4gIH07XHJcbiAgc3RhdGU6IHN0cmluZztcclxuICB0cmFuc2FjdGlvbjogYW55W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGF5UGFsQnV0dG9uUHJvcHMge1xyXG4gIGVudjogRW52U3RyaW5nO1xyXG4gIHNhbmRib3hJRD86IHN0cmluZztcclxuICBwcm9kdWN0aW9uSUQ/OiBzdHJpbmc7XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbiAgY3VycmVuY3k6IHN0cmluZztcclxuICBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFBheW1lbnRPYmplY3QpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG4vKiogQ29tcG9uZW50ICovXHJcbmNsYXNzIFBheVBhbEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQYXlQYWxCdXR0b25Qcm9wcz4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQYXlQYWxCdXR0b25Qcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLm9uQXV0aG9yaXplID0gdGhpcy5vbkF1dGhvcml6ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5wYXltZW50ID0gdGhpcy5wYXltZW50LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIC8vIGF0dGVtcHQgdG8gd2FpdCB1bnRpbCBwYXlwYWwgbGliIGlzIGxvYWRlZFxyXG4gICAgYXdhaXQgcGF5cGFsXHJcbiAgfVxyXG5cclxuICBwYXltZW50KGRhdGEsIGFjdGlvbnMpOiB2b2lkIHtcclxuICAgIHJldHVybiBhY3Rpb25zLnBheW1lbnQuY3JlYXRlKHtcclxuICAgICAgdHJhbnNhY3Rpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYW1vdW50OiB7XHJcbiAgICAgICAgICAgIHRvdGFsOiB0aGlzLnByb3BzLmFtb3VudCxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHRoaXMucHJvcHMuY3VycmVuY3lcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25BdXRob3JpemUoZGF0YSwgYWN0aW9ucyk6IHZvaWQge1xyXG4gICAgcmV0dXJuIGFjdGlvbnMucGF5bWVudC5leGVjdXRlKClcclxuICAgICAgLnRoZW4oKHJlczogUGF5bWVudE9iamVjdCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vblN1Y2Nlc3MocmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb21taXQ9e3RydWV9XHJcbiAgICAgICAgZW52PXt0aGlzLnByb3BzLmVudn1cclxuICAgICAgICBjbGllbnQ9e3tcclxuICAgICAgICAgIHNhbmRib3g6IHRoaXMucHJvcHMuc2FuZGJveElELFxyXG4gICAgICAgICAgcHJvZHVjdGlvbjogdGhpcy5wcm9wcy5wcm9kdWN0aW9uSURcclxuICAgICAgICB9fVxyXG4gICAgICAgIHBheW1lbnQ9e3RoaXMucGF5bWVudH1cclxuICAgICAgICBvbkF1dGhvcml6ZT17dGhpcy5vbkF1dGhvcml6ZX1cclxuICAgICAgICBhbW91bnQ9e3RoaXMucHJvcHMuYW1vdW50fVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBheVBhbEJ1dHRvbiB9Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiQnV0dG9uIiwicGF5cGFsIiwiZHJpdmVyIiwiUmVhY3QiLCJSZWFjdERPTSIsIlBheVBhbEJ1dHRvbiIsInByb3BzIiwib25BdXRob3JpemUiLCJiaW5kIiwicGF5bWVudCIsImRhdGEiLCJhY3Rpb25zIiwiY3JlYXRlIiwidHJhbnNhY3Rpb25zIiwiYW1vdW50IiwidG90YWwiLCJjdXJyZW5jeSIsImV4ZWN1dGUiLCJ0aGVuIiwicmVzIiwib25TdWNjZXNzIiwiZW52Iiwic2FuZGJveCIsInNhbmRib3hJRCIsInByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uSUQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHdCQUFPRCxNQUFQLENBQWNFLE1BQWQsQ0FBcUIsT0FBckIsRUFBOEI7QUFBRUMsRUFBQUEsS0FBSyxFQUFMQSxjQUFGO0FBQVNDLEVBQUFBLFFBQVEsRUFBUkE7QUFBVCxDQUE5QixDQUFmO0FBRUE7OztBQTBDQTtJQUNNQyxZOzs7OztBQUNKLHdCQUFZQyxLQUFaLEVBQXNDO0FBQUE7O0FBQUE7O0FBQ3BDLHNGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQiwrQkFBbkI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLCtCQUFmO0FBSG9DO0FBSXJDOzs7Ozs7Ozs7Ozs7O3VCQUlPUCx1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUdBUyxJLEVBQU1DLE8sRUFBZTtBQUMzQixhQUFPQSxPQUFPLENBQUNGLE9BQVIsQ0FBZ0JHLE1BQWhCLENBQXVCO0FBQzVCQyxRQUFBQSxZQUFZLEVBQUUsQ0FDWjtBQUNFQyxVQUFBQSxNQUFNLEVBQUU7QUFDTkMsWUFBQUEsS0FBSyxFQUFFLEtBQUtULEtBQUwsQ0FBV1EsTUFEWjtBQUVORSxZQUFBQSxRQUFRLEVBQUUsS0FBS1YsS0FBTCxDQUFXVTtBQUZmO0FBRFYsU0FEWTtBQURjLE9BQXZCLENBQVA7QUFVRDs7O2dDQUVXTixJLEVBQU1DLE8sRUFBZTtBQUFBOztBQUMvQixhQUFPQSxPQUFPLENBQUNGLE9BQVIsQ0FBZ0JRLE9BQWhCLEdBQ0pDLElBREksQ0FDQyxVQUFDQyxHQUFELEVBQXdCO0FBQzVCLFlBQUksTUFBSSxDQUFDYixLQUFMLENBQVdjLFNBQWYsRUFBMEI7QUFDeEIsVUFBQSxNQUFJLENBQUNkLEtBQUwsQ0FBV2MsU0FBWCxDQUFxQkQsR0FBckI7QUFDRDtBQUNGLE9BTEksQ0FBUDtBQU1EOzs7NkJBRVE7QUFDUCxhQUNFLDZCQUFDLE1BQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRSxJQURWO0FBRUUsUUFBQSxHQUFHLEVBQUUsS0FBS2IsS0FBTCxDQUFXZSxHQUZsQjtBQUdFLFFBQUEsTUFBTSxFQUFFO0FBQ05DLFVBQUFBLE9BQU8sRUFBRSxLQUFLaEIsS0FBTCxDQUFXaUIsU0FEZDtBQUVOQyxVQUFBQSxVQUFVLEVBQUUsS0FBS2xCLEtBQUwsQ0FBV21CO0FBRmpCLFNBSFY7QUFPRSxRQUFBLE9BQU8sRUFBRSxLQUFLaEIsT0FQaEI7QUFRRSxRQUFBLFdBQVcsRUFBRSxLQUFLRixXQVJwQjtBQVNFLFFBQUEsTUFBTSxFQUFFLEtBQUtELEtBQUwsQ0FBV1E7QUFUckIsUUFERjtBQWFEOzs7O0VBaER3QlgsZUFBTXVCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHBheXBhbCBmcm9tICdwYXlwYWwtY2hlY2tvdXQnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHBheXBhbC5CdXR0b24uZHJpdmVyKCdyZWFjdCcsIHsgUmVhY3QsIFJlYWN0RE9NIH0pO1xyXG5cclxuLyoqIFR5cGVzICovXHJcbmV4cG9ydCB0eXBlIEVudlN0cmluZyA9ICdzYW5kYm94JyB8ICdwcm9kdWN0aW9uJ1xyXG5cclxudHlwZSBQYXltZW50T2JqZWN0ID0ge1xyXG4gIGNhcnQ6IHN0cmluZztcclxuICBjcmVhdGVfdGltZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgaW50ZW50OiAnc2FsZScgfCAncHVyY2hhc2UnO1xyXG4gIHBheWVyOiB7XHJcbiAgICBwYXllcl9pbmZvOiB7XHJcbiAgICAgIGNvdW50cnlfY29kZTogc3RyaW5nO1xyXG4gICAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgICBmaXJzdF9uYW1lOiBzdHJpbmc7XHJcbiAgICAgIGxhc3RfbmFtZTogc3RyaW5nO1xyXG4gICAgICBtaWRkbGVfbmFtZTogc3RyaW5nO1xyXG4gICAgICBwYXllcl9pZDogc3RyaW5nO1xyXG4gICAgICBzaGlwcGluZ19hZGRyZXNzOiB7XHJcbiAgICAgICAgY2l0eTogc3RyaW5nO1xyXG4gICAgICAgIGNvdW50cnlfY29kZTogc3RyaW5nO1xyXG4gICAgICAgIGxpbmUxOiBzdHJpbmc7XHJcbiAgICAgICAgcG9zdGFsX2NvZGU6IHN0cmluZ1xyXG4gICAgICAgIHJlY2lwaWVudF9uYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgc3RhdGU6IHN0cmluZztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHBheW1lbnRfbWV0aG9kOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6ICdVTlZFUklGSUVEJyB8ICdWRVJJRklFRCc7XHJcbiAgfTtcclxuICBzdGF0ZTogc3RyaW5nO1xyXG4gIHRyYW5zYWN0aW9uOiBhbnlbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXlQYWxCdXR0b25Qcm9wcyB7XHJcbiAgZW52OiBFbnZTdHJpbmc7XHJcbiAgc2FuZGJveElEPzogc3RyaW5nO1xyXG4gIHByb2R1Y3Rpb25JRD86IHN0cmluZztcclxuICBhbW91bnQ6IG51bWJlcjtcclxuICBjdXJyZW5jeTogc3RyaW5nO1xyXG4gIG9uU3VjY2Vzcz86IChyZXNwb25zZTogUGF5bWVudE9iamVjdCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcbi8qKiBDb21wb25lbnQgKi9cclxuY2xhc3MgUGF5UGFsQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFBheVBhbEJ1dHRvblByb3BzPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFBheVBhbEJ1dHRvblByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMub25BdXRob3JpemUgPSB0aGlzLm9uQXV0aG9yaXplLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnBheW1lbnQgPSB0aGlzLnBheW1lbnQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy8gYXR0ZW1wdCB0byB3YWl0IHVudGlsIHBheXBhbCBsaWIgaXMgbG9hZGVkXHJcbiAgICBhd2FpdCBwYXlwYWxcclxuICB9XHJcblxyXG4gIHBheW1lbnQoZGF0YSwgYWN0aW9ucyk6IHZvaWQge1xyXG4gICAgcmV0dXJuIGFjdGlvbnMucGF5bWVudC5jcmVhdGUoe1xyXG4gICAgICB0cmFuc2FjdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhbW91bnQ6IHtcclxuICAgICAgICAgICAgdG90YWw6IHRoaXMucHJvcHMuYW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogdGhpcy5wcm9wcy5jdXJyZW5jeVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkF1dGhvcml6ZShkYXRhLCBhY3Rpb25zKTogdm9pZCB7XHJcbiAgICByZXR1cm4gYWN0aW9ucy5wYXltZW50LmV4ZWN1dGUoKVxyXG4gICAgICAudGhlbigocmVzOiBQYXltZW50T2JqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TdWNjZXNzKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uU3VjY2VzcyhyZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNvbW1pdD17dHJ1ZX1cclxuICAgICAgICBlbnY9e3RoaXMucHJvcHMuZW52fVxyXG4gICAgICAgIGNsaWVudD17e1xyXG4gICAgICAgICAgc2FuZGJveDogdGhpcy5wcm9wcy5zYW5kYm94SUQsXHJcbiAgICAgICAgICBwcm9kdWN0aW9uOiB0aGlzLnByb3BzLnByb2R1Y3Rpb25JRFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgcGF5bWVudD17dGhpcy5wYXltZW50fVxyXG4gICAgICAgIG9uQXV0aG9yaXplPXt0aGlzLm9uQXV0aG9yaXplfVxyXG4gICAgICAgIGFtb3VudD17dGhpcy5wcm9wcy5hbW91bnR9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGF5UGFsQnV0dG9uIH0iXX0=
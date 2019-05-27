"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PayPalButtonProps", {
  enumerable: true,
  get: function get() {
    return _types.PayPalButtonProps;
  }
});
Object.defineProperty(exports, "PayPalPaymentData", {
  enumerable: true,
  get: function get() {
    return _types.PayPalPaymentData;
  }
});
exports.PayPalButton = void 0;

require("@babel/polyfill");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _paypalCheckout = _interopRequireDefault(require("paypal-checkout"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Button = _paypalCheckout["default"].Button.driver('react', {
  React: _react["default"],
  ReactDOM: _reactDom["default"]
});

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
    _this.state = {
      loaded: false,
      error: false
    };
    return _this;
  }

  _createClass(PayPalButton, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var paypalLoaded;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                paypalLoaded = !!window.__pptmLoadedWithNoContent;

                if (paypalLoaded) {
                  this.setState({
                    loaded: true
                  });
                }

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
    key: "componentDidCatch",
    value: function componentDidCatch() {
      console.log('catch');
      this.setState({
        error: true
      });
    }
  }, {
    key: "payment",
    value: function payment(data, actions) {
      var _this2 = this;

      if (this.props.onPaymentStart) {
        this.props.onPaymentStart();
      }

      return actions.payment.create({
        transactions: [{
          amount: {
            total: this.props.amount,
            currency: this.props.currency
          }
        }]
      })["catch"](function (e) {
        console.warn({
          message: 'Error Loading  React Paypal Button, check your environment variables'
        });

        _this2.setState({
          error: true
        });
      });
    }
  }, {
    key: "onAuthorize",
    value: function onAuthorize(data, actions) {
      var _this3 = this;

      return actions.payment.execute().then(function (res) {
        if (_this3.props.onPaymentSuccess) {
          _this3.props.onPaymentSuccess(res);
        }
      })["catch"](function (e) {
        if (_this3.props.onPaymentError) {
          _this3.props.onPaymentError(e.message);
        } else {
          console.log(e.message);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.error) {
        return null;
      }

      return this.state.loaded && !this.state.error && _react["default"].createElement(Button, {
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
}(_react["default"].Component);

exports.PayPalButton = PayPalButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiQnV0dG9uIiwicGF5cGFsIiwiZHJpdmVyIiwiUmVhY3QiLCJSZWFjdERPTSIsIlBheVBhbEJ1dHRvbiIsInByb3BzIiwib25BdXRob3JpemUiLCJiaW5kIiwicGF5bWVudCIsInN0YXRlIiwibG9hZGVkIiwiZXJyb3IiLCJwYXlwYWxMb2FkZWQiLCJ3aW5kb3ciLCJfX3BwdG1Mb2FkZWRXaXRoTm9Db250ZW50Iiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImFjdGlvbnMiLCJvblBheW1lbnRTdGFydCIsImNyZWF0ZSIsInRyYW5zYWN0aW9ucyIsImFtb3VudCIsInRvdGFsIiwiY3VycmVuY3kiLCJlIiwid2FybiIsIm1lc3NhZ2UiLCJleGVjdXRlIiwidGhlbiIsInJlcyIsIm9uUGF5bWVudFN1Y2Nlc3MiLCJvblBheW1lbnRFcnJvciIsImVudiIsInNhbmRib3giLCJzYW5kYm94SUQiLCJwcm9kdWN0aW9uIiwicHJvZHVjdGlvbklEIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQywyQkFBT0QsTUFBUCxDQUFjRSxNQUFkLENBQXFCLE9BQXJCLEVBQThCO0FBQUVDLEVBQUFBLEtBQUssRUFBTEEsaUJBQUY7QUFBU0MsRUFBQUEsUUFBUSxFQUFSQTtBQUFULENBQTlCLENBQWY7O0lBT01DLFk7Ozs7O0FBQ0osd0JBQVlDLEtBQVosRUFBc0M7QUFBQTs7QUFBQTs7QUFDcEMsc0ZBQU1BLEtBQU47QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLCtCQUFuQjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsK0JBQWY7QUFFQSxVQUFLRSxLQUFMLEdBQVk7QUFD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b20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBwYXlwYWwgZnJvbSAncGF5cGFsLWNoZWNrb3V0JztcclxuaW1wb3J0IHsgUGF5UGFsQnV0dG9uUHJvcHMsIFBheVBhbFBheW1lbnREYXRhIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5jb25zdCBCdXR0b24gPSBwYXlwYWwuQnV0dG9uLmRyaXZlcigncmVhY3QnLCB7IFJlYWN0LCBSZWFjdERPTSB9KTtcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgbG9hZGVkOiBib29sZWFuO1xyXG4gIGVycm9yOiBib29sZWFuO1xyXG59XHJcblxyXG5jbGFzcyBQYXlQYWxCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UGF5UGFsQnV0dG9uUHJvcHMsIFN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFBheVBhbEJ1dHRvblByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMub25BdXRob3JpemUgPSB0aGlzLm9uQXV0aG9yaXplLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnBheW1lbnQgPSB0aGlzLnBheW1lbnQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPSB7XHJcbiAgICAgIGxvYWRlZDogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBwYXlwYWxMb2FkZWQgPSAhISh3aW5kb3cgYXMgYW55KS5fX3BwdG1Mb2FkZWRXaXRoTm9Db250ZW50XHJcbiAgICBpZihwYXlwYWxMb2FkZWQpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkZWQ6IHRydWV9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkQ2F0Y2goKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2F0Y2gnKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IHRydWV9KVxyXG4gIH1cclxuXHJcbiAgcGF5bWVudChkYXRhLCBhY3Rpb25zKTogdm9pZCB7XHJcbiAgICBpZih0aGlzLnByb3BzLm9uUGF5bWVudFN0YXJ0KXtcclxuICAgICAgdGhpcy5wcm9wcy5vblBheW1lbnRTdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhY3Rpb25zLnBheW1lbnQuY3JlYXRlKHtcclxuICAgICAgdHJhbnNhY3Rpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYW1vdW50OiB7XHJcbiAgICAgICAgICAgIHRvdGFsOiB0aGlzLnByb3BzLmFtb3VudCxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHRoaXMucHJvcHMuY3VycmVuY3lcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pLmNhdGNoKChlOiBhbnkpID0+IHtcclxuICAgICAgY29uc29sZS53YXJuKHttZXNzYWdlOiAnRXJyb3IgTG9hZGluZyAgUmVhY3QgUGF5cGFsIEJ1dHRvbiwgY2hlY2sgeW91ciBlbnZpcm9ubWVudCB2YXJpYWJsZXMnfSlcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IHRydWV9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uQXV0aG9yaXplKGRhdGEsIGFjdGlvbnMpOiB2b2lkIHtcclxuICAgIHJldHVybiBhY3Rpb25zLnBheW1lbnQuZXhlY3V0ZSgpXHJcbiAgICAgIC50aGVuKChyZXM6IFBheVBhbFBheW1lbnREYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25QYXltZW50U3VjY2Vzcykge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vblBheW1lbnRTdWNjZXNzKHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5vblBheW1lbnRFcnJvcil7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uUGF5bWVudEVycm9yKGUubWVzc2FnZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmKHRoaXMuc3RhdGUuZXJyb3Ipe1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGVkICYmICF0aGlzLnN0YXRlLmVycm9yICYmIChcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNvbW1pdD17dHJ1ZX1cclxuICAgICAgICBlbnY9e3RoaXMucHJvcHMuZW52fVxyXG4gICAgICAgIGNsaWVudD17e1xyXG4gICAgICAgICAgc2FuZGJveDogdGhpcy5wcm9wcy5zYW5kYm94SUQsXHJcbiAgICAgICAgICBwcm9kdWN0aW9uOiB0aGlzLnByb3BzLnByb2R1Y3Rpb25JRFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgcGF5bWVudD17dGhpcy5wYXltZW50fVxyXG4gICAgICAgIG9uQXV0aG9yaXplPXt0aGlzLm9uQXV0aG9yaXplfVxyXG4gICAgICAgIGFtb3VudD17dGhpcy5wcm9wcy5hbW91bnR9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGF5UGFsQnV0dG9uLCBQYXlQYWxCdXR0b25Qcm9wcywgUGF5UGFsUGF5bWVudERhdGEgfSJdfQ==
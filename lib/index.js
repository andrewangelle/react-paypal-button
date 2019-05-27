"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PayPalButton = void 0;

require("@babel/polyfill");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _paypalCheckout = _interopRequireDefault(require("paypal-checkout"));

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
/**
 * types
 */


/**
 * component
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiQnV0dG9uIiwicGF5cGFsIiwiZHJpdmVyIiwiUmVhY3QiLCJSZWFjdERPTSIsIlBheVBhbEJ1dHRvbiIsInByb3BzIiwib25BdXRob3JpemUiLCJiaW5kIiwicGF5bWVudCIsInN0YXRlIiwibG9hZGVkIiwiZXJyb3IiLCJwYXlwYWxMb2FkZWQiLCJ3aW5kb3ciLCJfX3BwdG1Mb2FkZWRXaXRoTm9Db250ZW50Iiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImFjdGlvbnMiLCJvblBheW1lbnRTdGFydCIsImNyZWF0ZSIsInRyYW5zYWN0aW9ucyIsImFtb3VudCIsInRvdGFsIiwiY3VycmVuY3kiLCJlIiwid2FybiIsIm1lc3NhZ2UiLCJleGVjdXRlIiwidGhlbiIsInJlcyIsIm9uUGF5bWVudFN1Y2Nlc3MiLCJvblBheW1lbnRFcnJvciIsImVudiIsInNhbmRib3giLCJzYW5kYm94SUQiLCJwcm9kdWN0aW9uIiwicHJvZHVjdGlvbklEIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQywyQkFBT0QsTUFBUCxDQUFjRSxNQUFkLENBQXFCLE9BQXJCLEVBQThCO0FBQUVDLEVBQUFBLEtBQUssRUFBTEEsaUJBQUY7QUFBU0MsRUFBQUEsUUFBUSxFQUFSQTtBQUFULENBQTlCLENBQWY7QUFFQTs7Ozs7QUFnREE7OztJQUdhQyxZOzs7OztBQUNYLHdCQUFZQyxLQUFaLEVBQXNDO0FBQUE7O0FBQUE7O0FBQ3BDLHNGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQiwrQkFBbkI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLCtCQUFmO0FBRUEsVUFBS0UsS0FBTCxHQUFZO0FBQ1ZD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ICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgcGF5cGFsIGZyb20gJ3BheXBhbC1jaGVja291dCc7XHJcblxyXG5jb25zdCBCdXR0b24gPSBwYXlwYWwuQnV0dG9uLmRyaXZlcigncmVhY3QnLCB7IFJlYWN0LCBSZWFjdERPTSB9KTtcclxuXHJcbi8qKlxyXG4gKiB0eXBlc1xyXG4gKi9cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBsb2FkZWQ6IGJvb2xlYW47XHJcbiAgZXJyb3I6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBheVBhbFBheW1lbnREYXRhID0ge1xyXG4gIGNhcnQ6IHN0cmluZztcclxuICBjcmVhdGVfdGltZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgaW50ZW50OiAnc2FsZScgfCAncHVyY2hhc2UnO1xyXG4gIHBheWVyOiB7XHJcbiAgICBwYXllcl9pbmZvOiB7XHJcbiAgICAgIGNvdW50cnlfY29kZTogc3RyaW5nO1xyXG4gICAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgICBmaXJzdF9uYW1lOiBzdHJpbmc7XHJcbiAgICAgIGxhc3RfbmFtZTogc3RyaW5nO1xyXG4gICAgICBtaWRkbGVfbmFtZTogc3RyaW5nO1xyXG4gICAgICBwYXllcl9pZDogc3RyaW5nO1xyXG4gICAgICBzaGlwcGluZ19hZGRyZXNzOiB7XHJcbiAgICAgICAgY2l0eTogc3RyaW5nO1xyXG4gICAgICAgIGNvdW50cnlfY29kZTogc3RyaW5nO1xyXG4gICAgICAgIGxpbmUxOiBzdHJpbmc7XHJcbiAgICAgICAgcG9zdGFsX2NvZGU6IHN0cmluZ1xyXG4gICAgICAgIHJlY2lwaWVudF9uYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgc3RhdGU6IHN0cmluZztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHBheW1lbnRfbWV0aG9kOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6ICdVTlZFUklGSUVEJyB8ICdWRVJJRklFRCc7XHJcbiAgfTtcclxuICBzdGF0ZTogc3RyaW5nO1xyXG4gIHRyYW5zYWN0aW9uOiBhbnlbXTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUGF5UGFsQnV0dG9uUHJvcHMgPSB7XHJcbiAgZW52OiAnc2FuZGJveCcgfCAncHJvZHVjdGlvbic7XHJcbiAgc2FuZGJveElEPzogc3RyaW5nO1xyXG4gIHByb2R1Y3Rpb25JRD86IHN0cmluZztcclxuICBhbW91bnQ6IG51bWJlcjtcclxuICBjdXJyZW5jeTogc3RyaW5nO1xyXG4gIG9uUGF5bWVudEVycm9yPzogKG1zZzogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIG9uUGF5bWVudFN0YXJ0PzogKCkgPT4gdm9pZDtcclxuICBvblBheW1lbnRTdWNjZXNzPzogKHJlc3BvbnNlOiBQYXlQYWxQYXltZW50RGF0YSkgPT4gdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIGNvbXBvbmVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBheVBhbEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQYXlQYWxCdXR0b25Qcm9wcywgU3RhdGU+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUGF5UGFsQnV0dG9uUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5vbkF1dGhvcml6ZSA9IHRoaXMub25BdXRob3JpemUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucGF5bWVudCA9IHRoaXMucGF5bWVudC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGU9IHtcclxuICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHBheXBhbExvYWRlZCA9ICEhKHdpbmRvdyBhcyBhbnkpLl9fcHB0bUxvYWRlZFdpdGhOb0NvbnRlbnRcclxuICAgIGlmKHBheXBhbExvYWRlZCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRlZDogdHJ1ZX0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRDYXRjaCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjYXRjaCcpXHJcbiAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogdHJ1ZX0pXHJcbiAgfVxyXG5cclxuICBwYXltZW50KGRhdGEsIGFjdGlvbnMpOiB2b2lkIHtcclxuICAgIGlmKHRoaXMucHJvcHMub25QYXltZW50U3RhcnQpe1xyXG4gICAgICB0aGlzLnByb3BzLm9uUGF5bWVudFN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFjdGlvbnMucGF5bWVudC5jcmVhdGUoe1xyXG4gICAgICB0cmFuc2FjdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhbW91bnQ6IHtcclxuICAgICAgICAgICAgdG90YWw6IHRoaXMucHJvcHMuYW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogdGhpcy5wcm9wcy5jdXJyZW5jeVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSkuY2F0Y2goKGU6IGFueSkgPT4ge1xyXG4gICAgICBjb25zb2xlLndhcm4oe21lc3NhZ2U6ICdFcnJvciBMb2FkaW5nICBSZWFjdCBQYXlwYWwgQnV0dG9uLCBjaGVjayB5b3VyIGVudmlyb25tZW50IHZhcmlhYmxlcyd9KVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogdHJ1ZX0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25BdXRob3JpemUoZGF0YSwgYWN0aW9ucyk6IHZvaWQge1xyXG4gICAgcmV0dXJuIGFjdGlvbnMucGF5bWVudC5leGVjdXRlKClcclxuICAgICAgLnRoZW4oKHJlczogUGF5UGFsUGF5bWVudERhdGEpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblBheW1lbnRTdWNjZXNzKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uUGF5bWVudFN1Y2Nlc3MocmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlOiBhbnkpID0+IHtcclxuICAgICAgICBpZih0aGlzLnByb3BzLm9uUGF5bWVudEVycm9yKXtcclxuICAgICAgICAgIHRoaXMucHJvcHMub25QYXltZW50RXJyb3IoZS5tZXNzYWdlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5lcnJvcil7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkZWQgJiYgIXRoaXMuc3RhdGUuZXJyb3IgJiYgKFxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29tbWl0PXt0cnVlfVxyXG4gICAgICAgIGVudj17dGhpcy5wcm9wcy5lbnZ9XHJcbiAgICAgICAgY2xpZW50PXt7XHJcbiAgICAgICAgICBzYW5kYm94OiB0aGlzLnByb3BzLnNhbmRib3hJRCxcclxuICAgICAgICAgIHByb2R1Y3Rpb246IHRoaXMucHJvcHMucHJvZHVjdGlvbklEXHJcbiAgICAgICAgfX1cclxuICAgICAgICBwYXltZW50PXt0aGlzLnBheW1lbnR9XHJcbiAgICAgICAgb25BdXRob3JpemU9e3RoaXMub25BdXRob3JpemV9XHJcbiAgICAgICAgYW1vdW50PXt0aGlzLnByb3BzLmFtb3VudH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG59Il19
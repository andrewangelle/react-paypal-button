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
    _this.state = {
      loaded: false,
      error: false
    };
    _this.onAuthorize = _this.onAuthorize.bind(_assertThisInitialized(_this));
    _this.payment = _this.payment.bind(_assertThisInitialized(_this));
    _this.onShippingChange = _this.onShippingChange.bind(_assertThisInitialized(_this));
    _this.onCancel = _this.onCancel.bind(_assertThisInitialized(_this));
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
        console.error({
          message: 'Error Loading React Paypal Button, check your environment variables'
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
          console.warn({
            paypalOnAuthError: e.message
          });
        }
      });
    }
  }, {
    key: "onShippingChange",
    value: function onShippingChange(data, actions) {
      var _this4 = this;

      if (this.props.onShippingChange) {
        Promise.resolve(this.props.onShippingChange(data)).then(function (rate) {
          // early exit if user doesn't return a value
          if (!rate) {
            return actions.resolve();
          }

          var baseOrderAmount = "".concat(_this4.props.amount);
          var shippingAmount = "".concat(rate);
          var value = (parseFloat(baseOrderAmount) + parseFloat(shippingAmount)).toFixed(2);
          var currency_code = _this4.props.currency;
          return actions.order.patch([{
            op: 'replace',
            path: '/purchase_units/@reference_id==\'default\'/amount',
            value: {
              currency_code: currency_code,
              value: value,
              breakdown: {
                item_total: {
                  currency_code: currency_code,
                  value: baseOrderAmount
                },
                shipping: {
                  currency_code: currency_code,
                  value: shippingAmount
                }
              }
            }
          }]);
        });
      } else {
        return actions.resolve();
      }
    }
  }, {
    key: "onCancel",
    value: function onCancel(data) {
      if (this.props.onPaymentCancel) {
        this.props.onPaymentCancel(data);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          error = _this$state.error,
          loaded = _this$state.loaded;
      var _this$props = this.props,
          env = _this$props.env,
          sandboxID = _this$props.sandboxID,
          productionID = _this$props.productionID,
          amount = _this$props.amount;

      if (error) {
        return null;
      }

      return loaded && !error && _react["default"].createElement(Button, {
        commit: true,
        env: env,
        amount: amount,
        client: {
          sandbox: sandboxID,
          production: productionID
        },
        payment: this.payment,
        onAuthorize: this.onAuthorize,
        onShippingChange: this.onShippingChange,
        onCancel: this.onCancel
      });
    }
  }]);

  return PayPalButton;
}(_react["default"].Component);

exports.PayPalButton = PayPalButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiQnV0dG9uIiwicGF5cGFsIiwiZHJpdmVyIiwiUmVhY3QiLCJSZWFjdERPTSIsIlBheVBhbEJ1dHRvbiIsInByb3BzIiwic3RhdGUiLCJsb2FkZWQiLCJlcnJvciIsIm9uQXV0aG9yaXplIiwiYmluZCIsInBheW1lbnQiLCJvblNoaXBwaW5nQ2hhbmdlIiwib25DYW5jZWwiLCJwYXlwYWxMb2FkZWQiLCJ3aW5kb3ciLCJfX3BwdG1Mb2FkZWRXaXRoTm9Db250ZW50Iiwic2V0U3RhdGUiLCJkYXRhIiwiYWN0aW9ucyIsIm9uUGF5bWVudFN0YXJ0IiwiY3JlYXRlIiwidHJhbnNhY3Rpb25zIiwiYW1vdW50IiwidG90YWwiLCJjdXJyZW5jeSIsImUiLCJjb25zb2xlIiwibWVzc2FnZSIsImV4ZWN1dGUiLCJ0aGVuIiwicmVzIiwib25QYXltZW50U3VjY2VzcyIsIm9uUGF5bWVudEVycm9yIiwid2FybiIsInBheXBhbE9uQXV0aEVycm9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyYXRlIiwiYmFzZU9yZGVyQW1vdW50Iiwic2hpcHBpbmdBbW91bnQiLCJ2YWx1ZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiY3VycmVuY3lfY29kZSIsIm9yZGVyIiwicGF0Y2giLCJvcCIsInBhdGgiLCJicmVha2Rvd24iLCJpdGVtX3RvdGFsIiwic2hpcHBpbmciLCJvblBheW1lbnRDYW5jZWwiLCJlbnYiLCJzYW5kYm94SUQiLCJwcm9kdWN0aW9uSUQiLCJzYW5kYm94IiwicHJvZHVjdGlvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsMkJBQU9ELE1BQVAsQ0FBY0UsTUFBZCxDQUFxQixPQUFyQixFQUE4QjtBQUFFQyxFQUFBQSxLQUFLLEVBQUxBLGlCQUFGO0FBQVNDLEVBQUFBLFFBQVEsRUFBUkE7QUFBVCxDQUE5QixDQUFmO0FBRUE7Ozs7O0FBOEVBOzs7SUFHYUMsWTs7Ozs7QUFDWCx3QkFBWUMsS0FBWixFQUFzQztBQUFBOztBQUFBOztBQUNwQyxzRkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxNQUFNLEVBQUUsS0FERztBQUVYQyxNQUFBQSxLQUFLLEVBQUU7QUFGSSxLQUFiO0FBSUEsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQiwrQkFBbkI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLCtCQUFmO0FBQ0EsVUFBS0UsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JGLElBQXRCLCtCQUF4QjtBQUNBLFVBQUtHLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjSCxJQUFkLCtCQUFoQjtBQVRvQztBQVVyQzs7Ozs7Ozs7Ozs7OztBQUdPSSxnQkFBQUEsWSxHQUFlLENBQUMsQ0FBRUMsTUFBRCxDQUFnQkMseUI7O0FBQ3ZDLG9CQUFHRixZQUFILEVBQWdCO0FBQ2QsdUJBQUtHLFFBQUwsQ0FBYztBQUFDVixvQkFBQUEsTUFBTSxFQUFFO0FBQVQsbUJBQWQ7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQUdpQjtBQUNsQixXQUFLVSxRQUFMLENBQWM7QUFBQ1QsUUFBQUEsS0FBSyxFQUFFO0FBQVIsT0FBZDtBQUNEOzs7NEJBRU9VLEksRUFBTUMsTyxFQUFlO0FBQUE7O0FBQzNCLFVBQUcsS0FBS2QsS0FBTCxDQUFXZSxjQUFkLEVBQTZCO0FBQzNCLGFBQUtmLEtBQUwsQ0FBV2UsY0FBWDtBQUNEOztBQUVELGFBQU9ELE9BQU8sQ0FBQ1IsT0FBUixDQUFnQlUsTUFBaEIsQ0FBdUI7QUFDNUJDLFFBQUFBLFlBQVksRUFBRSxDQUNaO0FBQ0VDLFVBQUFBLE1BQU0sRUFBRTtBQUNOQyxZQUFBQSxLQUFLLEVBQUUsS0FBS25CLEtBQUwsQ0FBV2tCLE1BRFo7QUFFTkUsWUFBQUEsUUFBUSxFQUFFLEtBQUtwQixLQUFMLENBQVdvQjtBQUZmO0FBRFYsU0FEWTtBQURjLE9BQXZCLFdBU0UsVUFBQ0MsQ0FBRCxFQUFZO0FBQ25CQyxRQUFBQSxPQUFPLENBQUNuQixLQUFSLENBQWM7QUFBQ29CLFVBQUFBLE9BQU8sRUFBRTtBQUFWLFNBQWQ7O0FBQ0EsUUFBQSxNQUFJLENBQUNYLFFBQUwsQ0FBYztBQUFDVCxVQUFBQSxLQUFLLEVBQUU7QUFBUixTQUFkO0FBQ0QsT0FaTSxDQUFQO0FBYUQ7OztnQ0FFV1UsSSxFQUFNQyxPLEVBQWU7QUFBQTs7QUFDL0IsYUFBT0EsT0FBTyxDQUFDUixPQUFSLENBQWdCa0IsT0FBaEIsR0FDSkMsSUFESSxDQUNDLFVBQUNDLEdBQUQsRUFBNEI7QUFDaEMsWUFBSSxNQUFJLENBQUMxQixLQUFMLENBQVcyQixnQkFBZixFQUFpQztBQUMvQixVQUFBLE1BQUksQ0FBQzNCLEtBQUwsQ0FBVzJCLGdCQUFYLENBQTRCRCxHQUE1QjtBQUNEO0FBQ0YsT0FMSSxXQU1FLFVBQUNMLENBQUQsRUFBWTtBQUNqQixZQUFHLE1BQUksQ0FBQ3JCLEtBQUwsQ0FBVzRCLGNBQWQsRUFBNkI7QUFDM0IsVUFBQSxNQUFJLENBQUM1QixLQUFMLENBQVc0QixjQUFYLENBQTBCUCxDQUFDLENBQUNFLE9BQTVCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xELFVBQUFBLE9BQU8sQ0FBQ08sSUFBUixDQUFhO0FBQUNDLFlBQUFBLGlCQUFpQixFQUFFVCxDQUFDLENBQUNFO0FBQXRCLFdBQWI7QUFDRDtBQUNGLE9BWkksQ0FBUDtBQWFEOzs7cUNBR2dCVixJLEVBQTRCQyxPLEVBQWU7QUFBQTs7QUFDMUQsVUFBRyxLQUFLZCxLQUFMLENBQVdPLGdCQUFkLEVBQStCO0FBQzlCd0IsUUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtoQyxLQUFMLENBQVdPLGdCQUFYLENBQTRCTSxJQUE1QixDQUFoQixFQUNFWSxJQURGLENBQ08sVUFBQ1EsSUFBRCxFQUFVO0FBRWQ7QUFDQSxjQUFHLENBQUNBLElBQUosRUFBUztBQUNQLG1CQUFPbkIsT0FBTyxDQUFDa0IsT0FBUixFQUFQO0FBQ0Q7O0FBRUQsY0FBTUUsZUFBZSxhQUFNLE1BQUksQ0FBQ2xDLEtBQUwsQ0FBV2tCLE1BQWpCLENBQXJCO0FBQ0EsY0FBTWlCLGNBQWMsYUFBTUYsSUFBTixDQUFwQjtBQUNBLGNBQU1HLEtBQUssR0FBRyxDQUFDQyxVQUFVLENBQUNILGVBQUQsQ0FBVixHQUE4QkcsVUFBVSxDQUFDRixjQUFELENBQXpDLEVBQTJERyxPQUEzRCxDQUFtRSxDQUFuRSxDQUFkO0FBQ0EsY0FBTUMsYUFBYSxHQUFHLE1BQUksQ0FBQ3ZDLEtBQUwsQ0FBV29CLFFBQWpDO0FBRUEsaUJBQU9OLE9BQU8sQ0FBQzBCLEtBQVIsQ0FBY0MsS0FBZCxDQUFvQixDQUN6QjtBQUNFQyxZQUFBQSxFQUFFLEVBQUUsU0FETjtBQUVFQyxZQUFBQSxJQUFJLEVBQUUsbURBRlI7QUFHRVAsWUFBQUEsS0FBSyxFQUFFO0FBQ0xHLGNBQUFBLGFBQWEsRUFBYkEsYUFESztBQUVMSCxjQUFBQSxLQUFLLEVBQUxBLEtBRks7QUFHTFEsY0FBQUEsU0FBUyxFQUFFO0FBQ1RDLGdCQUFBQSxVQUFVLEVBQUU7QUFDVk4sa0JBQUFBLGFBQWEsRUFBYkEsYUFEVTtBQUVWSCxrQkFBQUEsS0FBSyxFQUFFRjtBQUZHLGlCQURIO0FBS1RZLGdCQUFBQSxRQUFRLEVBQUU7QUFDUlAsa0JBQUFBLGFBQWEsRUFBYkEsYUFEUTtBQUVSSCxrQkFBQUEsS0FBSyxFQUFFRDtBQUZDO0FBTEQ7QUFITjtBQUhULFdBRHlCLENBQXBCLENBQVA7QUFvQkQsU0FqQ0Y7QUFrQ0EsT0FuQ0QsTUFtQ087QUFDTCxlQUFPckIsT0FBTyxDQUFDa0IsT0FBUixFQUFQO0FBQ0Q7QUFDRjs7OzZCQUVRbkIsSSxFQUFtQjtBQUMxQixVQUFHLEtBQUtiLEtBQUwsQ0FBVytDLGVBQWQsRUFBOEI7QUFDNUIsYUFBSy9DLEtBQUwsQ0FBVytDLGVBQVgsQ0FBMkJsQyxJQUEzQjtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUFBLHdCQUNtQixLQUFLWixLQUR4QjtBQUFBLFVBQ0NFLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FELE1BRFIsZUFDUUEsTUFEUjtBQUFBLHdCQUUyQyxLQUFLRixLQUZoRDtBQUFBLFVBRUNnRCxHQUZELGVBRUNBLEdBRkQ7QUFBQSxVQUVNQyxTQUZOLGVBRU1BLFNBRk47QUFBQSxVQUVpQkMsWUFGakIsZUFFaUJBLFlBRmpCO0FBQUEsVUFFZ0NoQyxNQUZoQyxlQUVnQ0EsTUFGaEM7O0FBR1AsVUFBR2YsS0FBSCxFQUFTO0FBQ1AsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsYUFBT0QsTUFBTSxJQUFJLENBQUNDLEtBQVgsSUFDTCxnQ0FBQyxNQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUUsSUFEVjtBQUVFLFFBQUEsR0FBRyxFQUFFNkMsR0FGUDtBQUdFLFFBQUEsTUFBTSxFQUFFOUIsTUFIVjtBQUlFLFFBQUEsTUFBTSxFQUFFO0FBQ05pQyxVQUFBQSxPQUFPLEVBQUVGLFNBREg7QUFFTkcsVUFBQUEsVUFBVSxFQUFFRjtBQUZOLFNBSlY7QUFRRSxRQUFBLE9BQU8sRUFBRSxLQUFLNUMsT0FSaEI7QUFTRSxRQUFBLFdBQVcsRUFBRSxLQUFLRixXQVRwQjtBQVVFLFFBQUEsZ0JBQWdCLEVBQUUsS0FBS0csZ0JBVnpCO0FBV0UsUUFBQSxRQUFRLEVBQUUsS0FBS0M7QUFYakIsUUFERjtBQWVEOzs7O0VBakkrQlgsa0JBQU13RCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAYmFiZWwvcG9seWZpbGwnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgcGF5cGFsIGZyb20gJ3BheXBhbC1jaGVja291dCc7XHJcblxyXG5jb25zdCBCdXR0b24gPSBwYXlwYWwuQnV0dG9uLmRyaXZlcigncmVhY3QnLCB7IFJlYWN0LCBSZWFjdERPTSB9KTtcclxuXHJcbi8qKlxyXG4gKiB0eXBlc1xyXG4gKi9cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBsb2FkZWQ6IGJvb2xlYW47XHJcbiAgZXJyb3I6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE9uQ2FuY2VsRGF0YSA9IHtcclxuICBiaWxsaW5nSUQ6IHN0cmluZztcclxuICBjYW5jZWxVcmw6IHN0cmluZztcclxuICBpbnRlbnQ6IHN0cmluZztcclxuICBwYXltZW50SUQ6IHN0cmluZztcclxuICBwYXltZW50VG9rZW46IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgT25TaGlwcGluZ0NoYW5nZURhdGEgPSB7XHJcbiAgYW1vdW50OiB7XHJcbiAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgY3VycmVuY3lfY29kZTogc3RyaW5nLFxyXG4gICAgYnJlYWtkb3duOiB7fVxyXG4gIH0sXHJcbiAgb3JkZXJJRDogc3RyaW5nO1xyXG4gIHBheW1lbnRJRDogc3RyaW5nO1xyXG4gIHBheW1lbnRUb2tlbjogc3RyaW5nO1xyXG4gIHNoaXBwaW5nX2FkZHJlc3M6IHtcclxuICAgIGNpdHk6IHN0cmluZztcclxuICAgIGNvdW50cnlfY29kZTogc3RyaW5nO1xyXG4gICAgcG9zdGFsX2NvZGU6IHN0cmluZztcclxuICAgIHN0YXRlOiBzdHJpbmc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBQYXlQYWxQYXltZW50RGF0YSA9IHtcclxuICBjYXJ0OiBzdHJpbmc7XHJcbiAgY3JlYXRlX3RpbWU6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIGludGVudDogJ3NhbGUnIHwgJ3B1cmNoYXNlJztcclxuICBwYXllcjoge1xyXG4gICAgcGF5ZXJfaW5mbzoge1xyXG4gICAgICBjb3VudHJ5X2NvZGU6IHN0cmluZztcclxuICAgICAgZW1haWw6IHN0cmluZztcclxuICAgICAgZmlyc3RfbmFtZTogc3RyaW5nO1xyXG4gICAgICBsYXN0X25hbWU6IHN0cmluZztcclxuICAgICAgbWlkZGxlX25hbWU6IHN0cmluZztcclxuICAgICAgcGF5ZXJfaWQ6IHN0cmluZztcclxuICAgICAgc2hpcHBpbmdfYWRkcmVzczoge1xyXG4gICAgICAgIGNpdHk6IHN0cmluZztcclxuICAgICAgICBjb3VudHJ5X2NvZGU6IHN0cmluZztcclxuICAgICAgICBsaW5lMTogc3RyaW5nO1xyXG4gICAgICAgIHBvc3RhbF9jb2RlOiBzdHJpbmdcclxuICAgICAgICByZWNpcGllbnRfbmFtZTogc3RyaW5nO1xyXG4gICAgICAgIHN0YXRlOiBzdHJpbmc7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBwYXltZW50X21ldGhvZDogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiAnVU5WRVJJRklFRCcgfCAnVkVSSUZJRUQnO1xyXG4gIH07XHJcbiAgc3RhdGU6IHN0cmluZztcclxuICB0cmFuc2FjdGlvbjogYW55W107XHJcbn1cclxuXHJcblxyXG50eXBlIE9uU2hpcHBpbmdDaGFuZ2VSZXR1cm5UeXBlID0gUHJvbWlzZTxudW1iZXIgfCB2b2lkPiB8IG51bWJlciB8IHZvaWQ7XHJcblxyXG5leHBvcnQgdHlwZSBQYXlQYWxCdXR0b25Qcm9wcyA9IHtcclxuICBlbnY6ICdzYW5kYm94JyB8ICdwcm9kdWN0aW9uJztcclxuICBzYW5kYm94SUQ/OiBzdHJpbmc7XHJcbiAgcHJvZHVjdGlvbklEPzogc3RyaW5nO1xyXG4gIGFtb3VudDogbnVtYmVyO1xyXG4gIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgb25QYXltZW50U3RhcnQ/OiAoKSA9PiB2b2lkO1xyXG4gIG9uUGF5bWVudFN1Y2Nlc3M/OiAocmVzcG9uc2U6IFBheVBhbFBheW1lbnREYXRhKSA9PiB2b2lkO1xyXG4gIG9uUGF5bWVudEVycm9yPzogKG1zZzogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIG9uUGF5bWVudENhbmNlbD86IChkYXRhOiBPbkNhbmNlbERhdGEpID0+IHZvaWQ7XHJcbiAgb25TaGlwcGluZ0NoYW5nZT86IChkYXRhOiBPblNoaXBwaW5nQ2hhbmdlRGF0YSkgPT4gT25TaGlwcGluZ0NoYW5nZVJldHVyblR5cGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjb21wb25lbnRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYXlQYWxCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UGF5UGFsQnV0dG9uUHJvcHMsIFN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFBheVBhbEJ1dHRvblByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxvYWRlZDogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdGhpcy5vbkF1dGhvcml6ZSA9IHRoaXMub25BdXRob3JpemUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucGF5bWVudCA9IHRoaXMucGF5bWVudC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblNoaXBwaW5nQ2hhbmdlID0gdGhpcy5vblNoaXBwaW5nQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2FuY2VsID0gdGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBwYXlwYWxMb2FkZWQgPSAhISh3aW5kb3cgYXMgYW55KS5fX3BwdG1Mb2FkZWRXaXRoTm9Db250ZW50XHJcbiAgICBpZihwYXlwYWxMb2FkZWQpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkZWQ6IHRydWV9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkQ2F0Y2goKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogdHJ1ZX0pXHJcbiAgfVxyXG5cclxuICBwYXltZW50KGRhdGEsIGFjdGlvbnMpOiB2b2lkIHtcclxuICAgIGlmKHRoaXMucHJvcHMub25QYXltZW50U3RhcnQpe1xyXG4gICAgICB0aGlzLnByb3BzLm9uUGF5bWVudFN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFjdGlvbnMucGF5bWVudC5jcmVhdGUoe1xyXG4gICAgICB0cmFuc2FjdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhbW91bnQ6IHtcclxuICAgICAgICAgICAgdG90YWw6IHRoaXMucHJvcHMuYW1vdW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogdGhpcy5wcm9wcy5jdXJyZW5jeSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pLmNhdGNoKChlOiBhbnkpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcih7bWVzc2FnZTogJ0Vycm9yIExvYWRpbmcgUmVhY3QgUGF5cGFsIEJ1dHRvbiwgY2hlY2sgeW91ciBlbnZpcm9ubWVudCB2YXJpYWJsZXMnfSlcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IHRydWV9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uQXV0aG9yaXplKGRhdGEsIGFjdGlvbnMpOiB2b2lkIHtcclxuICAgIHJldHVybiBhY3Rpb25zLnBheW1lbnQuZXhlY3V0ZSgpXHJcbiAgICAgIC50aGVuKChyZXM6IFBheVBhbFBheW1lbnREYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25QYXltZW50U3VjY2Vzcykge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vblBheW1lbnRTdWNjZXNzKHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5vblBheW1lbnRFcnJvcil7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uUGF5bWVudEVycm9yKGUubWVzc2FnZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKHtwYXlwYWxPbkF1dGhFcnJvcjogZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgb25TaGlwcGluZ0NoYW5nZShkYXRhOiBPblNoaXBwaW5nQ2hhbmdlRGF0YSwgYWN0aW9ucyk6IHZvaWQge1xyXG4gICAgaWYodGhpcy5wcm9wcy5vblNoaXBwaW5nQ2hhbmdlKXtcclxuICAgICBQcm9taXNlLnJlc29sdmUodGhpcy5wcm9wcy5vblNoaXBwaW5nQ2hhbmdlKGRhdGEpKVxyXG4gICAgICAudGhlbigocmF0ZSkgPT4ge1xyXG5cclxuICAgICAgICAvLyBlYXJseSBleGl0IGlmIHVzZXIgZG9lc24ndCByZXR1cm4gYSB2YWx1ZVxyXG4gICAgICAgIGlmKCFyYXRlKXtcclxuICAgICAgICAgIHJldHVybiBhY3Rpb25zLnJlc29sdmUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYmFzZU9yZGVyQW1vdW50ID0gYCR7dGhpcy5wcm9wcy5hbW91bnR9YFxyXG4gICAgICAgIGNvbnN0IHNoaXBwaW5nQW1vdW50ID0gYCR7cmF0ZX1gO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gKHBhcnNlRmxvYXQoYmFzZU9yZGVyQW1vdW50KSArIHBhcnNlRmxvYXQoc2hpcHBpbmdBbW91bnQpKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbmN5X2NvZGUgPSB0aGlzLnByb3BzLmN1cnJlbmN5XHJcblxyXG4gICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLnBhdGNoKFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgb3A6ICdyZXBsYWNlJyxcclxuICAgICAgICAgICAgcGF0aDogJy9wdXJjaGFzZV91bml0cy9AcmVmZXJlbmNlX2lkPT1cXCdkZWZhdWx0XFwnL2Ftb3VudCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgY3VycmVuY3lfY29kZSxcclxuICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICBicmVha2Rvd246IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1fdG90YWw6IHtcclxuICAgICAgICAgICAgICAgICAgY3VycmVuY3lfY29kZSxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IGJhc2VPcmRlckFtb3VudFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNoaXBwaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbmN5X2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBzaGlwcGluZ0Ftb3VudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBhY3Rpb25zLnJlc29sdmUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoZGF0YTogT25DYW5jZWxEYXRhKXtcclxuICAgIGlmKHRoaXMucHJvcHMub25QYXltZW50Q2FuY2VsKXtcclxuICAgICAgdGhpcy5wcm9wcy5vblBheW1lbnRDYW5jZWwoZGF0YSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZXJyb3IsIGxvYWRlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHsgZW52LCBzYW5kYm94SUQsIHByb2R1Y3Rpb25JRCwgIGFtb3VudCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmKGVycm9yKXtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIHJldHVybiBsb2FkZWQgJiYgIWVycm9yICYmIChcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNvbW1pdD17dHJ1ZX1cclxuICAgICAgICBlbnY9e2Vudn1cclxuICAgICAgICBhbW91bnQ9e2Ftb3VudH1cclxuICAgICAgICBjbGllbnQ9e3tcclxuICAgICAgICAgIHNhbmRib3g6IHNhbmRib3hJRCxcclxuICAgICAgICAgIHByb2R1Y3Rpb246IHByb2R1Y3Rpb25JRFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgcGF5bWVudD17dGhpcy5wYXltZW50fVxyXG4gICAgICAgIG9uQXV0aG9yaXplPXt0aGlzLm9uQXV0aG9yaXplfVxyXG4gICAgICAgIG9uU2hpcHBpbmdDaGFuZ2U9e3RoaXMub25TaGlwcGluZ0NoYW5nZX1cclxuICAgICAgICBvbkNhbmNlbD17dGhpcy5vbkNhbmNlbH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG59Il19
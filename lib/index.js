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
          console.warn({
            paypalOnAuthError: e.message
          });
        }
      });
    }
  }, {
    key: "onShippingChange",
    value: function onShippingChange(data, actions) {
      var _this$props = this.props,
          onShippingChange = _this$props.onShippingChange,
          amount = _this$props.amount;

      if (onShippingChange) {
        Promise.resolve(onShippingChange(data)).then(function (shippingCharge) {
          console.log(amount, shippingCharge, (amount + shippingCharge).toFixed(2));
          return actions.order.patch([{
            op: 'replace',
            path: '/purchase_units/@reference_id==\'default\'/amount',
            value: {
              currency_code: 'USD',
              value: (amount + shippingCharge).toFixed(2),
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: amount
                },
                shipping: {
                  currency_code: 'USD',
                  value: shippingCharge
                }
              }
            }
          }]);
        });
      } else {
        actions.resolve();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          error = _this$state.error,
          loaded = _this$state.loaded;
      var _this$props2 = this.props,
          env = _this$props2.env,
          sandboxID = _this$props2.sandboxID,
          productionID = _this$props2.productionID,
          amount = _this$props2.amount;

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
        onShippingChange: this.onShippingChange
      });
    }
  }]);

  return PayPalButton;
}(_react["default"].Component);

exports.PayPalButton = PayPalButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiQnV0dG9uIiwicGF5cGFsIiwiZHJpdmVyIiwiUmVhY3QiLCJSZWFjdERPTSIsIlBheVBhbEJ1dHRvbiIsInByb3BzIiwic3RhdGUiLCJsb2FkZWQiLCJlcnJvciIsIm9uQXV0aG9yaXplIiwiYmluZCIsInBheW1lbnQiLCJvblNoaXBwaW5nQ2hhbmdlIiwicGF5cGFsTG9hZGVkIiwid2luZG93IiwiX19wcHRtTG9hZGVkV2l0aE5vQ29udGVudCIsInNldFN0YXRlIiwiZGF0YSIsImFjdGlvbnMiLCJvblBheW1lbnRTdGFydCIsImNyZWF0ZSIsInRyYW5zYWN0aW9ucyIsImFtb3VudCIsInRvdGFsIiwiY3VycmVuY3kiLCJlIiwiY29uc29sZSIsIndhcm4iLCJtZXNzYWdlIiwiZXhlY3V0ZSIsInRoZW4iLCJyZXMiLCJvblBheW1lbnRTdWNjZXNzIiwib25QYXltZW50RXJyb3IiLCJwYXlwYWxPbkF1dGhFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwic2hpcHBpbmdDaGFyZ2UiLCJsb2ciLCJ0b0ZpeGVkIiwib3JkZXIiLCJwYXRjaCIsIm9wIiwicGF0aCIsInZhbHVlIiwiY3VycmVuY3lfY29kZSIsImJyZWFrZG93biIsIml0ZW1fdG90YWwiLCJzaGlwcGluZyIsImVudiIsInNhbmRib3hJRCIsInByb2R1Y3Rpb25JRCIsInNhbmRib3giLCJwcm9kdWN0aW9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQywyQkFBT0QsTUFBUCxDQUFjRSxNQUFkLENBQXFCLE9BQXJCLEVBQThCO0FBQUVDLEVBQUFBLEtBQUssRUFBTEEsaUJBQUY7QUFBU0MsRUFBQUEsUUFBUSxFQUFSQTtBQUFULENBQTlCLENBQWY7QUFFQTs7Ozs7QUFrRUE7OztJQUdhQyxZOzs7OztBQUNYLHdCQUFZQyxLQUFaLEVBQXNDO0FBQUE7O0FBQUE7O0FBQ3BDLHNGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFZO0FBQ1ZDLE1BQUFBLE1BQU0sRUFBRSxLQURFO0FBRVZDLE1BQUFBLEtBQUssRUFBRTtBQUZHLEtBQVo7QUFLQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLCtCQUFuQjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsK0JBQWY7QUFDQSxVQUFLRSxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkYsSUFBdEIsK0JBQXhCO0FBVG9DO0FBVXJDOzs7Ozs7Ozs7Ozs7O0FBR09HLGdCQUFBQSxZLEdBQWUsQ0FBQyxDQUFFQyxNQUFELENBQWdCQyx5Qjs7QUFDdkMsb0JBQUdGLFlBQUgsRUFBZ0I7QUFDZCx1QkFBS0csUUFBTCxDQUFjO0FBQUNULG9CQUFBQSxNQUFNLEVBQUU7QUFBVCxtQkFBZDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBR2lCO0FBQ2xCLFdBQUtTLFFBQUwsQ0FBYztBQUFDUixRQUFBQSxLQUFLLEVBQUU7QUFBUixPQUFkO0FBQ0Q7Ozs0QkFFT1MsSSxFQUFNQyxPLEVBQWU7QUFBQTs7QUFDM0IsVUFBRyxLQUFLYixLQUFMLENBQVdjLGNBQWQsRUFBNkI7QUFDM0IsYUFBS2QsS0FBTCxDQUFXYyxjQUFYO0FBQ0Q7O0FBRUQsYUFBT0QsT0FBTyxDQUFDUCxPQUFSLENBQWdCUyxNQUFoQixDQUF1QjtBQUM1QkMsUUFBQUEsWUFBWSxFQUFFLENBQ1o7QUFDRUMsVUFBQUEsTUFBTSxFQUFFO0FBQ05DLFlBQUFBLEtBQUssRUFBRSxLQUFLbEIsS0FBTCxDQUFXaUIsTUFEWjtBQUVORSxZQUFBQSxRQUFRLEVBQUUsS0FBS25CLEtBQUwsQ0FBV21CO0FBRmY7QUFEVixTQURZO0FBRGMsT0FBdkIsV0FTRSxVQUFDQyxDQUFELEVBQVk7QUFDbkJDLFFBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhO0FBQUNDLFVBQUFBLE9BQU8sRUFBRTtBQUFWLFNBQWI7O0FBQ0EsUUFBQSxNQUFJLENBQUNaLFFBQUwsQ0FBYztBQUFDUixVQUFBQSxLQUFLLEVBQUU7QUFBUixTQUFkO0FBQ0QsT0FaTSxDQUFQO0FBYUQ7OztnQ0FFV1MsSSxFQUFNQyxPLEVBQWU7QUFBQTs7QUFDL0IsYUFBT0EsT0FBTyxDQUFDUCxPQUFSLENBQWdCa0IsT0FBaEIsR0FDSkMsSUFESSxDQUNDLFVBQUNDLEdBQUQsRUFBNEI7QUFDaEMsWUFBSSxNQUFJLENBQUMxQixLQUFMLENBQVcyQixnQkFBZixFQUFpQztBQUMvQixVQUFBLE1BQUksQ0FBQzNCLEtBQUwsQ0FBVzJCLGdCQUFYLENBQTRCRCxHQUE1QjtBQUNEO0FBQ0YsT0FMSSxXQU1FLFVBQUNOLENBQUQsRUFBWTtBQUNqQixZQUFHLE1BQUksQ0FBQ3BCLEtBQUwsQ0FBVzRCLGNBQWQsRUFBNkI7QUFDM0IsVUFBQSxNQUFJLENBQUM1QixLQUFMLENBQVc0QixjQUFYLENBQTBCUixDQUFDLENBQUNHLE9BQTVCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLFVBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhO0FBQUNPLFlBQUFBLGlCQUFpQixFQUFFVCxDQUFDLENBQUNHO0FBQXRCLFdBQWI7QUFDRDtBQUNGLE9BWkksQ0FBUDtBQWFEOzs7cUNBRWdCWCxJLEVBQTRCQyxPLEVBQWU7QUFBQSx3QkFDckIsS0FBS2IsS0FEZ0I7QUFBQSxVQUNsRE8sZ0JBRGtELGVBQ2xEQSxnQkFEa0Q7QUFBQSxVQUNoQ1UsTUFEZ0MsZUFDaENBLE1BRGdDOztBQUcxRCxVQUFHVixnQkFBSCxFQUFvQjtBQUNsQnVCLFFBQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnhCLGdCQUFnQixDQUFDSyxJQUFELENBQWhDLEVBQ0NhLElBREQsQ0FDTSxVQUFDTyxjQUFELEVBQW9CO0FBQ3hCWCxVQUFBQSxPQUFPLENBQUNZLEdBQVIsQ0FDRWhCLE1BREYsRUFFRWUsY0FGRixFQUdFLENBQUNmLE1BQU0sR0FBR2UsY0FBVixFQUEwQkUsT0FBMUIsQ0FBa0MsQ0FBbEMsQ0FIRjtBQUtBLGlCQUFPckIsT0FBTyxDQUFDc0IsS0FBUixDQUFjQyxLQUFkLENBQW9CLENBQUM7QUFDMUJDLFlBQUFBLEVBQUUsRUFBRSxTQURzQjtBQUUxQkMsWUFBQUEsSUFBSSxFQUFFLG1EQUZvQjtBQUcxQkMsWUFBQUEsS0FBSyxFQUFFO0FBQ0xDLGNBQUFBLGFBQWEsRUFBRSxLQURWO0FBRUxELGNBQUFBLEtBQUssRUFBRSxDQUFDdEIsTUFBTSxHQUFHZSxjQUFWLEVBQTBCRSxPQUExQixDQUFrQyxDQUFsQyxDQUZGO0FBR0xPLGNBQUFBLFNBQVMsRUFBRTtBQUNUQyxnQkFBQUEsVUFBVSxFQUFFO0FBQ1ZGLGtCQUFBQSxhQUFhLEVBQUUsS0FETDtBQUVWRCxrQkFBQUEsS0FBSyxFQUFFdEI7QUFGRyxpQkFESDtBQUtUMEIsZ0JBQUFBLFFBQVEsRUFBRTtBQUNSSCxrQkFBQUEsYUFBYSxFQUFFLEtBRFA7QUFFUkQsa0JBQUFBLEtBQUssRUFBRVA7QUFGQztBQUxEO0FBSE47QUFIbUIsV0FBRCxDQUFwQixDQUFQO0FBa0JELFNBekJEO0FBMEJELE9BM0JELE1BMkJPO0FBQ0xuQixRQUFBQSxPQUFPLENBQUNrQixPQUFSO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUEsd0JBQ21CLEtBQUs5QixLQUR4QjtBQUFBLFVBQ0NFLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FELE1BRFIsZUFDUUEsTUFEUjtBQUFBLHlCQUUyQyxLQUFLRixLQUZoRDtBQUFBLFVBRUM0QyxHQUZELGdCQUVDQSxHQUZEO0FBQUEsVUFFTUMsU0FGTixnQkFFTUEsU0FGTjtBQUFBLFVBRWlCQyxZQUZqQixnQkFFaUJBLFlBRmpCO0FBQUEsVUFFZ0M3QixNQUZoQyxnQkFFZ0NBLE1BRmhDOztBQUdQLFVBQUdkLEtBQUgsRUFBUztBQUNQLGVBQU8sSUFBUDtBQUNEOztBQUNELGFBQU9ELE1BQU0sSUFBSSxDQUFDQyxLQUFYLElBQ0wsZ0NBQUMsTUFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFLElBRFY7QUFFRSxRQUFBLEdBQUcsRUFBRXlDLEdBRlA7QUFHRSxRQUFBLE1BQU0sRUFBRTNCLE1BSFY7QUFJRSxRQUFBLE1BQU0sRUFBRTtBQUNOOEIsVUFBQUEsT0FBTyxFQUFFRixTQURIO0FBRU5HLFVBQUFBLFVBQVUsRUFBRUY7QUFGTixTQUpWO0FBUUUsUUFBQSxPQUFPLEVBQUUsS0FBS3hDLE9BUmhCO0FBU0UsUUFBQSxXQUFXLEVBQUUsS0FBS0YsV0FUcEI7QUFVRSxRQUFBLGdCQUFnQixFQUFFLEtBQUtHO0FBVnpCLFFBREY7QUFjRDs7OztFQW5IK0JWLGtCQUFNb0QsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGJhYmVsL3BvbHlmaWxsJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHBheXBhbCBmcm9tICdwYXlwYWwtY2hlY2tvdXQnO1xyXG5cclxuY29uc3QgQnV0dG9uID0gcGF5cGFsLkJ1dHRvbi5kcml2ZXIoJ3JlYWN0JywgeyBSZWFjdCwgUmVhY3RET00gfSk7XHJcblxyXG4vKipcclxuICogdHlwZXNcclxuICovXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgbG9hZGVkOiBib29sZWFuO1xyXG4gIGVycm9yOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBPblNoaXBwaW5nQ2hhbmdlRGF0YSA9IHtcclxuICBhbW91bnQ6IHtcclxuICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICBjdXJyZW5jeV9jb2RlOiBzdHJpbmcsXHJcbiAgICBicmVha2Rvd246IHt9XHJcbiAgfSxcclxuICBvcmRlcklEOiBzdHJpbmc7XHJcbiAgcGF5bWVudElEOiBzdHJpbmc7XHJcbiAgcGF5bWVudFRva2VuOiBzdHJpbmc7XHJcbiAgc2hpcHBpbmdfYWRkcmVzczoge1xyXG4gICAgY2l0eTogc3RyaW5nO1xyXG4gICAgY291bnRyeV9jb2RlOiBzdHJpbmc7XHJcbiAgICBwb3N0YWxfY29kZTogc3RyaW5nO1xyXG4gICAgc3RhdGU6IHN0cmluZztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBheVBhbFBheW1lbnREYXRhID0ge1xyXG4gIGNhcnQ6IHN0cmluZztcclxuICBjcmVhdGVfdGltZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgaW50ZW50OiAnc2FsZScgfCAncHVyY2hhc2UnO1xyXG4gIHBheWVyOiB7XHJcbiAgICBwYXllcl9pbmZvOiB7XHJcbiAgICAgIGNvdW50cnlfY29kZTogc3RyaW5nO1xyXG4gICAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgICBmaXJzdF9uYW1lOiBzdHJpbmc7XHJcbiAgICAgIGxhc3RfbmFtZTogc3RyaW5nO1xyXG4gICAgICBtaWRkbGVfbmFtZTogc3RyaW5nO1xyXG4gICAgICBwYXllcl9pZDogc3RyaW5nO1xyXG4gICAgICBzaGlwcGluZ19hZGRyZXNzOiB7XHJcbiAgICAgICAgY2l0eTogc3RyaW5nO1xyXG4gICAgICAgIGNvdW50cnlfY29kZTogc3RyaW5nO1xyXG4gICAgICAgIGxpbmUxOiBzdHJpbmc7XHJcbiAgICAgICAgcG9zdGFsX2NvZGU6IHN0cmluZ1xyXG4gICAgICAgIHJlY2lwaWVudF9uYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgc3RhdGU6IHN0cmluZztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHBheW1lbnRfbWV0aG9kOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6ICdVTlZFUklGSUVEJyB8ICdWRVJJRklFRCc7XHJcbiAgfTtcclxuICBzdGF0ZTogc3RyaW5nO1xyXG4gIHRyYW5zYWN0aW9uOiBhbnlbXTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUGF5UGFsQnV0dG9uUHJvcHMgPSB7XHJcbiAgZW52OiAnc2FuZGJveCcgfCAncHJvZHVjdGlvbic7XHJcbiAgc2FuZGJveElEPzogc3RyaW5nO1xyXG4gIHByb2R1Y3Rpb25JRD86IHN0cmluZztcclxuICBhbW91bnQ6IG51bWJlcjtcclxuICBjdXJyZW5jeTogc3RyaW5nO1xyXG4gIG9uUGF5bWVudEVycm9yPzogKG1zZzogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIG9uUGF5bWVudFN0YXJ0PzogKCkgPT4gdm9pZDtcclxuICBvblBheW1lbnRTdWNjZXNzPzogKHJlc3BvbnNlOiBQYXlQYWxQYXltZW50RGF0YSkgPT4gdm9pZDtcclxuICBvblNoaXBwaW5nQ2hhbmdlPzogKGRhdGE6IE9uU2hpcHBpbmdDaGFuZ2VEYXRhKSA9PiBQcm9taXNlPG51bWJlcj4gfCBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjb21wb25lbnRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYXlQYWxCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UGF5UGFsQnV0dG9uUHJvcHMsIFN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFBheVBhbEJ1dHRvblByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGU9IHtcclxuICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkF1dGhvcml6ZSA9IHRoaXMub25BdXRob3JpemUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucGF5bWVudCA9IHRoaXMucGF5bWVudC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblNoaXBwaW5nQ2hhbmdlID0gdGhpcy5vblNoaXBwaW5nQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHBheXBhbExvYWRlZCA9ICEhKHdpbmRvdyBhcyBhbnkpLl9fcHB0bUxvYWRlZFdpdGhOb0NvbnRlbnRcclxuICAgIGlmKHBheXBhbExvYWRlZCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRlZDogdHJ1ZX0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRDYXRjaCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yOiB0cnVlfSlcclxuICB9XHJcblxyXG4gIHBheW1lbnQoZGF0YSwgYWN0aW9ucyk6IHZvaWQge1xyXG4gICAgaWYodGhpcy5wcm9wcy5vblBheW1lbnRTdGFydCl7XHJcbiAgICAgIHRoaXMucHJvcHMub25QYXltZW50U3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWN0aW9ucy5wYXltZW50LmNyZWF0ZSh7XHJcbiAgICAgIHRyYW5zYWN0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGFtb3VudDoge1xyXG4gICAgICAgICAgICB0b3RhbDogdGhpcy5wcm9wcy5hbW91bnQsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiB0aGlzLnByb3BzLmN1cnJlbmN5LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSkuY2F0Y2goKGU6IGFueSkgPT4ge1xyXG4gICAgICBjb25zb2xlLndhcm4oe21lc3NhZ2U6ICdFcnJvciBMb2FkaW5nICBSZWFjdCBQYXlwYWwgQnV0dG9uLCBjaGVjayB5b3VyIGVudmlyb25tZW50IHZhcmlhYmxlcyd9KVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogdHJ1ZX0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25BdXRob3JpemUoZGF0YSwgYWN0aW9ucyk6IHZvaWQge1xyXG4gICAgcmV0dXJuIGFjdGlvbnMucGF5bWVudC5leGVjdXRlKClcclxuICAgICAgLnRoZW4oKHJlczogUGF5UGFsUGF5bWVudERhdGEpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblBheW1lbnRTdWNjZXNzKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uUGF5bWVudFN1Y2Nlc3MocmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlOiBhbnkpID0+IHtcclxuICAgICAgICBpZih0aGlzLnByb3BzLm9uUGF5bWVudEVycm9yKXtcclxuICAgICAgICAgIHRoaXMucHJvcHMub25QYXltZW50RXJyb3IoZS5tZXNzYWdlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oe3BheXBhbE9uQXV0aEVycm9yOiBlLm1lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIG9uU2hpcHBpbmdDaGFuZ2UoZGF0YTogT25TaGlwcGluZ0NoYW5nZURhdGEsIGFjdGlvbnMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgb25TaGlwcGluZ0NoYW5nZSwgYW1vdW50IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGlmKG9uU2hpcHBpbmdDaGFuZ2Upe1xyXG4gICAgICBQcm9taXNlLnJlc29sdmUob25TaGlwcGluZ0NoYW5nZShkYXRhKSlcclxuICAgICAgLnRoZW4oKHNoaXBwaW5nQ2hhcmdlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICBzaGlwcGluZ0NoYXJnZSxcclxuICAgICAgICAgIChhbW91bnQgKyBzaGlwcGluZ0NoYXJnZSkudG9GaXhlZCgyKSxcclxuICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIucGF0Y2goW3tcclxuICAgICAgICAgIG9wOiAncmVwbGFjZScsXHJcbiAgICAgICAgICBwYXRoOiAnL3B1cmNoYXNlX3VuaXRzL0ByZWZlcmVuY2VfaWQ9PVxcJ2RlZmF1bHRcXCcvYW1vdW50JyxcclxuICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5X2NvZGU6ICdVU0QnLFxyXG4gICAgICAgICAgICB2YWx1ZTogKGFtb3VudCArIHNoaXBwaW5nQ2hhcmdlKS50b0ZpeGVkKDIpLFxyXG4gICAgICAgICAgICBicmVha2Rvd246IHtcclxuICAgICAgICAgICAgICBpdGVtX3RvdGFsOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeV9jb2RlOiAnVVNEJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBhbW91bnRcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHNoaXBwaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeV9jb2RlOiAnVVNEJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBzaGlwcGluZ0NoYXJnZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1dKVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFjdGlvbnMucmVzb2x2ZSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGVycm9yLCBsb2FkZWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCB7IGVudiwgc2FuZGJveElELCBwcm9kdWN0aW9uSUQsICBhbW91bnQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZihlcnJvcil7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbG9hZGVkICYmICFlcnJvciAmJiAoXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb21taXQ9e3RydWV9XHJcbiAgICAgICAgZW52PXtlbnZ9XHJcbiAgICAgICAgYW1vdW50PXthbW91bnR9XHJcbiAgICAgICAgY2xpZW50PXt7XHJcbiAgICAgICAgICBzYW5kYm94OiBzYW5kYm94SUQsXHJcbiAgICAgICAgICBwcm9kdWN0aW9uOiBwcm9kdWN0aW9uSURcclxuICAgICAgICB9fVxyXG4gICAgICAgIHBheW1lbnQ9e3RoaXMucGF5bWVudH1cclxuICAgICAgICBvbkF1dGhvcml6ZT17dGhpcy5vbkF1dGhvcml6ZX1cclxuICAgICAgICBvblNoaXBwaW5nQ2hhbmdlPXt0aGlzLm9uU2hpcHBpbmdDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxufSJdfQ==
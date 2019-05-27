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
      loaded: false
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
      return this.state.loaded && _react["default"].createElement(Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiQnV0dG9uIiwicGF5cGFsIiwiZHJpdmVyIiwiUmVhY3QiLCJSZWFjdERPTSIsIlBheVBhbEJ1dHRvbiIsInByb3BzIiwib25BdXRob3JpemUiLCJiaW5kIiwicGF5bWVudCIsInN0YXRlIiwibG9hZGVkIiwicGF5cGFsTG9hZGVkIiwid2luZG93IiwiX19wcHRtTG9hZGVkV2l0aE5vQ29udGVudCIsInNldFN0YXRlIiwiZGF0YSIsImFjdGlvbnMiLCJjcmVhdGUiLCJ0cmFuc2FjdGlvbnMiLCJhbW91bnQiLCJ0b3RhbCIsImN1cnJlbmN5IiwiZXhlY3V0ZSIsInRoZW4iLCJyZXMiLCJvblN1Y2Nlc3MiLCJlbnYiLCJzYW5kYm94Iiwic2FuZGJveElEIiwicHJvZHVjdGlvbiIsInByb2R1Y3Rpb25JRCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQU1BLE1BQU0sR0FBR0MsMkJBQU9ELE1BQVAsQ0FBY0UsTUFBZCxDQUFxQixPQUFyQixFQUE4QjtBQUFFQyxFQUFBQSxLQUFLLEVBQUxBLGlCQUFGO0FBQVNDLEVBQUFBLFFBQVEsRUFBUkE7QUFBVCxDQUE5QixDQUFmOztJQTBDTUMsWTs7Ozs7QUFDSix3QkFBWUMsS0FBWixFQUFzQztBQUFBOztBQUFBOztBQUNwQyxzRkFBTUEsS0FBTjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsK0JBQW5CO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUQsSUFBYiwrQkFBZjtBQUVBLFVBQUtFLEtBQUwsR0FBWTtBQUNWQyxNQUFBQSxNQUFNLEVBQUU7QUFERSxLQUFaO0FBTG9DO0FBUXJDOzs7Ozs7Ozs7Ozs7O0FBR09DLGdCQUFBQSxZLEdBQWUsQ0FBQyxDQUFFQyxNQUFELENBQWdCQyx5Qjs7QUFDdkMsb0JBQUdGLFlBQUgsRUFBZ0I7QUFDZCx1QkFBS0csUUFBTCxDQUFjO0FBQUNKLG9CQUFBQSxNQUFNLEVBQUU7QUFBVCxtQkFBZDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBR0tLLEksRUFBTUMsTyxFQUFlO0FBQzNCLGFBQU9BLE9BQU8sQ0FBQ1IsT0FBUixDQUFnQlMsTUFBaEIsQ0FBdUI7QUFDNUJDLFFBQUFBLFlBQVksRUFBRSxDQUNaO0FBQ0VDLFVBQUFBLE1BQU0sRUFBRTtBQUNOQyxZQUFBQSxLQUFLLEVBQUUsS0FBS2YsS0FBTCxDQUFXYyxNQURaO0FBRU5FLFlBQUFBLFFBQVEsRUFBRSxLQUFLaEIsS0FBTCxDQUFXZ0I7QUFGZjtBQURWLFNBRFk7QUFEYyxPQUF2QixDQUFQO0FBVUQ7OztnQ0FFV04sSSxFQUFNQyxPLEVBQWU7QUFBQTs7QUFDL0IsYUFBT0EsT0FBTyxDQUFDUixPQUFSLENBQWdCYyxPQUFoQixHQUNKQyxJQURJLENBQ0MsVUFBQ0MsR0FBRCxFQUF3QjtBQUM1QixZQUFJLE1BQUksQ0FBQ25CLEtBQUwsQ0FBV29CLFNBQWYsRUFBMEI7QUFDeEIsVUFBQSxNQUFJLENBQUNwQixLQUFMLENBQVdvQixTQUFYLENBQXFCRCxHQUFyQjtBQUNEO0FBQ0YsT0FMSSxDQUFQO0FBTUQ7Ozs2QkFFUTtBQUNQLGFBQU8sS0FBS2YsS0FBTCxDQUFXQyxNQUFYLElBQ0wsZ0NBQUMsTUFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFLElBRFY7QUFFRSxRQUFBLEdBQUcsRUFBRSxLQUFLTCxLQUFMLENBQVdxQixHQUZsQjtBQUdFLFFBQUEsTUFBTSxFQUFFO0FBQ05DLFVBQUFBLE9BQU8sRUFBRSxLQUFLdEIsS0FBTCxDQUFXdUIsU0FEZDtBQUVOQyxVQUFBQSxVQUFVLEVBQUUsS0FBS3hCLEtBQUwsQ0FBV3lCO0FBRmpCLFNBSFY7QUFPRSxRQUFBLE9BQU8sRUFBRSxLQUFLdEIsT0FQaEI7QUFRRSxRQUFBLFdBQVcsRUFBRSxLQUFLRixXQVJwQjtBQVNFLFFBQUEsTUFBTSxFQUFFLEtBQUtELEtBQUwsQ0FBV2M7QUFUckIsUUFERjtBQWFEOzs7O0VBdER3QmpCLGtCQUFNNkIsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGJhYmVsL3BvbHlmaWxsJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHBheXBhbCBmcm9tICdwYXlwYWwtY2hlY2tvdXQnO1xyXG5cclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHBheXBhbC5CdXR0b24uZHJpdmVyKCdyZWFjdCcsIHsgUmVhY3QsIFJlYWN0RE9NIH0pO1xyXG5cclxuZXhwb3J0IHR5cGUgRW52U3RyaW5nID0gJ3NhbmRib3gnIHwgJ3Byb2R1Y3Rpb24nXHJcblxyXG5leHBvcnQgdHlwZSBQYXltZW50T2JqZWN0ID0ge1xyXG4gIGNhcnQ6IHN0cmluZztcclxuICBjcmVhdGVfdGltZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgaW50ZW50OiAnc2FsZScgfCAncHVyY2hhc2UnO1xyXG4gIHBheWVyOiB7XHJcbiAgICBwYXllcl9pbmZvOiB7XHJcbiAgICAgIGNvdW50cnlfY29kZTogc3RyaW5nO1xyXG4gICAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgICBmaXJzdF9uYW1lOiBzdHJpbmc7XHJcbiAgICAgIGxhc3RfbmFtZTogc3RyaW5nO1xyXG4gICAgICBtaWRkbGVfbmFtZTogc3RyaW5nO1xyXG4gICAgICBwYXllcl9pZDogc3RyaW5nO1xyXG4gICAgICBzaGlwcGluZ19hZGRyZXNzOiB7XHJcbiAgICAgICAgY2l0eTogc3RyaW5nO1xyXG4gICAgICAgIGNvdW50cnlfY29kZTogc3RyaW5nO1xyXG4gICAgICAgIGxpbmUxOiBzdHJpbmc7XHJcbiAgICAgICAgcG9zdGFsX2NvZGU6IHN0cmluZ1xyXG4gICAgICAgIHJlY2lwaWVudF9uYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgc3RhdGU6IHN0cmluZztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHBheW1lbnRfbWV0aG9kOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6ICdVTlZFUklGSUVEJyB8ICdWRVJJRklFRCc7XHJcbiAgfTtcclxuICBzdGF0ZTogc3RyaW5nO1xyXG4gIHRyYW5zYWN0aW9uOiBhbnlbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXlQYWxCdXR0b25Qcm9wcyB7XHJcbiAgZW52OiBFbnZTdHJpbmc7XHJcbiAgc2FuZGJveElEPzogc3RyaW5nO1xyXG4gIHByb2R1Y3Rpb25JRD86IHN0cmluZztcclxuICBhbW91bnQ6IG51bWJlcjtcclxuICBjdXJyZW5jeTogc3RyaW5nO1xyXG4gIG9uU3VjY2Vzcz86IChyZXNwb25zZTogUGF5bWVudE9iamVjdCkgPT4gdm9pZDtcclxufVxyXG5cclxuY2xhc3MgUGF5UGFsQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFBheVBhbEJ1dHRvblByb3BzLCB7bG9hZGVkOiBib29sZWFufT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQYXlQYWxCdXR0b25Qcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLm9uQXV0aG9yaXplID0gdGhpcy5vbkF1dGhvcml6ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5wYXltZW50ID0gdGhpcy5wYXltZW50LmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT0ge1xyXG4gICAgICBsb2FkZWQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHBheXBhbExvYWRlZCA9ICEhKHdpbmRvdyBhcyBhbnkpLl9fcHB0bUxvYWRlZFdpdGhOb0NvbnRlbnRcclxuICAgIGlmKHBheXBhbExvYWRlZCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRlZDogdHJ1ZX0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwYXltZW50KGRhdGEsIGFjdGlvbnMpOiB2b2lkIHtcclxuICAgIHJldHVybiBhY3Rpb25zLnBheW1lbnQuY3JlYXRlKHtcclxuICAgICAgdHJhbnNhY3Rpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYW1vdW50OiB7XHJcbiAgICAgICAgICAgIHRvdGFsOiB0aGlzLnByb3BzLmFtb3VudCxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHRoaXMucHJvcHMuY3VycmVuY3lcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25BdXRob3JpemUoZGF0YSwgYWN0aW9ucyk6IHZvaWQge1xyXG4gICAgcmV0dXJuIGFjdGlvbnMucGF5bWVudC5leGVjdXRlKClcclxuICAgICAgLnRoZW4oKHJlczogUGF5bWVudE9iamVjdCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vblN1Y2Nlc3MocmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRlZCAmJiAoXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb21taXQ9e3RydWV9XHJcbiAgICAgICAgZW52PXt0aGlzLnByb3BzLmVudn1cclxuICAgICAgICBjbGllbnQ9e3tcclxuICAgICAgICAgIHNhbmRib3g6IHRoaXMucHJvcHMuc2FuZGJveElELFxyXG4gICAgICAgICAgcHJvZHVjdGlvbjogdGhpcy5wcm9wcy5wcm9kdWN0aW9uSURcclxuICAgICAgICB9fVxyXG4gICAgICAgIHBheW1lbnQ9e3RoaXMucGF5bWVudH1cclxuICAgICAgICBvbkF1dGhvcml6ZT17dGhpcy5vbkF1dGhvcml6ZX1cclxuICAgICAgICBhbW91bnQ9e3RoaXMucHJvcHMuYW1vdW50fVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBheVBhbEJ1dHRvbiB9Il19
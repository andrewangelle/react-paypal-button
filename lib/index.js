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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiQnV0dG9uIiwicGF5cGFsIiwiZHJpdmVyIiwiUmVhY3QiLCJSZWFjdERPTSIsIlBheVBhbEJ1dHRvbiIsInByb3BzIiwib25BdXRob3JpemUiLCJiaW5kIiwicGF5bWVudCIsInN0YXRlIiwibG9hZGVkIiwicGF5cGFsTG9hZGVkIiwid2luZG93IiwiX19wcHRtTG9hZGVkV2l0aE5vQ29udGVudCIsInNldFN0YXRlIiwiZGF0YSIsImFjdGlvbnMiLCJjcmVhdGUiLCJ0cmFuc2FjdGlvbnMiLCJhbW91bnQiLCJ0b3RhbCIsImN1cnJlbmN5IiwiZXhlY3V0ZSIsInRoZW4iLCJyZXMiLCJvblN1Y2Nlc3MiLCJlbnYiLCJzYW5kYm94Iiwic2FuZGJveElEIiwicHJvZHVjdGlvbiIsInByb2R1Y3Rpb25JRCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQU1BLE1BQU0sR0FBR0MsMkJBQU9ELE1BQVAsQ0FBY0UsTUFBZCxDQUFxQixPQUFyQixFQUE4QjtBQUFFQyxFQUFBQSxLQUFLLEVBQUxBLGlCQUFGO0FBQVNDLEVBQUFBLFFBQVEsRUFBUkE7QUFBVCxDQUE5QixDQUFmOztJQUdNQyxZOzs7OztBQUNKLHdCQUFZQyxLQUFaLEVBQXNDO0FBQUE7O0FBQUE7O0FBQ3BDLHNGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQiwrQkFBbkI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLCtCQUFmO0FBRUEsVUFBS0UsS0FBTCxHQUFZO0FBQ1ZDLE1BQUFBLE1BQU0sRUFBRTtBQURFLEtBQVo7QUFMb0M7QUFRckM7Ozs7Ozs7Ozs7Ozs7QUFHT0MsZ0JBQUFBLFksR0FBZSxDQUFDLENBQUVDLE1BQUQsQ0FBZ0JDLHlCOztBQUN2QyxvQkFBR0YsWUFBSCxFQUFnQjtBQUNkLHVCQUFLRyxRQUFMLENBQWM7QUFBQ0osb0JBQUFBLE1BQU0sRUFBRTtBQUFULG1CQUFkO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFHS0ssSSxFQUFNQyxPLEVBQWU7QUFDM0IsYUFBT0EsT0FBTyxDQUFDUixPQUFSLENBQWdCUyxNQUFoQixDQUF1QjtBQUM1QkMsUUFBQUEsWUFBWSxFQUFFLENBQ1o7QUFDRUMsVUFBQUEsTUFBTSxFQUFFO0FBQ05DLFlBQUFBLEtBQUssRUFBRSxLQUFLZixLQUFMLENBQVdjLE1BRFo7QUFFTkUsWUFBQUEsUUFBUSxFQUFFLEtBQUtoQixLQUFMLENBQVdnQjtBQUZmO0FBRFYsU0FEWTtBQURjLE9BQXZCLENBQVA7QUFVRDs7O2dDQUVXTixJLEVBQU1DLE8sRUFBZTtBQUFBOztBQUMvQixhQUFPQSxPQUFPLENBQUNSLE9BQVIsQ0FBZ0JjLE9BQWhCLEdBQ0pDLElBREksQ0FDQyxVQUFDQyxHQUFELEVBQTRCO0FBQ2hDLFlBQUksTUFBSSxDQUFDbkIsS0FBTCxDQUFXb0IsU0FBZixFQUEwQjtBQUN4QixVQUFBLE1BQUksQ0FBQ3BCLEtBQUwsQ0FBV29CLFNBQVgsQ0FBcUJELEdBQXJCO0FBQ0Q7QUFDRixPQUxJLENBQVA7QUFNRDs7OzZCQUVRO0FBQ1AsYUFBTyxLQUFLZixLQUFMLENBQVdDLE1BQVgsSUFDTCxnQ0FBQyxNQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUUsSUFEVjtBQUVFLFFBQUEsR0FBRyxFQUFFLEtBQUtMLEtBQUwsQ0FBV3FCLEdBRmxCO0FBR0UsUUFBQSxNQUFNLEVBQUU7QUFDTkMsVUFBQUEsT0FBTyxFQUFFLEtBQUt0QixLQUFMLENBQVd1QixTQURkO0FBRU5DLFVBQUFBLFVBQVUsRUFBRSxLQUFLeEIsS0FBTCxDQUFXeUI7QUFGakIsU0FIVjtBQU9FLFFBQUEsT0FBTyxFQUFFLEtBQUt0QixPQVBoQjtBQVFFLFFBQUEsV0FBVyxFQUFFLEtBQUtGLFdBUnBCO0FBU0UsUUFBQSxNQUFNLEVBQUUsS0FBS0QsS0FBTCxDQUFXYztBQVRyQixRQURGO0FBYUQ7Ozs7RUF0RHdCakIsa0JBQU02QixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAYmFiZWwvcG9seWZpbGwnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgcGF5cGFsIGZyb20gJ3BheXBhbC1jaGVja291dCc7XHJcbmltcG9ydCB7IFBheVBhbEJ1dHRvblByb3BzLCBQYXlQYWxQYXltZW50RGF0YSB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuY29uc3QgQnV0dG9uID0gcGF5cGFsLkJ1dHRvbi5kcml2ZXIoJ3JlYWN0JywgeyBSZWFjdCwgUmVhY3RET00gfSk7XHJcblxyXG5cclxuY2xhc3MgUGF5UGFsQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFBheVBhbEJ1dHRvblByb3BzLCB7bG9hZGVkOiBib29sZWFufT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQYXlQYWxCdXR0b25Qcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLm9uQXV0aG9yaXplID0gdGhpcy5vbkF1dGhvcml6ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5wYXltZW50ID0gdGhpcy5wYXltZW50LmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT0ge1xyXG4gICAgICBsb2FkZWQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHBheXBhbExvYWRlZCA9ICEhKHdpbmRvdyBhcyBhbnkpLl9fcHB0bUxvYWRlZFdpdGhOb0NvbnRlbnRcclxuICAgIGlmKHBheXBhbExvYWRlZCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRlZDogdHJ1ZX0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwYXltZW50KGRhdGEsIGFjdGlvbnMpOiB2b2lkIHtcclxuICAgIHJldHVybiBhY3Rpb25zLnBheW1lbnQuY3JlYXRlKHtcclxuICAgICAgdHJhbnNhY3Rpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYW1vdW50OiB7XHJcbiAgICAgICAgICAgIHRvdGFsOiB0aGlzLnByb3BzLmFtb3VudCxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHRoaXMucHJvcHMuY3VycmVuY3lcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25BdXRob3JpemUoZGF0YSwgYWN0aW9ucyk6IHZvaWQge1xyXG4gICAgcmV0dXJuIGFjdGlvbnMucGF5bWVudC5leGVjdXRlKClcclxuICAgICAgLnRoZW4oKHJlczogUGF5UGFsUGF5bWVudERhdGEpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHRoaXMucHJvcHMub25TdWNjZXNzKHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkZWQgJiYgKFxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29tbWl0PXt0cnVlfVxyXG4gICAgICAgIGVudj17dGhpcy5wcm9wcy5lbnZ9XHJcbiAgICAgICAgY2xpZW50PXt7XHJcbiAgICAgICAgICBzYW5kYm94OiB0aGlzLnByb3BzLnNhbmRib3hJRCxcclxuICAgICAgICAgIHByb2R1Y3Rpb246IHRoaXMucHJvcHMucHJvZHVjdGlvbklEXHJcbiAgICAgICAgfX1cclxuICAgICAgICBwYXltZW50PXt0aGlzLnBheW1lbnR9XHJcbiAgICAgICAgb25BdXRob3JpemU9e3RoaXMub25BdXRob3JpemV9XHJcbiAgICAgICAgYW1vdW50PXt0aGlzLnByb3BzLmFtb3VudH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQYXlQYWxCdXR0b24gfSJdfQ==
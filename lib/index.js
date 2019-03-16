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
      if (this.props.onSuccess) {
        this.props.onSuccess(data);
      }

      return actions.payment.execute();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiQnV0dG9uIiwicGF5cGFsIiwiZHJpdmVyIiwiUmVhY3QiLCJSZWFjdERPTSIsIlBheVBhbEJ1dHRvbiIsInByb3BzIiwib25BdXRob3JpemUiLCJiaW5kIiwicGF5bWVudCIsImRhdGEiLCJhY3Rpb25zIiwiY3JlYXRlIiwidHJhbnNhY3Rpb25zIiwiYW1vdW50IiwidG90YWwiLCJjdXJyZW5jeSIsIm9uU3VjY2VzcyIsImV4ZWN1dGUiLCJlbnYiLCJzYW5kYm94Iiwic2FuZGJveElEIiwicHJvZHVjdGlvbiIsInByb2R1Y3Rpb25JRCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyx3QkFBT0QsTUFBUCxDQUFjRSxNQUFkLENBQXFCLE9BQXJCLEVBQThCO0FBQUVDLEVBQUFBLEtBQUssRUFBTEEsY0FBRjtBQUFTQyxFQUFBQSxRQUFRLEVBQVJBO0FBQVQsQ0FBOUIsQ0FBZjtBQUVBOzs7QUF3QkE7SUFDTUMsWTs7Ozs7QUFDSix3QkFBWUMsS0FBWixFQUFzQztBQUFBOztBQUFBOztBQUNwQyxzRkFBTUEsS0FBTjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsK0JBQW5CO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUQsSUFBYiwrQkFBZjtBQUhvQztBQUlyQzs7Ozs0QkFFT0UsSSxFQUFXQyxPLEVBQW9CO0FBQ3JDLGFBQU9BLE9BQU8sQ0FBQ0YsT0FBUixDQUFnQkcsTUFBaEIsQ0FBdUI7QUFDNUJDLFFBQUFBLFlBQVksRUFBRSxDQUNaO0FBQ0VDLFVBQUFBLE1BQU0sRUFBRTtBQUNOQyxZQUFBQSxLQUFLLEVBQUUsS0FBS1QsS0FBTCxDQUFXUSxNQURaO0FBRU5FLFlBQUFBLFFBQVEsRUFBRSxLQUFLVixLQUFMLENBQVdVO0FBRmY7QUFEVixTQURZO0FBRGMsT0FBdkIsQ0FBUDtBQVVEOzs7Z0NBRVdOLEksRUFBcUJDLE8sRUFBb0I7QUFDbkQsVUFBSSxLQUFLTCxLQUFMLENBQVdXLFNBQWYsRUFBMEI7QUFDeEIsYUFBS1gsS0FBTCxDQUFXVyxTQUFYLENBQXFCUCxJQUFyQjtBQUNEOztBQUNELGFBQU9DLE9BQU8sQ0FBQ0YsT0FBUixDQUFnQlMsT0FBaEIsRUFBUDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFLDZCQUFDLE1BQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRSxJQURWO0FBRUUsUUFBQSxHQUFHLEVBQUUsS0FBS1osS0FBTCxDQUFXYSxHQUZsQjtBQUdFLFFBQUEsTUFBTSxFQUFFO0FBQ05DLFVBQUFBLE9BQU8sRUFBRSxLQUFLZCxLQUFMLENBQVdlLFNBRGQ7QUFFTkMsVUFBQUEsVUFBVSxFQUFFLEtBQUtoQixLQUFMLENBQVdpQjtBQUZqQixTQUhWO0FBT0UsUUFBQSxPQUFPLEVBQUUsS0FBS2QsT0FQaEI7QUFRRSxRQUFBLFdBQVcsRUFBRSxLQUFLRixXQVJwQjtBQVNFLFFBQUEsTUFBTSxFQUFFLEtBQUtELEtBQUwsQ0FBV1E7QUFUckIsUUFERjtBQWFEOzs7O0VBekN3QlgsZUFBTXFCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHBheXBhbCBmcm9tICdwYXlwYWwtY2hlY2tvdXQnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHBheXBhbC5CdXR0b24uZHJpdmVyKCdyZWFjdCcsIHsgUmVhY3QsIFJlYWN0RE9NIH0pO1xyXG5cclxuLyoqIFR5cGVzICovXHJcbmV4cG9ydCB0eXBlIE9iaiA9IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IGFueVtdIH1cclxuZXhwb3J0IHR5cGUgRW52U3RyaW5nID0gJ3NhbmRib3gnIHwgJ3Byb2R1Y3Rpb24nXHJcbmV4cG9ydCB0eXBlIEludGVudFN0cmluZyA9ICdzYWxlJyB8ICdwdXJjaGFzZSc7XHJcbmV4cG9ydCB0eXBlIFN0YXRlU3RyaW5nID0gJ2FwcHJvdmVkJyB8ICdkZWNsaW5lZCc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudE9iamVjdCB7XHJcbiAgY2FydDogc3RyaW5nO1xyXG4gIGNyZWF0ZV90aW1lOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBpbnRlbnQ6IEludGVudFN0cmluZztcclxuICBwYXllcjogT2JqO1xyXG4gIHN0YXRlOiBTdGF0ZVN0cmluZztcclxuXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQYXlQYWxCdXR0b25Qcm9wcyB7XHJcbiAgZW52OiBFbnZTdHJpbmc7XHJcbiAgc2FuZGJveElEPzogc3RyaW5nO1xyXG4gIHByb2R1Y3Rpb25JRD86IHN0cmluZztcclxuICBhbW91bnQ6IG51bWJlcjtcclxuICBjdXJyZW5jeTogc3RyaW5nO1xyXG4gIG9uU3VjY2Vzcz86IChyZXNwb25zZTogUGF5bWVudE9iamVjdCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcbi8qKiBDb21wb25lbnQgKi9cclxuY2xhc3MgUGF5UGFsQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFBheVBhbEJ1dHRvblByb3BzPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFBheVBhbEJ1dHRvblByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMub25BdXRob3JpemUgPSB0aGlzLm9uQXV0aG9yaXplLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnBheW1lbnQgPSB0aGlzLnBheW1lbnQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHBheW1lbnQoZGF0YTogYW55LCBhY3Rpb25zOiBhbnkpOiB2b2lkIHtcclxuICAgIHJldHVybiBhY3Rpb25zLnBheW1lbnQuY3JlYXRlKHtcclxuICAgICAgdHJhbnNhY3Rpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYW1vdW50OiB7XHJcbiAgICAgICAgICAgIHRvdGFsOiB0aGlzLnByb3BzLmFtb3VudCxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHRoaXMucHJvcHMuY3VycmVuY3lcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25BdXRob3JpemUoZGF0YTogUGF5bWVudE9iamVjdCwgYWN0aW9uczogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblN1Y2Nlc3MpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblN1Y2Nlc3MoZGF0YSlcclxuICAgIH1cclxuICAgIHJldHVybiBhY3Rpb25zLnBheW1lbnQuZXhlY3V0ZSgpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29tbWl0PXt0cnVlfVxyXG4gICAgICAgIGVudj17dGhpcy5wcm9wcy5lbnZ9XHJcbiAgICAgICAgY2xpZW50PXt7XHJcbiAgICAgICAgICBzYW5kYm94OiB0aGlzLnByb3BzLnNhbmRib3hJRCxcclxuICAgICAgICAgIHByb2R1Y3Rpb246IHRoaXMucHJvcHMucHJvZHVjdGlvbklEXHJcbiAgICAgICAgfX1cclxuICAgICAgICBwYXltZW50PXt0aGlzLnBheW1lbnR9XHJcbiAgICAgICAgb25BdXRob3JpemU9e3RoaXMub25BdXRob3JpemV9XHJcbiAgICAgICAgYW1vdW50PXt0aGlzLnByb3BzLmFtb3VudH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQYXlQYWxCdXR0b24gfSJdfQ==
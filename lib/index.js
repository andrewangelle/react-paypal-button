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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiQnV0dG9uIiwicGF5cGFsIiwiZHJpdmVyIiwiUmVhY3QiLCJSZWFjdERPTSIsIlBheVBhbEJ1dHRvbiIsInByb3BzIiwib25BdXRob3JpemUiLCJiaW5kIiwicGF5bWVudCIsImRhdGEiLCJhY3Rpb25zIiwiY3JlYXRlIiwidHJhbnNhY3Rpb25zIiwiYW1vdW50IiwidG90YWwiLCJjdXJyZW5jeSIsImV4ZWN1dGUiLCJ0aGVuIiwicmVzIiwib25TdWNjZXNzIiwiZW52Iiwic2FuZGJveCIsInNhbmRib3hJRCIsInByb2R1Y3Rpb24iLCJwcm9kdWN0aW9uSUQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0Msd0JBQU9ELE1BQVAsQ0FBY0UsTUFBZCxDQUFxQixPQUFyQixFQUE4QjtBQUFFQyxFQUFBQSxLQUFLLEVBQUxBLGNBQUY7QUFBU0MsRUFBQUEsUUFBUSxFQUFSQTtBQUFULENBQTlCLENBQWY7QUFFQTs7O0FBbURBO0lBQ01DLFk7Ozs7O0FBQ0osd0JBQVlDLEtBQVosRUFBc0M7QUFBQTs7QUFBQTs7QUFDcEMsc0ZBQU1BLEtBQU47QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLCtCQUFuQjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsK0JBQWY7QUFIb0M7QUFJckM7Ozs7NEJBRU9FLEksRUFBTUMsTyxFQUFlO0FBQzNCLGFBQU9BLE9BQU8sQ0FBQ0YsT0FBUixDQUFnQkcsTUFBaEIsQ0FBdUI7QUFDNUJDLFFBQUFBLFlBQVksRUFBRSxDQUNaO0FBQ0VDLFVBQUFBLE1BQU0sRUFBRTtBQUNOQyxZQUFBQSxLQUFLLEVBQUUsS0FBS1QsS0FBTCxDQUFXUSxNQURaO0FBRU5FLFlBQUFBLFFBQVEsRUFBRSxLQUFLVixLQUFMLENBQVdVO0FBRmY7QUFEVixTQURZO0FBRGMsT0FBdkIsQ0FBUDtBQVVEOzs7Z0NBRVdOLEksRUFBTUMsTyxFQUFlO0FBQUE7O0FBQy9CLGFBQU9BLE9BQU8sQ0FBQ0YsT0FBUixDQUFnQlEsT0FBaEIsR0FDSkMsSUFESSxDQUNDLFVBQUNDLEdBQUQsRUFBd0I7QUFDNUIsWUFBSSxNQUFJLENBQUNiLEtBQUwsQ0FBV2MsU0FBZixFQUEwQjtBQUN4QixVQUFBLE1BQUksQ0FBQ2QsS0FBTCxDQUFXYyxTQUFYLENBQXFCRCxHQUFyQjtBQUNEO0FBQ0YsT0FMSSxDQUFQO0FBTUQ7Ozs2QkFFUTtBQUNQLGFBQ0UsNkJBQUMsTUFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFLElBRFY7QUFFRSxRQUFBLEdBQUcsRUFBRSxLQUFLYixLQUFMLENBQVdlLEdBRmxCO0FBR0UsUUFBQSxNQUFNLEVBQUU7QUFDTkMsVUFBQUEsT0FBTyxFQUFFLEtBQUtoQixLQUFMLENBQVdpQixTQURkO0FBRU5DLFVBQUFBLFVBQVUsRUFBRSxLQUFLbEIsS0FBTCxDQUFXbUI7QUFGakIsU0FIVjtBQU9FLFFBQUEsT0FBTyxFQUFFLEtBQUtoQixPQVBoQjtBQVFFLFFBQUEsV0FBVyxFQUFFLEtBQUtGLFdBUnBCO0FBU0UsUUFBQSxNQUFNLEVBQUUsS0FBS0QsS0FBTCxDQUFXUTtBQVRyQixRQURGO0FBYUQ7Ozs7RUEzQ3dCWCxlQUFNdUIsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGJhYmVsL3BvbHlmaWxsJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcGF5cGFsIGZyb20gJ3BheXBhbC1jaGVja291dCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuY29uc3QgQnV0dG9uID0gcGF5cGFsLkJ1dHRvbi5kcml2ZXIoJ3JlYWN0JywgeyBSZWFjdCwgUmVhY3RET00gfSk7XHJcblxyXG4vKiogVHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgRW52U3RyaW5nID0gJ3NhbmRib3gnIHwgJ3Byb2R1Y3Rpb24nXHJcbmV4cG9ydCB0eXBlIEludGVudFN0cmluZyA9ICdzYWxlJyB8ICdwdXJjaGFzZSc7XHJcbmV4cG9ydCB0eXBlIFN0YXRlU3RyaW5nID0gJ2FwcHJvdmVkJyB8ICdkZWNsaW5lZCc7XHJcbmV4cG9ydCB0eXBlIFBheWVyU3RhdHVzID0gJ1VOVkVSSUZJRUQnIHwgJ1ZFUklGSUVEJztcclxuZXhwb3J0IHR5cGUgUGF5bWVudE1ldGhvZCA9ICdwYXlwYWwnIHwgJ2NyZWRpdCcgfCAnZGViaXQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaGlwcGluZ0FkZHJlc3Mge1xyXG4gIGNpdHk6IHN0cmluZztcclxuICBjb3VudHJ5X2NvZGU6IHN0cmluZztcclxuICBsaW5lMTogc3RyaW5nO1xyXG4gIHBvc3RhbF9jb2RlOiBzdHJpbmdcclxuICByZWNpcGllbnRfbmFtZTogc3RyaW5nO1xyXG4gIHN0YXRlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQYXllckluZm8ge1xyXG4gIGNvdW50cnlfY29kZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgZmlyc3RfbmFtZTogc3RyaW5nO1xyXG4gIGxhc3RfbmFtZTogc3RyaW5nO1xyXG4gIG1pZGRsZV9uYW1lOiBzdHJpbmc7XHJcbiAgcGF5ZXJfaWQ6IHN0cmluZztcclxuICBzaGlwcGluZ19hZGRyZXNzOiBTaGlwcGluZ0FkZHJlc3M7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGF5ZXIge1xyXG4gIHBheWVyX2luZm86IFBheWVySW5mbztcclxuICBwYXltZW50X21ldGhvZDogUGF5bWVudE1ldGhvZDtcclxuICBzdGF0dXM6IFBheWVyU3RhdHVzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBheW1lbnRPYmplY3Qge1xyXG4gIGNhcnQ6IHN0cmluZztcclxuICBjcmVhdGVfdGltZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgaW50ZW50OiBJbnRlbnRTdHJpbmc7XHJcbiAgcGF5ZXI6IFBheWVyO1xyXG4gIHN0YXRlOiBTdGF0ZVN0cmluZztcclxuICB0cmFuc2FjdGlvbnM6IGFueVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBheVBhbEJ1dHRvblByb3BzIHtcclxuICBlbnY6IEVudlN0cmluZztcclxuICBzYW5kYm94SUQ/OiBzdHJpbmc7XHJcbiAgcHJvZHVjdGlvbklEPzogc3RyaW5nO1xyXG4gIGFtb3VudDogbnVtYmVyO1xyXG4gIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBQYXltZW50T2JqZWN0KSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuLyoqIENvbXBvbmVudCAqL1xyXG5jbGFzcyBQYXlQYWxCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UGF5UGFsQnV0dG9uUHJvcHM+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUGF5UGFsQnV0dG9uUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5vbkF1dGhvcml6ZSA9IHRoaXMub25BdXRob3JpemUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucGF5bWVudCA9IHRoaXMucGF5bWVudC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcGF5bWVudChkYXRhLCBhY3Rpb25zKTogdm9pZCB7XHJcbiAgICByZXR1cm4gYWN0aW9ucy5wYXltZW50LmNyZWF0ZSh7XHJcbiAgICAgIHRyYW5zYWN0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGFtb3VudDoge1xyXG4gICAgICAgICAgICB0b3RhbDogdGhpcy5wcm9wcy5hbW91bnQsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiB0aGlzLnByb3BzLmN1cnJlbmN5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQXV0aG9yaXplKGRhdGEsIGFjdGlvbnMpOiB2b2lkIHtcclxuICAgIHJldHVybiBhY3Rpb25zLnBheW1lbnQuZXhlY3V0ZSgpXHJcbiAgICAgIC50aGVuKChyZXM6IFBheW1lbnRPYmplY3QpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHRoaXMucHJvcHMub25TdWNjZXNzKHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29tbWl0PXt0cnVlfVxyXG4gICAgICAgIGVudj17dGhpcy5wcm9wcy5lbnZ9XHJcbiAgICAgICAgY2xpZW50PXt7XHJcbiAgICAgICAgICBzYW5kYm94OiB0aGlzLnByb3BzLnNhbmRib3hJRCxcclxuICAgICAgICAgIHByb2R1Y3Rpb246IHRoaXMucHJvcHMucHJvZHVjdGlvbklEXHJcbiAgICAgICAgfX1cclxuICAgICAgICBwYXltZW50PXt0aGlzLnBheW1lbnR9XHJcbiAgICAgICAgb25BdXRob3JpemU9e3RoaXMub25BdXRob3JpemV9XHJcbiAgICAgICAgYW1vdW50PXt0aGlzLnByb3BzLmFtb3VudH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQYXlQYWxCdXR0b24gfSJdfQ==
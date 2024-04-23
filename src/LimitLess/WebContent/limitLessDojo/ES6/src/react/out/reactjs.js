'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Alert = require('react-bootstrap/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Example() {
  return _react2.default.createElement(
    _Alert2.default,
    { dismissible: true, variant: 'danger' },
    _react2.default.createElement(
      _Alert2.default.Heading,
      null,
      'Oh snap! You got an error!'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Change this and that and try again.'
    )
  );
}
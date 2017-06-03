'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diff = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildDate = function buildDate(date) {
  return (0, _moment2.default)(date, 'YYYY-MM-DD');
};

var diff = exports.diff = (0, _ramda.curry)(function (start, end) {
  return buildDate(end).diff(buildDate(start), 'days');
});

exports.default = {
  diff: diff
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9kYXRlLmpzIl0sIm5hbWVzIjpbImJ1aWxkRGF0ZSIsImRhdGUiLCJkaWZmIiwic3RhcnQiLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsWUFBWSxTQUFaQSxTQUFZO0FBQUEsU0FBUSxzQkFBT0MsSUFBUCxFQUFhLFlBQWIsQ0FBUjtBQUFBLENBQWxCOztBQUVPLElBQU1DLHNCQUFPLGtCQUFNLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFNBQ3hCSixVQUFVSSxHQUFWLEVBQWVGLElBQWYsQ0FBb0JGLFVBQVVHLEtBQVYsQ0FBcEIsRUFBc0MsTUFBdEMsQ0FEd0I7QUFBQSxDQUFOLENBQWI7O2tCQUlRO0FBQ2JEO0FBRGEsQyIsImZpbGUiOiJkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBjdXJyeSB9IGZyb20gJ3JhbWRhJ1xuXG5jb25zdCBidWlsZERhdGUgPSBkYXRlID0+IG1vbWVudChkYXRlLCAnWVlZWS1NTS1ERCcpXG5cbmV4cG9ydCBjb25zdCBkaWZmID0gY3VycnkoKHN0YXJ0LCBlbmQpID0+IFxuICBidWlsZERhdGUoZW5kKS5kaWZmKGJ1aWxkRGF0ZShzdGFydCksICdkYXlzJylcbilcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkaWZmXG59XG4iXX0=
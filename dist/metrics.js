'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metrics = undefined;

var _leadtime = require('./leadtime');

var _leadtime2 = _interopRequireDefault(_leadtime);

var _cycletime = require('./cycletime');

var _cycletime2 = _interopRequireDefault(_cycletime);

var _cfd = require('./cfd');

var _cfd2 = _interopRequireDefault(_cfd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var metrics = exports.metrics = function metrics(stories) {
  return {
    leadtime: (0, _leadtime2.default)(stories),
    cycletime: (0, _cycletime2.default)(stories),
    cfd: (0, _cfd2.default)(stories)
  };
};
exports.default = metrics;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9tZXRyaWNzLmpzIl0sIm5hbWVzIjpbIm1ldHJpY3MiLCJzdG9yaWVzIiwibGVhZHRpbWUiLCJjeWNsZXRpbWUiLCJjZmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLDRCQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsT0FBRCxFQUFhO0FBQ2xDLFNBQU87QUFDTEMsY0FBVSx3QkFBU0QsT0FBVCxDQURMO0FBRUxFLGVBQVcseUJBQVVGLE9BQVYsQ0FGTjtBQUdMRyxTQUFLLG1CQUFJSCxPQUFKO0FBSEEsR0FBUDtBQU1ELENBUE07a0JBUVFELE8iLCJmaWxlIjoibWV0cmljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsZWFkdGltZSBmcm9tICcuL2xlYWR0aW1lJ1xuaW1wb3J0IGN5Y2xldGltZSBmcm9tICcuL2N5Y2xldGltZSdcbmltcG9ydCBjZmQgZnJvbSAnLi9jZmQnXG5cbmV4cG9ydCBjb25zdCBtZXRyaWNzID0gKHN0b3JpZXMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsZWFkdGltZTogbGVhZHRpbWUoc3RvcmllcyksXG4gICAgY3ljbGV0aW1lOiBjeWNsZXRpbWUoc3RvcmllcyksXG4gICAgY2ZkOiBjZmQoc3RvcmllcyksXG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgbWV0cmljc1xuIl19
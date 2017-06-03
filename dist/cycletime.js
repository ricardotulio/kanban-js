'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _average = require('./average');

var _average2 = _interopRequireDefault(_average);

var _date = require('./date');

var _number = require('./number');

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cycletime = function cycletime(story) {
  return (0, _date.diff)(story.started, story.finished);
};

exports.default = (0, _ramda.pipe)((0, _ramda.map)(cycletime), _average2.default, (0, _number.toFixed)(_ramda.__, 2));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9jeWNsZXRpbWUuanMiXSwibmFtZXMiOlsiY3ljbGV0aW1lIiwic3RvcnkiLCJzdGFydGVkIiwiZmluaXNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFNQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQ2hCLGdCQUFLQSxNQUFNQyxPQUFYLEVBQW9CRCxNQUFNRSxRQUExQixDQURnQjtBQUFBLENBQWxCOztrQkFHZSxpQkFDYixnQkFBSUgsU0FBSixDQURhLHFCQUdiLGdDQUFZLENBQVosQ0FIYSxDIiwiZmlsZSI6ImN5Y2xldGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdmVyYWdlIGZyb20gJy4vYXZlcmFnZSdcbmltcG9ydCB7IGRpZmYgfSBmcm9tICcuL2RhdGUnXG5pbXBvcnQgeyB0b0ZpeGVkIH0gZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBcbiAgX18sXG4gIG1hcCxcbiAgcGlwZSxcbn0gZnJvbSAncmFtZGEnXG5cbmNvbnN0IGN5Y2xldGltZSA9IChzdG9yeSkgPT5cbiAgZGlmZihzdG9yeS5zdGFydGVkLCBzdG9yeS5maW5pc2hlZClcblxuZXhwb3J0IGRlZmF1bHQgcGlwZShcbiAgbWFwKGN5Y2xldGltZSksXG4gIGF2ZXJhZ2UsXG4gIHRvRml4ZWQoX18sIDIpLFxuKVxuIl19
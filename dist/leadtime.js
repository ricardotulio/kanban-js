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

var leadtime = function leadtime(story) {
  return (0, _date.diff)(story.created, story.finished);
};

exports.default = (0, _ramda.pipe)((0, _ramda.map)(leadtime), _average2.default, (0, _number.toFixed)(_ramda.__, 2));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9sZWFkdGltZS5qcyJdLCJuYW1lcyI6WyJsZWFkdGltZSIsInN0b3J5IiwiY3JlYXRlZCIsImZpbmlzaGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBTUEsSUFBTUEsV0FBVyxTQUFYQSxRQUFXO0FBQUEsU0FDZixnQkFBS0MsTUFBTUMsT0FBWCxFQUFvQkQsTUFBTUUsUUFBMUIsQ0FEZTtBQUFBLENBQWpCOztrQkFHZSxpQkFDYixnQkFBSUgsUUFBSixDQURhLHFCQUdiLGdDQUFZLENBQVosQ0FIYSxDIiwiZmlsZSI6ImxlYWR0aW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF2ZXJhZ2UgZnJvbSAnLi9hdmVyYWdlJ1xuaW1wb3J0IHsgZGlmZiB9IGZyb20gJy4vZGF0ZSdcbmltcG9ydCB7IHRvRml4ZWQgfSBmcm9tICcuL251bWJlcidcbmltcG9ydCB7XG4gIG1hcCxcbiAgcGlwZSxcbiAgX18sXG59IGZyb20gJ3JhbWRhJ1xuXG5jb25zdCBsZWFkdGltZSA9IHN0b3J5ID0+IFxuICBkaWZmKHN0b3J5LmNyZWF0ZWQsIHN0b3J5LmZpbmlzaGVkKVxuXG5leHBvcnQgZGVmYXVsdCBwaXBlKFxuICBtYXAobGVhZHRpbWUpLFxuICBhdmVyYWdlLFxuICB0b0ZpeGVkKF9fLCAyKVxuKVxuIl19
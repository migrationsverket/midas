(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8792],{

/***/ 97990:
/***/ ((module) => {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 90858:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isarray = __webpack_require__(97990)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = prefix || defaultDelimiter
    var pattern = capture || group
    var prevText = prefix || (typeof tokens[tokens.length - 1] === 'string' ? tokens[tokens.length - 1] : '')

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : restrictBacktrack(delimiter, prevText))
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

function restrictBacktrack(delimiter, prevText) {
  if (!prevText || prevText.indexOf(delimiter) > -1) {
    return '[^' + escapeString(delimiter) + ']+?'
  }

  return escapeString(prevText) + '|(?:(?!' + escapeString(prevText) + ')[^' + escapeString(delimiter) + '])+?'
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ 77715:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 41191:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(77715);
} else {}


/***/ }),

/***/ 35527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B6: () => (/* binding */ matchPath),
/* harmony export */   Ix: () => (/* binding */ Router),
/* harmony export */   W6: () => (/* binding */ useHistory),
/* harmony export */   XZ: () => (/* binding */ context),
/* harmony export */   dO: () => (/* binding */ Switch),
/* harmony export */   qh: () => (/* binding */ Route),
/* harmony export */   zy: () => (/* binding */ useLocation)
/* harmony export */ });
/* unused harmony exports MemoryRouter, Prompt, Redirect, StaticRouter, __HistoryContext, generatePath, useParams, useRouteMatch, withRouter */
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31513);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11561);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58168);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90858);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41191);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98587);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4146);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);












var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== "undefined" // 'global proper'
? // eslint-disable-next-line no-undef
globalThis : typeof window !== "undefined" ? window // Browser
: typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g // node.js
: {};

function getUniqueId() {
  var key = "__global_unique_id__";
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
} // Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is


function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // eslint-disable-next-line no-self-compare
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = "__create-react-context-" + getUniqueId() + "__";

  var Provider = /*#__PURE__*/function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Provider, _React$Component);

    function Provider() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === "function" ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object).isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_React$Component2) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Consumer, _React$Component2);

    function Consumer() {
      var _this2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this2 = _React$Component2.call.apply(_React$Component2, [this].concat(args)) || this;
      _this2.observedBits = void 0;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object), _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

// MIT License
var createContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext || createReactContext;

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = createContext();
  context.displayName = name;
  return context;
};

var historyContext = /*#__PURE__*/createNamedContext("Router-History");

var context = /*#__PURE__*/createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var Router = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        _this._pendingLocation = location;
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._isMounted = true;

    if (this.unlisten) {
      // Any pre-mount location changes have been captured at
      // this point, so unregister the listener.
      this.unlisten();
    }

    if (!this.props.staticContext) {
      this.unlisten = this.props.history.listen(function (location) {
        if (_this2._isMounted) {
          _this2.setState({
            location: location
          });
        }
      });
    }

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_6__/* .createMemoryHistory */ .sC)(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

var Lifecycle = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : invariant(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return /*#__PURE__*/React.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (false) { var messageType; }

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = pathToRegexp.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : invariant(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return /*#__PURE__*/React.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, _extends({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (false) {}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_1___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   false ? 0 : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  false ? 0 : children(props) : children : component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  false ? 0 : children(props) : null);
    });
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : (0,history__WEBPACK_IMPORTED_MODULE_6__/* .createPath */ .AO)(location);
}

function staticHandler(methodName) {
  return function () {
      false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(false) ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_6__/* .createLocation */ .yJ)(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_6__/* .createLocation */ .yJ)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(_this.props.children, function (child) {
        if (match == null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutPropertiesLoose(props, ["wrappedComponentRef"]);

    return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : invariant(false) : void 0;
      return /*#__PURE__*/React.createElement(Component, _extends({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (false) {}

  return hoistStatics(C, Component);
}

var useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext;
function useHistory() {
  if (false) {}

  return useContext(historyContext);
}
function useLocation() {
  if (false) {}

  return useContext(context).location;
}
function useParams() {
  if (false) {}

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (false) {}

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (false) { var secondaryBuildName, initialBuildName, buildNames, key, global$1; }


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ 93806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ routes)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-loadable/lib/index.js
var lib = __webpack_require__(53259);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./apps/docs/.docusaurus/routesChunkNames.json
var routesChunkNames = __webpack_require__(71493);
;// ./apps/docs/.docusaurus/registry.js
/* harmony default export */ const registry = ({"03dcfce2":[function(){return Promise.all(/* import() | 03dcfce2 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(4500), __webpack_require__.e(7845), __webpack_require__.e(6562), __webpack_require__.e(1361), __webpack_require__.e(3207)]).then(__webpack_require__.bind(__webpack_require__, 11668));},"@site/docs/components/date-picker.mdx",/*require.resolve*/(11668)],"0743e332":[function(){return Promise.all(/* import() | 0743e332 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(396)]).then(__webpack_require__.bind(__webpack_require__, 6347));},"@site/docs/components/button.mdx",/*require.resolve*/(6347)],"0ab4808b":[function(){return Promise.all(/* import() | 0ab4808b */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(1982)]).then(__webpack_require__.bind(__webpack_require__, 61443));},"@site/docs/components/link-button.mdx",/*require.resolve*/(61443)],"0b81fcdc":[function(){return Promise.all(/* import() | 0b81fcdc */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(1926), __webpack_require__.e(7740), __webpack_require__.e(4125), __webpack_require__.e(6530)]).then(__webpack_require__.bind(__webpack_require__, 19044));},"@site/blog/release13.mdx",/*require.resolve*/(19044)],"0de3b39b":[function(){return Promise.all(/* import() | 0de3b39b */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8915)]).then(__webpack_require__.bind(__webpack_require__, 64931));},"@site/docs/design-patterns/error-message.mdx",/*require.resolve*/(64931)],"1039eb1c":[function(){return Promise.all(/* import() | 1039eb1c */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(6562), __webpack_require__.e(9046), __webpack_require__.e(1926), __webpack_require__.e(7740), __webpack_require__.e(3061), __webpack_require__.e(3293)]).then(__webpack_require__.bind(__webpack_require__, 13214));},"@site/blog/release15.mdx?truncated=true",/*require.resolve*/(13214)],"10aea237":[function(){return Promise.all(/* import() | 10aea237 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(7109)]).then(__webpack_require__.bind(__webpack_require__, 64148));},"@site/docs/get-started/index.mdx",/*require.resolve*/(64148)],"17896441":[function(){return Promise.all(/* import() | 17896441 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(6562), __webpack_require__.e(9046), __webpack_require__.e(1926), __webpack_require__.e(7740), __webpack_require__.e(3061), __webpack_require__.e(7677), __webpack_require__.e(4413), __webpack_require__.e(7686), __webpack_require__.e(3917), __webpack_require__.e(6325), __webpack_require__.e(8625), __webpack_require__.e(5186), __webpack_require__.e(575), __webpack_require__.e(8401)]).then(__webpack_require__.bind(__webpack_require__, 30575));},"@theme/DocItem",/*require.resolve*/(30575)],"1a63ac3d":[function(){return Promise.all(/* import() | 1a63ac3d */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(3917), __webpack_require__.e(645)]).then(__webpack_require__.bind(__webpack_require__, 50671));},"@site/docs/components/tabs.mdx",/*require.resolve*/(50671)],"1accb189":[function(){return Promise.all(/* import() | 1accb189 */[__webpack_require__.e(2076), __webpack_require__.e(5333)]).then(__webpack_require__.bind(__webpack_require__, 76789));},"@site/docs/get-started/design/index.mdx",/*require.resolve*/(76789)],"1c01e723":[function(){return Promise.all(/* import() | 1c01e723 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(7)]).then(__webpack_require__.bind(__webpack_require__, 76201));},"@site/docs/design-patterns/index.mdx",/*require.resolve*/(76201)],"1c72337b":[function(){return Promise.all(/* import() | 1c72337b */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(1926), __webpack_require__.e(5605)]).then(__webpack_require__.bind(__webpack_require__, 57075));},"@site/docs/components/checkbox.mdx",/*require.resolve*/(57075)],"1f391b9e":[function(){return Promise.all(/* import() | 1f391b9e */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(6562), __webpack_require__.e(9046), __webpack_require__.e(1926), __webpack_require__.e(7740), __webpack_require__.e(3061), __webpack_require__.e(7677), __webpack_require__.e(4413), __webpack_require__.e(7686), __webpack_require__.e(3917), __webpack_require__.e(6325), __webpack_require__.e(8625), __webpack_require__.e(5186), __webpack_require__.e(6061)]).then(__webpack_require__.bind(__webpack_require__, 67973));},"@theme/MDXPage",/*require.resolve*/(67973)],"30ff67c2":[function(){return Promise.all(/* import() | 30ff67c2 */[__webpack_require__.e(2076), __webpack_require__.e(532)]).then(__webpack_require__.bind(__webpack_require__, 46102));},"@site/docs/basics/typography.mdx",/*require.resolve*/(46102)],"36994c47":[function(){return __webpack_require__.e(/* import() | 36994c47 */ 9858).then(__webpack_require__.t.bind(__webpack_require__, 86741, 19));},"@generated/docusaurus-plugin-content-blog/default/__plugin.json",/*require.resolve*/(86741)],"39e2c9b3":[function(){return Promise.all(/* import() | 39e2c9b3 */[__webpack_require__.e(2076), __webpack_require__.e(9895)]).then(__webpack_require__.bind(__webpack_require__, 46850));},"@site/docs/basics/design-dna.mdx",/*require.resolve*/(46850)],"3c9a9f60":[function(){return Promise.all(/* import() | 3c9a9f60 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(2488)]).then(__webpack_require__.bind(__webpack_require__, 74082));},"@site/docs/design-patterns/buttons-and-links.mdx",/*require.resolve*/(74082)],"4033e3a4":[function(){return Promise.all(/* import() | 4033e3a4 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(6238)]).then(__webpack_require__.bind(__webpack_require__, 30099));},"@site/docs/components/textfield.mdx",/*require.resolve*/(30099)],"51241619":[function(){return Promise.all(/* import() | 51241619 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(6562), __webpack_require__.e(9046), __webpack_require__.e(7677), __webpack_require__.e(4413), __webpack_require__.e(1361), __webpack_require__.e(50), __webpack_require__.e(2980)]).then(__webpack_require__.bind(__webpack_require__, 78747));},"@site/blog/release12.mdx?truncated=true",/*require.resolve*/(78747)],"55636239":[function(){return Promise.all(/* import() | 55636239 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(7048)]).then(__webpack_require__.bind(__webpack_require__, 16337));},"@site/docs/components/index.mdx",/*require.resolve*/(16337)],"55843d4b":[function(){return Promise.all(/* import() | 55843d4b */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8506)]).then(__webpack_require__.bind(__webpack_require__, 76507));},"@site/docs/basics/language.mdx",/*require.resolve*/(76507)],"560704f0":[function(){return Promise.all(/* import() | 560704f0 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(4347)]).then(__webpack_require__.bind(__webpack_require__, 16208));},"@site/docs/design-patterns/focus.mdx",/*require.resolve*/(16208)],"5e4dc735":[function(){return Promise.all(/* import() | 5e4dc735 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(3603)]).then(__webpack_require__.bind(__webpack_require__, 2153));},"@site/blog/release14.mdx?truncated=true",/*require.resolve*/(2153)],"5e95c892":[function(){return __webpack_require__.e(/* import() | 5e95c892 */ 9647).then(__webpack_require__.bind(__webpack_require__, 7121));},"@theme/DocsRoot",/*require.resolve*/(7121)],"5e9f5e1a":[function(){return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 27999));},"@generated/docusaurus.config",/*require.resolve*/(27999)],"5ec91daa":[function(){return __webpack_require__.e(/* import() | 5ec91daa */ 3384).then(__webpack_require__.t.bind(__webpack_require__, 37842, 19));},"@generated/docusaurus-plugin-content-blog/default/p/pr-preview-pr-180-blog-archive-dd0.json",/*require.resolve*/(37842)],"67e65cef":[function(){return Promise.all(/* import() | 67e65cef */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(3917), __webpack_require__.e(7310)]).then(__webpack_require__.bind(__webpack_require__, 47728));},"@site/docs/components/info-banner.mdx",/*require.resolve*/(47728)],"6dc9b720":[function(){return Promise.all(/* import() | 6dc9b720 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(9078)]).then(__webpack_require__.bind(__webpack_require__, 22384));},"@site/docs/components/flex.mdx",/*require.resolve*/(22384)],"7253645c":[function(){return Promise.all(/* import() | 7253645c */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(6562), __webpack_require__.e(9046), __webpack_require__.e(1926), __webpack_require__.e(7740), __webpack_require__.e(3061), __webpack_require__.e(7470)]).then(__webpack_require__.bind(__webpack_require__, 73873));},"@site/docs/components/multi-select.mdx",/*require.resolve*/(73873)],"726898a3":[function(){return Promise.all(/* import() | 726898a3 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(6853)]).then(__webpack_require__.bind(__webpack_require__, 60411));},"@site/blog/open-source.md",/*require.resolve*/(60411)],"75d8baba":[function(){return Promise.all(/* import() | 75d8baba */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(1926), __webpack_require__.e(7740), __webpack_require__.e(4125), __webpack_require__.e(6731)]).then(__webpack_require__.bind(__webpack_require__, 58464));},"@site/blog/release13.mdx?truncated=true",/*require.resolve*/(58464)],"79d23d0f":[function(){return Promise.all(/* import() | 79d23d0f */[__webpack_require__.e(2076), __webpack_require__.e(3290)]).then(__webpack_require__.bind(__webpack_require__, 48455));},"@site/docs/basics/icons.mdx",/*require.resolve*/(48455)],"7a8a5c4e":[function(){return Promise.all(/* import() | 7a8a5c4e */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(6445), __webpack_require__.e(1295)]).then(__webpack_require__.bind(__webpack_require__, 28092));},"@site/blog/release17.mdx?truncated=true",/*require.resolve*/(28092)],"7c303ed1":[function(){return Promise.all(/* import() | 7c303ed1 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(6562), __webpack_require__.e(9046), __webpack_require__.e(1926), __webpack_require__.e(7740), __webpack_require__.e(3061), __webpack_require__.e(7597)]).then(__webpack_require__.bind(__webpack_require__, 74277));},"@site/blog/release16.mdx",/*require.resolve*/(74277)],"7d405538":[function(){return Promise.all(/* import() | 7d405538 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(6505)]).then(__webpack_require__.bind(__webpack_require__, 22622));},"@site/docs/components/link.mdx",/*require.resolve*/(22622)],"7e6238c4":[function(){return Promise.all(/* import() | 7e6238c4 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(4500), __webpack_require__.e(6325), __webpack_require__.e(4595)]).then(__webpack_require__.bind(__webpack_require__, 90869));},"@site/docs/components/radio.mdx",/*require.resolve*/(90869)],"801f3f5d":[function(){return Promise.all(/* import() | 801f3f5d */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(6562), __webpack_require__.e(9046), __webpack_require__.e(1926), __webpack_require__.e(7677), __webpack_require__.e(7686), __webpack_require__.e(6325), __webpack_require__.e(5782)]).then(__webpack_require__.bind(__webpack_require__, 94493));},"@site/src/pages/playground.js",/*require.resolve*/(94493)],"814f3328":[function(){return __webpack_require__.e(/* import() | 814f3328 */ 7472).then(__webpack_require__.t.bind(__webpack_require__, 6370, 19));},"~blog/default/blog-post-list-prop-default.json",/*require.resolve*/(6370)],"8469219d":[function(){return Promise.all(/* import() | 8469219d */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(9196)]).then(__webpack_require__.bind(__webpack_require__, 93381));},"@site/docs/components/textarea.mdx",/*require.resolve*/(93381)],"870a3819":[function(){return Promise.all(/* import() | 870a3819 */[__webpack_require__.e(2076), __webpack_require__.e(2770)]).then(__webpack_require__.bind(__webpack_require__, 38379));},"@site/docs/dev/client-side-routing.mdx",/*require.resolve*/(38379)],"8ac150c6":[function(){return Promise.all(/* import() | 8ac150c6 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(4413), __webpack_require__.e(9758)]).then(__webpack_require__.bind(__webpack_require__, 352));},"@site/docs/components/search-field.mdx",/*require.resolve*/(352)],"90252242":[function(){return Promise.all(/* import() | 90252242 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(5521)]).then(__webpack_require__.bind(__webpack_require__, 39543));},"@site/docs/components/modal.mdx",/*require.resolve*/(39543)],"90377f5b":[function(){return Promise.all(/* import() | 90377f5b */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(1926), __webpack_require__.e(7740), __webpack_require__.e(4125), __webpack_require__.e(8116)]).then(__webpack_require__.bind(__webpack_require__, 85107));},"@site/docs/components/table.mdx",/*require.resolve*/(85107)],"93f782fd":[function(){return Promise.all(/* import() | 93f782fd */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(4730)]).then(__webpack_require__.bind(__webpack_require__, 45596));},"@site/docs/components/grid.mdx",/*require.resolve*/(45596)],"98db018c":[function(){return Promise.all(/* import() | 98db018c */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(6960)]).then(__webpack_require__.bind(__webpack_require__, 81161));},"@site/docs/components/spinner.mdx",/*require.resolve*/(81161)],"9a24441e":[function(){return Promise.all(/* import() | 9a24441e */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(7893)]).then(__webpack_require__.bind(__webpack_require__, 36141));},"@site/docs/design-patterns/personnummer.mdx",/*require.resolve*/(36141)],"9b9ca316":[function(){return Promise.all(/* import() | 9b9ca316 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(6562), __webpack_require__.e(9046), __webpack_require__.e(7677), __webpack_require__.e(50), __webpack_require__.e(5095)]).then(__webpack_require__.bind(__webpack_require__, 71513));},"@site/docs/components/combobox.mdx",/*require.resolve*/(71513)],"9c8e7e87":[function(){return Promise.all(/* import() | 9c8e7e87 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(6562), __webpack_require__.e(9046), __webpack_require__.e(1926), __webpack_require__.e(7740), __webpack_require__.e(3061), __webpack_require__.e(6881)]).then(__webpack_require__.bind(__webpack_require__, 55786));},"@site/blog/release15.mdx",/*require.resolve*/(55786)],"9e4087bc":[function(){return __webpack_require__.e(/* import() | 9e4087bc */ 2711).then(__webpack_require__.bind(__webpack_require__, 89331));},"@theme/BlogArchivePage",/*require.resolve*/(89331)],"9e9c7a31":[function(){return Promise.all(/* import() | 9e9c7a31 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(2169)]).then(__webpack_require__.bind(__webpack_require__, 14552));},"@site/docs/components/accordion.mdx",/*require.resolve*/(14552)],"9f2a669d":[function(){return Promise.all(/* import() | 9f2a669d */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(6562), __webpack_require__.e(9046), __webpack_require__.e(7677), __webpack_require__.e(4413), __webpack_require__.e(1361), __webpack_require__.e(50), __webpack_require__.e(4230)]).then(__webpack_require__.bind(__webpack_require__, 49529));},"@site/blog/release12.mdx",/*require.resolve*/(49529)],"a2cc83c2":[function(){return Promise.all(/* import() | a2cc83c2 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(6445), __webpack_require__.e(6796)]).then(__webpack_require__.bind(__webpack_require__, 93272));},"@site/docs/components/toast.mdx",/*require.resolve*/(93272)],"a32f2ed7":[function(){return Promise.all(/* import() | a32f2ed7 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(1135)]).then(__webpack_require__.bind(__webpack_require__, 87628));},"@site/docs/get-started/develop/index.mdx",/*require.resolve*/(87628)],"a4238dfd":[function(){return Promise.all(/* import() | a4238dfd */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(6562), __webpack_require__.e(9046), __webpack_require__.e(1926), __webpack_require__.e(7740), __webpack_require__.e(3061), __webpack_require__.e(3067)]).then(__webpack_require__.bind(__webpack_require__, 82503));},"@site/blog/release16.mdx?truncated=true",/*require.resolve*/(82503)],"a6aa9e1f":[function(){return Promise.all(/* import() | a6aa9e1f */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(6562), __webpack_require__.e(9046), __webpack_require__.e(1926), __webpack_require__.e(7740), __webpack_require__.e(3061), __webpack_require__.e(7677), __webpack_require__.e(4413), __webpack_require__.e(7686), __webpack_require__.e(3917), __webpack_require__.e(6325), __webpack_require__.e(8625), __webpack_require__.e(5186), __webpack_require__.e(8793), __webpack_require__.e(7643)]).then(__webpack_require__.bind(__webpack_require__, 82052));},"@theme/BlogListPage",/*require.resolve*/(82052)],"a7456010":[function(){return __webpack_require__.e(/* import() | a7456010 */ 1235).then(__webpack_require__.t.bind(__webpack_require__, 52335, 19));},"@generated/docusaurus-plugin-content-pages/default/__plugin.json",/*require.resolve*/(52335)],"a7bd4aaa":[function(){return __webpack_require__.e(/* import() | a7bd4aaa */ 7098).then(__webpack_require__.bind(__webpack_require__, 31723));},"@theme/DocVersionRoot",/*require.resolve*/(31723)],"a94703ab":[function(){return Promise.all(/* import() | a94703ab */[__webpack_require__.e(1869), __webpack_require__.e(9048)]).then(__webpack_require__.bind(__webpack_require__, 11377));},"@theme/DocRoot",/*require.resolve*/(11377)],"aba21aa0":[function(){return __webpack_require__.e(/* import() | aba21aa0 */ 5742).then(__webpack_require__.t.bind(__webpack_require__, 66928, 19));},"@generated/docusaurus-plugin-content-docs/default/__plugin.json",/*require.resolve*/(66928)],"aca3791a":[function(){return Promise.all(/* import() | aca3791a */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(8566), __webpack_require__.e(6253)]).then(__webpack_require__.bind(__webpack_require__, 99217));},"@site/docs/components/breadcrumbs.mdx",/*require.resolve*/(99217)],"acecf23e":[function(){return __webpack_require__.e(/* import() | acecf23e */ 1903).then(__webpack_require__.t.bind(__webpack_require__, 92621, 19));},"~blog/default/blogMetadata-default.json",/*require.resolve*/(92621)],"af10bb7a":[function(){return Promise.all(/* import() | af10bb7a */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(6562), __webpack_require__.e(9046), __webpack_require__.e(7677), __webpack_require__.e(7686), __webpack_require__.e(153)]).then(__webpack_require__.bind(__webpack_require__, 57921));},"@site/docs/components/select.mdx",/*require.resolve*/(57921)],"b0405491":[function(){return Promise.all(/* import() | b0405491 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(6445), __webpack_require__.e(7376)]).then(__webpack_require__.bind(__webpack_require__, 49232));},"@site/blog/release17.mdx",/*require.resolve*/(49232)],"b6bd9de1":[function(){return Promise.all(/* import() | b6bd9de1 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(3172)]).then(__webpack_require__.bind(__webpack_require__, 21911));},"@site/blog/release14.mdx",/*require.resolve*/(21911)],"b9ba9847":[function(){return Promise.all(/* import() | b9ba9847 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(4203)]).then(__webpack_require__.bind(__webpack_require__, 73338));},"@site/docs/components/logo.mdx",/*require.resolve*/(73338)],"be3f8917":[function(){return __webpack_require__.e(/* import() | be3f8917 */ 8446).then(__webpack_require__.t.bind(__webpack_require__, 79471, 19));},"@generated/docusaurus-plugin-content-docs/default/p/pr-preview-pr-180-fd6.json",/*require.resolve*/(79471)],"bf9e6831":[function(){return Promise.all(/* import() | bf9e6831 */[__webpack_require__.e(2076), __webpack_require__.e(3143)]).then(__webpack_require__.bind(__webpack_require__, 14509));},"@site/blog/open-source.md?truncated=true",/*require.resolve*/(14509)],"c20fed52":[function(){return Promise.all(/* import() | c20fed52 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(1680)]).then(__webpack_require__.bind(__webpack_require__, 93953));},"@site/docs/components/card.mdx",/*require.resolve*/(93953)],"c9f32de9":[function(){return Promise.all(/* import() | c9f32de9 */[__webpack_require__.e(2076), __webpack_require__.e(5426)]).then(__webpack_require__.bind(__webpack_require__, 42392));},"@site/src/pages/about.mdx",/*require.resolve*/(42392)],"ccc49370":[function(){return Promise.all(/* import() | ccc49370 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(4500), __webpack_require__.e(8566), __webpack_require__.e(7845), __webpack_require__.e(9015), __webpack_require__.e(2728), __webpack_require__.e(6562), __webpack_require__.e(9046), __webpack_require__.e(1926), __webpack_require__.e(7740), __webpack_require__.e(3061), __webpack_require__.e(7677), __webpack_require__.e(4413), __webpack_require__.e(7686), __webpack_require__.e(3917), __webpack_require__.e(6325), __webpack_require__.e(8625), __webpack_require__.e(5186), __webpack_require__.e(8793), __webpack_require__.e(3858), __webpack_require__.e(8401)]).then(__webpack_require__.bind(__webpack_require__, 73858));},"@theme/BlogPostPage",/*require.resolve*/(73858)],"cdb3d205":[function(){return Promise.all(/* import() | cdb3d205 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(8579), __webpack_require__.e(4500), __webpack_require__.e(8625), __webpack_require__.e(5320)]).then(__webpack_require__.bind(__webpack_require__, 72194));},"@site/docs/components/fileupload.mdx",/*require.resolve*/(72194)],"d0b5095a":[function(){return Promise.all(/* import() | d0b5095a */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(1343)]).then(__webpack_require__.bind(__webpack_require__, 83920));},"@site/docs/design-patterns/forms.md",/*require.resolve*/(83920)],"d567fc13":[function(){return Promise.all(/* import() | d567fc13 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(7290)]).then(__webpack_require__.bind(__webpack_require__, 63838));},"@site/docs/basics/index.mdx",/*require.resolve*/(63838)],"e01a17d2":[function(){return Promise.all(/* import() | e01a17d2 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(6884)]).then(__webpack_require__.bind(__webpack_require__, 6173));},"@site/docs/basics/accessibility.mdx",/*require.resolve*/(6173)],"e108b786":[function(){return Promise.all(/* import() | e108b786 */[__webpack_require__.e(2076), __webpack_require__.e(8714)]).then(__webpack_require__.bind(__webpack_require__, 47271));},"@site/docs/basics/principles.mdx",/*require.resolve*/(47271)],"e21057ae":[function(){return __webpack_require__.e(/* import() | e21057ae */ 7379).then(__webpack_require__.t.bind(__webpack_require__, 76474, 19));},"@generated/docusaurus-plugin-content-blog/default/p/pr-preview-pr-180-blog-d38.json",/*require.resolve*/(76474)],"e37cc8c8":[function(){return Promise.all(/* import() | e37cc8c8 */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(9065)]).then(__webpack_require__.bind(__webpack_require__, 82432));},"@site/docs/basics/tokens.mdx",/*require.resolve*/(82432)],"f8409a7e":[function(){return Promise.all(/* import() | f8409a7e */[__webpack_require__.e(1869), __webpack_require__.e(2076), __webpack_require__.e(6903)]).then(__webpack_require__.bind(__webpack_require__, 27721));},"@site/docs/intro.mdx",/*require.resolve*/(27721)]});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/core/lib/client/theme-fallback/Loading/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we translate theme-fallback?
/* eslint-disable @docusaurus/no-untranslated-text */function Loading(_ref){var error=_ref.error,retry=_ref.retry,pastDelay=_ref.pastDelay;if(error){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:'center',color:'#fff',backgroundColor:'#fa383e',borderColor:'#fa383e',borderStyle:'solid',borderRadius:'0.25rem',borderWidth:'1px',boxSizing:'border-box',display:'block',padding:'1rem',flex:'0 0 50%',marginLeft:'25%',marginRight:'25%',marginTop:'5rem',maxWidth:'50%',width:'100%'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:String(error)}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",onClick:retry,children:"Retry"})})]});}if(pastDelay){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{id:"loader",style:{width:128,height:110,position:'absolute',top:'calc(100vh - 64%)'},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#61dafb",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/(0,jsx_runtime.jsx)("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/(0,jsx_runtime.jsx)("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/(0,jsx_runtime.jsx)("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/(0,jsx_runtime.jsx)("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("circle",{cx:"22",cy:"22",r:"8",children:/*#__PURE__*/(0,jsx_runtime.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})});}return null;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/flat.js
var flat = __webpack_require__(86921);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/routeContext.js
var client_routeContext = __webpack_require__(53102);
;// ./node_modules/@docusaurus/core/lib/client/exports/ComponentCreator.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ComponentCreator(path,hash){// 404 page
if(path==='*'){return lib_default()({loading:Loading,loader:function loader(){return __webpack_require__.e(/* import() */ 2237).then(__webpack_require__.bind(__webpack_require__, 82237));},modules:['@theme/NotFound'],webpack:function webpack(){return[/*require.resolve*/(82237)];},render:function render(loaded,props){var NotFound=loaded["default"];return/*#__PURE__*/(0,jsx_runtime.jsx)(client_routeContext/* RouteContextProvider */.W// Do we want a better name than native-default?
,{value:{plugin:{name:'native',id:'default'}},children:/*#__PURE__*/(0,jsx_runtime.jsx)(NotFound,Object.assign({},props))});}});}var chunkNames=routesChunkNames[path+"-"+hash];// eslint-disable-next-line @typescript-eslint/no-explicit-any
var loader={};var modules=[];var optsWebpack=[];// A map from prop names to chunk names.
// e.g. Suppose the plugin added this as route:
//   { __comp: "...", prop: { foo: "..." }, items: ["...", "..."] }
// It will become:
//   { __comp: "...", "prop.foo": "...", "items.0": "...", "items.1": ... }
// Loadable.Map will _map_ over `loader` and load each key.
var flatChunkNames=(0,flat/* default */.A)(chunkNames);Object.entries(flatChunkNames).forEach(function(_ref){var keyPath=_ref[0],chunkName=_ref[1];var chunkRegistry=registry[chunkName];if(chunkRegistry){// eslint-disable-next-line prefer-destructuring
loader[keyPath]=chunkRegistry[0];modules.push(chunkRegistry[1]);optsWebpack.push(chunkRegistry[2]);}});return lib_default().Map({loading:Loading,loader:loader,modules:modules,webpack:function webpack(){return optsWebpack;},render:function render(loaded,props){// `loaded` will be a map from key path (as returned from the flattened
// chunk names) to the modules loaded from the loaders. We now have to
// restore the chunk names' previous shape from this flat record.
// We do so by taking advantage of the existing `chunkNames` and replacing
// each chunk name with its loaded module, so we don't create another
// object from scratch.
var loadedModules=JSON.parse(JSON.stringify(chunkNames));Object.entries(loaded).forEach(function(_ref2){var keyPath=_ref2[0],loadedModule=_ref2[1];// JSON modules are also loaded as `{ default: ... }` (`import()`
// semantics) but we just want to pass the actual value to props.
var chunk=loadedModule["default"];// One loaded chunk can only be one of two things: a module (props) or a
// component. Modules are always JSON, so `default` always exists. This
// could only happen with a user-defined component.
if(!chunk){throw new Error("The page component at "+path+" doesn't have a default export. This makes it impossible to render anything. Consider default-exporting a React component.");}// A module can be a primitive, for example, if the user stored a string
// as a prop. However, there seems to be a bug with swc-loader's CJS
// logic, in that it would load a JSON module with content "foo" as
// `{ default: "foo", 0: "f", 1: "o", 2: "o" }`. Just to be safe, we
// first make sure that the chunk is non-primitive.
if(typeof chunk==='object'||typeof chunk==='function'){Object.keys(loadedModule).filter(function(k){return k!=='default';}).forEach(function(nonDefaultKey){chunk[nonDefaultKey]=loadedModule[nonDefaultKey];});}// We now have this chunk prepared. Go down the key path and replace the
// chunk name with the actual chunk.
var val=loadedModules;var keyPaths=keyPath.split('.');keyPaths.slice(0,-1).forEach(function(k){val=val[k];});val[keyPaths[keyPaths.length-1]]=chunk;});/* eslint-disable no-underscore-dangle */var Component=loadedModules.__comp;delete loadedModules.__comp;var routeContext=loadedModules.__context;delete loadedModules.__context;var routeProps=loadedModules.__props;delete loadedModules.__props;/* eslint-enable no-underscore-dangle */// Is there any way to put this RouteContextProvider upper in the tree?
return/*#__PURE__*/(0,jsx_runtime.jsx)(client_routeContext/* RouteContextProvider */.W,{value:routeContext,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Component,Object.assign({},loadedModules,routeProps,props))});}});}
;// ./apps/docs/.docusaurus/routes.js
/* harmony default export */ const routes = ([{path:'/pr-preview/pr-180/about/',component:ComponentCreator('/pr-preview/pr-180/about/','983'),exact:true},{path:'/pr-preview/pr-180/blog/',component:ComponentCreator('/pr-preview/pr-180/blog/','0ff'),exact:true},{path:'/pr-preview/pr-180/blog/archive/',component:ComponentCreator('/pr-preview/pr-180/blog/archive/','7d2'),exact:true},{path:'/pr-preview/pr-180/blog/midas-open-source/',component:ComponentCreator('/pr-preview/pr-180/blog/midas-open-source/','b97'),exact:true},{path:'/pr-preview/pr-180/blog/release-12/',component:ComponentCreator('/pr-preview/pr-180/blog/release-12/','4a1'),exact:true},{path:'/pr-preview/pr-180/blog/release-13/',component:ComponentCreator('/pr-preview/pr-180/blog/release-13/','7d9'),exact:true},{path:'/pr-preview/pr-180/blog/release-14/',component:ComponentCreator('/pr-preview/pr-180/blog/release-14/','14c'),exact:true},{path:'/pr-preview/pr-180/blog/release-15/',component:ComponentCreator('/pr-preview/pr-180/blog/release-15/','0ae'),exact:true},{path:'/pr-preview/pr-180/blog/release-16/',component:ComponentCreator('/pr-preview/pr-180/blog/release-16/','ef0'),exact:true},{path:'/pr-preview/pr-180/blog/release-17/',component:ComponentCreator('/pr-preview/pr-180/blog/release-17/','c59'),exact:true},{path:'/pr-preview/pr-180/playground/',component:ComponentCreator('/pr-preview/pr-180/playground/','a6a'),exact:true},{path:'/pr-preview/pr-180/',component:ComponentCreator('/pr-preview/pr-180/','aaf'),routes:[{path:'/pr-preview/pr-180/',component:ComponentCreator('/pr-preview/pr-180/','4ad'),routes:[{path:'/pr-preview/pr-180/',component:ComponentCreator('/pr-preview/pr-180/','d1c'),routes:[{path:'/pr-preview/pr-180/basics/',component:ComponentCreator('/pr-preview/pr-180/basics/','af4'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/basics/accessibility/',component:ComponentCreator('/pr-preview/pr-180/basics/accessibility/','e49'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/basics/design-dna/',component:ComponentCreator('/pr-preview/pr-180/basics/design-dna/','b2c'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/basics/icons/',component:ComponentCreator('/pr-preview/pr-180/basics/icons/','9d8'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/basics/language/',component:ComponentCreator('/pr-preview/pr-180/basics/language/','29d'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/basics/principles/',component:ComponentCreator('/pr-preview/pr-180/basics/principles/','67c'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/basics/tokens/',component:ComponentCreator('/pr-preview/pr-180/basics/tokens/','cad'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/basics/typography/',component:ComponentCreator('/pr-preview/pr-180/basics/typography/','5fb'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/',component:ComponentCreator('/pr-preview/pr-180/components/','7b1'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/accordion/',component:ComponentCreator('/pr-preview/pr-180/components/accordion/','1bb'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/breadcrumbs/',component:ComponentCreator('/pr-preview/pr-180/components/breadcrumbs/','53b'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/button/',component:ComponentCreator('/pr-preview/pr-180/components/button/','9eb'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/card/',component:ComponentCreator('/pr-preview/pr-180/components/card/','3fe'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/checkbox/',component:ComponentCreator('/pr-preview/pr-180/components/checkbox/','d4a'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/combobox/',component:ComponentCreator('/pr-preview/pr-180/components/combobox/','dd7'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/date-picker/',component:ComponentCreator('/pr-preview/pr-180/components/date-picker/','49b'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/fileupload/',component:ComponentCreator('/pr-preview/pr-180/components/fileupload/','dd6'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/flex/',component:ComponentCreator('/pr-preview/pr-180/components/flex/','16a'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/grid/',component:ComponentCreator('/pr-preview/pr-180/components/grid/','e75'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/info-banner/',component:ComponentCreator('/pr-preview/pr-180/components/info-banner/','f4f'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/link-button/',component:ComponentCreator('/pr-preview/pr-180/components/link-button/','6fb'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/link/',component:ComponentCreator('/pr-preview/pr-180/components/link/','0ab'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/logo/',component:ComponentCreator('/pr-preview/pr-180/components/logo/','bf4'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/modal/',component:ComponentCreator('/pr-preview/pr-180/components/modal/','9d9'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/multi-select/',component:ComponentCreator('/pr-preview/pr-180/components/multi-select/','afe'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/radio/',component:ComponentCreator('/pr-preview/pr-180/components/radio/','29b'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/search-field/',component:ComponentCreator('/pr-preview/pr-180/components/search-field/','6be'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/select/',component:ComponentCreator('/pr-preview/pr-180/components/select/','057'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/spinner/',component:ComponentCreator('/pr-preview/pr-180/components/spinner/','bfe'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/table/',component:ComponentCreator('/pr-preview/pr-180/components/table/','d0a'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/tabs/',component:ComponentCreator('/pr-preview/pr-180/components/tabs/','48b'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/textarea/',component:ComponentCreator('/pr-preview/pr-180/components/textarea/','77c'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/textfield/',component:ComponentCreator('/pr-preview/pr-180/components/textfield/','42f'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/components/toast/',component:ComponentCreator('/pr-preview/pr-180/components/toast/','ca2'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/design-patterns/',component:ComponentCreator('/pr-preview/pr-180/design-patterns/','15e'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/design-patterns/buttons-and-links/',component:ComponentCreator('/pr-preview/pr-180/design-patterns/buttons-and-links/','624'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/design-patterns/error-message/',component:ComponentCreator('/pr-preview/pr-180/design-patterns/error-message/','f22'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/design-patterns/focus/',component:ComponentCreator('/pr-preview/pr-180/design-patterns/focus/','63a'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/design-patterns/forms/',component:ComponentCreator('/pr-preview/pr-180/design-patterns/forms/','00c'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/design-patterns/personnummer/',component:ComponentCreator('/pr-preview/pr-180/design-patterns/personnummer/','a2e'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/dev/client-side-routing/',component:ComponentCreator('/pr-preview/pr-180/dev/client-side-routing/','467'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/get-started/',component:ComponentCreator('/pr-preview/pr-180/get-started/','932'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/get-started/design/',component:ComponentCreator('/pr-preview/pr-180/get-started/design/','f07'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/get-started/develop/',component:ComponentCreator('/pr-preview/pr-180/get-started/develop/','c16'),exact:true,sidebar:"sideBar"},{path:'/pr-preview/pr-180/',component:ComponentCreator('/pr-preview/pr-180/','c5a'),exact:true,sidebar:"sideBar"}]}]}]},{path:'*',component:ComponentCreator('*')}]);

/***/ }),

/***/ 6125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ Context),
/* harmony export */   x: () => (/* binding */ BrowserContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Encapsulate the logic to avoid React hydration problems
// See https://www.joshwcomeau.com/react/the-perils-of-rehydration/
// On first client-side render, we need to render exactly as the server rendered
// isBrowser is set to true only after a successful hydration
// Note, isBrowser is not part of useDocusaurusContext() for perf reasons
// Using useDocusaurusContext() (much more common need) should not trigger
// re-rendering after a successful hydration
var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);function BrowserContextProvider(_ref){var children=_ref.children;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),isBrowser=_useState[0],setIsBrowser=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){setIsBrowser(true);},[]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:isBrowser,children:children});}

/***/ }),

/***/ 49433:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react-helmet-async/lib/index.module.js
var index_module = __webpack_require__(80545);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(54625);
// EXTERNAL MODULE: ./apps/docs/.docusaurus/docusaurus.config.mjs
var docusaurus_config = __webpack_require__(27999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(38193);
;// ./apps/docs/.docusaurus/client-modules.js
/* harmony default export */ const client_modules = ([__webpack_require__(10119),__webpack_require__(26134),__webpack_require__(76294),__webpack_require__(65354)]);
// EXTERNAL MODULE: ./apps/docs/.docusaurus/routes.js + 3 modules
var routes = __webpack_require__(93806);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(35527);
// EXTERNAL MODULE: ./node_modules/react-router-config/esm/react-router-config.js
var react_router_config = __webpack_require__(22831);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/core/lib/client/theme-fallback/Root/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Wrapper at the very top of the app, that is applied constantly
// and does not depend on current route (unlike the layout)
//
// Gives the opportunity to add stateful providers on top of the app
// and these providers won't reset state when we navigate
//
// See https://github.com/facebook/docusaurus/issues/3919
function Root(_ref){var children=_ref.children;return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(44586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(86025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(61213);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useAlternatePageUtils.js
var useAlternatePageUtils = __webpack_require__(32131);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useKeyboardNavigation.js + 1 modules
var useKeyboardNavigation = __webpack_require__(14090);
;// ./node_modules/@docusaurus/theme-common/lib/utils/searchUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DEFAULT_SEARCH_TAG='default';
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(70440);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(41463);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/SiteMetadata/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO move to SiteMetadataDefaults or theme-common ?
// Useful for i18n/SEO
// See https://developers.google.com/search/docs/advanced/crawling/localized-versions
// See https://github.com/facebook/docusaurus/issues/3317
function AlternateLangHeaders(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.A)(),_useDocusaurusContext2=_useDocusaurusContext.i18n,currentLocale=_useDocusaurusContext2.currentLocale,defaultLocale=_useDocusaurusContext2.defaultLocale,localeConfigs=_useDocusaurusContext2.localeConfigs;var alternatePageUtils=(0,useAlternatePageUtils/* useAlternatePageUtils */.o)();var currentHtmlLang=localeConfigs[currentLocale].htmlLang;// HTML lang is a BCP 47 tag, but the Open Graph protocol requires
// using underscores instead of dashes.
// See https://ogp.me/#optional
// See https://en.wikipedia.org/wiki/IETF_language_tag)
var bcp47ToOpenGraphLocale=function bcp47ToOpenGraphLocale(code){return code.replace('-','_');};// Note: it is fine to use both "x-default" and "en" to target the same url
// See https://www.searchviu.com/en/multiple-hreflang-tags-one-url/
return/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[Object.entries(localeConfigs).map(function(_ref){var locale=_ref[0],htmlLang=_ref[1].htmlLang;return/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"alternate",href:alternatePageUtils.createUrl({locale:locale,fullyQualified:true}),hrefLang:htmlLang},locale);}),/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"alternate",href:alternatePageUtils.createUrl({locale:defaultLocale,fullyQualified:true}),hrefLang:"x-default"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:locale",content:bcp47ToOpenGraphLocale(currentHtmlLang)}),Object.values(localeConfigs).filter(function(config){return currentHtmlLang!==config.htmlLang;}).map(function(config){return/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:locale:alternate",content:bcp47ToOpenGraphLocale(config.htmlLang)},"meta-og-"+config.htmlLang);})]});}// Default canonical url inferred from current page location pathname
function useDefaultCanonicalUrl(){var _useDocusaurusContext3=(0,useDocusaurusContext/* default */.A)(),_useDocusaurusContext4=_useDocusaurusContext3.siteConfig,siteUrl=_useDocusaurusContext4.url,baseUrl=_useDocusaurusContext4.baseUrl,trailingSlash=_useDocusaurusContext4.trailingSlash;// TODO using useLocation().pathname is not a super idea
// See https://github.com/facebook/docusaurus/issues/9170
var _useLocation=(0,react_router/* useLocation */.zy)(),pathname=_useLocation.pathname;var canonicalPathname=(0,lib/* applyTrailingSlash */.Ks)((0,useBaseUrl/* default */.Ay)(pathname),{trailingSlash:trailingSlash,baseUrl:baseUrl});return siteUrl+canonicalPathname;}// TODO move to SiteMetadataDefaults or theme-common ?
function CanonicalUrlHeaders(_ref2){var permalink=_ref2.permalink;var _useDocusaurusContext5=(0,useDocusaurusContext/* default */.A)(),siteUrl=_useDocusaurusContext5.siteConfig.url;var defaultCanonicalUrl=useDefaultCanonicalUrl();var canonicalUrl=permalink?""+siteUrl+permalink:defaultCanonicalUrl;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:url",content:canonicalUrl}),/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"canonical",href:canonicalUrl})]});}function SiteMetadata(){var _useDocusaurusContext6=(0,useDocusaurusContext/* default */.A)(),currentLocale=_useDocusaurusContext6.i18n.currentLocale;// TODO maybe move these 2 themeConfig to siteConfig?
// These seems useful for other themes as well
var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.p)(),metadata=_useThemeConfig.metadata,defaultImage=_useThemeConfig.image;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/(0,jsx_runtime.jsx)("body",{className:useKeyboardNavigation/* keyboardFocusedClassName */.w})]}),defaultImage&&/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{image:defaultImage}),/*#__PURE__*/(0,jsx_runtime.jsx)(CanonicalUrlHeaders,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(AlternateLangHeaders,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(SearchMetadata/* default */.A,{tag:DEFAULT_SEARCH_TAG,locale:currentLocale}),/*#__PURE__*/(0,jsx_runtime.jsx)(Head/* default */.A,{children:metadata.map(function(metadatum,i){return/*#__PURE__*/(0,jsx_runtime.jsx)("meta",Object.assign({},metadatum),i);})})]});}
;// ./node_modules/@docusaurus/core/lib/client/normalizeLocation.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Memoize previously normalized pathnames.
var pathnames=new Map();function normalizeLocation(location){if(pathnames.has(location.pathname)){return Object.assign({},location,{pathname:pathnames.get(location.pathname)});}// If the location was registered with an `.html` extension, we don't strip it
// away, or it will render to a 404 page.
var matchedRoutes=(0,react_router_config/* matchRoutes */.u)(routes/* default */.A,location.pathname);if(matchedRoutes.some(function(_ref){var route=_ref.route;return route.exact===true;})){pathnames.set(location.pathname,location.pathname);return location;}var pathname=location.pathname.trim().replace(/(?:\/index)?\.html$/,'')||'/';pathnames.set(location.pathname,pathname);return Object.assign({},location,{pathname:pathname});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/browserContext.js
var browserContext = __webpack_require__(6125);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/docusaurusContext.js + 3 modules
var docusaurusContext = __webpack_require__(81345);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(77387);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(205);
;// ./node_modules/@docusaurus/core/lib/client/ClientLifecyclesDispatcher.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function dispatchLifecycleAction(lifecycleAction){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var callbacks=client_modules.map(function(clientModule){var _clientModule$default,_clientModule$default2;var lifecycleFunction=(_clientModule$default=(_clientModule$default2=clientModule["default"])==null?void 0:_clientModule$default2[lifecycleAction])!=null?_clientModule$default:clientModule[lifecycleAction];return lifecycleFunction==null?void 0:lifecycleFunction.apply(void 0,args);});return function(){return callbacks.forEach(function(cb){return cb==null?void 0:cb();});};}function scrollAfterNavigation(_ref){var location=_ref.location,previousLocation=_ref.previousLocation;if(!previousLocation){return;// no-op: use native browser feature
}var samePathname=location.pathname===previousLocation.pathname;var sameHash=location.hash===previousLocation.hash;var sameSearch=location.search===previousLocation.search;// Query-string changes: do not scroll to top/hash
if(samePathname&&sameHash&&!sameSearch){return;}var hash=location.hash;if(!hash){window.scrollTo(0,0);}else{var id=decodeURIComponent(hash.substring(1));var element=document.getElementById(id);element==null||element.scrollIntoView();}}function ClientLifecyclesDispatcher(_ref2){var children=_ref2.children,location=_ref2.location,previousLocation=_ref2.previousLocation;(0,useIsomorphicLayoutEffect/* default */.A)(function(){if(previousLocation!==location){scrollAfterNavigation({location:location,previousLocation:previousLocation});dispatchLifecycleAction('onRouteDidUpdate',{previousLocation:previousLocation,location:location});}},[previousLocation,location]);return children;}/* harmony default export */ const client_ClientLifecyclesDispatcher = (ClientLifecyclesDispatcher);
;// ./node_modules/@docusaurus/core/lib/client/preload.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Helper function to make sure all async components for that particular route
 * is preloaded before rendering. This is especially useful to avoid loading
 * screens.
 *
 * @param pathname the route pathname, example: /docs/installation
 * @returns Promise object represents whether pathname has been preloaded
 */function preload_preload(pathname){var matches=Array.from(new Set([pathname,decodeURI(pathname)])).map(function(p){return (0,react_router_config/* matchRoutes */.u)(routes/* default */.A,p);}).flat();return Promise.all(matches.map(function(match){return match.route.component.preload==null?void 0:match.route.component.preload();}));}
;// ./node_modules/@docusaurus/core/lib/client/PendingNavigation.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PendingNavigation=/*#__PURE__*/function(_React$Component){function PendingNavigation(props){var _this;_this=_React$Component.call(this,props)||this;// previousLocation doesn't affect rendering, hence not stored in state.
_this.previousLocation=void 0;_this.routeUpdateCleanupCb=void 0;_this.previousLocation=null;_this.routeUpdateCleanupCb=ExecutionEnvironment/* default */.A.canUseDOM?dispatchLifecycleAction('onRouteUpdate',{previousLocation:null,location:_this.props.location}):function(){};_this.state={nextRouteHasLoaded:true};return _this;}// Intercept location update and still show current route until next route
// is done loading.
(0,inheritsLoose/* default */.A)(PendingNavigation,_React$Component);var _proto=PendingNavigation.prototype;_proto.shouldComponentUpdate=function shouldComponentUpdate(nextProps,nextState){var _this2=this;if(nextProps.location===this.props.location){// `nextRouteHasLoaded` is false means there's a pending route transition.
// Don't update until it's done.
return nextState.nextRouteHasLoaded;}// props.location being different means the router is trying to navigate to
// a new route. We will preload the new route.
var nextLocation=nextProps.location;// Save the location first.
this.previousLocation=this.props.location;this.setState({nextRouteHasLoaded:false});this.routeUpdateCleanupCb=dispatchLifecycleAction('onRouteUpdate',{previousLocation:this.previousLocation,location:nextLocation});// Load data while the old screen remains. Force preload instead of using
// `window.docusaurus`, because we want to avoid loading screen even when
// user is on saveData
preload_preload(nextLocation.pathname).then(function(){_this2.routeUpdateCleanupCb();_this2.setState({nextRouteHasLoaded:true});})["catch"](function(e){console.warn(e);// If chunk loading failed, it could be because the path to a chunk
// no longer exists due to a new deployment. Force refresh the page
// instead of just not navigating.
window.location.reload();});return false;};_proto.render=function render(){var _this$props=this.props,children=_this$props.children,location=_this$props.location;// Use a controlled <Route> to trick all descendants into rendering the old
// location.
return/*#__PURE__*/(0,jsx_runtime.jsx)(client_ClientLifecyclesDispatcher,{previousLocation:this.previousLocation,location:location,children:/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.qh,{location:location,render:function render(){return children;}})});};return PendingNavigation;}(react.Component);/* harmony default export */ const client_PendingNavigation = (PendingNavigation);
;// ./node_modules/@docusaurus/core/lib/client/BaseUrlIssueBanner/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({});
;// ./node_modules/@docusaurus/core/lib/client/BaseUrlIssueBanner/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Double-security: critical CSS will hide the banner if CSS can load!
// __ prefix allows search crawlers (Algolia/DocSearch) to ignore anchors
// https://github.com/facebook/docusaurus/issues/8883#issuecomment-1516328368
var BannerContainerId='__docusaurus-base-url-issue-banner-container';var BannerId='__docusaurus-base-url-issue-banner';var SuggestionContainerId='__docusaurus-base-url-issue-banner-suggestion-container';// It is important to not use React to render this banner
// otherwise Google would index it, even if it's hidden with some critical CSS!
// See https://github.com/facebook/docusaurus/issues/4028
// - We can't SSR (or it would be indexed)
// - We can't CSR (as it means the baseurl is correct)
function createInlineHtmlBanner(baseUrl){return"\n<div id=\""+BannerId+"\" style=\"border: thick solid red; background-color: rgb(255, 230, 179); margin: 20px; padding: 20px; font-size: 20px;\">\n   <p style=\"font-weight: bold; font-size: 30px;\">Your Docusaurus site did not load properly.</p>\n   <p>A very common reason is a wrong site <a href=\"https://docusaurus.io/docs/docusaurus.config.js/#baseUrl\" style=\"font-weight: bold;\">baseUrl configuration</a>.</p>\n   <p>Current configured baseUrl = <span style=\"font-weight: bold; color: red;\">"+baseUrl+"</span> "+(baseUrl==='/'?' (default value)':'')+"</p>\n   <p>We suggest trying baseUrl = <span id=\""+SuggestionContainerId+"\" style=\"font-weight: bold; color: green;\"></span></p>\n</div>\n";}// Needs to work for older browsers!
function createInlineScript(baseUrl){/* language=js */return"\ndocument.addEventListener('DOMContentLoaded', function maybeInsertBanner() {\n  var shouldInsert = typeof window['docusaurus'] === 'undefined';\n  shouldInsert && insertBanner();\n});\n\nfunction insertBanner() {\n  var bannerContainer = document.createElement('div');\n  bannerContainer.id = '"+BannerContainerId+"';\n  var bannerHtml = "+JSON.stringify(createInlineHtmlBanner(baseUrl))// See https://redux.js.org/recipes/server-rendering/#security-considerations
.replace(/</g,"\\<")+";\n  bannerContainer.innerHTML = bannerHtml;\n  document.body.prepend(bannerContainer);\n  var suggestionContainer = document.getElementById('"+SuggestionContainerId+"');\n  var actualHomePagePath = window.location.pathname;\n  var suggestedBaseUrl = actualHomePagePath.substr(-1) === '/'\n        ? actualHomePagePath\n        : actualHomePagePath + '/';\n  suggestionContainer.innerHTML = suggestedBaseUrl;\n}\n";}function BaseUrlIssueBanner(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.A)(),baseUrl=_useDocusaurusContext.siteConfig.baseUrl;return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:!ExecutionEnvironment/* default */.A.canUseDOM&&/*#__PURE__*/// Safe to use `ExecutionEnvironment`, because `Head` is purely
// side-effect and doesn't affect hydration
(0,jsx_runtime.jsx)(Head/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("script",{children:createInlineScript(baseUrl)})})});}/**
 * We want to help the users with a bad baseUrl configuration (very common
 * error). Help message is inlined, and hidden if JS or CSS is able to load.
 *
 * This component only inserts the base URL banner for the homepage, to avoid
 * polluting every statically rendered page.
 *
 * Note: it might create false positives (ie network failures): not a big deal
 *
 * @see https://github.com/facebook/docusaurus/pull/3621
 */function MaybeBaseUrlIssueBanner(){var _useDocusaurusContext2=(0,useDocusaurusContext/* default */.A)(),_useDocusaurusContext3=_useDocusaurusContext2.siteConfig,baseUrl=_useDocusaurusContext3.baseUrl,baseUrlIssueBanner=_useDocusaurusContext3.baseUrlIssueBanner;var _useLocation=(0,react_router/* useLocation */.zy)(),pathname=_useLocation.pathname;var isHomePage=pathname===baseUrl;var enabled=baseUrlIssueBanner&&isHomePage;return enabled?/*#__PURE__*/(0,jsx_runtime.jsx)(BaseUrlIssueBanner,{}):null;}
;// ./node_modules/@docusaurus/core/lib/client/SiteMetadataDefaults.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SiteMetadataDefaults(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.A)(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig,favicon=_useDocusaurusContext2.favicon,title=_useDocusaurusContext2.title,noIndex=_useDocusaurusContext2.noIndex,_useDocusaurusContext3=_useDocusaurusContext.i18n,currentLocale=_useDocusaurusContext3.currentLocale,localeConfigs=_useDocusaurusContext3.localeConfigs;var faviconUrl=(0,useBaseUrl/* default */.Ay)(favicon);var _localeConfigs$curren=localeConfigs[currentLocale],htmlLang=_localeConfigs$curren.htmlLang,htmlDir=_localeConfigs$curren.direction;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("html",{lang:htmlLang,dir:htmlDir}),/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:title",content:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),noIndex&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"robots",content:"noindex, nofollow"}),favicon&&/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"icon",href:faviconUrl})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ErrorBoundary.js + 1 modules
var ErrorBoundary = __webpack_require__(67489);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(92303);
;// ./node_modules/@docusaurus/core/lib/client/hasHydratedDataAttribute.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// See https://github.com/facebook/docusaurus/pull/9256
// Docusaurus adds a <html data-has-hydrated="true"> after hydration
function HasHydratedDataAttribute(){var isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(Head/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("html",{"data-has-hydrated":isBrowser})});}
;// ./node_modules/@docusaurus/core/lib/client/App.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO, quick fix for CSS insertion order
// eslint-disable-next-line import/order
var routesElement=(0,react_router_config/* renderRoutes */.v)(routes/* default */.A);function AppNavigation(){var location=(0,react_router/* useLocation */.zy)();var normalizedLocation=normalizeLocation(location);return/*#__PURE__*/(0,jsx_runtime.jsx)(client_PendingNavigation,{location:normalizedLocation,children:routesElement});}function App(){return/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundary/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(docusaurusContext/* DocusaurusContextProvider */.l,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(browserContext/* BrowserContextProvider */.x,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Root,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SiteMetadataDefaults,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(SiteMetadata,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(MaybeBaseUrlIssueBanner,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(AppNavigation,{})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(HasHydratedDataAttribute,{})]})})});}
// EXTERNAL MODULE: ./apps/docs/.docusaurus/routesChunkNames.json
var routesChunkNames = __webpack_require__(71493);
;// ./node_modules/@docusaurus/core/lib/client/prefetch.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function supports(feature){try{var fakeLink=document.createElement('link');return fakeLink.relList.supports(feature);}catch(_unused){return false;}}function linkPrefetchStrategy(url){return new Promise(function(resolve,reject){var _document$getElements,_document$getElements2;if(typeof document==='undefined'){reject();return;}var link=document.createElement('link');link.setAttribute('rel','prefetch');link.setAttribute('href',url);link.onload=function(){return resolve();};link.onerror=function(){return reject();};var parentElement=(_document$getElements=document.getElementsByTagName('head')[0])!=null?_document$getElements:(_document$getElements2=document.getElementsByName('script')[0])==null?void 0:_document$getElements2.parentNode;parentElement==null||parentElement.appendChild(link);});}function xhrPrefetchStrategy(url){return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open('GET',url,true);req.withCredentials=true;req.onload=function(){if(req.status===200){resolve();}else{reject();}};req.send(null);});}var supportedPrefetchStrategy=supports('prefetch')?linkPrefetchStrategy:xhrPrefetchStrategy;function prefetch_prefetch(url){return supportedPrefetchStrategy(url)["catch"](function(){});// 404s are logged to the console anyway.
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/flat.js
var flat = __webpack_require__(86921);
;// ./node_modules/@docusaurus/core/lib/client/docusaurus.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fetched=new Set();var loaded=new Set();// If user is on slow or constrained connection.
var isSlowConnection=function isSlowConnection(){var _navigator$connection,_navigator$connection2;return((_navigator$connection=navigator.connection)==null?void 0:_navigator$connection.effectiveType.includes('2g'))||((_navigator$connection2=navigator.connection)==null?void 0:_navigator$connection2.saveData);};var canPrefetch=function canPrefetch(routePath){return!isSlowConnection()&&!loaded.has(routePath)&&!fetched.has(routePath);};var canPreload=function canPreload(routePath){return!isSlowConnection()&&!loaded.has(routePath);};var getChunkNamesToLoad=function getChunkNamesToLoad(path){return Object.entries(routesChunkNames).filter(// Remove the last part containing the route hash
// input: /blog/2018/12/14/Happy-First-Birthday-Slash-fe9
// output: /blog/2018/12/14/Happy-First-Birthday-Slash
function(_ref){var routeNameWithHash=_ref[0];return routeNameWithHash.replace(/-[^-]+$/,'')===path;}).flatMap(function(_ref2){var routeChunks=_ref2[1];return Object.values((0,flat/* default */.A)(routeChunks));});};var prefetch=function prefetch(routePath){if(!canPrefetch(routePath)){return false;}fetched.add(routePath);// Find all webpack chunk names needed.
var matches=(0,react_router_config/* matchRoutes */.u)(routes/* default */.A,routePath);var chunkNamesNeeded=matches.flatMap(function(match){return getChunkNamesToLoad(match.route.path);});// Prefetch all webpack chunk assets file needed.
return Promise.all(chunkNamesNeeded.map(function(chunkName){// "__webpack_require__.gca" is injected by ChunkAssetPlugin. Pass it
// the name of the chunk you want to load and it will return its URL.
// eslint-disable-next-line camelcase
var chunkAsset=__webpack_require__.gca(chunkName);// In some cases, webpack might decide to optimize further, leading to
// the chunk assets being merged to another chunk. In this case, we can
// safely filter it out and don't need to load it.
if(chunkAsset&&!chunkAsset.includes('undefined')){return prefetch_prefetch(chunkAsset);}return Promise.resolve();}));};var preload=function preload(routePath){if(!canPreload(routePath)){return false;}loaded.add(routePath);return preload_preload(routePath);};var docusaurus={prefetch:prefetch,preload:preload};// This object is directly mounted onto window, better freeze it
/* harmony default export */ const client_docusaurus = (Object.freeze(docusaurus));
;// ./node_modules/@docusaurus/core/lib/client/clientEntry.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Router(_ref){var children=_ref.children;return docusaurus_config["default"].future.experimental_router==='hash'?/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* HashRouter */.I9,{children:children}):/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* BrowserRouter */.Kd,{children:children});}var hydrate=Boolean(true);// Client-side render (e.g: running in browser) to become single-page
// application (SPA).
if(ExecutionEnvironment/* default */.A.canUseDOM){window.docusaurus=client_docusaurus;var container=document.getElementById('__docusaurus');var app=/*#__PURE__*/(0,jsx_runtime.jsx)(index_module/* HelmetProvider */.vd,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Router,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(App,{})})});var onRecoverableError=function onRecoverableError(error,errorInfo){console.error('Docusaurus React Root onRecoverableError:',error,errorInfo);};var renderApp=function renderApp(){if(window.docusaurusRoot){window.docusaurusRoot.render(app);return;}if(hydrate){window.docusaurusRoot=client.hydrateRoot(container,app,{onRecoverableError:onRecoverableError});}else{var root=client.createRoot(container,{onRecoverableError:onRecoverableError});root.render(app);window.docusaurusRoot=root;}};preload_preload(window.location.pathname).then(function(){(0,react.startTransition)(renderApp);});// Webpack Hot Module Replacement API
if(false){}}

/***/ }),

/***/ 81345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ Context),
  l: () => (/* binding */ DocusaurusContextProvider)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./apps/docs/.docusaurus/docusaurus.config.mjs
var docusaurus_config = __webpack_require__(27999);
;// ./apps/docs/.docusaurus/globalData.json
const globalData_namespaceObject = /*#__PURE__*/JSON.parse('{"docusaurus-plugin-content-docs":{"default":{"path":"/pr-preview/pr-180/","versions":[{"name":"current","label":"Next","isLast":true,"path":"/pr-preview/pr-180/","mainDocId":"intro","docs":[{"id":"basics/accessibility","path":"/pr-preview/pr-180/basics/accessibility","sidebar":"sideBar"},{"id":"basics/design-dna","path":"/pr-preview/pr-180/basics/design-dna","sidebar":"sideBar"},{"id":"basics/icons","path":"/pr-preview/pr-180/basics/icons","sidebar":"sideBar"},{"id":"basics/index","path":"/pr-preview/pr-180/basics/","sidebar":"sideBar"},{"id":"basics/language","path":"/pr-preview/pr-180/basics/language","sidebar":"sideBar"},{"id":"basics/principles","path":"/pr-preview/pr-180/basics/principles","sidebar":"sideBar"},{"id":"basics/tokens","path":"/pr-preview/pr-180/basics/tokens","sidebar":"sideBar"},{"id":"basics/typography","path":"/pr-preview/pr-180/basics/typography","sidebar":"sideBar"},{"id":"components/accordion","path":"/pr-preview/pr-180/components/accordion","sidebar":"sideBar"},{"id":"components/breadcrumbs","path":"/pr-preview/pr-180/components/breadcrumbs","sidebar":"sideBar"},{"id":"components/button","path":"/pr-preview/pr-180/components/button","sidebar":"sideBar"},{"id":"components/card","path":"/pr-preview/pr-180/components/card","sidebar":"sideBar"},{"id":"components/checkbox","path":"/pr-preview/pr-180/components/checkbox","sidebar":"sideBar"},{"id":"components/combobox","path":"/pr-preview/pr-180/components/combobox","sidebar":"sideBar"},{"id":"components/date-picker","path":"/pr-preview/pr-180/components/date-picker","sidebar":"sideBar"},{"id":"components/fileupload","path":"/pr-preview/pr-180/components/fileupload","sidebar":"sideBar"},{"id":"components/flex","path":"/pr-preview/pr-180/components/flex","sidebar":"sideBar"},{"id":"components/grid","path":"/pr-preview/pr-180/components/grid","sidebar":"sideBar"},{"id":"components/index","path":"/pr-preview/pr-180/components/","sidebar":"sideBar"},{"id":"components/info-banner","path":"/pr-preview/pr-180/components/info-banner","sidebar":"sideBar"},{"id":"components/link","path":"/pr-preview/pr-180/components/link","sidebar":"sideBar"},{"id":"components/link-button","path":"/pr-preview/pr-180/components/link-button","sidebar":"sideBar"},{"id":"components/logo","path":"/pr-preview/pr-180/components/logo","sidebar":"sideBar"},{"id":"components/modal","path":"/pr-preview/pr-180/components/modal","sidebar":"sideBar"},{"id":"components/multi-select","path":"/pr-preview/pr-180/components/multi-select","sidebar":"sideBar"},{"id":"components/radio","path":"/pr-preview/pr-180/components/radio","sidebar":"sideBar"},{"id":"components/search-field","path":"/pr-preview/pr-180/components/search-field","sidebar":"sideBar"},{"id":"components/select","path":"/pr-preview/pr-180/components/select","sidebar":"sideBar"},{"id":"components/spinner","path":"/pr-preview/pr-180/components/spinner","sidebar":"sideBar"},{"id":"components/table","path":"/pr-preview/pr-180/components/table","sidebar":"sideBar"},{"id":"components/tabs","path":"/pr-preview/pr-180/components/tabs","sidebar":"sideBar"},{"id":"components/textarea","path":"/pr-preview/pr-180/components/textarea","sidebar":"sideBar"},{"id":"components/textfield","path":"/pr-preview/pr-180/components/textfield","sidebar":"sideBar"},{"id":"components/toast","path":"/pr-preview/pr-180/components/toast","sidebar":"sideBar"},{"id":"design-patterns/buttons-and-links","path":"/pr-preview/pr-180/design-patterns/buttons-and-links","sidebar":"sideBar"},{"id":"design-patterns/error-message","path":"/pr-preview/pr-180/design-patterns/error-message","sidebar":"sideBar"},{"id":"design-patterns/focus","path":"/pr-preview/pr-180/design-patterns/focus","sidebar":"sideBar"},{"id":"design-patterns/forms","path":"/pr-preview/pr-180/design-patterns/forms","sidebar":"sideBar"},{"id":"design-patterns/index","path":"/pr-preview/pr-180/design-patterns/","sidebar":"sideBar"},{"id":"design-patterns/personnummer","path":"/pr-preview/pr-180/design-patterns/personnummer","sidebar":"sideBar"},{"id":"dev/client-side-routing","path":"/pr-preview/pr-180/dev/client-side-routing","sidebar":"sideBar"},{"id":"get-started/design/index","path":"/pr-preview/pr-180/get-started/design/","sidebar":"sideBar"},{"id":"get-started/develop/index","path":"/pr-preview/pr-180/get-started/develop/","sidebar":"sideBar"},{"id":"get-started/index","path":"/pr-preview/pr-180/get-started/","sidebar":"sideBar"},{"id":"intro","path":"/pr-preview/pr-180/","sidebar":"sideBar"}],"draftIds":[],"sidebars":{"sideBar":{"link":{"path":"/pr-preview/pr-180/","label":"Start"}}}}],"breadcrumbs":false}}}');
;// ./apps/docs/.docusaurus/i18n.json
const i18n_namespaceObject = /*#__PURE__*/JSON.parse('{"defaultLocale":"sv","locales":["sv"],"path":"i18n","currentLocale":"sv","localeConfigs":{"sv":{"label":"Svenska","direction":"ltr","htmlLang":"sv","calendar":"gregory","path":"sv"}}}');
// EXTERNAL MODULE: ./apps/docs/.docusaurus/codeTranslations.json
var codeTranslations = __webpack_require__(14853);
;// ./apps/docs/.docusaurus/site-metadata.json
const site_metadata_namespaceObject = /*#__PURE__*/JSON.parse('{"docusaurusVersion":"3.6.3","pluginVersions":{"docusaurus-plugin-content-docs":{"type":"package","name":"@docusaurus/plugin-content-docs","version":"3.6.3"},"docusaurus-plugin-content-blog":{"type":"package","name":"@docusaurus/plugin-content-blog","version":"3.6.3"},"docusaurus-plugin-content-pages":{"type":"package","name":"@docusaurus/plugin-content-pages","version":"3.6.3"},"docusaurus-plugin-sitemap":{"type":"package","name":"@docusaurus/plugin-sitemap","version":"3.6.3"},"docusaurus-theme-classic":{"type":"package","name":"@docusaurus/theme-classic","version":"3.6.3"},"docusaurus-plugin-local-resolve":{"type":"package","name":"docusaurus-plugin-module-alias","version":"0.0.2"},"docusaurus-theme-mermaid":{"type":"package","name":"@docusaurus/theme-mermaid","version":"3.6.3"},"docusaurus-theme-live-codeblock":{"type":"package","name":"@docusaurus/theme-live-codeblock","version":"3.6.3"}}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/core/lib/client/docusaurusContext.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Static value on purpose: don't make it dynamic!
// Using context is still useful for testability reasons.
var contextValue={siteConfig:docusaurus_config["default"],siteMetadata:site_metadata_namespaceObject,globalData:globalData_namespaceObject,i18n:i18n_namespaceObject,codeTranslations:codeTranslations};var Context=/*#__PURE__*/react.createContext(contextValue);function DocusaurusContextProvider(_ref){var children=_ref.children;return/*#__PURE__*/(0,jsx_runtime.jsx)(Context.Provider,{value:contextValue,children:children});}

/***/ }),

/***/ 67489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ErrorBoundary)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(77387);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(38193);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(70440);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 66 modules
var Layout = __webpack_require__(28244);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/routeContext.js
var routeContext = __webpack_require__(53102);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/core/lib/client/theme-fallback/Error/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we translate theme-fallback?
/* eslint-disable @docusaurus/no-untranslated-text */function ErrorDisplay(_ref){var error=_ref.error,tryAgain=_ref.tryAgain;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',minHeight:'100vh',width:'100%',maxWidth:'80ch',fontSize:'20px',margin:'0 auto',padding:'1rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{style:{fontSize:'3rem'},children:"This page crashed"}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",onClick:tryAgain,style:{margin:'1rem 0',fontSize:'2rem',cursor:'pointer',borderRadius:20,padding:'1rem'},children:"Try again"}),/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundaryError,{error:error})]});}function ErrorBoundaryError(_ref2){var error=_ref2.error;var causalChain=(0,lib/* getErrorCausalChain */.rA)(error);var fullMessage=causalChain.map(function(e){return e.message;}).join('\n\nCause:\n');return/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{whiteSpace:'pre-wrap'},children:fullMessage});}// A bit hacky: we need to add an artificial RouteContextProvider here
// The goal is to be able to render the error inside the theme layout
// Without this, our theme classic would crash due to lack of route context
// See also https://github.com/facebook/docusaurus/pull/9852
function ErrorRouteContextProvider(_ref3){var children=_ref3.children;return/*#__PURE__*/(0,jsx_runtime.jsx)(routeContext/* RouteContextProvider */.W,{value:{plugin:{name:'docusaurus-core-error-boundary',id:'default'}},children:children});}function Error(_ref4){var error=_ref4.error,tryAgain=_ref4.tryAgain;// We wrap the error in its own error boundary because the layout can actually
// throw too... Only the ErrorDisplay component is simple enough to be
// considered safe to never throw
return/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorRouteContextProvider,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(ErrorBoundary// Note: we display the original error here, not the error that we
// captured in this extra error boundary
,{fallback:function fallback(){return/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorDisplay,{error:error,tryAgain:tryAgain});},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Head/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:"Page Error"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorDisplay,{error:error,tryAgain:tryAgain})})]})});}
;// ./node_modules/@docusaurus/core/lib/client/exports/ErrorBoundary.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// eslint-disable-next-line react/function-component-definition
var DefaultFallback=function DefaultFallback(params){return/*#__PURE__*/(0,jsx_runtime.jsx)(Error,Object.assign({},params));};var ErrorBoundary=/*#__PURE__*/function(_React$Component){function ErrorBoundary(props){var _this;_this=_React$Component.call(this,props)||this;_this.state={error:null};return _this;}(0,inheritsLoose/* default */.A)(ErrorBoundary,_React$Component);var _proto=ErrorBoundary.prototype;_proto.componentDidCatch=function componentDidCatch(error){// Catch errors in any components below and re-render with error message
if(ExecutionEnvironment/* default */.A.canUseDOM){this.setState({error:error});}};_proto.render=function render(){var _this2=this;var children=this.props.children;var error=this.state.error;if(error){var _this$props$fallback;var fallbackParams={error:error,tryAgain:function tryAgain(){return _this2.setState({error:null});}};var fallback=(_this$props$fallback=this.props.fallback)!=null?_this$props$fallback:DefaultFallback;return fallback(fallbackParams);}// See https://github.com/facebook/docusaurus/issues/6337#issuecomment-1012913647
return children!=null?children:null;};return ErrorBoundary;}(react.Component);

/***/ }),

/***/ 38193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var canUseDOM=typeof window!=='undefined'&&'document'in window&&'createElement'in window.document;var ExecutionEnvironment={canUseDOM:canUseDOM,// window.attachEvent is IE-specific; it's very likely Docusaurus won't work
// on IE anyway.
canUseEventListeners:canUseDOM&&('addEventListener'in window||'attachEvent'in window),canUseIntersectionObserver:canUseDOM&&'IntersectionObserver'in window,canUseViewport:canUseDOM&&'screen'in window};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExecutionEnvironment);

/***/ }),

/***/ 5260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Head)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80545);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Head(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__/* .Helmet */ .mg,Object.assign({},props));}

/***/ }),

/***/ 28774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54625);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70440);
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44586);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16654);
/* harmony import */ var _ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38193);
/* harmony import */ var _useBrokenLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63427);
/* harmony import */ var _useBaseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
var _excluded=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO all this wouldn't be necessary if we used ReactRouter basename feature
// We don't automatically add base urls to all links,
// only the "safe" ones, starting with / (like /docs/introduction)
// this is because useBaseUrl() actually transforms relative links
// like "introduction" to "/baseUrl/introduction" => bad behavior to fix
var shouldAddBaseUrlAutomatically=function shouldAddBaseUrlAutomatically(to){return to.startsWith('/');};function Link(_ref,forwardedRef){var _targetLink,_targetLink$startsWit,_targetLink3;var isNavLink=_ref.isNavLink,to=_ref.to,href=_ref.href,activeClassName=_ref.activeClassName,isActive=_ref.isActive,noBrokenLinkCheck=_ref['data-noBrokenLinkCheck'],_ref$autoAddBaseUrl=_ref.autoAddBaseUrl,autoAddBaseUrl=_ref$autoAddBaseUrl===void 0?true:_ref$autoAddBaseUrl,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_ref,_excluded);var _useDocusaurusContext=(0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(),siteConfig=_useDocusaurusContext.siteConfig;var trailingSlash=siteConfig.trailingSlash,baseUrl=siteConfig.baseUrl;var router=siteConfig.future.experimental_router;var _useBaseUrlUtils=(0,_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__/* .useBaseUrlUtils */ .hH)(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;var brokenLinks=(0,_useBrokenLinks__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();var innerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef,function(){return innerRef.current;});// IMPORTANT: using to or href should not change anything
// For example, MDX links will ALWAYS give us the href props
// Using one prop or the other should not be used to distinguish
// internal links (/docs/myDoc) from external links (https://github.com)
var targetLinkUnprefixed=to||href;function maybeAddBaseUrl(str){return autoAddBaseUrl&&shouldAddBaseUrlAutomatically(str)?withBaseUrl(str):str;}var isInternal=(0,_isInternalUrl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(targetLinkUnprefixed);// pathname:// is a special "protocol" we use to tell Docusaurus link
// that a link is not "internal" and that we shouldn't use history.push()
// this is not ideal but a good enough escape hatch for now
// see https://github.com/facebook/docusaurus/issues/3309
// note: we want baseUrl to be appended (see issue for details)
// TODO read routes and automatically detect internal/external links?
var targetLinkWithoutPathnameProtocol=targetLinkUnprefixed==null?void 0:targetLinkUnprefixed.replace('pathname://','');// TODO we should use ReactRouter basename feature instead!
// Automatically apply base url in links that start with /
var targetLink=typeof targetLinkWithoutPathnameProtocol!=='undefined'?maybeAddBaseUrl(targetLinkWithoutPathnameProtocol):undefined;// TODO find a way to solve this problem properly
// Fix edge case when useBaseUrl is used on a link
// "./" is useful for images and other resources
// But we don't need it for <Link>
// unfortunately we can't really make the difference :/
if(router==='hash'&&(_targetLink=targetLink)!=null&&_targetLink.startsWith('./')){var _targetLink2;targetLink=(_targetLink2=targetLink)==null?void 0:_targetLink2.slice(1);}if(targetLink&&isInternal){targetLink=(0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_8__/* .applyTrailingSlash */ .Ks)(targetLink,{trailingSlash:trailingSlash,baseUrl:baseUrl});}var preloaded=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);var LinkComponent=isNavLink?react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .NavLink */ .k2:react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .Link */ .N_;var IOSupported=_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.canUseIntersectionObserver;var ioRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();var handleRef=function handleRef(el){innerRef.current=el;if(IOSupported&&el&&isInternal){// If IO supported and element reference found, set up Observer.
ioRef.current=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(el===entry.target){// If element is in viewport, stop observing and run callback.
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
if(entry.isIntersecting||entry.intersectionRatio>0){ioRef.current.unobserve(el);ioRef.current.disconnect();if(targetLink!=null){window.docusaurus.prefetch(targetLink);}}}});});// Add element to the observer.
ioRef.current.observe(el);}};var onInteractionEnter=function onInteractionEnter(){if(!preloaded.current&&targetLink!=null){window.docusaurus.preload(targetLink);preloaded.current=true;}};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){// If IO is not supported. We prefetch by default (only once).
if(!IOSupported&&isInternal&&_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.canUseDOM){if(targetLink!=null){window.docusaurus.prefetch(targetLink);}}// When unmounting, stop intersection observer from watching.
return function(){if(IOSupported&&ioRef.current){ioRef.current.disconnect();}};},[ioRef,targetLink,IOSupported,isInternal]);// It is simple local anchor link targeting current page?
var isAnchorLink=(_targetLink$startsWit=(_targetLink3=targetLink)==null?void 0:_targetLink3.startsWith('#'))!=null?_targetLink$startsWit:false;// See also RR logic:
// https://github.com/remix-run/react-router/blob/v5/packages/react-router-dom/modules/Link.js#L47
var hasInternalTarget=!props.target||props.target==='_self';// Should we use a regular <a> tag instead of React-Router Link component?
var isRegularHtmlLink=!targetLink||!isInternal||!hasInternalTarget||// When using the hash router, we can't use the regular <a> link for anchors
// We need to use React Router to navigate to /#/pathname/#anchor
// And not /#anchor
// See also https://github.com/facebook/docusaurus/pull/10311
isAnchorLink&&router!=='hash';if(!noBrokenLinkCheck&&(isAnchorLink||!isRegularHtmlLink)){brokenLinks.collectLink(targetLink);}if(props.id){brokenLinks.collectAnchor(props.id);}// These props are only added in unit tests to assert/capture the type of link
var testOnlyProps= false?0:{};return isRegularHtmlLink?/*#__PURE__*/// eslint-disable-next-line jsx-a11y/anchor-has-content, @docusaurus/no-html-links
(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a",Object.assign({ref:innerRef,href:targetLink},targetLinkUnprefixed&&!isInternal&&{target:'_blank',rel:'noopener noreferrer'},props,testOnlyProps)):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(LinkComponent,Object.assign({},props,{onMouseEnter:onInteractionEnter,onTouchStart:onInteractionEnter,innerRef:handleRef,to:targetLink// Avoid "React does not recognize the `activeClassName` prop on a DOM
// element"
},isNavLink&&{isActive:isActive,activeClassName:activeClassName},testOnlyProps));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Link));

/***/ }),

/***/ 21312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Translate),
  T: () => (/* binding */ translate)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/core/lib/client/exports/Interpolate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function interpolate(text,values){// eslint-disable-next-line prefer-named-capture-group
var segments=text.split(/(\{\w+\})/).map(function(seg,index){// Odd indices (1, 3, 5...) of the segments are (potentially) interpolatable
if(index%2===1){var value=values==null?void 0:values[seg.slice(1,-1)];if(value!==undefined){return value;}// No match: add warning? There's no way to "escape" interpolation though
}return seg;});if(segments.some(function(seg){return/*#__PURE__*/(0,react.isValidElement)(seg);})){return segments.map(function(seg,index){return/*#__PURE__*/(0,react.isValidElement)(seg)?/*#__PURE__*/react.cloneElement(seg,{key:index}):seg;}).filter(function(seg){return seg!=='';});}return segments.join('');}function Interpolate(_ref){var children=_ref.children,values=_ref.values;if(typeof children!=='string'){throw new Error("The Docusaurus <Interpolate> component only accept simple string values. Received: "+(/*#__PURE__*/isValidElement(children)?'React element':typeof children));}return/*#__PURE__*/_jsx(_Fragment,{children:interpolate(children,values)});}
// EXTERNAL MODULE: ./apps/docs/.docusaurus/codeTranslations.json
var codeTranslations = __webpack_require__(14853);
;// ./node_modules/@docusaurus/core/lib/client/exports/Translate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Can't read it from context, due to exposing imperative API
function getLocalizedMessage(_ref){var _ref2,_codeTranslations;var id=_ref.id,message=_ref.message;if(typeof id==='undefined'&&typeof message==='undefined'){throw new Error('Docusaurus translation declarations must have at least a translation id or a default translation message');}return(_ref2=(_codeTranslations=codeTranslations[id!=null?id:message])!=null?_codeTranslations:message)!=null?_ref2:id;}// Imperative translation API is useful for some edge-cases:
// - translating page titles (meta)
// - translating string props (input placeholders, image alt, aria labels...)
function translate(_ref3,values){var message=_ref3.message,id=_ref3.id;var localizedMessage=getLocalizedMessage({message:message,id:id});return interpolate(localizedMessage,values);}// Maybe we'll want to improve this component with additional features
// Like toggling a translation mode that adds a little translation button near
// the text?
function Translate(_ref4){var children=_ref4.children,id=_ref4.id,values=_ref4.values;if(children&&typeof children!=='string'){console.warn('Illegal <Translate> children',children);throw new Error('The Docusaurus <Translate> component only accept simple string values');}var localizedMessage=getLocalizedMessage({message:children,id:id});return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:interpolate(localizedMessage,values)});}

/***/ }),

/***/ 17065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ DEFAULT_PLUGIN_ID)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Constants used on the client-side: duplicated from server-side code
var DEFAULT_PLUGIN_ID='default';

/***/ }),

/***/ 16654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ isInternalUrl),
/* harmony export */   z: () => (/* binding */ hasProtocol)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function hasProtocol(url){return /^(?:\w*:|\/\/)/.test(url);}function isInternalUrl(url){return typeof url!=='undefined'&&!hasProtocol(url);}

/***/ }),

/***/ 86025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ useBaseUrl),
/* harmony export */   hH: () => (/* binding */ useBaseUrlUtils)
/* harmony export */ });
/* unused harmony export addBaseUrl */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44586);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16654);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function addBaseUrl(_ref){var siteUrl=_ref.siteUrl,baseUrl=_ref.baseUrl,url=_ref.url,_ref$options=_ref.options,_ref$options2=_ref$options===void 0?{}:_ref$options,_ref$options2$forcePr=_ref$options2.forcePrependBaseUrl,forcePrependBaseUrl=_ref$options2$forcePr===void 0?false:_ref$options2$forcePr,_ref$options2$absolut=_ref$options2.absolute,absolute=_ref$options2$absolut===void 0?false:_ref$options2$absolut,router=_ref.router;// It never makes sense to add base url to a local anchor url, or one with a
// protocol
if(!url||url.startsWith('#')||(0,_isInternalUrl__WEBPACK_IMPORTED_MODULE_2__/* .hasProtocol */ .z)(url)){return url;}// TODO hash router + /baseUrl/ is unlikely to work well in all situations
// This will support most cases, but not all
// See https://github.com/facebook/docusaurus/pull/9859
if(router==='hash'){return url.startsWith('/')?"."+url:"./"+url;}if(forcePrependBaseUrl){return baseUrl+url.replace(/^\//,'');}// /baseUrl -> /baseUrl/
// https://github.com/facebook/docusaurus/issues/6315
if(url===baseUrl.replace(/\/$/,'')){return baseUrl;}// We should avoid adding the baseurl twice if it's already there
var shouldAddBaseUrl=!url.startsWith(baseUrl);var basePath=shouldAddBaseUrl?baseUrl+url.replace(/^\//,''):url;return absolute?siteUrl+basePath:basePath;}function useBaseUrlUtils(){var _useDocusaurusContext=(0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(),siteConfig=_useDocusaurusContext.siteConfig;var baseUrl=siteConfig.baseUrl,siteUrl=siteConfig.url;var router=siteConfig.future.experimental_router;var withBaseUrl=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(url,options){return addBaseUrl({siteUrl:siteUrl,baseUrl:baseUrl,url:url,options:options,router:router});},[siteUrl,baseUrl,router]);return{withBaseUrl:withBaseUrl};}function useBaseUrl(url,options){if(options===void 0){options={};}var _useBaseUrlUtils=useBaseUrlUtils(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;return withBaseUrl(url,options);}

/***/ }),

/***/ 63427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useBrokenLinks)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/core/lib/client/BrokenLinksContext.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var createStatefulBrokenLinks=function createStatefulBrokenLinks(){// Set to dedup, as it's not useful to collect multiple times the same value
var allAnchors=new Set();var allLinks=new Set();return{collectAnchor:function collectAnchor(anchor){typeof anchor!=='undefined'&&allAnchors.add(anchor);},collectLink:function collectLink(link){typeof link!=='undefined'&&allLinks.add(link);},getCollectedAnchors:function getCollectedAnchors(){return[].concat(allAnchors);},getCollectedLinks:function getCollectedLinks(){return[].concat(allLinks);}};};var Context=/*#__PURE__*/react.createContext({collectAnchor:function collectAnchor(){// No-op for client
},collectLink:function collectLink(){// No-op for client
}});var useBrokenLinksContext=function useBrokenLinksContext(){return (0,react.useContext)(Context);};function BrokenLinksProvider(_ref){var children=_ref.children,brokenLinks=_ref.brokenLinks;return/*#__PURE__*/_jsx(Context.Provider,{value:brokenLinks,children:children});}
;// ./node_modules/@docusaurus/core/lib/client/exports/useBrokenLinks.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useBrokenLinks(){return useBrokenLinksContext();}

/***/ }),

/***/ 44586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useDocusaurusContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81345);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useDocusaurusContext(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_docusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ .o);}

/***/ }),

/***/ 92303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useIsBrowser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _browserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6125);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useIsBrowser(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_browserContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ .o);}

/***/ }),

/***/ 205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38193);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * This hook is like `useLayoutEffect`, but without the SSR warning.
 * It seems hacky but it's used in many React libs (Redux, Formik...).
 * Also mentioned here: https://github.com/facebook/react/issues/16956
 *
 * It is useful when you need to update a ref as soon as possible after a React
 * render (before `useEffect`).
 *
 * TODO should become unnecessary in React v19?
 * https://github.com/facebook/react/pull/26395
 * This was added in core with Docusaurus v3 but kept undocumented on purpose
 */var useIsomorphicLayoutEffect=_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsomorphicLayoutEffect);

/***/ }),

/***/ 36803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useRouteContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _routeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53102);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useRouteContext(){var context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_routeContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ .o);if(!context){throw new Error('Unexpected: no Docusaurus route context found');}return context;}

/***/ }),

/***/ 86921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ flat)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var isTree=function isTree(x){return typeof x==='object'&&!!x&&Object.keys(x).length>0;};/**
 * Takes a tree, and flattens it into a map of keyPath -> value.
 *
 * ```js
 * flat({ a: { b: 1 } }) === { "a.b": 1 };
 * flat({ a: [1, 2] }) === { "a.0": 1, "a.1": 2 };
 * ```
 */function flat(target){var delimiter='.';var output={};function dfs(object,prefix){Object.entries(object).forEach(function(_ref){var key=_ref[0],value=_ref[1];var newKey=prefix?""+prefix+delimiter+key:key;if(isTree(value)){dfs(value,newKey);}else{output[newKey]=value;}});}dfs(target);return output;}

/***/ }),

/***/ 53102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ RouteContextProvider),
/* harmony export */   o: () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function mergeContexts(_ref){var parent=_ref.parent,value=_ref.value;if(!parent){if(!value){throw new Error('Unexpected: no Docusaurus route context found');}else if(!('plugin'in value)){throw new Error('Unexpected: Docusaurus topmost route context has no `plugin` attribute');}return value;}// TODO deep merge this
var data=Object.assign({},parent.data,value==null?void 0:value.data);return{// Nested routes are not supposed to override plugin attribute
plugin:parent.plugin,data:data};}function RouteContextProvider(_ref2){var children=_ref2.children,value=_ref2.value;var parent=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);var mergedValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return mergeContexts({parent:parent,value:value});},[parent,value]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:mergedValue,children:children});}

/***/ }),

/***/ 53886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VQ: () => (/* binding */ DocsPreferredVersionContextProvider),
/* harmony export */   g1: () => (/* binding */ useDocsPreferredVersion)
/* harmony export */ });
/* unused harmony export useDocsPreferredVersionByPluginId */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44070);
/* harmony import */ var _docusaurus_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17065);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6342);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60867);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43807);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var storageKey=function storageKey(pluginId){return"docs-preferred-version-"+pluginId;};var DocsPreferredVersionStorage={save:function save(pluginId,persistence,versionName){(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .createStorageSlot */ .Wf)(storageKey(pluginId),{persistence:persistence}).set(versionName);},read:function read(pluginId,persistence){return (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .createStorageSlot */ .Wf)(storageKey(pluginId),{persistence:persistence}).get();},clear:function clear(pluginId,persistence){(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .createStorageSlot */ .Wf)(storageKey(pluginId),{persistence:persistence}).del();}};/**
 * Initial state is always null as we can't read local storage from node SSR
 */var getInitialState=function getInitialState(pluginIds){return Object.fromEntries(pluginIds.map(function(id){return[id,{preferredVersionName:null}];}));};/**
 * Read storage for all docs plugins, assigning each doc plugin a preferred
 * version (if found)
 */function readStorageState(_ref){var pluginIds=_ref.pluginIds,versionPersistence=_ref.versionPersistence,allDocsData=_ref.allDocsData;/**
     * The storage value we read might be stale, and belong to a version that does
     * not exist in the site anymore. In such case, we remove the storage value to
     * avoid downstream errors.
     */function restorePluginState(pluginId){var preferredVersionNameUnsafe=DocsPreferredVersionStorage.read(pluginId,versionPersistence);var pluginData=allDocsData[pluginId];var versionExists=pluginData.versions.some(function(version){return version.name===preferredVersionNameUnsafe;});if(versionExists){return{preferredVersionName:preferredVersionNameUnsafe};}DocsPreferredVersionStorage.clear(pluginId,versionPersistence);return{preferredVersionName:null};}return Object.fromEntries(pluginIds.map(function(id){return[id,restorePluginState(id)];}));}function useVersionPersistence(){return (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useThemeConfig */ .p)().docs.versionPersistence;}var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function useContextValue(){var allDocsData=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .useAllDocsData */ .Gy)();var versionPersistence=useVersionPersistence();var pluginIds=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return Object.keys(allDocsData);},[allDocsData]);// Initial state is empty, as we can't read browser storage in node/SSR
var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){return getInitialState(pluginIds);}),state=_useState[0],setState=_useState[1];// On mount, we set the state read from browser storage
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){setState(readStorageState({allDocsData:allDocsData,versionPersistence:versionPersistence,pluginIds:pluginIds}));},[allDocsData,versionPersistence,pluginIds]);// The API that we expose to consumer hooks (memo for constant object)
var api=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){function savePreferredVersion(pluginId,versionName){DocsPreferredVersionStorage.save(pluginId,versionPersistence,versionName);setState(function(s){var _Object$assign;return Object.assign({},s,(_Object$assign={},_Object$assign[pluginId]={preferredVersionName:versionName},_Object$assign));});}return{savePreferredVersion:savePreferredVersion};},[versionPersistence]);return[state,api];}function DocsPreferredVersionContextProviderUnsafe(_ref2){var children=_ref2.children;var value=useContextValue();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:value,children:children});}/**
 * This is a maybe-layer. If the docs plugin is not enabled, this provider is a
 * simple pass-through.
 */function DocsPreferredVersionContextProvider(_ref3){var children=_ref3.children;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DocsPreferredVersionContextProviderUnsafe,{children:children});}function useDocsPreferredVersionContext(){var value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!value){throw new _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .ReactContextError */ .dV('DocsPreferredVersionContextProvider');}return value;}/**
 * Returns a read-write interface to a plugin's preferred version. The
 * "preferred version" is defined as the last version that the user visited.
 * For example, if a user is using v3, even when v4 is later published, the user
 * would still be browsing v3 docs when she opens the website next time. Note,
 * the `preferredVersion` attribute will always be `null` before mount.
 */function useDocsPreferredVersion(pluginId){var _docsData$versions$fi;if(pluginId===void 0){pluginId=_docusaurus_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_PLUGIN_ID */ .W;}var docsData=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .useDocsData */ .ht)(pluginId);var _useDocsPreferredVers=useDocsPreferredVersionContext(),state=_useDocsPreferredVers[0],api=_useDocsPreferredVers[1];var preferredVersionName=state[pluginId].preferredVersionName;var preferredVersion=(_docsData$versions$fi=docsData.versions.find(function(version){return version.name===preferredVersionName;}))!=null?_docsData$versions$fi:null;var savePreferredVersionName=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(versionName){api.savePreferredVersion(pluginId,versionName);},[api,pluginId]);return{preferredVersion:preferredVersion,savePreferredVersionName:savePreferredVersionName};}function useDocsPreferredVersionByPluginId(){var allDocsData=useAllDocsData();var _useDocsPreferredVers2=useDocsPreferredVersionContext(),state=_useDocsPreferredVers2[0];function getPluginIdPreferredVersion(pluginId){var _docsData$versions$fi2;var docsData=allDocsData[pluginId];var preferredVersionName=state[pluginId].preferredVersionName;return(_docsData$versions$fi2=docsData.versions.find(function(version){return version.name===preferredVersionName;}))!=null?_docsData$versions$fi2:null;}var pluginIds=Object.keys(allDocsData);return Object.fromEntries(pluginIds.map(function(id){return[id,getPluginIdPreferredVersion(id)];}));}

/***/ }),

/***/ 60609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ DocsSidebarProvider),
/* harmony export */   t: () => (/* binding */ useDocsSidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43807);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Using a Symbol because null is a valid context value (a doc with no sidebar)
// Inspired by https://github.com/jamiebuilds/unstated-next/blob/master/src/unstated-next.tsx
var EmptyContext=Symbol('EmptyContext');var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(EmptyContext);/**
 * Provide the current sidebar to your children.
 */function DocsSidebarProvider(_ref){var children=_ref.children,name=_ref.name,items=_ref.items;var stableValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return name&&items?{name:name,items:items}:null;},[name,items]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:stableValue,children:children});}/**
 * Gets the sidebar that's currently displayed, or `null` if there isn't one
 */function useDocsSidebar(){var value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(value===EmptyContext){throw new _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .ReactContextError */ .dV('DocsSidebarProvider');}return value;}

/***/ }),

/***/ 26972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $S: () => (/* binding */ useCurrentSidebarCategory),
/* harmony export */   B5: () => (/* binding */ useDocRootMetadata),
/* harmony export */   Nr: () => (/* binding */ findFirstSidebarItemLink),
/* harmony export */   OF: () => (/* binding */ useSidebarBreadcrumbs),
/* harmony export */   QB: () => (/* binding */ useLayoutDoc),
/* harmony export */   Vd: () => (/* binding */ useDocsVersionCandidates),
/* harmony export */   Y: () => (/* binding */ useVisibleSidebarItems),
/* harmony export */   cC: () => (/* binding */ useDocById),
/* harmony export */   d1: () => (/* binding */ filterDocCardListItems),
/* harmony export */   fW: () => (/* binding */ useLayoutDocsSidebar),
/* harmony export */   w8: () => (/* binding */ isActiveSidebarItem)
/* harmony export */ });
/* unused harmony exports findSidebarCategory, findFirstSidebarItemCategoryLink, isVisibleSidebarItem */
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelperLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43845);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35527);
/* harmony import */ var _docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22831);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44070);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99169);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31682);
/* harmony import */ var _docsPreferredVersion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53886);
/* harmony import */ var _docsVersion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23025);
/* harmony import */ var _docsSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60609);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useDocById(id){var version=(0,_docsVersion__WEBPACK_IMPORTED_MODULE_1__/* .useDocsVersion */ .r)();if(!id){return undefined;}var doc=version.docs[id];if(!doc){throw new Error("no version doc found by id="+id);}return doc;}/**
 * Pure function, similar to `Array#find`, but works on the sidebar tree.
 */function findSidebarCategory(sidebar,predicate){for(var _iterator=_createForOfIteratorHelperLoose(sidebar),_step;!(_step=_iterator()).done;){var item=_step.value;if(item.type==='category'){if(predicate(item)){return item;}var subItem=findSidebarCategory(item.items,predicate);if(subItem){return subItem;}}}return undefined;}/**
 * Best effort to assign a link to a sidebar category. If the category doesn't
 * have a link itself, we link to the first sub item with a link.
 */function findFirstSidebarItemCategoryLink(item){if(item.href&&!item.linkUnlisted){return item.href;}for(var _iterator2=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelperLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(item.items),_step2;!(_step2=_iterator2()).done;){var subItem=_step2.value;var link=findFirstSidebarItemLink(subItem);if(link){return link;}}return undefined;}/**
 * Best effort to assign a link to a sidebar item.
 */function findFirstSidebarItemLink(item){if(item.type==='link'&&!item.unlisted){return item.href;}if(item.type==='category'){return findFirstSidebarItemCategoryLink(item);}// Other items types, like "html"
return undefined;}/**
 * Gets the category associated with the current location. Should only be used
 * on category index pages.
 */function useCurrentSidebarCategory(){var _useLocation=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .useLocation */ .zy)(),pathname=_useLocation.pathname;var sidebar=(0,_docsSidebar__WEBPACK_IMPORTED_MODULE_4__/* .useDocsSidebar */ .t)();if(!sidebar){throw new Error('Unexpected: cant find current sidebar in context');}var categoryBreadcrumbs=getSidebarBreadcrumbs({sidebarItems:sidebar.items,pathname:pathname,onlyCategories:true});var deepestCategory=categoryBreadcrumbs.slice(-1)[0];if(!deepestCategory){throw new Error(pathname+" is not associated with a category. useCurrentSidebarCategory() should only be used on category index pages.");}return deepestCategory;}var isActive=function isActive(testedPath,activePath){return typeof testedPath!=='undefined'&&(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .isSamePath */ .ys)(testedPath,activePath);};var containsActiveSidebarItem=function containsActiveSidebarItem(items,activePath){return items.some(function(subItem){return isActiveSidebarItem(subItem,activePath);});};/**
 * Checks if a sidebar item should be active, based on the active path.
 */function isActiveSidebarItem(item,activePath){if(item.type==='link'){return isActive(item.href,activePath);}if(item.type==='category'){return isActive(item.href,activePath)||containsActiveSidebarItem(item.items,activePath);}return false;}function isVisibleSidebarItem(item,activePath){switch(item.type){case'category':return isActiveSidebarItem(item,activePath)||item.items.some(function(subItem){return isVisibleSidebarItem(subItem,activePath);});case'link':// An unlisted item remains visible if it is active
return!item.unlisted||isActiveSidebarItem(item,activePath);default:return true;}}function useVisibleSidebarItems(items,activePath){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return items.filter(function(item){return isVisibleSidebarItem(item,activePath);});},[items,activePath]);}/**
 * Get the sidebar the breadcrumbs for a given pathname
 * Ordered from top to bottom
 */function getSidebarBreadcrumbs(_ref){var sidebarItems=_ref.sidebarItems,pathname=_ref.pathname,_ref$onlyCategories=_ref.onlyCategories,onlyCategories=_ref$onlyCategories===void 0?false:_ref$onlyCategories;var breadcrumbs=[];function extract(items){for(var _iterator3=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelperLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(items),_step3;!(_step3=_iterator3()).done;){var item=_step3.value;if(item.type==='category'&&((0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .isSamePath */ .ys)(item.href,pathname)||extract(item.items))||item.type==='link'&&(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .isSamePath */ .ys)(item.href,pathname)){var filtered=onlyCategories&&item.type!=='category';if(!filtered){breadcrumbs.unshift(item);}return true;}}return false;}extract(sidebarItems);return breadcrumbs;}/**
 * Gets the breadcrumbs of the current doc page, based on its sidebar location.
 * Returns `null` if there's no sidebar or breadcrumbs are disabled.
 */function useSidebarBreadcrumbs(){var _useActivePlugin;var sidebar=(0,_docsSidebar__WEBPACK_IMPORTED_MODULE_4__/* .useDocsSidebar */ .t)();var _useLocation2=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .useLocation */ .zy)(),pathname=_useLocation2.pathname;var breadcrumbsOption=(_useActivePlugin=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__/* .useActivePlugin */ .vT)())==null?void 0:_useActivePlugin.pluginData.breadcrumbs;if(breadcrumbsOption===false||!sidebar){return null;}return getSidebarBreadcrumbs({sidebarItems:sidebar.items,pathname:pathname});}/**
 * "Version candidates" are mostly useful for the layout components, which must
 * be able to work on all pages. For example, if a user has `{ type: "doc",
 * docId: "intro" }` as a navbar item, which version does that refer to? We
 * believe that it could refer to at most three version candidates:
 *
 * 1. The **active version**, the one that the user is currently browsing. See
 * {@link useActiveDocContext}.
 * 2. The **preferred version**, the one that the user last visited. See
 * {@link useDocsPreferredVersion}.
 * 3. The **latest version**, the "default". See {@link useLatestVersion}.
 *
 * @param docsPluginId The plugin ID to get versions from.
 * @returns An array of 1~3 versions with priorities defined above, guaranteed
 * to be unique and non-sparse. Will be memoized, hence stable for deps array.
 */function useDocsVersionCandidates(docsPluginId){var _useActiveDocContext=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__/* .useActiveDocContext */ .zK)(docsPluginId),activeVersion=_useActiveDocContext.activeVersion;var _useDocsPreferredVers=(0,_docsPreferredVersion__WEBPACK_IMPORTED_MODULE_7__/* .useDocsPreferredVersion */ .g1)(docsPluginId),preferredVersion=_useDocsPreferredVers.preferredVersion;var latestVersion=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__/* .useLatestVersion */ .r7)(docsPluginId);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .uniq */ .sb)([activeVersion,preferredVersion,latestVersion].filter(Boolean));},[activeVersion,preferredVersion,latestVersion]);}/**
 * The layout components, like navbar items, must be able to work on all pages,
 * even on non-doc ones where there's no version context, so a sidebar ID could
 * be ambiguous. This hook would always return a sidebar to be linked to. See
 * also {@link useDocsVersionCandidates} for how this selection is done.
 *
 * @throws This hook throws if a sidebar with said ID is not found.
 */function useLayoutDocsSidebar(sidebarId,docsPluginId){var versions=useDocsVersionCandidates(docsPluginId);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){var allSidebars=versions.flatMap(function(version){return version.sidebars?Object.entries(version.sidebars):[];});var sidebarEntry=allSidebars.find(function(sidebar){return sidebar[0]===sidebarId;});if(!sidebarEntry){throw new Error("Can't find any sidebar with id \""+sidebarId+"\" in version"+(versions.length>1?'s':'')+" "+versions.map(function(version){return version.name;}).join(', ')+"\".\nAvailable sidebar ids are:\n- "+allSidebars.map(function(entry){return entry[0];}).join('\n- '));}return sidebarEntry[1];},[sidebarId,versions]);}/**
 * The layout components, like navbar items, must be able to work on all pages,
 * even on non-doc ones where there's no version context, so a doc ID could be
 * ambiguous. This hook would always return a doc to be linked to. See also
 * {@link useDocsVersionCandidates} for how this selection is done.
 *
 * @throws This hook throws if a doc with said ID is not found.
 */function useLayoutDoc(docId,docsPluginId){var versions=useDocsVersionCandidates(docsPluginId);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){var allDocs=versions.flatMap(function(version){return version.docs;});var doc=allDocs.find(function(versionDoc){return versionDoc.id===docId;});if(!doc){var isDraft=versions.flatMap(function(version){return version.draftIds;}).includes(docId);// Drafts should be silently filtered instead of throwing
if(isDraft){return null;}throw new Error("Couldn't find any doc with id \""+docId+"\" in version"+(versions.length>1?'s':'')+" \""+versions.map(function(version){return version.name;}).join(', ')+"\".\nAvailable doc ids are:\n- "+(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .uniq */ .sb)(allDocs.map(function(versionDoc){return versionDoc.id;})).join('\n- '));}return doc;},[docId,versions]);}// TODO later read version/route directly from context
/**
 * The docs plugin creates nested routes, with the top-level route providing the
 * version metadata, and the subroutes creating individual doc pages. This hook
 * will match the current location against all known sub-routes.
 *
 * @param props The props received by `@theme/DocRoot`
 * @returns The data of the relevant document at the current location, or `null`
 * if no document associated with the current location can be found.
 */function useDocRootMetadata(_ref2){var route=_ref2.route;var location=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .useLocation */ .zy)();var versionMetadata=(0,_docsVersion__WEBPACK_IMPORTED_MODULE_1__/* .useDocsVersion */ .r)();var docRoutes=route.routes;var currentDocRoute=docRoutes.find(function(docRoute){return (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .matchPath */ .B6)(location.pathname,docRoute);});if(!currentDocRoute){return null;}// For now, the sidebarName is added as route config: not ideal!
var sidebarName=currentDocRoute.sidebar;var sidebarItems=sidebarName?versionMetadata.docsSidebars[sidebarName]:undefined;var docElement=(0,_docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_9__/* .renderRoutes */ .v)(docRoutes);return{docElement:docElement,sidebarName:sidebarName,sidebarItems:sidebarItems};}/**
 * Filter items we don't want to display on the doc card list view
 * @param items
 */function filterDocCardListItems(items){return items.filter(function(item){var canHaveLink=item.type==='category'||item.type==='link';if(canHaveLink){return!!findFirstSidebarItemLink(item);}return true;});}

/***/ }),

/***/ 23025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ DocsVersionProvider),
/* harmony export */   r: () => (/* binding */ useDocsVersion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43807);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);/**
 * Provide the current version's metadata to your children.
 */function DocsVersionProvider(_ref){var children=_ref.children,version=_ref.version;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:version,children:children});}/**
 * Gets the version metadata of the current doc page.
 */function useDocsVersion(){var version=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(version===null){throw new _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .ReactContextError */ .dV('DocsVersionProvider');}return version;}

/***/ }),

/***/ 44070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zK: () => (/* binding */ useActiveDocContext),
  vT: () => (/* binding */ useActivePlugin),
  Gy: () => (/* binding */ useAllDocsData),
  HW: () => (/* binding */ useDocVersionSuggestions),
  ht: () => (/* binding */ useDocsData),
  r7: () => (/* binding */ useLatestVersion),
  jh: () => (/* binding */ useVersions)
});

// UNUSED EXPORTS: DocProvider, DocSidebarItemsExpandedStateProvider, DocsPreferredVersionContextProvider, DocsSidebarProvider, DocsVersionProvider, filterDocCardListItems, findFirstSidebarItemLink, findSidebarCategory, getDocsVersionSearchTag, isActiveSidebarItem, isVisibleSidebarItem, useActivePluginAndVersion, useActiveVersion, useCurrentSidebarCategory, useDoc, useDocById, useDocRootMetadata, useDocSidebarItemsExpandedState, useDocsContextualSearchTags, useDocsPreferredVersion, useDocsPreferredVersionByPluginId, useDocsSidebar, useDocsVersion, useDocsVersionCandidates, useLayoutDoc, useLayoutDocsSidebar, useSidebarBreadcrumbs, useVisibleSidebarItems

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(35527);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(44586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/constants.js
var constants = __webpack_require__(17065);
;// ./node_modules/@docusaurus/core/lib/client/exports/useGlobalData.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useGlobalData(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.A)(),globalData=_useDocusaurusContext.globalData;return globalData;}function useAllPluginInstancesData(pluginName,options){if(options===void 0){options={};}var globalData=useGlobalData();var pluginGlobalData=globalData[pluginName];if(!pluginGlobalData&&options.failfast){throw new Error("Docusaurus plugin global data not found for \""+pluginName+"\" plugin.");}return pluginGlobalData;}function usePluginData(pluginName,pluginId,options){if(pluginId===void 0){pluginId=constants/* DEFAULT_PLUGIN_ID */.W;}if(options===void 0){options={};}var pluginGlobalData=useAllPluginInstancesData(pluginName);var pluginInstanceGlobalData=pluginGlobalData==null?void 0:pluginGlobalData[pluginId];if(!pluginInstanceGlobalData&&options.failfast){throw new Error("Docusaurus plugin global data not found for \""+pluginName+"\" plugin with id \""+pluginId+"\".");}return pluginInstanceGlobalData;}
;// ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsClientUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// This code is not part of the api surface, not in ./theme on purpose
// get the data of the plugin that is currently "active"
// ie the docs of that plugin are currently browsed
// it is useful to support multiple docs plugin instances
function getActivePlugin(allPluginData,pathname,options){if(options===void 0){options={};}var activeEntry=Object.entries(allPluginData)// Route sorting: '/android/foo' should match '/android' instead of '/'
.sort(function(a,b){return b[1].path.localeCompare(a[1].path);}).find(function(_ref){var pluginData=_ref[1];return!!(0,react_router/* matchPath */.B6)(pathname,{path:pluginData.path,exact:false,strict:false});});var activePlugin=activeEntry?{pluginId:activeEntry[0],pluginData:activeEntry[1]}:undefined;if(!activePlugin&&options.failfast){throw new Error("Can't find active docs plugin for \""+pathname+"\" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(allPluginData).map(function(plugin){return plugin.path;}).join(', '));}return activePlugin;}var getLatestVersion=function getLatestVersion(data){return data.versions.find(function(version){return version.isLast;});};function docsClientUtils_getActiveVersion(data,pathname){// Sort paths so that a match-all version like /docs/* is matched last
// Otherwise /docs/* would match /docs/1.0.0/* routes
// This is simplified but similar to the core sortRoutes() logic
var sortedVersions=[].concat(data.versions).sort(function(a,b){if(a.path===b.path){return 0;}if(a.path.includes(b.path)){return-1;}if(b.path.includes(a.path)){return 1;}return 0;});return sortedVersions.find(function(version){return!!(0,react_router/* matchPath */.B6)(pathname,{path:version.path,exact:false,strict:false});});}function getActiveDocContext(data,pathname){var activeVersion=docsClientUtils_getActiveVersion(data,pathname);var activeDoc=activeVersion==null?void 0:activeVersion.docs.find(function(doc){return!!(0,react_router/* matchPath */.B6)(pathname,{path:doc.path,exact:true,strict:false});});function getAlternateVersionDocs(docId){var result={};data.versions.forEach(function(version){version.docs.forEach(function(doc){if(doc.id===docId){result[version.name]=doc;}});});return result;}var alternateVersionDocs=activeDoc?getAlternateVersionDocs(activeDoc.id):{};return{activeVersion:activeVersion,activeDoc:activeDoc,alternateDocVersions:alternateVersionDocs};}function getDocVersionSuggestions(data,pathname){var latestVersion=getLatestVersion(data);var activeDocContext=getActiveDocContext(data,pathname);var latestDocSuggestion=activeDocContext.alternateDocVersions[latestVersion.name];return{latestDocSuggestion:latestDocSuggestion,latestVersionSuggestion:latestVersion};}
;// ./node_modules/@docusaurus/plugin-content-docs/lib/client/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Important to use a constant object to avoid React useEffect executions etc.
// see https://github.com/facebook/docusaurus/issues/5089
var StableEmptyObject={};// In blog-only mode, docs hooks are still used by the theme. We need a fail-
// safe fallback when the docs plugin is not in use
var useAllDocsData=function useAllDocsData(){var _useAllPluginInstance;return(_useAllPluginInstance=useAllPluginInstancesData('docusaurus-plugin-content-docs'))!=null?_useAllPluginInstance:StableEmptyObject;};var useDocsData=function useDocsData(pluginId){try{return usePluginData('docusaurus-plugin-content-docs',pluginId,{failfast:true});}catch(error){throw new Error("You are using a feature of the Docusaurus docs plugin, but this plugin does not seem to be enabled"+(pluginId==='Default'?'':" (pluginId="+pluginId),{cause:error});}};// TODO this feature should be provided by docusaurus core
function useActivePlugin(options){if(options===void 0){options={};}var data=useAllDocsData();var _useLocation=(0,react_router/* useLocation */.zy)(),pathname=_useLocation.pathname;return getActivePlugin(data,pathname,options);}function useActivePluginAndVersion(options){if(options===void 0){options={};}var activePlugin=useActivePlugin(options);var _useLocation2=useLocation(),pathname=_useLocation2.pathname;if(!activePlugin){return undefined;}var activeVersion=getActiveVersion(activePlugin.pluginData,pathname);return{activePlugin:activePlugin,activeVersion:activeVersion};}/** Versions are returned ordered (most recent first). */function useVersions(pluginId){var data=useDocsData(pluginId);return data.versions;}function useLatestVersion(pluginId){var data=useDocsData(pluginId);return getLatestVersion(data);}/**
 * Returns `undefined` on doc-unrelated pages, because there's no version
 * currently considered as active.
 */function useActiveVersion(pluginId){var data=useDocsData(pluginId);var _useLocation3=useLocation(),pathname=_useLocation3.pathname;return getActiveVersion(data,pathname);}function useActiveDocContext(pluginId){var data=useDocsData(pluginId);var _useLocation4=(0,react_router/* useLocation */.zy)(),pathname=_useLocation4.pathname;return getActiveDocContext(data,pathname);}/**
 * Useful to say "hey, you are not on the latest docs version, please switch"
 */function useDocVersionSuggestions(pluginId){var data=useDocsData(pluginId);var _useLocation5=(0,react_router/* useLocation */.zy)(),pathname=_useLocation5.pathname;return getDocVersionSuggestions(data,pathname);}

/***/ }),

/***/ 76294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5947);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */nprogress__WEBPACK_IMPORTED_MODULE_0___default().configure({showSpinner:false});var delay=200;var clientModule={onRouteUpdate:function onRouteUpdate(_ref){var location=_ref.location,previousLocation=_ref.previousLocation;if(previousLocation&&location.pathname!==previousLocation.pathname){var progressBarTimeout=window.setTimeout(function(){nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();},delay);return function(){return window.clearTimeout(progressBarTimeout);};}return undefined;},onRouteDidUpdate:function onRouteDidUpdate(){nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientModule);

/***/ }),

/***/ 26134:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.mjs
var dist = __webpack_require__(71765);
// EXTERNAL MODULE: ./apps/docs/.docusaurus/docusaurus.config.mjs
var docusaurus_config = __webpack_require__(27999);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/prism-include-languages.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function prismIncludeLanguages(PrismObject){var prism=docusaurus_config["default"].themeConfig.prism;var additionalLanguages=prism.additionalLanguages;// Prism components work on the Prism instance on the window, while prism-
// react-renderer uses its own Prism instance. We temporarily mount the
// instance onto window, import components to enhance it, then remove it to
// avoid polluting global namespace.
// You can mutate PrismObject: registering plugins, deleting languages... As
// long as you don't re-assign it
var PrismBefore=globalThis.Prism;globalThis.Prism=PrismObject;additionalLanguages.forEach(function(lang){if(lang==='php'){// eslint-disable-next-line global-require
__webpack_require__(19700);}// eslint-disable-next-line global-require, import/no-dynamic-require
__webpack_require__(18692)("./prism-"+lang);});// Clean up and eventually restore former globalThis.Prism object (if any)
delete globalThis.Prism;if(typeof PrismBefore!=='undefined'){globalThis.Prism=PrismObject;}}
;// ./node_modules/@docusaurus/theme-classic/lib/prism-include-languages.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */prismIncludeLanguages(dist/* Prism */.My);

/***/ }),

/***/ 51107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Heading)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28774);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBrokenLinks.js + 1 modules
var useBrokenLinks = __webpack_require__(63427);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"anchorWithStickyNavbar":"anchorWithStickyNavbar_LWe7","anchorWithHideOnScrollNavbar":"anchorWithHideOnScrollNavbar_WYt5"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var _excluded=["as","id"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Heading(_ref){var As=_ref.as,id=_ref.id,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var brokenLinks=(0,useBrokenLinks/* default */.A)();var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.p)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll;// H1 headings do not need an id because they don't appear in the TOC.
if(As==='h1'||!id){return/*#__PURE__*/(0,jsx_runtime.jsx)(As,Object.assign({},props,{id:undefined}));}brokenLinks.collectAnchor(id);var anchorTitle=(0,Translate/* translate */.T)({id:'theme.common.headingLinkTitle',message:'Direct link to {heading}',description:'Title for link to heading'},{heading:typeof props.children==='string'?props.children:id});return/*#__PURE__*/(0,jsx_runtime.jsxs)(As,Object.assign({},props,{className:(0,clsx/* default */.A)('anchor',hideOnScroll?styles_module.anchorWithHideOnScrollNavbar:styles_module.anchorWithStickyNavbar,props.className),id:id,children:[props.children,/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"hash-link",to:"#"+id,"aria-label":anchorTitle,title:anchorTitle,children:"\u200B"})]}));}

/***/ }),

/***/ 43186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ IconExternalLink)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"iconExternalLink":"iconExternalLink_nPIU"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconExternalLink(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?13.5:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?13.5:_ref$height;return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:width,height:height,"aria-hidden":"true",viewBox:"0 0 24 24",className:styles_module.iconExternalLink,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})});}

/***/ }),

/***/ 28244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ErrorBoundary.js + 1 modules
var ErrorBoundary = __webpack_require__(67489);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(61213);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(35527);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
var useLocationChange = __webpack_require__(75062);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-common/lib/utils/skipToContentUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * The id of the element that should become focused on a page
 * that does not have a <main> html tag.
 * Focusing the Docusaurus Layout children is a reasonable fallback.
 *
 * __ prefix allows search crawlers (Algolia/DocSearch) to ignore anchors
 * https://github.com/facebook/docusaurus/issues/8883#issuecomment-1516328368
 */var SkipToContentFallbackId='__docusaurus_skipToContent_fallback';/**
 * Returns the skip to content element to focus when the link is clicked.
 */function getSkipToContentTarget(){var _document$querySelect;return(// Try to focus the <main> in priority
// Note: this will only work if JS is enabled
// See https://github.com/facebook/docusaurus/issues/6411#issuecomment-1284136069
(_document$querySelect=document.querySelector('main:first-of-type'))!=null?_document$querySelect:// Then try to focus the fallback element (usually the Layout children)
document.getElementById(SkipToContentFallbackId));}function programmaticFocus(el){el.setAttribute('tabindex','-1');el.focus();el.removeAttribute('tabindex');}/** This hook wires the logic for a skip-to-content link. */function useSkipToContent(){var containerRef=(0,react.useRef)(null);var _useHistory=(0,react_router/* useHistory */.W6)(),action=_useHistory.action;var onClick=(0,react.useCallback)(function(e){e.preventDefault();var targetElement=getSkipToContentTarget();if(targetElement){programmaticFocus(targetElement);}},[]);// "Reset" focus when navigating.
// See https://github.com/facebook/docusaurus/pull/8204#issuecomment-1276547558
(0,useLocationChange/* useLocationChange */.$)(function(_ref){var location=_ref.location;if(containerRef.current&&!location.hash&&action==='PUSH'){programmaticFocus(containerRef.current);}});return{containerRef:containerRef,onClick:onClick};}var DefaultSkipToContentLabel=(0,Translate/* translate */.T)({id:'theme.common.skipToMainContent',description:'The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation',message:'Skip to main content'});function SkipToContentLink(props){var _props$children;var linkLabel=(_props$children=props.children)!=null?_props$children:DefaultSkipToContentLabel;var _useSkipToContent=useSkipToContent(),containerRef=_useSkipToContent.containerRef,onClick=_useSkipToContent.onClick;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{ref:containerRef,role:"region","aria-label":DefaultSkipToContentLabel,children:/*#__PURE__*/(0,jsx_runtime.jsx)("a",Object.assign({},props,{// Note this is a fallback href in case JS is disabled
// It has limitations, see https://github.com/facebook/docusaurus/issues/6411#issuecomment-1284136069
href:"#"+SkipToContentFallbackId,onClick:onClick,children:linkLabel}))});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(17559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useKeyboardNavigation.js + 1 modules
var useKeyboardNavigation = __webpack_require__(14090);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/SkipToContent/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"skipToContent":"skipToContent_fXgn"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/SkipToContent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SkipToContent(){return/*#__PURE__*/(0,jsx_runtime.jsx)(SkipToContentLink,{className:styles_module.skipToContent});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/announcementBar.js
var contexts_announcementBar = __webpack_require__(65041);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Close/index.js
var _excluded=["width","height","color","strokeWidth","className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconClose(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?21:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?21:_ref$height,_ref$color=_ref.color,color=_ref$color===void 0?'currentColor':_ref$color,_ref$strokeWidth=_ref.strokeWidth,strokeWidth=_ref$strokeWidth===void 0?1.2:_ref$strokeWidth,className=_ref.className,restProps=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 15 15",width:width,height:height},restProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("g",{stroke:color,strokeWidth:strokeWidth,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/CloseButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CloseButton_styles_module = ({"closeButton":"closeButton_CVFx"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/CloseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBarCloseButton(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("button",Object.assign({type:"button","aria-label":(0,Translate/* translate */.T)({id:'theme.AnnouncementBar.closeButtonAriaLabel',message:'Close',description:'The ARIA label for close button of announcement bar'})},props,{className:(0,clsx/* default */.A)('clean-btn close',CloseButton_styles_module.closeButton,props.className),children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconClose,{width:14,height:14,strokeWidth:3.1})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Content_styles_module = ({"content":"content_knG7"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBarContent(props){var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.p)(),announcementBar=_useThemeConfig.announcementBar;var content=announcementBar.content;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},props,{className:(0,clsx/* default */.A)(Content_styles_module.content,props.className)// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:content}}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const AnnouncementBar_styles_module = ({"announcementBar":"announcementBar_mb4j","announcementBarPlaceholder":"announcementBarPlaceholder_vyr4","announcementBarClose":"announcementBarClose_gvF7","announcementBarContent":"announcementBarContent_xLdY"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBar(){var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.p)(),announcementBar=_useThemeConfig.announcementBar;var _useAnnouncementBar=(0,contexts_announcementBar/* useAnnouncementBar */.M)(),isActive=_useAnnouncementBar.isActive,close=_useAnnouncementBar.close;if(!isActive){return null;}var backgroundColor=announcementBar.backgroundColor,textColor=announcementBar.textColor,isCloseable=announcementBar.isCloseable;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:AnnouncementBar_styles_module.announcementBar,style:{backgroundColor:backgroundColor,color:textColor},role:"banner",children:[isCloseable&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:AnnouncementBar_styles_module.announcementBarPlaceholder}),/*#__PURE__*/(0,jsx_runtime.jsx)(AnnouncementBarContent,{className:AnnouncementBar_styles_module.announcementBarContent}),isCloseable&&/*#__PURE__*/(0,jsx_runtime.jsx)(AnnouncementBarCloseButton,{onClick:close,className:AnnouncementBar_styles_module.announcementBarClose})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js
var navbarMobileSidebar = __webpack_require__(22069);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(23104);
;// ./node_modules/@docusaurus/theme-common/lib/hooks/useHideableNavbar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Wires the imperative logic of a hideable navbar.
 * @param hideOnScroll If `false`, this hook is basically a no-op.
 */function useHideableNavbar(hideOnScroll){var _useState=(0,react.useState)(hideOnScroll),isNavbarVisible=_useState[0],setIsNavbarVisible=_useState[1];var isFocusedAnchor=(0,react.useRef)(false);var navbarHeight=(0,react.useRef)(0);var navbarRef=(0,react.useCallback)(function(node){if(node!==null){navbarHeight.current=node.getBoundingClientRect().height;}},[]);(0,scrollUtils/* useScrollPosition */.Mq)(function(_ref,lastPosition){var scrollTop=_ref.scrollY;if(!hideOnScroll){return;}// Needed mostly for handling rubber band scrolling.
// See https://github.com/facebook/docusaurus/pull/5721
if(scrollTop<navbarHeight.current){setIsNavbarVisible(true);return;}if(isFocusedAnchor.current){isFocusedAnchor.current=false;return;}var lastScrollTop=lastPosition==null?void 0:lastPosition.scrollY;var documentHeight=document.documentElement.scrollHeight-navbarHeight.current;var windowHeight=window.innerHeight;if(lastScrollTop&&scrollTop>=lastScrollTop){setIsNavbarVisible(false);}else if(scrollTop+windowHeight<documentHeight){setIsNavbarVisible(true);}});(0,useLocationChange/* useLocationChange */.$)(function(locationChangeEvent){if(!hideOnScroll){return;}// See https://github.com/facebook/docusaurus/pull/8059#issuecomment-1239639480
var currentHash=locationChangeEvent.location.hash;var currentHashAnchor=currentHash?document.getElementById(currentHash.substring(1)):undefined;if(currentHashAnchor){isFocusedAnchor.current=true;setIsNavbarVisible(false);return;}setIsNavbarVisible(true);});return{navbarRef:navbarRef,isNavbarVisible:isNavbarVisible};}
;// ./node_modules/@docusaurus/theme-common/lib/hooks/useLockBodyScroll.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Side-effect that locks the document body's scroll throughout the lifetime of
 * the containing component. e.g. when the mobile sidebar is expanded.
 */function useLockBodyScroll(lock){if(lock===void 0){lock=true;}(0,react.useEffect)(function(){document.body.style.overflow=lock?'hidden':'visible';return function(){document.body.style.overflow='visible';};},[lock]);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js + 5 modules
var reactUtils = __webpack_require__(43807);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var navbarSecondaryMenu_content = __webpack_require__(75600);
;// ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/display.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Context=/*#__PURE__*/react.createContext(null);function useContextValue(){var mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();var content=(0,navbarSecondaryMenu_content/* useNavbarSecondaryMenuContent */.YL)();var _useState=(0,react.useState)(false),shown=_useState[0],setShown=_useState[1];var hasContent=content.component!==null;var previousHasContent=(0,reactUtils/* usePrevious */.ZC)(hasContent);// When content is become available for the first time (set in useEffect)
// we set this content to be shown!
(0,react.useEffect)(function(){var contentBecameAvailable=hasContent&&!previousHasContent;if(contentBecameAvailable){setShown(true);}},[hasContent,previousHasContent]);// On sidebar close, secondary menu is set to be shown on next re-opening
// (if any secondary menu content available)
(0,react.useEffect)(function(){if(!hasContent){setShown(false);return;}if(!mobileSidebar.shown){setShown(true);}},[mobileSidebar.shown,hasContent]);return (0,react.useMemo)(function(){return[shown,setShown];},[shown]);}/** @internal */function NavbarSecondaryMenuDisplayProvider(_ref){var children=_ref.children;var value=useContextValue();return/*#__PURE__*/(0,jsx_runtime.jsx)(Context.Provider,{value:value,children:children});}function renderElement(content){if(content.component){var Comp=content.component;return/*#__PURE__*/(0,jsx_runtime.jsx)(Comp,Object.assign({},content.props));}return undefined;}/** Wires the logic for rendering the mobile navbar secondary menu. */function useNavbarSecondaryMenu(){var value=(0,react.useContext)(Context);if(!value){throw new reactUtils/* ReactContextError */.dV('NavbarSecondaryMenuDisplayProvider');}var shown=value[0],setShown=value[1];var hide=(0,react.useCallback)(function(){return setShown(false);},[setShown]);var content=(0,navbarSecondaryMenu_content/* useNavbarSecondaryMenuContent */.YL)();return (0,react.useMemo)(function(){return{shown:shown,hide:hide,content:renderElement(content)};},[hide,content,shown]);}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarMobileSidebarLayout(_ref){var header=_ref.header,primaryMenu=_ref.primaryMenu,secondaryMenu=_ref.secondaryMenu;var _useNavbarSecondaryMe=useNavbarSecondaryMenu(),secondaryMenuShown=_useNavbarSecondaryMe.shown;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"navbar-sidebar",children:[header,/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('navbar-sidebar__items',{'navbar-sidebar__items--show-secondary':secondaryMenuShown}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"navbar-sidebar__item menu",children:primaryMenu}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"navbar-sidebar__item menu",children:secondaryMenu})]})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(95293);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(92303);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/LightMode/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconLightMode(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 24 24",width:24,height:24},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/DarkMode/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconDarkMode(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 24 24",width:24,height:24},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/ColorModeToggle/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ColorModeToggle_styles_module = ({"toggle":"toggle_vylO","toggleButton":"toggleButton_gllP","darkToggleIcon":"darkToggleIcon_wfgR","lightToggleIcon":"lightToggleIcon_pyhR","toggleButtonDisabled":"toggleButtonDisabled_aARS"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/ColorModeToggle/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ColorModeToggle(_ref){var className=_ref.className,buttonClassName=_ref.buttonClassName,value=_ref.value,onChange=_ref.onChange;var isBrowser=(0,useIsBrowser/* default */.A)();var title=(0,Translate/* translate */.T)({message:'Switch between dark and light mode (currently {mode})',id:'theme.colorToggle.ariaLabel',description:'The ARIA label for the navbar color mode toggle'},{mode:value==='dark'?(0,Translate/* translate */.T)({message:'dark mode',id:'theme.colorToggle.ariaLabel.mode.dark',description:'The name for the dark color mode'}):(0,Translate/* translate */.T)({message:'light mode',id:'theme.colorToggle.ariaLabel.mode.light',description:'The name for the light color mode'})});return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(ColorModeToggle_styles_module.toggle,className),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{className:(0,clsx/* default */.A)('clean-btn',ColorModeToggle_styles_module.toggleButton,!isBrowser&&ColorModeToggle_styles_module.toggleButtonDisabled,buttonClassName),type:"button",onClick:function onClick(){return onChange(value==='dark'?'light':'dark');},disabled:!isBrowser,title:title,"aria-label":title,"aria-live":"polite","aria-pressed":value==='dark'?'true':'false',children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconLightMode,{className:(0,clsx/* default */.A)(ColorModeToggle_styles_module.toggleIcon,ColorModeToggle_styles_module.lightToggleIcon)}),/*#__PURE__*/(0,jsx_runtime.jsx)(IconDarkMode,{className:(0,clsx/* default */.A)(ColorModeToggle_styles_module.toggleIcon,ColorModeToggle_styles_module.darkToggleIcon)})]})});}/* harmony default export */ const theme_ColorModeToggle = (/*#__PURE__*/react.memo(ColorModeToggle));
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/ColorModeToggle/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Navbar_ColorModeToggle_styles_module = ({"darkNavbarColorModeToggle":"darkNavbarColorModeToggle_X3D1"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/ColorModeToggle/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarColorModeToggle(_ref){var className=_ref.className;var navbarStyle=(0,useThemeConfig/* useThemeConfig */.p)().navbar.style;var disabled=(0,useThemeConfig/* useThemeConfig */.p)().colorMode.disableSwitch;var _useColorMode=(0,contexts_colorMode/* useColorMode */.G)(),colorMode=_useColorMode.colorMode,setColorMode=_useColorMode.setColorMode;if(disabled){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(theme_ColorModeToggle,{className:className,buttonClassName:navbarStyle==='dark'?Navbar_ColorModeToggle_styles_module.darkNavbarColorModeToggle:undefined,value:colorMode,onChange:setColorMode});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Logo/index.js
var Logo = __webpack_require__(23465);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Logo/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarLogo(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Logo/* default */.A,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title text--truncate"});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/Header/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CloseButton(){var mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button","aria-label":(0,Translate/* translate */.T)({id:'theme.docs.sidebar.closeSidebarButtonAriaLabel',message:'Close navigation bar',description:'The ARIA label for close button of mobile sidebar'}),className:"clean-btn navbar-sidebar__close",onClick:function onClick(){return mobileSidebar.toggle();},children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconClose,{color:"var(--ifm-color-emphasis-600)"})});}function NavbarMobileSidebarHeader(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"navbar-sidebar__brand",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarLogo,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarColorModeToggle,{className:"margin-right--md"}),/*#__PURE__*/(0,jsx_runtime.jsx)(CloseButton,{})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28774);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(86025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(16654);
;// ./node_modules/@docusaurus/theme-common/lib/utils/regexpUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Matches a string regex (as provided from the config) against a target in a
 * null-safe fashion, case insensitive and global.
 */function isRegexpStringMatch(regexAsString,valueToTest){if(typeof regexAsString==='undefined'||typeof valueToTest==='undefined'){return false;}return new RegExp(regexAsString,'gi').test(valueToTest);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/index.js + 1 modules
var ExternalLink = __webpack_require__(43186);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/NavbarNavLink.js
var NavbarNavLink_excluded=["activeBasePath","activeBaseRegex","to","href","label","html","isDropdownLink","prependBaseUrlToHref"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarNavLink(_ref){var activeBasePath=_ref.activeBasePath,activeBaseRegex=_ref.activeBaseRegex,to=_ref.to,href=_ref.href,label=_ref.label,html=_ref.html,isDropdownLink=_ref.isDropdownLink,prependBaseUrlToHref=_ref.prependBaseUrlToHref,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,NavbarNavLink_excluded);// TODO all this seems hacky
// {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
var toUrl=(0,useBaseUrl/* default */.Ay)(to);var activeBaseUrl=(0,useBaseUrl/* default */.Ay)(activeBasePath);var normalizedHref=(0,useBaseUrl/* default */.Ay)(href,{forcePrependBaseUrl:true});var isExternalLink=label&&href&&!(0,isInternalUrl/* default */.A)(href);// Link content is set through html XOR label
var linkContentProps=html?{dangerouslySetInnerHTML:{__html:html}}:{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[label,isExternalLink&&/*#__PURE__*/(0,jsx_runtime.jsx)(ExternalLink/* default */.A,Object.assign({},isDropdownLink&&{width:12,height:12}))]})};if(href){return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,Object.assign({href:prependBaseUrlToHref?normalizedHref:href},props,linkContentProps));}return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,Object.assign({to:toUrl,isNavLink:true},(activeBasePath||activeBaseRegex)&&{isActive:function isActive(_match,location){return activeBaseRegex?isRegexpStringMatch(activeBaseRegex,location.pathname):location.pathname.startsWith(activeBaseUrl);}},props,linkContentProps));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DefaultNavbarItem.js
var DefaultNavbarItem_excluded=["className","isDropdownItem"],_excluded2=["className","isDropdownItem"],_excluded3=["mobile","position"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DefaultNavbarItemDesktop(_ref){var className=_ref.className,_ref$isDropdownItem=_ref.isDropdownItem,isDropdownItem=_ref$isDropdownItem===void 0?false:_ref$isDropdownItem,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,DefaultNavbarItem_excluded);var element=/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarNavLink,Object.assign({className:(0,clsx/* default */.A)(isDropdownItem?'dropdown__link':'navbar__item navbar__link',className),isDropdownLink:isDropdownItem},props));if(isDropdownItem){return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:element});}return element;}function DefaultNavbarItemMobile(_ref2){var className=_ref2.className,isDropdownItem=_ref2.isDropdownItem,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:"menu__list-item",children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarNavLink,Object.assign({className:(0,clsx/* default */.A)('menu__link',className)},props))});}function DefaultNavbarItem(_ref3){var _props$activeClassNam;var _ref3$mobile=_ref3.mobile,mobile=_ref3$mobile===void 0?false:_ref3$mobile,position=_ref3.position,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,_excluded3);var Comp=mobile?DefaultNavbarItemMobile:DefaultNavbarItemDesktop;return/*#__PURE__*/(0,jsx_runtime.jsx)(Comp,Object.assign({},props,{activeClassName:(_props$activeClassNam=props.activeClassName)!=null?_props$activeClassNam:mobile?'menu__link--active':'navbar__link--active'}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(41422);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(99169);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(44586);
;// ./node_modules/@docusaurus/theme-common/lib/utils/useLocalPathname.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Get the pathname of current route, without the optional site baseUrl.
 * - `/docs/myDoc` => `/docs/myDoc`
 * - `/baseUrl/docs/myDoc` => `/docs/myDoc`
 */function useLocalPathname(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.A)(),baseUrl=_useDocusaurusContext.siteConfig.baseUrl;var _useLocation=(0,react_router/* useLocation */.zy)(),pathname=_useLocation.pathname;return pathname.replace(baseUrl,'/');}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DropdownNavbarItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DropdownNavbarItem_styles_module = ({"dropdownNavbarItemMobile":"dropdownNavbarItemMobile_S0Fm"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DropdownNavbarItem/index.js
var DropdownNavbarItem_excluded=["items","position","className","onClick"],DropdownNavbarItem_excluded2=["items","className","position","onClick"],DropdownNavbarItem_excluded3=["mobile"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isItemActive(item,localPathname){if((0,routesUtils/* isSamePath */.ys)(item.to,localPathname)){return true;}if(isRegexpStringMatch(item.activeBaseRegex,localPathname)){return true;}if(item.activeBasePath&&localPathname.startsWith(item.activeBasePath)){return true;}return false;}function containsActiveItems(items,localPathname){return items.some(function(item){return isItemActive(item,localPathname);});}function DropdownNavbarItemDesktop(_ref){var _props$children;var items=_ref.items,position=_ref.position,className=_ref.className,onClick=_ref.onClick,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,DropdownNavbarItem_excluded);var dropdownRef=(0,react.useRef)(null);var _useState=(0,react.useState)(false),showDropdown=_useState[0],setShowDropdown=_useState[1];(0,react.useEffect)(function(){var handleClickOutside=function handleClickOutside(event){if(!dropdownRef.current||dropdownRef.current.contains(event.target)){return;}setShowDropdown(false);};document.addEventListener('mousedown',handleClickOutside);document.addEventListener('touchstart',handleClickOutside);document.addEventListener('focusin',handleClickOutside);return function(){document.removeEventListener('mousedown',handleClickOutside);document.removeEventListener('touchstart',handleClickOutside);document.removeEventListener('focusin',handleClickOutside);};},[dropdownRef]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{ref:dropdownRef,className:(0,clsx/* default */.A)('navbar__item','dropdown','dropdown--hoverable',{'dropdown--right':position==='right','dropdown--show':showDropdown}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarNavLink,Object.assign({"aria-haspopup":"true","aria-expanded":showDropdown,role:"button"// # hash permits to make the <a> tag focusable in case no link target
// See https://github.com/facebook/docusaurus/pull/6003
// There's probably a better solution though...
,href:props.to?undefined:'#',className:(0,clsx/* default */.A)('navbar__link',className)},props,{onClick:props.to?undefined:function(e){return e.preventDefault();},onKeyDown:function onKeyDown(e){if(e.key==='Enter'){e.preventDefault();setShowDropdown(!showDropdown);}},children:(_props$children=props.children)!=null?_props$children:props.label})),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"dropdown__menu",children:items.map(function(childItemProps,i){return/*#__PURE__*/(0,react.createElement)(NavbarItem,Object.assign({isDropdownItem:true,activeClassName:"dropdown__link--active"},childItemProps,{key:i}));})})]});}function DropdownNavbarItemMobile(_ref2){var _props$children2;var items=_ref2.items,className=_ref2.className,position=_ref2.position,onClick=_ref2.onClick,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,DropdownNavbarItem_excluded2);var localPathname=useLocalPathname();var containsActive=containsActiveItems(items,localPathname);var _useCollapsible=(0,Collapsible/* useCollapsible */.u)({initialState:function initialState(){return!containsActive;}}),collapsed=_useCollapsible.collapsed,toggleCollapsed=_useCollapsible.toggleCollapsed,setCollapsed=_useCollapsible.setCollapsed;// Expand/collapse if any item active after a navigation
(0,react.useEffect)(function(){if(containsActive){setCollapsed(!containsActive);}},[localPathname,containsActive,setCollapsed]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{className:(0,clsx/* default */.A)('menu__list-item',{'menu__list-item--collapsed':collapsed}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarNavLink,Object.assign({role:"button",className:(0,clsx/* default */.A)(DropdownNavbarItem_styles_module.dropdownNavbarItemMobile,'menu__link menu__link--sublist menu__link--sublist-caret',className)},props,{onClick:function onClick(e){e.preventDefault();toggleCollapsed();},children:(_props$children2=props.children)!=null?_props$children2:props.label})),/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N,{lazy:true,as:"ul",className:"menu__list",collapsed:collapsed,children:items.map(function(childItemProps,i){return/*#__PURE__*/(0,react.createElement)(NavbarItem,Object.assign({mobile:true,isDropdownItem:true,onClick:onClick,activeClassName:"menu__link--active"},childItemProps,{key:i}));})})]});}function DropdownNavbarItem(_ref3){var _ref3$mobile=_ref3.mobile,mobile=_ref3$mobile===void 0?false:_ref3$mobile,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,DropdownNavbarItem_excluded3);var Comp=mobile?DropdownNavbarItemMobile:DropdownNavbarItemDesktop;return/*#__PURE__*/(0,jsx_runtime.jsx)(Comp,Object.assign({},props));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useAlternatePageUtils.js
var useAlternatePageUtils = __webpack_require__(32131);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Language/index.js
var Language_excluded=["width","height"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconLanguage(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?20:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?20:_ref$height,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Language_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 24 24",width:width,height:height,"aria-hidden":true},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/LocaleDropdownNavbarItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const LocaleDropdownNavbarItem_styles_module = ({"iconLanguage":"iconLanguage_nlXk"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/LocaleDropdownNavbarItem/index.js
var LocaleDropdownNavbarItem_excluded=["mobile","dropdownItemsBefore","dropdownItemsAfter","queryString"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LocaleDropdownNavbarItem(_ref){var mobile=_ref.mobile,dropdownItemsBefore=_ref.dropdownItemsBefore,dropdownItemsAfter=_ref.dropdownItemsAfter,_ref$queryString=_ref.queryString,queryString=_ref$queryString===void 0?'':_ref$queryString,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,LocaleDropdownNavbarItem_excluded);var _useDocusaurusContext=(0,useDocusaurusContext/* default */.A)(),_useDocusaurusContext2=_useDocusaurusContext.i18n,currentLocale=_useDocusaurusContext2.currentLocale,locales=_useDocusaurusContext2.locales,localeConfigs=_useDocusaurusContext2.localeConfigs;var alternatePageUtils=(0,useAlternatePageUtils/* useAlternatePageUtils */.o)();var _useLocation=(0,react_router/* useLocation */.zy)(),search=_useLocation.search,hash=_useLocation.hash;var localeItems=locales.map(function(locale){var baseTo="pathname://"+alternatePageUtils.createUrl({locale:locale,fullyQualified:false});// preserve ?search#hash suffix on locale switches
var to=""+baseTo+search+hash+queryString;return{label:localeConfigs[locale].label,lang:localeConfigs[locale].htmlLang,to:to,target:'_self',autoAddBaseUrl:false,className:// eslint-disable-next-line no-nested-ternary
locale===currentLocale?// Similar idea as DefaultNavbarItem: select the right Infima active
// class name. This cannot be substituted with isActive, because the
// target URLs contain `pathname://` and therefore are not NavLinks!
mobile?'menu__link--active':'dropdown__link--active':''};});var items=[].concat(dropdownItemsBefore,localeItems,dropdownItemsAfter);// Mobile is handled a bit differently
var dropdownLabel=mobile?(0,Translate/* translate */.T)({message:'Languages',id:'theme.navbar.mobileLanguageDropdown.label',description:'The label for the mobile language switcher dropdown'}):localeConfigs[currentLocale].label;return/*#__PURE__*/(0,jsx_runtime.jsx)(DropdownNavbarItem,Object.assign({},props,{mobile:mobile,label:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconLanguage,{className:LocaleDropdownNavbarItem_styles_module.iconLanguage}),dropdownLabel]}),items:items}));}
;// ./node_modules/@docusaurus/core/lib/client/exports/Noop.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//* harmony default export */ const Noop = (function(){return null;});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Search/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Search_styles_module = ({"navbarSearchContainer":"navbarSearchContainer_Bca1"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Search/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarSearch(_ref){var children=_ref.children,className=_ref.className;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(className,Search_styles_module.navbarSearchContainer),children:children});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/SearchNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SearchNavbarItem(_ref){var mobile=_ref.mobile,className=_ref.className;if(mobile){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarSearch,{className:className,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Noop,{})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/HtmlNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function HtmlNavbarItem(_ref){var value=_ref.value,className=_ref.className,_ref$mobile=_ref.mobile,mobile=_ref$mobile===void 0?false:_ref$mobile,_ref$isDropdownItem=_ref.isDropdownItem,isDropdownItem=_ref$isDropdownItem===void 0?false:_ref$isDropdownItem;var Comp=isDropdownItem?'li':'div';return/*#__PURE__*/(0,jsx_runtime.jsx)(Comp,{className:(0,clsx/* default */.A)({navbar__item:!mobile&&!isDropdownItem,'menu__list-item':mobile},className),dangerouslySetInnerHTML:{__html:value}});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/index.js + 2 modules
var client = __webpack_require__(44070);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsUtils.js
var docsUtils = __webpack_require__(26972);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DocNavbarItem.js
var DocNavbarItem_excluded=["docId","label","docsPluginId"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocNavbarItem(_ref){var docId=_ref.docId,staticLabel=_ref.label,docsPluginId=_ref.docsPluginId,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,DocNavbarItem_excluded);var _useActiveDocContext=(0,client/* useActiveDocContext */.zK)(docsPluginId),activeDoc=_useActiveDocContext.activeDoc;var doc=(0,docsUtils/* useLayoutDoc */.QB)(docId,docsPluginId);var pageActive=(activeDoc==null?void 0:activeDoc.path)===(doc==null?void 0:doc.path);// Draft and unlisted items are not displayed in the navbar.
if(doc===null||doc.unlisted&&!pageActive){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(DefaultNavbarItem,Object.assign({exact:true},props,{isActive:function isActive(){return pageActive||!!(activeDoc!=null&&activeDoc.sidebar)&&activeDoc.sidebar===doc.sidebar;},label:staticLabel!=null?staticLabel:doc.id,to:doc.path}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DocSidebarNavbarItem.js
var DocSidebarNavbarItem_excluded=["sidebarId","label","docsPluginId"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarNavbarItem(_ref){var sidebarId=_ref.sidebarId,label=_ref.label,docsPluginId=_ref.docsPluginId,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,DocSidebarNavbarItem_excluded);var _useActiveDocContext=(0,client/* useActiveDocContext */.zK)(docsPluginId),activeDoc=_useActiveDocContext.activeDoc;var sidebarLink=(0,docsUtils/* useLayoutDocsSidebar */.fW)(sidebarId,docsPluginId).link;if(!sidebarLink){throw new Error("DocSidebarNavbarItem: Sidebar with ID \""+sidebarId+"\" doesn't have anything to be linked to.");}return/*#__PURE__*/(0,jsx_runtime.jsx)(DefaultNavbarItem,Object.assign({exact:true},props,{isActive:function isActive(){return(activeDoc==null?void 0:activeDoc.sidebar)===sidebarId;},label:label!=null?label:sidebarLink.label,to:sidebarLink.path}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DocsVersionNavbarItem.js
var DocsVersionNavbarItem_excluded=["label","to","docsPluginId"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var getVersionMainDoc=function getVersionMainDoc(version){return version.docs.find(function(doc){return doc.id===version.mainDocId;});};function DocsVersionNavbarItem(_ref){var staticLabel=_ref.label,staticTo=_ref.to,docsPluginId=_ref.docsPluginId,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,DocsVersionNavbarItem_excluded);var version=(0,docsUtils/* useDocsVersionCandidates */.Vd)(docsPluginId)[0];var label=staticLabel!=null?staticLabel:version.label;var path=staticTo!=null?staticTo:getVersionMainDoc(version).path;return/*#__PURE__*/(0,jsx_runtime.jsx)(DefaultNavbarItem,Object.assign({},props,{label:label,to:path}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsPreferredVersion.js
var docsPreferredVersion = __webpack_require__(53886);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DocsVersionDropdownNavbarItem.js
var DocsVersionDropdownNavbarItem_excluded=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocsVersionDropdownNavbarItem_getVersionMainDoc(version){return version.docs.find(function(doc){return doc.id===version.mainDocId;});}function getVersionTargetDoc(version,activeDocContext){var _activeDocContext$alt;// We try to link to the same doc, in another version
// When not possible, fallback to the "main doc" of the version
return(_activeDocContext$alt=activeDocContext.alternateDocVersions[version.name])!=null?_activeDocContext$alt:DocsVersionDropdownNavbarItem_getVersionMainDoc(version);}function DocsVersionDropdownNavbarItem(_ref){var mobile=_ref.mobile,docsPluginId=_ref.docsPluginId,dropdownActiveClassDisabled=_ref.dropdownActiveClassDisabled,dropdownItemsBefore=_ref.dropdownItemsBefore,dropdownItemsAfter=_ref.dropdownItemsAfter,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,DocsVersionDropdownNavbarItem_excluded);var _useLocation=(0,react_router/* useLocation */.zy)(),search=_useLocation.search,hash=_useLocation.hash;var activeDocContext=(0,client/* useActiveDocContext */.zK)(docsPluginId);var versions=(0,client/* useVersions */.jh)(docsPluginId);var _useDocsPreferredVers=(0,docsPreferredVersion/* useDocsPreferredVersion */.g1)(docsPluginId),savePreferredVersionName=_useDocsPreferredVers.savePreferredVersionName;function versionToLink(version){var targetDoc=getVersionTargetDoc(version,activeDocContext);return{label:version.label,// preserve ?search#hash suffix on version switches
to:""+targetDoc.path+search+hash,isActive:function isActive(){return version===activeDocContext.activeVersion;},onClick:function onClick(){return savePreferredVersionName(version.name);}};}var items=[].concat(dropdownItemsBefore,versions.map(versionToLink),dropdownItemsAfter);var dropdownVersion=(0,docsUtils/* useDocsVersionCandidates */.Vd)(docsPluginId)[0];// Mobile dropdown is handled a bit differently
var dropdownLabel=mobile&&items.length>1?(0,Translate/* translate */.T)({id:'theme.navbar.mobileVersionsDropdown.label',message:'Versions',description:'The label for the navbar versions dropdown on mobile view'}):dropdownVersion.label;var dropdownTo=mobile&&items.length>1?undefined:getVersionTargetDoc(dropdownVersion,activeDocContext).path;// We don't want to render a version dropdown with 0 or 1 item. If we build
// the site with a single docs version (onlyIncludeVersions: ['1.0.0']),
// We'd rather render a button instead of a dropdown
if(items.length<=1){return/*#__PURE__*/(0,jsx_runtime.jsx)(DefaultNavbarItem,Object.assign({},props,{mobile:mobile,label:dropdownLabel,to:dropdownTo,isActive:dropdownActiveClassDisabled?function(){return false;}:undefined}));}return/*#__PURE__*/(0,jsx_runtime.jsx)(DropdownNavbarItem,Object.assign({},props,{mobile:mobile,label:dropdownLabel,to:dropdownTo,items:items,isActive:dropdownActiveClassDisabled?function(){return false;}:undefined}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/ComponentTypes.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ComponentTypes={"default":DefaultNavbarItem,localeDropdown:LocaleDropdownNavbarItem,search:SearchNavbarItem,dropdown:DropdownNavbarItem,html:HtmlNavbarItem,doc:DocNavbarItem,docSidebar:DocSidebarNavbarItem,docsVersion:DocsVersionNavbarItem,docsVersionDropdown:DocsVersionDropdownNavbarItem};/* harmony default export */ const NavbarItem_ComponentTypes = (ComponentTypes);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/index.js
var NavbarItem_excluded=["type"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function normalizeComponentType(type,props){// Backward compatibility: navbar item with no type set
// but containing dropdown items should use the type "dropdown"
if(!type||type==='default'){return'items'in props?'dropdown':'default';}return type;}function NavbarItem(_ref){var type=_ref.type,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,NavbarItem_excluded);var componentType=normalizeComponentType(type,props);var NavbarItemComponent=NavbarItem_ComponentTypes[componentType];if(!NavbarItemComponent){throw new Error("No NavbarItem component found for type \""+type+"\".");}return/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarItemComponent,Object.assign({},props));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/PrimaryMenu/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useNavbarItems(){// TODO temporary casting until ThemeConfig type is improved
return (0,useThemeConfig/* useThemeConfig */.p)().navbar.items;}// The primary menu displays the navbar items
function NavbarMobilePrimaryMenu(){var mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();// TODO how can the order be defined for mobile?
// Should we allow providing a different list of items?
var items=useNavbarItems();return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"menu__list",children:items.map(function(item,i){return/*#__PURE__*/(0,react.createElement)(NavbarItem,Object.assign({mobile:true},item,{onClick:function onClick(){return mobileSidebar.toggle();},key:i}));})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/SecondaryMenu/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SecondaryMenuBackButton(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("button",Object.assign({},props,{type:"button",className:"clean-btn navbar-sidebar__back",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)",children:"\u2190 Back to main menu"})}));}// The secondary menu slides from the right and shows contextual information
// such as the docs sidebar
function NavbarMobileSidebarSecondaryMenu(){var isPrimaryMenuEmpty=(0,useThemeConfig/* useThemeConfig */.p)().navbar.items.length===0;var secondaryMenu=useNavbarSecondaryMenu();return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!isPrimaryMenuEmpty&&/*#__PURE__*/(0,jsx_runtime.jsx)(SecondaryMenuBackButton,{onClick:function onClick(){return secondaryMenu.hide();}}),secondaryMenu.content]});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarMobileSidebar(){var mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();useLockBodyScroll(mobileSidebar.shown);if(!mobileSidebar.shouldRender){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarMobileSidebarLayout,{header:/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarMobileSidebarHeader,{}),primaryMenu:/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarMobilePrimaryMenu,{}),secondaryMenu:/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarMobileSidebarSecondaryMenu,{})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Layout_styles_module = ({"navbarHideable":"navbarHideable_m1mJ","navbarHidden":"navbarHidden_jGov"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarBackdrop(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({role:"presentation"},props,{className:(0,clsx/* default */.A)('navbar-sidebar__backdrop',props.className)}));}function NavbarLayout(_ref){var children=_ref.children;var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.p)(),_useThemeConfig$navba=_useThemeConfig.navbar,hideOnScroll=_useThemeConfig$navba.hideOnScroll,style=_useThemeConfig$navba.style;var mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();var _useHideableNavbar=useHideableNavbar(hideOnScroll),navbarRef=_useHideableNavbar.navbarRef,isNavbarVisible=_useHideableNavbar.isNavbarVisible;return/*#__PURE__*/(0,jsx_runtime.jsxs)("nav",{ref:navbarRef,"aria-label":(0,Translate/* translate */.T)({id:'theme.NavBar.navAriaLabel',message:'Main',description:'The ARIA label for the main navigation'}),className:(0,clsx/* default */.A)('navbar','navbar--fixed-top',hideOnScroll&&[Layout_styles_module.navbarHideable,!isNavbarVisible&&Layout_styles_module.navbarHidden],{'navbar--dark':style==='dark','navbar--primary':style==='primary','navbar-sidebar--show':mobileSidebar.shown}),children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarBackdrop,{onClick:mobileSidebar.toggle}),/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarMobileSidebar,{})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/errorBoundaryUtils.js + 1 modules
var errorBoundaryUtils = __webpack_require__(12181);
;// ./node_modules/@docusaurus/theme-common/lib/utils/navbarUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DefaultNavItemPosition='right';/**
 * Split links by left/right. If position is unspecified, fallback to right.
 */function splitNavbarItems(items){function isLeft(item){var _item$position;return((_item$position=item.position)!=null?_item$position:DefaultNavItemPosition)==='left';}var leftItems=items.filter(isLeft);var rightItems=items.filter(function(item){return!isLeft(item);});return[leftItems,rightItems];}/**
 * Composes multiple navbar state providers that are mutually dependent and
 * hence can't be re-ordered.
 */function NavbarProvider(_ref){var children=_ref.children;return/*#__PURE__*/(0,jsx_runtime.jsx)(navbarSecondaryMenu_content/* NavbarSecondaryMenuContentProvider */.y_,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(navbarMobileSidebar/* NavbarMobileSidebarProvider */.e,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarSecondaryMenuDisplayProvider,{children:children})})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Menu/index.js
var Menu_excluded=["width","height","className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconMenu(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?30:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?30:_ref$height,className=_ref.className,restProps=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Menu_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({className:className,width:width,height:height,viewBox:"0 0 30 30","aria-hidden":"true"},restProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/Toggle/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MobileSidebarToggle(){var _useNavbarMobileSideb=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)(),toggle=_useNavbarMobileSideb.toggle,shown=_useNavbarMobileSideb.shown;return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:toggle,"aria-label":(0,Translate/* translate */.T)({id:'theme.docs.sidebar.toggleSidebarButtonAriaLabel',message:'Toggle navigation bar',description:'The ARIA label for hamburger menu button of mobile navigation'}),"aria-expanded":shown,className:"navbar__toggle clean-btn",type:"button",children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconMenu,{})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Navbar_Content_styles_module = ({"colorModeToggle":"colorModeToggle_DEke"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Content_useNavbarItems(){// TODO temporary casting until ThemeConfig type is improved
return (0,useThemeConfig/* useThemeConfig */.p)().navbar.items;}function NavbarItems(_ref){var items=_ref.items;return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.map(function(item,i){return/*#__PURE__*/(0,jsx_runtime.jsx)(errorBoundaryUtils/* ErrorCauseBoundary */.k2,{onError:function onError(error){return new Error("A theme navbar item failed to render.\nPlease double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:\n"+JSON.stringify(item,null,2),{cause:error});},children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarItem,Object.assign({},item))},i);})});}function NavbarContentLayout(_ref2){var left=_ref2.left,right=_ref2.right;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"navbar__inner",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"navbar__items",children:left}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"navbar__items navbar__items--right",children:right})]});}function NavbarContent(){var mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();var items=Content_useNavbarItems();var _splitNavbarItems=splitNavbarItems(items),leftItems=_splitNavbarItems[0],rightItems=_splitNavbarItems[1];var searchBarItem=items.find(function(item){return item.type==='search';});return/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarContentLayout,{left:/*#__PURE__*/// TODO stop hardcoding items?
(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!mobileSidebar.disabled&&/*#__PURE__*/(0,jsx_runtime.jsx)(MobileSidebarToggle,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarLogo,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarItems,{items:leftItems})]}),right:/*#__PURE__*/// TODO stop hardcoding items?
// Ask the user to add the respective navbar items => more flexible
(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarItems,{items:rightItems}),/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarColorModeToggle,{className:Navbar_Content_styles_module.colorModeToggle}),!searchBarItem&&/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarSearch,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Noop,{})})]})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Navbar(){return/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarLayout,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarContent,{})});}
;// ./node_modules/@docusaurus/theme-common/lib/utils/footerUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * A rough duck-typing about whether the `footer.links` is intended to be multi-
 * column.
 */function isMultiColumnFooterLinks(links){return'title'in links[0];}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/LinkItem/index.js
var LinkItem_excluded=["to","href","label","prependBaseUrlToHref"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLinkItem(_ref){var item=_ref.item;var to=item.to,href=item.href,label=item.label,prependBaseUrlToHref=item.prependBaseUrlToHref,props=(0,objectWithoutPropertiesLoose/* default */.A)(item,LinkItem_excluded);var toUrl=(0,useBaseUrl/* default */.Ay)(to);var normalizedHref=(0,useBaseUrl/* default */.Ay)(href,{forcePrependBaseUrl:true});return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,Object.assign({className:"footer__link-item"},href?{href:prependBaseUrlToHref?normalizedHref:href}:{to:toUrl},props,{children:[label,href&&!(0,isInternalUrl/* default */.A)(href)&&/*#__PURE__*/(0,jsx_runtime.jsx)(ExternalLink/* default */.A,{})]}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/Links/MultiColumn/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ColumnLinkItem(_ref){var _item$href;var item=_ref.item;return item.html?/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:"footer__item"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:item.html}}):/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:"footer__item",children:/*#__PURE__*/(0,jsx_runtime.jsx)(FooterLinkItem,{item:item})},(_item$href=item.href)!=null?_item$href:item.to);}function Column(_ref2){var column=_ref2.column;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"col footer__col",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"footer__title",children:column.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"footer__items clean-list",children:column.items.map(function(item,i){return/*#__PURE__*/(0,jsx_runtime.jsx)(ColumnLinkItem,{item:item},i);})})]});}function FooterLinksMultiColumn(_ref3){var columns=_ref3.columns;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"row footer__links",children:columns.map(function(column,i){return/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{column:column},i);})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/Links/Simple/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Separator(){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"footer__link-separator",children:"\xB7"});}function SimpleLinkItem(_ref){var item=_ref.item;return item.html?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"footer__link-item"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:item.html}}):/*#__PURE__*/(0,jsx_runtime.jsx)(FooterLinkItem,{item:item});}function FooterLinksSimple(_ref2){var links=_ref2.links;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"footer__links text--center",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"footer__links",children:links.map(function(item,i){return/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SimpleLinkItem,{item:item}),links.length!==i+1&&/*#__PURE__*/(0,jsx_runtime.jsx)(Separator,{})]},i);})})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/Links/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLinks(_ref){var links=_ref.links;return isMultiColumnFooterLinks(links)?/*#__PURE__*/(0,jsx_runtime.jsx)(FooterLinksMultiColumn,{columns:links}):/*#__PURE__*/(0,jsx_runtime.jsx)(FooterLinksSimple,{links:links});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/index.js + 2 modules
var ThemedImage = __webpack_require__(21122);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/Logo/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Logo_styles_module = ({"footerLogoLink":"footerLogoLink_BH7S"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/Logo/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LogoImage(_ref){var _logo$srcDark;var logo=_ref.logo;var _useBaseUrlUtils=(0,useBaseUrl/* useBaseUrlUtils */.hH)(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;var sources={light:withBaseUrl(logo.src),dark:withBaseUrl((_logo$srcDark=logo.srcDark)!=null?_logo$srcDark:logo.src)};return/*#__PURE__*/(0,jsx_runtime.jsx)(ThemedImage/* default */.A,{className:(0,clsx/* default */.A)('footer__logo',logo.className),alt:logo.alt,sources:sources,width:logo.width,height:logo.height,style:logo.style});}function FooterLogo(_ref2){var logo=_ref2.logo;return logo.href?/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{href:logo.href,className:Logo_styles_module.footerLogoLink,target:logo.target,children:/*#__PURE__*/(0,jsx_runtime.jsx)(LogoImage,{logo:logo})}):/*#__PURE__*/(0,jsx_runtime.jsx)(LogoImage,{logo:logo});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/Copyright/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterCopyright(_ref){var copyright=_ref.copyright;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"footer__copyright"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:copyright}});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLayout(_ref){var style=_ref.style,links=_ref.links,logo=_ref.logo,copyright=_ref.copyright;return/*#__PURE__*/(0,jsx_runtime.jsx)("footer",{className:(0,clsx/* default */.A)('footer',{'footer--dark':style==='dark'}),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container container-fluid",children:[links,(logo||copyright)&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"footer__bottom text--center",children:[logo&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-bottom--sm",children:logo}),copyright]})]})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Footer(){var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.p)(),footer=_useThemeConfig.footer;if(!footer){return null;}var copyright=footer.copyright,links=footer.links,logo=footer.logo,style=footer.style;return/*#__PURE__*/(0,jsx_runtime.jsx)(FooterLayout,{style:style,links:links&&links.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)(FooterLinks,{links:links}),logo:logo&&/*#__PURE__*/(0,jsx_runtime.jsx)(FooterLogo,{logo:logo}),copyright:copyright&&/*#__PURE__*/(0,jsx_runtime.jsx)(FooterCopyright,{copyright:copyright})});}/* harmony default export */ const theme_Footer = (/*#__PURE__*/react.memo(Footer));
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/Provider/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Provider=(0,reactUtils/* composeProviders */.fM)([contexts_colorMode/* ColorModeProvider */.a,contexts_announcementBar/* AnnouncementBarProvider */.o,scrollUtils/* ScrollControllerProvider */.Tv,docsPreferredVersion/* DocsPreferredVersionContextProvider */.VQ,metadataUtils/* PluginHtmlClassNameProvider */.Jx,NavbarProvider]);function LayoutProvider(_ref){var children=_ref.children;return/*#__PURE__*/(0,jsx_runtime.jsx)(Provider,{children:children});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(51107);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/ErrorPageContent.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ErrorPageContent(_ref){var error=_ref.error,tryAgain=_ref.tryAgain;return/*#__PURE__*/(0,jsx_runtime.jsx)("main",{className:"container margin-vert--xl",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"row",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"col col--6 col--offset-3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",className:"hero__title",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.ErrorPageContent.title",description:"The title of the fallback page when the page crashed",children:"This page crashed."})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-vert--lg",children:/*#__PURE__*/(0,jsx_runtime.jsx)(errorBoundaryUtils/* ErrorBoundaryTryAgainButton */.a2,{onClick:tryAgain,className:"button button--primary shadow--lw"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("hr",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-vert--md",children:/*#__PURE__*/(0,jsx_runtime.jsx)(errorBoundaryUtils/* ErrorBoundaryError */.bq,{error:error})})]})})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const theme_Layout_styles_module = ({"mainWrapper":"mainWrapper_z2l0"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Layout(props){var children=props.children,noFooter=props.noFooter,wrapperClassName=props.wrapperClassName,title=props.title,description=props.description;(0,useKeyboardNavigation/* useKeyboardNavigation */.J)();return/*#__PURE__*/(0,jsx_runtime.jsxs)(LayoutProvider,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{title:title,description:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(SkipToContent,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(AnnouncementBar,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Navbar,{}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{id:SkipToContentFallbackId,className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.wrapper.main,theme_Layout_styles_module.mainWrapper,wrapperClassName),children:/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundary/* default */.A,{fallback:function fallback(params){return/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPageContent,Object.assign({},params));},children:children})}),!noFooter&&/*#__PURE__*/(0,jsx_runtime.jsx)(theme_Footer,{})]});}

/***/ }),

/***/ 23465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28774);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86025);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44586);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6342);
/* harmony import */ var _theme_ThemedImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21122);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
var _excluded=["imageClassName","titleClassName"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LogoThemedImage(_ref){var logo=_ref.logo,alt=_ref.alt,imageClassName=_ref.imageClassName;var sources={light:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(logo.src),dark:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(logo.srcDark||logo.src)};var themedImage=/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_ThemedImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{className:logo.className,sources:sources,height:logo.height,width:logo.width,alt:alt,style:logo.style});// Is this extra div really necessary?
// introduced in https://github.com/facebook/docusaurus/pull/5666
return imageClassName?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:imageClassName,children:themedImage}):themedImage;}function Logo(props){var _logo$alt;var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(),title=_useDocusaurusContext.siteConfig.title;var _useThemeConfig=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .useThemeConfig */ .p)(),_useThemeConfig$navba=_useThemeConfig.navbar,navbarTitle=_useThemeConfig$navba.title,logo=_useThemeConfig$navba.logo;var imageClassName=props.imageClassName,titleClassName=props.titleClassName,propsRest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(props,_excluded);var logoLink=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)((logo==null?void 0:logo.href)||'/');// If visible title is shown, fallback alt text should be
// an empty string to mark the logo as decorative.
var fallbackAlt=navbarTitle?'':title;// Use logo alt text if provided (including empty string),
// and provide a sensible fallback otherwise.
var alt=(_logo$alt=logo==null?void 0:logo.alt)!=null?_logo$alt:fallbackAlt;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,Object.assign({to:logoLink},propsRest,(logo==null?void 0:logo.target)&&{target:logo.target},{children:[logo&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(LogoThemedImage,{logo:logo,alt:alt,imageClassName:imageClassName}),navbarTitle!=null&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b",{className:titleClassName,children:navbarTitle})]}));}

/***/ }),

/***/ 41463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SearchMetadata)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5260);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Note: we bias toward using Algolia metadata on purpose
// Not doing so leads to confusion in the community,
// as it requires to first crawl the site with the Algolia plugin enabled first
// - https://github.com/facebook/docusaurus/issues/6693
// - https://github.com/facebook/docusaurus/issues/4555
function SearchMetadata(_ref){var locale=_ref.locale,version=_ref.version,tag=_ref.tag;// Seems safe to consider here the locale is the language, as the existing
// docsearch:language filter is afaik a regular string-based filter
var language=locale;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:[locale&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docusaurus_locale",content:locale}),version&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docusaurus_version",content:version}),tag&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docusaurus_tag",content:tag}),language&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docsearch:language",content:language}),version&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docsearch:version",content:version}),tag&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docsearch:docusaurus_tag",content:tag})]});}

/***/ }),

/***/ 21122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ThemedImage)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(92303);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(95293);
;// ./node_modules/@docusaurus/theme-common/lib/components/ThemedComponent/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"themedComponent":"themedComponent_mlkZ","themedComponent--light":"themedComponent--light_NVdE","themedComponent--dark":"themedComponent--dark_xIcU"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-common/lib/components/ThemedComponent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AllThemes=(/* unused pure expression or super */ null && (['light','dark']));/**
 * Generic component to render anything themed in light/dark
 * Note: it's preferable to use CSS for theming because this component
 * will need to render all the variants during SSR to avoid a theme flash.
 *
 * Use this only when CSS customizations are not convenient or impossible.
 * For example, rendering themed images or SVGs...
 *
 * @param className applied to all the variants
 * @param children function to render a theme variant
 * @constructor
 */function ThemedComponent(_ref){var className=_ref.className,children=_ref.children;var isBrowser=(0,useIsBrowser/* default */.A)();var _useColorMode=(0,contexts_colorMode/* useColorMode */.G)(),colorMode=_useColorMode.colorMode;function getThemesToRender(){if(isBrowser){return colorMode==='dark'?['dark']:['light'];}// We need to render both components on the server / hydration to avoid:
// - a flash of wrong theme before hydration
// - React hydration mismatches
// See https://github.com/facebook/docusaurus/pull/3730
return['light','dark'];}return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:getThemesToRender().map(function(theme){var themedElement=children({theme:theme,className:(0,clsx/* default */.A)(className,styles_module.themedComponent,styles_module["themedComponent--"+theme])});return/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:themedElement},theme);})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/index.js
var _excluded=["sources","className","alt"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ThemedImage(props){var sources=props.sources,parentClassName=props.className,alt=props.alt,propsRest=(0,objectWithoutPropertiesLoose/* default */.A)(props,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(ThemedComponent,{className:parentClassName,children:function children(_ref){var theme=_ref.theme,className=_ref.className;return/*#__PURE__*/(0,jsx_runtime.jsx)("img",Object.assign({src:sources[theme],alt:alt,className:className},propsRest));}});}

/***/ }),

/***/ 41422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ Collapsible),
/* harmony export */   u: () => (/* binding */ useCollapsible)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38193);
/* harmony import */ var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(205);
/* harmony import */ var _utils_accessibilityUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53109);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74848);
var _excluded=["collapsed"],_excluded2=["lazy"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DefaultAnimationEasing='ease-in-out';/**
 * This hook is a very thin wrapper around a `useState`.
 */function useCollapsible(_ref){var initialState=_ref.initialState;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState!=null?initialState:false),collapsed=_useState[0],setCollapsed=_useState[1];var toggleCollapsed=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){setCollapsed(function(expanded){return!expanded;});},[]);return{collapsed:collapsed,setCollapsed:setCollapsed,toggleCollapsed:toggleCollapsed};}var CollapsedStyles={display:'none',overflow:'hidden',height:'0px'};var ExpandedStyles={display:'block',overflow:'visible',height:'auto'};function applyCollapsedStyle(el,collapsed){var collapsedStyles=collapsed?CollapsedStyles:ExpandedStyles;el.style.display=collapsedStyles.display;el.style.overflow=collapsedStyles.overflow;el.style.height=collapsedStyles.height;}/*
Lex111: Dynamic transition duration is used in Material design, this technique
is good for a large number of items.
https://material.io/archive/guidelines/motion/duration-easing.html#duration-easing-dynamic-durations
https://github.com/mui-org/material-ui/blob/e724d98eba018e55e1a684236a2037e24bcf050c/packages/material-ui/src/styles/createTransitions.js#L40-L43
 */function getAutoHeightDuration(height){if((0,_utils_accessibilityUtils__WEBPACK_IMPORTED_MODULE_4__/* .prefersReducedMotion */ .O)()){// Not using 0 because it prevents onTransitionEnd to fire and bubble up :/
// See https://github.com/facebook/docusaurus/pull/8906
return 1;}var constant=height/36;return Math.round((4+15*Math.pow(constant,0.25)+constant/5)*10);}function useCollapseAnimation(_ref2){var collapsibleRef=_ref2.collapsibleRef,collapsed=_ref2.collapsed,animation=_ref2.animation;var mounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var el=collapsibleRef.current;function getTransitionStyles(){var _animation$duration,_animation$easing;var height=el.scrollHeight;var duration=(_animation$duration=animation==null?void 0:animation.duration)!=null?_animation$duration:getAutoHeightDuration(height);var easing=(_animation$easing=animation==null?void 0:animation.easing)!=null?_animation$easing:DefaultAnimationEasing;return{transition:"height "+duration+"ms "+easing,height:height+"px"};}function applyTransitionStyles(){var transitionStyles=getTransitionStyles();el.style.transition=transitionStyles.transition;el.style.height=transitionStyles.height;}// On mount, we just apply styles, no animated transition
if(!mounted.current){applyCollapsedStyle(el,collapsed);mounted.current=true;return undefined;}el.style.willChange='height';function startAnimation(){var animationFrame=requestAnimationFrame(function(){// When collapsing
if(collapsed){applyTransitionStyles();requestAnimationFrame(function(){el.style.height=CollapsedStyles.height;el.style.overflow=CollapsedStyles.overflow;});}// When expanding
else{el.style.display='block';requestAnimationFrame(function(){applyTransitionStyles();});}});return function(){return cancelAnimationFrame(animationFrame);};}return startAnimation();},[collapsibleRef,collapsed,animation]);}/**
 * Prevent hydration layout shift before animations are handled imperatively
 * with JS
 */function getSSRStyle(collapsed){if(_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM){return undefined;}return collapsed?CollapsedStyles:ExpandedStyles;}function CollapsibleBase(_ref3){var _ref3$as=_ref3.as,As=_ref3$as===void 0?'div':_ref3$as,collapsed=_ref3.collapsed,children=_ref3.children,animation=_ref3.animation,onCollapseTransitionEnd=_ref3.onCollapseTransitionEnd,className=_ref3.className,disableSSRStyle=_ref3.disableSSRStyle;var collapsibleRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);useCollapseAnimation({collapsibleRef:collapsibleRef,collapsed:collapsed,animation:animation});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(As// @ts-expect-error: the "too complicated type" is produced from
// "CollapsibleElementType" being a huge union
,{ref:collapsibleRef// Refs are contravariant, which is not expressible in TS
,style:disableSSRStyle?undefined:getSSRStyle(collapsed),onTransitionEnd:function onTransitionEnd(e){if(e.propertyName!=='height'){return;}applyCollapsedStyle(collapsibleRef.current,collapsed);onCollapseTransitionEnd==null||onCollapseTransitionEnd(collapsed);},className:className,children:children});}function CollapsibleLazy(_ref4){var collapsed=_ref4.collapsed,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_ref4,_excluded);var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!collapsed),mounted=_useState2[0],setMounted=_useState2[1];// Updated in effect so that first expansion transition can work
var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(collapsed),lazyCollapsed=_useState3[0],setLazyCollapsed=_useState3[1];(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function(){if(!collapsed){setMounted(true);}},[collapsed]);(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function(){if(mounted){setLazyCollapsed(collapsed);}},[mounted,collapsed]);return mounted?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CollapsibleBase,Object.assign({},props,{collapsed:lazyCollapsed})):null;}/**
 * A headless component providing smooth and uniform collapsing behavior. The
 * component will be invisible (zero height) when collapsed. Doesn't provide
 * interactivity by itself: collapse state is toggled through props.
 */function Collapsible(_ref5){var lazy=_ref5.lazy,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_ref5,_excluded2);var Comp=lazy?CollapsibleLazy:CollapsibleBase;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Comp,Object.assign({},props));}

/***/ }),

/***/ 65041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ useAnnouncementBar),
/* harmony export */   o: () => (/* binding */ AnnouncementBarProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92303);
/* harmony import */ var _utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60867);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43807);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Keep these keys in sync with the inlined script
// See packages/docusaurus-theme-classic/src/inlineScripts.ts
var AnnouncementBarDismissStorage=(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__/* .createStorageSlot */ .Wf)('docusaurus.announcement.dismiss');var IdStorage=(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__/* .createStorageSlot */ .Wf)('docusaurus.announcement.id');var isDismissedInStorage=function isDismissedInStorage(){return AnnouncementBarDismissStorage.get()==='true';};var setDismissedInStorage=function setDismissedInStorage(bool){return AnnouncementBarDismissStorage.set(String(bool));};var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function useContextValue(){var _useThemeConfig=(0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_4__/* .useThemeConfig */ .p)(),announcementBar=_useThemeConfig.announcementBar;var isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){return isBrowser?// On client navigation: init with local storage value
isDismissedInStorage():// On server/hydration: always visible to prevent layout shifts (will be hidden with css if needed)
false;}),isClosed=_useState[0],setClosed=_useState[1];// Update state after hydration
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){setClosed(isDismissedInStorage());},[]);var handleClose=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){setDismissedInStorage(true);setClosed(true);},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(!announcementBar){return;}var id=announcementBar.id;var viewedId=IdStorage.get();// Retrocompatibility due to spelling mistake of default id
// see https://github.com/facebook/docusaurus/issues/3338
// cSpell:ignore annoucement
if(viewedId==='annoucement-bar'){viewedId='announcement-bar';}var isNewAnnouncement=id!==viewedId;IdStorage.set(id);if(isNewAnnouncement){setDismissedInStorage(false);}if(isNewAnnouncement||!isDismissedInStorage()){setClosed(false);}},[announcementBar]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{isActive:!!announcementBar&&!isClosed,close:handleClose};},[announcementBar,isClosed,handleClose]);}function AnnouncementBarProvider(_ref){var children=_ref.children;var value=useContextValue();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Context.Provider,{value:value,children:children});}function useAnnouncementBar(){var api=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!api){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__/* .ReactContextError */ .dV('AnnouncementBarProvider');}return api;}

/***/ }),

/***/ 95293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ useColorMode),
/* harmony export */   a: () => (/* binding */ ColorModeProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38193);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43807);
/* harmony import */ var _utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60867);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);var ColorModeStorageKey='theme';var ColorModeStorage=(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__/* .createStorageSlot */ .Wf)(ColorModeStorageKey);var ColorModes={light:'light',dark:'dark'};// Ensure to always return a valid colorMode even if input is invalid
var coerceToColorMode=function coerceToColorMode(colorMode){return colorMode===ColorModes.dark?ColorModes.dark:ColorModes.light;};var getInitialColorMode=function getInitialColorMode(defaultMode){return _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM?coerceToColorMode(document.documentElement.getAttribute('data-theme')):coerceToColorMode(defaultMode);};var storeColorMode=function storeColorMode(newColorMode){ColorModeStorage.set(coerceToColorMode(newColorMode));};function useContextValue(){var _useThemeConfig=(0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_4__/* .useThemeConfig */ .p)(),_useThemeConfig$color=_useThemeConfig.colorMode,defaultMode=_useThemeConfig$color.defaultMode,disableSwitch=_useThemeConfig$color.disableSwitch,respectPrefersColorScheme=_useThemeConfig$color.respectPrefersColorScheme;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialColorMode(defaultMode)),colorMode=_useState[0],setColorModeState=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){// A site is deployed without disableSwitch
// => User visits the site and has a persisted value
// => Site later enabled disableSwitch
// => Clear the previously stored value to apply the site's setting
if(disableSwitch){ColorModeStorage.del();}},[disableSwitch]);var setColorMode=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(newColorMode,options){if(options===void 0){options={};}var _options=options,_options$persist=_options.persist,persist=_options$persist===void 0?true:_options$persist;if(newColorMode){setColorModeState(newColorMode);if(persist){storeColorMode(newColorMode);}}else{if(respectPrefersColorScheme){setColorModeState(window.matchMedia('(prefers-color-scheme: dark)').matches?ColorModes.dark:ColorModes.light);}else{setColorModeState(defaultMode);}ColorModeStorage.del();}},[respectPrefersColorScheme,defaultMode]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){document.documentElement.setAttribute('data-theme',coerceToColorMode(colorMode));},[colorMode]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(disableSwitch){return undefined;}var onChange=function onChange(e){if(e.key!==ColorModeStorageKey){return;}var storedColorMode=ColorModeStorage.get();if(storedColorMode!==null){setColorMode(coerceToColorMode(storedColorMode));}};window.addEventListener('storage',onChange);return function(){return window.removeEventListener('storage',onChange);};},[disableSwitch,setColorMode]);// PCS is coerced to light mode when printing, which causes the color mode to
// be reset to dark when exiting print mode, disregarding user settings. When
// the listener fires only because of a print/screen switch, we don't change
// color mode. See https://github.com/facebook/docusaurus/pull/6490
var previousMediaIsPrint=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(disableSwitch&&!respectPrefersColorScheme){return undefined;}var mql=window.matchMedia('(prefers-color-scheme: dark)');var onChange=function onChange(){if(window.matchMedia('print').matches||previousMediaIsPrint.current){previousMediaIsPrint.current=window.matchMedia('print').matches;return;}setColorMode(null);};mql.addListener(onChange);return function(){return mql.removeListener(onChange);};},[setColorMode,disableSwitch,respectPrefersColorScheme]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{colorMode:colorMode,setColorMode:setColorMode,get isDarkTheme(){if(false){}return colorMode===ColorModes.dark;},setLightTheme:function setLightTheme(){if(false){}setColorMode(ColorModes.light);},setDarkTheme:function setDarkTheme(){if(false){}setColorMode(ColorModes.dark);}};},[colorMode,setColorMode]);}function ColorModeProvider(_ref){var children=_ref.children;var value=useContextValue();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Context.Provider,{value:value,children:children});}function useColorMode(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context==null){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__/* .ReactContextError */ .dV('ColorModeProvider','Please see https://docusaurus.io/docs/api/themes/configuration#use-color-mode.');}return context;}

/***/ }),

/***/ 22069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ useNavbarMobileSidebar),
/* harmony export */   e: () => (/* binding */ NavbarMobileSidebarProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _navbarSecondaryMenu_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75600);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24581);
/* harmony import */ var _utils_historyUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57485);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6342);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43807);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);function useIsNavbarMobileSidebarDisabled(){var secondaryMenuContent=(0,_navbarSecondaryMenu_content__WEBPACK_IMPORTED_MODULE_2__/* .useNavbarSecondaryMenuContent */ .YL)();var items=(0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_3__/* .useThemeConfig */ .p)().navbar.items;return items.length===0&&!secondaryMenuContent.component;}function useContextValue(){var disabled=useIsNavbarMobileSidebarDisabled();var windowSize=(0,_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__/* .useWindowSize */ .l)();var shouldRender=!disabled&&windowSize==='mobile';var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),shown=_useState[0],setShown=_useState[1];// Close mobile sidebar on navigation pop
// Most likely firing when using the Android back button (but not only)
(0,_utils_historyUtils__WEBPACK_IMPORTED_MODULE_5__/* .useHistoryPopHandler */ .$Z)(function(){if(shown){setShown(false);// Prevent pop navigation; seems desirable enough
// See https://github.com/facebook/docusaurus/pull/5462#issuecomment-911699846
return false;}return undefined;});var toggle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){setShown(function(s){return!s;});},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(windowSize==='desktop'){setShown(false);}},[windowSize]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{disabled:disabled,shouldRender:shouldRender,toggle:toggle,shown:shown};},[disabled,shouldRender,toggle,shown]);}function NavbarMobileSidebarProvider(_ref){var children=_ref.children;var value=useContextValue();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:value,children:children});}function useNavbarMobileSidebar(){var context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);if(context===undefined){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_6__/* .ReactContextError */ .dV('NavbarMobileSidebarProvider');}return context;}

/***/ }),

/***/ 75600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GX: () => (/* binding */ NavbarSecondaryMenuFiller),
/* harmony export */   YL: () => (/* binding */ useNavbarSecondaryMenuContent),
/* harmony export */   y_: () => (/* binding */ NavbarSecondaryMenuContentProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43807);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);/** @internal */function NavbarSecondaryMenuContentProvider(_ref){var children=_ref.children;var value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({component:null,props:null});return(/*#__PURE__*/// @ts-expect-error: this context is hard to type
(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:value,children:children}));}/** @internal */function useNavbarSecondaryMenuContent(){var value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!value){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .ReactContextError */ .dV('NavbarSecondaryMenuContentProvider');}return value[0];}/**
 * This component renders nothing by itself, but it fills the placeholder in the
 * generic secondary menu layout. This reduces coupling between the main layout
 * and the specific page.
 *
 * This kind of feature is often called portal/teleport/gateway/outlet...
 * Various unmaintained React libs exist. Most up-to-date one:
 * https://github.com/gregberge/react-teleporter
 * Not sure any of those is safe regarding concurrent mode.
 */function NavbarSecondaryMenuFiller(_ref2){var component=_ref2.component,props=_ref2.props;var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!context){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .ReactContextError */ .dV('NavbarSecondaryMenuContentProvider');}var setContent=context[1];// To avoid useless context re-renders, props are memoized shallowly
var memoizedProps=(0,_utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .useShallowMemoObject */ .Be)(props);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){// @ts-expect-error: this context is hard to type
setContent({component:component,props:memoizedProps});},[setContent,component,memoizedProps]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){return function(){return setContent({component:null,props:null});};},[setContent]);return null;}

/***/ }),

/***/ 14090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: () => (/* binding */ keyboardFocusedClassName),
  J: () => (/* binding */ useKeyboardNavigation)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@docusaurus/theme-common/lib/hooks/styles.css
// extracted by mini-css-extract-plugin

;// ./node_modules/@docusaurus/theme-common/lib/hooks/useKeyboardNavigation.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var keyboardFocusedClassName='navigation-with-keyboard';/**
 * Side-effect that adds the `keyboardFocusedClassName` to the body element when
 * the keyboard has been pressed, or removes it when the mouse is clicked.
 *
 * The presence of this class name signals that the user may be using keyboard
 * for navigation, and the theme **must** add focus outline when this class name
 * is present. (And optionally not if it's absent, for design purposes)
 *
 * Inspired by https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
 */function useKeyboardNavigation(){(0,react.useEffect)(function(){function handleOutlineStyles(e){if(e.type==='keydown'&&e.key==='Tab'){document.body.classList.add(keyboardFocusedClassName);}if(e.type==='mousedown'){document.body.classList.remove(keyboardFocusedClassName);}}document.addEventListener('keydown',handleOutlineStyles);document.addEventListener('mousedown',handleOutlineStyles);return function(){document.body.classList.remove(keyboardFocusedClassName);document.removeEventListener('keydown',handleOutlineStyles);document.removeEventListener('mousedown',handleOutlineStyles);};},[]);}

/***/ }),

/***/ 24581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38193);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var windowSizes={desktop:'desktop',mobile:'mobile',ssr:'ssr'};// Note: this value is also hardcoded in Infima
// Both JS and CSS must have the same value
// Updating this JS value alone is not enough
// See https://github.com/facebook/docusaurus/issues/9603
var DesktopBreakpoint=996;function getWindowSize(desktopBreakpoint){if(!_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM){throw new Error('getWindowSize() should only be called after React hydration');}return window.innerWidth>desktopBreakpoint?windowSizes.desktop:windowSizes.mobile;}/**
 * Gets the current window size as an enum value. We don't want it to return the
 * actual width value, so that it only re-renders once a breakpoint is crossed.
 *
 * It may return `"ssr"`, which is very important to handle hydration FOUC or
 * layout shifts. You have to handle it explicitly upfront. On the server, you
 * may need to render BOTH the mobile/desktop elements (and hide one of them
 * with mediaquery). We don't return `undefined` on purpose, to make it more
 * explicit.
 */function useWindowSize(_temp){var _ref=_temp===void 0?{}:_temp,_ref$desktopBreakpoin=_ref.desktopBreakpoint,desktopBreakpoint=_ref$desktopBreakpoin===void 0?DesktopBreakpoint:_ref$desktopBreakpoin;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){return(// super important to return a constant value to avoid hydration mismatch
// see https://github.com/facebook/docusaurus/issues/9379
'ssr');}),windowSize=_useState[0],setWindowSize=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){function updateWindowSize(){setWindowSize(getWindowSize(desktopBreakpoint));}updateWindowSize();window.addEventListener('resize',updateWindowSize);return function(){window.removeEventListener('resize',updateWindowSize);};},[desktopBreakpoint]);return windowSize;}

/***/ }),

/***/ 17559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ ThemeClassNames)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Please do not modify the classnames! This is a breaking change, and annoying
// for users!
/**
 * These class names are used to style page layouts in Docusaurus, meant to be
 * targeted by user-provided custom CSS selectors.
 */var ThemeClassNames={page:{blogListPage:'blog-list-page',blogPostPage:'blog-post-page',blogTagsListPage:'blog-tags-list-page',blogTagPostListPage:'blog-tags-post-list-page',blogAuthorsListPage:'blog-authors-list-page',blogAuthorsPostsPage:'blog-authors-posts-page',docsDocPage:'docs-doc-page',docsTagsListPage:'docs-tags-list-page',docsTagDocListPage:'docs-tags-doc-list-page',mdxPage:'mdx-page'},wrapper:{main:'main-wrapper',// TODO these wrapper class names are now quite useless
// TODO do breaking change later in 3.0
// we already add plugin name/id class on <html>: that's enough
blogPages:'blog-wrapper',docsPages:'docs-wrapper',mdxPages:'mdx-wrapper'},common:{editThisPage:'theme-edit-this-page',lastUpdated:'theme-last-updated',backToTopButton:'theme-back-to-top-button',codeBlock:'theme-code-block',admonition:'theme-admonition',unlistedBanner:'theme-unlisted-banner',draftBanner:'theme-draft-banner',admonitionType:function admonitionType(type){return"theme-admonition-"+type;}},layout:{// TODO add other stable classNames here
},/**
     * Follows the naming convention "theme-{blog,doc,version,page}?-<suffix>"
     */docs:{docVersionBanner:'theme-doc-version-banner',docVersionBadge:'theme-doc-version-badge',docBreadcrumbs:'theme-doc-breadcrumbs',docMarkdown:'theme-doc-markdown',docTocMobile:'theme-doc-toc-mobile',docTocDesktop:'theme-doc-toc-desktop',docFooter:'theme-doc-footer',docFooterTagsRow:'theme-doc-footer-tags-row',docFooterEditMetaRow:'theme-doc-footer-edit-meta-row',docSidebarContainer:'theme-doc-sidebar-container',docSidebarMenu:'theme-doc-sidebar-menu',docSidebarItemCategory:'theme-doc-sidebar-item-category',docSidebarItemLink:'theme-doc-sidebar-item-link',docSidebarItemCategoryLevel:function docSidebarItemCategoryLevel(level){return"theme-doc-sidebar-item-category-level-"+level;},docSidebarItemLinkLevel:function docSidebarItemLinkLevel(level){return"theme-doc-sidebar-item-link-level-"+level;}// TODO add other stable classNames here
},blog:{// TODO add other stable classNames here
blogFooterTagsRow:'theme-blog-footer-tags-row',blogFooterEditMetaRow:'theme-blog-footer-edit-meta-row'},pages:{pageFooterEditMetaRow:'theme-pages-footer-edit-meta-row'}};

/***/ }),

/***/ 53109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ prefersReducedMotion)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function prefersReducedMotion(){return window.matchMedia('(prefers-reduced-motion: reduce)').matches;}

/***/ }),

/***/ 12181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  bq: () => (/* binding */ ErrorBoundaryError),
  MN: () => (/* binding */ ErrorBoundaryErrorMessageFallback),
  a2: () => (/* binding */ ErrorBoundaryTryAgainButton),
  k2: () => (/* binding */ ErrorCauseBoundary)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(77387);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(70440);
;// ./node_modules/@docusaurus/theme-common/lib/utils/errorBoundaryUtils.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const errorBoundaryUtils_module = ({"errorBoundaryError":"errorBoundaryError_a6uf","errorBoundaryFallback":"errorBoundaryFallback_VBag"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-common/lib/utils/errorBoundaryUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ErrorBoundaryTryAgainButton(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("button",Object.assign({type:"button"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.ErrorPageContent.tryAgain",description:"The label of the button to try again rendering when the React error boundary captures an error",children:"Try again"})}));}// A very simple reusable ErrorBoundary fallback component
function ErrorBoundaryErrorMessageFallback(_ref){var error=_ref.error,tryAgain=_ref.tryAgain;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:errorBoundaryUtils_module.errorBoundaryFallback,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:error.message}),/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundaryTryAgainButton,{onClick:tryAgain})]});}function ErrorBoundaryError(_ref2){var error=_ref2.error;var causalChain=(0,lib/* getErrorCausalChain */.rA)(error);var fullMessage=causalChain.map(function(e){return e.message;}).join('\n\nCause:\n');return/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:errorBoundaryUtils_module.errorBoundaryError,children:fullMessage});}/**
 * This component is useful to wrap a low-level error into a more meaningful
 * error with extra context, using the ES error-cause feature.
 *
 * <ErrorCauseBoundary
 *   onError={(error) => new Error("extra context message",{cause: error})}
 * >
 *   <RiskyComponent>
 * </ErrorCauseBoundary>
 */var ErrorCauseBoundary=/*#__PURE__*/function(_React$Component){function ErrorCauseBoundary(){return _React$Component.apply(this,arguments)||this;}(0,inheritsLoose/* default */.A)(ErrorCauseBoundary,_React$Component);var _proto=ErrorCauseBoundary.prototype;_proto.componentDidCatch=function componentDidCatch(error,errorInfo){throw this.props.onError(error,errorInfo);};_proto.render=function render(){return this.props.children;};return ErrorCauseBoundary;}(react.Component);

/***/ }),

/***/ 57485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Z: () => (/* binding */ useHistoryPopHandler),
/* harmony export */   aZ: () => (/* binding */ useQueryStringValue)
/* harmony export */ });
/* unused harmony exports useHistorySelector, useQueryString, useQueryStringList, useClearQueryString */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35527);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43807);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Permits to register a handler that will be called on history actions (pop,
 * push, replace). If the handler returns `false`, the navigation transition
 * will be blocked/cancelled.
 */function useHistoryActionHandler(handler){var history=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useHistory */ .W6)();var stableHandler=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)(handler);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(// See https://github.com/remix-run/history/blob/main/docs/blocking-transitions.md
function(){return history.block(function(location,action){return stableHandler(location,action);});},[history,stableHandler]);}/**
 * Permits to register a handler that will be called on history pop navigation
 * (backward/forward). If the handler returns `false`, the backward/forward
 * transition will be blocked. Unfortunately there's no good way to detect the
 * "direction" (backward/forward) of the POP event.
 */function useHistoryPopHandler(handler){useHistoryActionHandler(function(location,action){if(action==='POP'){// Maybe block navigation if handler returns false
return handler(location,action);}// Don't block other navigation actions
return undefined;});}/**
 * Permits to efficiently subscribe to a slice of the history
 * See https://thisweekinreact.com/articles/useSyncExternalStore-the-underrated-react-api
 * @param selector
 */function useHistorySelector(selector){var history=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useHistory */ .W6)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(history.listen,function(){return selector(history);},function(){return selector(history);});}/**
 * Permits to efficiently subscribe to a specific querystring value
 * @param key
 */function useQueryStringValue(key){return useHistorySelector(function(history){if(key===null){return null;}return new URLSearchParams(history.location.search).get(key);});}function useQueryStringUpdater(key){var history=useHistory();return useCallback(function(newValue,options){var searchParams=new URLSearchParams(history.location.search);if(newValue){searchParams.set(key,newValue);}else{searchParams["delete"](key);}var updateHistory=options!=null&&options.push?history.push:history.replace;updateHistory({search:searchParams.toString()});},[key,history]);}function useQueryString(key){var _useQueryStringValue;var value=(_useQueryStringValue=useQueryStringValue(key))!=null?_useQueryStringValue:'';var update=useQueryStringUpdater(key);return[value,update];}function useQueryStringListValues(key){// Unfortunately we can't just use searchParams.getAll(key) in the selector
// It would create a new array every time and lead to an infinite loop...
// The selector has to return a primitive/string value to avoid that...
var arrayJsonString=useHistorySelector(function(history){var values=new URLSearchParams(history.location.search).getAll(key);return JSON.stringify(values);});return useMemo(function(){return JSON.parse(arrayJsonString);},[arrayJsonString]);}function useQueryStringListUpdater(key){var history=useHistory();var setValues=useCallback(function(update,options){var searchParams=new URLSearchParams(history.location.search);var newValues=Array.isArray(update)?update:update(searchParams.getAll(key));searchParams["delete"](key);newValues.forEach(function(v){return searchParams.append(key,v);});var updateHistory=options!=null&&options.push?history.push:history.replace;updateHistory({search:searchParams.toString()});},[history,key]);return setValues;}function useQueryStringList(key){var values=useQueryStringListValues(key);var setValues=useQueryStringListUpdater(key);return[values,setValues];}function useClearQueryString(){var history=useHistory();return useCallback(function(){history.replace({search:undefined});},[history]);}

/***/ }),

/***/ 31682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $z: () => (/* binding */ groupBy),
/* harmony export */   XI: () => (/* binding */ duplicates),
/* harmony export */   sb: () => (/* binding */ uniq)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelperLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43845);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// A replacement of lodash in client code
/**
 * Gets the duplicate values in an array.
 * @param arr The array.
 * @param comparator Compares two values and returns `true` if they are equal
 * (duplicated).
 * @returns Value of the elements `v` that have a preceding element `u` where
 * `comparator(u, v) === true`. Values within the returned array are not
 * guaranteed to be unique.
 */function duplicates(arr,comparator){if(comparator===void 0){comparator=function comparator(a,b){return a===b;};}return arr.filter(function(v,vIndex){return arr.findIndex(function(u){return comparator(u,v);})!==vIndex;});}/**
 * Remove duplicate array items (similar to `_.uniq`)
 * @param arr The array.
 * @returns An array with duplicate elements removed by reference comparison.
 */function uniq(arr){// Note: had problems with [...new Set()]: https://github.com/facebook/docusaurus/issues/4972#issuecomment-863895061
return Array.from(new Set(arr));}// TODO 2025: replace by std Object.groupBy ?
// This is a local polyfill with exact same TS signature
// see https://github.com/microsoft/TypeScript/blob/main/src/lib/esnext.object.d.ts
function groupBy(items,keySelector){var result={};var index=0;for(var _iterator=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelperLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(items),_step;!(_step=_iterator()).done;){var _result$key;var item=_step.value;var key=keySelector(item,index);(_result$key=result[key])!=null?_result$key:result[key]=[];result[key].push(item);index+=1;}return result;}

/***/ }),

/***/ 61213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e3: () => (/* binding */ HtmlClassNameProvider),
  be: () => (/* binding */ PageMetadata),
  Jx: () => (/* binding */ PluginHtmlClassNameProvider)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useRouteContext.js
var useRouteContext = __webpack_require__(36803);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(86025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(44586);
;// ./node_modules/@docusaurus/theme-common/lib/utils/generalUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Formats the page's title based on relevant site config and other contexts.
 */function useTitleFormatter(title){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.A)(),siteConfig=_useDocusaurusContext.siteConfig;var siteTitle=siteConfig.title,titleDelimiter=siteConfig.titleDelimiter;return title!=null&&title.trim().length?title.trim()+" "+titleDelimiter+" "+siteTitle:siteTitle;}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Helper component to manipulate page metadata and override site defaults.
 * Works in the same way as Helmet.
 */function PageMetadata(_ref){var title=_ref.title,description=_ref.description,keywords=_ref.keywords,image=_ref.image,children=_ref.children;var pageTitle=useTitleFormatter(title);var _useBaseUrlUtils=(0,useBaseUrl/* useBaseUrlUtils */.hH)(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;var pageImage=image?withBaseUrl(image,{absolute:true}):undefined;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[title&&/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:pageTitle}),title&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:title",content:pageTitle}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"description",content:description}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:description",content:description}),keywords&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"keywords",content:// https://github.com/microsoft/TypeScript/issues/17002
Array.isArray(keywords)?keywords.join(','):keywords}),pageImage&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:image",content:pageImage}),pageImage&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:image",content:pageImage}),children]});}var HtmlClassNameContext=/*#__PURE__*/react.createContext(undefined);/**
 * Every layer of this provider will append a class name to the HTML element.
 * There's no consumer for this hook: it's side-effect-only. This wrapper is
 * necessary because Helmet does not "merge" classes.
 * @see https://github.com/staylor/react-helmet-async/issues/161
 */function HtmlClassNameProvider(_ref2){var classNameProp=_ref2.className,children=_ref2.children;var classNameContext=react.useContext(HtmlClassNameContext);var className=(0,clsx/* default */.A)(classNameContext,classNameProp);return/*#__PURE__*/(0,jsx_runtime.jsxs)(HtmlClassNameContext.Provider,{value:className,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Head/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("html",{className:className})}),children]});}function pluginNameToClassName(pluginName){return"plugin-"+pluginName.replace(/docusaurus-(?:plugin|theme)-(?:content-)?/gi,'');}/**
 * A very thin wrapper around `HtmlClassNameProvider` that adds the plugin ID +
 * name to the HTML class name.
 */function PluginHtmlClassNameProvider(_ref3){var children=_ref3.children;var routeContext=(0,useRouteContext/* default */.A)();var nameClass=pluginNameToClassName(routeContext.plugin.name);var idClass="plugin-id-"+routeContext.plugin.id;return/*#__PURE__*/(0,jsx_runtime.jsx)(HtmlClassNameProvider,{className:(0,clsx/* default */.A)(nameClass,idClass),children:children});}

/***/ }),

/***/ 43807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  dV: () => (/* binding */ ReactContextError),
  fM: () => (/* binding */ composeProviders),
  _q: () => (/* binding */ useEvent),
  ZC: () => (/* binding */ usePrevious),
  Be: () => (/* binding */ useShallowMemoObject)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapRegExp.js + 1 modules
var wrapRegExp = __webpack_require__(3909);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(77387);
;// ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__(63662);
;// ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}

;// ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}

;// ./node_modules/@babel/runtime/helpers/esm/construct.js


function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && (0,setPrototypeOf/* default */.A)(p, r.prototype), p;
}

;// ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js




function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper(t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), (0,setPrototypeOf/* default */.A)(Wrapper, t);
  }, _wrapNativeSuper(t);
}

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(205);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Temporary userland implementation until an official hook is implemented
 * See RFC: https://github.com/reactjs/rfcs/pull/220
 *
 * Permits to transform an unstable callback (like an arrow function provided as
 * props) to a "stable" callback that is safe to use in a `useEffect` dependency
 * array. Useful to avoid React stale closure problems + avoid useless effect
 * re-executions.
 *
 * This generally works but has some potential drawbacks, such as
 * https://github.com/facebook/react/issues/16956#issuecomment-536636418
 */function useEvent(callback){var ref=(0,react.useRef)(callback);(0,useIsomorphicLayoutEffect/* default */.A)(function(){ref.current=callback;},[callback]);// @ts-expect-error: TS is right that this callback may be a supertype of T,
// but good enough for our use
return (0,react.useCallback)(function(){return ref.current.apply(ref,arguments);},[]);}/**
 * Gets `value` from the last render.
 */function usePrevious(value){var ref=(0,react.useRef)();(0,useIsomorphicLayoutEffect/* default */.A)(function(){ref.current=value;});return ref.current;}/**
 * This error is thrown when a context is consumed outside its provider. Allows
 * reusing a generic error message format and reduces bundle size. The hook's
 * name will be extracted from its stack, so only the provider's name is needed.
 */var ReactContextError=/*#__PURE__*/function(_Error){function ReactContextError(providerName,additionalInfo){var _this$stack$split$1$m,_this$stack;var _this;_this=_Error.call(this)||this;_this.name='ReactContextError';_this.message="Hook "+((_this$stack$split$1$m=(_this$stack=_this.stack)==null||(_this$stack=_this$stack.split('\n')[1])==null||(_this$stack=_this$stack.match(/*#__PURE__*/(0,wrapRegExp/* default */.A)(/at (?:\w+\.)?(\w+)/,{name:1})))==null?void 0:_this$stack.groups.name)!=null?_this$stack$split$1$m:'')+" is called outside the <"+providerName+">. "+(additionalInfo!=null?additionalInfo:'');return _this;}(0,inheritsLoose/* default */.A)(ReactContextError,_Error);return ReactContextError;}(/*#__PURE__*/_wrapNativeSuper(Error));/**
 * Shallow-memoize an object. This means the returned object will be the same as
 * the previous render if the property keys and values did not change. This
 * works for simple cases: when property values are primitives or stable
 * objects.
 *
 * @param obj
 */function useShallowMemoObject(obj){var deps=Object.entries(obj);// Sort by keys to make it order-insensitive
deps.sort(function(a,b){return a[0].localeCompare(b[0]);});// eslint-disable-next-line react-hooks/exhaustive-deps
return (0,react.useMemo)(function(){return obj;},deps.flat());}/**
 * Creates a single React provider from an array of existing providers
 * assuming providers only take "children" as props.
 *
 * Prevents the annoying React element nesting
 * Example here: https://getfrontend.tips/compose-multiple-react-providers/
 *
 * The order matters:
 * - The first provider is at the top of the tree.
 * - The last provider is the most nested one
 *
 * @param providers array of providers to compose
 */function composeProviders(providers){// Creates a single React component: it's cheaper to compose JSX elements
return function(_ref){var children=_ref.children;return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:providers.reduceRight(function(element,CurrentProvider){return/*#__PURE__*/(0,jsx_runtime.jsx)(CurrentProvider,{children:element});},children)});};}

/***/ }),

/***/ 99169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dt: () => (/* binding */ useHomePageRoute),
/* harmony export */   ys: () => (/* binding */ isSamePath)
/* harmony export */ });
/* unused harmony export findHomePageRoute */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _generated_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93806);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44586);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Compare the 2 paths, case insensitive and ignoring trailing slash
 */function isSamePath(path1,path2){var normalize=function normalize(pathname){var _ref;return(_ref=!pathname||pathname.endsWith('/')?pathname:pathname+"/")==null?void 0:_ref.toLowerCase();};return normalize(path1)===normalize(path2);}/**
 * Note that sites don't always have a homepage in practice, so we can't assume
 * that linking to '/' is always safe.
 * @see https://github.com/facebook/docusaurus/pull/6517#issuecomment-1048709116
 */function findHomePageRoute(_ref2){var baseUrl=_ref2.baseUrl,initialRoutes=_ref2.routes;function isHomePageRoute(route){return route.path===baseUrl&&route.exact===true;}function isHomeParentRoute(route){return route.path===baseUrl&&!route.exact;}function doFindHomePageRoute(routes){if(routes.length===0){return undefined;}var homePage=routes.find(isHomePageRoute);if(homePage){return homePage;}var indexSubRoutes=routes.filter(isHomeParentRoute).flatMap(function(route){var _route$routes;return(_route$routes=route.routes)!=null?_route$routes:[];});return doFindHomePageRoute(indexSubRoutes);}return doFindHomePageRoute(initialRoutes);}/**
 * Fetches the route that points to "/". Use this instead of the naive "/",
 * because the homepage may not exist.
 */function useHomePageRoute(){var baseUrl=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)().siteConfig.baseUrl;return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return findHomePageRoute({routes:_generated_routes__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,baseUrl:baseUrl});},[baseUrl]);}

/***/ }),

/***/ 23104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mq: () => (/* binding */ useScrollPosition),
/* harmony export */   Tv: () => (/* binding */ ScrollControllerProvider),
/* harmony export */   a_: () => (/* binding */ useScrollPositionBlocker),
/* harmony export */   gk: () => (/* binding */ useSmoothScrollTo)
/* harmony export */ });
/* unused harmony export useScrollController */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38193);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92303);
/* harmony import */ var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(205);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43807);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useScrollControllerContextValue(){var scrollEventsEnabledRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{scrollEventsEnabledRef:scrollEventsEnabledRef,enableScrollEvents:function enableScrollEvents(){scrollEventsEnabledRef.current=true;},disableScrollEvents:function disableScrollEvents(){scrollEventsEnabledRef.current=false;}};},[]);}var ScrollMonitorContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);function ScrollControllerProvider(_ref){var children=_ref.children;var value=useScrollControllerContextValue();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ScrollMonitorContext.Provider,{value:value,children:children});}/**
 * We need a way to update the scroll position while ignoring scroll events
 * so as not to toggle Navbar/BackToTop visibility.
 *
 * This API permits to temporarily disable/ignore scroll events. Motivated by
 * https://github.com/facebook/docusaurus/pull/5618
 */function useScrollController(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ScrollMonitorContext);if(context==null){throw new _reactUtils__WEBPACK_IMPORTED_MODULE_5__/* .ReactContextError */ .dV('ScrollControllerProvider');}return context;}var getScrollPosition=function getScrollPosition(){return _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null;};/**
 * This hook fires an effect when the scroll position changes. The effect will
 * be provided with the before/after scroll positions. Note that the effect may
 * not be always run: if scrolling is disabled through `useScrollController`, it
 * will be a no-op.
 *
 * @see {@link useScrollController}
 */function useScrollPosition(effect,deps){if(deps===void 0){deps=[];}var _useScrollController=useScrollController(),scrollEventsEnabledRef=_useScrollController.scrollEventsEnabledRef;var lastPositionRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(getScrollPosition());var dynamicEffect=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_5__/* .useEvent */ ._q)(effect);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var handleScroll=function handleScroll(){if(!scrollEventsEnabledRef.current){return;}var currentPosition=getScrollPosition();dynamicEffect(currentPosition,lastPositionRef.current);lastPositionRef.current=currentPosition;};var opts={passive:true};handleScroll();window.addEventListener('scroll',handleScroll,opts);return function(){return window.removeEventListener('scroll',handleScroll,opts);};// eslint-disable-next-line react-hooks/exhaustive-deps
},[dynamicEffect,scrollEventsEnabledRef].concat(deps));}function useScrollPositionSaver(){var lastElementRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({elem:null,top:0});var save=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(elem){lastElementRef.current={elem:elem,top:elem.getBoundingClientRect().top};},[]);var restore=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){var _lastElementRef$curre=lastElementRef.current,elem=_lastElementRef$curre.elem,top=_lastElementRef$curre.top;if(!elem){return{restored:false};}var newTop=elem.getBoundingClientRect().top;var heightDiff=newTop-top;if(heightDiff){window.scrollBy({left:0,top:heightDiff});}lastElementRef.current={elem:null,top:0};return{restored:heightDiff!==0};},[]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{save:save,restore:restore};},[restore,save]);}/**
 * This hook permits to "block" the scroll position of a DOM element.
 * The idea is that we should be able to update DOM content above this element
 * but the screen position of this element should not change.
 *
 * Feature motivated by the Tabs groups: clicking on a tab may affect tabs of
 * the same group upper in the tree, yet to avoid a bad UX, the clicked tab must
 * remain under the user mouse.
 *
 * @see https://github.com/facebook/docusaurus/pull/5618
 */function useScrollPositionBlocker(){var scrollController=useScrollController();var scrollPositionSaver=useScrollPositionSaver();var nextLayoutEffectCallbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);var blockElementScrollPositionUntilNextRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(el){scrollPositionSaver.save(el);scrollController.disableScrollEvents();nextLayoutEffectCallbackRef.current=function(){var _scrollPositionSaver$=scrollPositionSaver.restore(),restored=_scrollPositionSaver$.restored;nextLayoutEffectCallbackRef.current=undefined;// Restoring the former scroll position will trigger a scroll event. We
// need to wait for next scroll event to happen before enabling the
// scrollController events again.
if(restored){var _handleScrollRestoreEvent=function handleScrollRestoreEvent(){scrollController.enableScrollEvents();window.removeEventListener('scroll',_handleScrollRestoreEvent);};window.addEventListener('scroll',_handleScrollRestoreEvent);}else{scrollController.enableScrollEvents();}};},[scrollController,scrollPositionSaver]);(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function(){// Queuing permits to restore scroll position after all useLayoutEffect
// have run, and yet preserve the sync nature of the scroll restoration
// See https://github.com/facebook/docusaurus/issues/8625
queueMicrotask(function(){return nextLayoutEffectCallbackRef.current==null?void 0:nextLayoutEffectCallbackRef.current();});});return{blockElementScrollPositionUntilNextRender:blockElementScrollPositionUntilNextRender};}function smoothScrollNative(top){window.scrollTo({top:top,behavior:'smooth'});return function(){// Nothing to cancel, it's natively cancelled if user tries to scroll down
};}function smoothScrollPolyfill(top){var raf=null;var isUpScroll=document.documentElement.scrollTop>top;function rafRecursion(){var currentScroll=document.documentElement.scrollTop;if(isUpScroll&&currentScroll>top||!isUpScroll&&currentScroll<top){raf=requestAnimationFrame(rafRecursion);window.scrollTo(0,Math.floor((currentScroll-top)*0.85)+top);}}rafRecursion();// Break the recursion. Prevents the user from "fighting" against that
// recursion producing a weird UX
return function(){return raf&&cancelAnimationFrame(raf);};}/**
 * A "smart polyfill" of `window.scrollTo({ top, behavior: "smooth" })`.
 * This currently always uses a polyfilled implementation unless
 * `scroll-behavior: smooth` has been set in CSS, because native support
 * detection for scroll behavior seems unreliable.
 *
 * This hook does not do anything by itself: it returns a start and a stop
 * handle. You can execute either handle at any time.
 */function useSmoothScrollTo(){var cancelRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);var isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();// Not all have support for smooth scrolling (particularly Safari mobile iOS)
// TODO proper detection is currently unreliable!
// see https://github.com/wessberg/scroll-behavior-polyfill/issues/16
// For now, we only use native scroll behavior if smooth is already set,
// because otherwise the polyfill produces a weird UX when both CSS and JS try
// to scroll a page, and they cancel each other.
var supportsNativeSmoothScrolling=isBrowser&&getComputedStyle(document.documentElement).scrollBehavior==='smooth';return{startScroll:function startScroll(top){cancelRef.current=supportsNativeSmoothScrolling?smoothScrollNative(top):smoothScrollPolyfill(top);},cancelScroll:function cancelScroll(){return cancelRef.current==null?void 0:cancelRef.current();}};}

/***/ }),

/***/ 60867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Wf: () => (/* binding */ createStorageSlot),
  Dv: () => (/* binding */ useStorageSlot)
});

// UNUSED EXPORTS: listStorageKeys

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./apps/docs/.docusaurus/site-storage.json
const site_storage_namespaceObject = /*#__PURE__*/JSON.parse('{"N":"localStorage","M":""}');
;// ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DefaultStorageType=site_storage_namespaceObject.N;function applyNamespace(storageKey){return""+storageKey+site_storage_namespaceObject.M;}// window.addEventListener('storage') only works for different windows...
// so for current window we have to dispatch the event manually
// Now we can listen for both cross-window / current-window storage changes!
// see https://stackoverflow.com/a/71177640/82609
// see https://stackoverflow.com/questions/26974084/listen-for-changes-with-localstorage-on-the-same-window
function dispatchChangeEvent(_ref){var key=_ref.key,oldValue=_ref.oldValue,newValue=_ref.newValue,storage=_ref.storage;// If we set multiple times the same storage value, events should not be fired
// The native events behave this way, so our manual event dispatch should
// rather behave exactly the same. Not doing so might create infinite loops.
// See https://github.com/facebook/docusaurus/issues/8594
if(oldValue===newValue){return;}var event=document.createEvent('StorageEvent');event.initStorageEvent('storage',false,false,key,oldValue,newValue,window.location.href,storage);window.dispatchEvent(event);}/**
 * Will return `null` if browser storage is unavailable (like running Docusaurus
 * in an iframe). This should NOT be called in SSR.
 *
 * @see https://github.com/facebook/docusaurus/pull/4501
 */function getBrowserStorage(storageType){if(storageType===void 0){storageType=DefaultStorageType;}if(typeof window==='undefined'){throw new Error('Browser storage is not available on Node.js/Docusaurus SSR process.');}if(storageType==='none'){return null;}try{return window[storageType];}catch(err){logOnceBrowserStorageNotAvailableWarning(err);return null;}}var hasLoggedBrowserStorageNotAvailableWarning=false;/**
 * Poor man's memoization to avoid logging multiple times the same warning.
 * Sometimes, `localStorage`/`sessionStorage` is unavailable due to browser
 * policies.
 */function logOnceBrowserStorageNotAvailableWarning(error){if(!hasLoggedBrowserStorageNotAvailableWarning){console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",error);hasLoggedBrowserStorageNotAvailableWarning=true;}}var NoopStorageSlot={get:function get(){return null;},set:function set(){},del:function del(){},listen:function listen(){return function(){};}};// Fail-fast, as storage APIs should not be used during the SSR process
function createServerStorageSlot(key){function throwError(){throw new Error("Illegal storage API usage for storage key \""+key+"\".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.");}return{get:throwError,set:throwError,del:throwError,listen:throwError};}/**
 * Creates an interface to work on a particular key in the storage model.
 * Note that this function only initializes the interface, but doesn't allocate
 * anything by itself (i.e. no side-effects).
 *
 * The API is fail-safe, since usage of browser storage should be considered
 * unreliable. Local storage might simply be unavailable (iframe + browser
 * security) or operations might fail individually. Please assume that using
 * this API can be a no-op. See also https://github.com/facebook/docusaurus/issues/6036
 */function createStorageSlot(keyInput,options){var key=applyNamespace(keyInput);if(typeof window==='undefined'){return createServerStorageSlot(key);}var storage=getBrowserStorage(options==null?void 0:options.persistence);if(storage===null){return NoopStorageSlot;}return{get:function get(){try{return storage.getItem(key);}catch(err){console.error("Docusaurus storage error, can't get key="+key,err);return null;}},set:function set(newValue){try{var oldValue=storage.getItem(key);storage.setItem(key,newValue);dispatchChangeEvent({key:key,oldValue:oldValue,newValue:newValue,storage:storage});}catch(err){console.error("Docusaurus storage error, can't set "+key+"="+newValue,err);}},del:function del(){try{var oldValue=storage.getItem(key);storage.removeItem(key);dispatchChangeEvent({key:key,oldValue:oldValue,newValue:null,storage:storage});}catch(err){console.error("Docusaurus storage error, can't delete key="+key,err);}},listen:function listen(onChange){try{var listener=function listener(event){if(event.storageArea===storage&&event.key===key){onChange(event);}};window.addEventListener('storage',listener);return function(){return window.removeEventListener('storage',listener);};}catch(err){console.error("Docusaurus storage error, can't listen for changes of key="+key,err);return function(){};}}};}function useStorageSlot(key,options){// Not ideal but good enough: assumes storage slot config is constant
var storageSlot=(0,react.useRef)(function(){if(key===null){return NoopStorageSlot;}return createStorageSlot(key,options);}).current();var listen=(0,react.useCallback)(function(onChange){// Do not try to add a listener during SSR
if(typeof window==='undefined'){return function(){};}return storageSlot.listen(onChange);},[storageSlot]);var currentValue=(0,react.useSyncExternalStore)(listen,function(){// TODO this check should be useless after React 18
if(typeof window==='undefined'){return null;}return storageSlot.get();},function(){return null;});return[currentValue,storageSlot];}/**
 * Returns a list of all the keys currently stored in browser storage,
 * or an empty list if browser storage can't be accessed.
 */function listStorageKeys(storageType){if(storageType===void 0){storageType=DefaultStorageType;}var browserStorage=getBrowserStorage(storageType);if(!browserStorage){return[];}var keys=[];for(var i=0;i<browserStorage.length;i+=1){var key=browserStorage.key(i);if(key!==null){keys.push(key);}}return keys;}

/***/ }),

/***/ 32131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ useAlternatePageUtils)
/* harmony export */ });
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44586);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35527);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70440);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Permits to obtain the url of the current page in another locale, useful to
 * generate hreflang meta headers etc...
 *
 * @see https://developers.google.com/search/docs/advanced/crawling/localized-versions
 */function useAlternatePageUtils(){var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig,baseUrl=_useDocusaurusContext2.baseUrl,url=_useDocusaurusContext2.url,trailingSlash=_useDocusaurusContext2.trailingSlash,_useDocusaurusContext3=_useDocusaurusContext.i18n,defaultLocale=_useDocusaurusContext3.defaultLocale,currentLocale=_useDocusaurusContext3.currentLocale;// TODO using useLocation().pathname is not a super idea
// See https://github.com/facebook/docusaurus/issues/9170
var _useLocation=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)(),pathname=_useLocation.pathname;var canonicalPathname=(0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_2__/* .applyTrailingSlash */ .Ks)(pathname,{trailingSlash:trailingSlash,baseUrl:baseUrl});var baseUrlUnlocalized=currentLocale===defaultLocale?baseUrl:baseUrl.replace("/"+currentLocale+"/",'/');var pathnameSuffix=canonicalPathname.replace(baseUrl,'');function getLocalizedBaseUrl(locale){return locale===defaultLocale?""+baseUrlUnlocalized:""+baseUrlUnlocalized+locale+"/";}// TODO support correct alternate url when localized site is deployed on
// another domain
function createUrl(_ref){var locale=_ref.locale,fullyQualified=_ref.fullyQualified;return""+(fullyQualified?url:'')+getLocalizedBaseUrl(locale)+pathnameSuffix;}return{createUrl:createUrl};}

/***/ }),

/***/ 75062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useLocationChange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35527);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43807);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Fires an effect when the location changes (which includes hash, query, etc.).
 * Importantly, doesn't fire when there's no previous location: see
 * https://github.com/facebook/docusaurus/pull/6696
 */function useLocationChange(onLocationChange){var location=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)();var previousLocation=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .usePrevious */ .ZC)(location);var onLocationChangeDynamic=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)(onLocationChange);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(!previousLocation){return;}if(location!==previousLocation){onLocationChangeDynamic({location:location,previousLocation:previousLocation});}},[onLocationChangeDynamic,location,previousLocation]);}

/***/ }),

/***/ 6342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ useThemeConfig)
/* harmony export */ });
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44586);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * A convenient/more semantic way to get theme config from context.
 */function useThemeConfig(){return (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().siteConfig.themeConfig;}

/***/ }),

/***/ 12983:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports, "__esModule", ({value:true}));exports.addTrailingSlash=addTrailingSlash;exports["default"]=applyTrailingSlash;exports.addLeadingSlash=addLeadingSlash;exports.removeTrailingSlash=removeTrailingSlash;var stringUtils_1=__webpack_require__(42566);function addTrailingSlash(str){return str.endsWith('/')?str:str+"/";}// Trailing slash handling depends in some site configuration options
function applyTrailingSlash(path,options){var trailingSlash=options.trailingSlash,baseUrl=options.baseUrl;if(path.startsWith('#')){// Never apply trailing slash to an anchor link
return path;}function handleTrailingSlash(str,trailing){return trailing?addTrailingSlash(str):removeTrailingSlash(str);}// undefined = legacy retrocompatible behavior
if(typeof trailingSlash==='undefined'){return path;}// The trailing slash should be handled before the ?search#hash !
var _path$split=path.split(/[#?]/),pathname=_path$split[0];// Never transform '/' to ''
// Never remove the baseUrl trailing slash!
// If baseUrl = /myBase/, we want to emit /myBase/index.html and not
// /myBase.html! See https://github.com/facebook/docusaurus/issues/5077
var shouldNotApply=pathname==='/'||pathname===baseUrl;var newPathname=shouldNotApply?pathname:handleTrailingSlash(pathname,trailingSlash);return path.replace(pathname,newPathname);}/** Appends a leading slash to `str`, if one doesn't exist. */function addLeadingSlash(str){return(0,stringUtils_1.addPrefix)(str,'/');}/** Removes the trailing slash from `str`. */function removeTrailingSlash(str){return(0,stringUtils_1.removeSuffix)(str,'/');}

/***/ }),

/***/ 80253:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.getErrorCausalChain=getErrorCausalChain;function getErrorCausalChain(error){if(error.cause){return[error].concat(getErrorCausalChain(error.cause));}return[error];}

/***/ }),

/***/ 70440:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */__webpack_unused_export__ = ({value:true});exports.rA=__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=exports.Ks=exports.LU=void 0;var tslib_1=__webpack_require__(31635);// __ prefix allows search crawlers (Algolia/DocSearch) to ignore anchors
// https://github.com/facebook/docusaurus/issues/8883#issuecomment-1516328368
exports.LU='__blog-post-container';var applyTrailingSlash_1=__webpack_require__(12983);Object.defineProperty(exports, "Ks", ({enumerable:true,get:function get(){return tslib_1.__importDefault(applyTrailingSlash_1)["default"];}}));__webpack_unused_export__ = ({enumerable:true,get:function get(){return applyTrailingSlash_1.addTrailingSlash;}});__webpack_unused_export__ = ({enumerable:true,get:function get(){return applyTrailingSlash_1.addLeadingSlash;}});__webpack_unused_export__ = ({enumerable:true,get:function get(){return applyTrailingSlash_1.removeTrailingSlash;}});var stringUtils_1=__webpack_require__(42566);__webpack_unused_export__ = ({enumerable:true,get:function get(){return stringUtils_1.addPrefix;}});__webpack_unused_export__ = ({enumerable:true,get:function get(){return stringUtils_1.removeSuffix;}});__webpack_unused_export__ = ({enumerable:true,get:function get(){return stringUtils_1.addSuffix;}});__webpack_unused_export__ = ({enumerable:true,get:function get(){return stringUtils_1.removePrefix;}});var errorUtils_1=__webpack_require__(80253);Object.defineProperty(exports, "rA", ({enumerable:true,get:function get(){return errorUtils_1.getErrorCausalChain;}}));

/***/ }),

/***/ 42566:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports, "__esModule", ({value:true}));exports.addPrefix=addPrefix;exports.removeSuffix=removeSuffix;exports.addSuffix=addSuffix;exports.removePrefix=removePrefix;/** Adds a given string prefix to `str`. */function addPrefix(str,prefix){return str.startsWith(prefix)?str:""+prefix+str;}/** Removes a given string suffix from `str`. */function removeSuffix(str,suffix){if(suffix===''){// str.slice(0, 0) is ""
return str;}return str.endsWith(suffix)?str.slice(0,-suffix.length):str;}/** Adds a given string suffix to `str`. */function addSuffix(str,suffix){return str.endsWith(suffix)?str:""+str+suffix;}/** Removes a given string prefix from `str`. */function removePrefix(str,prefix){return str.startsWith(prefix)?str.slice(prefix.length):str;}

/***/ }),

/***/ 31513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zR: () => (/* binding */ createBrowserHistory),
  TM: () => (/* binding */ createHashHistory),
  yJ: () => (/* binding */ createLocation),
  sC: () => (/* binding */ createMemoryHistory),
  AO: () => (/* binding */ createPath)
});

// UNUSED EXPORTS: locationsAreEqual, parsePath

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
;// ./node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ const resolve_pathname = (resolvePathname);

// EXTERNAL MODULE: ./node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var tiny_invariant = __webpack_require__(11561);
;// ./node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,esm_extends/* default */.A)({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? 0 : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? 0 : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : (0,tiny_invariant/* default */.A)(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.A)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : (0,tiny_invariant/* default */.A)(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.A)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? 0 : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? 0 : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.A)(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ 4146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(41191);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 20311:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 65354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 10119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5947:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ 6969:
/***/ ((module) => {

var components = {"core":{"meta":{"path":"components/prism-core.js","option":"mandatory"},"core":"Core"},"themes":{"meta":{"path":"themes/{id}.css","link":"index.html?theme={id}","exclusive":true},"prism":{"title":"Default","option":"default"},"prism-dark":"Dark","prism-funky":"Funky","prism-okaidia":{"title":"Okaidia","owner":"ocodia"},"prism-twilight":{"title":"Twilight","owner":"remybach"},"prism-coy":{"title":"Coy","owner":"tshedor"},"prism-solarizedlight":{"title":"Solarized Light","owner":"hectormatos2011 "},"prism-tomorrow":{"title":"Tomorrow Night","owner":"Rosey"}},"languages":{"meta":{"path":"components/prism-{id}","noCSS":true,"examplesPath":"examples/prism-{id}","addCheckAll":true},"markup":{"title":"Markup","alias":["html","xml","svg","mathml","ssml","atom","rss"],"aliasTitles":{"html":"HTML","xml":"XML","svg":"SVG","mathml":"MathML","ssml":"SSML","atom":"Atom","rss":"RSS"},"option":"default"},"css":{"title":"CSS","option":"default","modify":"markup"},"clike":{"title":"C-like","option":"default"},"javascript":{"title":"JavaScript","require":"clike","modify":"markup","optional":"regex","alias":"js","option":"default"},"abap":{"title":"ABAP","owner":"dellagustin"},"abnf":{"title":"ABNF","owner":"RunDevelopment"},"actionscript":{"title":"ActionScript","require":"javascript","modify":"markup","owner":"Golmote"},"ada":{"title":"Ada","owner":"Lucretia"},"agda":{"title":"Agda","owner":"xy-ren"},"al":{"title":"AL","owner":"RunDevelopment"},"antlr4":{"title":"ANTLR4","alias":"g4","owner":"RunDevelopment"},"apacheconf":{"title":"Apache Configuration","owner":"GuiTeK"},"apex":{"title":"Apex","require":["clike","sql"],"owner":"RunDevelopment"},"apl":{"title":"APL","owner":"ngn"},"applescript":{"title":"AppleScript","owner":"Golmote"},"aql":{"title":"AQL","owner":"RunDevelopment"},"arduino":{"title":"Arduino","require":"cpp","alias":"ino","owner":"dkern"},"arff":{"title":"ARFF","owner":"Golmote"},"armasm":{"title":"ARM Assembly","alias":"arm-asm","owner":"RunDevelopment"},"arturo":{"title":"Arturo","alias":"art","optional":["bash","css","javascript","markup","markdown","sql"],"owner":"drkameleon"},"asciidoc":{"alias":"adoc","title":"AsciiDoc","owner":"Golmote"},"aspnet":{"title":"ASP.NET (C#)","require":["markup","csharp"],"owner":"nauzilus"},"asm6502":{"title":"6502 Assembly","owner":"kzurawel"},"asmatmel":{"title":"Atmel AVR Assembly","owner":"cerkit"},"autohotkey":{"title":"AutoHotkey","owner":"aviaryan"},"autoit":{"title":"AutoIt","owner":"Golmote"},"avisynth":{"title":"AviSynth","alias":"avs","owner":"Zinfidel"},"avro-idl":{"title":"Avro IDL","alias":"avdl","owner":"RunDevelopment"},"awk":{"title":"AWK","alias":"gawk","aliasTitles":{"gawk":"GAWK"},"owner":"RunDevelopment"},"bash":{"title":"Bash","alias":["sh","shell"],"aliasTitles":{"sh":"Shell","shell":"Shell"},"owner":"zeitgeist87"},"basic":{"title":"BASIC","owner":"Golmote"},"batch":{"title":"Batch","owner":"Golmote"},"bbcode":{"title":"BBcode","alias":"shortcode","aliasTitles":{"shortcode":"Shortcode"},"owner":"RunDevelopment"},"bbj":{"title":"BBj","owner":"hyyan"},"bicep":{"title":"Bicep","owner":"johnnyreilly"},"birb":{"title":"Birb","require":"clike","owner":"Calamity210"},"bison":{"title":"Bison","require":"c","owner":"Golmote"},"bnf":{"title":"BNF","alias":"rbnf","aliasTitles":{"rbnf":"RBNF"},"owner":"RunDevelopment"},"bqn":{"title":"BQN","owner":"yewscion"},"brainfuck":{"title":"Brainfuck","owner":"Golmote"},"brightscript":{"title":"BrightScript","owner":"RunDevelopment"},"bro":{"title":"Bro","owner":"wayward710"},"bsl":{"title":"BSL (1C:Enterprise)","alias":"oscript","aliasTitles":{"oscript":"OneScript"},"owner":"Diversus23"},"c":{"title":"C","require":"clike","owner":"zeitgeist87"},"csharp":{"title":"C#","require":"clike","alias":["cs","dotnet"],"owner":"mvalipour"},"cpp":{"title":"C++","require":"c","owner":"zeitgeist87"},"cfscript":{"title":"CFScript","require":"clike","alias":"cfc","owner":"mjclemente"},"chaiscript":{"title":"ChaiScript","require":["clike","cpp"],"owner":"RunDevelopment"},"cil":{"title":"CIL","owner":"sbrl"},"cilkc":{"title":"Cilk/C","require":"c","alias":"cilk-c","owner":"OpenCilk"},"cilkcpp":{"title":"Cilk/C++","require":"cpp","alias":["cilk-cpp","cilk"],"owner":"OpenCilk"},"clojure":{"title":"Clojure","owner":"troglotit"},"cmake":{"title":"CMake","owner":"mjrogozinski"},"cobol":{"title":"COBOL","owner":"RunDevelopment"},"coffeescript":{"title":"CoffeeScript","require":"javascript","alias":"coffee","owner":"R-osey"},"concurnas":{"title":"Concurnas","alias":"conc","owner":"jasontatton"},"csp":{"title":"Content-Security-Policy","owner":"ScottHelme"},"cooklang":{"title":"Cooklang","owner":"ahue"},"coq":{"title":"Coq","owner":"RunDevelopment"},"crystal":{"title":"Crystal","require":"ruby","owner":"MakeNowJust"},"css-extras":{"title":"CSS Extras","require":"css","modify":"css","owner":"milesj"},"csv":{"title":"CSV","owner":"RunDevelopment"},"cue":{"title":"CUE","owner":"RunDevelopment"},"cypher":{"title":"Cypher","owner":"RunDevelopment"},"d":{"title":"D","require":"clike","owner":"Golmote"},"dart":{"title":"Dart","require":"clike","owner":"Golmote"},"dataweave":{"title":"DataWeave","owner":"machaval"},"dax":{"title":"DAX","owner":"peterbud"},"dhall":{"title":"Dhall","owner":"RunDevelopment"},"diff":{"title":"Diff","owner":"uranusjr"},"django":{"title":"Django/Jinja2","require":"markup-templating","alias":"jinja2","owner":"romanvm"},"dns-zone-file":{"title":"DNS zone file","owner":"RunDevelopment","alias":"dns-zone"},"docker":{"title":"Docker","alias":"dockerfile","owner":"JustinBeckwith"},"dot":{"title":"DOT (Graphviz)","alias":"gv","optional":"markup","owner":"RunDevelopment"},"ebnf":{"title":"EBNF","owner":"RunDevelopment"},"editorconfig":{"title":"EditorConfig","owner":"osipxd"},"eiffel":{"title":"Eiffel","owner":"Conaclos"},"ejs":{"title":"EJS","require":["javascript","markup-templating"],"owner":"RunDevelopment","alias":"eta","aliasTitles":{"eta":"Eta"}},"elixir":{"title":"Elixir","owner":"Golmote"},"elm":{"title":"Elm","owner":"zwilias"},"etlua":{"title":"Embedded Lua templating","require":["lua","markup-templating"],"owner":"RunDevelopment"},"erb":{"title":"ERB","require":["ruby","markup-templating"],"owner":"Golmote"},"erlang":{"title":"Erlang","owner":"Golmote"},"excel-formula":{"title":"Excel Formula","alias":["xlsx","xls"],"owner":"RunDevelopment"},"fsharp":{"title":"F#","require":"clike","owner":"simonreynolds7"},"factor":{"title":"Factor","owner":"catb0t"},"false":{"title":"False","owner":"edukisto"},"firestore-security-rules":{"title":"Firestore security rules","require":"clike","owner":"RunDevelopment"},"flow":{"title":"Flow","require":"javascript","owner":"Golmote"},"fortran":{"title":"Fortran","owner":"Golmote"},"ftl":{"title":"FreeMarker Template Language","require":"markup-templating","owner":"RunDevelopment"},"gml":{"title":"GameMaker Language","alias":"gamemakerlanguage","require":"clike","owner":"LiarOnce"},"gap":{"title":"GAP (CAS)","owner":"RunDevelopment"},"gcode":{"title":"G-code","owner":"RunDevelopment"},"gdscript":{"title":"GDScript","owner":"RunDevelopment"},"gedcom":{"title":"GEDCOM","owner":"Golmote"},"gettext":{"title":"gettext","alias":"po","owner":"RunDevelopment"},"gherkin":{"title":"Gherkin","owner":"hason"},"git":{"title":"Git","owner":"lgiraudel"},"glsl":{"title":"GLSL","require":"c","owner":"Golmote"},"gn":{"title":"GN","alias":"gni","owner":"RunDevelopment"},"linker-script":{"title":"GNU Linker Script","alias":"ld","owner":"RunDevelopment"},"go":{"title":"Go","require":"clike","owner":"arnehormann"},"go-module":{"title":"Go module","alias":"go-mod","owner":"RunDevelopment"},"gradle":{"title":"Gradle","require":"clike","owner":"zeabdelkhalek-badido18"},"graphql":{"title":"GraphQL","optional":"markdown","owner":"Golmote"},"groovy":{"title":"Groovy","require":"clike","owner":"robfletcher"},"haml":{"title":"Haml","require":"ruby","optional":["css","css-extras","coffeescript","erb","javascript","less","markdown","scss","textile"],"owner":"Golmote"},"handlebars":{"title":"Handlebars","require":"markup-templating","alias":["hbs","mustache"],"aliasTitles":{"mustache":"Mustache"},"owner":"Golmote"},"haskell":{"title":"Haskell","alias":"hs","owner":"bholst"},"haxe":{"title":"Haxe","require":"clike","optional":"regex","owner":"Golmote"},"hcl":{"title":"HCL","owner":"outsideris"},"hlsl":{"title":"HLSL","require":"c","owner":"RunDevelopment"},"hoon":{"title":"Hoon","owner":"matildepark"},"http":{"title":"HTTP","optional":["csp","css","hpkp","hsts","javascript","json","markup","uri"],"owner":"danielgtaylor"},"hpkp":{"title":"HTTP Public-Key-Pins","owner":"ScottHelme"},"hsts":{"title":"HTTP Strict-Transport-Security","owner":"ScottHelme"},"ichigojam":{"title":"IchigoJam","owner":"BlueCocoa"},"icon":{"title":"Icon","owner":"Golmote"},"icu-message-format":{"title":"ICU Message Format","owner":"RunDevelopment"},"idris":{"title":"Idris","alias":"idr","owner":"KeenS","require":"haskell"},"ignore":{"title":".ignore","owner":"osipxd","alias":["gitignore","hgignore","npmignore"],"aliasTitles":{"gitignore":".gitignore","hgignore":".hgignore","npmignore":".npmignore"}},"inform7":{"title":"Inform 7","owner":"Golmote"},"ini":{"title":"Ini","owner":"aviaryan"},"io":{"title":"Io","owner":"AlesTsurko"},"j":{"title":"J","owner":"Golmote"},"java":{"title":"Java","require":"clike","owner":"sherblot"},"javadoc":{"title":"JavaDoc","require":["markup","java","javadoclike"],"modify":"java","optional":"scala","owner":"RunDevelopment"},"javadoclike":{"title":"JavaDoc-like","modify":["java","javascript","php"],"owner":"RunDevelopment"},"javastacktrace":{"title":"Java stack trace","owner":"RunDevelopment"},"jexl":{"title":"Jexl","owner":"czosel"},"jolie":{"title":"Jolie","require":"clike","owner":"thesave"},"jq":{"title":"JQ","owner":"RunDevelopment"},"jsdoc":{"title":"JSDoc","require":["javascript","javadoclike","typescript"],"modify":"javascript","optional":["actionscript","coffeescript"],"owner":"RunDevelopment"},"js-extras":{"title":"JS Extras","require":"javascript","modify":"javascript","optional":["actionscript","coffeescript","flow","n4js","typescript"],"owner":"RunDevelopment"},"json":{"title":"JSON","alias":"webmanifest","aliasTitles":{"webmanifest":"Web App Manifest"},"owner":"CupOfTea696"},"json5":{"title":"JSON5","require":"json","owner":"RunDevelopment"},"jsonp":{"title":"JSONP","require":"json","owner":"RunDevelopment"},"jsstacktrace":{"title":"JS stack trace","owner":"sbrl"},"js-templates":{"title":"JS Templates","require":"javascript","modify":"javascript","optional":["css","css-extras","graphql","markdown","markup","sql"],"owner":"RunDevelopment"},"julia":{"title":"Julia","owner":"cdagnino"},"keepalived":{"title":"Keepalived Configure","owner":"dev-itsheng"},"keyman":{"title":"Keyman","owner":"mcdurdin"},"kotlin":{"title":"Kotlin","alias":["kt","kts"],"aliasTitles":{"kts":"Kotlin Script"},"require":"clike","owner":"Golmote"},"kumir":{"title":"KuMir (КуМир)","alias":"kum","owner":"edukisto"},"kusto":{"title":"Kusto","owner":"RunDevelopment"},"latex":{"title":"LaTeX","alias":["tex","context"],"aliasTitles":{"tex":"TeX","context":"ConTeXt"},"owner":"japborst"},"latte":{"title":"Latte","require":["clike","markup-templating","php"],"owner":"nette"},"less":{"title":"Less","require":"css","optional":"css-extras","owner":"Golmote"},"lilypond":{"title":"LilyPond","require":"scheme","alias":"ly","owner":"RunDevelopment"},"liquid":{"title":"Liquid","require":"markup-templating","owner":"cinhtau"},"lisp":{"title":"Lisp","alias":["emacs","elisp","emacs-lisp"],"owner":"JuanCaicedo"},"livescript":{"title":"LiveScript","owner":"Golmote"},"llvm":{"title":"LLVM IR","owner":"porglezomp"},"log":{"title":"Log file","optional":"javastacktrace","owner":"RunDevelopment"},"lolcode":{"title":"LOLCODE","owner":"Golmote"},"lua":{"title":"Lua","owner":"Golmote"},"magma":{"title":"Magma (CAS)","owner":"RunDevelopment"},"makefile":{"title":"Makefile","owner":"Golmote"},"markdown":{"title":"Markdown","require":"markup","optional":"yaml","alias":"md","owner":"Golmote"},"markup-templating":{"title":"Markup templating","require":"markup","owner":"Golmote"},"mata":{"title":"Mata","owner":"RunDevelopment"},"matlab":{"title":"MATLAB","owner":"Golmote"},"maxscript":{"title":"MAXScript","owner":"RunDevelopment"},"mel":{"title":"MEL","owner":"Golmote"},"mermaid":{"title":"Mermaid","owner":"RunDevelopment"},"metafont":{"title":"METAFONT","owner":"LaeriExNihilo"},"mizar":{"title":"Mizar","owner":"Golmote"},"mongodb":{"title":"MongoDB","owner":"airs0urce","require":"javascript"},"monkey":{"title":"Monkey","owner":"Golmote"},"moonscript":{"title":"MoonScript","alias":"moon","owner":"RunDevelopment"},"n1ql":{"title":"N1QL","owner":"TMWilds"},"n4js":{"title":"N4JS","require":"javascript","optional":"jsdoc","alias":"n4jsd","owner":"bsmith-n4"},"nand2tetris-hdl":{"title":"Nand To Tetris HDL","owner":"stephanmax"},"naniscript":{"title":"Naninovel Script","owner":"Elringus","alias":"nani"},"nasm":{"title":"NASM","owner":"rbmj"},"neon":{"title":"NEON","owner":"nette"},"nevod":{"title":"Nevod","owner":"nezaboodka"},"nginx":{"title":"nginx","owner":"volado"},"nim":{"title":"Nim","owner":"Golmote"},"nix":{"title":"Nix","owner":"Golmote"},"nsis":{"title":"NSIS","owner":"idleberg"},"objectivec":{"title":"Objective-C","require":"c","alias":"objc","owner":"uranusjr"},"ocaml":{"title":"OCaml","owner":"Golmote"},"odin":{"title":"Odin","owner":"edukisto"},"opencl":{"title":"OpenCL","require":"c","modify":["c","cpp"],"owner":"Milania1"},"openqasm":{"title":"OpenQasm","alias":"qasm","owner":"RunDevelopment"},"oz":{"title":"Oz","owner":"Golmote"},"parigp":{"title":"PARI/GP","owner":"Golmote"},"parser":{"title":"Parser","require":"markup","owner":"Golmote"},"pascal":{"title":"Pascal","alias":"objectpascal","aliasTitles":{"objectpascal":"Object Pascal"},"owner":"Golmote"},"pascaligo":{"title":"Pascaligo","owner":"DefinitelyNotAGoat"},"psl":{"title":"PATROL Scripting Language","owner":"bertysentry"},"pcaxis":{"title":"PC-Axis","alias":"px","owner":"RunDevelopment"},"peoplecode":{"title":"PeopleCode","alias":"pcode","owner":"RunDevelopment"},"perl":{"title":"Perl","owner":"Golmote"},"php":{"title":"PHP","require":"markup-templating","owner":"milesj"},"phpdoc":{"title":"PHPDoc","require":["php","javadoclike"],"modify":"php","owner":"RunDevelopment"},"php-extras":{"title":"PHP Extras","require":"php","modify":"php","owner":"milesj"},"plant-uml":{"title":"PlantUML","alias":"plantuml","owner":"RunDevelopment"},"plsql":{"title":"PL/SQL","require":"sql","owner":"Golmote"},"powerquery":{"title":"PowerQuery","alias":["pq","mscript"],"owner":"peterbud"},"powershell":{"title":"PowerShell","owner":"nauzilus"},"processing":{"title":"Processing","require":"clike","owner":"Golmote"},"prolog":{"title":"Prolog","owner":"Golmote"},"promql":{"title":"PromQL","owner":"arendjr"},"properties":{"title":".properties","owner":"Golmote"},"protobuf":{"title":"Protocol Buffers","require":"clike","owner":"just-boris"},"pug":{"title":"Pug","require":["markup","javascript"],"optional":["coffeescript","ejs","handlebars","less","livescript","markdown","scss","stylus","twig"],"owner":"Golmote"},"puppet":{"title":"Puppet","owner":"Golmote"},"pure":{"title":"Pure","optional":["c","cpp","fortran"],"owner":"Golmote"},"purebasic":{"title":"PureBasic","require":"clike","alias":"pbfasm","owner":"HeX0R101"},"purescript":{"title":"PureScript","require":"haskell","alias":"purs","owner":"sriharshachilakapati"},"python":{"title":"Python","alias":"py","owner":"multipetros"},"qsharp":{"title":"Q#","require":"clike","alias":"qs","owner":"fedonman"},"q":{"title":"Q (kdb+ database)","owner":"Golmote"},"qml":{"title":"QML","require":"javascript","owner":"RunDevelopment"},"qore":{"title":"Qore","require":"clike","owner":"temnroegg"},"r":{"title":"R","owner":"Golmote"},"racket":{"title":"Racket","require":"scheme","alias":"rkt","owner":"RunDevelopment"},"cshtml":{"title":"Razor C#","alias":"razor","require":["markup","csharp"],"optional":["css","css-extras","javascript","js-extras"],"owner":"RunDevelopment"},"jsx":{"title":"React JSX","require":["markup","javascript"],"optional":["jsdoc","js-extras","js-templates"],"owner":"vkbansal"},"tsx":{"title":"React TSX","require":["jsx","typescript"]},"reason":{"title":"Reason","require":"clike","owner":"Golmote"},"regex":{"title":"Regex","owner":"RunDevelopment"},"rego":{"title":"Rego","owner":"JordanSh"},"renpy":{"title":"Ren'py","alias":"rpy","owner":"HyuchiaDiego"},"rescript":{"title":"ReScript","alias":"res","owner":"vmarcosp"},"rest":{"title":"reST (reStructuredText)","owner":"Golmote"},"rip":{"title":"Rip","owner":"ravinggenius"},"roboconf":{"title":"Roboconf","owner":"Golmote"},"robotframework":{"title":"Robot Framework","alias":"robot","owner":"RunDevelopment"},"ruby":{"title":"Ruby","require":"clike","alias":"rb","owner":"samflores"},"rust":{"title":"Rust","owner":"Golmote"},"sas":{"title":"SAS","optional":["groovy","lua","sql"],"owner":"Golmote"},"sass":{"title":"Sass (Sass)","require":"css","optional":"css-extras","owner":"Golmote"},"scss":{"title":"Sass (SCSS)","require":"css","optional":"css-extras","owner":"MoOx"},"scala":{"title":"Scala","require":"java","owner":"jozic"},"scheme":{"title":"Scheme","owner":"bacchus123"},"shell-session":{"title":"Shell session","require":"bash","alias":["sh-session","shellsession"],"owner":"RunDevelopment"},"smali":{"title":"Smali","owner":"RunDevelopment"},"smalltalk":{"title":"Smalltalk","owner":"Golmote"},"smarty":{"title":"Smarty","require":"markup-templating","optional":"php","owner":"Golmote"},"sml":{"title":"SML","alias":"smlnj","aliasTitles":{"smlnj":"SML/NJ"},"owner":"RunDevelopment"},"solidity":{"title":"Solidity (Ethereum)","alias":"sol","require":"clike","owner":"glachaud"},"solution-file":{"title":"Solution file","alias":"sln","owner":"RunDevelopment"},"soy":{"title":"Soy (Closure Template)","require":"markup-templating","owner":"Golmote"},"sparql":{"title":"SPARQL","require":"turtle","owner":"Triply-Dev","alias":"rq"},"splunk-spl":{"title":"Splunk SPL","owner":"RunDevelopment"},"sqf":{"title":"SQF: Status Quo Function (Arma 3)","require":"clike","owner":"RunDevelopment"},"sql":{"title":"SQL","owner":"multipetros"},"squirrel":{"title":"Squirrel","require":"clike","owner":"RunDevelopment"},"stan":{"title":"Stan","owner":"RunDevelopment"},"stata":{"title":"Stata Ado","require":["mata","java","python"],"owner":"RunDevelopment"},"iecst":{"title":"Structured Text (IEC 61131-3)","owner":"serhioromano"},"stylus":{"title":"Stylus","owner":"vkbansal"},"supercollider":{"title":"SuperCollider","alias":"sclang","owner":"RunDevelopment"},"swift":{"title":"Swift","owner":"chrischares"},"systemd":{"title":"Systemd configuration file","owner":"RunDevelopment"},"t4-templating":{"title":"T4 templating","owner":"RunDevelopment"},"t4-cs":{"title":"T4 Text Templates (C#)","require":["t4-templating","csharp"],"alias":"t4","owner":"RunDevelopment"},"t4-vb":{"title":"T4 Text Templates (VB)","require":["t4-templating","vbnet"],"owner":"RunDevelopment"},"tap":{"title":"TAP","owner":"isaacs","require":"yaml"},"tcl":{"title":"Tcl","owner":"PeterChaplin"},"tt2":{"title":"Template Toolkit 2","require":["clike","markup-templating"],"owner":"gflohr"},"textile":{"title":"Textile","require":"markup","optional":"css","owner":"Golmote"},"toml":{"title":"TOML","owner":"RunDevelopment"},"tremor":{"title":"Tremor","alias":["trickle","troy"],"owner":"darach","aliasTitles":{"trickle":"trickle","troy":"troy"}},"turtle":{"title":"Turtle","alias":"trig","aliasTitles":{"trig":"TriG"},"owner":"jakubklimek"},"twig":{"title":"Twig","require":"markup-templating","owner":"brandonkelly"},"typescript":{"title":"TypeScript","require":"javascript","optional":"js-templates","alias":"ts","owner":"vkbansal"},"typoscript":{"title":"TypoScript","alias":"tsconfig","aliasTitles":{"tsconfig":"TSConfig"},"owner":"dkern"},"unrealscript":{"title":"UnrealScript","alias":["uscript","uc"],"owner":"RunDevelopment"},"uorazor":{"title":"UO Razor Script","owner":"jaseowns"},"uri":{"title":"URI","alias":"url","aliasTitles":{"url":"URL"},"owner":"RunDevelopment"},"v":{"title":"V","require":"clike","owner":"taggon"},"vala":{"title":"Vala","require":"clike","optional":"regex","owner":"TemplarVolk"},"vbnet":{"title":"VB.Net","require":"basic","owner":"Bigsby"},"velocity":{"title":"Velocity","require":"markup","owner":"Golmote"},"verilog":{"title":"Verilog","owner":"a-rey"},"vhdl":{"title":"VHDL","owner":"a-rey"},"vim":{"title":"vim","owner":"westonganger"},"visual-basic":{"title":"Visual Basic","alias":["vb","vba"],"aliasTitles":{"vba":"VBA"},"owner":"Golmote"},"warpscript":{"title":"WarpScript","owner":"RunDevelopment"},"wasm":{"title":"WebAssembly","owner":"Golmote"},"web-idl":{"title":"Web IDL","alias":"webidl","owner":"RunDevelopment"},"wgsl":{"title":"WGSL","owner":"Dr4gonthree"},"wiki":{"title":"Wiki markup","require":"markup","owner":"Golmote"},"wolfram":{"title":"Wolfram language","alias":["mathematica","nb","wl"],"aliasTitles":{"mathematica":"Mathematica","nb":"Mathematica Notebook"},"owner":"msollami"},"wren":{"title":"Wren","owner":"clsource"},"xeora":{"title":"Xeora","require":"markup","alias":"xeoracube","aliasTitles":{"xeoracube":"XeoraCube"},"owner":"freakmaxi"},"xml-doc":{"title":"XML doc (.net)","require":"markup","modify":["csharp","fsharp","vbnet"],"owner":"RunDevelopment"},"xojo":{"title":"Xojo (REALbasic)","owner":"Golmote"},"xquery":{"title":"XQuery","require":"markup","owner":"Golmote"},"yaml":{"title":"YAML","alias":"yml","owner":"hason"},"yang":{"title":"YANG","owner":"RunDevelopment"},"zig":{"title":"Zig","owner":"RunDevelopment"}},"plugins":{"meta":{"path":"plugins/{id}/prism-{id}","link":"plugins/{id}/"},"line-highlight":{"title":"Line Highlight","description":"Highlights specific lines and/or line ranges."},"line-numbers":{"title":"Line Numbers","description":"Line number at the beginning of code lines.","owner":"kuba-kubula"},"show-invisibles":{"title":"Show Invisibles","description":"Show hidden characters such as tabs and line breaks.","optional":["autolinker","data-uri-highlight"]},"autolinker":{"title":"Autolinker","description":"Converts URLs and emails in code to clickable links. Parses Markdown links in comments."},"wpd":{"title":"WebPlatform Docs","description":"Makes tokens link to <a href=\"https://webplatform.github.io/docs/\">WebPlatform.org documentation</a>. The links open in a new tab."},"custom-class":{"title":"Custom Class","description":"This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.","owner":"dvkndn","noCSS":true},"file-highlight":{"title":"File Highlight","description":"Fetch external files and highlight them with Prism. Used on the Prism website itself.","noCSS":true},"show-language":{"title":"Show Language","description":"Display the highlighted language in code blocks (inline code does not show the label).","owner":"nauzilus","noCSS":true,"require":"toolbar"},"jsonp-highlight":{"title":"JSONP Highlight","description":"Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).","noCSS":true,"owner":"nauzilus"},"highlight-keywords":{"title":"Highlight Keywords","description":"Adds special CSS classes for each keyword for fine-grained highlighting.","owner":"vkbansal","noCSS":true},"remove-initial-line-feed":{"title":"Remove initial line feed","description":"Removes the initial line feed in code blocks.","owner":"Golmote","noCSS":true},"inline-color":{"title":"Inline color","description":"Adds a small inline preview for colors in style sheets.","require":"css-extras","owner":"RunDevelopment"},"previewers":{"title":"Previewers","description":"Previewers for angles, colors, gradients, easing and time.","require":"css-extras","owner":"Golmote"},"autoloader":{"title":"Autoloader","description":"Automatically loads the needed languages to highlight the code blocks.","owner":"Golmote","noCSS":true},"keep-markup":{"title":"Keep Markup","description":"Prevents custom markup from being dropped out during highlighting.","owner":"Golmote","optional":"normalize-whitespace","noCSS":true},"command-line":{"title":"Command Line","description":"Display a command line with a prompt and, optionally, the output/response from the commands.","owner":"chriswells0"},"unescaped-markup":{"title":"Unescaped Markup","description":"Write markup without having to escape anything."},"normalize-whitespace":{"title":"Normalize Whitespace","description":"Supports multiple operations to normalize whitespace in code blocks.","owner":"zeitgeist87","optional":"unescaped-markup","noCSS":true},"data-uri-highlight":{"title":"Data-URI Highlight","description":"Highlights data-URI contents.","owner":"Golmote","noCSS":true},"toolbar":{"title":"Toolbar","description":"Attach a toolbar for plugins to easily register buttons on the top of a code block.","owner":"mAAdhaTTah"},"copy-to-clipboard":{"title":"Copy to Clipboard Button","description":"Add a button that copies the code block to the clipboard when clicked.","owner":"mAAdhaTTah","require":"toolbar","noCSS":true},"download-button":{"title":"Download Button","description":"A button in the toolbar of a code block adding a convenient way to download a code file.","owner":"Golmote","require":"toolbar","noCSS":true},"match-braces":{"title":"Match braces","description":"Highlights matching braces.","owner":"RunDevelopment"},"diff-highlight":{"title":"Diff Highlight","description":"Highlights the code inside diff blocks.","owner":"RunDevelopment","require":"diff"},"filter-highlight-all":{"title":"Filter highlightAll","description":"Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.","owner":"RunDevelopment","noCSS":true},"treeview":{"title":"Treeview","description":"A language with special styles to highlight file system tree structures.","owner":"Golmote"}}};
if ( true && module.exports) { module.exports = components; }

/***/ }),

/***/ 8722:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const components = __webpack_require__(6969);
const getLoader = __webpack_require__(98380);


/**
 * The set of all languages which have been loaded using the below function.
 *
 * @type {Set<string>}
 */
const loadedLanguages = new Set();

/**
 * Loads the given languages and adds them to the current Prism instance.
 *
 * If no languages are provided, __all__ Prism languages will be loaded.
 *
 * @param {string|string[]} [languages]
 * @returns {void}
 */
function loadLanguages(languages) {
	if (languages === undefined) {
		languages = Object.keys(components.languages).filter(l => l != 'meta');
	} else if (!Array.isArray(languages)) {
		languages = [languages];
	}

	// the user might have loaded languages via some other way or used `prism.js` which already includes some
	// we don't need to validate the ids because `getLoader` will ignore invalid ones
	const loaded = [...loadedLanguages, ...Object.keys(Prism.languages)];

	getLoader(components, languages, loaded).load(lang => {
		if (!(lang in components.languages)) {
			if (!loadLanguages.silent) {
				console.warn('Language does not exist: ' + lang);
			}
			return;
		}

		const pathToLanguage = './prism-' + lang;

		// remove from require cache and from Prism
		delete __webpack_require__.c[/*require.resolve*/(__webpack_require__(63157).resolve(pathToLanguage))];
		delete Prism.languages[lang];

		__webpack_require__(63157)(pathToLanguage);

		loadedLanguages.add(lang);
	});
}

/**
 * Set this to `true` to prevent all warning messages `loadLanguages` logs.
 */
loadLanguages.silent = false;

module.exports = loadLanguages;


/***/ }),

/***/ 19700:
/***/ (() => {

(function (Prism) {

	/**
	 * Returns the placeholder for the given language id and index.
	 *
	 * @param {string} language
	 * @param {string|number} index
	 * @returns {string}
	 */
	function getPlaceholder(language, index) {
		return '___' + language.toUpperCase() + index + '___';
	}

	Object.defineProperties(Prism.languages['markup-templating'] = {}, {
		buildPlaceholders: {
			/**
			 * Tokenize all inline templating expressions matching `placeholderPattern`.
			 *
			 * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
			 * `true` will be replaced.
			 *
			 * @param {object} env The environment of the `before-tokenize` hook.
			 * @param {string} language The language id.
			 * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
			 * @param {(match: string) => boolean} [replaceFilter]
			 */
			value: function (env, language, placeholderPattern, replaceFilter) {
				if (env.language !== language) {
					return;
				}

				var tokenStack = env.tokenStack = [];

				env.code = env.code.replace(placeholderPattern, function (match) {
					if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
						return match;
					}
					var i = tokenStack.length;
					var placeholder;

					// Check for existing strings
					while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
						++i;
					}

					// Create a sparse array
					tokenStack[i] = match;

					return placeholder;
				});

				// Switch the grammar to markup
				env.grammar = Prism.languages.markup;
			}
		},
		tokenizePlaceholders: {
			/**
			 * Replace placeholders with proper tokens after tokenizing.
			 *
			 * @param {object} env The environment of the `after-tokenize` hook.
			 * @param {string} language The language id.
			 */
			value: function (env, language) {
				if (env.language !== language || !env.tokenStack) {
					return;
				}

				// Switch the grammar back
				env.grammar = Prism.languages[language];

				var j = 0;
				var keys = Object.keys(env.tokenStack);

				function walkTokens(tokens) {
					for (var i = 0; i < tokens.length; i++) {
						// all placeholders are replaced already
						if (j >= keys.length) {
							break;
						}

						var token = tokens[i];
						if (typeof token === 'string' || (token.content && typeof token.content === 'string')) {
							var k = keys[j];
							var t = env.tokenStack[k];
							var s = typeof token === 'string' ? token : token.content;
							var placeholder = getPlaceholder(language, k);

							var index = s.indexOf(placeholder);
							if (index > -1) {
								++j;

								var before = s.substring(0, index);
								var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
								var after = s.substring(index + placeholder.length);

								var replacement = [];
								if (before) {
									replacement.push.apply(replacement, walkTokens([before]));
								}
								replacement.push(middle);
								if (after) {
									replacement.push.apply(replacement, walkTokens([after]));
								}

								if (typeof token === 'string') {
									tokens.splice.apply(tokens, [i, 1].concat(replacement));
								} else {
									token.content = replacement;
								}
							}
						} else if (token.content /* && typeof token.content !== 'string' */) {
							walkTokens(token.content);
						}
					}

					return tokens;
				}

				walkTokens(env.tokens);
			}
		}
	});

}(Prism));


/***/ }),

/***/ 18692:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./": 8722
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 18692;

/***/ }),

/***/ 63157:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./": 8722
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 63157;

/***/ }),

/***/ 98380:
/***/ ((module) => {

"use strict";


/**
 * @typedef {Object<string, ComponentCategory>} Components
 * @typedef {Object<string, ComponentEntry | string>} ComponentCategory
 *
 * @typedef ComponentEntry
 * @property {string} [title] The title of the component.
 * @property {string} [owner] The GitHub user name of the owner.
 * @property {boolean} [noCSS=false] Whether the component doesn't have style sheets which should also be loaded.
 * @property {string | string[]} [alias] An optional list of aliases for the id of the component.
 * @property {Object<string, string>} [aliasTitles] An optional map from an alias to its title.
 *
 * Aliases which are not in this map will the get title of the component.
 * @property {string | string[]} [optional]
 * @property {string | string[]} [require]
 * @property {string | string[]} [modify]
 */

var getLoader = (function () {

	/**
	 * A function which does absolutely nothing.
	 *
	 * @type {any}
	 */
	var noop = function () { };

	/**
	 * Invokes the given callback for all elements of the given value.
	 *
	 * If the given value is an array, the callback will be invokes for all elements. If the given value is `null` or
	 * `undefined`, the callback will not be invoked. In all other cases, the callback will be invoked with the given
	 * value as parameter.
	 *
	 * @param {null | undefined | T | T[]} value
	 * @param {(value: T, index: number) => void} callbackFn
	 * @returns {void}
	 * @template T
	 */
	function forEach(value, callbackFn) {
		if (Array.isArray(value)) {
			value.forEach(callbackFn);
		} else if (value != null) {
			callbackFn(value, 0);
		}
	}

	/**
	 * Returns a new set for the given string array.
	 *
	 * @param {string[]} array
	 * @returns {StringSet}
	 *
	 * @typedef {Object<string, true>} StringSet
	 */
	function toSet(array) {
		/** @type {StringSet} */
		var set = {};
		for (var i = 0, l = array.length; i < l; i++) {
			set[array[i]] = true;
		}
		return set;
	}

	/**
	 * Creates a map of every components id to its entry.
	 *
	 * @param {Components} components
	 * @returns {EntryMap}
	 *
	 * @typedef {{ readonly [id: string]: Readonly<ComponentEntry> | undefined }} EntryMap
	 */
	function createEntryMap(components) {
		/** @type {Object<string, Readonly<ComponentEntry>>} */
		var map = {};

		for (var categoryName in components) {
			var category = components[categoryName];
			for (var id in category) {
				if (id != 'meta') {
					/** @type {ComponentEntry | string} */
					var entry = category[id];
					map[id] = typeof entry == 'string' ? { title: entry } : entry;
				}
			}
		}

		return map;
	}

	/**
	 * Creates a full dependencies map which includes all types of dependencies and their transitive dependencies.
	 *
	 * @param {EntryMap} entryMap
	 * @returns {DependencyResolver}
	 *
	 * @typedef {(id: string) => StringSet} DependencyResolver
	 */
	function createDependencyResolver(entryMap) {
		/** @type {Object<string, StringSet>} */
		var map = {};
		var _stackArray = [];

		/**
		 * Adds the dependencies of the given component to the dependency map.
		 *
		 * @param {string} id
		 * @param {string[]} stack
		 */
		function addToMap(id, stack) {
			if (id in map) {
				return;
			}

			stack.push(id);

			// check for circular dependencies
			var firstIndex = stack.indexOf(id);
			if (firstIndex < stack.length - 1) {
				throw new Error('Circular dependency: ' + stack.slice(firstIndex).join(' -> '));
			}

			/** @type {StringSet} */
			var dependencies = {};

			var entry = entryMap[id];
			if (entry) {
				/**
				 * This will add the direct dependency and all of its transitive dependencies to the set of
				 * dependencies of `entry`.
				 *
				 * @param {string} depId
				 * @returns {void}
				 */
				function handleDirectDependency(depId) {
					if (!(depId in entryMap)) {
						throw new Error(id + ' depends on an unknown component ' + depId);
					}
					if (depId in dependencies) {
						// if the given dependency is already in the set of deps, then so are its transitive deps
						return;
					}

					addToMap(depId, stack);
					dependencies[depId] = true;
					for (var transitiveDepId in map[depId]) {
						dependencies[transitiveDepId] = true;
					}
				}

				forEach(entry.require, handleDirectDependency);
				forEach(entry.optional, handleDirectDependency);
				forEach(entry.modify, handleDirectDependency);
			}

			map[id] = dependencies;

			stack.pop();
		}

		return function (id) {
			var deps = map[id];
			if (!deps) {
				addToMap(id, _stackArray);
				deps = map[id];
			}
			return deps;
		};
	}

	/**
	 * Returns a function which resolves the aliases of its given id of alias.
	 *
	 * @param {EntryMap} entryMap
	 * @returns {(idOrAlias: string) => string}
	 */
	function createAliasResolver(entryMap) {
		/** @type {Object<string, string> | undefined} */
		var map;

		return function (idOrAlias) {
			if (idOrAlias in entryMap) {
				return idOrAlias;
			} else {
				// only create the alias map if necessary
				if (!map) {
					map = {};

					for (var id in entryMap) {
						var entry = entryMap[id];
						forEach(entry && entry.alias, function (alias) {
							if (alias in map) {
								throw new Error(alias + ' cannot be alias for both ' + id + ' and ' + map[alias]);
							}
							if (alias in entryMap) {
								throw new Error(alias + ' cannot be alias of ' + id + ' because it is a component.');
							}
							map[alias] = id;
						});
					}
				}
				return map[idOrAlias] || idOrAlias;
			}
		};
	}

	/**
	 * @typedef LoadChainer
	 * @property {(before: T, after: () => T) => T} series
	 * @property {(values: T[]) => T} parallel
	 * @template T
	 */

	/**
	 * Creates an implicit DAG from the given components and dependencies and call the given `loadComponent` for each
	 * component in topological order.
	 *
	 * @param {DependencyResolver} dependencyResolver
	 * @param {StringSet} ids
	 * @param {(id: string) => T} loadComponent
	 * @param {LoadChainer<T>} [chainer]
	 * @returns {T}
	 * @template T
	 */
	function loadComponentsInOrder(dependencyResolver, ids, loadComponent, chainer) {
		var series = chainer ? chainer.series : undefined;
		var parallel = chainer ? chainer.parallel : noop;

		/** @type {Object<string, T>} */
		var cache = {};

		/**
		 * A set of ids of nodes which are not depended upon by any other node in the graph.
		 *
		 * @type {StringSet}
		 */
		var ends = {};

		/**
		 * Loads the given component and its dependencies or returns the cached value.
		 *
		 * @param {string} id
		 * @returns {T}
		 */
		function handleId(id) {
			if (id in cache) {
				return cache[id];
			}

			// assume that it's an end
			// if it isn't, it will be removed later
			ends[id] = true;

			// all dependencies of the component in the given ids
			var dependsOn = [];
			for (var depId in dependencyResolver(id)) {
				if (depId in ids) {
					dependsOn.push(depId);
				}
			}

			/**
			 * The value to be returned.
			 *
			 * @type {T}
			 */
			var value;

			if (dependsOn.length === 0) {
				value = loadComponent(id);
			} else {
				var depsValue = parallel(dependsOn.map(function (depId) {
					var value = handleId(depId);
					// none of the dependencies can be ends
					delete ends[depId];
					return value;
				}));
				if (series) {
					// the chainer will be responsibly for calling the function calling loadComponent
					value = series(depsValue, function () { return loadComponent(id); });
				} else {
					// we don't have a chainer, so we call loadComponent ourselves
					loadComponent(id);
				}
			}

			// cache and return
			return cache[id] = value;
		}

		for (var id in ids) {
			handleId(id);
		}

		/** @type {T[]} */
		var endValues = [];
		for (var endId in ends) {
			endValues.push(cache[endId]);
		}
		return parallel(endValues);
	}

	/**
	 * Returns whether the given object has any keys.
	 *
	 * @param {object} obj
	 */
	function hasKeys(obj) {
		for (var key in obj) {
			return true;
		}
		return false;
	}

	/**
	 * Returns an object which provides methods to get the ids of the components which have to be loaded (`getIds`) and
	 * a way to efficiently load them in synchronously and asynchronous contexts (`load`).
	 *
	 * The set of ids to be loaded is a superset of `load`. If some of these ids are in `loaded`, the corresponding
	 * components will have to reloaded.
	 *
	 * The ids in `load` and `loaded` may be in any order and can contain duplicates.
	 *
	 * @param {Components} components
	 * @param {string[]} load
	 * @param {string[]} [loaded=[]] A list of already loaded components.
	 *
	 * If a component is in this list, then all of its requirements will also be assumed to be in the list.
	 * @returns {Loader}
	 *
	 * @typedef Loader
	 * @property {() => string[]} getIds A function to get all ids of the components to load.
	 *
	 * The returned ids will be duplicate-free, alias-free and in load order.
	 * @property {LoadFunction} load A functional interface to load components.
	 *
	 * @typedef {<T> (loadComponent: (id: string) => T, chainer?: LoadChainer<T>) => T} LoadFunction
	 * A functional interface to load components.
	 *
	 * The `loadComponent` function will be called for every component in the order in which they have to be loaded.
	 *
	 * The `chainer` is useful for asynchronous loading and its `series` and `parallel` functions can be thought of as
	 * `Promise#then` and `Promise.all`.
	 *
	 * @example
	 * load(id => { loadComponent(id); }); // returns undefined
	 *
	 * await load(
	 *     id => loadComponentAsync(id), // returns a Promise for each id
	 *     {
	 *         series: async (before, after) => {
	 *             await before;
	 *             await after();
	 *         },
	 *         parallel: async (values) => {
	 *             await Promise.all(values);
	 *         }
	 *     }
	 * );
	 */
	function getLoader(components, load, loaded) {
		var entryMap = createEntryMap(components);
		var resolveAlias = createAliasResolver(entryMap);

		load = load.map(resolveAlias);
		loaded = (loaded || []).map(resolveAlias);

		var loadSet = toSet(load);
		var loadedSet = toSet(loaded);

		// add requirements

		load.forEach(addRequirements);
		function addRequirements(id) {
			var entry = entryMap[id];
			forEach(entry && entry.require, function (reqId) {
				if (!(reqId in loadedSet)) {
					loadSet[reqId] = true;
					addRequirements(reqId);
				}
			});
		}

		// add components to reload

		// A component x in `loaded` has to be reloaded if
		//  1) a component in `load` modifies x.
		//  2) x depends on a component in `load`.
		// The above two condition have to be applied until nothing changes anymore.

		var dependencyResolver = createDependencyResolver(entryMap);

		/** @type {StringSet} */
		var loadAdditions = loadSet;
		/** @type {StringSet} */
		var newIds;
		while (hasKeys(loadAdditions)) {
			newIds = {};

			// condition 1)
			for (var loadId in loadAdditions) {
				var entry = entryMap[loadId];
				forEach(entry && entry.modify, function (modId) {
					if (modId in loadedSet) {
						newIds[modId] = true;
					}
				});
			}

			// condition 2)
			for (var loadedId in loadedSet) {
				if (!(loadedId in loadSet)) {
					for (var depId in dependencyResolver(loadedId)) {
						if (depId in loadSet) {
							newIds[loadedId] = true;
							break;
						}
					}
				}
			}

			loadAdditions = newIds;
			for (var newId in loadAdditions) {
				loadSet[newId] = true;
			}
		}

		/** @type {Loader} */
		var loader = {
			getIds: function () {
				var ids = [];
				loader.load(function (id) {
					ids.push(id);
				});
				return ids;
			},
			load: function (loadComponent, chainer) {
				return loadComponentsInOrder(dependencyResolver, loadSet, loadComponent, chainer);
			}
		};

		return loader;
	}

	return getLoader;

}());

if (true) {
	module.exports = getLoader;
}


/***/ }),

/***/ 2694:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6925);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 5556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(2694)();
}


/***/ }),

/***/ 6925:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 22551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(96540),ca=__webpack_require__(69982);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Sg(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null)}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a}}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a)}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function mh(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(uh);G(uh,b)}function zh(){E(uh);E(vh);E(wh)}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c))}function Bh(a){vh.current===a&&(E(uh),E(vh))}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e)}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else{if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a}return O}
function Vh(a,b){return"function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e)}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a)}function ai(a,b,c){return c(function(){ei(b)&&fi(a)})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1)}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return[b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d)}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d)}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b()}finally{C=c,Gh.transition=d}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d)}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d))}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return[d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Ei={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d))}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null)}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b)};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a))}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d)}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo)}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1))}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c)}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304)}else{if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Mj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Nj=!1;
function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Nj;Nj=!1;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f)}e=e.next}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c)}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a)}catch(t){W(a,a.return,t)}try{Pj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a)}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function hk(a,b,c){V=a;ik(a,b,c)}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f,b,c),f=f.sibling;V=e;Jj=h;U=l}kk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a,b,c)}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}sh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Rj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Rj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Rj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg())}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Fk(c,Gk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else{b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h)}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a)}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d))}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg())}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg()}}function Hj(){fj=ej.current;E(ej)}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj()}c=c.return}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}fh=null}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Ih=!1}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return}while(null!==f)}Sk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z)}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e)}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y)}function Lk(){for(;null!==Y&&!cc();)Uk(Y)}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else{c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d)}finally{ok.transition=e,C=d}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c,a,e);dc();K=h;C=g;ok.transition=f}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode,d);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else{a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,ok.transition=b}}return!1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b))}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b)}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c))}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c)}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c)}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c)}b=b.child}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Xi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b)}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a)};function ll(a){this._internalRoot=a}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null)});b[uf]=null}};function ml(a){this._internalRoot=a}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function nl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a)}}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a)}}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d)});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a)}}fl(b,g,a,e)}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c)}}),il(a,1)}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c)}il(a,134217728)}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d)}il(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};exports.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Rk(a)};exports.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};exports.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Qk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};exports.version="18.3.1-next-f1338f8080-20240426";


/***/ }),

/***/ 5338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var m = __webpack_require__(40961);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 40961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(22551);
} else {}


/***/ }),

/***/ 30115:
/***/ ((module) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.3
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    // START: Modifications:
    // Apply guards for `Object.create(null)` handling. See:
    // - https://github.com/FormidableLabs/react-fast-compare/issues/64
    // - https://github.com/epoberezkin/fast-deep-equal/issues/49
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
    // END: Modifications

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ 80545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mg: () => (/* binding */ W),
/* harmony export */   vd: () => (/* binding */ q)
/* harmony export */ });
/* unused harmony export HelmetData */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30115);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20311);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2833);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_3__);
function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,c(t,e)}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function u(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)e.indexOf(r=o[n])>=0||(i[r]=t[r]);return i}var l={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},p={rel:["amphtml","canonical","alternate"]},f={type:["application/ld+json"]},d={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},h=Object.keys(l).map(function(t){return l[t]}),m={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},y=Object.keys(m).reduce(function(t,e){return t[m[e]]=e,t},{}),T=function(t,e){for(var r=t.length-1;r>=0;r-=1){var n=t[r];if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}return null},g=function(t){var e=T(t,l.TITLE),r=T(t,"titleTemplate");if(Array.isArray(e)&&(e=e.join("")),r&&e)return r.replace(/%s/g,function(){return e});var n=T(t,"defaultTitle");return e||n||void 0},b=function(t){return T(t,"onChangeClientState")||function(){}},v=function(t,e){return e.filter(function(e){return void 0!==e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return a({},t,e)},{})},A=function(t,e){return e.filter(function(t){return void 0!==t[l.BASE]}).map(function(t){return t[l.BASE]}).reverse().reduce(function(e,r){if(!e.length)for(var n=Object.keys(r),i=0;i<n.length;i+=1){var o=n[i].toLowerCase();if(-1!==t.indexOf(o)&&r[o])return e.concat(r)}return e},[])},C=function(t,e,r){var n={};return r.filter(function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+t+' should be of type "Array". Instead found type "'+typeof e[t]+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,r){var i={};r.filter(function(t){for(var r,o=Object.keys(t),a=0;a<o.length;a+=1){var s=o[a],c=s.toLowerCase();-1===e.indexOf(c)||"rel"===r&&"canonical"===t[r].toLowerCase()||"rel"===c&&"stylesheet"===t[c].toLowerCase()||(r=c),-1===e.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!t[r])return!1;var u=t[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var o=Object.keys(i),s=0;s<o.length;s+=1){var c=o[s],u=a({},n[c],i[c]);n[c]=u}return t},[]).reverse()},O=function(t,e){if(Array.isArray(t)&&t.length)for(var r=0;r<t.length;r+=1)if(t[r][e])return!0;return!1},S=function(t){return Array.isArray(t)?t.join(""):t},E=function(t,e){return Array.isArray(t)?t.reduce(function(t,r){return function(t,e){for(var r=Object.keys(t),n=0;n<r.length;n+=1)if(e[r[n]]&&e[r[n]].includes(t[r[n]]))return!0;return!1}(r,e)?t.priority.push(r):t.default.push(r),t},{priority:[],default:[]}):{default:t}},I=function(t,e){var r;return a({},t,((r={})[e]=void 0,r))},P=[l.NOSCRIPT,l.SCRIPT,l.STYLE],w=function(t,e){return void 0===e&&(e=!0),!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},x=function(t){return Object.keys(t).reduce(function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n},"")},L=function(t,e){return void 0===e&&(e={}),Object.keys(t).reduce(function(e,r){return e[m[r]||r]=t[r],e},e)},j=function(e,r){return r.map(function(r,n){var i,o=((i={key:n})["data-rh"]=!0,i);return Object.keys(r).forEach(function(t){var e=m[t]||t;"innerHTML"===e||"cssText"===e?o.dangerouslySetInnerHTML={__html:r.innerHTML||r.cssText}:o[e]=r[t]}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(e,o)})},M=function(e,r,n){switch(e){case l.TITLE:return{toComponent:function(){return n=r.titleAttributes,(i={key:e=r.title})["data-rh"]=!0,o=L(n,i),[react__WEBPACK_IMPORTED_MODULE_0__.createElement(l.TITLE,o,e)];var e,n,i,o},toString:function(){return function(t,e,r,n){var i=x(r),o=S(e);return i?"<"+t+' data-rh="true" '+i+">"+w(o,n)+"</"+t+">":"<"+t+' data-rh="true">'+w(o,n)+"</"+t+">"}(e,r.title,r.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return L(r)},toString:function(){return x(r)}};default:return{toComponent:function(){return j(e,r)},toString:function(){return function(t,e,r){return e.reduce(function(e,n){var i=Object.keys(n).filter(function(t){return!("innerHTML"===t||"cssText"===t)}).reduce(function(t,e){var i=void 0===n[e]?e:e+'="'+w(n[e],r)+'"';return t?t+" "+i:i},""),o=n.innerHTML||n.cssText||"",a=-1===P.indexOf(t);return e+"<"+t+' data-rh="true" '+i+(a?"/>":">"+o+"</"+t+">")},"")}(e,r,n)}}}},k=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,i=t.htmlAttributes,o=t.noscriptTags,a=t.styleTags,s=t.title,c=void 0===s?"":s,u=t.titleAttributes,h=t.linkTags,m=t.metaTags,y=t.scriptTags,T={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var g=function(t){var e=t.linkTags,r=t.scriptTags,n=t.encode,i=E(t.metaTags,d),o=E(e,p),a=E(r,f);return{priorityMethods:{toComponent:function(){return[].concat(j(l.META,i.priority),j(l.LINK,o.priority),j(l.SCRIPT,a.priority))},toString:function(){return M(l.META,i.priority,n)+" "+M(l.LINK,o.priority,n)+" "+M(l.SCRIPT,a.priority,n)}},metaTags:i.default,linkTags:o.default,scriptTags:a.default}}(t);T=g.priorityMethods,h=g.linkTags,m=g.metaTags,y=g.scriptTags}return{priority:T,base:M(l.BASE,e,n),bodyAttributes:M("bodyAttributes",r,n),htmlAttributes:M("htmlAttributes",i,n),link:M(l.LINK,h,n),meta:M(l.META,m,n),noscript:M(l.NOSCRIPT,o,n),script:M(l.SCRIPT,y,n),style:M(l.STYLE,a,n),title:M(l.TITLE,{title:c,titleAttributes:u},n)}},H=[],N=function(t,e){var r=this;void 0===e&&(e="undefined"!=typeof document),this.instances=[],this.value={setHelmet:function(t){r.context.helmet=t},helmetInstances:{get:function(){return r.canUseDOM?H:r.instances},add:function(t){(r.canUseDOM?H:r.instances).push(t)},remove:function(t){var e=(r.canUseDOM?H:r.instances).indexOf(t);(r.canUseDOM?H:r.instances).splice(e,1)}}},this.context=t,this.canUseDOM=e,e||(t.helmet=k({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},R=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),D=prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({setHelmet:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),helmetInstances:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({get:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),add:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),remove:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)})}),U="undefined"!=typeof document,q=/*#__PURE__*/function(e){function r(t){var n;return(n=e.call(this,t)||this).helmetData=new N(n.props.context,r.canUseDOM),n}return s(r,e),r.prototype.render=function(){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(R.Provider,{value:this.helmetData.value},this.props.children)},r}(react__WEBPACK_IMPORTED_MODULE_0__.Component);q.canUseDOM=U,q.propTypes={context:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({helmet:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape()}),children:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node).isRequired},q.defaultProps={context:{}},q.displayName="HelmetProvider";var Y=function(t,e){var r,n=document.head||document.querySelector(l.HEAD),i=n.querySelectorAll(t+"[data-rh]"),o=[].slice.call(i),a=[];return e&&e.length&&e.forEach(function(e){var n=document.createElement(t);for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&("innerHTML"===i?n.innerHTML=e.innerHTML:"cssText"===i?n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText)):n.setAttribute(i,void 0===e[i]?"":e[i]));n.setAttribute("data-rh","true"),o.some(function(t,e){return r=e,n.isEqualNode(t)})?o.splice(r,1):a.push(n)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),a.forEach(function(t){return n.appendChild(t)}),{oldTags:o,newTags:a}},B=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute("data-rh"),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(e),s=0;s<a.length;s+=1){var c=a[s],u=e[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var p=o.length-1;p>=0;p-=1)r.removeAttribute(o[p]);i.length===o.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==a.join(",")&&r.setAttribute("data-rh",a.join(","))}},K=function(t,e){var r=t.baseTag,n=t.htmlAttributes,i=t.linkTags,o=t.metaTags,a=t.noscriptTags,s=t.onChangeClientState,c=t.scriptTags,u=t.styleTags,p=t.title,f=t.titleAttributes;B(l.BODY,t.bodyAttributes),B(l.HTML,n),function(t,e){void 0!==t&&document.title!==t&&(document.title=S(t)),B(l.TITLE,e)}(p,f);var d={baseTag:Y(l.BASE,r),linkTags:Y(l.LINK,i),metaTags:Y(l.META,o),noscriptTags:Y(l.NOSCRIPT,a),scriptTags:Y(l.SCRIPT,c),styleTags:Y(l.STYLE,u)},h={},m={};Object.keys(d).forEach(function(t){var e=d[t],r=e.newTags,n=e.oldTags;r.length&&(h[t]=r),n.length&&(m[t]=d[t].oldTags)}),e&&e(),s(t,h,m)},_=null,z=/*#__PURE__*/function(t){function e(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).rendered=!1,e}s(e,t);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!shallowequal__WEBPACK_IMPORTED_MODULE_3___default()(t,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var t,e,r=this.props.context,n=r.setHelmet,i=null,o=(t=r.helmetInstances.get().map(function(t){var e=a({},t.props);return delete e.context,e}),{baseTag:A(["href"],t),bodyAttributes:v("bodyAttributes",t),defer:T(t,"defer"),encode:T(t,"encodeSpecialCharacters"),htmlAttributes:v("htmlAttributes",t),linkTags:C(l.LINK,["rel","href"],t),metaTags:C(l.META,["name","charset","http-equiv","property","itemprop"],t),noscriptTags:C(l.NOSCRIPT,["innerHTML"],t),onChangeClientState:b(t),scriptTags:C(l.SCRIPT,["src","innerHTML"],t),styleTags:C(l.STYLE,["cssText"],t),title:g(t),titleAttributes:v("titleAttributes",t),prioritizeSeoTags:O(t,"prioritizeSeoTags")});q.canUseDOM?(e=o,_&&cancelAnimationFrame(_),e.defer?_=requestAnimationFrame(function(){K(e,function(){_=null})}):(K(e),_=null)):k&&(i=k(o)),n(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},e}(react__WEBPACK_IMPORTED_MODULE_0__.Component);z.propTypes={context:D.isRequired},z.displayName="HelmetDispatcher";var F=["children"],G=["children"],W=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}s(r,e);var o=r.prototype;return o.shouldComponentUpdate=function(t){return!react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(I(this.props,"helmetData"),I(t,"helmetData"))},o.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.SCRIPT:case l.NOSCRIPT:return{innerHTML:e};case l.STYLE:return{cssText:e};default:throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},o.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren;return a({},n,((e={})[r.type]=[].concat(n[r.type]||[],[a({},t.newChildProps,this.mapNestedChildrenToProps(r,t.nestedChildren))]),e))},o.mapObjectTypeChildren=function(t){var e,r,n=t.child,i=t.newProps,o=t.newChildProps,s=t.nestedChildren;switch(n.type){case l.TITLE:return a({},i,((e={})[n.type]=s,e.titleAttributes=a({},o),e));case l.BODY:return a({},i,{bodyAttributes:a({},o)});case l.HTML:return a({},i,{htmlAttributes:a({},o)});default:return a({},i,((r={})[n.type]=a({},o),r))}},o.mapArrayTypeChildrenToProps=function(t,e){var r=a({},e);return Object.keys(t).forEach(function(e){var n;r=a({},r,((n={})[e]=t[e],n))}),r},o.warnOnInvalidChildren=function(t,e){return invariant__WEBPACK_IMPORTED_MODULE_2___default()(h.some(function(e){return t.type===e}),"function"==typeof t.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+h.join(", ")+" are allowed. Helmet does not support rendering <"+t.type+"> elements. Refer to our API for more information."),invariant__WEBPACK_IMPORTED_MODULE_2___default()(!e||"string"==typeof e||Array.isArray(e)&&!e.some(function(t){return"string"!=typeof t}),"Helmet expects a string as a child of <"+t.type+">. Did you forget to wrap your children in braces? ( <"+t.type+">{``}</"+t.type+"> ) Refer to our API for more information."),!0},o.mapChildrenToProps=function(e,r){var n=this,i={};return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(e,function(t){if(t&&t.props){var e=t.props,o=e.children,a=u(e,F),s=Object.keys(a).reduce(function(t,e){return t[y[e]||e]=a[e],t},{}),c=t.type;switch("symbol"==typeof c?c=c.toString():n.warnOnInvalidChildren(t,o),c){case l.FRAGMENT:r=n.mapChildrenToProps(o,r);break;case l.LINK:case l.META:case l.NOSCRIPT:case l.SCRIPT:case l.STYLE:i=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:i,newChildProps:s,nestedChildren:o});break;default:r=n.mapObjectTypeChildren({child:t,newProps:r,newChildProps:s,nestedChildren:o})}}}),this.mapArrayTypeChildrenToProps(i,r)},o.render=function(){var e=this.props,r=e.children,n=u(e,G),i=a({},n),o=n.helmetData;return r&&(i=this.mapChildrenToProps(r,i)),!o||o instanceof N||(o=new N(o.context,o.instances)),o?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(z,a({},i,{context:o.value,helmetData:void 0})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(R.Consumer,null,function(e){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(z,a({},i,{context:e}))})},r}(react__WEBPACK_IMPORTED_MODULE_0__.Component);W.propTypes={base:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),bodyAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)),(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)]),defaultTitle:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),defer:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),encodeSpecialCharacters:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),htmlAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),link:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),meta:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),noscript:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),onChangeClientState:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),script:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),style:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),title:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),titleAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),titleTemplate:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),prioritizeSeoTags:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),helmetData:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)},W.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},W.displayName="Helmet";
//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ 53259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = __webpack_require__(96540);

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];

function isWebpackReady(getModuleIds) {
  if (false) {}

  return getModuleIds().every(function (moduleId) {
    return typeof moduleId !== "undefined" && typeof __webpack_require__.m[moduleId] !== "undefined";
  });
}

var LoadableCaptureContext = React.createContext(null);

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return React.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _class, _temp;

  if (!options.loading) {
    throw new Error("react-loadable requires a `loading` component");
  }

  var opts = _extends({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);

  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }

    return res.promise;
  }

  ALL_INITIALIZERS.push(init);

  if (typeof opts.webpack === "function") {
    READY_INITIALIZERS.push(function () {
      if (isWebpackReady(opts.webpack)) {
        return init();
      }
    });
  }

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(LoadableComponent, _React$Component);

    function LoadableComponent(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "retry", function () {
        _this.setState({
          error: null,
          loading: true,
          timedOut: false
        });

        res = loadFn(opts.loader);

        _this._loadModule();
      });

      init();
      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    LoadableComponent.preload = function preload() {
      return init();
    };

    var _proto = LoadableComponent.prototype;

    _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
      this._loadModule();
    };

    _proto.componentDidMount = function componentDidMount() {
      this._mounted = true;
    };

    _proto._loadModule = function _loadModule() {
      var _this2 = this;

      if (this.context && Array.isArray(opts.modules)) {
        opts.modules.forEach(function (moduleName) {
          _this2.context.report(moduleName);
        });
      }

      if (!res.loading) {
        return;
      }

      var setStateWithMountCheck = function setStateWithMountCheck(newState) {
        if (!_this2._mounted) {
          return;
        }

        _this2.setState(newState);
      };

      if (typeof opts.delay === 'number') {
        if (opts.delay === 0) {
          this.setState({
            pastDelay: true
          });
        } else {
          this._delay = setTimeout(function () {
            setStateWithMountCheck({
              pastDelay: true
            });
          }, opts.delay);
        }
      }

      if (typeof opts.timeout === "number") {
        this._timeout = setTimeout(function () {
          setStateWithMountCheck({
            timedOut: true
          });
        }, opts.timeout);
      }

      var update = function update() {
        setStateWithMountCheck({
          error: res.error,
          loaded: res.loaded,
          loading: res.loading
        });

        _this2._clearTimeouts();
      };

      res.promise.then(function () {
        update();
        return null;
      }).catch(function (err) {
        update();
        return null;
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this._mounted = false;

      this._clearTimeouts();
    };

    _proto._clearTimeouts = function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    };

    _proto.render = function render() {
      if (this.state.loading || this.state.error) {
        return React.createElement(opts.loading, {
          isLoading: this.state.loading,
          pastDelay: this.state.pastDelay,
          timedOut: this.state.timedOut,
          error: this.state.error,
          retry: this.retry
        });
      } else if (this.state.loaded) {
        return opts.render(this.state.loaded, this.props);
      } else {
        return null;
      }
    };

    return LoadableComponent;
  }(React.Component), _defineProperty(_class, "contextType", LoadableCaptureContext), _temp;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== "function") {
    throw new Error("LoadableMap requires a `render(loaded, props)` function");
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

var Capture =
/*#__PURE__*/
function (_React$Component2) {
  _inheritsLoose(Capture, _React$Component2);

  function Capture() {
    return _React$Component2.apply(this, arguments) || this;
  }

  var _proto2 = Capture.prototype;

  _proto2.render = function render() {
    return React.createElement(LoadableCaptureContext.Provider, {
      value: {
        report: this.props.report
      }
    }, React.Children.only(this.props.children));
  };

  return Capture;
}(React.Component);

Loadable.Capture = Capture;

function flushInitializers(initializers) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init());
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  return new Promise(function (resolve, reject) {
    // We always will resolve, errors should be handled within loading UIs.
    flushInitializers(READY_INITIALIZERS).then(resolve, resolve);
  });
};

module.exports = Loadable;

/***/ }),

/***/ 22831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ matchRoutes),
/* harmony export */   v: () => (/* binding */ renderRoutes)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35527);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);




function matchRoutes(routes, pathname,
/*not public API*/
branch) {
  if (branch === void 0) {
    branch = [];
  }

  routes.some(function (route) {
    var match = route.path ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__/* .matchPath */ .B6)(pathname, route) : branch.length ? branch[branch.length - 1].match // use parent match
    : react_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix.computeRootMatch(pathname); // use default "root" match

    if (match) {
      branch.push({
        route: route,
        match: match
      });

      if (route.routes) {
        matchRoutes(route.routes, pathname, branch);
      }
    }

    return match;
  });
  return branch;
}

function renderRoutes(routes, extraProps, switchProps) {
  if (extraProps === void 0) {
    extraProps = {};
  }

  if (switchProps === void 0) {
    switchProps = {};
  }

  return routes ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__/* .Switch */ .dO, switchProps, routes.map(function (route, i) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__/* .Route */ .qh, {
      key: route.key || i,
      path: route.path,
      exact: route.exact,
      strict: route.strict,
      render: function render(props) {
        return route.render ? route.render((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {}, extraProps, {
          route: route
        })) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, extraProps, {
          route: route
        }));
      }
    });
  })) : null;
}


//# sourceMappingURL=react-router-config.js.map


/***/ }),

/***/ 54625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I9: () => (/* binding */ HashRouter),
/* harmony export */   Kd: () => (/* binding */ BrowserRouter),
/* harmony export */   N_: () => (/* binding */ Link),
/* harmony export */   k2: () => (/* binding */ NavLink)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35527);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31513);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98587);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11561);











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_2__/* .createBrowserHistory */ .zR)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .Ix, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_2__/* .createHashHistory */ .TM)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .Ix, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_2__/* .createLocation */ .yJ)(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_ref2, ["component", "replace", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__/* .__RouterContext */ .XZ.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var isDuplicateNavigation = (0,history__WEBPACK_IMPORTED_MODULE_2__/* .createPath */ .AO)(context.location) === (0,history__WEBPACK_IMPORTED_MODULE_2__/* .createPath */ .AO)(normalizeToLocation(location));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__/* .__RouterContext */ .XZ.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? (0,react_router__WEBPACK_IMPORTED_MODULE_3__/* .matchPath */ .B6)(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;

    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({}, style, activeStyle);
    }

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link, props);
  });
});

if (false) { var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map


/***/ }),

/***/ 21020:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(96540),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 15287:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ 96540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(15287);
} else {}


/***/ }),

/***/ 74848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(21020);
} else {}


/***/ }),

/***/ 7463:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 69982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(7463);
} else {}


/***/ }),

/***/ 2833:
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ 27999:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "title": "Migrationsverkets designsystem",
  "tagline": "Midas",
  "url": "https://designsystem.migrationsverket.se",
  "baseUrl": "/pr-preview/pr-180/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "throw",
  "favicon": "img/favicon.ico?v=3",
  "organizationName": "migrationsverket",
  "projectName": "midas",
  "trailingSlash": true,
  "i18n": {
    "defaultLocale": "sv",
    "locales": [
      "sv"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "plugins": [
    [
      "docusaurus-plugin-module-alias",
      {
        "alias": {
          "@midas-ds/accordion": "/home/runner/work/midas/midas/packages/accordion/src/index.ts",
          "@midas-ds/breadcrumbs": "/home/runner/work/midas/midas/packages/breadcrumbs/src/index.ts",
          "@midas-ds/button": "/home/runner/work/midas/midas/packages/button/src/index.ts",
          "@midas-ds/card": "/home/runner/work/midas/midas/packages/card/src/index.ts",
          "@midas-ds/checkbox": "/home/runner/work/midas/midas/packages/checkbox/src/index.ts",
          "@midas-ds/combobox": "/home/runner/work/midas/midas/packages/combobox/src/index.ts",
          "@midas-ds/date-picker": "/home/runner/work/midas/midas/packages/date-picker/src/index.ts",
          "@midas-ds/file-upload": "/home/runner/work/midas/midas/packages/file-upload/src/index.ts",
          "@midas-ds/flex": "/home/runner/work/midas/midas/packages/flex/src/index.ts",
          "@midas-ds/grid": "/home/runner/work/midas/midas/packages/grid/src/index.ts",
          "@midas-ds/info-banner": "/home/runner/work/midas/midas/packages/info-banner/src/index.ts",
          "@midas-ds/link": "/home/runner/work/midas/midas/packages/link/src/index.ts",
          "@midas-ds/link-button": "/home/runner/work/midas/midas/packages/link-button/src/index.ts",
          "@midas-ds/logo": "/home/runner/work/midas/midas/packages/logo/src/index.ts",
          "@midas-ds/modal": "/home/runner/work/midas/midas/packages/modal/src/index.ts",
          "@midas-ds/multi-select": "/home/runner/work/midas/midas/packages/multi-select/src/index.ts",
          "@midas-ds/radio": "/home/runner/work/midas/midas/packages/radio/src/index.ts",
          "@midas-ds/search-field": "/home/runner/work/midas/midas/packages/search-field/src/index.ts",
          "@midas-ds/select": "/home/runner/work/midas/midas/packages/select/src/index.ts",
          "@midas-ds/spinner": "/home/runner/work/midas/midas/packages/spinner/src/index.ts",
          "@midas-ds/table": "/home/runner/work/midas/midas/packages/table/src/index.ts",
          "@midas-ds/tabs": "/home/runner/work/midas/midas/packages/tabs/src/index.ts",
          "@midas-ds/tag": "/home/runner/work/midas/midas/packages/tag/src/index.ts",
          "@midas-ds/textarea": "/home/runner/work/midas/midas/packages/textarea/src/index.ts",
          "@midas-ds/textfield": "/home/runner/work/midas/midas/packages/textfield/src/index.ts",
          "@midas-ds/theme": "/home/runner/work/midas/midas/packages/theme/src/index.ts",
          "@midas-ds/toast": "/home/runner/work/midas/midas/packages/toast/src/index.ts",
          "@midas-ds/ui": "/home/runner/work/midas/midas/packages/ui/src/index.ts"
        }
      }
    ]
  ],
  "markdown": {
    "mermaid": true,
    "format": "mdx",
    "mdx1Compat": {
      "comments": true,
      "admonitions": true,
      "headingIds": true
    },
    "anchors": {
      "maintainCase": false
    }
  },
  "themes": [
    "@docusaurus/theme-mermaid",
    "@docusaurus/theme-live-codeblock"
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": "/home/runner/work/midas/midas/apps/docs/sidebars.js",
          "remarkPlugins": [
            [
              null,
              {
                "converters": [
                  "yarn",
                  "pnpm"
                ],
                "sync": true
              }
            ]
          ],
          "breadcrumbs": false
        },
        "blog": {
          "showReadingTime": true,
          "blogSidebarTitle": "Alla inlägg",
          "blogSidebarCount": "ALL",
          "remarkPlugins": [
            [
              null,
              {
                "converters": [
                  "yarn",
                  "pnpm"
                ],
                "sync": true
              }
            ]
          ]
        },
        "pages": {},
        "theme": {
          "customCss": [
            "./src/css/custom.css"
          ]
        }
      }
    ]
  ],
  "themeConfig": {
    "announcementBar": {
      "id": "open_source",
      "content": "Midas har nu öppen källkod. <a href=\"/blog/midas-open-source\">Läs mer om vad det innebär.</a>",
      "isCloseable": false,
      "backgroundColor": "#eaf2f6"
    },
    "navbar": {
      "logo": {
        "alt": "Migrationsverket Logotyp",
        "src": "img/mig-logo.svg",
        "height": "100%",
        "width": "auto",
        "className": "migNavbarLogo"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Dokumentation"
        },
        {
          "to": "/blog",
          "position": "left",
          "label": "Nyheter"
        },
        {
          "to": "/about",
          "position": "left",
          "label": "Om"
        },
        {
          "to": "/blog/release-17",
          "label": "Senaste versionen",
          "position": "right"
        },
        {
          "href": "https://github.com/migrationsverket/midas",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "logo": {
        "alt": "Migrationsverket Logotyp",
        "src": "img/mig-logo-white.svg",
        "height": "100%",
        "width": "100px"
      },
      "copyright": "Migrationsverkets designsystem - Midas",
      "links": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "mermaid": {
      "options": {
        "flowchart": {
          "curve": "linear"
        }
      },
      "theme": {
        "dark": "dark",
        "light": "default"
      }
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "blog": {
      "sidebar": {
        "groupByYear": true
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    },
    "liveCodeBlock": {
      "playgroundPosition": "bottom"
    }
  },
  "baseUrlIssueBanner": true,
  "future": {
    "experimental_faster": {
      "swcJsLoader": false,
      "swcJsMinimizer": false,
      "swcHtmlMinimizer": false,
      "lightningCssMinimizer": false,
      "mdxCrossCompilerCache": false,
      "rspackBundler": false
    },
    "experimental_storage": {
      "type": "localStorage",
      "namespace": false
    },
    "experimental_router": "browser"
  },
  "onBrokenAnchors": "warn",
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false
});


/***/ }),

/***/ 43845:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _createForOfIteratorHelperLoose)
});

;// ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

;// ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

;// ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelperLoose.js

function _createForOfIteratorHelperLoose(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function () {
      return o >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[o++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ 58168:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ 77387:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63662);

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t, o);
}


/***/ }),

/***/ 98587:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ }),

/***/ 63662:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ 82284:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ 3909:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _wrapRegExp)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(82284);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__(63662);
;// ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,setPrototypeOf/* default */.A)(t, e);
}

;// ./node_modules/@babel/runtime/helpers/esm/wrapRegExp.js



function _wrapRegExp() {
  _wrapRegExp = function _wrapRegExp(e, r) {
    return new BabelRegExp(e, void 0, r);
  };
  var e = RegExp.prototype,
    r = new WeakMap();
  function BabelRegExp(e, t, p) {
    var o = RegExp(e, t);
    return r.set(o, p || r.get(e)), (0,setPrototypeOf/* default */.A)(o, BabelRegExp.prototype);
  }
  function buildGroups(e, t) {
    var p = r.get(t);
    return Object.keys(p).reduce(function (r, t) {
      var o = p[t];
      if ("number" == typeof o) r[t] = e[o];else {
        for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
        r[t] = e[o[i]];
      }
      return r;
    }, Object.create(null));
  }
  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
    var t = e.exec.call(this, r);
    if (t) {
      t.groups = buildGroups(t, this);
      var p = t.indices;
      p && (p.groups = buildGroups(p, this));
    }
    return t;
  }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
    if ("string" == typeof p) {
      var o = r.get(this);
      return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)>/g, function (e, r) {
        var t = o[r];
        return "$" + (Array.isArray(t) ? t.join("$") : t);
      }));
    }
    if ("function" == typeof p) {
      var i = this;
      return e[Symbol.replace].call(this, t, function () {
        var e = arguments;
        return "object" != (0,esm_typeof/* default */.A)(e[e.length - 1]) && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
      });
    }
    return e[Symbol.replace].call(this, t, p);
  }, _wrapRegExp.apply(this, arguments);
}


/***/ }),

/***/ 34164:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ clsx),
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ 71765:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   My: () => (/* binding */ Prism),
/* harmony export */   Zj: () => (/* binding */ themes_exports),
/* harmony export */   f4: () => (/* binding */ Highlight2)
/* harmony export */ });
/* unused harmony exports normalizeTokens, useTokenize */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34164);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js
var require_prism = __commonJS({
  "../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(exports, module) {
    var Prism2 = function() {
      var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
      var uniqueId = 0;
      var plainTextGrammar = {};
      var _ = {
        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
          encode: function encode(tokens) {
            if (tokens instanceof Token) {
              return new Token(tokens.type, encode(tokens.content), tokens.alias);
            } else if (Array.isArray(tokens)) {
              return tokens.map(encode);
            } else {
              return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            }
          },
          /**
           * Returns the name of the type of the given value.
           *
           * @param {any} o
           * @returns {string}
           * @example
           * type(null)      === 'Null'
           * type(undefined) === 'Undefined'
           * type(123)       === 'Number'
           * type('foo')     === 'String'
           * type(true)      === 'Boolean'
           * type([1, 2])    === 'Array'
           * type({})        === 'Object'
           * type(String)    === 'Function'
           * type(/abc+/)    === 'RegExp'
           */
          type: function(o) {
            return Object.prototype.toString.call(o).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(obj) {
            if (!obj["__id"]) {
              Object.defineProperty(obj, "__id", { value: ++uniqueId });
            }
            return obj["__id"];
          },
          /**
           * Creates a deep clone of the given object.
           *
           * The main intended use of this function is to clone language definitions.
           *
           * @param {T} o
           * @param {Record<number, any>} [visited]
           * @returns {T}
           * @template T
           */
          clone: function deepClone(o, visited) {
            visited = visited || {};
            var clone;
            var id;
            switch (_.util.type(o)) {
              case "Object":
                id = _.util.objId(o);
                if (visited[id]) {
                  return visited[id];
                }
                clone = /** @type {Record<string, any>} */
                {};
                visited[id] = clone;
                for (var key in o) {
                  if (o.hasOwnProperty(key)) {
                    clone[key] = deepClone(o[key], visited);
                  }
                }
                return (
                  /** @type {any} */
                  clone
                );
              case "Array":
                id = _.util.objId(o);
                if (visited[id]) {
                  return visited[id];
                }
                clone = [];
                visited[id] = clone;
                /** @type {Array} */
                /** @type {any} */
                o.forEach(function(v, i) {
                  clone[i] = deepClone(v, visited);
                });
                return (
                  /** @type {any} */
                  clone
                );
              default:
                return o;
            }
          },
          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function(element) {
            while (element) {
              var m = lang.exec(element.className);
              if (m) {
                return m[1].toLowerCase();
              }
              element = element.parentElement;
            }
            return "none";
          },
          /**
           * Sets the Prism `language-xxxx` class of the given element.
           *
           * @param {Element} element
           * @param {string} language
           * @returns {void}
           */
          setLanguage: function(element, language) {
            element.className = element.className.replace(RegExp(lang, "gi"), "");
            element.classList.add("language-" + language);
          },
          /**
           * Returns whether a given class is active for `element`.
           *
           * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
           * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
           * given class is just the given class with a `no-` prefix.
           *
           * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
           * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
           * ancestors have the given class or the negated version of it, then the default activation will be returned.
           *
           * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
           * version of it, the class is considered active.
           *
           * @param {Element} element
           * @param {string} className
           * @param {boolean} [defaultActivation=false]
           * @returns {boolean}
           */
          isActive: function(element, className, defaultActivation) {
            var no = "no-" + className;
            while (element) {
              var classList = element.classList;
              if (classList.contains(className)) {
                return true;
              }
              if (classList.contains(no)) {
                return false;
              }
              element = element.parentElement;
            }
            return !!defaultActivation;
          }
        },
        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
          /**
           * The grammar for plain, unformatted text.
           */
          plain: plainTextGrammar,
          plaintext: plainTextGrammar,
          text: plainTextGrammar,
          txt: plainTextGrammar,
          /**
           * Creates a deep copy of the language with the given id and appends the given tokens.
           *
           * If a token in `redef` also appears in the copied language, then the existing token in the copied language
           * will be overwritten at its original position.
           *
           * ## Best practices
           *
           * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
           * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
           * understand the language definition because, normally, the order of tokens matters in Prism grammars.
           *
           * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
           * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
           *
           * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
           * @param {Grammar} redef The new tokens to append.
           * @returns {Grammar} The new language created.
           * @public
           * @example
           * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
           *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
           *     // at its original position
           *     'comment': { ... },
           *     // CSS doesn't have a 'color' token, so this token will be appended
           *     'color': /\b(?:red|green|blue)\b/
           * });
           */
          extend: function(id, redef) {
            var lang2 = _.util.clone(_.languages[id]);
            for (var key in redef) {
              lang2[key] = redef[key];
            }
            return lang2;
          },
          /**
           * Inserts tokens _before_ another token in a language definition or any other grammar.
           *
           * ## Usage
           *
           * This helper method makes it easy to modify existing languages. For example, the CSS language definition
           * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
           * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
           * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
           * this:
           *
           * ```js
           * Prism.languages.markup.style = {
           *     // token
           * };
           * ```
           *
           * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
           * before existing tokens. For the CSS example above, you would use it like this:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'cdata', {
           *     'style': {
           *         // token
           *     }
           * });
           * ```
           *
           * ## Special cases
           *
           * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
           * will be ignored.
           *
           * This behavior can be used to insert tokens after `before`:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'comment', {
           *     'comment': Prism.languages.markup.comment,
           *     // tokens after 'comment'
           * });
           * ```
           *
           * ## Limitations
           *
           * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
           * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
           * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
           * deleting properties which is necessary to insert at arbitrary positions.
           *
           * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
           * Instead, it will create a new object and replace all references to the target object with the new one. This
           * can be done without temporarily deleting properties, so the iteration order is well-defined.
           *
           * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
           * you hold the target object in a variable, then the value of the variable will not change.
           *
           * ```js
           * var oldMarkup = Prism.languages.markup;
           * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
           *
           * assert(oldMarkup !== Prism.languages.markup);
           * assert(newMarkup === Prism.languages.markup);
           * ```
           *
           * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
           * object to be modified.
           * @param {string} before The key to insert before.
           * @param {Grammar} insert An object containing the key-value pairs to be inserted.
           * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
           * object to be modified.
           *
           * Defaults to `Prism.languages`.
           * @returns {Grammar} The new grammar object.
           * @public
           */
          insertBefore: function(inside, before, insert, root) {
            root = root || /** @type {any} */
            _.languages;
            var grammar = root[inside];
            var ret = {};
            for (var token in grammar) {
              if (grammar.hasOwnProperty(token)) {
                if (token == before) {
                  for (var newToken in insert) {
                    if (insert.hasOwnProperty(newToken)) {
                      ret[newToken] = insert[newToken];
                    }
                  }
                }
                if (!insert.hasOwnProperty(token)) {
                  ret[token] = grammar[token];
                }
              }
            }
            var old = root[inside];
            root[inside] = ret;
            _.languages.DFS(_.languages, function(key, value) {
              if (value === old && key != inside) {
                this[key] = ret;
              }
            });
            return ret;
          },
          // Traverse a language definition with Depth First Search
          DFS: function DFS(o, callback, type, visited) {
            visited = visited || {};
            var objId = _.util.objId;
            for (var i in o) {
              if (o.hasOwnProperty(i)) {
                callback.call(o, i, o[i], type || i);
                var property = o[i];
                var propertyType = _.util.type(property);
                if (propertyType === "Object" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, null, visited);
                } else if (propertyType === "Array" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, i, visited);
                }
              }
            }
          }
        },
        plugins: {},
        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function(text, grammar, language) {
          var env = {
            code: text,
            grammar,
            language
          };
          _.hooks.run("before-tokenize", env);
          if (!env.grammar) {
            throw new Error('The language "' + env.language + '" has no grammar.');
          }
          env.tokens = _.tokenize(env.code, env.grammar);
          _.hooks.run("after-tokenize", env);
          return Token.stringify(_.util.encode(env.tokens), env.language);
        },
        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function(text, grammar) {
          var rest = grammar.rest;
          if (rest) {
            for (var token in rest) {
              grammar[token] = rest[token];
            }
            delete grammar.rest;
          }
          var tokenList = new LinkedList();
          addAfter(tokenList, tokenList.head, text);
          matchGrammar(text, tokenList, grammar, tokenList.head, 0);
          return toArray(tokenList);
        },
        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
          all: {},
          /**
           * Adds the given callback to the list of callbacks for the given hook.
           *
           * The callback will be invoked when the hook it is registered for is run.
           * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
           *
           * One callback function can be registered to multiple hooks and the same hook multiple times.
           *
           * @param {string} name The name of the hook.
           * @param {HookCallback} callback The callback function which is given environment variables.
           * @public
           */
          add: function(name, callback) {
            var hooks2 = _.hooks.all;
            hooks2[name] = hooks2[name] || [];
            hooks2[name].push(callback);
          },
          /**
           * Runs a hook invoking all registered callbacks with the given environment variables.
           *
           * Callbacks will be invoked synchronously and in the order in which they were registered.
           *
           * @param {string} name The name of the hook.
           * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
           * @public
           */
          run: function(name, env) {
            var callbacks = _.hooks.all[name];
            if (!callbacks || !callbacks.length) {
              return;
            }
            for (var i = 0, callback; callback = callbacks[i++]; ) {
              callback(env);
            }
          }
        },
        Token
      };
      function Token(type, content, alias, matchedStr) {
        this.type = type;
        this.content = content;
        this.alias = alias;
        this.length = (matchedStr || "").length | 0;
      }
      Token.stringify = function stringify(o, language) {
        if (typeof o == "string") {
          return o;
        }
        if (Array.isArray(o)) {
          var s = "";
          o.forEach(function(e) {
            s += stringify(e, language);
          });
          return s;
        }
        var env = {
          type: o.type,
          content: stringify(o.content, language),
          tag: "span",
          classes: ["token", o.type],
          attributes: {},
          language
        };
        var aliases = o.alias;
        if (aliases) {
          if (Array.isArray(aliases)) {
            Array.prototype.push.apply(env.classes, aliases);
          } else {
            env.classes.push(aliases);
          }
        }
        _.hooks.run("wrap", env);
        var attributes = "";
        for (var name in env.attributes) {
          attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
        }
        return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
      };
      function matchPattern(pattern, pos, text, lookbehind) {
        pattern.lastIndex = pos;
        var match = pattern.exec(text);
        if (match && lookbehind && match[1]) {
          var lookbehindLength = match[1].length;
          match.index += lookbehindLength;
          match[0] = match[0].slice(lookbehindLength);
        }
        return match;
      }
      function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
        for (var token in grammar) {
          if (!grammar.hasOwnProperty(token) || !grammar[token]) {
            continue;
          }
          var patterns = grammar[token];
          patterns = Array.isArray(patterns) ? patterns : [patterns];
          for (var j = 0; j < patterns.length; ++j) {
            if (rematch && rematch.cause == token + "," + j) {
              return;
            }
            var patternObj = patterns[j];
            var inside = patternObj.inside;
            var lookbehind = !!patternObj.lookbehind;
            var greedy = !!patternObj.greedy;
            var alias = patternObj.alias;
            if (greedy && !patternObj.pattern.global) {
              var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
              patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
            }
            var pattern = patternObj.pattern || patternObj;
            for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
              if (rematch && pos >= rematch.reach) {
                break;
              }
              var str = currentNode.value;
              if (tokenList.length > text.length) {
                return;
              }
              if (str instanceof Token) {
                continue;
              }
              var removeCount = 1;
              var match;
              if (greedy) {
                match = matchPattern(pattern, pos, text, lookbehind);
                if (!match || match.index >= text.length) {
                  break;
                }
                var from = match.index;
                var to = match.index + match[0].length;
                var p = pos;
                p += currentNode.value.length;
                while (from >= p) {
                  currentNode = currentNode.next;
                  p += currentNode.value.length;
                }
                p -= currentNode.value.length;
                pos = p;
                if (currentNode.value instanceof Token) {
                  continue;
                }
                for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                  removeCount++;
                  p += k.value.length;
                }
                removeCount--;
                str = text.slice(pos, p);
                match.index -= pos;
              } else {
                match = matchPattern(pattern, 0, str, lookbehind);
                if (!match) {
                  continue;
                }
              }
              var from = match.index;
              var matchStr = match[0];
              var before = str.slice(0, from);
              var after = str.slice(from + matchStr.length);
              var reach = pos + str.length;
              if (rematch && reach > rematch.reach) {
                rematch.reach = reach;
              }
              var removeFrom = currentNode.prev;
              if (before) {
                removeFrom = addAfter(tokenList, removeFrom, before);
                pos += before.length;
              }
              removeRange(tokenList, removeFrom, removeCount);
              var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
              currentNode = addAfter(tokenList, removeFrom, wrapped);
              if (after) {
                addAfter(tokenList, currentNode, after);
              }
              if (removeCount > 1) {
                var nestedRematch = {
                  cause: token + "," + j,
                  reach
                };
                matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                if (rematch && nestedRematch.reach > rematch.reach) {
                  rematch.reach = nestedRematch.reach;
                }
              }
            }
          }
        }
      }
      function LinkedList() {
        var head = { value: null, prev: null, next: null };
        var tail = { value: null, prev: head, next: null };
        head.next = tail;
        this.head = head;
        this.tail = tail;
        this.length = 0;
      }
      function addAfter(list, node, value) {
        var next = node.next;
        var newNode = { value, prev: node, next };
        node.next = newNode;
        next.prev = newNode;
        list.length++;
        return newNode;
      }
      function removeRange(list, node, count) {
        var next = node.next;
        for (var i = 0; i < count && next !== list.tail; i++) {
          next = next.next;
        }
        node.next = next;
        next.prev = node;
        list.length -= i;
      }
      function toArray(list) {
        var array = [];
        var node = list.head.next;
        while (node !== list.tail) {
          array.push(node.value);
          node = node.next;
        }
        return array;
      }
      return _;
    }();
    module.exports = Prism2;
    Prism2.default = Prism2;
  }
});

// src/prism-langs.ts
var Prism = __toESM(require_prism());
Prism.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: true }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: true }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: true, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: true, greedy: true, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: true }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: true }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: true, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, { pattern: /^(\s*)["']|["']$/, lookbehind: true }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(e) {
  "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function(e, n) {
  var t = {}, t = (t["language-" + n] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: Prism.languages[n] }, t.cdata = /^<!\[CDATA\[|\]\]>$/i, { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: t } }), n = (t["language-" + n] = { pattern: /[\s\S]+/, inside: Prism.languages[n] }, {});
  n[e] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
    return e;
  }), "i"), lookbehind: true, greedy: true, inside: t }, Prism.languages.insertBefore("markup", "cdata", n);
} }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { value: function(e, n) {
  Prism.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: true, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: true, alias: [n, "language-" + n], inside: Prism.languages[n] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
} }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml, function(e) {
  var n = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape" }, t = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/, a = "(?:[^\\\\-]|" + t.source + ")", a = RegExp(a + "-" + a), r = { pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: true, alias: "variable" };
  e.languages.regex = { "char-class": { pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/, lookbehind: true, inside: { "char-class-negation": { pattern: /(^\[)\^/, lookbehind: true, alias: "operator" }, "char-class-punctuation": { pattern: /^\[|\]$/, alias: "punctuation" }, range: { pattern: a, inside: { escape: t, "range-punctuation": { pattern: /-/, alias: "operator" } } }, "special-escape": n, "char-set": { pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, escape: t } }, "special-escape": n, "char-set": { pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, backreference: [{ pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword" }, { pattern: /\\k<[^<>']+>/, alias: "keyword", inside: { "group-name": r } }], anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: "function" }, escape: t, group: [{ pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/, alias: "punctuation", inside: { "group-name": r } }, { pattern: /\)/, alias: "punctuation" }], quantifier: { pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: "number" }, alternation: { pattern: /\|/, alias: "keyword" } };
}(Prism), Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true, greedy: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.javascript = Prism.languages.extend("clike", { "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: true }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: true }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source), lookbehind: true }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source), lookbehind: true, greedy: true, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: true, alias: "language-regex", inside: Prism.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: true, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: true, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: true, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: true, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: true, greedy: true, alias: "property" } }), Prism.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: true, alias: "property" } }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), Prism.languages.js = Prism.languages.javascript, Prism.languages.actionscript = Prism.languages.extend("javascript", { keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/, operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/ }), Prism.languages.actionscript["class-name"].alias = "function", delete Prism.languages.actionscript.parameter, delete Prism.languages.actionscript["literal-property"], Prism.languages.markup && Prism.languages.insertBefore("actionscript", "string", { xml: { pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/, lookbehind: true, inside: Prism.languages.markup } }), function(e) {
  var n = /#(?!\{).+/, t = { pattern: /#\{[^}]+\}/, alias: "variable" };
  e.languages.coffeescript = e.languages.extend("javascript", { comment: n, string: [{ pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: true }, { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: true, inside: { interpolation: t } }], keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/, "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" } }), e.languages.insertBefore("coffeescript", "comment", { "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" }, "block-regex": { pattern: /\/{3}[\s\S]*?\/{3}/, alias: "regex", inside: { comment: n, interpolation: t } } }), e.languages.insertBefore("coffeescript", "string", { "inline-javascript": { pattern: /`(?:\\[\s\S]|[^\\`])*`/, inside: { delimiter: { pattern: /^`|`$/, alias: "punctuation" }, script: { pattern: /[\s\S]+/, alias: "language-javascript", inside: e.languages.javascript } } }, "multiline-string": [{ pattern: /'''[\s\S]*?'''/, greedy: true, alias: "string" }, { pattern: /"""[\s\S]*?"""/, greedy: true, alias: "string", inside: { interpolation: t } }] }), e.languages.insertBefore("coffeescript", "keyword", { property: /(?!\d)\w+(?=\s*:(?!:))/ }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript;
}(Prism), function(l) {
  var e = l.languages.javadoclike = { parameter: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m, lookbehind: true }, keyword: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: true }, punctuation: /[{}]/ };
  Object.defineProperty(e, "addSupport", { value: function(e2, o) {
    (e2 = "string" == typeof e2 ? [e2] : e2).forEach(function(e3) {
      var n = function(e4) {
        e4.inside || (e4.inside = {}), e4.inside.rest = o;
      }, t = "doc-comment";
      if (a = l.languages[e3]) {
        var a, r = a[t];
        if ((r = r ? r : (a = l.languages.insertBefore(e3, "comment", { "doc-comment": { pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/, lookbehind: true, alias: "comment" } }))[t]) instanceof RegExp && (r = a[t] = { pattern: r }), Array.isArray(r))
          for (var s = 0, i = r.length; s < i; s++)
            r[s] instanceof RegExp && (r[s] = { pattern: r[s] }), n(r[s]);
        else
          n(r);
      }
    });
  } }), e.addSupport(["java", "javascript", "php"], e);
}(Prism), function(e) {
  var n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, n = (e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + n.source + ")*?" + /(?:;|(?=\s*\{))/.source), inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: true, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: true } } }, url: { pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: true, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + n.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + n.source + ")*(?=\\s*\\{)"), lookbehind: true }, string: { pattern: n, greedy: true }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: true }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: true }, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css, e.languages.markup);
  n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
}(Prism), function(e) {
  var n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, n = (e.languages.css.selector = { pattern: e.languages.css.selector.pattern, lookbehind: true, inside: n = { "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/, "pseudo-class": /:[-\w]+/, class: /\.[-\w]+/, id: /#[-\w]+/, attribute: { pattern: RegExp(`\\[(?:[^[\\]"']|` + n.source + ")*\\]"), greedy: true, inside: { punctuation: /^\[|\]$/, "case-sensitivity": { pattern: /(\s)[si]$/i, lookbehind: true, alias: "keyword" }, namespace: { pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/, lookbehind: true, inside: { punctuation: /\|$/ } }, "attr-name": { pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: true }, "attr-value": [n, { pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/, lookbehind: true }], operator: /[|~*^$]?=/ } }, "n-th": [{ pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/, lookbehind: true, inside: { number: /[\dn]+/, operator: /[+-]/ } }, { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: true }], combinator: />|\+|~|\|\|/, punctuation: /[(),]/ } }, e.languages.css.atrule.inside["selector-function-argument"].inside = n, e.languages.insertBefore("css", "property", { variable: { pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i, lookbehind: true } }), { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: true }), t = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: true };
  e.languages.insertBefore("css", "function", { operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: true }, hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" }, color: [{ pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i, lookbehind: true }, { pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i, inside: { unit: n, number: t, function: /[\w-]+(?=\()/, punctuation: /[(),]/ } }], entity: /\\[\da-f]{1,8}/i, unit: n, number: t });
}(Prism), function(e) {
  var n = /[*&][^\s[\]{},]+/, t = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, a = "(?:" + t.source + "(?:[ 	]+" + n.source + ")?|" + n.source + "(?:[ 	]+" + t.source + ")?)", r = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  }), s = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function i(e2, n2) {
    n2 = (n2 || "").replace(/m/g, "") + "m";
    var t2 = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
      return a;
    }).replace(/<<value>>/g, function() {
      return e2;
    });
    return RegExp(t2, n2);
  }
  e.languages.yaml = { scalar: { pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
    return a;
  })), lookbehind: true, alias: "string" }, comment: /#.*/, key: { pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
    return a;
  }).replace(/<<key>>/g, function() {
    return "(?:" + r + "|" + s + ")";
  })), lookbehind: true, greedy: true, alias: "atrule" }, directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: true, alias: "important" }, datetime: { pattern: i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: true, alias: "number" }, boolean: { pattern: i(/false|true/.source, "i"), lookbehind: true, alias: "important" }, null: { pattern: i(/null|~/.source, "i"), lookbehind: true, alias: "important" }, string: { pattern: i(s), lookbehind: true, greedy: true }, number: { pattern: i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: true }, tag: t, important: n, punctuation: /---|[:[\]{}\-,|>?]|\.\.\./ }, e.languages.yml = e.languages.yaml;
}(Prism), function(o) {
  var n = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function e(e2) {
    return e2 = e2.replace(/<inner>/g, function() {
      return n;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e2 + ")");
  }
  var t = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, a = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return t;
  }), r = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source, l = (o.languages.markdown = o.languages.extend("markup", {}), o.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: true, greedy: true, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: o.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + a + r + "(?:" + a + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + a + r + ")(?:" + a + ")*$"), lookbehind: true, inside: { "table-data": { pattern: RegExp(t), inside: o.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + a + ")" + r + "$"), lookbehind: true, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + a + "$"), inside: { "table-header": { pattern: RegExp(t), alias: "important", inside: o.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: true, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: true, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: true }, "code-language": { pattern: /^(```).+/, lookbehind: true }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: true, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: true, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: true, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: true }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: e(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: true, greedy: true, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: true, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: e(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: true, greedy: true, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: true, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: e(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: true, greedy: true, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: true, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: true, greedy: true, alias: ["code", "keyword"] }, url: { pattern: e(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: true, greedy: true, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: true, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: true }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: true }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: true } } } }), ["url", "bold", "italic", "strike"].forEach(function(n2) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(e2) {
      n2 !== e2 && (o.languages.markdown[n2].inside.content.inside[e2] = o.languages.markdown[e2]);
    });
  }), o.hooks.add("after-tokenize", function(e2) {
    "markdown" !== e2.language && "md" !== e2.language || !function e3(n2) {
      if (n2 && "string" != typeof n2)
        for (var t2 = 0, a2 = n2.length; t2 < a2; t2++) {
          var r2, s = n2[t2];
          "code" !== s.type ? e3(s.content) : (r2 = s.content[1], s = s.content[3], r2 && s && "code-language" === r2.type && "code-block" === s.type && "string" == typeof r2.content && (r2 = r2.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), r2 = "language-" + (r2 = (/[a-z][\w-]*/i.exec(r2) || [""])[0].toLowerCase()), s.alias ? "string" == typeof s.alias ? s.alias = [s.alias, r2] : s.alias.push(r2) : s.alias = [r2]));
        }
    }(e2.tokens);
  }), o.hooks.add("wrap", function(e2) {
    if ("code-block" === e2.type) {
      for (var n2 = "", t2 = 0, a2 = e2.classes.length; t2 < a2; t2++) {
        var r2 = e2.classes[t2], r2 = /language-(.+)/.exec(r2);
        if (r2) {
          n2 = r2[1];
          break;
        }
      }
      var s, i = o.languages[n2];
      i ? e2.content = o.highlight(function(e3) {
        e3 = e3.replace(l, "");
        return e3 = e3.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(e4, n3) {
          var t3;
          return "#" === (n3 = n3.toLowerCase())[0] ? (t3 = "x" === n3[1] ? parseInt(n3.slice(2), 16) : Number(n3.slice(1)), c(t3)) : u[n3] || e4;
        });
      }(e2.content), i, n2) : n2 && "none" !== n2 && o.plugins.autoloader && (s = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(1e16 * Math.random()), e2.attributes.id = s, o.plugins.autoloader.loadLanguages(n2, function() {
        var e3 = document.getElementById(s);
        e3 && (e3.innerHTML = o.highlight(e3.textContent, o.languages[n2], n2));
      }));
    }
  }), RegExp(o.languages.markup.tag.pattern.source, "gi")), u = { amp: "&", lt: "<", gt: ">", quot: '"' }, c = String.fromCodePoint || String.fromCharCode;
  o.languages.md = o.languages.markdown;
}(Prism), Prism.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: true, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: true, inside: Prism.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: true }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: true }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: true }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, Prism.hooks.add("after-tokenize", function(e) {
  if ("graphql" === e.language)
    for (var i = e.tokens.filter(function(e2) {
      return "string" != typeof e2 && "comment" !== e2.type && "scalar" !== e2.type;
    }), o = 0; o < i.length; ) {
      var n = i[o++];
      if ("keyword" === n.type && "mutation" === n.content) {
        var t = [];
        if (p(["definition-mutation", "punctuation"]) && "(" === c(1).content) {
          o += 2;
          var a = d(/^\($/, /^\)$/);
          if (-1 === a)
            continue;
          for (; o < a; o++) {
            var r = c(0);
            "variable" === r.type && (g(r, "variable-input"), t.push(r.content));
          }
          o = a + 1;
        }
        if (p(["punctuation", "property-query"]) && "{" === c(0).content && (o++, g(c(0), "property-mutation"), 0 < t.length)) {
          var s = d(/^\{$/, /^\}$/);
          if (-1 !== s)
            for (var l = o; l < s; l++) {
              var u = i[l];
              "variable" === u.type && 0 <= t.indexOf(u.content) && g(u, "variable-input");
            }
        }
      }
    }
  function c(e2) {
    return i[o + e2];
  }
  function p(e2, n2) {
    n2 = n2 || 0;
    for (var t2 = 0; t2 < e2.length; t2++) {
      var a2 = c(t2 + n2);
      if (!a2 || a2.type !== e2[t2])
        return;
    }
    return 1;
  }
  function d(e2, n2) {
    for (var t2 = 1, a2 = o; a2 < i.length; a2++) {
      var r2 = i[a2], s2 = r2.content;
      if ("punctuation" === r2.type && "string" == typeof s2) {
        if (e2.test(s2))
          t2++;
        else if (n2.test(s2) && 0 === --t2)
          return a2;
      }
    }
    return -1;
  }
  function g(e2, n2) {
    var t2 = e2.alias;
    t2 ? Array.isArray(t2) || (e2.alias = t2 = [t2]) : e2.alias = t2 = [], t2.push(n2);
  }
}), Prism.languages.sql = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: true }, variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: true }, /@[\w.$]+/], string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: true, lookbehind: true }, identifier: { pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/, greedy: true, lookbehind: true, inside: { punctuation: /^`|`$/ } }, function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i, keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i, boolean: /\b(?:FALSE|NULL|TRUE)\b/i, number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i, operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i, punctuation: /[;[\]()`,.]/ }, function(b) {
  var e = b.languages.javascript["template-string"], t = e.pattern.source, m = e.inside.interpolation, f = m.inside["interpolation-punctuation"], s = m.pattern.source;
  function n(e2, n2) {
    if (b.languages[e2])
      return { pattern: RegExp("((?:" + n2 + ")\\s*)" + t), lookbehind: true, greedy: true, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, "embedded-code": { pattern: /[\s\S]+/, alias: e2 } } };
  }
  function h(e2, n2, t2) {
    e2 = { code: e2, grammar: n2, language: t2 };
    return b.hooks.run("before-tokenize", e2), e2.tokens = b.tokenize(e2.code, e2.grammar), b.hooks.run("after-tokenize", e2), e2.tokens;
  }
  function l(a2, e2, r) {
    var n2 = b.tokenize(a2, { interpolation: { pattern: RegExp(s), lookbehind: true } }), p = 0, d = {}, n2 = h(n2.map(function(e3) {
      if ("string" == typeof e3)
        return e3;
      for (var n3, t2, e3 = e3.content; -1 !== a2.indexOf((t2 = p++, n3 = "___" + r.toUpperCase() + "_" + t2 + "___")); )
        ;
      return d[n3] = e3, n3;
    }).join(""), e2, r), g = Object.keys(d);
    return p = 0, function e3(n3) {
      for (var t2 = 0; t2 < n3.length; t2++) {
        if (p >= g.length)
          return;
        var a3, r2, s2, i, o, l2, u2, c = n3[t2];
        "string" == typeof c || "string" == typeof c.content ? (a3 = g[p], -1 !== (u2 = (l2 = "string" == typeof c ? c : c.content).indexOf(a3)) && (++p, r2 = l2.substring(0, u2), o = d[a3], s2 = void 0, (i = {})["interpolation-punctuation"] = f, 3 === (i = b.tokenize(o, i)).length && ((s2 = [1, 1]).push.apply(s2, h(i[1], b.languages.javascript, "javascript")), i.splice.apply(i, s2)), s2 = new b.Token("interpolation", i, m.alias, o), i = l2.substring(u2 + a3.length), o = [], r2 && o.push(r2), o.push(s2), i && (e3(l2 = [i]), o.push.apply(o, l2)), "string" == typeof c ? (n3.splice.apply(n3, [t2, 1].concat(o)), t2 += o.length - 1) : c.content = o)) : (u2 = c.content, Array.isArray(u2) ? e3(u2) : e3([u2]));
      }
    }(n2), new b.Token(r, n2, "language-" + r, a2);
  }
  b.languages.javascript["template-string"] = [n("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), n("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), n("svg", /\bsvg/.source), n("markdown", /\b(?:markdown|md)/.source), n("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), n("sql", /\bsql/.source), e].filter(Boolean);
  var a = { javascript: true, js: true, typescript: true, ts: true, jsx: true, tsx: true };
  function u(e2) {
    return "string" == typeof e2 ? e2 : Array.isArray(e2) ? e2.map(u).join("") : u(e2.content);
  }
  b.hooks.add("after-tokenize", function(e2) {
    e2.language in a && !function e3(n2) {
      for (var t2 = 0, a2 = n2.length; t2 < a2; t2++) {
        var r, s2, i, o = n2[t2];
        "string" != typeof o && (r = o.content, Array.isArray(r) ? "template-string" === o.type ? (o = r[1], 3 === r.length && "string" != typeof o && "embedded-code" === o.type && (s2 = u(o), o = o.alias, o = Array.isArray(o) ? o[0] : o, i = b.languages[o]) && (r[1] = l(s2, i, o))) : e3(r) : "string" != typeof r && e3([r]));
      }
    }(e2.tokens);
  });
}(Prism), function(e) {
  e.languages.typescript = e.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: true, greedy: true, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
  var n = e.languages.extend("typescript", {});
  delete n["class-name"], e.languages.typescript["class-name"].inside = n, e.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: true, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: n } } } }), e.languages.ts = e.languages.typescript;
}(Prism), function(e) {
  var n = e.languages.javascript, t = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source, a = "(@(?:arg|argument|param|property)\\s+(?:" + t + "\\s+)?)";
  e.languages.jsdoc = e.languages.extend("javadoclike", { parameter: { pattern: RegExp(a + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source), lookbehind: true, inside: { punctuation: /\./ } } }), e.languages.insertBefore("jsdoc", "keyword", { "optional-parameter": { pattern: RegExp(a + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source), lookbehind: true, inside: { parameter: { pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/, lookbehind: true, inside: { punctuation: /\./ } }, code: { pattern: /(=)[\s\S]*(?=\]$)/, lookbehind: true, inside: n, alias: "language-javascript" }, punctuation: /[=[\]]/ } }, "class-name": [{ pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function() {
    return t;
  })), lookbehind: true, inside: { punctuation: /\./ } }, { pattern: RegExp("(@[a-z]+\\s+)" + t), lookbehind: true, inside: { string: n.string, number: n.number, boolean: n.boolean, keyword: e.languages.typescript.keyword, operator: /=>|\.\.\.|[&|?:*]/, punctuation: /[.,;=<>{}()[\]]/ } }], example: { pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/, lookbehind: true, inside: { code: { pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m, lookbehind: true, inside: n, alias: "language-javascript" } } } }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
}(Prism), function(e) {
  e.languages.flow = e.languages.extend("javascript", {}), e.languages.insertBefore("flow", "keyword", { type: [{ pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/, alias: "class-name" }] }), e.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete e.languages.flow.parameter, e.languages.insertBefore("flow", "operator", { "flow-punctuation": { pattern: /\{\||\|\}/, alias: "punctuation" } }), Array.isArray(e.languages.flow.keyword) || (e.languages.flow.keyword = [e.languages.flow.keyword]), e.languages.flow.keyword.unshift({ pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/, lookbehind: true }, { pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/, lookbehind: true });
}(Prism), Prism.languages.n4js = Prism.languages.extend("javascript", { keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/ }), Prism.languages.insertBefore("n4js", "constant", { annotation: { pattern: /@+\w+/, alias: "operator" } }), Prism.languages.n4jsd = Prism.languages.n4js, function(e) {
  function n(e2, n2) {
    return RegExp(e2.replace(/<ID>/g, function() {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), n2);
  }
  e.languages.insertBefore("javascript", "function-variable", { "method-variable": { pattern: RegExp("(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source), lookbehind: true, alias: ["function-variable", "method", "function", "property-access"] } }), e.languages.insertBefore("javascript", "function", { method: { pattern: RegExp("(\\.\\s*)" + e.languages.javascript.function.source), lookbehind: true, alias: ["function", "property-access"] } }), e.languages.insertBefore("javascript", "constant", { "known-class-name": [{ pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/, alias: "class-name" }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }] }), e.languages.insertBefore("javascript", "keyword", { imports: { pattern: n(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source), lookbehind: true, inside: e.languages.javascript }, exports: { pattern: n(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source), lookbehind: true, inside: e.languages.javascript } }), e.languages.javascript.keyword.unshift({ pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" }, { pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/, alias: "control-flow" }, { pattern: /\bnull\b/, alias: ["null", "nil"] }, { pattern: /\bundefined\b/, alias: "nil" }), e.languages.insertBefore("javascript", "operator", { spread: { pattern: /\.{3}/, alias: "operator" }, arrow: { pattern: /=>/, alias: "operator" } }), e.languages.insertBefore("javascript", "punctuation", { "property-access": { pattern: n(/(\.\s*)#?<ID>/.source), lookbehind: true }, "maybe-class-name": { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: true }, dom: { pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/, alias: "variable" }, console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" } });
  for (var t = ["function", "function-variable", "method", "method-variable", "property-access"], a = 0; a < t.length; a++) {
    var r = t[a], s = e.languages.javascript[r], r = (s = "RegExp" === e.util.type(s) ? e.languages.javascript[r] = { pattern: s } : s).inside || {};
    (s.inside = r)["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
}(Prism), function(s) {
  var e = s.util.clone(s.languages.javascript), t = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, a = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, r = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function n(e2, n2) {
    return e2 = e2.replace(/<S>/g, function() {
      return t;
    }).replace(/<BRACES>/g, function() {
      return a;
    }).replace(/<SPREAD>/g, function() {
      return r;
    }), RegExp(e2, n2);
  }
  r = n(r).source, s.languages.jsx = s.languages.extend("markup", e), s.languages.jsx.tag.pattern = n(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), s.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, s.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, s.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, s.languages.jsx.tag.inside.comment = e.comment, s.languages.insertBefore("inside", "attr-name", { spread: { pattern: n(/<SPREAD>/.source), inside: s.languages.jsx } }, s.languages.jsx.tag), s.languages.insertBefore("inside", "special-attr", { script: { pattern: n(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: s.languages.jsx } } }, s.languages.jsx.tag);
  function i(e2) {
    for (var n2 = [], t2 = 0; t2 < e2.length; t2++) {
      var a2 = e2[t2], r2 = false;
      "string" != typeof a2 && ("tag" === a2.type && a2.content[0] && "tag" === a2.content[0].type ? "</" === a2.content[0].content[0].content ? 0 < n2.length && n2[n2.length - 1].tagName === o(a2.content[0].content[1]) && n2.pop() : "/>" !== a2.content[a2.content.length - 1].content && n2.push({ tagName: o(a2.content[0].content[1]), openedBraces: 0 }) : 0 < n2.length && "punctuation" === a2.type && "{" === a2.content ? n2[n2.length - 1].openedBraces++ : 0 < n2.length && 0 < n2[n2.length - 1].openedBraces && "punctuation" === a2.type && "}" === a2.content ? n2[n2.length - 1].openedBraces-- : r2 = true), (r2 || "string" == typeof a2) && 0 < n2.length && 0 === n2[n2.length - 1].openedBraces && (r2 = o(a2), t2 < e2.length - 1 && ("string" == typeof e2[t2 + 1] || "plain-text" === e2[t2 + 1].type) && (r2 += o(e2[t2 + 1]), e2.splice(t2 + 1, 1)), 0 < t2 && ("string" == typeof e2[t2 - 1] || "plain-text" === e2[t2 - 1].type) && (r2 = o(e2[t2 - 1]) + r2, e2.splice(t2 - 1, 1), t2--), e2[t2] = new s.Token("plain-text", r2, null, r2)), a2.content && "string" != typeof a2.content && i(a2.content);
    }
  }
  var o = function(e2) {
    return e2 ? "string" == typeof e2 ? e2 : "string" == typeof e2.content ? e2.content : e2.content.map(o).join("") : "";
  };
  s.hooks.add("after-tokenize", function(e2) {
    "jsx" !== e2.language && "tsx" !== e2.language || i(e2.tokens);
  });
}(Prism), function(e) {
  var n = e.util.clone(e.languages.typescript), n = (e.languages.tsx = e.languages.extend("jsx", n), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"], e.languages.tsx.tag);
  n.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")", n.pattern.flags), n.lookbehind = true;
}(Prism), Prism.languages.swift = { comment: { pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/, lookbehind: true, greedy: true }, "string-literal": [{ pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source), lookbehind: true, greedy: true, inside: { interpolation: { pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: true, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\\($/, alias: "punctuation" }, punctuation: /\\(?=[\r\n])/, string: /[\s\S]+/ } }, { pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"), lookbehind: true, greedy: true, inside: { interpolation: { pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: true, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\#+\($/, alias: "punctuation" }, string: /[\s\S]+/ } }], directive: { pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"), alias: "property", inside: { "directive-name": /^#\w+/, boolean: /\b(?:false|true)\b/, number: /\b\d+(?:\.\d+)*\b/, operator: /!|&&|\|\||[<>]=?/, punctuation: /[(),]/ } }, literal: { pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/, alias: "constant" }, "other-directive": { pattern: /#\w+\b/, alias: "property" }, attribute: { pattern: /@\w+/, alias: "atrule" }, "function-definition": { pattern: /(\bfunc\s+)\w+/, lookbehind: true, alias: "function" }, label: { pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/, lookbehind: true, alias: "important" }, keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/, boolean: /\b(?:false|true)\b/, nil: { pattern: /\bnil\b/, alias: "constant" }, "short-argument": /\$\d+\b/, omit: { pattern: /\b_\b/, alias: "keyword" }, number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i, "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/, function: /\b[a-z_]\w*(?=\s*\()/i, constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/, operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/, punctuation: /[{}[\]();,.:\\]/ }, Prism.languages.swift["string-literal"].forEach(function(e) {
  e.inside.interpolation.inside = Prism.languages.swift;
}), function(e) {
  e.languages.kotlin = e.languages.extend("clike", { keyword: { pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/, lookbehind: true }, function: [{ pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: true }, { pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/, lookbehind: true, greedy: true }], number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/, operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/ }), delete e.languages.kotlin["class-name"];
  var n = { "interpolation-punctuation": { pattern: /^\$\{?|\}$/, alias: "punctuation" }, expression: { pattern: /[\s\S]+/, inside: e.languages.kotlin } };
  e.languages.insertBefore("kotlin", "string", { "string-literal": [{ pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/, alias: "multiline", inside: { interpolation: { pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i, inside: n }, string: /[\s\S]+/ } }, { pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/, alias: "singleline", inside: { interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i, lookbehind: true, inside: n }, string: /[\s\S]+/ } }], char: { pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/, greedy: true } }), delete e.languages.kotlin.string, e.languages.insertBefore("kotlin", "keyword", { annotation: { pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, alias: "builtin" } }), e.languages.insertBefore("kotlin", "function", { label: { pattern: /\b\w+@|@\w+\b/, alias: "symbol" } }), e.languages.kt = e.languages.kotlin, e.languages.kts = e.languages.kotlin;
}(Prism), Prism.languages.c = Prism.languages.extend("clike", { comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: true }, string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: true }, "class-name": { pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/, lookbehind: true }, keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/, function: /\b[a-z_]\w*(?=\s*\()/i, number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i, operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/ }), Prism.languages.insertBefore("c", "string", { char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: true } }), Prism.languages.insertBefore("c", "string", { macro: { pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im, lookbehind: true, greedy: true, alias: "property", inside: { string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: true }, Prism.languages.c.string], char: Prism.languages.c.char, comment: Prism.languages.c.comment, "macro-name": [{ pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: true }, { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: true, alias: "function" }], directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: true, alias: "keyword" }, "directive-hash": /^#/, punctuation: /##|\\(?=[\r\n])/, expression: { pattern: /\S[\s\S]*/, inside: Prism.languages.c } } } }), Prism.languages.insertBefore("c", "function", { constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/ }), delete Prism.languages.c.boolean, Prism.languages.objectivec = Prism.languages.extend("c", { string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: true }, keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/, operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/ }), delete Prism.languages.objectivec["class-name"], Prism.languages.objc = Prism.languages.objectivec, Prism.languages.reason = Prism.languages.extend("clike", { string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: true }, "class-name": /\b[A-Z]\w*/, keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/, operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/ }), Prism.languages.insertBefore("reason", "class-name", { char: { pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/, greedy: true }, constructor: /\b[A-Z]\w*\b(?!\s*\.)/, label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" } }), delete Prism.languages.reason.function, function(e) {
  for (var n = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, t = 0; t < 2; t++)
    n = n.replace(/<self>/g, function() {
      return n;
    });
  n = n.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), e.languages.rust = { comment: [{ pattern: RegExp(/(^|[^\\])/.source + n), lookbehind: true, greedy: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/, greedy: true }, char: { pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/, greedy: true }, attribute: { pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/, greedy: true, alias: "attr-name", inside: { string: null } }, "closure-params": { pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/, lookbehind: true, greedy: true, inside: { "closure-punctuation": { pattern: /^\||\|$/, alias: "punctuation" }, rest: null } }, "lifetime-annotation": { pattern: /'\w+/, alias: "symbol" }, "fragment-specifier": { pattern: /(\$\w+:)[a-z]+/, lookbehind: true, alias: "punctuation" }, variable: /\$\w+/, "function-definition": { pattern: /(\bfn\s+)\w+/, lookbehind: true, alias: "function" }, "type-definition": { pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/, lookbehind: true, alias: "class-name" }, "module-declaration": [{ pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/, lookbehind: true, alias: "namespace" }, { pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/, lookbehind: true, alias: "namespace", inside: { punctuation: /::/ } }], keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/], function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/, macro: { pattern: /\b\w+!/, alias: "property" }, constant: /\b[A-Z_][A-Z_\d]+\b/, "class-name": /\b[A-Z]\w*\b/, namespace: { pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/, inside: { punctuation: /::/ } }, number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/, boolean: /\b(?:false|true)\b/, punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/, operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/ }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string;
}(Prism), Prism.languages.go = Prism.languages.extend("clike", { string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: true, greedy: true }, keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/, boolean: /\b(?:_|false|iota|nil|true)\b/, number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i], operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./, builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/ }), Prism.languages.insertBefore("go", "string", { char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: true } }), delete Prism.languages.go["class-name"], function(e) {
  var n = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return n.source;
  });
  e.languages.cpp = e.languages.extend("c", { "class-name": [{ pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
    return n.source;
  })), lookbehind: true }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/], keyword: n, number: { pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i, greedy: true }, operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/, boolean: /\b(?:false|true)\b/ }), e.languages.insertBefore("cpp", "string", { module: { pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
    return t;
  }) + ")"), lookbehind: true, greedy: true, inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ } }, "raw-string": { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: true } }), e.languages.insertBefore("cpp", "keyword", { "generic-function": { pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i, inside: { function: /^\w+/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: e.languages.cpp } } } }), e.languages.insertBefore("cpp", "operator", { "double-colon": { pattern: /::/, alias: "punctuation" } }), e.languages.insertBefore("cpp", "class-name", { "base-clause": { pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/, lookbehind: true, greedy: true, inside: e.languages.extend("cpp", {}) } }), e.languages.insertBefore("inside", "double-colon", { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i }, e.languages.cpp["base-clause"]);
}(Prism), Prism.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: true, greedy: true }, "string-interpolation": { pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: true, inside: { interpolation: { pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/, lookbehind: true, inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: true }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } }, "triple-quoted-string": { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: true, alias: "string" }, string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: true }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: true }, "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: true }, decorator: { pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m, lookbehind: true, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } }, keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:False|None|True)\b/, number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i, operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python, Prism.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: true, greedy: true }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: true, greedy: true }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: true }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, Prism.languages.webmanifest = Prism.languages.json;

// src/themes/index.ts
var themes_exports = {};
__export(themes_exports, {
  dracula: () => dracula_default,
  duotoneDark: () => duotoneDark_default,
  duotoneLight: () => duotoneLight_default,
  github: () => github_default,
  gruvboxMaterialDark: () => gruvboxMaterialDark_default,
  gruvboxMaterialLight: () => gruvboxMaterialLight_default,
  jettwaveDark: () => jettwaveDark_default,
  jettwaveLight: () => jettwaveLight_default,
  nightOwl: () => nightOwl_default,
  nightOwlLight: () => nightOwlLight_default,
  oceanicNext: () => oceanicNext_default,
  okaidia: () => okaidia_default,
  oneDark: () => oneDark_default,
  oneLight: () => oneLight_default,
  palenight: () => palenight_default,
  shadesOfPurple: () => shadesOfPurple_default,
  synthwave84: () => synthwave84_default,
  ultramin: () => ultramin_default,
  vsDark: () => vsDark_default,
  vsLight: () => vsLight_default
});

// src/themes/dracula.ts
var theme = {
  plain: {
    color: "#F8F8F2",
    backgroundColor: "#282A36"
  },
  styles: [
    {
      types: ["prolog", "constant", "builtin"],
      style: {
        color: "rgb(189, 147, 249)"
      }
    },
    {
      types: ["inserted", "function"],
      style: {
        color: "rgb(80, 250, 123)"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(255, 85, 85)"
      }
    },
    {
      types: ["changed"],
      style: {
        color: "rgb(255, 184, 108)"
      }
    },
    {
      types: ["punctuation", "symbol"],
      style: {
        color: "rgb(248, 248, 242)"
      }
    },
    {
      types: ["string", "char", "tag", "selector"],
      style: {
        color: "rgb(255, 121, 198)"
      }
    },
    {
      types: ["keyword", "variable"],
      style: {
        color: "rgb(189, 147, 249)",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(98, 114, 164)"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(241, 250, 140)"
      }
    }
  ]
};
var dracula_default = theme;

// src/themes/duotoneDark.ts
var theme2 = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#6c6783"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#e09142"
      }
    },
    {
      types: ["property", "function"],
      style: {
        color: "#9a86fd"
      }
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#eeebff"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "#c4b9fe"
      }
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "atrule",
        "placeholder",
        "variable"
      ],
      style: {
        color: "#ffcc99"
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through"
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["important"],
      style: {
        color: "#c4b9fe"
      }
    }
  ]
};
var duotoneDark_default = theme2;

// src/themes/duotoneLight.ts
var theme3 = {
  plain: {
    backgroundColor: "#faf8f5",
    color: "#728fcb"
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#b6ad9a"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#063289"
      }
    },
    {
      types: ["property", "function"],
      style: {
        color: "#b29762"
      }
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#2d2006"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "#896724"
      }
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "atrule"
      ],
      style: {
        color: "#728fcb"
      }
    },
    {
      types: ["placeholder", "variable"],
      style: {
        color: "#93abdc"
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through"
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["important"],
      style: {
        color: "#896724"
      }
    }
  ]
};
var duotoneLight_default = theme3;

// src/themes/github.ts
var theme4 = {
  plain: {
    color: "#393A34",
    backgroundColor: "#f6f8fa"
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#999988",
        fontStyle: "italic"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#e3116c"
      }
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#393A34"
      }
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted"
      ],
      style: {
        color: "#36acaa"
      }
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: "#00a4db"
      }
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: "#d73a49"
      }
    },
    {
      types: ["function-variable"],
      style: {
        color: "#6f42c1"
      }
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: "#00009f"
      }
    }
  ]
};
var github_default = theme4;

// src/themes/nightOwl.ts
var theme5 = {
  plain: {
    color: "#d6deeb",
    backgroundColor: "#011627"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic"
      }
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "rgb(173, 219, 103)",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(99, 119, 119)",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "url"],
      style: {
        color: "rgb(173, 219, 103)"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(214, 222, 235)"
      }
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)"
      }
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "rgb(130, 170, 255)"
      }
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "rgb(199, 146, 234)"
      }
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(255, 203, 139)"
      }
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "rgb(127, 219, 202)"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)"
      }
    },
    {
      types: ["property"],
      style: {
        color: "rgb(128, 203, 196)"
      }
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)"
      }
    }
  ]
};
var nightOwl_default = theme5;

// src/themes/nightOwlLight.ts
var theme6 = {
  plain: {
    color: "#403f53",
    backgroundColor: "#FBFBFB"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic"
      }
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "rgb(72, 118, 214)",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(152, 159, 177)",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "builtin", "char", "constant", "url"],
      style: {
        color: "rgb(72, 118, 214)"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(201, 103, 101)"
      }
    },
    {
      types: ["number"],
      style: {
        color: "rgb(170, 9, 130)"
      }
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "rgb(153, 76, 195)"
      }
    },
    {
      types: ["function", "selector", "doctype"],
      style: {
        color: "rgb(153, 76, 195)",
        fontStyle: "italic"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(17, 17, 17)"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "rgb(153, 76, 195)"
      }
    },
    {
      types: ["operator", "property", "keyword", "namespace"],
      style: {
        color: "rgb(12, 150, 155)"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(188, 84, 84)"
      }
    }
  ]
};
var nightOwlLight_default = theme6;

// src/themes/oceanicNext.ts
var colors = {
  char: "#D8DEE9",
  comment: "#999999",
  keyword: "#c5a5c5",
  primitive: "#5a9bcf",
  string: "#8dc891",
  variable: "#d7deea",
  boolean: "#ff8b50",
  punctuation: "#5FB3B3",
  tag: "#fc929e",
  function: "#79b6f2",
  className: "#FAC863",
  method: "#6699CC",
  operator: "#fc929e"
};
var theme7 = {
  plain: {
    backgroundColor: "#282c34",
    color: "#ffffff"
  },
  styles: [
    {
      types: ["attr-name"],
      style: {
        color: colors.keyword
      }
    },
    {
      types: ["attr-value"],
      style: {
        color: colors.string
      }
    },
    {
      types: [
        "comment",
        "block-comment",
        "prolog",
        "doctype",
        "cdata",
        "shebang"
      ],
      style: {
        color: colors.comment
      }
    },
    {
      types: [
        "property",
        "number",
        "function-name",
        "constant",
        "symbol",
        "deleted"
      ],
      style: {
        color: colors.primitive
      }
    },
    {
      types: ["boolean"],
      style: {
        color: colors.boolean
      }
    },
    {
      types: ["tag"],
      style: {
        color: colors.tag
      }
    },
    {
      types: ["string"],
      style: {
        color: colors.string
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: colors.string
      }
    },
    {
      types: ["selector", "char", "builtin", "inserted"],
      style: {
        color: colors.char
      }
    },
    {
      types: ["function"],
      style: {
        color: colors.function
      }
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: {
        color: colors.variable
      }
    },
    {
      types: ["keyword"],
      style: {
        color: colors.keyword
      }
    },
    {
      types: ["atrule", "class-name"],
      style: {
        color: colors.className
      }
    },
    {
      types: ["important"],
      style: {
        fontWeight: "400"
      }
    },
    {
      types: ["bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    }
  ]
};
var oceanicNext_default = theme7;

// src/themes/okaidia.ts
var theme8 = {
  plain: {
    color: "#f8f8f2",
    backgroundColor: "#272822"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "#f92672",
        fontStyle: "italic"
      }
    },
    {
      types: ["inserted"],
      style: {
        color: "rgb(173, 219, 103)",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "#8292a2",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "url"],
      style: {
        color: "#a6e22e"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "#f8f8f2"
      }
    },
    {
      types: ["number"],
      style: {
        color: "#ae81ff"
      }
    },
    {
      types: ["builtin", "char", "constant", "function", "class-name"],
      style: {
        color: "#e6db74"
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: "#f8f8f2"
      }
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "#a6e22e",
        fontStyle: "italic"
      }
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "#66d9ef"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "#ae81ff"
      }
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
        opacity: 0.7
      }
    },
    {
      types: ["tag", "property"],
      style: {
        color: "#f92672"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "#a6e22e !important"
      }
    },
    {
      types: ["doctype"],
      style: {
        color: "#8292a2"
      }
    },
    {
      types: ["rule"],
      style: {
        color: "#e6db74"
      }
    }
  ]
};
var okaidia_default = theme8;

// src/themes/palenight.ts
var theme9 = {
  plain: {
    color: "#bfc7d5",
    backgroundColor: "#292d3e"
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgb(105, 112, 152)",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "inserted"],
      style: {
        color: "rgb(195, 232, 141)"
      }
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)"
      }
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "rgb(130, 170, 255)"
      }
    },
    {
      types: ["punctuation", "selector"],
      style: {
        color: "rgb(199, 146, 234)"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(191, 199, 213)"
      }
    },
    {
      types: ["class-name", "attr-name"],
      style: {
        color: "rgb(255, 203, 107)"
      }
    },
    {
      types: ["tag", "deleted"],
      style: {
        color: "rgb(255, 85, 114)"
      }
    },
    {
      types: ["operator"],
      style: {
        color: "rgb(137, 221, 255)"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)"
      }
    },
    {
      types: ["keyword"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic"
      }
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)"
      }
    },
    {
      types: ["url"],
      style: {
        color: "rgb(221, 221, 221)"
      }
    }
  ]
};
var palenight_default = theme9;

// src/themes/shadesOfPurple.ts
var theme10 = {
  plain: {
    color: "#9EFEFF",
    backgroundColor: "#2D2A55"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(255, 238, 128)"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)"
      }
    },
    {
      types: ["inserted"],
      style: {
        color: "rgb(173, 219, 103)"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(179, 98, 255)",
        fontStyle: "italic"
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: "rgb(255, 255, 255)"
      }
    },
    {
      types: ["constant"],
      style: {
        color: "rgb(255, 98, 140)"
      }
    },
    {
      types: ["string", "url"],
      style: {
        color: "rgb(165, 255, 144)"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(255, 238, 128)"
      }
    },
    {
      types: ["number", "boolean"],
      style: {
        color: "rgb(255, 98, 140)"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(255, 180, 84)"
      }
    },
    {
      types: [
        "keyword",
        "operator",
        "property",
        "namespace",
        "tag",
        "selector",
        "doctype"
      ],
      style: {
        color: "rgb(255, 157, 0)"
      }
    },
    {
      types: ["builtin", "char", "constant", "function", "class-name"],
      style: {
        color: "rgb(250, 208, 0)"
      }
    }
  ]
};
var shadesOfPurple_default = theme10;

// src/themes/synthwave84.ts
var theme11 = {
  plain: {
    backgroundColor: "linear-gradient(to bottom, #2a2139 75%, #34294f)",
    backgroundImage: "#34294f",
    color: "#f92aad",
    textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
  },
  styles: [
    {
      types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#495495",
        fontStyle: "italic"
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: "#ccc"
      }
    },
    {
      types: [
        "tag",
        "attr-name",
        "namespace",
        "number",
        "unit",
        "hexcode",
        "deleted"
      ],
      style: {
        color: "#e2777a"
      }
    },
    {
      types: ["property", "selector"],
      style: {
        color: "#72f1b8",
        textShadow: "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"
      }
    },
    {
      types: ["function-name"],
      style: {
        color: "#6196cc"
      }
    },
    {
      types: ["boolean", "selector-id", "function"],
      style: {
        color: "#fdfdfd",
        textShadow: "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"
      }
    },
    {
      types: ["class-name", "maybe-class-name", "builtin"],
      style: {
        color: "#fff5f6",
        textShadow: "0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"
      }
    },
    {
      types: ["constant", "symbol"],
      style: {
        color: "#f92aad",
        textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
      }
    },
    {
      types: ["important", "atrule", "keyword", "selector-class"],
      style: {
        color: "#f4eee4",
        textShadow: "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
      }
    },
    {
      types: ["string", "char", "attr-value", "regex", "variable"],
      style: {
        color: "#f87c32"
      }
    },
    {
      types: ["parameter"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["entity", "url"],
      style: {
        color: "#67cdcc"
      }
    },
    {
      types: ["operator"],
      style: {
        color: "ffffffee"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["entity"],
      style: {
        cursor: "help"
      }
    },
    {
      types: ["inserted"],
      style: {
        color: "green"
      }
    }
  ]
};
var synthwave84_default = theme11;

// src/themes/ultramin.ts
var theme12 = {
  plain: {
    color: "#282a2e",
    backgroundColor: "#ffffff"
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgb(197, 200, 198)"
      }
    },
    {
      types: ["string", "number", "builtin", "variable"],
      style: {
        color: "rgb(150, 152, 150)"
      }
    },
    {
      types: ["class-name", "function", "tag", "attr-name"],
      style: {
        color: "rgb(40, 42, 46)"
      }
    }
  ]
};
var ultramin_default = theme12;

// src/themes/vsDark.ts
var theme13 = {
  plain: {
    color: "#9CDCFE",
    backgroundColor: "#1E1E1E"
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "rgb(0, 0, 128)"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(106, 153, 85)"
      }
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: {
        color: "rgb(86, 156, 214)"
      }
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "rgb(181, 206, 168)"
      }
    },
    {
      types: ["constant"],
      style: {
        color: "rgb(100, 102, 149)"
      }
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "rgb(156, 220, 254)"
      }
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: {
        color: "rgb(206, 145, 120)"
      }
    },
    {
      types: ["selector"],
      style: {
        color: "rgb(215, 186, 125)"
      }
    },
    {
      // Fix tag color
      types: ["tag"],
      style: {
        color: "rgb(78, 201, 176)"
      }
    },
    {
      // Fix tag color for HTML
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "rgb(86, 156, 214)"
      }
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "rgb(212, 212, 212)"
      }
    },
    {
      // Fix punctuation color for HTML
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#808080"
      }
    },
    {
      types: ["function"],
      style: {
        color: "rgb(220, 220, 170)"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(78, 201, 176)"
      }
    },
    {
      types: ["char"],
      style: {
        color: "rgb(209, 105, 105)"
      }
    }
  ]
};
var vsDark_default = theme13;

// src/themes/vsLight.ts
var theme14 = {
  plain: {
    color: "#000000",
    backgroundColor: "#ffffff"
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgb(0, 128, 0)"
      }
    },
    {
      types: ["builtin"],
      style: {
        color: "rgb(0, 112, 193)"
      }
    },
    {
      types: ["number", "variable", "inserted"],
      style: {
        color: "rgb(9, 134, 88)"
      }
    },
    {
      types: ["operator"],
      style: {
        color: "rgb(0, 0, 0)"
      }
    },
    {
      types: ["constant", "char"],
      style: {
        color: "rgb(129, 31, 63)"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "rgb(128, 0, 0)"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(255, 0, 0)"
      }
    },
    {
      types: ["deleted", "string"],
      style: {
        color: "rgb(163, 21, 21)"
      }
    },
    {
      types: ["changed", "punctuation"],
      style: {
        color: "rgb(4, 81, 165)"
      }
    },
    {
      types: ["function", "keyword"],
      style: {
        color: "rgb(0, 0, 255)"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(38, 127, 153)"
      }
    }
  ]
};
var vsLight_default = theme14;

// src/themes/jettwaveDark.ts
var theme15 = {
  plain: {
    color: "#f8fafc",
    backgroundColor: "#011627"
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "#000080"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "#6A9955"
      }
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: {
        color: "#569CD6"
      }
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "#B5CEA8"
      }
    },
    {
      types: ["constant"],
      style: {
        color: "#f8fafc"
      }
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "#9CDCFE"
      }
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: {
        color: "#cbd5e1"
      }
    },
    {
      types: ["selector"],
      style: {
        color: "#D7BA7D"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#D4D4D4"
      }
    },
    {
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#808080"
      }
    },
    {
      types: ["function"],
      style: {
        color: "#7dd3fc"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["char"],
      style: {
        color: "#D16969"
      }
    }
  ]
};
var jettwaveDark_default = theme15;

// src/themes/jettwaveLight.ts
var theme16 = {
  plain: {
    color: "#0f172a",
    backgroundColor: "#f1f5f9"
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "#000080"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "#6A9955"
      }
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: {
        color: "#0c4a6e"
      }
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "#B5CEA8"
      }
    },
    {
      types: ["constant"],
      style: {
        color: "#0f172a"
      }
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "#0c4a6e"
      }
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: {
        color: "#64748b"
      }
    },
    {
      types: ["selector"],
      style: {
        color: "#D7BA7D"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#475569"
      }
    },
    {
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#808080"
      }
    },
    {
      types: ["function"],
      style: {
        color: "#0e7490"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["char"],
      style: {
        color: "#D16969"
      }
    }
  ]
};
var jettwaveLight_default = theme16;

// src/themes/oneDark.ts
var theme17 = {
  plain: {
    backgroundColor: "hsl(220, 13%, 18%)",
    color: "hsl(220, 14%, 71%)",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)"
  },
  styles: [
    {
      types: ["comment", "prolog", "cdata"],
      style: {
        color: "hsl(220, 10%, 40%)"
      }
    },
    {
      types: ["doctype", "punctuation", "entity"],
      style: {
        color: "hsl(220, 14%, 71%)"
      }
    },
    {
      types: [
        "attr-name",
        "class-name",
        "maybe-class-name",
        "boolean",
        "constant",
        "number",
        "atrule"
      ],
      style: { color: "hsl(29, 54%, 61%)" }
    },
    {
      types: ["keyword"],
      style: { color: "hsl(286, 60%, 67%)" }
    },
    {
      types: ["property", "tag", "symbol", "deleted", "important"],
      style: {
        color: "hsl(355, 65%, 65%)"
      }
    },
    {
      types: [
        "selector",
        "string",
        "char",
        "builtin",
        "inserted",
        "regex",
        "attr-value"
      ],
      style: {
        color: "hsl(95, 38%, 62%)"
      }
    },
    {
      types: ["variable", "operator", "function"],
      style: {
        color: "hsl(207, 82%, 66%)"
      }
    },
    {
      types: ["url"],
      style: {
        color: "hsl(187, 47%, 55%)"
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through"
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["important"],
      style: {
        color: "hsl(220, 14%, 71%)"
      }
    }
  ]
};
var oneDark_default = theme17;

// src/themes/oneLight.ts
var theme18 = {
  plain: {
    backgroundColor: "hsl(230, 1%, 98%)",
    color: "hsl(230, 8%, 24%)"
  },
  styles: [
    {
      types: ["comment", "prolog", "cdata"],
      style: {
        color: "hsl(230, 4%, 64%)"
      }
    },
    {
      types: ["doctype", "punctuation", "entity"],
      style: {
        color: "hsl(230, 8%, 24%)"
      }
    },
    {
      types: [
        "attr-name",
        "class-name",
        "boolean",
        "constant",
        "number",
        "atrule"
      ],
      style: {
        color: "hsl(35, 99%, 36%)"
      }
    },
    {
      types: ["keyword"],
      style: {
        color: "hsl(301, 63%, 40%)"
      }
    },
    {
      types: ["property", "tag", "symbol", "deleted", "important"],
      style: {
        color: "hsl(5, 74%, 59%)"
      }
    },
    {
      types: [
        "selector",
        "string",
        "char",
        "builtin",
        "inserted",
        "regex",
        "attr-value",
        "punctuation"
      ],
      style: {
        color: "hsl(119, 34%, 47%)"
      }
    },
    {
      types: ["variable", "operator", "function"],
      style: {
        color: "hsl(221, 87%, 60%)"
      }
    },
    {
      types: ["url"],
      style: {
        color: "hsl(198, 99%, 37%)"
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through"
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["important"],
      style: {
        color: "hsl(230, 8%, 24%)"
      }
    }
  ]
};
var oneLight_default = theme18;

// src/themes/gruvboxMaterialDark.ts
var theme19 = {
  plain: {
    color: "#ebdbb2",
    backgroundColor: "#292828"
  },
  styles: [
    {
      types: [
        "imports",
        "class-name",
        "maybe-class-name",
        "constant",
        "doctype",
        "builtin",
        "function"
      ],
      style: {
        color: "#d8a657"
      }
    },
    {
      types: ["property-access"],
      style: {
        color: "#7daea3"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "#e78a4e"
      }
    },
    {
      types: ["attr-name", "char", "url", "regex"],
      style: {
        color: "#a9b665"
      }
    },
    {
      types: ["attr-value", "string"],
      style: {
        color: "#89b482"
      }
    },
    {
      types: ["comment", "prolog", "cdata", "operator", "inserted"],
      style: {
        color: "#a89984"
      }
    },
    {
      types: [
        "delimiter",
        "boolean",
        "keyword",
        "selector",
        "important",
        "atrule",
        "property",
        "variable",
        "deleted"
      ],
      style: {
        color: "#ea6962"
      }
    },
    {
      types: ["entity", "number", "symbol"],
      style: {
        color: "#d3869b"
      }
    }
  ]
};
var gruvboxMaterialDark_default = theme19;

// src/themes/gruvboxMaterialLight.ts
var theme20 = {
  plain: {
    color: "#654735",
    backgroundColor: "#f9f5d7"
  },
  styles: [
    {
      types: [
        "delimiter",
        "boolean",
        "keyword",
        "selector",
        "important",
        "atrule",
        "property",
        "variable",
        "deleted"
      ],
      style: {
        color: "#af2528"
      }
    },
    {
      types: [
        "imports",
        "class-name",
        "maybe-class-name",
        "constant",
        "doctype",
        "builtin"
      ],
      style: {
        color: "#b4730e"
      }
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#477a5b"
      }
    },
    {
      types: ["property-access"],
      style: {
        color: "#266b79"
      }
    },
    {
      types: ["function", "attr-name", "char", "url"],
      style: {
        color: "#72761e"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "#b94c07"
      }
    },
    {
      types: ["comment", "prolog", "cdata", "operator", "inserted"],
      style: {
        color: "#a89984"
      }
    },
    {
      types: ["entity", "number", "symbol"],
      style: {
        color: "#924f79"
      }
    }
  ]
};
var gruvboxMaterialLight_default = theme20;

// src/index.ts


// src/components/useThemeDictionary.ts


// src/utils/themeToDict.ts
var themeToDict = (theme21, language) => {
  const { plain } = theme21;
  const themeDict = theme21.styles.reduce((acc, themeEntry) => {
    const { languages: languages2, style } = themeEntry;
    if (languages2 && !languages2.includes(language)) {
      return acc;
    }
    themeEntry.types.forEach((type) => {
      const accStyle = __spreadValues(__spreadValues({}, acc[type]), style);
      acc[type] = accStyle;
    });
    return acc;
  }, {});
  themeDict.root = plain;
  themeDict.plain = __spreadProps(__spreadValues({}, plain), { backgroundColor: void 0 });
  return themeDict;
};
var themeToDict_default = themeToDict;

// src/components/useThemeDictionary.ts
var useThemeDictionary = (language, theme21) => {
  const [themeDictionary, setThemeDictionary] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(
    themeToDict_default(theme21, language)
  );
  const previousTheme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const previousLanguage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (theme21 !== previousTheme.current || language !== previousLanguage.current) {
      previousTheme.current = theme21;
      previousLanguage.current = language;
      setThemeDictionary(themeToDict_default(theme21, language));
    }
  }, [language, theme21]);
  return themeDictionary;
};

// src/components/useGetLineProps.ts


var useGetLineProps = (themeDictionary) => (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
  (_a) => {
    var _b = _a, { className, style, line } = _b, rest = __objRest(_b, ["className", "style", "line"]);
    const output = __spreadProps(__spreadValues({}, rest), {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)("token-line", className)
    });
    if (typeof themeDictionary === "object" && "plain" in themeDictionary)
      output.style = themeDictionary.plain;
    if (typeof style === "object")
      output.style = __spreadValues(__spreadValues({}, output.style || {}), style);
    return output;
  },
  [themeDictionary]
);

// src/components/useGetTokenProps.ts


var useGetTokenProps = (themeDictionary) => {
  const styleForToken = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    ({ types, empty }) => {
      if (themeDictionary == null)
        return void 0;
      else if (types.length === 1 && types[0] === "plain") {
        return empty != null ? { display: "inline-block" } : void 0;
      } else if (types.length === 1 && empty != null) {
        return themeDictionary[types[0]];
      }
      return Object.assign(
        empty != null ? { display: "inline-block" } : {},
        ...types.map((type) => themeDictionary[type])
      );
    },
    [themeDictionary]
  );
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (_a) => {
      var _b = _a, { token, className, style } = _b, rest = __objRest(_b, ["token", "className", "style"]);
      const output = __spreadProps(__spreadValues({}, rest), {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)("token", ...token.types, className),
        children: token.content,
        style: styleForToken(token)
      });
      if (style != null) {
        output.style = __spreadValues(__spreadValues({}, output.style || {}), style);
      }
      return output;
    },
    [styleForToken]
  );
};

// src/utils/normalizeTokens.ts
var newlineRe = /\r\n|\r|\n/;
var normalizeEmptyLines = (line) => {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};
var appendTypes = (types, add) => {
  const typesSize = types.length;
  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }
  return types.concat(add);
};
var normalizeTokens = (tokens) => {
  const typeArrStack = [[]];
  const tokenArrStack = [tokens];
  const tokenArrIndexStack = [0];
  const tokenArrSizeStack = [tokens.length];
  let i = 0;
  let stackIndex = 0;
  let currentLine = [];
  const acc = [currentLine];
  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      let content;
      let types = typeArrStack[stackIndex];
      const tokenArr = tokenArrStack[stackIndex];
      const token = tokenArr[i];
      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);
        if (token.alias) {
          types = appendTypes(types, token.alias);
        }
        content = token.content;
      }
      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      }
      const splitByNewlines = content.split(newlineRe);
      const newlineCount = splitByNewlines.length;
      currentLine.push({
        types,
        content: splitByNewlines[0]
      });
      for (let i2 = 1; i2 < newlineCount; i2++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types,
          content: splitByNewlines[i2]
        });
      }
    }
    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }
  normalizeEmptyLines(currentLine);
  return acc;
};
var normalizeTokens_default = normalizeTokens;

// src/components/useTokenize.ts

var useTokenize = ({ prism, code, grammar, language }) => {
  const prismRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(prism);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (grammar == null)
      return normalizeTokens_default([code]);
    const prismConfig = {
      code,
      grammar,
      language,
      tokens: []
    };
    prismRef.current.hooks.run("before-tokenize", prismConfig);
    prismConfig.tokens = prismRef.current.tokenize(code, grammar);
    prismRef.current.hooks.run("after-tokenize", prismConfig);
    return normalizeTokens_default(prismConfig.tokens);
  }, [code, grammar, language]);
};

// src/components/highlight.ts
var Highlight = ({
  children,
  language: _language,
  code,
  theme: theme21,
  prism
}) => {
  const language = _language.toLowerCase();
  const themeDictionary = useThemeDictionary(language, theme21);
  const getLineProps = useGetLineProps(themeDictionary);
  const getTokenProps = useGetTokenProps(themeDictionary);
  const grammar = prism.languages[language];
  const tokens = useTokenize({ prism, language, code, grammar });
  return children({
    tokens,
    className: `prism-code language-${language}`,
    style: themeDictionary != null ? themeDictionary.root : {},
    getLineProps,
    getTokenProps
  });
};

// src/index.ts
var Highlight2 = (props) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Highlight, __spreadProps(__spreadValues({}, props), {
  prism: props.prism || Prism,
  theme: props.theme || vsDark_default,
  code: props.code,
  language: props.language
}));

/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/
//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ 11561:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ invariant)
/* harmony export */ });
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}




/***/ }),

/***/ 31635:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __rewriteRelativeImportExtension: () => (/* binding */ __rewriteRelativeImportExtension),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ }),

/***/ 14853:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"theme.AnnouncementBar.closeButtonAriaLabel":"Stäng","theme.BackToTopButton.buttonAriaLabel":"Scrolla till toppen","theme.CodeBlock.copied":"Kopierad","theme.CodeBlock.copy":"Kopiera","theme.CodeBlock.copyButtonAriaLabel":"Kopiera kod till urklipp","theme.CodeBlock.wordWrapToggle":"Växla radbrytning","theme.DocSidebarItem.collapseCategoryAriaLabel":"Collapse sidebar category \'{label}\'","theme.DocSidebarItem.expandCategoryAriaLabel":"Expand sidebar category \'{label}\'","theme.ErrorPageContent.title":"Denna sida har kraschat.","theme.ErrorPageContent.tryAgain":"Försök igen","theme.NavBar.navAriaLabel":"Main","theme.NotFound.p1":"Vi kunde inte hitta det du letade efter.","theme.NotFound.p2":"Vänligen kontakta ägaren av webbplatsen som länkade dig till den ursprungliga webbadressen och låt dem veta att denna länk är trasig.","theme.NotFound.title":"Sidan Hittades Inte","theme.TOCCollapsible.toggleButtonLabel":"Under denna sida","theme.admonition.caution":"varning","theme.admonition.danger":"risk","theme.admonition.info":"info","theme.admonition.note":"anteckning","theme.admonition.tip":"tips","theme.admonition.warning":"warning","theme.blog.archive.description":"Arkiv","theme.blog.archive.title":"Arkiv","theme.blog.author.noPosts":"This author has not written any posts yet.","theme.blog.author.pageTitle":"{authorName} - {nPosts}","theme.blog.authorsList.pageTitle":"Authors","theme.blog.authorsList.viewAll":"View All Authors","theme.blog.paginator.navAriaLabel":"Navigation av Blogglista","theme.blog.paginator.newerEntries":"Nyare Inlägg","theme.blog.paginator.olderEntries":"Äldre Inlägg","theme.blog.post.paginator.navAriaLabel":"Navigation av Blogginlägg","theme.blog.post.paginator.newerPost":"Nyare Inlägg","theme.blog.post.paginator.olderPost":"Äldre Inlägg","theme.blog.post.plurals":"Ett inlägg|{count} inlägg","theme.blog.post.readMore":"Läs Mer","theme.blog.post.readMoreLabel":"Läs mer om {title}","theme.blog.post.readingTime.plurals":"En minut att läsa|{readingTime} min att läsa","theme.blog.sidebar.navAriaLabel":"Navigation av senaste blogginläggen","theme.blog.tagTitle":"{nPosts} taggade me \\"{tagName}\\"","theme.colorToggle.ariaLabel":"Växla mellan mörkt och ljust utseende (currently {mode})","theme.colorToggle.ariaLabel.mode.dark":"mörkt utseende","theme.colorToggle.ariaLabel.mode.light":"ljust utseende","theme.common.editThisPage":"Redigera denna sida","theme.common.headingLinkTitle":"Direktlänk till {heading}","theme.common.skipToMainContent":"Hoppa till huvudinnehåll","theme.contentVisibility.draftBanner.message":"This page is a draft. It will only be visible in dev and be excluded from the production build.","theme.contentVisibility.draftBanner.title":"Draft page","theme.contentVisibility.unlistedBanner.message":"This page is unlisted. Search engines will not index it, and only users having a direct link can access it.","theme.contentVisibility.unlistedBanner.title":"Unlisted page","theme.docs.DocCard.categoryDescription.plurals":"1 artikel|{count} artiklar","theme.docs.breadcrumbs.home":"Hemsida","theme.docs.breadcrumbs.navAriaLabel":"Sökväg","theme.docs.paginator.navAriaLabel":"Dokumentsidor","theme.docs.paginator.next":"Nästa","theme.docs.paginator.previous":"Föregående","theme.docs.sidebar.closeSidebarButtonAriaLabel":"Close navigation bar","theme.docs.sidebar.collapseButtonAriaLabel":"Stäng sidofältet","theme.docs.sidebar.collapseButtonTitle":"Stäng sidofältet","theme.docs.sidebar.expandButtonAriaLabel":"Expandera sidofältet","theme.docs.sidebar.expandButtonTitle":"Expandera sidofältet","theme.docs.sidebar.navAriaLabel":"Docs sidebar","theme.docs.sidebar.toggleSidebarButtonAriaLabel":"Visa/göm navigationen","theme.docs.tagDocListPageTitle":"{nDocsTagged} med \\"{tagName}\\"","theme.docs.tagDocListPageTitle.nDocsTagged":"Ett dokument taggat|{count} dokument taggade","theme.docs.versionBadge.label":"Version: {versionLabel}","theme.docs.versions.latestVersionLinkLabel":"senaste versionen","theme.docs.versions.latestVersionSuggestionLabel":"För senaste dokumentationen, se {latestVersionLink} ({versionLabel}).","theme.docs.versions.unmaintainedVersionLabel":"Detta är dokumentationen för {siteTitle} {versionLabel}, som inte längre aktivt underhålls.","theme.docs.versions.unreleasedVersionLabel":"Detta är ej utgiven dokumentation för {siteTitle} {versionLabel} version.","theme.lastUpdated.atDate":" den {date}","theme.lastUpdated.byUser":" av {user}","theme.lastUpdated.lastUpdatedAtBy":"Senast uppdaterad{atDate}{byUser}","theme.navbar.mobileLanguageDropdown.label":"Språk","theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel":"← Tillbaka till huvudmeny","theme.navbar.mobileVersionsDropdown.label":"Versioner","theme.tags.tagsListLabel":"Taggar:","theme.tags.tagsPageLink":"Visa Alla Taggar","theme.tags.tagsPageTitle":"Taggar","theme.Playground.liveEditor":"Live Editor","theme.Playground.result":"Resultat"}');

/***/ }),

/***/ 71493:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"/pr-preview/pr-180/about/-983":{"__comp":"1f391b9e","__context":{"plugin":"a7456010"},"content":"c9f32de9"},"/pr-preview/pr-180/blog/-0ff":{"__comp":"a6aa9e1f","__context":{"plugin":"36994c47"},"sidebar":"814f3328","items":[{"content":"7a8a5c4e"},{"content":"a4238dfd"},{"content":"1039eb1c"},{"content":"5e4dc735"},{"content":"75d8baba"},{"content":"51241619"},{"content":"bf9e6831"}],"__props":"e21057ae"},"/pr-preview/pr-180/blog/archive/-7d2":{"__comp":"9e4087bc","__context":{"plugin":"36994c47"},"__props":"5ec91daa"},"/pr-preview/pr-180/blog/midas-open-source/-b97":{"__comp":"ccc49370","__context":{"data":{"blogMetadata":"acecf23e"},"plugin":"36994c47"},"sidebar":"814f3328","content":"726898a3"},"/pr-preview/pr-180/blog/release-12/-4a1":{"__comp":"ccc49370","__context":{"data":{"blogMetadata":"acecf23e"},"plugin":"36994c47"},"sidebar":"814f3328","content":"9f2a669d"},"/pr-preview/pr-180/blog/release-13/-7d9":{"__comp":"ccc49370","__context":{"data":{"blogMetadata":"acecf23e"},"plugin":"36994c47"},"sidebar":"814f3328","content":"0b81fcdc"},"/pr-preview/pr-180/blog/release-14/-14c":{"__comp":"ccc49370","__context":{"data":{"blogMetadata":"acecf23e"},"plugin":"36994c47"},"sidebar":"814f3328","content":"b6bd9de1"},"/pr-preview/pr-180/blog/release-15/-0ae":{"__comp":"ccc49370","__context":{"data":{"blogMetadata":"acecf23e"},"plugin":"36994c47"},"sidebar":"814f3328","content":"9c8e7e87"},"/pr-preview/pr-180/blog/release-16/-ef0":{"__comp":"ccc49370","__context":{"data":{"blogMetadata":"acecf23e"},"plugin":"36994c47"},"sidebar":"814f3328","content":"7c303ed1"},"/pr-preview/pr-180/blog/release-17/-c59":{"__comp":"ccc49370","__context":{"data":{"blogMetadata":"acecf23e"},"plugin":"36994c47"},"sidebar":"814f3328","content":"b0405491"},"/pr-preview/pr-180/playground/-a6a":{"__comp":"801f3f5d","__context":{"plugin":"a7456010"},"config":"5e9f5e1a"},"/pr-preview/pr-180/-aaf":{"__comp":"5e95c892","__context":{"plugin":"aba21aa0"}},"/pr-preview/pr-180/-4ad":{"__comp":"a7bd4aaa","__props":"be3f8917"},"/pr-preview/pr-180/-d1c":{"__comp":"a94703ab"},"/pr-preview/pr-180/basics/-af4":{"__comp":"17896441","content":"d567fc13"},"/pr-preview/pr-180/basics/accessibility/-e49":{"__comp":"17896441","content":"e01a17d2"},"/pr-preview/pr-180/basics/design-dna/-b2c":{"__comp":"17896441","content":"39e2c9b3"},"/pr-preview/pr-180/basics/icons/-9d8":{"__comp":"17896441","content":"79d23d0f"},"/pr-preview/pr-180/basics/language/-29d":{"__comp":"17896441","content":"55843d4b"},"/pr-preview/pr-180/basics/principles/-67c":{"__comp":"17896441","content":"e108b786"},"/pr-preview/pr-180/basics/tokens/-cad":{"__comp":"17896441","content":"e37cc8c8"},"/pr-preview/pr-180/basics/typography/-5fb":{"__comp":"17896441","content":"30ff67c2"},"/pr-preview/pr-180/components/-7b1":{"__comp":"17896441","content":"55636239"},"/pr-preview/pr-180/components/accordion/-1bb":{"__comp":"17896441","content":"9e9c7a31"},"/pr-preview/pr-180/components/breadcrumbs/-53b":{"__comp":"17896441","content":"aca3791a"},"/pr-preview/pr-180/components/button/-9eb":{"__comp":"17896441","content":"0743e332"},"/pr-preview/pr-180/components/card/-3fe":{"__comp":"17896441","content":"c20fed52"},"/pr-preview/pr-180/components/checkbox/-d4a":{"__comp":"17896441","content":"1c72337b"},"/pr-preview/pr-180/components/combobox/-dd7":{"__comp":"17896441","content":"9b9ca316"},"/pr-preview/pr-180/components/date-picker/-49b":{"__comp":"17896441","content":"03dcfce2"},"/pr-preview/pr-180/components/fileupload/-dd6":{"__comp":"17896441","content":"cdb3d205"},"/pr-preview/pr-180/components/flex/-16a":{"__comp":"17896441","content":"6dc9b720"},"/pr-preview/pr-180/components/grid/-e75":{"__comp":"17896441","content":"93f782fd"},"/pr-preview/pr-180/components/info-banner/-f4f":{"__comp":"17896441","content":"67e65cef"},"/pr-preview/pr-180/components/link-button/-6fb":{"__comp":"17896441","content":"0ab4808b"},"/pr-preview/pr-180/components/link/-0ab":{"__comp":"17896441","content":"7d405538"},"/pr-preview/pr-180/components/logo/-bf4":{"__comp":"17896441","content":"b9ba9847"},"/pr-preview/pr-180/components/modal/-9d9":{"__comp":"17896441","content":"90252242"},"/pr-preview/pr-180/components/multi-select/-afe":{"__comp":"17896441","content":"7253645c"},"/pr-preview/pr-180/components/radio/-29b":{"__comp":"17896441","content":"7e6238c4"},"/pr-preview/pr-180/components/search-field/-6be":{"__comp":"17896441","content":"8ac150c6"},"/pr-preview/pr-180/components/select/-057":{"__comp":"17896441","content":"af10bb7a"},"/pr-preview/pr-180/components/spinner/-bfe":{"__comp":"17896441","content":"98db018c"},"/pr-preview/pr-180/components/table/-d0a":{"__comp":"17896441","content":"90377f5b"},"/pr-preview/pr-180/components/tabs/-48b":{"__comp":"17896441","content":"1a63ac3d"},"/pr-preview/pr-180/components/textarea/-77c":{"__comp":"17896441","content":"8469219d"},"/pr-preview/pr-180/components/textfield/-42f":{"__comp":"17896441","content":"4033e3a4"},"/pr-preview/pr-180/components/toast/-ca2":{"__comp":"17896441","content":"a2cc83c2"},"/pr-preview/pr-180/design-patterns/-15e":{"__comp":"17896441","content":"1c01e723"},"/pr-preview/pr-180/design-patterns/buttons-and-links/-624":{"__comp":"17896441","content":"3c9a9f60"},"/pr-preview/pr-180/design-patterns/error-message/-f22":{"__comp":"17896441","content":"0de3b39b"},"/pr-preview/pr-180/design-patterns/focus/-63a":{"__comp":"17896441","content":"560704f0"},"/pr-preview/pr-180/design-patterns/forms/-00c":{"__comp":"17896441","content":"d0b5095a"},"/pr-preview/pr-180/design-patterns/personnummer/-a2e":{"__comp":"17896441","content":"9a24441e"},"/pr-preview/pr-180/dev/client-side-routing/-467":{"__comp":"17896441","content":"870a3819"},"/pr-preview/pr-180/get-started/-932":{"__comp":"17896441","content":"10aea237"},"/pr-preview/pr-180/get-started/design/-f07":{"__comp":"17896441","content":"1accb189"},"/pr-preview/pr-180/get-started/develop/-c16":{"__comp":"17896441","content":"a32f2ed7"},"/pr-preview/pr-180/-c5a":{"__comp":"17896441","content":"f8409a7e"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [1869], () => (__webpack_exec__(49433)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
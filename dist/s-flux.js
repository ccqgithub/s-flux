(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SFlux", [], factory);
	else if(typeof exports === 'object')
		exports["SFlux"] = factory();
	else
		root["SFlux"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Store = exports.createMutationTypes = exports.createAction = exports.getGlobalStore = exports.setGlobalStore = undefined;

	var _tool = __webpack_require__(1);

	var _action = __webpack_require__(2);

	var _store = __webpack_require__(9);

	var _type = __webpack_require__(11);

	exports.setGlobalStore = _tool.setGlobalStore;
	exports.getGlobalStore = _tool.getGlobalStore;
	exports.createAction = _action.createAction;
	exports.createMutationTypes = _type.createMutationTypes;
	exports.Store = _store.Store;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setGlobalStore = setGlobalStore;
	exports.getGlobalStore = getGlobalStore;
	var globalStore;

	function setGlobalStore(store) {
	  globalStore = store;
	}

	function getGlobalStore() {
	  return globalStore;
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createAction = createAction;

	var _tool = __webpack_require__(1);

	var _debug = __webpack_require__(3);

	// promise
	var Promise = __webpack_require__(4).Promise;

	// create action
	function createAction(actionFn) {

	  return function (params, store) {
	    if (!store) store = (0, _tool.getGlobalStore)();
	    if (!store) {
	      (0, _debug.error)('No store related to this action! you can regist a global store or pass it to the action with the second argument.', 'action');
	    }

	    return new Promise(function (resolve, reject) {
	      actionFn(params, {
	        store: store,
	        dispatch: function dispatch(mutation) {
	          var waitFor = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	          store.dispatch(mutation);
	          if (!waitFor) resolve(mutation);
	        },
	        error: function error(_error) {
	          reject(_error);
	        }
	      });
	    });
	  };
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.warning = warning;
	exports.error = error;
	function warning(msg) {
	  var context = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

	  if (true) {
	    if (typeof console !== 'undefined') {
	      console.error('[s-flux warn]: ' + msg + ' (' + context + ')');
	    }
	  }
	}

	function error(msg) {
	  var context = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

	  if (true) {
	    if (typeof console !== 'undefined') {
	      throw new Error('[s-flux warn]: ' + msg + ' (' + context + ')');
	    }
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global, module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.2.1
	 */

	(function () {
	  "use strict";

	  function lib$es6$promise$utils$$objectOrFunction(x) {
	    return typeof x === 'function' || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null;
	  }

	  function lib$es6$promise$utils$$isFunction(x) {
	    return typeof x === 'function';
	  }

	  function lib$es6$promise$utils$$isMaybeThenable(x) {
	    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null;
	  }

	  var lib$es6$promise$utils$$_isArray;
	  if (!Array.isArray) {
	    lib$es6$promise$utils$$_isArray = function lib$es6$promise$utils$$_isArray(x) {
	      return Object.prototype.toString.call(x) === '[object Array]';
	    };
	  } else {
	    lib$es6$promise$utils$$_isArray = Array.isArray;
	  }

	  var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	  var lib$es6$promise$asap$$len = 0;
	  var lib$es6$promise$asap$$vertxNext;
	  var lib$es6$promise$asap$$customSchedulerFn;

	  var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	    lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	    lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	    lib$es6$promise$asap$$len += 2;
	    if (lib$es6$promise$asap$$len === 2) {
	      // If len is 2, that means that we need to schedule an async flush.
	      // If additional callbacks are queued before the queue is flushed, they
	      // will be processed by this flush that we are scheduling.
	      if (lib$es6$promise$asap$$customSchedulerFn) {
	        lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	      } else {
	        lib$es6$promise$asap$$scheduleFlush();
	      }
	    }
	  };

	  function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	    lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	  }

	  function lib$es6$promise$asap$$setAsap(asapFn) {
	    lib$es6$promise$asap$$asap = asapFn;
	  }

	  var lib$es6$promise$asap$$browserWindow = typeof window !== 'undefined' ? window : undefined;
	  var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	  var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	  var lib$es6$promise$asap$$isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

	  // test for web worker but not in IE10
	  var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

	  // node
	  function lib$es6$promise$asap$$useNextTick() {
	    // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	    // see https://github.com/cujojs/when/issues/410 for details
	    return function () {
	      process.nextTick(lib$es6$promise$asap$$flush);
	    };
	  }

	  // vertx
	  function lib$es6$promise$asap$$useVertxTimer() {
	    return function () {
	      lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	    };
	  }

	  function lib$es6$promise$asap$$useMutationObserver() {
	    var iterations = 0;
	    var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	    var node = document.createTextNode('');
	    observer.observe(node, { characterData: true });

	    return function () {
	      node.data = iterations = ++iterations % 2;
	    };
	  }

	  // web worker
	  function lib$es6$promise$asap$$useMessageChannel() {
	    var channel = new MessageChannel();
	    channel.port1.onmessage = lib$es6$promise$asap$$flush;
	    return function () {
	      channel.port2.postMessage(0);
	    };
	  }

	  function lib$es6$promise$asap$$useSetTimeout() {
	    return function () {
	      setTimeout(lib$es6$promise$asap$$flush, 1);
	    };
	  }

	  var lib$es6$promise$asap$$queue = new Array(1000);
	  function lib$es6$promise$asap$$flush() {
	    for (var i = 0; i < lib$es6$promise$asap$$len; i += 2) {
	      var callback = lib$es6$promise$asap$$queue[i];
	      var arg = lib$es6$promise$asap$$queue[i + 1];

	      callback(arg);

	      lib$es6$promise$asap$$queue[i] = undefined;
	      lib$es6$promise$asap$$queue[i + 1] = undefined;
	    }

	    lib$es6$promise$asap$$len = 0;
	  }

	  function lib$es6$promise$asap$$attemptVertx() {
	    try {
	      var r = require;
	      var vertx = __webpack_require__(7);
	      lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	      return lib$es6$promise$asap$$useVertxTimer();
	    } catch (e) {
	      return lib$es6$promise$asap$$useSetTimeout();
	    }
	  }

	  var lib$es6$promise$asap$$scheduleFlush;
	  // Decide what async method to use to triggering processing of queued callbacks:
	  if (lib$es6$promise$asap$$isNode) {
	    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	  } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	  } else if (lib$es6$promise$asap$$isWorker) {
	    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	  } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
	    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	  } else {
	    lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	  }
	  function lib$es6$promise$then$$then(onFulfillment, onRejection) {
	    var parent = this;

	    var child = new this.constructor(lib$es6$promise$$internal$$noop);

	    if (child[lib$es6$promise$$internal$$PROMISE_ID] === undefined) {
	      lib$es6$promise$$internal$$makePromise(child);
	    }

	    var state = parent._state;

	    if (state) {
	      var callback = arguments[state - 1];
	      lib$es6$promise$asap$$asap(function () {
	        lib$es6$promise$$internal$$invokeCallback(state, child, callback, parent._result);
	      });
	    } else {
	      lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	    }

	    return child;
	  }
	  var lib$es6$promise$then$$default = lib$es6$promise$then$$then;
	  function lib$es6$promise$promise$resolve$$resolve(object) {
	    /*jshint validthis:true */
	    var Constructor = this;

	    if (object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.constructor === Constructor) {
	      return object;
	    }

	    var promise = new Constructor(lib$es6$promise$$internal$$noop);
	    lib$es6$promise$$internal$$resolve(promise, object);
	    return promise;
	  }
	  var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	  var lib$es6$promise$$internal$$PROMISE_ID = Math.random().toString(36).substring(16);

	  function lib$es6$promise$$internal$$noop() {}

	  var lib$es6$promise$$internal$$PENDING = void 0;
	  var lib$es6$promise$$internal$$FULFILLED = 1;
	  var lib$es6$promise$$internal$$REJECTED = 2;

	  var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

	  function lib$es6$promise$$internal$$selfFulfillment() {
	    return new TypeError("You cannot resolve a promise with itself");
	  }

	  function lib$es6$promise$$internal$$cannotReturnOwn() {
	    return new TypeError('A promises callback cannot return that same promise.');
	  }

	  function lib$es6$promise$$internal$$getThen(promise) {
	    try {
	      return promise.then;
	    } catch (error) {
	      lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	      return lib$es6$promise$$internal$$GET_THEN_ERROR;
	    }
	  }

	  function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	    try {
	      then.call(value, fulfillmentHandler, rejectionHandler);
	    } catch (e) {
	      return e;
	    }
	  }

	  function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	    lib$es6$promise$asap$$asap(function (promise) {
	      var sealed = false;
	      var error = lib$es6$promise$$internal$$tryThen(then, thenable, function (value) {
	        if (sealed) {
	          return;
	        }
	        sealed = true;
	        if (thenable !== value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, value);
	        }
	      }, function (reason) {
	        if (sealed) {
	          return;
	        }
	        sealed = true;

	        lib$es6$promise$$internal$$reject(promise, reason);
	      }, 'Settle: ' + (promise._label || ' unknown promise'));

	      if (!sealed && error) {
	        sealed = true;
	        lib$es6$promise$$internal$$reject(promise, error);
	      }
	    }, promise);
	  }

	  function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	    if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	      lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	    } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	      lib$es6$promise$$internal$$reject(promise, thenable._result);
	    } else {
	      lib$es6$promise$$internal$$subscribe(thenable, undefined, function (value) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      }, function (reason) {
	        lib$es6$promise$$internal$$reject(promise, reason);
	      });
	    }
	  }

	  function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable, then) {
	    if (maybeThenable.constructor === promise.constructor && then === lib$es6$promise$then$$default && constructor.resolve === lib$es6$promise$promise$resolve$$default) {
	      lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	    } else {
	      if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	      } else if (then === undefined) {
	        lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	      } else if (lib$es6$promise$utils$$isFunction(then)) {
	        lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	      }
	    }
	  }

	  function lib$es6$promise$$internal$$resolve(promise, value) {
	    if (promise === value) {
	      lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	    } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	      lib$es6$promise$$internal$$handleMaybeThenable(promise, value, lib$es6$promise$$internal$$getThen(value));
	    } else {
	      lib$es6$promise$$internal$$fulfill(promise, value);
	    }
	  }

	  function lib$es6$promise$$internal$$publishRejection(promise) {
	    if (promise._onerror) {
	      promise._onerror(promise._result);
	    }

	    lib$es6$promise$$internal$$publish(promise);
	  }

	  function lib$es6$promise$$internal$$fulfill(promise, value) {
	    if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	      return;
	    }

	    promise._result = value;
	    promise._state = lib$es6$promise$$internal$$FULFILLED;

	    if (promise._subscribers.length !== 0) {
	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	    }
	  }

	  function lib$es6$promise$$internal$$reject(promise, reason) {
	    if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	      return;
	    }
	    promise._state = lib$es6$promise$$internal$$REJECTED;
	    promise._result = reason;

	    lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	  }

	  function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	    var subscribers = parent._subscribers;
	    var length = subscribers.length;

	    parent._onerror = null;

	    subscribers[length] = child;
	    subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	    subscribers[length + lib$es6$promise$$internal$$REJECTED] = onRejection;

	    if (length === 0 && parent._state) {
	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	    }
	  }

	  function lib$es6$promise$$internal$$publish(promise) {
	    var subscribers = promise._subscribers;
	    var settled = promise._state;

	    if (subscribers.length === 0) {
	      return;
	    }

	    var child,
	        callback,
	        detail = promise._result;

	    for (var i = 0; i < subscribers.length; i += 3) {
	      child = subscribers[i];
	      callback = subscribers[i + settled];

	      if (child) {
	        lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	      } else {
	        callback(detail);
	      }
	    }

	    promise._subscribers.length = 0;
	  }

	  function lib$es6$promise$$internal$$ErrorObject() {
	    this.error = null;
	  }

	  var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

	  function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	    try {
	      return callback(detail);
	    } catch (e) {
	      lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	      return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	    }
	  }

	  function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	    var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	        value,
	        error,
	        succeeded,
	        failed;

	    if (hasCallback) {
	      value = lib$es6$promise$$internal$$tryCatch(callback, detail);

	      if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	        failed = true;
	        error = value.error;
	        value = null;
	      } else {
	        succeeded = true;
	      }

	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	        return;
	      }
	    } else {
	      value = detail;
	      succeeded = true;
	    }

	    if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	      // noop
	    } else if (hasCallback && succeeded) {
	      lib$es6$promise$$internal$$resolve(promise, value);
	    } else if (failed) {
	      lib$es6$promise$$internal$$reject(promise, error);
	    } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	      lib$es6$promise$$internal$$fulfill(promise, value);
	    } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	      lib$es6$promise$$internal$$reject(promise, value);
	    }
	  }

	  function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	    try {
	      resolver(function resolvePromise(value) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      }, function rejectPromise(reason) {
	        lib$es6$promise$$internal$$reject(promise, reason);
	      });
	    } catch (e) {
	      lib$es6$promise$$internal$$reject(promise, e);
	    }
	  }

	  var lib$es6$promise$$internal$$id = 0;
	  function lib$es6$promise$$internal$$nextId() {
	    return lib$es6$promise$$internal$$id++;
	  }

	  function lib$es6$promise$$internal$$makePromise(promise) {
	    promise[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$id++;
	    promise._state = undefined;
	    promise._result = undefined;
	    promise._subscribers = [];
	  }

	  function lib$es6$promise$promise$all$$all(entries) {
	    return new lib$es6$promise$enumerator$$default(this, entries).promise;
	  }
	  var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	  function lib$es6$promise$promise$race$$race(entries) {
	    /*jshint validthis:true */
	    var Constructor = this;

	    if (!lib$es6$promise$utils$$isArray(entries)) {
	      return new Constructor(function (resolve, reject) {
	        reject(new TypeError('You must pass an array to race.'));
	      });
	    } else {
	      return new Constructor(function (resolve, reject) {
	        var length = entries.length;
	        for (var i = 0; i < length; i++) {
	          Constructor.resolve(entries[i]).then(resolve, reject);
	        }
	      });
	    }
	  }
	  var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	  function lib$es6$promise$promise$reject$$reject(reason) {
	    /*jshint validthis:true */
	    var Constructor = this;
	    var promise = new Constructor(lib$es6$promise$$internal$$noop);
	    lib$es6$promise$$internal$$reject(promise, reason);
	    return promise;
	  }
	  var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

	  function lib$es6$promise$promise$$needsResolver() {
	    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	  }

	  function lib$es6$promise$promise$$needsNew() {
	    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	  }

	  var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	  /**
	    Promise objects represent the eventual result of an asynchronous operation. The
	    primary way of interacting with a promise is through its `then` method, which
	    registers callbacks to receive either a promise's eventual value or the reason
	    why the promise cannot be fulfilled.
	     Terminology
	    -----------
	     - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	    - `thenable` is an object or function that defines a `then` method.
	    - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	    - `exception` is a value that is thrown using the throw statement.
	    - `reason` is a value that indicates why a promise was rejected.
	    - `settled` the final resting state of a promise, fulfilled or rejected.
	     A promise can be in one of three states: pending, fulfilled, or rejected.
	     Promises that are fulfilled have a fulfillment value and are in the fulfilled
	    state.  Promises that are rejected have a rejection reason and are in the
	    rejected state.  A fulfillment value is never a thenable.
	     Promises can also be said to *resolve* a value.  If this value is also a
	    promise, then the original promise's settled state will match the value's
	    settled state.  So a promise that *resolves* a promise that rejects will
	    itself reject, and a promise that *resolves* a promise that fulfills will
	    itself fulfill.
	      Basic Usage:
	    ------------
	     ```js
	    var promise = new Promise(function(resolve, reject) {
	      // on success
	      resolve(value);
	       // on failure
	      reject(reason);
	    });
	     promise.then(function(value) {
	      // on fulfillment
	    }, function(reason) {
	      // on rejection
	    });
	    ```
	     Advanced Usage:
	    ---------------
	     Promises shine when abstracting away asynchronous interactions such as
	    `XMLHttpRequest`s.
	     ```js
	    function getJSON(url) {
	      return new Promise(function(resolve, reject){
	        var xhr = new XMLHttpRequest();
	         xhr.open('GET', url);
	        xhr.onreadystatechange = handler;
	        xhr.responseType = 'json';
	        xhr.setRequestHeader('Accept', 'application/json');
	        xhr.send();
	         function handler() {
	          if (this.readyState === this.DONE) {
	            if (this.status === 200) {
	              resolve(this.response);
	            } else {
	              reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	            }
	          }
	        };
	      });
	    }
	     getJSON('/posts.json').then(function(json) {
	      // on fulfillment
	    }, function(reason) {
	      // on rejection
	    });
	    ```
	     Unlike callbacks, promises are great composable primitives.
	     ```js
	    Promise.all([
	      getJSON('/posts'),
	      getJSON('/comments')
	    ]).then(function(values){
	      values[0] // => postsJSON
	      values[1] // => commentsJSON
	       return values;
	    });
	    ```
	     @class Promise
	    @param {function} resolver
	    Useful for tooling.
	    @constructor
	  */
	  function lib$es6$promise$promise$$Promise(resolver) {
	    this[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$nextId();
	    this._result = this._state = undefined;
	    this._subscribers = [];

	    if (lib$es6$promise$$internal$$noop !== resolver) {
	      typeof resolver !== 'function' && lib$es6$promise$promise$$needsResolver();
	      this instanceof lib$es6$promise$promise$$Promise ? lib$es6$promise$$internal$$initializePromise(this, resolver) : lib$es6$promise$promise$$needsNew();
	    }
	  }

	  lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	  lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	  lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	  lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	  lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	  lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	  lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

	  lib$es6$promise$promise$$Promise.prototype = {
	    constructor: lib$es6$promise$promise$$Promise,

	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	       ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	       Chaining
	      --------
	       The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	       ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	       findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	       ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	       Assimilation
	      ------------
	       Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	       ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	       If the assimliated promise rejects, then the downstream promise will also reject.
	       ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	       Simple Example
	      --------------
	       Synchronous Example
	       ```javascript
	      var result;
	       try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	       Errback Example
	       ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	       Promise Example;
	       ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	       Advanced Example
	      --------------
	       Synchronous Example
	       ```javascript
	      var author, books;
	       try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	       Errback Example
	       ```js
	       function foundBooks(books) {
	       }
	       function failure(reason) {
	       }
	       findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	       Promise Example;
	       ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	       @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	    then: lib$es6$promise$then$$default,

	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	       ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }
	       // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }
	       // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```
	       @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	    'catch': function _catch(onRejection) {
	      return this.then(null, onRejection);
	    }
	  };
	  var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
	  function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	    this._instanceConstructor = Constructor;
	    this.promise = new Constructor(lib$es6$promise$$internal$$noop);

	    if (!this.promise[lib$es6$promise$$internal$$PROMISE_ID]) {
	      lib$es6$promise$$internal$$makePromise(this.promise);
	    }

	    if (lib$es6$promise$utils$$isArray(input)) {
	      this._input = input;
	      this.length = input.length;
	      this._remaining = input.length;

	      this._result = new Array(this.length);

	      if (this.length === 0) {
	        lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	      } else {
	        this.length = this.length || 0;
	        this._enumerate();
	        if (this._remaining === 0) {
	          lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	        }
	      }
	    } else {
	      lib$es6$promise$$internal$$reject(this.promise, lib$es6$promise$enumerator$$validationError());
	    }
	  }

	  function lib$es6$promise$enumerator$$validationError() {
	    return new Error('Array Methods must be provided an Array');
	  }

	  lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function () {
	    var length = this.length;
	    var input = this._input;

	    for (var i = 0; this._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	      this._eachEntry(input[i], i);
	    }
	  };

	  lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function (entry, i) {
	    var c = this._instanceConstructor;
	    var resolve = c.resolve;

	    if (resolve === lib$es6$promise$promise$resolve$$default) {
	      var then = lib$es6$promise$$internal$$getThen(entry);

	      if (then === lib$es6$promise$then$$default && entry._state !== lib$es6$promise$$internal$$PENDING) {
	        this._settledAt(entry._state, i, entry._result);
	      } else if (typeof then !== 'function') {
	        this._remaining--;
	        this._result[i] = entry;
	      } else if (c === lib$es6$promise$promise$$default) {
	        var promise = new c(lib$es6$promise$$internal$$noop);
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, entry, then);
	        this._willSettleAt(promise, i);
	      } else {
	        this._willSettleAt(new c(function (resolve) {
	          resolve(entry);
	        }), i);
	      }
	    } else {
	      this._willSettleAt(resolve(entry), i);
	    }
	  };

	  lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function (state, i, value) {
	    var promise = this.promise;

	    if (promise._state === lib$es6$promise$$internal$$PENDING) {
	      this._remaining--;

	      if (state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      } else {
	        this._result[i] = value;
	      }
	    }

	    if (this._remaining === 0) {
	      lib$es6$promise$$internal$$fulfill(promise, this._result);
	    }
	  };

	  lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function (promise, i) {
	    var enumerator = this;

	    lib$es6$promise$$internal$$subscribe(promise, undefined, function (value) {
	      enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	    }, function (reason) {
	      enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	    });
	  };
	  function lib$es6$promise$polyfill$$polyfill() {
	    var local;

	    if (typeof global !== 'undefined') {
	      local = global;
	    } else if (typeof self !== 'undefined') {
	      local = self;
	    } else {
	      try {
	        local = Function('return this')();
	      } catch (e) {
	        throw new Error('polyfill failed because global object is unavailable in this environment');
	      }
	    }

	    var P = local.Promise;

	    if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	      return;
	    }

	    local.Promise = lib$es6$promise$promise$$default;
	  }
	  var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

	  var lib$es6$promise$umd$$ES6Promise = {
	    'Promise': lib$es6$promise$promise$$default,
	    'polyfill': lib$es6$promise$polyfill$$default
	  };

	  /* global define:true module:true window: true */
	  if ("function" === 'function' && __webpack_require__(8)['amd']) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return lib$es6$promise$umd$$ES6Promise;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module !== 'undefined' && module['exports']) {
	    module['exports'] = lib$es6$promise$umd$$ES6Promise;
	  } else if (typeof this !== 'undefined') {
	    this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	  }

	  lib$es6$promise$polyfill$$default();
	}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), (function() { return this; }()), __webpack_require__(6)(module)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function cachedSetTimeout() {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function cachedClearTimeout() {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout.call(null, cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout.call(null, timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout.call(null, drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Store = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _debug = __webpack_require__(3);

	var _fun = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// class store
	var Store = function () {

	  // store constructor
	  function Store(_ref) {
	    var _ref$initialState = _ref.initialState;
	    var initialState = _ref$initialState === undefined ? {} : _ref$initialState;
	    var _ref$mutation = _ref.mutation;
	    var mutation = _ref$mutation === undefined ? function (state, mutation) {
	      return state;
	    } : _ref$mutation;
	    var _ref$modules = _ref.modules;
	    var modules = _ref$modules === undefined ? {} : _ref$modules;
	    var _ref$middlewares = _ref.middlewares;
	    var middlewares = _ref$middlewares === undefined ? [] : _ref$middlewares;
	    var _ref$name = _ref.name;
	    var name = _ref$name === undefined ? 'store' : _ref$name;

	    _classCallCheck(this, Store);

	    this.name = name;
	    this.id = (0, _fun.uid)('store-' + name);
	    this._cloneOptions = {};

	    // set options to clone
	    Object.keys(arguments[0]).forEach(function (key) {
	      this._cloneOptions = (0, _fun.deepClone)(arguments[0][key]);
	    }.bind(this));

	    // check
	    if ((typeof initialState === 'undefined' ? 'undefined' : _typeof(initialState)) != 'object') this._error('The `initialState` must be pure object!');

	    if (typeof mutation != 'function') this._error('The `mutation` must be pure function!');

	    Object.keys(modules).forEach(function (key) {
	      var store = modules[key];

	      if (typeof key != 'string') {
	        this._error('The key of `modules` must be string!');
	      }

	      if (!store._isSFluxInstance) {
	        this._error('The value of `modules` must be `Store instance`!');
	      }

	      modules[key] = store.clone();
	    }.bind(this));

	    this._callbacks = [];
	    this._mutation = mutation;
	    this._modules = modules;
	    this._middlewares = middlewares;
	    this._isSFluxInstance = true;

	    this._isDispatching = false;
	    this._isDispatched = false;

	    // init state
	    this._state = initialState;
	    Object.keys(modules).forEach(function (key) {
	      var store = modules[key];
	      this._state[key] = store.getState();
	    }.bind(this));

	    // middlewares
	    this._middlewares.forEach(function (middleware) {
	      if (typeof middleware.onInit === 'function') {
	        middleware.onInit(this._state, this);
	      }
	    }.bind(this));
	  }

	  // get store state


	  _createClass(Store, [{
	    key: 'getState',
	    value: function getState() {
	      return this._state;
	    }

	    // mutation = {type, data}

	  }, {
	    key: 'dispatch',
	    value: function dispatch(mutation) {
	      var state, nextState;

	      if (this._isDispatching) {
	        (0, _debug.error)('<Store> Can not make another dispatch in one dispatch in the store!');
	      }

	      this._isDispatching = true;
	      this._isDispatched = true;
	      Object.keys(this._modules).forEach(function (key) {
	        var store = this._modules[key];
	        store._isDispatched = false;
	      }.bind(this));

	      // middlewares
	      this._middlewares.forEach(function (middleware) {
	        if (typeof middleware.onBeforeMutation === 'function') {
	          middleware.onBeforeMutation(mutation, this._state, this);
	        }
	      }.bind(this));

	      state = this.getState();
	      nextState = this._mutation(state, mutation);

	      Object.keys(this._modules).forEach(function (key) {
	        var store = this._modules[key];
	        if (!store._isDispatched) {
	          store.dispatch(mutation);
	          this._state[key] = store.getState();
	        }
	      }.bind(this));

	      // middlewares
	      this._middlewares.forEach(function (middleware) {
	        if (typeof middleware.onMutation === 'function') {
	          middleware.onMutation(mutation, this._state, this);
	        }
	      }.bind(this));

	      this.emitChange();
	      this._isDispatching = false;
	    }

	    // emitChange

	  }, {
	    key: 'emitChange',
	    value: function emitChange() {
	      var store = this;
	      this._callbacks.forEach(function (callback) {
	        callback(store);
	      });
	    }

	    // subscribe

	  }, {
	    key: 'subscribe',
	    value: function subscribe(callback) {
	      var callbacks = this._callbacks;
	      var index = callbacks.indexOf(callback);
	      var isSubscribed = true;

	      if (index != -1) this._error('The callback function has been subscribed!');

	      callbacks.push(callback);

	      return function unsubscribe() {
	        var idx;

	        if (!isSubscribed) return;
	        idx = callbacks.indexOf(callback);
	        callbacks.splice(idx, 1);
	        isSubscribed = false;
	      };
	    }

	    // 提前触发一个module

	  }, {
	    key: 'module',
	    value: function module(key) {
	      var mutation = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var store = this._mixins[key];
	      if (!store) this._error('The modules<' + key + '> not registed in the store!');
	      if (store._isDispatched) return;
	      store.dispatch(mutation);
	      this._state[key] = store.getState();
	    }

	    // 从初始状态复制一个store

	  }, {
	    key: 'clone',
	    value: function clone() {
	      return new Store(this._cloneOptions);
	    }
	  }, {
	    key: '_error',
	    value: function _error(message) {
	      (0, _debug.error)('<Store: ' + this.id + '> ' + message);
	    }
	  }]);

	  return Store;
	}();

	exports.Store = Store;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.uid = uid;
	exports.deepClone = deepClone;
	var uidIndex = 0;

	// uid
	function uid(description) {
	  uidIndex++;
	  return 's-flux-[' + description + ']-' + uidIndex;
	}

	/**
	 * Deep clone an object. Faster than JSON.parse(JSON.stringify()).
	 *
	 * @param {*} obj
	 * @return {*}
	 */
	function deepClone(obj) {
	  if (Array.isArray(obj)) {
	    return obj.map(deepClone);
	  } else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	    var cloned = {};
	    var keys = Object.keys(obj);
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i];
	      cloned[key] = deepClone(obj[key]);
	    }
	    return cloned;
	  } else {
	    return obj;
	  }
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createMutationTypes = createMutationTypes;
	exports.createMutationType = createMutationType;

	var _fun = __webpack_require__(10);

	// 创建一组mutation types
	function createMutationTypes() {
	  var types = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	  var typesObj = {};
	  types.forEach(function (type) {
	    typesObj[type] = (0, _fun.uid)('mutation-type-' + type);
	  });
	  return typesObj;
	}

	// 创建一个mutation types
	function createMutationType(type) {
	  return (0, _fun.uid)('mutation-type-' + type);
	}

/***/ }
/******/ ])
});
;
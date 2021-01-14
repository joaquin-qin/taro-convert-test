(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["taro"],{

/***/ "./node_modules/@tarojs/api/dist/index.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/@tarojs/api/dist/index.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, window) {/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.assign = function (target) {
    // .length of function is 2
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
}

if (typeof Object.defineProperties !== 'function') {
  Object.defineProperties = function (obj, properties) {
    function convertToDescriptor(desc) {
      function hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

      function isCallable(v) {
        // NB: modify as necessary if other values than functions are callable.
        return typeof v === 'function';
      }

      if (_typeof(desc) !== 'object' || desc === null) {
        throw new TypeError('bad desc');
      }

      var d = {};
      if (hasProperty(desc, 'enumerable')) d.enumerable = !!desc.enumerable;

      if (hasProperty(desc, 'configurable')) {
        d.configurable = !!desc.configurable;
      }

      if (hasProperty(desc, 'value')) d.value = desc.value;
      if (hasProperty(desc, 'writable')) d.writable = !!desc.writable;

      if (hasProperty(desc, 'get')) {
        var g = desc.get;

        if (!isCallable(g) && typeof g !== 'undefined') {
          throw new TypeError('bad get');
        }

        d.get = g;
      }

      if (hasProperty(desc, 'set')) {
        var s = desc.set;

        if (!isCallable(s) && typeof s !== 'undefined') {
          throw new TypeError('bad set');
        }

        d.set = s;
      }

      if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
        throw new TypeError('identity-confused descriptor');
      }

      return d;
    }

    if (_typeof(obj) !== 'object' || obj === null) throw new TypeError('bad obj');
    properties = Object(properties);
    var keys = Object.keys(properties);
    var descs = [];

    for (var i = 0; i < keys.length; i++) {
      descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
    }

    for (var _i = 0; _i < descs.length; _i++) {
      Object.defineProperty(obj, descs[_i][0], descs[_i][1]);
    }

    return obj;
  };
}

var ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD'
};
var _env = null; // 一个taro项目肯定运行同样的环境

function getEnv() {
  if (_env) return _env;

  if (typeof jd !== 'undefined' && jd.getSystemInfo) {
    _env = ENV_TYPE.JD;
    return ENV_TYPE.JD;
  }

  if (typeof qq !== 'undefined' && qq.getSystemInfo) {
    _env = ENV_TYPE.QQ;
    return ENV_TYPE.QQ;
  }

  if (typeof tt !== 'undefined' && tt.getSystemInfo) {
    _env = ENV_TYPE.TT;
    return ENV_TYPE.TT;
  }

  if (typeof wx !== 'undefined' && wx.getSystemInfo) {
    _env = ENV_TYPE.WEAPP;
    return ENV_TYPE.WEAPP;
  }

  if (typeof swan !== 'undefined' && swan.getSystemInfo) {
    _env = ENV_TYPE.SWAN;
    return ENV_TYPE.SWAN;
  }

  if (typeof my !== 'undefined' && my.getSystemInfo) {
    _env = ENV_TYPE.ALIPAY;
    return ENV_TYPE.ALIPAY;
  }

  if (typeof global !== 'undefined' && global.__fbGenNativeModule) {
    _env = ENV_TYPE.RN;
    return ENV_TYPE.RN;
  }

  if (typeof window !== 'undefined') {
    _env = ENV_TYPE.WEB;
    return ENV_TYPE.WEB;
  }

  return 'Unknown environment';
}

function render() {}

var Chain = /*#__PURE__*/function () {
  function Chain(requestParams) {
    var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Chain);

    this.index = index;
    this.requestParams = requestParams;
    this.interceptors = interceptors;
  }

  _createClass(Chain, [{
    key: "proceed",
    value: function proceed(requestParams) {
      this.requestParams = requestParams;

      if (this.index >= this.interceptors.length) {
        throw new Error('chain 参数错误, 请勿直接修改 request.chain');
      }

      var nextInterceptor = this._getNextInterceptor();

      var nextChain = this._getNextChain();

      var p = nextInterceptor(nextChain);
      var res = p["catch"](function (err) {
        return Promise.reject(err);
      });
      if (typeof p.abort === 'function') res.abort = p.abort;
      return res;
    }
  }, {
    key: "_getNextInterceptor",
    value: function _getNextInterceptor() {
      return this.interceptors[this.index];
    }
  }, {
    key: "_getNextChain",
    value: function _getNextChain() {
      return new Chain(this.requestParams, this.interceptors, this.index + 1);
    }
  }]);

  return Chain;
}();

var Link = /*#__PURE__*/function () {
  function Link(interceptor) {
    _classCallCheck(this, Link);

    this.taroInterceptor = interceptor;
    this.chain = new Chain();
  }

  _createClass(Link, [{
    key: "request",
    value: function request(requestParams) {
      var _this = this;

      this.chain.interceptors = this.chain.interceptors.filter(function (interceptor) {
        return interceptor !== _this.taroInterceptor;
      });
      this.chain.interceptors.push(this.taroInterceptor);
      return this.chain.proceed(_objectSpread2({}, requestParams));
    }
  }, {
    key: "addInterceptor",
    value: function addInterceptor(interceptor) {
      this.chain.interceptors.push(interceptor);
    }
  }, {
    key: "cleanInterceptors",
    value: function cleanInterceptors() {
      this.chain = new Chain();
    }
  }]);

  return Link;
}();

function timeoutInterceptor(chain) {
  var requestParams = chain.requestParams;
  var p;
  var res = new Promise(function (resolve, reject) {
    var timeout = setTimeout(function () {
      timeout = null;
      reject(new Error('网络链接超时,请稍后再试！'));
    }, requestParams && requestParams.timeout || 60000);
    p = chain.proceed(requestParams);
    p.then(function (res) {
      if (!timeout) return;
      clearTimeout(timeout);
      resolve(res);
    })["catch"](function (err) {
      timeout && clearTimeout(timeout);
      reject(err);
    });
  });
  if (p !== undefined && typeof p.abort === 'function') res.abort = p.abort;
  return res;
}

function logInterceptor(chain) {
  var requestParams = chain.requestParams;
  var method = requestParams.method,
      data = requestParams.data,
      url = requestParams.url; // eslint-disable-next-line no-console

  console.log("http ".concat(method || 'GET', " --> ").concat(url, " data: "), data);
  var p = chain.proceed(requestParams);
  var res = p.then(function (res) {
    // eslint-disable-next-line no-console
    console.log("http <-- ".concat(url, " result:"), res);
    return res;
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}

var interceptors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  timeoutInterceptor: timeoutInterceptor,
  logInterceptor: logInterceptor
});
var onAndSyncApis = new Set(['clearStorageSync', 'getBatteryInfoSync', 'getExtConfigSync', 'getFileSystemManager', 'getLaunchOptionsSync', 'getStorageInfoSync', 'getStorageSync', 'getSystemInfoSync', 'offAccelerometerChange', 'offAppHide', 'offAppShow', 'offAudioInterruptionBegin', 'offAudioInterruptionEnd', 'offBLECharacteristicValueChange', 'offBLEConnectionStateChange', 'offBluetoothAdapterStateChange', 'offBluetoothDeviceFound', 'offCompassChange', 'offError', 'offGetWifiList', 'offGyroscopeChange', 'offMemoryWarning', 'offNetworkStatusChange', 'offPageNotFound', 'offUnhandledRejection', 'offUserCaptureScreen', 'onAccelerometerChange', 'onAppHide', 'onAppShow', 'onAudioInterruptionBegin', 'onAudioInterruptionEnd', 'onBLECharacteristicValueChange', 'onBLEConnectionStateChange', 'onBeaconServiceChange', 'onBeaconUpdate', 'onBluetoothAdapterStateChange', 'onBluetoothDeviceFound', 'onCompassChange', 'onDeviceMotionChange', 'onError', 'onGetWifiList', 'onGyroscopeChange', 'onMemoryWarning', 'onNetworkStatusChange', 'onPageNotFound', 'onSocketClose', 'onSocketError', 'onSocketMessage', 'onSocketOpen', 'onUnhandledRejection', 'onUserCaptureScreen', 'removeStorageSync', 'reportAnalytics', 'setStorageSync']);
var noPromiseApis = new Set(['arrayBufferToBase64', 'base64ToArrayBuffer', 'canIUse', 'createAnimation', 'createCameraContext', 'createCanvasContext', 'createInnerAudioContext', 'createIntersectionObserver', 'createInterstitialAd', 'createLivePlayerContext', 'createMapContext', 'createSelectorQuery', 'createVideoContext', 'getBackgroundAudioManager', 'getMenuButtonBoundingClientRect', 'getRecorderManager', 'getUpdateManager']);
var otherApis = new Set(['addPhoneContact', 'authorize', 'canvasGetImageData', 'canvasPutImageData', 'canvasToTempFilePath', 'checkSession', 'chooseAddress', 'chooseImage', 'chooseInvoiceTitle', 'chooseLocation', 'chooseVideo', 'clearStorage', 'closeBLEConnection', 'closeBluetoothAdapter', 'closeSocket', 'compressImage', 'connectSocket', 'createBLEConnection', 'downloadFile', 'getAvailableAudioSources', 'getBLEDeviceCharacteristics', 'getBLEDeviceServices', 'getBatteryInfo', 'getBeacons', 'getBluetoothAdapterState', 'getBluetoothDevices', 'getClipboardData', 'getConnectedBluetoothDevices', 'getConnectedWifi', 'getExtConfig', 'getFileInfo', 'getImageInfo', 'getLocation', 'getNetworkType', 'getSavedFileInfo', 'getSavedFileList', 'getScreenBrightness', 'getSetting', 'getStorage', 'getStorageInfo', 'getSystemInfo', 'getUserInfo', 'getWifiList', 'hideHomeButton', 'hideShareMenu', 'hideTabBar', 'hideTabBarRedDot', 'loadFontFace', 'login', 'makePhoneCall', 'navigateBack', 'navigateBackMiniProgram', 'navigateTo', 'navigateToBookshelf', 'navigateToMiniProgram', 'notifyBLECharacteristicValueChange', 'hideKeyboard', 'hideLoading', 'hideNavigationBarLoading', 'hideToast', 'openBluetoothAdapter', 'openDocument', 'openLocation', 'openSetting', 'pageScrollTo', 'previewImage', 'queryBookshelf', 'reLaunch', 'readBLECharacteristicValue', 'redirectTo', 'removeSavedFile', 'removeStorage', 'removeTabBarBadge', 'requestSubscribeMessage', 'saveFile', 'saveImageToPhotosAlbum', 'saveVideoToPhotosAlbum', 'scanCode', 'sendSocketMessage', 'setBackgroundColor', 'setBackgroundTextStyle', 'setClipboardData', 'setEnableDebug', 'setInnerAudioOption', 'setKeepScreenOn', 'setNavigationBarColor', 'setNavigationBarTitle', 'setScreenBrightness', 'setStorage', 'setTabBarBadge', 'setTabBarItem', 'setTabBarStyle', 'showActionSheet', 'showFavoriteGuide', 'showLoading', 'showModal', 'showShareMenu', 'showTabBar', 'showTabBarRedDot', 'showToast', 'startBeaconDiscovery', 'startBluetoothDevicesDiscovery', 'startDeviceMotionListening', 'startPullDownRefresh', 'stopBeaconDiscovery', 'stopBluetoothDevicesDiscovery', 'stopCompass', 'startCompass', 'startAccelerometer', 'stopAccelerometer', 'showNavigationBarLoading', 'stopDeviceMotionListening', 'stopPullDownRefresh', 'switchTab', 'uploadFile', 'vibrateLong', 'vibrateShort', 'writeBLECharacteristicValue']);

function initPxTransform(config) {
  var _config$designWidth = config.designWidth,
      designWidth = _config$designWidth === void 0 ? 700 : _config$designWidth,
      _config$deviceRatio = config.deviceRatio,
      deviceRatio = _config$deviceRatio === void 0 ? {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  } : _config$deviceRatio;
  this.config = this.config || {};
  this.config.designWidth = designWidth;
  this.config.deviceRatio = deviceRatio;
}
/* eslint-disable camelcase */


var Behavior = function Behavior(options) {
  return options;
};

var Taro = {
  Behavior: Behavior,
  Events: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["Events"],
  eventCenter: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["eventCenter"],
  getEnv: getEnv,
  ENV_TYPE: ENV_TYPE,
  render: render,
  noPromiseApis: noPromiseApis,
  onAndSyncApis: onAndSyncApis,
  otherApis: otherApis,
  initPxTransform: initPxTransform,
  Link: Link,
  interceptors: interceptors,
  Current: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["Current"],
  getCurrentInstance: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"],
  useDidShow: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useDidShow"],
  useDidHide: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useDidHide"],
  usePullDownRefresh: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["usePullDownRefresh"],
  useReachBottom: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useReachBottom"],
  usePageScroll: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageScroll"],
  useResize: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useResize"],
  useShareAppMessage: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useShareAppMessage"],
  useTabItemTap: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useTabItemTap"],
  useTitleClick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useTitleClick"],
  useOptionMenuClick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useOptionMenuClick"],
  usePullIntercept: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["usePullIntercept"],
  useShareTimeline: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useShareTimeline"],
  useAddToFavorites: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useAddToFavorites"],
  useReady: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useReady"],
  useRouter: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useRouter"],
  options: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["options"],
  nextTick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["nextTick"]
};
/* harmony default export */ __webpack_exports__["default"] = (Taro);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/@tarojs/plugin-platform-alipay/dist/components-react.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tarojs/plugin-platform-alipay/dist/components-react.js ***!
  \******************************************************************************/
/*! exports provided: Ad, Audio, Block, Button, Camera, Canvas, Checkbox, CheckboxGroup, ContactButton, CoverImage, CoverView, Form, Icon, Image, Input, Label, Lifestyle, LivePlayer, Lottie, Map, MovableArea, MovableView, Navigator, Picker, PickerView, PickerViewColumn, Progress, Radio, RadioGroup, RichText, ScrollView, Slider, Slot, Swiper, SwiperItem, Switch, Text, Textarea, Video, View, WebView */
/*! exports used: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Ad */
/* unused harmony export Audio */
/* unused harmony export Block */
/* unused harmony export Button */
/* unused harmony export Camera */
/* unused harmony export Canvas */
/* unused harmony export Checkbox */
/* unused harmony export CheckboxGroup */
/* unused harmony export ContactButton */
/* unused harmony export CoverImage */
/* unused harmony export CoverView */
/* unused harmony export Form */
/* unused harmony export Icon */
/* unused harmony export Image */
/* unused harmony export Input */
/* unused harmony export Label */
/* unused harmony export Lifestyle */
/* unused harmony export LivePlayer */
/* unused harmony export Lottie */
/* unused harmony export Map */
/* unused harmony export MovableArea */
/* unused harmony export MovableView */
/* unused harmony export Navigator */
/* unused harmony export Picker */
/* unused harmony export PickerView */
/* unused harmony export PickerViewColumn */
/* unused harmony export Progress */
/* unused harmony export Radio */
/* unused harmony export RadioGroup */
/* unused harmony export RichText */
/* unused harmony export ScrollView */
/* unused harmony export Slider */
/* unused harmony export Slot */
/* unused harmony export Swiper */
/* unused harmony export SwiperItem */
/* unused harmony export Switch */
/* unused harmony export Text */
/* unused harmony export Textarea */
/* unused harmony export Video */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
/* unused harmony export WebView */
// For React.createElement's type
var View = 'view';
var Icon = 'icon';
var Progress = 'progress';
var RichText = 'rich-text';
var Text = 'text';
var Button = 'button';
var Checkbox = 'checkbox';
var CheckboxGroup = 'checkbox-group';
var Form = 'form';
var Input = 'input';
var Label = 'label';
var Picker = 'picker';
var PickerView = 'picker-view';
var PickerViewColumn = 'picker-view-column';
var Radio = 'radio';
var RadioGroup = 'radio-group';
var Slider = 'slider';
var Switch = 'switch';
var CoverImage = 'cover-image';
var Textarea = 'textarea';
var CoverView = 'cover-view';
var MovableArea = 'movable-area';
var MovableView = 'movable-view';
var ScrollView = 'scroll-view';
var Swiper = 'swiper';
var SwiperItem = 'swiper-item';
var Navigator = 'navigator';
var Audio = 'audio';
var Camera = 'camera';
var Image = 'image';
var LivePlayer = 'live-player';
var Video = 'video';
var Canvas = 'canvas';
var Ad = 'ad';
var WebView = 'web-view';
var Block = 'block';
var Map = 'map';
var Slot = 'slot';
var Lottie = 'lottie';
var Lifestyle = 'lifestyle';
var ContactButton = 'contact-button';


/***/ }),

/***/ "./node_modules/@tarojs/plugin-platform-alipay/dist/runtime.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@tarojs/plugin-platform-alipay/dist/runtime.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/shared */ "./node_modules/@tarojs/shared/dist/shared.esm.js");



var _onAndSyncApis = new Set(['offSocketClose', 'offSocketError', 'offSocketMessage', 'offSocketOpen', 'getAppIdSync']);

var _noPromiseApis = new Set(['calculateRoute', 'createWebViewContext', 'hideAddToDesktopMenu', 'hideAllAddToDesktopMenu', 'hideAllFavoriteMenu', 'hideBackHome', 'hideFavoriteMenu', 'openCardDetail', 'openCardList', 'openKBVoucherDetail', 'openMerchantCardList', 'openMerchantTicketList', 'openMerchantVoucherList', 'openTicketDetail', 'openTicketList', 'openVoucherDetail', 'openVoucherList', 'setCanPullDown', 'setOptionMenu', 'showSharePanel']);

var _otherApis = new Set(['addCardAuth', 'getOpenUserInfo', 'chooseAlipayContact', 'chooseCity', 'chooseContact', 'choosePhoneContact', 'datePicker', 'getAddress', 'getAuthCode', 'getPhoneNumber', 'getRunData', 'getRunScene', 'getServerTime', 'getTitleColor', 'rsa', 'paySignCenter', 'tradePay', 'isCollected', 'multiLevelSelect', 'onLocatedComplete', 'optionsSelect', 'prompt', 'regionPicker', 'setLocatedCity', 'showAuthGuide', 'textRiskIdentification', 'vibrate', 'watchShake']);

var apiDiff = {
  showActionSheet: {
    options: {
      change: [{
        old: 'itemList',
        new: 'items'
      }]
    }
  },
  showToast: {
    options: {
      change: [{
        old: 'title',
        new: 'content'
      }, {
        old: 'icon',
        new: 'type'
      }]
    }
  },
  showLoading: {
    options: {
      change: [{
        old: 'title',
        new: 'content'
      }]
    }
  },
  setNavigationBarTitle: {
    alias: 'setNavigationBar'
  },
  setNavigationBarColor: {
    alias: 'setNavigationBar'
  },
  saveImageToPhotosAlbum: {
    alias: 'saveImage',
    options: {
      change: [{
        old: 'filePath',
        new: 'url'
      }]
    }
  },
  previewImage: {
    options: {
      set: [{
        key: 'current',
        value: function value(options) {
          return options.urls.indexOf(options.current || options.urls[0]);
        }
      }]
    }
  },
  getFileInfo: {
    options: {
      change: [{
        old: 'filePath',
        new: 'apFilePath'
      }]
    }
  },
  getSavedFileInfo: {
    options: {
      change: [{
        old: 'filePath',
        new: 'apFilePath'
      }]
    }
  },
  removeSavedFile: {
    options: {
      change: [{
        old: 'filePath',
        new: 'apFilePath'
      }]
    }
  },
  saveFile: {
    options: {
      change: [{
        old: 'tempFilePath',
        new: 'apFilePath'
      }]
    }
  },
  openLocation: {
    options: {
      set: [{
        key: 'latitude',
        value: function value(options) {
          return String(options.latitude);
        }
      }, {
        key: 'longitude',
        value: function value(options) {
          return String(options.longitude);
        }
      }]
    }
  },
  uploadFile: {
    options: {
      change: [{
        old: 'name',
        new: 'fileName'
      }]
    }
  },
  getClipboardData: {
    alias: 'getClipboard'
  },
  setClipboardData: {
    alias: 'setClipboard',
    options: {
      change: [{
        old: 'data',
        new: 'text'
      }]
    }
  },
  makePhoneCall: {
    options: {
      change: [{
        old: 'phoneNumber',
        new: 'number'
      }]
    }
  },
  scanCode: {
    alias: 'scan',
    options: {
      change: [{
        old: 'onlyFromCamera',
        new: 'hideAlbum'
      }],
      set: [{
        key: 'type',
        value: function value(options) {
          return options.scanType && options.scanType[0].slice(0, -4) || 'qr';
        }
      }]
    }
  },
  setScreenBrightness: {
    options: {
      change: [{
        old: 'value',
        new: 'brightness'
      }]
    }
  },
  onBLEConnectionStateChange: {
    alias: 'onBLEConnectionStateChanged'
  },
  offBLEConnectionStateChange: {
    alias: 'offBLEConnectionStateChanged'
  },
  createBLEConnection: {
    alias: 'connectBLEDevice'
  },
  closeBLEConnection: {
    alias: 'disconnectBLEDevice'
  }
};
var nativeRequest = my.canIUse('request') ? my.request : my.httpRequest;
var RequestQueue = {
  MAX_REQUEST: 5,
  queue: [],
  request: function request(options) {
    this.push(options); // 返回request task

    return this.run();
  },
  push: function push(options) {
    this.queue.push(options);
  },
  run: function run() {
    var _arguments = arguments,
        _this = this;

    if (!this.queue.length) {
      return;
    }

    if (this.queue.length <= this.MAX_REQUEST) {
      var options = this.queue.shift();
      var completeFn = options.complete;

      options.complete = function () {
        completeFn && completeFn.apply(options, Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_arguments));

        _this.run();
      };

      return nativeRequest(options);
    }
  }
};

function taroInterceptor(chain) {
  return request(chain.requestParams);
}

function request(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      url: options
    };
  }

  var defaultHeaders = {
    'content-type': 'application/json'
  };
  options.headers = defaultHeaders;

  if (options.header) {
    for (var k in options.header) {
      var lowerK = k.toLocaleLowerCase();
      options.headers[lowerK] = options.header[k];
    }

    delete options.header;
  }

  var originSuccess = options.success;
  var originFail = options.fail;
  var originComplete = options.complete;
  var requestTask;
  var p = new Promise(function (resolve, reject) {
    options.success = function (res) {
      res.statusCode = res.status;
      delete res.status;
      res.header = res.headers;
      delete res.headers;
      originSuccess && originSuccess(res);
      resolve(res);
    };

    options.fail = function (res) {
      originFail && originFail(res);
      reject(res);
    };

    options.complete = function (res) {
      originComplete && originComplete(res);
    };

    requestTask = RequestQueue.request(options);
  });

  p.abort = function (cb) {
    cb && cb();

    if (requestTask) {
      requestTask.abort();
    }

    return p;
  };

  return p;
}

function processApis(taro) {
  var onAndSyncApis = new Set([].concat(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(taro.onAndSyncApis), Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_onAndSyncApis)));
  var noPromiseApis = new Set([].concat(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(taro.noPromiseApis), Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_noPromiseApis)));
  var otherApis = new Set([].concat(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(taro.otherApis), Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_otherApis)));
  var apis = [].concat(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(onAndSyncApis), Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(noPromiseApis), Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(otherApis));
  var preloadPrivateKey = '__preload_';
  var preloadInitedComponent = '$preloadComponent';
  apis.forEach(function (key) {
    if (!(key in my)) {
      taro[key] = function () {
        console.warn("\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(key));
      };

      return;
    }

    if (otherApis.has(key)) {
      taro[key] = function (options) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var result = generateSpecialApis(key, options || {});
        var newKey = result.api;
        options = result.options;
        var task = null;
        var obj = Object.assign({}, options);

        if (!(newKey in my)) {
          console.warn("\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(newKey));
          return;
        }

        if (typeof options === 'string') {
          if (args.length) {
            var _my;

            return (_my = my)[newKey].apply(_my, [options].concat(args));
          }

          return my[newKey](options);
        }

        if (key === 'navigateTo' || key === 'redirectTo' || key === 'switchTab') {
          var url = obj.url ? obj.url.replace(/^\//, '') : '';
          if (url.indexOf('?') > -1) url = url.split('?')[0];
          var Component = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* cacheDataGet */ "c"])(url);

          if (Component) {
            var component = new Component();

            if (component.componentWillPreload) {
              var cacheKey = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* getUniqueKey */ "i"])();
              var MarkIndex = obj.url.indexOf('?');
              var hasMark = MarkIndex > -1;
              var urlQueryStr = hasMark ? obj.url.substring(MarkIndex + 1, obj.url.length) : '';
              var params = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* queryToJson */ "v"])(urlQueryStr);
              obj.url += (hasMark ? '&' : '?') + "".concat(preloadPrivateKey, "=").concat(cacheKey);
              Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* cacheDataSet */ "d"])(cacheKey, component.componentWillPreload(params));
              Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* cacheDataSet */ "d"])(preloadInitedComponent, component);
            }
          }
        }

        var p = new Promise(function (resolve, reject) {
          ['fail', 'success', 'complete'].forEach(function (k) {
            obj[k] = function (res) {
              if (k === 'success') {
                if (newKey === 'saveFile') {
                  res.savedFilePath = res.apFilePath;
                } else if (newKey === 'downloadFile') {
                  res.tempFilePath = res.apFilePath;
                } else if (newKey === 'chooseImage') {
                  res.tempFilePaths = res.apFilePaths;
                } else if (newKey === 'getClipboard') {
                  res.data = res.text;
                } else if (newKey === 'scan') {
                  res.result = res.code;
                } else if (newKey === 'getScreenBrightness') {
                  res.value = res.brightness;
                  delete res.brightness;
                }
              }

              options[k] && options[k](res);

              if (k === 'success') {
                resolve(res);
              } else if (k === 'fail') {
                reject(res);
              }
            };
          });

          if (args.length) {
            var _my2;

            task = (_my2 = my)[newKey].apply(_my2, [obj].concat(args));
          } else {
            task = my[newKey](obj);
          }
        });

        if (newKey === 'uploadFile' || newKey === 'downloadFile') {
          p.progress = function (cb) {
            if (task) {
              task.onProgressUpdate(cb);
            }

            return p;
          };

          p.abort = function (cb) {
            cb && cb();

            if (task) {
              task.abort();
            }

            return p;
          };
        }

        return p;
      };
    } else {
      taro[key] = function () {
        if (!(key in my)) {
          console.warn("\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(key));
          return;
        }

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        if (key === 'getStorageSync') {
          var arg1 = args[0];

          if (arg1 != null) {
            var res = my[key]({
              key: arg1
            }); // 支付宝小程序遗留bug：值可能在data或APDataStorage字段下

            var data = null;

            if (res.hasOwnProperty('data')) {
              data = res.data;
            } else if (res.hasOwnProperty('APDataStorage')) {
              data = res.APDataStorage;
            }

            return data === null ? '' : data;
          }

          return console.error('getStorageSync 传入参数错误');
        }

        if (key === 'setStorageSync') {
          var _arg = args[0];
          var arg2 = args[1];

          if (_arg != null) {
            return my[key]({
              key: _arg,
              data: arg2
            });
          }

          return console.error('setStorageSync 传入参数错误');
        }

        if (key === 'removeStorageSync') {
          var _arg2 = args[0];

          if (_arg2 != null) {
            return my[key]({
              key: _arg2
            });
          }

          return console.error('removeStorageSync 传入参数错误');
        }

        if (key === 'createSelectorQuery') {
          var query = my[key]();

          query.in = function () {
            return query;
          };

          return query;
        }

        var argsLen = args.length;
        var newArgs = args.concat();
        var lastArg = newArgs[argsLen - 1];

        if (lastArg && lastArg.isTaroComponent && lastArg.$scope) {
          newArgs.splice(argsLen - 1, 1, lastArg.$scope);
        }

        return my[key].apply(my, newArgs);
      };
    }
  });
}

function pxTransform(size) {
  var _ref = this.config || {},
      _ref$designWidth = _ref.designWidth,
      designWidth = _ref$designWidth === void 0 ? 750 : _ref$designWidth,
      _ref$deviceRatio = _ref.deviceRatio,
      deviceRatio = _ref$deviceRatio === void 0 ? {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  } : _ref$deviceRatio;

  if (!(designWidth in deviceRatio)) {
    throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(designWidth, " \u7684\u8BBE\u7F6E\uFF01"));
  }

  return parseInt(size, 10) * deviceRatio[designWidth] + 'rpx';
}

function generateSpecialApis(api, options) {
  var apiAlias = api;

  if (api === 'showModal') {
    options.cancelButtonText = options.cancelText || '取消';
    options.confirmButtonText = options.confirmText || '确定';
    apiAlias = 'confirm';

    if (options.showCancel === false) {
      options.buttonText = options.confirmText || '确定';
      apiAlias = 'alert';
    }
  } else {
    Object.keys(apiDiff).forEach(function (item) {
      var apiItem = apiDiff[item];

      if (api === item) {
        if (apiItem.alias) {
          apiAlias = apiItem.alias;
        }

        if (apiItem.options) {
          var change = apiItem.options.change;
          var set = apiItem.options.set;

          if (change) {
            change.forEach(function (changeItem) {
              options[changeItem.new] = options[changeItem.old];
            });
          }

          if (set) {
            set.forEach(function (setItem) {
              options[setItem.key] = typeof setItem.value === 'function' ? setItem.value(options) : setItem.value;
            });
          }
        }
      }
    });
  }

  return {
    api: apiAlias,
    options: options
  };
}

function initNativeApi(taro) {
  processApis(taro);
  var link = new taro.Link(taroInterceptor);
  taro.request = link.request.bind(link);
  taro.addInterceptor = link.addInterceptor.bind(link);
  taro.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro.getCurrentPages = getCurrentPages;
  taro.getApp = getApp;
  taro.initPxTransform = taro.initPxTransform.bind(taro);
  taro.pxTransform = pxTransform.bind(taro);
  taro.env = my.env;
}

var components = {
  // ======== 调整属性 ========
  View: {
    'disable-scroll': 'false',
    hidden: 'false',
    bindAppear: '',
    bindDisappear: '',
    bindFirstAppear: ''
  },
  Text: {
    'number-of-lines': ''
  },
  Map: {
    skew: '0',
    rotate: '0',
    polygons: '[]',
    'include-padding': '',
    'ground-overlays': '',
    'tile-overlay': '',
    'custom-map-style': '',
    setting: '{}',
    bindRegionChange: '',
    bindPanelTap: ''
  },
  Button: {
    scope: '',
    'public-id': '',
    bindGetAuthorize: '',
    bindError: ''
  },
  Checkbox: {
    bindChange: ''
  },
  Input: {
    'random-number': 'false',
    controlled: 'false'
  },
  Slider: {
    'track-size': '4',
    'handle-size': '22',
    'handle-color': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* singleQuote */ "w"])('#ffffff')
  },
  Switch: {
    controlled: 'false'
  },
  Textarea: {
    'show-count': 'true',
    controlled: 'false',
    enableNative: 'false'
  },
  MovableView: {
    bindChangeEnd: ''
  },
  ScrollView: {
    'scroll-animation-duration': '',
    'trap-scroll': 'false'
  },
  Swiper: {
    'active-class': '',
    'changing-class': '',
    acceleration: 'false',
    'disable-programmatic-animation': 'false',
    'disable-touch': 'false',
    bindAnimationEnd: ''
  },
  Image: {
    'default-source': ''
  },
  Canvas: {
    width: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* singleQuote */ "w"])('300px'),
    height: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* singleQuote */ "w"])('225px')
  },
  Video: {
    'poster-size': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* singleQuote */ "w"])('contain'),
    'mobilenet-hint-type': '1',
    enableNative: 'false',
    bindLoading: '',
    bindUserAction: '',
    bindStop: '',
    bindRenderStart: ''
  },
  // ======== 额外组件 ========
  Lottie: {
    autoplay: 'false',
    path: '',
    speed: '1.0',
    repeatCount: '0',
    autoReverse: 'false',
    assetsPath: '',
    placeholder: '',
    djangoId: '',
    md5: '',
    optimize: 'false',
    bindDataReady: '',
    bindDataFailed: '',
    bindAnimationStart: '',
    bindAnimationEnd: '',
    bindAnimationRepeat: '',
    bindAnimationCancel: '',
    bindDataLoadReady: ''
  },
  Lifestyle: {
    'public-id': '',
    memo: '',
    bindFollow: ''
  },
  ContactButton: {
    'tnt-inst-id': '',
    scene: '',
    size: '25',
    color: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* singleQuote */ "w"])('#00A3FF'),
    icon: '',
    'alipay-card-no': '',
    'ext-info': ''
  }
};
var hostConfig = {
  initNativeApi: initNativeApi,
  getEventCenter: function getEventCenter(Events) {
    if (!my.taroEventCenter) {
      my.taroEventCenter = new Events();
    }

    return my.taroEventCenter;
  },
  modifyDispatchEvent: function modifyDispatchEvent(event, tagName) {
    if (tagName === 'SWIPER' && event.type === 'animationend') {
      event.type = 'animationfinish';
    }
  }
};
Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* mergeReconciler */ "t"])(hostConfig);
Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* mergeInternalComponents */ "s"])(components);

/***/ }),

/***/ "./node_modules/@tarojs/react/dist/react.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@tarojs/react/dist/react.esm.js ***!
  \******************************************************/
/*! exports provided: default, createPortal, findDOMNode, render, unmountComponentAtNode, unstable_batchedUpdates */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createPortal */
/* unused harmony export findDOMNode */
/* unused harmony export render */
/* unused harmony export unmountComponentAtNode */
/* unused harmony export unstable_batchedUpdates */
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reconciler */ "./node_modules/react-reconciler/cjs/react-reconciler.production.min.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reconciler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scheduler */ "./node_modules/scheduler/cjs/scheduler.production.min.js");
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(scheduler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/shared */ "./node_modules/@tarojs/shared/dist/shared.esm.js");







function isEventName(s) {
  return s[0] === 'o' && s[1] === 'n';
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

function updateProps(dom, oldProps, newProps) {
  var i;

  for (i in oldProps) {
    if (!(i in newProps)) {
      setProperty(dom, i, null, oldProps[i]);
    }
  }

  var isFormElement = dom instanceof _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__["FormElement"];

  for (i in newProps) {
    if (oldProps[i] !== newProps[i] || isFormElement && i === 'value') {
      setProperty(dom, i, newProps[i], oldProps[i]);
    }
  }
}

function eventProxy(e) {
  var el = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__["document"].getElementById(e.currentTarget.id);
  var handlers = el.__handlers[e.type];
  handlers[0](e);
}

function setEvent(dom, name, value, oldValue) {
  var isCapture = name.endsWith('Capture');
  var eventName = name.toLowerCase().slice(2);

  if (isCapture) {
    eventName = eventName.slice(0, -7);
  }

  var compName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__[/* capitalize */ "e"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__[/* toCamelCase */ "x"])(dom.tagName.toLowerCase()));

  if (eventName === 'click' && compName in _tarojs_shared__WEBPACK_IMPORTED_MODULE_5__[/* internalComponents */ "k"]) {
    eventName = 'tap';
  }

  if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "n"])(value)) {
    if (!oldValue) {
      dom.addEventListener(eventName, eventProxy, isCapture);
    }

    if (eventName === 'regionchange') {
      dom.__handlers.begin[0] = value;
      dom.__handlers.end[0] = value;
    } else {
      dom.__handlers[eventName][0] = value;
    }
  } else {
    dom.removeEventListener(eventName, eventProxy);
  }
}

function setStyle(style, key, value) {
  if (key[0] === '-') {
    style.setProperty(key, value.toString());
  }

  style[key] = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__[/* isNumber */ "o"])(value) && IS_NON_DIMENSIONAL.test(key) === false ? value + 'px' : value == null ? '' : value;
}

function setProperty(dom, name, value, oldValue) {
  var _a, _b, _c, _d;

  name = name === 'className' ? 'class' : name;
  if (name === 'key' || name === 'children' || name === 'ref') ;else if (name === 'style') {
    var style = dom.style;

    if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "q"])(value)) {
      style.cssText = value;
    } else {
      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "q"])(oldValue)) {
        style.cssText = '';
        oldValue = null;
      }

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "p"])(oldValue)) {
        for (var i in oldValue) {
          if (!(value && i in value)) {
            setStyle(style, i, '');
          }
        }
      }

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "p"])(value)) {
        for (var _i in value) {
          if (!oldValue || value[_i] !== oldValue[_i]) {
            setStyle(style, _i, value[_i]);
          }
        }
      }
    }
  } else if (isEventName(name)) {
    setEvent(dom, name, value, oldValue);
  } else if (name === 'dangerouslySetInnerHTML') {
    var newHtml = (_b = (_a = value) === null || _a === void 0 ? void 0 : _a.__html) !== null && _b !== void 0 ? _b : '';
    var oldHtml = (_d = (_c = oldValue) === null || _c === void 0 ? void 0 : _c.__html) !== null && _d !== void 0 ? _d : '';

    if (newHtml || oldHtml) {
      if (oldHtml !== newHtml) {
        dom.innerHTML = newHtml;
      }
    }
  } else if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "n"])(value)) {
    if (value == null) {
      dom.removeAttribute(name);
    } else {
      dom.setAttribute(name, value);
    }
  }
}
/* eslint-disable @typescript-eslint/indent */


var scheduleDeferredCallback = scheduler__WEBPACK_IMPORTED_MODULE_3__["unstable_scheduleCallback"],
    cancelDeferredCallback = scheduler__WEBPACK_IMPORTED_MODULE_3__["unstable_cancelCallback"],
    now = scheduler__WEBPACK_IMPORTED_MODULE_3__["unstable_now"];

function returnFalse() {
  return false;
}

var hostConfig = {
  createInstance: function createInstance(type) {
    return _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__["document"].createElement(type);
  },
  createTextInstance: function createTextInstance(text) {
    return _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__["document"].createTextNode(text);
  },
  getPublicInstance: function getPublicInstance(inst) {
    return inst;
  },
  getRootHostContext: function getRootHostContext() {
    return {};
  },
  getChildHostContext: function getChildHostContext() {
    return {};
  },
  appendChild: function appendChild(parent, child) {
    parent.appendChild(child);
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    parent.appendChild(child);
  },
  appendChildToContainer: function appendChildToContainer(parent, child) {
    parent.appendChild(child);
  },
  removeChild: function removeChild(parent, child) {
    parent.removeChild(child);
  },
  removeChildFromContainer: function removeChildFromContainer(parent, child) {
    parent.removeChild(child);
  },
  insertBefore: function insertBefore(parent, child, refChild) {
    parent.insertBefore(child, refChild);
  },
  insertInContainerBefore: function insertInContainerBefore(parent, child, refChild) {
    parent.insertBefore(child, refChild);
  },
  commitTextUpdate: function commitTextUpdate(textInst, _, newText) {
    textInst.nodeValue = newText;
  },
  finalizeInitialChildren: function finalizeInitialChildren(dom, _, props) {
    updateProps(dom, {}, props);
    return false;
  },
  prepareUpdate: function prepareUpdate() {
    return _tarojs_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_ARR */ "a"];
  },
  commitUpdate: function commitUpdate(dom, _payload, _type, oldProps, newProps) {
    updateProps(dom, oldProps, newProps);
  },
  hideInstance: function hideInstance(instance) {
    var style = instance.style;
    style.setProperty('display', 'none');
  },
  unhideInstance: function unhideInstance(instance, props) {
    var styleProp = props.style;
    var display = (styleProp === null || styleProp === void 0 ? void 0 : styleProp.hasOwnProperty('display')) ? styleProp.display : null;
    display = display == null || typeof display === 'boolean' || display === '' ? '' : ('' + display).trim(); // eslint-disable-next-line dot-notation

    instance.style['display'] = display;
  },
  shouldSetTextContent: returnFalse,
  shouldDeprioritizeSubtree: returnFalse,
  prepareForCommit: _tarojs_shared__WEBPACK_IMPORTED_MODULE_5__[/* noop */ "u"],
  resetAfterCommit: _tarojs_shared__WEBPACK_IMPORTED_MODULE_5__[/* noop */ "u"],
  commitMount: _tarojs_shared__WEBPACK_IMPORTED_MODULE_5__[/* noop */ "u"],
  now: now,
  scheduleDeferredCallback: scheduleDeferredCallback,
  cancelDeferredCallback: cancelDeferredCallback,
  clearTimeout: clearTimeout,
  setTimeout: setTimeout,
  noTimeout: -1,
  supportsMutation: true,
  supportsPersistence: false,
  isPrimaryRenderer: true,
  supportsHydration: false
};
var TaroReconciler = react_reconciler__WEBPACK_IMPORTED_MODULE_2___default()(hostConfig);
var ContainerMap = new WeakMap();

var Root = /*#__PURE__*/function () {
  function Root(renderer, domContainer) {
    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Root);

    this.renderer = renderer;
    this.internalRoot = renderer.createContainer(domContainer, false, false);
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Root, [{
    key: "render",
    value: function render(children, cb) {
      this.renderer.updateContainer(children, this.internalRoot, null, cb);
      return this.renderer.getPublicRootInstance(this.internalRoot);
    }
  }, {
    key: "unmount",
    value: function unmount(cb) {
      this.renderer.updateContainer(null, this.internalRoot, null, cb);
    }
  }]);

  return Root;
}();

function render(element, domContainer, cb) {
  var oldRoot = ContainerMap.get(domContainer);

  if (oldRoot != null) {
    return oldRoot.render(element, cb);
  }

  var root = new Root(TaroReconciler, domContainer);
  ContainerMap.set(domContainer, root);
  return root.render(element, cb);
}
/* eslint-disable @typescript-eslint/no-unused-vars */


var unstable_batchedUpdates = TaroReconciler.batchedUpdates;

function unmountComponentAtNode(dom) {
  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__[/* ensure */ "h"])(dom && [1, 8, 9, 11].includes(dom.nodeType), 'unmountComponentAtNode(...): Target container is not a DOM element.');
  var root = ContainerMap.get(dom);
  if (!root) return false;
  unstable_batchedUpdates(function () {
    root.unmount(function () {
      ContainerMap.delete(dom);
    });
  });
  return true;
}

function findDOMNode(comp) {
  if (comp == null) {
    return null;
  }

  var nodeType = comp.nodeType;

  if (nodeType === 1 || nodeType === 3) {
    return comp;
  }

  return TaroReconciler.findHostInstance(comp);
}

var portalType = typeof Symbol === 'function' && Symbol.for ? Symbol.for('react.portal') : 0xeaca;

function createPortal(children, containerInfo, key) {
  return {
    $$typeof: portalType,
    key: key == null ? null : String(key),
    children: children,
    containerInfo: containerInfo,
    implementation: null
  };
}

var index = {
  render: render,
  unstable_batchedUpdates: unstable_batchedUpdates,
  unmountComponentAtNode: unmountComponentAtNode,
  findDOMNode: findDOMNode,
  createPortal: createPortal
};
/* harmony default export */ __webpack_exports__["a"] = (index);


/***/ }),

/***/ "./node_modules/@tarojs/runtime/dist/runtime.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tarojs/runtime/dist/runtime.esm.js ***!
  \**********************************************************/
/*! exports provided: Current, CurrentReconciler, Events, FormElement, Style, TaroElement, TaroEvent, TaroNode, TaroRootElement, TaroText, cancelAnimationFrame, connectReactPage, connectVuePage, createComponentConfig, createDocument, createEvent, createPageConfig, createReactApp, createRecursiveComponentConfig, createVue3App, createVueApp, document, eventCenter, getComputedStyle, getCurrentInstance, hydrate, injectPageInstance, navigator, nextTick, now, options, requestAnimationFrame, stringify, useAddToFavorites, useDidHide, useDidShow, useOptionMenuClick, usePageScroll, usePullDownRefresh, usePullIntercept, useReachBottom, useReady, useResize, useRouter, useScope, useShareAppMessage, useShareTimeline, useTabItemTap, useTitleClick, window */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(document, window, requestAnimationFrame, cancelAnimationFrame, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Current", function() { return Current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentReconciler", function() { return CurrentReconciler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElement", function() { return FormElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroElement", function() { return TaroElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroEvent", function() { return TaroEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroNode", function() { return TaroNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroRootElement", function() { return TaroRootElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroText", function() { return TaroText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return caf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectReactPage", function() { return connectReactPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectVuePage", function() { return connectVuePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponentConfig", function() { return createComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDocument", function() { return createDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return createPageConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactApp", function() { return createReactApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRecursiveComponentConfig", function() { return createRecursiveComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVue3App", function() { return createVue3App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVueApp", function() { return createVueApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventCenter", function() { return eventCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return getComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return getCurrentInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectPageInstance", function() { return injectPageInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddToFavorites", function() { return useAddToFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDidHide", function() { return useDidHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDidShow", function() { return useDidShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOptionMenuClick", function() { return useOptionMenuClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageScroll", function() { return usePageScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullDownRefresh", function() { return usePullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullIntercept", function() { return usePullIntercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReachBottom", function() { return useReachBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReady", function() { return useReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResize", function() { return useResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScope", function() { return useScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShareAppMessage", function() { return useShareAppMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShareTimeline", function() { return useShareTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTabItemTap", function() { return useTabItemTap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTitleClick", function() { return useTitleClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window$1; });
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/shared */ "./node_modules/@tarojs/shared/dist/shared.esm.js");
















var incrementId = function incrementId() {
  var id = 0;
  return function () {
    return (id++).toString();
  };
};

function isElement(node) {
  return node.nodeType === 1
  /* ELEMENT_NODE */
  ;
}

function isText(node) {
  return node.nodeType === 3
  /* TEXT_NODE */
  ;
}

var TaroEventTarget = /*#__PURE__*/function () {
  function TaroEventTarget() {
    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, TaroEventTarget);

    this.__handlers = {};
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(TaroEventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, handler, options) {
      if (type === 'regionchange') {
        // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
        this.addEventListener('begin', handler, options);
        this.addEventListener('end', handler, options);
        return;
      }

      type = type.toLowerCase();
      var handlers = this.__handlers[type];
      var isCapture = Boolean(options);
      var isOnce = false;

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isObject */ "p"])(options)) {
        isCapture = Boolean(options.capture);
        isOnce = Boolean(options.once);
      }

      if (isOnce) {
        var wrapper = function wrapper() {
          handler.apply(this, arguments); // this 指向 Element

          this.removeEventListener(type, wrapper);
        };

        this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), {
          once: false
        }));
        return;
      }

      Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* warn */ "z"])(isCapture, 'The event capture feature is unimplemented.');

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isArray */ "l"])(handlers)) {
        handlers.push(handler);
      } else {
        this.__handlers[type] = [handler];
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      type = type.toLowerCase();

      if (handler == null) {
        return;
      }

      var handlers = this.__handlers[type];

      if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isArray */ "l"])(handlers)) {
        return;
      }

      var index = handlers.indexOf(handler);
      Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* warn */ "z"])(index === -1, "\u4E8B\u4EF6: '".concat(type, "' \u6CA1\u6709\u6CE8\u518C\u5728 DOM \u4E2D\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u88AB\u79FB\u9664\u3002"));
      handlers.splice(index, 1);
    }
  }]);

  return TaroEventTarget;
}();

var eventSource = new Map();

var TaroEvent = /*#__PURE__*/function () {
  function TaroEvent(type, opts, event) {
    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, TaroEvent);

    this._stop = false;
    this._end = false;
    this.defaultPrevented = false; // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
    // here use hi-res timestamp

    this.timeStamp = Date.now();
    this.type = type.toLowerCase();
    this.mpEvent = event;
    this.bubbles = Boolean(opts && opts.bubbles);
    this.cancelable = Boolean(opts && opts.cancelable);
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(TaroEvent, [{
    key: "stopPropagation",
    value: function stopPropagation() {
      this._stop = true;
    }
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this._end = this._stop = true;
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      this.defaultPrevented = true;
    }
  }, {
    key: "target",
    get: function get() {
      var _a, _b, _c;

      var element = document$1.getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target.id);
      return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.target), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), {
        dataset: element !== null ? element.dataset : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"]
      });
    }
  }, {
    key: "currentTarget",
    get: function get() {
      var _a, _b, _c;

      var element = document$1.getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget.id);

      if (element === null) {
        return this.target;
      }

      return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.currentTarget), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), {
        dataset: element.dataset
      });
    }
  }]);

  return TaroEvent;
}();

function createEvent(event, _) {
  if (typeof event === 'string') {
    return new TaroEvent(event, {
      bubbles: true,
      cancelable: true
    });
  }

  var domEv = new TaroEvent(event.type, {
    bubbles: true,
    cancelable: true
  }, event);

  for (var key in event) {
    if (key === 'currentTarget' || key === 'target' || key === 'type' || key === 'timeStamp') {
      continue;
    } else {
      domEv[key] = event[key];
    }
  }

  return domEv;
}

function eventHandler(event) {
  if (event.currentTarget == null) {
    event.currentTarget = event.target;
  }

  var node = document$1.getElementById(event.currentTarget.id);

  if (node != null) {
    node.dispatchEvent(createEvent(event));
  }
}
/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */


function hydrate(node) {
  var _data;

  if (isText(node)) {
    var _ref;

    return _ref = {}, Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(_ref, "v"
    /* Text */
    , node.nodeValue), Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(_ref, "nn"
    /* NodeName */
    , node.nodeName), _ref;
  }

  var data = (_data = {}, Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(_data, "nn"
  /* NodeName */
  , node.nodeName), Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(_data, "uid", node.uid), _data);
  var props = node.props,
      childNodes = node.childNodes;

  for (var prop in props) {
    var propInCamelCase = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "x"])(prop);

    if (!prop.startsWith('data-') && // 在 node.dataset 的数据
    prop !== 'class' && prop !== 'style' && prop !== 'id' && propInCamelCase !== 'catchMove') {
      data[propInCamelCase] = props[prop];
    }

    if (node.nodeName === 'view' && propInCamelCase === 'catchMove' && props[prop] !== 'false') {
      data["nn"
      /* NodeName */
      ] = 'catch-view';
    }
  }

  if (childNodes.length > 0) {
    data["cn"
    /* Childnodes */
    ] = childNodes.map(hydrate);
  }

  if (node.className !== '') {
    data["cl"
    /* Class */
    ] = node.className;
  }

  if (node.cssText !== '' && node.nodeName !== 'swiper-item') {
    data["st"
    /* Style */
    ] = node.cssText;
  }

  return data;
}

var CurrentReconciler = Object.assign({
  getLifecyle: function getLifecyle(instance, lifecyle) {
    return instance[lifecyle];
  },
  getPathIndex: function getPathIndex(indexOfNode) {
    return "[".concat(indexOfNode, "]");
  },
  getEventCenter: function getEventCenter(Events) {
    return new Events();
  }
}, _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* defaultReconciler */ "g"]);
var options = {
  prerender: true,
  debug: false,
  // html 只影响 Element#innerHTML API
  html: {
    skipElements: new Set(['style', 'script']),
    voidElements: new Set(['!doctype', 'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']),
    closingElements: new Set(['html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option', 'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup']),
    renderHTMLTag: false
  },
  reconciler: function reconciler(_reconciler) {
    Object.assign(CurrentReconciler, _reconciler);
  }
};

function initPosition() {
  return {
    index: 0,
    column: 0,
    line: 0
  };
}

function feedPosition(position, str, len) {
  var start = position.index;
  var end = position.index = start + len;

  for (var i = start; i < end; i++) {
    var char = str.charAt(i);

    if (char === '\n') {
      position.line++;
      position.column = 0;
    } else {
      position.column++;
    }
  }
}

function jumpPosition(position, str, end) {
  var len = end - position.index;
  return feedPosition(position, str, len);
}

function copyPosition(position) {
  return {
    index: position.index,
    line: position.line,
    column: position.column
  };
}

var whitespace = /\s/;

function isWhitespaceChar(char) {
  return whitespace.test(char);
}

var equalSign = /=/;

function isEqualSignChar(char) {
  return equalSign.test(char);
}

function shouldBeIgnore(tagName) {
  var name = tagName.toLowerCase();

  if (options.html.skipElements.has(name)) {
    return true;
  }

  return false;
}

var alphanumeric = /[A-Za-z0-9]/;

function findTextEnd(str, index) {
  while (true) {
    var textEnd = str.indexOf('<', index);

    if (textEnd === -1) {
      return textEnd;
    }

    var char = str.charAt(textEnd + 1);

    if (char === '/' || char === '!' || alphanumeric.test(char)) {
      return textEnd;
    }

    index = textEnd + 1;
  }
}

function isWordEnd(cursor, wordBegin, html) {
  if (!isWhitespaceChar(html.charAt(cursor))) return false;
  var len = html.length; // backwrad

  for (var i = cursor - 1; i > wordBegin; i--) {
    var char = html.charAt(i);

    if (!isWhitespaceChar(char)) {
      if (isEqualSignChar(char)) return false;
      break;
    }
  } // forward


  for (var _i = cursor + 1; _i < len; _i++) {
    var _char = html.charAt(_i);

    if (!isWhitespaceChar(_char)) {
      if (isEqualSignChar(_char)) return false;
      return true;
    }
  }
}

var Scaner = /*#__PURE__*/function () {
  function Scaner(html) {
    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, Scaner);

    this.tokens = [];
    this.position = initPosition();
    this.html = html;
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(Scaner, [{
    key: "scan",
    value: function scan() {
      var html = this.html,
          position = this.position;
      var len = html.length;

      while (position.index < len) {
        var start = position.index;
        this.scanText();

        if (position.index === start) {
          var isComment = html.startsWith('!--', start + 1);

          if (isComment) {
            this.scanComment();
          } else {
            var tagName = this.scanTag();

            if (shouldBeIgnore(tagName)) {
              this.scanSkipTag(tagName);
            }
          }
        }
      }

      return this.tokens;
    }
  }, {
    key: "scanText",
    value: function scanText() {
      var type = 'text';
      var html = this.html,
          position = this.position;
      var textEnd = findTextEnd(html, position.index);

      if (textEnd === position.index) {
        return;
      }

      if (textEnd === -1) {
        textEnd = html.length;
      }

      var start = copyPosition(position);
      var content = html.slice(position.index, textEnd);
      jumpPosition(position, html, textEnd);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: end
        }
      });
    }
  }, {
    key: "scanComment",
    value: function scanComment() {
      var type = 'comment';
      var html = this.html,
          position = this.position;
      var start = copyPosition(position);
      feedPosition(position, html, 4); // "<!--".length

      var contentEnd = html.indexOf('-->', position.index);
      var commentEnd = contentEnd + 3; // "-->".length

      if (contentEnd === -1) {
        contentEnd = commentEnd = html.length;
      }

      var content = html.slice(position.index, contentEnd);
      jumpPosition(position, html, commentEnd);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: copyPosition(position)
        }
      });
    }
  }, {
    key: "scanTag",
    value: function scanTag() {
      this.scanTagStart();
      var tagName = this.scanTagName();
      this.scanAttrs();
      this.scanTagEnd();
      return tagName;
    }
  }, {
    key: "scanTagStart",
    value: function scanTagStart() {
      var type = 'tag-start';
      var html = this.html,
          position = this.position;
      var secondChar = html.charAt(position.index + 1);
      var close = secondChar === '/';
      var start = copyPosition(position);
      feedPosition(position, html, close ? 2 : 1);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          start: start
        }
      });
    }
  }, {
    key: "scanTagEnd",
    value: function scanTagEnd() {
      var type = 'tag-end';
      var html = this.html,
          position = this.position;
      var firstChar = html.charAt(position.index);
      var close = firstChar === '/';
      feedPosition(position, html, close ? 2 : 1);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          end: end
        }
      });
    }
  }, {
    key: "scanTagName",
    value: function scanTagName() {
      var type = 'tag';
      var html = this.html,
          position = this.position;
      var len = html.length;
      var start = position.index;

      while (start < len) {
        var char = html.charAt(start);
        var isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
        if (isTagChar) break;
        start++;
      }

      var end = start + 1;

      while (end < len) {
        var _char2 = html.charAt(end);

        var _isTagChar = !(isWhitespaceChar(_char2) || _char2 === '/' || _char2 === '>');

        if (!_isTagChar) break;
        end++;
      }

      jumpPosition(position, html, end);
      var tagName = html.slice(start, end);
      this.tokens.push({
        type: type,
        content: tagName
      });
      return tagName;
    }
  }, {
    key: "scanAttrs",
    value: function scanAttrs() {
      var html = this.html,
          position = this.position,
          tokens = this.tokens;
      var cursor = position.index;
      var quote = null; // null, single-, or double-quote

      var wordBegin = cursor; // index of word start

      var words = []; // "key", "key=value", "key='value'", etc

      var len = html.length;

      while (cursor < len) {
        var char = html.charAt(cursor);

        if (quote) {
          var isQuoteEnd = char === quote;

          if (isQuoteEnd) {
            quote = null;
          }

          cursor++;
          continue;
        }

        var isTagEnd = char === '/' || char === '>';

        if (isTagEnd) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }

          break;
        }

        if (isWordEnd(cursor, wordBegin, html)) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }

          wordBegin = cursor + 1;
          cursor++;
          continue;
        }

        var isQuoteStart = char === '\'' || char === '"';

        if (isQuoteStart) {
          quote = char;
          cursor++;
          continue;
        }

        cursor++;
      }

      jumpPosition(position, html, cursor);
      var wLen = words.length;
      var type = 'attribute';

      for (var i = 0; i < wLen; i++) {
        var word = words[i];
        var isNotPair = word.includes('=');

        if (isNotPair) {
          var secondWord = words[i + 1];

          if (secondWord && secondWord.startsWith('=')) {
            if (secondWord.length > 1) {
              var newWord = word + secondWord;
              tokens.push({
                type: type,
                content: newWord
              });
              i += 1;
              continue;
            }

            var thirdWord = words[i + 2];
            i += 1;

            if (thirdWord) {
              var _newWord = word + '=' + thirdWord;

              tokens.push({
                type: type,
                content: _newWord
              });
              i += 1;
              continue;
            }
          }
        }

        if (word.endsWith('=')) {
          var _secondWord = words[i + 1];

          if (_secondWord && !_secondWord.includes('=')) {
            var _newWord3 = word + _secondWord;

            tokens.push({
              type: type,
              content: _newWord3
            });
            i += 1;
            continue;
          }

          var _newWord2 = word.slice(0, -1);

          tokens.push({
            type: type,
            content: _newWord2
          });
          continue;
        }

        tokens.push({
          type: type,
          content: word
        });
      }
    }
  }, {
    key: "scanSkipTag",
    value: function scanSkipTag(tagName) {
      var html = this.html,
          position = this.position,
          tokens = this.tokens;
      var safeTagName = tagName.toLowerCase();
      var len = html.length;
      var index = position.index;

      while (index < len) {
        var nextTag = html.indexOf('</', index);

        if (nextTag === -1) {
          this.scanText();
          break;
        }

        var tagStartPosition = copyPosition(position);
        jumpPosition(tagStartPosition, html, nextTag);
        var tagState = {
          html: html,
          position: tagStartPosition,
          tokens: []
        };
        var name = this.scanTag();

        if (safeTagName !== name.toLowerCase()) {
          index = tagState.position.index;
          continue;
        }

        if (nextTag !== position.index) {
          var textStart = copyPosition(position);
          jumpPosition(position, html, nextTag);
          tokens.push({
            type: 'text',
            content: html.slice(textStart.index, nextTag),
            position: {
              start: textStart,
              end: copyPosition(position)
            }
          });
        }

        tokens.push.apply(tokens, tagState.tokens);
        jumpPosition(position, html, tagState.position.index);
        break;
      }
    }
  }]);

  return Scaner;
}();

function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}

var specialMiniElements = {
  img: 'image',
  iframe: 'web-view'
};
var internalCompsList = Object.keys(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* internalComponents */ "k"]).map(function (i) {
  return i.toLowerCase();
}).join(','); // https://developers.weixin.qq.com/miniprogram/dev/component

var isMiniElements = makeMap(internalCompsList, true); // https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements

var isInlineElements = makeMap('a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b', true); // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements

var isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt', true);
var closingTagAncestorBreakers = {
  li: ['ul', 'ol', 'menu'],
  dt: ['dl'],
  dd: ['dl'],
  tbody: ['table'],
  thead: ['table'],
  tfoot: ['table'],
  tr: ['table'],
  td: ['table']
};

function hasTerminalParent(tagName, stack) {
  var tagParents = closingTagAncestorBreakers[tagName];

  if (tagParents) {
    var currentIndex = stack.length - 1;

    while (currentIndex >= 0) {
      var parentTagName = stack[currentIndex].tagName;

      if (parentTagName === tagName) {
        break;
      }

      if (tagParents && tagParents.includes(parentTagName)) {
        return true;
      }

      currentIndex--;
    }
  }

  return false;
}

function unquote(str) {
  var car = str.charAt(0);
  var end = str.length - 1;
  var isQuoteStart = car === '"' || car === "'";

  if (isQuoteStart && car === str.charAt(end)) {
    return str.slice(1, end);
  }

  return str;
}

function getTagName(tag) {
  if (options.html.renderHTMLTag) {
    return tag;
  }

  if (specialMiniElements[tag]) {
    return specialMiniElements[tag];
  } else if (isMiniElements(tag)) {
    return tag;
  } else if (isBlockElements(tag)) {
    return 'view';
  } else if (isInlineElements(tag)) {
    return 'text';
  }

  return 'view';
}

function splitEqual(str) {
  var sep = '=';
  var idx = str.indexOf(sep);
  if (idx === -1) return [str];
  var key = str.slice(0, idx).trim();
  var value = str.slice(idx + sep.length).trim();
  return [key, value];
}

function format(children) {
  return children.filter(function (child) {
    if (child.type === 'comment') {
      return false;
    } else if (child.type === 'text') {
      return child.content !== '';
    }

    return true;
  }).map(function (child) {
    if (child.type === 'text') {
      var text = document$1.createTextNode(child.content);

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(options.html.transformText)) {
        return options.html.transformText(text, child);
      }

      return text;
    }

    var el = document$1.createElement(getTagName(child.tagName));

    if (!options.html.renderHTMLTag) {
      el.className = child.tagName;
    }

    for (var i = 0; i < child.attributes.length; i++) {
      var attr = child.attributes[i];

      var _splitEqual = splitEqual(attr),
          _splitEqual2 = Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_splitEqual, 2),
          key = _splitEqual2[0],
          value = _splitEqual2[1];

      if (key === 'class') {
        el.className += ' ' + unquote(value);
      } else if (key[0] === 'o' && key[1] === 'n') {
        continue;
      } else {
        el.setAttribute(key, value == null ? true : unquote(value));
      }
    }

    var ch = format(child.children);

    for (var _i2 = 0; _i2 < ch.length; _i2++) {
      el.appendChild(ch[_i2]);
    }

    if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(options.html.transformElement)) {
      return options.html.transformElement(el, child);
    }

    return el;
  });
}

function parser(html) {
  var tokens = new Scaner(html).scan();
  var root = {
    tagName: '',
    children: [],
    type: 'element',
    attributes: []
  };
  var state = {
    tokens: tokens,
    options: options,
    cursor: 0,
    stack: [root]
  };
  parse(state);
  return format(root.children);
}

function parse(state) {
  var tokens = state.tokens,
      stack = state.stack;
  var cursor = state.cursor;
  var len = tokens.length;
  var nodes = stack[stack.length - 1].children;

  while (cursor < len) {
    var token = tokens[cursor];

    if (token.type !== 'tag-start') {
      // comment or text
      nodes.push(token);
      cursor++;
      continue;
    }

    var tagToken = tokens[++cursor];
    cursor++;
    var tagName = tagToken.content.toLowerCase();

    if (token.close) {
      var index = stack.length;
      var shouldRewind = false;

      while (--index > -1) {
        if (stack[index].tagName === tagName) {
          shouldRewind = true;
          break;
        }
      }

      while (cursor < len) {
        var endToken = tokens[cursor];
        if (endToken.type !== 'tag-end') break;
        cursor++;
      }

      if (shouldRewind) {
        stack.splice(index);
        break;
      } else {
        continue;
      }
    }

    var isClosingTag = options.html.closingElements.has(tagName);
    var shouldRewindToAutoClose = isClosingTag;

    if (shouldRewindToAutoClose) {
      shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
    }

    if (shouldRewindToAutoClose) {
      var currentIndex = stack.length - 1;

      while (currentIndex > 0) {
        if (tagName === stack[currentIndex].tagName) {
          stack.splice(currentIndex);
          var previousIndex = currentIndex - 1;
          nodes = stack[previousIndex].children;
          break;
        }

        currentIndex = currentIndex - 1;
      }
    }

    var attributes = [];
    var attrToken = void 0;

    while (cursor < len) {
      attrToken = tokens[cursor];
      if (attrToken.type === 'tag-end') break;
      attributes.push(attrToken.content);
      cursor++;
    }

    cursor++;
    var children = [];
    var element = {
      type: 'element',
      tagName: tagToken.content,
      attributes: attributes,
      children: children
    };
    nodes.push(element);
    var hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));

    if (hasChildren) {
      stack.push({
        tagName: tagName,
        children: children
      });
      var innerState = {
        tokens: tokens,
        cursor: cursor,
        stack: stack
      };
      parse(innerState);
      cursor = innerState.cursor;
    }
  }

  state.cursor = cursor;
}

function setInnerHTML(element, html) {
  element.childNodes.forEach(function (node) {
    element.removeChild(node);
  });
  var children = parser(html);

  for (var i = 0; i < children.length; i++) {
    element.appendChild(children[i]);
  }
}

var nodeId = incrementId();

var TaroNode = /*#__PURE__*/function (_TaroEventTarget) {
  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(TaroNode, _TaroEventTarget);

  var _super = Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroNode);

  function TaroNode(nodeType, nodeName) {
    var _this;

    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, TaroNode);

    _this = _super.call(this);
    _this.parentNode = null;
    _this.childNodes = [];

    _this.hydrate = function (node) {
      return function () {
        return hydrate(node);
      };
    };

    _this.nodeType = nodeType;
    _this.nodeName = nodeName;
    _this.uid = "_n_".concat(nodeId());
    eventSource.set(_this.uid, Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this));
    return _this;
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(TaroNode, [{
    key: "insertBefore",
    value: function insertBefore(newChild, refChild, isReplace) {
      var _this2 = this;

      var _a;

      newChild.remove();
      newChild.parentNode = this;
      var payload;

      if (refChild) {
        var index = this.findIndex(this.childNodes, refChild);
        this.childNodes.splice(index, 0, newChild);

        if (isReplace === true) {
          payload = {
            path: newChild._path,
            value: this.hydrate(newChild)
          };
        } else {
          payload = {
            path: "".concat(this._path, ".", "cn"
            /* Childnodes */
            ),
            value: function value() {
              return _this2.childNodes.map(hydrate);
            }
          };
        }
      } else {
        this.childNodes.push(newChild);
        payload = {
          path: newChild._path,
          value: this.hydrate(newChild)
        };
      }

      (_a = CurrentReconciler.insertBefore) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, newChild, refChild);
      this.enqueueUpdate(payload);

      if (!eventSource.has(newChild.uid)) {
        eventSource.set(newChild.uid, newChild);
      }

      return newChild;
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      var _a;

      this.insertBefore(child);
      (_a = CurrentReconciler.appendChild) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, child);
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(newChild, oldChild) {
      var _a;

      if (oldChild.parentNode === this) {
        this.insertBefore(newChild, oldChild, true);
        oldChild.remove(true);
        return oldChild;
      }

      (_a = CurrentReconciler.removeChild) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, newChild, oldChild);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child, isReplace) {
      var _this3 = this;

      var index = this.findIndex(this.childNodes, child);
      this.childNodes.splice(index, 1);

      if (isReplace !== true) {
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "cn"
          /* Childnodes */
          ),
          value: function value() {
            return _this3.childNodes.map(hydrate);
          }
        });
      }

      child.parentNode = null;
      eventSource.delete(child.uid); // @TODO: eventSource memory overflow
      // child._empty()

      return child;
    }
  }, {
    key: "remove",
    value: function remove(isReplace) {
      if (this.parentNode) {
        this.parentNode.removeChild(this, isReplace);
      }
    }
  }, {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes.length > 0;
    }
  }, {
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      if (this._root === null) {
        return;
      }

      this._root.enqueueUpdate(payload);
    }
    /**
     * like jQuery's $.empty()
     */

  }, {
    key: "_empty",
    value: function _empty() {
      while (this.childNodes.length > 0) {
        var child = this.childNodes[0];
        child.parentNode = null;
        eventSource.delete(child.uid);
        this.childNodes.shift();
      }
    }
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */

  }, {
    key: "findIndex",
    value: function findIndex(childeNodes, refChild) {
      var index = childeNodes.indexOf(refChild);
      Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* ensure */ "h"])(index !== -1, 'The node to be replaced is not a child of this node.');
      return index;
    }
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var isDeep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var constructor = this.constructor;
      var newNode;

      if (this.nodeType === 1
      /* ELEMENT_NODE */
      ) {
          newNode = new constructor(this.nodeType, this.nodeName);
        } else if (this.nodeType === 3
      /* TEXT_NODE */
      ) {
          newNode = new constructor('');
        }

      for (var key in this) {
        var value = this[key];

        if (['props', 'dataset'].includes(key) && Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(value) === 'object') {
          newNode[key] = Object.assign({}, value);
        } else if (key === '_value') {
          newNode[key] = value;
        } else if (key === 'style') {
          newNode.style._value = Object.assign({}, value._value);
          newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
        }
      }

      if (isDeep) {
        newNode.childNodes = this.childNodes.map(function (node) {
          return node.cloneNode(true);
        });
      }

      return newNode;
    }
  }, {
    key: "_path",
    get: function get() {
      if (this.parentNode !== null) {
        var indexOfNode = this.parentNode.childNodes.indexOf(this);
        var index = CurrentReconciler.getPathIndex(indexOfNode);
        return "".concat(this.parentNode._path, ".", "cn"
        /* Childnodes */
        , ".").concat(index);
      }

      return '';
    }
  }, {
    key: "_root",
    get: function get() {
      if (this.parentNode !== null) {
        return this.parentNode._root;
      }

      return null;
    }
  }, {
    key: "parentElement",
    get: function get() {
      var parentNode = this.parentNode;

      if (parentNode != null && parentNode.nodeType === 1
      /* ELEMENT_NODE */
      ) {
          return parentNode;
        }

      return null;
    }
  }, {
    key: "nextSibling",
    get: function get() {
      var parentNode = this.parentNode;

      if (parentNode) {
        return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) + 1] || null;
      }

      return null;
    }
  }, {
    key: "previousSibling",
    get: function get() {
      var parentNode = this.parentNode;

      if (parentNode) {
        return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) - 1] || null;
      }

      return null;
    }
  }, {
    key: "firstChild",
    get: function get() {
      return this.childNodes[0] || null;
    }
  }, {
    key: "lastChild",
    get: function get() {
      var c = this.childNodes;
      return c[c.length - 1] || null;
    }
  }, {
    key: "textContent",
    set: function set(text) {
      this._empty();

      if (text === '') {
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "cn"
          /* Childnodes */
          ),
          value: function value() {
            return [];
          }
        });
      } else {
        this.appendChild(document$1.createTextNode(text));
      }
    }
  }, {
    key: "innerHTML",
    set: function set(html) {
      setInnerHTML(this, html);
    },
    get: function get() {
      return '';
    }
  }]);

  return TaroNode;
}(TaroEventTarget);

var TaroText = /*#__PURE__*/function (_TaroNode) {
  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(TaroText, _TaroNode);

  var _super2 = Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroText);

  function TaroText(text) {
    var _this4;

    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, TaroText);

    _this4 = _super2.call(this, 3
    /* TEXT_NODE */
    , '#text');
    _this4._value = text;
    return _this4;
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(TaroText, [{
    key: "textContent",
    set: function set(text) {
      this._value = text;
      this.enqueueUpdate({
        path: "".concat(this._path, ".", "v"
        /* Text */
        ),
        value: text
      });
    },
    get: function get() {
      return this._value;
    }
  }, {
    key: "nodeValue",
    set: function set(text) {
      this.textContent = text;
    },
    get: function get() {
      return this._value;
    }
  }]);

  return TaroText;
}(TaroNode);
/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */


var styleProperties = ['alignContent', 'alignItems', 'alignSelf', 'alignmentAdjust', 'alignmentBaseline', 'all', 'animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'appearance', 'azimuth', 'backfaceVisibility', 'background', 'backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundRepeat', 'backgroundSize', 'baselineShift', 'blockOverflow', 'blockSize', 'bookmarkLabel', 'bookmarkLevel', 'bookmarkState', 'border', 'borderBlock', 'borderBlockColor', 'borderBlockEnd', 'borderBlockEndColor', 'borderBlockEndStyle', 'borderBlockEndWidth', 'borderBlockStart', 'borderBlockStartColor', 'borderBlockStartStyle', 'borderBlockStartWidth', 'borderBlockStyle', 'borderBlockWidth', 'borderBottom', 'borderBottomColor', 'borderBottomFitLength', 'borderBottomFitWidth', 'borderBottomImage', 'borderBottomLeftFitWidth', 'borderBottomLeftImage', 'borderBottomLeftRadius', 'borderBottomRightFitLength', 'borderBottomRightFitWidth', 'borderBottomRightImage', 'borderBottomRightRadius', 'borderBottomStyle', 'borderBottomWidth', 'borderBottomlEftFitLength', 'borderBoundary', 'borderBreak', 'borderCollapse', 'borderColor', 'borderCornerFit', 'borderCornerImage', 'borderCornerImageTransform', 'borderEndEndRadius', 'borderEndStartRadius', 'borderFit', 'borderFitLength', 'borderFitWidth', 'borderImage', 'borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageTransform', 'borderImageWidth', 'borderInline', 'borderInlineColor', 'borderInlineEnd', 'borderInlineEndColor', 'borderInlineEndStyle', 'borderInlineEndWidth', 'borderInlineStart', 'borderInlineStartColor', 'borderInlineStartStyle', 'borderInlineStartWidth', 'borderInlineStyle', 'borderInlineWidth', 'borderLeft', 'borderLeftColor', 'borderLeftFitLength', 'borderLeftFitWidth', 'borderLeftImage', 'borderLeftStyle', 'borderLeftWidth', 'borderRadius', 'borderRight', 'borderRightColor', 'borderRightFitLength', 'borderRightFitWidth', 'borderRightImage', 'borderRightStyle', 'borderRightWidth', 'borderSpacing', 'borderStartEndRadius', 'borderStartStartRadius', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopFitLength', 'borderTopFitWidth', 'borderTopImage', 'borderTopLeftFitLength', 'borderTopLeftFitWidth', 'borderTopLeftImage', 'borderTopLeftRadius', 'borderTopRightFitLength', 'borderTopRightFitWidth', 'borderTopRightImage', 'borderTopRightRadius', 'borderTopStyle', 'borderTopWidth', 'borderWidth', 'bottom', 'boxDecorationBreak', 'boxShadow', 'boxSizing', 'boxSnap', 'breakAfter', 'breakBefore', 'breakInside', 'captionSide', 'caret', 'caretColor', 'caretShape', 'chains', 'clear', 'clip', 'clipPath', 'clipRule', 'color', 'colorAdjust', 'colorInterpolationFilters', 'colorScheme', 'columnCount', 'columnFill', 'columnGap', 'columnRule', 'columnRuleColor', 'columnRuleStyle', 'columnRuleWidth', 'columnSpan', 'columnWidth', 'columns', 'contain', 'content', 'continue', 'counterIncrement', 'counterReset', 'counterSet', 'cue', 'cueAfter', 'cueBefore', 'cursor', 'direction', 'display', 'dominantBaseline', 'dropInitialAfterAdjust', 'dropInitialAfterAlign', 'dropInitialBeforeAdjust', 'dropInitialBeforeAlign', 'dropInitialSize', 'dropInitialValue', 'elevation', 'emptyCells', 'filter', 'flex', 'flexBasis', 'flexDirection', 'flexFlow', 'flexGrow', 'flexShrink', 'flexWrap', 'float', 'floodColor', 'floodOpacity', 'flow', 'flowFrom', 'flowInto', 'font', 'fontFamily', 'fontFeatureSettings', 'fontKerning', 'fontLanguageOverride', 'fontMaxSize', 'fontMinSize', 'fontOpticalSizing', 'fontPalette', 'fontSize', 'fontSizeAdjust', 'fontStretch', 'fontStyle', 'fontSynthesis', 'fontSynthesisSmallCaps', 'fontSynthesisStyle', 'fontSynthesisWeight', 'fontVariant', 'fontVariantAlternates', 'fontVariantCaps', 'fontVariantEastAsian', 'fontVariantEmoji', 'fontVariantLigatures', 'fontVariantNumeric', 'fontVariantPosition', 'fontVariationSettings', 'fontWeight', 'footnoteDisplay', 'footnotePolicy', 'forcedColorAdjust', 'gap', 'glyphOrientationVertical', 'grid', 'gridArea', 'gridAutoColumns', 'gridAutoFlow', 'gridAutoRows', 'gridColumn', 'gridColumnEnd', 'gridColumnStart', 'gridRow', 'gridRowEnd', 'gridRowStart', 'gridTemplate', 'gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows', 'hangingPunctuation', 'height', 'hyphenateCharacter', 'hyphenateLimitChars', 'hyphenateLimitLast', 'hyphenateLimitLines', 'hyphenateLimitZone', 'hyphens', 'imageOrientation', 'imageResolution', 'initialLetters', 'initialLettersAlign', 'initialLettersWrap', 'inlineBoxAlign', 'inlineSize', 'inlineSizing', 'inset', 'insetBlock', 'insetBlockEnd', 'insetBlockStart', 'insetInline', 'insetInlineEnd', 'insetInlineStart', 'isolation', 'justifyContent', 'justifyItems', 'justifySelf', 'left', 'letterSpacing', 'lightingColor', 'lineBreak', 'lineClamp', 'lineGrid', 'lineHeight', 'linePadding', 'lineSnap', 'lineStacking', 'lineStackingRuby', 'lineStackingShift', 'lineStackingStrategy', 'listStyle', 'listStyleImage', 'listStylePosition', 'listStyleType', 'margin', 'marginBlock', 'marginBlockEnd', 'marginBlockStart', 'marginBottom', 'marginInline', 'marginInlineEnd', 'marginInlineStart', 'marginLeft', 'marginRight', 'marginTop', 'marginTrim', 'markerSide', 'mask', 'maskBorder', 'maskBorderMode', 'maskBorderOutset', 'maskBorderRepeat', 'maskBorderSlice', 'maskBorderSource', 'maskBorderWidth', 'maskClip', 'maskComposite', 'maskImage', 'maskMode', 'maskOrigin', 'maskPosition', 'maskRepeat', 'maskSize', 'maskType', 'maxBlockSize', 'maxHeight', 'maxInlineSize', 'maxLines', 'maxWidth', 'minBlockSize', 'minHeight', 'minInlineSize', 'minWidth', 'mixBlendMode', 'navDown', 'navLeft', 'navRight', 'navUp', 'objectFit', 'objectPosition', 'offset', 'offsetAfter', 'offsetAnchor', 'offsetBefore', 'offsetDistance', 'offsetEnd', 'offsetPath', 'offsetPosition', 'offsetRotate', 'offsetStart', 'opacity', 'order', 'orphans', 'outline', 'outlineColor', 'outlineOffset', 'outlineStyle', 'outlineWidth', 'overflow', 'overflowBlock', 'overflowInline', 'overflowWrap', 'overflowX', 'overflowY', 'padding', 'paddingBlock', 'paddingBlockEnd', 'paddingBlockStart', 'paddingBottom', 'paddingInline', 'paddingInlineEnd', 'paddingInlineStart', 'paddingLeft', 'paddingRight', 'paddingTop', 'page', 'pageBreakAfter', 'pageBreakBefore', 'pageBreakInside', 'pause', 'pauseAfter', 'pauseBefore', 'perspective', 'perspectiveOrigin', 'pitch', 'pitchRange', 'placeContent', 'placeItems', 'placeSelf', 'playDuring', 'pointerEvents', 'position', 'quotes', 'regionFragment', 'resize', 'richness', 'right', 'rowGap', 'rubyAlign', 'rubyMerge', 'rubyPosition', 'running', 'scrollBehavior', 'scrollMargin', 'scrollMarginBlock', 'scrollMarginBlockEnd', 'scrollMarginBlockStart', 'scrollMarginBottom', 'scrollMarginInline', 'scrollMarginInlineEnd', 'scrollMarginInlineStart', 'scrollMarginLeft', 'scrollMarginRight', 'scrollMarginTop', 'scrollPadding', 'scrollPaddingBlock', 'scrollPaddingBlockEnd', 'scrollPaddingBlockStart', 'scrollPaddingBottom', 'scrollPaddingInline', 'scrollPaddingInlineEnd', 'scrollPaddingInlineStart', 'scrollPaddingLeft', 'scrollPaddingRight', 'scrollPaddingTop', 'scrollSnapAlign', 'scrollSnapStop', 'scrollSnapType', 'shapeImageThreshold', 'shapeInside', 'shapeMargin', 'shapeOutside', 'speak', 'speakHeader', 'speakNumeral', 'speakPunctuation', 'speechRate', 'stress', 'stringSet', 'tabSize', 'tableLayout', 'textAlign', 'textAlignAll', 'textAlignLast', 'textCombineUpright', 'textDecoration', 'textDecorationColor', 'textDecorationLine', 'textDecorationStyle', 'textEmphasis', 'textEmphasisColor', 'textEmphasisPosition', 'textEmphasisStyle', 'textGroupAlign', 'textHeight', 'textIndent', 'textJustify', 'textOrientation', 'textOverflow', 'textShadow', 'textSpaceCollapse', 'textSpaceTrim', 'textSpacing', 'textTransform', 'textUnderlinePosition', 'textWrap', 'top', 'transform', 'transformBox', 'transformOrigin', 'transformStyle', 'transition', 'transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction', 'unicodeBidi', 'userSelect', 'verticalAlign', 'visibility', 'voiceFamily', 'volume', 'whiteSpace', 'widows', 'width', 'willChange', 'wordBreak', 'wordSpacing', 'wordWrap', 'wrapAfter', 'wrapBefore', 'wrapFlow', 'wrapInside', 'wrapThrough', 'writingMode', 'zIndex'];
var PROPERTY_THRESHOLD = 2046;
var SET_DATA = '小程序 setData';
var PAGE_INIT = '页面初始化';

function setStyle(newVal, styleKey) {
  var old = this[styleKey];

  if (newVal) {
    this._usedStyleProp.add(styleKey);
  }

  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* warn */ "z"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isString */ "q"])(newVal) && newVal.length > PROPERTY_THRESHOLD, "Style \u5C5E\u6027 ".concat(styleKey, " \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\uFF0C\u8003\u8651\u4F7F\u7528 CSS \u7C7B\u6216\u5176\u5B83\u65B9\u6848\u66FF\u4EE3\u3002"));

  if (old !== newVal) {
    this._value[styleKey] = newVal;

    this._element.enqueueUpdate({
      path: "".concat(this._element._path, ".", "st"
      /* Style */
      ),
      value: this.cssText
    });
  }
}

function initStyle(ctor) {
  var properties = {};

  var _loop = function _loop(i) {
    var styleKey = styleProperties[i];
    properties[styleKey] = {
      get: function get() {
        return this._value[styleKey] || '';
      },
      set: function set(newVal) {
        setStyle.call(this, newVal, styleKey);
      }
    };
  };

  for (var i = 0; i < styleProperties.length; i++) {
    _loop(i);
  }

  Object.defineProperties(ctor.prototype, properties);
}

var Style = /*#__PURE__*/function () {
  function Style(element) {
    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, Style);

    this._element = element;
    this._usedStyleProp = new Set();
    this._value = {};
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(Style, [{
    key: "setCssVariables",
    value: function setCssVariables(styleKey) {
      var _this5 = this;

      this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return _this5._value[styleKey] || '';
        },
        set: function set(newVal) {
          setStyle.call(_this5, newVal, styleKey);
        }
      });
    }
  }, {
    key: "setProperty",
    value: function setProperty(propertyName, value) {
      if (propertyName[0] === '-') {
        this.setCssVariables(propertyName);
      } else {
        propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "x"])(propertyName);
      }

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "r"])(value)) {
        return;
      }

      if (value === null || value === '') {
        this.removeProperty(propertyName);
      } else {
        this[propertyName] = value;
      }
    }
  }, {
    key: "removeProperty",
    value: function removeProperty(propertyName) {
      propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "x"])(propertyName);

      if (!this._usedStyleProp.has(propertyName)) {
        return '';
      }

      var value = this[propertyName];
      this[propertyName] = '';

      this._usedStyleProp.delete(propertyName);

      return value;
    }
  }, {
    key: "getPropertyValue",
    value: function getPropertyValue(propertyName) {
      propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "x"])(propertyName);
      var value = this[propertyName];

      if (!value) {
        return '';
      }

      return value;
    }
  }, {
    key: "cssText",
    get: function get() {
      var _this6 = this;

      var text = '';

      this._usedStyleProp.forEach(function (key) {
        var val = _this6[key];
        if (!val) return;
        text += "".concat(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toDashed */ "y"])(key), ": ").concat(val, ";");
      });

      return text;
    },
    set: function set(str) {
      var _this7 = this;

      if (str == null) {
        str = '';
      }

      this._usedStyleProp.forEach(function (prop) {
        _this7.removeProperty(prop);
      });

      if (str === '') {
        return;
      }

      var rules = str.split(';');

      for (var i = 0; i < rules.length; i++) {
        var rule = rules[i].trim();

        if (rule === '') {
          continue;
        } // 可能存在 'background: url(http:x/y/z)' 的情况


        var _rule$split = rule.split(':'),
            _rule$split2 = Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_rule$split),
            propName = _rule$split2[0],
            valList = _rule$split2.slice(1);

        var val = valList.join(':');

        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "r"])(val)) {
          continue;
        }

        this.setProperty(propName.trim(), val.trim());
      }
    }
  }]);

  return Style;
}();

initStyle(Style);

function returnTrue() {
  return true;
}

function treeToArray(root, predict) {
  var array = [];
  var filter = predict !== null && predict !== void 0 ? predict : returnTrue;
  var object = root;

  while (object) {
    if (object.nodeType === 1
    /* ELEMENT_NODE */
    && filter(object)) {
      array.push(object);
    }

    object = following(object, root);
  }

  return array;
}

function following(el, root) {
  var firstChild = el.firstChild;

  if (firstChild) {
    return firstChild;
  }

  var current = el;

  do {
    if (current === root) {
      return null;
    }

    var nextSibling = current.nextSibling;

    if (nextSibling) {
      return nextSibling;
    }

    current = current.parentElement;
  } while (current);

  return null;
}

var ClassList = /*#__PURE__*/function (_Set) {
  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(ClassList, _Set);

  var _super3 = Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(ClassList);

  function ClassList(className, el) {
    var _thisSuper, _this8;

    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, ClassList);

    _this8 = _super3.call(this);
    className.trim().split(/\s+/).forEach(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])((_thisSuper = Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this8), Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype)), "add", _thisSuper).bind(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this8)));
    _this8.el = el;
    return _this8;
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(ClassList, [{
    key: "add",
    value: function add(s) {
      Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "add", this).call(this, s);

      this._update();

      return this;
    }
  }, {
    key: "remove",
    value: function remove(s) {
      Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "delete", this).call(this, s);

      this._update();
    }
  }, {
    key: "toggle",
    value: function toggle(s) {
      if (Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "has", this).call(this, s)) {
        Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "delete", this).call(this, s);
      } else {
        Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "add", this).call(this, s);
      }

      this._update();
    }
  }, {
    key: "replace",
    value: function replace(s1, s2) {
      Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "delete", this).call(this, s1);

      Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "add", this).call(this, s2);

      this._update();
    }
  }, {
    key: "contains",
    value: function contains(s) {
      return Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "has", this).call(this, s);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "_update",
    value: function _update() {
      this.el.className = this.value;
    }
  }, {
    key: "value",
    get: function get() {
      return Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this).join(' ');
    }
  }]);

  return ClassList;
}( /*#__PURE__*/Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Set));
/* eslint-disable no-dupe-class-members */


var TaroElement = /*#__PURE__*/function (_TaroNode2) {
  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(TaroElement, _TaroNode2);

  var _super4 = Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroElement);

  function TaroElement(nodeType, nodeName) {
    var _this9;

    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, TaroElement);

    var _a;

    _this9 = _super4.call(this, nodeType || 1
    /* ELEMENT_NODE */
    , nodeName);
    _this9.props = {};
    _this9.dataset = _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"];
    _this9.tagName = nodeName.toUpperCase();
    _this9.style = new Style(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this9));
    (_a = CurrentReconciler.onTaroElementCreate) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, _this9.tagName, nodeType);
    return _this9;
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(TaroElement, [{
    key: "hasAttribute",
    value: function hasAttribute(qualifiedName) {
      return !Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "r"])(this.props[qualifiedName]);
    }
  }, {
    key: "hasAttributes",
    value: function hasAttributes() {
      return this.attributes.length > 0;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.setAttribute('focus', true);
    }
  }, {
    key: "blur",
    value: function blur() {
      this.setAttribute('focus', false);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(qualifiedName, value) {
      var _a;

      Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* warn */ "z"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isString */ "q"])(value) && value.length > PROPERTY_THRESHOLD, "\u5143\u7D20 ".concat(this.nodeName, " \u7684 \u5C5E\u6027 ").concat(qualifiedName, " \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\u3002\u8003\u8651\u964D\u4F4E\u56FE\u7247\u8F6C\u4E3A base64 \u7684\u9608\u503C\u6216\u5728 CSS \u4E2D\u4F7F\u7528 base64\u3002"));

      if (qualifiedName === 'style') {
        this.style.cssText = value;
        qualifiedName = "st"
        /* Style */
        ;
      } else if (qualifiedName === 'id') {
        eventSource.delete(this.uid);
        this.props[qualifiedName] = this.uid = value;
        eventSource.set(value, this);
        qualifiedName = 'uid';
      } else {
        this.props[qualifiedName] = value;

        if (qualifiedName === 'class') {
          qualifiedName = "cl"
          /* Class */
          ;
        }

        if (qualifiedName.startsWith('data-')) {
          if (this.dataset === _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"]) {
            this.dataset = Object.create(null);
          }

          this.dataset[Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "x"])(qualifiedName.replace(/^data-/, ''))] = value;
        }
      }

      (_a = CurrentReconciler.setAttribute) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, qualifiedName, value);
      this.enqueueUpdate({
        path: "".concat(this._path, ".").concat(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "x"])(qualifiedName)),
        value: value
      });
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(qualifiedName) {
      var _a;

      if (qualifiedName === 'style') {
        this.style.cssText = '';
      } else {
        delete this.props[qualifiedName];
      }

      (_a = CurrentReconciler.removeAttribute) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, qualifiedName);
      this.enqueueUpdate({
        path: "".concat(this._path, ".").concat(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "x"])(qualifiedName)),
        value: ''
      });
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(qualifiedName) {
      var attr = qualifiedName === 'style' ? this.style.cssText : this.props[qualifiedName];
      return attr !== null && attr !== void 0 ? attr : '';
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      var _this10 = this;

      return treeToArray(this, function (el) {
        return el.nodeName === tagName || tagName === '*' && _this10 !== el;
      });
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(className) {
      return treeToArray(this, function (el) {
        var classList = el.classList;
        var classNames = className.trim().split(/\s+/);
        return classNames.every(function (c) {
          return classList.has(c);
        });
      });
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var cancelable = event.cancelable;

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(CurrentReconciler.modifyDispatchEvent)) {
        CurrentReconciler.modifyDispatchEvent(event, this.tagName);
      }

      var listeners = this.__handlers[event.type];

      if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isArray */ "l"])(listeners)) {
        return;
      }

      for (var i = listeners.length; i--;) {
        var listener = listeners[i];
        var result = void 0;

        if (listener._stop) {
          listener._stop = false;
        } else {
          result = listener.call(this, event);
        }

        if ((result === false || event._end) && cancelable) {
          event.defaultPrevented = true;
        }

        if (event._end && event._stop) {
          break;
        }
      }

      if (event._stop) {
        this._stopPropagation(event);
      } else {
        event._stop = true;
      }

      return listeners != null;
    }
  }, {
    key: "_stopPropagation",
    value: function _stopPropagation(event) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var target = this; // eslint-disable-next-line no-cond-assign

      while (target = target.parentNode) {
        var listeners = target.__handlers[event.type];

        if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isArray */ "l"])(listeners)) {
          continue;
        }

        for (var i = listeners.length; i--;) {
          var l = listeners[i];
          l._stop = true;
        }
      }
    }
  }, {
    key: "id",
    get: function get() {
      return this.getAttribute('id');
    },
    set: function set(val) {
      this.setAttribute('id', val);
    }
  }, {
    key: "classList",
    get: function get() {
      return new ClassList(this.className, this);
    }
  }, {
    key: "className",
    get: function get() {
      return this.getAttribute('class') || '';
    },
    set: function set(val) {
      this.setAttribute('class', val);
    }
  }, {
    key: "cssText",
    get: function get() {
      return this.getAttribute('style') || '';
    }
  }, {
    key: "children",
    get: function get() {
      return this.childNodes.filter(isElement);
    }
  }, {
    key: "attributes",
    get: function get() {
      var _this11 = this;

      var propKeys = Object.keys(this.props);
      var style = this.style.cssText;
      var attrs = propKeys.map(function (p) {
        return {
          name: p,
          value: _this11.props[p]
        };
      });
      return attrs.concat(style ? {
        name: 'style',
        value: style
      } : []);
    }
  }, {
    key: "textContent",
    get: function get() {
      var text = '';

      for (var i = 0; i < this.childNodes.length; i++) {
        var element = this.childNodes[i];
        text += element.textContent;
      }

      return text;
    },
    set: function set(text) {
      Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(TaroElement.prototype), "textContent", text, this, true);
    }
  }]);

  return TaroElement;
}(TaroNode);

var FormElement = /*#__PURE__*/function (_TaroElement) {
  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(FormElement, _TaroElement);

  var _super5 = Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(FormElement);

  function FormElement() {
    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, FormElement);

    return _super5.apply(this, arguments);
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(FormElement, [{
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      if ((event.type === 'input' || event.type === 'change') && event.mpEvent) {
        var val = event.mpEvent.detail.value;
        this.props.value = val;
      }

      return Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(FormElement.prototype), "dispatchEvent", this).call(this, event);
    }
  }, {
    key: "value",
    get: function get() {
      // eslint-disable-next-line dot-notation
      var val = this.props['value'];
      return val == null ? '' : val;
    },
    set: function set(val) {
      this.setAttribute('value', val);
    }
  }]);

  return FormElement;
}(TaroElement);

var Performance = /*#__PURE__*/function () {
  function Performance() {
    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, Performance);

    this.recorder = new Map();
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(Performance, [{
    key: "start",
    value: function start(id) {
      if (!options.debug) {
        return;
      }

      this.recorder.set(id, Date.now());
    }
  }, {
    key: "stop",
    value: function stop(id) {
      if (!options.debug) {
        return;
      }

      var now = Date.now();
      var prev = this.recorder.get(id);
      var time = now - prev; // eslint-disable-next-line no-console

      console.log("".concat(id, " \u65F6\u957F\uFF1A ").concat(time, "ms"));
    }
  }]);

  return Performance;
}();

var perf = new Performance();

var TaroRootElement = /*#__PURE__*/function (_TaroElement2) {
  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(TaroRootElement, _TaroElement2);

  var _super6 = Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroRootElement);

  function TaroRootElement() {
    var _this12;

    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, TaroRootElement);

    _this12 = _super6.call(this, 1
    /* ELEMENT_NODE */
    , 'root');
    _this12.pendingUpdate = false;
    _this12.updatePayloads = [];
    _this12.pendingFlush = false;
    _this12.updateCallbacks = [];
    _this12.ctx = null;
    return _this12;
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(TaroRootElement, [{
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      this.updatePayloads.push(payload);

      if (this.pendingUpdate || this.ctx === null) {
        return;
      }

      this.performUpdate();
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      var _this13 = this;

      var initRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var prerender = arguments.length > 1 ? arguments[1] : undefined;
      this.pendingUpdate = true;
      var ctx = this.ctx;
      setTimeout(function () {
        var _a, _b;

        perf.start(SET_DATA);
        var data = Object.create(null);
        var resetPaths = new Set(initRender ? ['root.cn.[0]', 'root.cn[0]'] : []);

        while (_this13.updatePayloads.length > 0) {
          var _this13$updatePayload = _this13.updatePayloads.shift(),
              path = _this13$updatePayload.path,
              value = _this13$updatePayload.value;

          if (path.endsWith("cn"
          /* Childnodes */
          )) {
            resetPaths.add(path);
          }

          data[path] = value;
        }

        var _loop2 = function _loop2(_path) {
          resetPaths.forEach(function (p) {
            // 已经重置了数组，就不需要分别再设置了
            if (_path.includes(p) && _path !== p) {
              delete data[_path];
            }
          });
          var value = data[_path];

          if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(value)) {
            data[_path] = value();
          }
        };

        for (var _path in data) {
          _loop2(_path);
        }

        (_a = CurrentReconciler.prepareUpdateData) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, data, _this13);

        if (initRender) {
          (_b = CurrentReconciler.appendInitialPage) === null || _b === void 0 ? void 0 : _b.call(CurrentReconciler, data, _this13);
        }

        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(prerender)) {
          prerender(data);
        } else {
          _this13.pendingUpdate = false;
          ctx.setData(data, function () {
            perf.stop(SET_DATA);

            if (!_this13.pendingFlush) {
              _this13.flushUpdateCallback();
            }

            if (initRender) {
              perf.stop(PAGE_INIT);
            }
          });
        }
      }, 0);
    }
  }, {
    key: "enqueueUpdateCallback",
    value: function enqueueUpdateCallback(cb, ctx) {
      this.updateCallbacks.push(function () {
        ctx ? cb.call(ctx) : cb();
      });
    }
  }, {
    key: "flushUpdateCallback",
    value: function flushUpdateCallback() {
      this.pendingFlush = false;
      var copies = this.updateCallbacks.slice(0);
      this.updateCallbacks.length = 0;

      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }
  }, {
    key: "_path",
    get: function get() {
      return 'root';
    }
  }, {
    key: "_root",
    get: function get() {
      return this;
    }
  }]);

  return TaroRootElement;
}(TaroElement);

var isBrowser = typeof document !== 'undefined' && !!document.scripts;
var doc = isBrowser ? document : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"];
var win = isBrowser ? window : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"];

var TaroDocument = /*#__PURE__*/function (_TaroElement3) {
  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(TaroDocument, _TaroElement3);

  var _super7 = Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroDocument);

  function TaroDocument() {
    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, TaroDocument);

    return _super7.call(this, 9
    /* DOCUMENT_NODE */
    , '#document');
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(TaroDocument, [{
    key: "createElement",
    value: function createElement(type) {
      if (type === 'root') {
        return new TaroRootElement();
      }

      if (_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* controlledComponent */ "f"].has(type)) {
        return new FormElement(1
        /* ELEMENT_NODE */
        , type);
      }

      return new TaroElement(1
      /* ELEMENT_NODE */
      , type);
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(text) {
      return new TaroText(text);
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      var el = eventSource.get(id);
      return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "r"])(el) ? null : el;
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      var _this14 = this;

      var elements = [];
      eventSource.forEach(function (node) {
        if (node.nodeType !== 1
        /* ELEMENT_NODE */
        ) {
            return;
          }

        if (node.nodeName === tagName || tagName === '*' && node !== _this14) {
          elements.push(node);
        }
      });
      return elements;
    }
  }, {
    key: "querySelector",
    value: function querySelector(query) {
      // 为了 Vue3 的乞丐版实现
      if (/^#/.test(query)) {
        return this.getElementById(query.slice(1));
      }

      return null;
    } // @TODO: @PERF: 在 hydrate 移除掉空的 node

  }, {
    key: "createComment",
    value: function createComment() {
      return new TaroText('');
    }
  }]);

  return TaroDocument;
}(TaroElement);

function createDocument() {
  var doc = new TaroDocument();
  doc.appendChild(doc.documentElement = doc.createElement('html'));
  doc.documentElement.appendChild(doc.head = doc.createElement('head'));
  var body = doc.createElement('body');
  doc.documentElement.appendChild(body);
  doc.body = body;
  var app = doc.createElement('app');
  app.id = 'app';
  var container = doc.createElement('container'); // 多包一层主要为了兼容 vue

  container.appendChild(app);
  doc.documentElement.lastChild.appendChild(container);
  doc.createEvent = createEvent;
  return doc;
}

var document$1 = isBrowser ? doc : createDocument();
var machine = 'Macintosh';
var arch = 'Intel Mac OS X 10_14_5';
var engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
var navigator = isBrowser ? win.navigator : {
  appCodeName: 'Mozilla',
  appName: 'Netscape',
  appVersion: '5.0 (' + machine + '; ' + arch + ') ' + engine,
  cookieEnabled: true,
  mimeTypes: [],
  onLine: true,
  platform: 'MacIntel',
  plugins: [],
  product: 'Taro',
  productSub: '20030107',
  userAgent: 'Mozilla/5.0 (' + machine + '; ' + arch + ') ' + engine,
  vendor: 'Joyent',
  vendorSub: ''
}; // https://github.com/myrne/performance-now

var now;

(function () {
  var loadTime;

  if (typeof performance !== 'undefined' && performance !== null && performance.now) {
    now = function now() {
      return performance.now();
    };
  } else if (Date.now) {
    now = function now() {
      return Date.now() - loadTime;
    };

    loadTime = Date.now();
  } else {
    now = function now() {
      return new Date().getTime() - loadTime;
    };

    loadTime = new Date().getTime();
  }
})();

var lastTime = 0; // https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0

var raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
  var _now = now();

  var nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.

  return setTimeout(function () {
    callback(lastTime = nextTime);
  }, nextTime - _now);
};
var caf = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null ? cancelAnimationFrame : clearTimeout;

function getComputedStyle(element) {
  return new Style(element);
}

var window$1 = isBrowser ? win : {
  navigator: navigator,
  document: document$1
};

if (!isBrowser) {
  var globalProperties = [].concat(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object.getOwnPropertyNames(global || win)), Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object.getOwnPropertySymbols(global || win)));
  globalProperties.forEach(function (property) {
    if (!Object.prototype.hasOwnProperty.call(window$1, property)) {
      window$1[property] = global[property];
    }
  });
}

if (true) {
  window$1.requestAnimationFrame = raf;
  window$1.cancelAnimationFrame = caf;
  window$1.getComputedStyle = getComputedStyle;
}

var Current = {
  app: null,
  router: null,
  page: null
};

var getCurrentInstance = function getCurrentInstance() {
  return Current;
};

var Events = /*#__PURE__*/function () {
  function Events(opts) {
    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, Events);

    if (typeof opts !== 'undefined' && opts.callbacks) {
      this.callbacks = opts.callbacks;
    } else {
      this.callbacks = {};
    }
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(Events, [{
    key: "on",
    value: function on(eventName, callback, context) {
      var event, node, tail, list;

      if (!callback) {
        return this;
      }

      eventName = eventName.split(Events.eventSplitter);
      var calls = this.callbacks;

      while (event = eventName.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
      }

      return this;
    }
  }, {
    key: "once",
    value: function once(events, callback, context) {
      var _this15 = this;

      var wrapper = function wrapper() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        callback.apply(_this15, args);

        _this15.off(events, wrapper, context);
      };

      this.on(events, wrapper, context);
      return this;
    }
  }, {
    key: "off",
    value: function off(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      if (!(calls = this.callbacks)) {
        return this;
      }

      if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
      }

      events = events ? events.split(Events.eventSplitter) : Object.keys(calls);

      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];

        if (!node || !(callback || context)) {
          continue;
        }

        tail = node.tail;

        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;

          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      var event, node, calls, tail;

      if (!(calls = this.callbacks)) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      var rest = [].slice.call(arguments, 1);

      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
      }

      return this;
    }
  }]);

  return Events;
}();

Events.eventSplitter = /\s+/;
var eventCenter = CurrentReconciler.getEventCenter(Events);
/* eslint-disable dot-notation */

var instances = new Map();

function injectPageInstance(inst, id) {
  var _a;

  (_a = CurrentReconciler.mergePageInstance) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, instances.get(id), inst);
  instances.set(id, inst);
}

function getPageInstance(id) {
  return instances.get(id);
}

function addLeadingSlash(path) {
  if (path == null) {
    return '';
  }

  return path.charAt(0) === '/' ? path : '/' + path;
}

var pageId = incrementId();

function safeExecute(path, lifecycle) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  var instance = instances.get(path);

  if (instance == null) {
    return;
  }

  var func = CurrentReconciler.getLifecyle(instance, lifecycle);

  if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isArray */ "l"])(func)) {
    var res = func.map(function (fn) {
      return fn.apply(instance, args);
    });
    return res[0];
  }

  if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(func)) {
    return;
  }

  return func.apply(instance, args);
}

function stringify(obj) {
  if (obj == null) {
    return '';
  }

  var path = Object.keys(obj).map(function (key) {
    return key + '=' + obj[key];
  }).join('&');
  return path === '' ? path : '?' + path;
}

function getPath(id, options) {
  var path = id;

  if (!isBrowser) {
    path = id + stringify(options);
  }

  return path;
}

function getOnReadyEventKey(path) {
  return path + '.' + 'onReady';
}

function getOnShowEventKey(path) {
  return path + '.' + 'onShow';
}

function getOnHideEventKey(path) {
  return path + '.' + 'onHide';
}

function createPageConfig(component, pageName, data, pageConfig) {
  var _a, _b;

  var id = pageName !== null && pageName !== void 0 ? pageName : "taro_page_".concat(pageId()); // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上

  var pageElement = null;
  var config = {
    onLoad: function onLoad(options, cb) {
      var _this16 = this;

      perf.start(PAGE_INIT);
      Current.page = this;
      this.config = pageConfig || {};

      if (this.options == null) {
        this.options = options;
      }

      var path = getPath(id, options);
      Current.router = {
        params: options,
        path: addLeadingSlash(this.route || this.__route__),
        onReady: getOnReadyEventKey(id),
        onShow: getOnShowEventKey(id),
        onHide: getOnHideEventKey(id)
      };
      Current.app.mount(component, path, function () {
        pageElement = document$1.getElementById(path);
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* ensure */ "h"])(pageElement !== null, '没有找到页面实例。');
        safeExecute(path, 'onLoad', options);

        if (!isBrowser) {
          pageElement.ctx = _this16;
          pageElement.performUpdate(true, cb);
        }
      });
    },
    onReady: function onReady() {
      var path = getPath(id, this.options);
      raf(function () {
        eventCenter.trigger(getOnReadyEventKey(id));
      });
      safeExecute(path, 'onReady');
      this.onReady.called = true;
    },
    onUnload: function onUnload() {
      var path = getPath(id, this.options);
      Current.app.unmount(path, function () {
        instances.delete(path);

        if (pageElement) {
          pageElement.ctx = null;
        }
      });
    },
    onShow: function onShow() {
      Current.page = this;
      this.config = pageConfig || {};
      var path = getPath(id, this.options);
      Current.router = {
        params: this.options,
        path: addLeadingSlash(this.route || this.__route__),
        onReady: getOnReadyEventKey(id),
        onShow: getOnShowEventKey(id),
        onHide: getOnHideEventKey(id)
      };
      raf(function () {
        eventCenter.trigger(getOnShowEventKey(id));
      });
      safeExecute(path, 'onShow');
    },
    onHide: function onHide() {
      Current.page = null;
      Current.router = null;
      var path = getPath(id, this.options);
      raf(function () {
        eventCenter.trigger(getOnHideEventKey(id));
      });
      safeExecute(path, 'onHide');
    },
    onPullDownRefresh: function onPullDownRefresh() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPullDownRefresh');
    },
    onReachBottom: function onReachBottom() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onReachBottom');
    },
    onPageScroll: function onPageScroll(options) {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPageScroll', options);
    },
    onResize: function onResize(options) {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onResize', options);
    },
    onTabItemTap: function onTabItemTap(options) {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onTabItemTap', options);
    },
    onTitleClick: function onTitleClick() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onTitleClick');
    },
    onOptionMenuClick: function onOptionMenuClick() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onOptionMenuClick');
    },
    onPopMenuClick: function onPopMenuClick() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPopMenuClick');
    },
    onPullIntercept: function onPullIntercept() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPullIntercept');
    },
    onAddToFavorites: function onAddToFavorites() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onAddToFavorites');
    }
  }; // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。

  if (component.onShareAppMessage || ((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.onShareAppMessage) || component.enableShareAppMessage) {
    config.onShareAppMessage = function (options) {
      var target = options.target;

      if (target != null) {
        var _id = target.id;
        var element = document$1.getElementById(_id);

        if (element != null) {
          options.target.dataset = element.dataset;
        }
      }

      var path = getPath(id, this.options);
      return safeExecute(path, 'onShareAppMessage', options);
    };
  }

  if (component.onShareTimeline || ((_b = component.prototype) === null || _b === void 0 ? void 0 : _b.onShareTimeline) || component.enableShareTimeline) {
    config.onShareTimeline = function () {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onShareTimeline');
    };
  }

  config.eh = eventHandler;

  if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "r"])(data)) {
    config.data = data;
  }

  if (isBrowser) {
    config.path = id;
  }

  return config;
}

function createComponentConfig(component, componentName, data) {
  var _a, _b, _c;

  var id = componentName !== null && componentName !== void 0 ? componentName : "taro_component_".concat(pageId());
  var componentElement = null;
  var config = {
    attached: function attached() {
      var _this17 = this;

      perf.start(PAGE_INIT);
      var path = getPath(id, {
        id: this.getPageId()
      });
      Current.app.mount(component, path, function () {
        componentElement = document$1.getElementById(path);
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* ensure */ "h"])(componentElement !== null, '没有找到组件实例。');
        safeExecute(path, 'onLoad');

        if (!isBrowser) {
          componentElement.ctx = _this17;
          componentElement.performUpdate(true);
        }
      });
    },
    detached: function detached() {
      var path = getPath(id, {
        id: this.getPageId()
      });
      Current.app.unmount(path, function () {
        instances.delete(path);

        if (componentElement) {
          componentElement.ctx = null;
        }
      });
    },
    pageLifetimes: {
      show: function show() {
        safeExecute(id, 'onShow');
      },
      hide: function hide() {
        safeExecute(id, 'onHide');
      }
    },
    methods: {
      eh: eventHandler
    }
  };

  if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "r"])(data)) {
    config.data = data;
  }

  config['options'] = (_a = component === null || component === void 0 ? void 0 : component['options']) !== null && _a !== void 0 ? _a : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"];
  config['externalClasses'] = (_b = component === null || component === void 0 ? void 0 : component['externalClasses']) !== null && _b !== void 0 ? _b : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"];
  config['behaviors'] = (_c = component === null || component === void 0 ? void 0 : component['behaviors']) !== null && _c !== void 0 ? _c : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"];
  return config;
}

function createRecursiveComponentConfig() {
  return {
    properties: {
      i: {
        type: Object,
        value: Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])({}, "nn"
        /* NodeName */
        , 'view')
      },
      l: {
        type: String,
        value: ''
      }
    },
    observers: {
      i: function i(val) {
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* warn */ "z"])(val["nn"
        /* NodeName */
        ] === '#text', "\u8BF7\u5728\u6B64\u5143\u7D20\u5916\u518D\u5957\u4E00\u5C42\u975E Text \u5143\u7D20\uFF1A<text>".concat(val["v"
        /* Text */
        ], "</text>\uFF0C\u8BE6\u60C5\uFF1Ahttps://github.com/NervJS/taro/issues/6054"));
      }
    },
    options: {
      addGlobalClass: true
    },
    methods: {
      eh: eventHandler
    }
  };
}

function isClassComponent(R, component) {
  var _a;

  return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(component.render) || !!((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.isReactComponent) || component.prototype instanceof R.Component; // compat for some others react-like library
}

function connectReactPage(R, id) {
  var h = R.createElement;
  return function (component) {
    // eslint-disable-next-line dot-notation
    var isReactComponent = isClassComponent(R, component);

    var inject = function inject(node) {
      return node && injectPageInstance(node, id);
    };

    var refs = isReactComponent ? {
      ref: inject
    } : {
      forwardedRef: inject,
      // 兼容 react-redux 7.20.1+
      reactReduxForwardedRef: inject
    };

    if (PageContext === _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"]) {
      PageContext = R.createContext('');
    }

    return /*#__PURE__*/function (_R$Component) {
      Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Page, _R$Component);

      var _super8 = Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Page);

      function Page() {
        var _this18;

        Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, Page);

        _this18 = _super8.apply(this, arguments);
        _this18.state = {
          hasError: false
        };
        return _this18;
      }

      Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(Page, [{
        key: "componentDidCatch",
        // React 16 uncaught error 会导致整个应用 crash，
        // 目前把错误缩小到页面
        value: function componentDidCatch(error, info) {
          console.warn(error);
          console.error(info.componentStack);
        }
      }, {
        key: "render",
        value: function render() {
          var children = this.state.hasError ? [] : h(PageContext.Provider, {
            value: id
          }, h(component, Object.assign(Object.assign({}, this.props), refs)));

          if (isBrowser) {
            return h('div', {
              id: id,
              className: 'taro_page'
            }, children);
          }

          return h('root', {
            id: id
          }, children);
        }
      }], [{
        key: "getDerivedStateFromError",
        value: function getDerivedStateFromError(error) {
          console.warn(error);
          return {
            hasError: true
          };
        }
      }]);

      return Page;
    }(R.Component);
  };
} // 初始值设置为 any 主要是为了过 TS 的校验


var R = _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"];
var PageContext = _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"];
var ReactDOM;

function setReconciler() {
  var hostConfig = {
    getLifecyle: function getLifecyle(instance, lifecycle) {
      if (lifecycle === 'onShow') {
        lifecycle = 'componentDidShow';
      } else if (lifecycle === 'onHide') {
        lifecycle = 'componentDidHide';
      }

      return instance[lifecycle];
    },
    mergePageInstance: function mergePageInstance(prev, next) {
      if (!prev || !next) return; // 子组件使用 lifecycle hooks 注册了生命周期后，会存在 prev，里面是注册的生命周期回调。

      Object.keys(prev).forEach(function (item) {
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(next[item])) {
          next[item] = [next[item]].concat(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(prev[item]));
        } else {
          next[item] = [].concat(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(next[item] || []), Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(prev[item]));
        }
      });
    }
  };

  if (isBrowser) {
    hostConfig.createPullDownComponent = function (el, _, R) {
      var isReactComponent = isClassComponent(R, el);
      return R.forwardRef(function (props, ref) {
        var newProps = Object.assign({}, props);
        var refs = isReactComponent ? {
          ref: ref
        } : {
          forwardedRef: ref,
          // 兼容 react-redux 7.20.1+
          reactReduxForwardedRef: ref
        };
        return R.createElement('taro-pull-to-refresh', null, R.createElement(el, Object.assign(Object.assign({}, newProps), refs)));
      });
    };

    hostConfig.findDOMNode = function (inst) {
      return ReactDOM.findDOMNode(inst);
    };
  }

  options.reconciler(hostConfig);
}

var pageKeyId = incrementId();

function createReactApp(App, react, reactdom, config) {
  R = react;
  ReactDOM = reactdom;
  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* ensure */ "h"])(!!ReactDOM, '构建 React/Nerv 项目请把 process.env.FRAMEWORK 设置为 \'react\'/\'nerv\' ');
  var ref = R.createRef();
  var isReactComponent = isClassComponent(R, App);
  setReconciler();
  var wrapper;

  var AppWrapper = /*#__PURE__*/function (_R$Component2) {
    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(AppWrapper, _R$Component2);

    var _super9 = Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(AppWrapper);

    function AppWrapper() {
      var _this19;

      Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(this, AppWrapper);

      _this19 = _super9.apply(this, arguments); // run createElement() inside the render function to make sure that owner is right

      _this19.pages = [];
      _this19.elements = [];
      return _this19;
    }

    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(AppWrapper, [{
      key: "mount",
      value: function mount(component, id, cb) {
        var key = id + pageKeyId();

        var page = function page() {
          return R.createElement(component, {
            key: key,
            tid: id
          });
        };

        this.pages.push(page);
        this.forceUpdate(cb);
      }
    }, {
      key: "unmount",
      value: function unmount(id, cb) {
        for (var i = 0; i < this.elements.length; i++) {
          var element = this.elements[i];

          if (element.props.tid === id) {
            this.elements.splice(i, 1);
            break;
          }
        }

        this.forceUpdate(cb);
      }
    }, {
      key: "render",
      value: function render() {
        while (this.pages.length > 0) {
          var page = this.pages.pop();
          this.elements.push(page());
        }

        var props = null;

        if (isReactComponent) {
          props = {
            ref: ref
          };
        }

        return R.createElement(App, props, isBrowser ? R.createElement('div', null, this.elements.slice()) : this.elements.slice());
      }
    }]);

    return AppWrapper;
  }(R.Component);

  var app = Object.create({
    render: function render(cb) {
      wrapper.forceUpdate(cb);
    },
    mount: function mount(component, id, cb) {
      var page = connectReactPage(R, id)(component);
      wrapper.mount(page, id, cb);
    },
    unmount: function unmount(id, cb) {
      wrapper.unmount(id, cb);
    }
  }, {
    config: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: config
    },
    onLaunch: {
      enumerable: true,
      writable: true,
      value: function value(options) {
        var _this20 = this;

        var _a;

        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options); // eslint-disable-next-line react/no-render-return-value

        wrapper = ReactDOM.render(R.createElement(AppWrapper), document$1.getElementById('app'));
        var app = ref.current; // For taroize
        // 把 App Class 上挂载的额外属性同步到全局 app 对象中

        if ((_a = app === null || app === void 0 ? void 0 : app.optionsExtraKeys) === null || _a === void 0 ? void 0 : _a.length) {
          app.optionsExtraKeys.forEach(function (key) {
            Object.defineProperty(_this20, key, {
              configurable: true,
              enumerable: true,
              get: function get() {
                return app[key];
              },
              set: function set(value) {
                app[key] = value;
              }
            });
          });
        }

        this.$app = app;

        if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(app.onLaunch)) {
          app.onLaunch(options);
        }
      }
    },
    onShow: {
      enumerable: true,
      writable: true,
      value: function value(options) {
        var app = ref.current;
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(app.componentDidShow)) {
          app.componentDidShow(options);
        }
      }
    },
    onHide: {
      enumerable: true,
      writable: true,
      value: function value(options) {
        var app = ref.current;

        if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(app.componentDidHide)) {
          app.componentDidHide(options);
        }
      }
    },
    onPageNotFound: {
      enumerable: true,
      writable: true,
      value: function value(res) {
        var app = ref.current;

        if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(app.onPageNotFound)) {
          app.onPageNotFound(res);
        }
      }
    }
  });
  Current.app = app;
  return Current.app;
}

function connectVuePage(Vue, id) {
  return function (component) {
    var injectedPage = Vue.extend({
      props: {
        tid: String
      },
      mixins: [component, {
        created: function created() {
          injectPageInstance(this, id);
        }
      }]
    });
    var options = {
      render: function render(h) {
        return h(isBrowser ? 'div' : 'root', {
          attrs: {
            id: id,
            class: isBrowser ? 'taro_page' : ''
          }
        }, [h(injectedPage, {
          props: {
            tid: id
          }
        })]);
      }
    };
    return options;
  };
}

function setReconciler$1() {
  var hostConfig = {
    getLifecyle: function getLifecyle(instance, lifecycle) {
      return instance.$options[lifecycle];
    },
    removeAttribute: function removeAttribute(dom, qualifiedName) {
      var compName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* capitalize */ "e"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "x"])(dom.tagName.toLowerCase()));

      if (compName in _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* internalComponents */ "k"] && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* hasOwn */ "j"])(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* internalComponents */ "k"][compName], qualifiedName) && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isBooleanStringLiteral */ "m"])(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* internalComponents */ "k"][compName][qualifiedName])) {
        // avoid attribute being removed because set false value in vue
        dom.setAttribute(qualifiedName, false);
      } else {
        delete dom.props[qualifiedName];
      }
    }
  };

  if (isBrowser) {
    hostConfig.createPullDownComponent = function (el, path, vue) {
      var injectedPage = vue.extend({
        props: {
          tid: String
        },
        mixins: [el, {
          created: function created() {
            injectPageInstance(this, path);
          }
        }]
      });
      var options = {
        name: 'PullToRefresh',
        render: function render(h) {
          return h('taro-pull-to-refresh', {
            class: ['hydrated']
          }, [h(injectedPage, this.$slots.default)]);
        }
      };
      return options;
    };

    hostConfig.findDOMNode = function (el) {
      return el.$el;
    };
  }

  options.reconciler(hostConfig);
}

var Vue;

function createVueApp(App, vue, config) {
  Vue = vue;
  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* ensure */ "h"])(!!Vue, '构建 Vue 项目请把 process.env.FRAMEWORK 设置为 \'vue\'');
  setReconciler$1();
  Vue.config.getTagNamespace = _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* noop */ "u"];
  var elements = [];
  var pages = [];
  var appInstance;
  var wrapper = new Vue({
    render: function render(h) {
      while (pages.length > 0) {
        var page = pages.pop();
        elements.push(page(h));
      }

      return h(App, {
        ref: 'app'
      }, elements.slice());
    },
    methods: {
      mount: function mount(component, id, cb) {
        pages.push(function (h) {
          return h(component, {
            key: id
          });
        });
        this.updateSync(cb);
      },
      updateSync: function updateSync(cb) {
        this._update(this._render(), false);

        this.$children.forEach(function (child) {
          return child._update(child._render(), false);
        });
        cb();
      },
      unmount: function unmount(id, cb) {
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];

          if (element.key === id) {
            elements.splice(i, 1);
            break;
          }
        }

        this.updateSync(cb);
      }
    }
  });
  var app = Object.create({
    mount: function mount(component, id, cb) {
      var page = connectVuePage(Vue, id)(component);
      wrapper.mount(page, id, cb);
    },
    unmount: function unmount(id, cb) {
      wrapper.unmount(id, cb);
    }
  }, {
    config: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: config
    },
    onLaunch: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);
        wrapper.$mount(document$1.getElementById('app'));
        appInstance = wrapper.$refs.app;

        if (appInstance != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(appInstance.$options.onLaunch)) {
          appInstance.$options.onLaunch.call(appInstance, options);
        }
      }
    },
    onShow: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (appInstance != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(appInstance.$options.onShow)) {
          appInstance.$options.onShow.call(appInstance, options);
        }
      }
    },
    onHide: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        if (appInstance != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(appInstance.$options.onHide)) {
          appInstance.$options.onHide.call(appInstance, options);
        }
      }
    }
  });
  Current.app = app;
  return Current.app;
}

function createVue3Page(h, id) {
  return function (component) {
    var _a;

    var inject = {
      props: {
        tid: String
      },
      created: function created() {
        injectPageInstance(this, id); // vue3 组件 created 时机比小程序页面 onShow 慢，因此在 created 后再手动触发一次 onShow。

        safeExecute(id, 'onShow');
      }
    };

    if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isArray */ "l"])(component.mixins)) {
      var mixins = component.mixins;
      var idx = mixins.length - 1;

      if (!((_a = mixins[idx].props) === null || _a === void 0 ? void 0 : _a.tid)) {
        // mixins 里还没注入过，直接推入数组
        component.mixins.push(inject);
      } else {
        // mixins 里已经注入过，代替前者
        component.mixins[idx] = inject;
      }
    } else {
      component.mixins = [inject];
    }

    return h(isBrowser ? 'div' : 'root', {
      key: id,
      id: id,
      class: isBrowser ? 'taro_page' : ''
    }, [h(component, {
      tid: id
    })]);
  };
}

function setReconciler$2() {
  var hostConfig = {
    getLifecyle: function getLifecyle(instance, lifecycle) {
      return instance.$options[lifecycle];
    },
    removeAttribute: function removeAttribute(dom, qualifiedName) {
      var compName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* capitalize */ "e"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "x"])(dom.tagName.toLowerCase()));

      if (compName in _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* internalComponents */ "k"] && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* hasOwn */ "j"])(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* internalComponents */ "k"][compName], qualifiedName) && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isBooleanStringLiteral */ "m"])(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* internalComponents */ "k"][compName][qualifiedName])) {
        // avoid attribute being removed because set false value in vue
        dom.setAttribute(qualifiedName, false);
      } else {
        delete dom.props[qualifiedName];
      }
    }
  };

  if (isBrowser) {
    hostConfig.createPullDownComponent = function (component, path, h) {
      var inject = {
        props: {
          tid: String
        },
        created: function created() {
          injectPageInstance(this, path);
        }
      };
      component.mixins = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isArray */ "l"])(component.mixins) ? component.mixins.push(inject) : [inject];
      return {
        render: function render() {
          return h('taro-pull-to-refresh', {
            class: 'hydrated'
          }, [h(component, this.$slots.default)]);
        }
      };
    };

    hostConfig.findDOMNode = function (el) {
      return el.$el;
    };
  }

  options.reconciler(hostConfig);
}

function createVue3App(app, h, config) {
  var pages = [];
  var appInstance;
  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* ensure */ "h"])(!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(app._component), '入口组件不支持使用函数式组件');
  setReconciler$2();

  app._component.render = function () {
    return pages.slice();
  };

  var appConfig = Object.create({
    mount: function mount(component, id, cb) {
      var page = createVue3Page(h, id)(component);
      pages.push(page);
      this.updateAppInstance(cb);
    },
    unmount: function unmount(id, cb) {
      pages = pages.filter(function (page) {
        return page.key !== id;
      });
      this.updateAppInstance(cb);
    },
    updateAppInstance: function updateAppInstance(cb) {
      appInstance.$forceUpdate();
      appInstance.$nextTick(cb);
    }
  }, {
    config: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: config
    },
    onLaunch: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        var _a;

        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);
        appInstance = app.mount('#app');
        var onLaunch = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onLaunch;
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(onLaunch) && onLaunch.call(appInstance, options);
      }
    },
    onShow: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        var _a;

        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);
        var onShow = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onShow;
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(onShow) && onShow.call(appInstance, options);
      }
    },
    onHide: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        var _a;

        var onHide = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onHide;
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(onHide) && onHide.call(appInstance, options);
      }
    }
  });
  Current.app = appConfig;
  return Current.app;
}

var taroHooks = function taroHooks(lifecycle) {
  return function (fn) {
    var id = R.useContext(PageContext); // hold fn ref and keep up to date

    var fnRef = R.useRef(fn);
    if (fnRef.current !== fn) fnRef.current = fn;
    R.useLayoutEffect(function () {
      var inst = getPageInstance(id);
      var first = false;

      if (inst == null) {
        first = true;
        inst = Object.create(null);
      }

      inst = inst; // callback is immutable but inner function is up to date

      var callback = function callback() {
        return fnRef.current.apply(fnRef, arguments);
      };

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "n"])(inst[lifecycle])) {
        inst[lifecycle] = [inst[lifecycle], callback];
      } else {
        inst[lifecycle] = [].concat(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(inst[lifecycle] || []), [callback]);
      }

      if (first) {
        injectPageInstance(inst, id);
      }

      return function () {
        var inst = getPageInstance(id);
        var list = inst[lifecycle];

        if (list === callback) {
          inst[lifecycle] = undefined;
        } else if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isArray */ "l"])(list)) {
          inst[lifecycle] = list.filter(function (item) {
            return item !== callback;
          });
        }
      };
    }, []);
  };
};

var useDidShow = taroHooks('componentDidShow');
var useDidHide = taroHooks('componentDidHide');
var usePullDownRefresh = taroHooks('onPullDownRefresh');
var useReachBottom = taroHooks('onReachBottom');
var usePageScroll = taroHooks('onPageScroll');
var useResize = taroHooks('onResize');
var useShareAppMessage = taroHooks('onShareAppMessage');
var useTabItemTap = taroHooks('onTabItemTap');
var useTitleClick = taroHooks('onTitleClick');
var useOptionMenuClick = taroHooks('onOptionMenuClick');
var usePullIntercept = taroHooks('onPullIntercept');
var useShareTimeline = taroHooks('onShareTimeline');
var useAddToFavorites = taroHooks('onAddToFavorites');
var useReady = taroHooks('onReady');

var useRouter = function useRouter() {
  var dynamic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return dynamic ? Current.router : R.useMemo(function () {
    return Current.router;
  }, []);
};

var useScope = function useScope() {
  return undefined;
};

function removeLeadingSlash(path) {
  if (path == null) {
    return '';
  }

  return path.charAt(0) === '/' ? path.slice(1) : path;
}

var nextTick = function nextTick(cb, ctx) {
  var _a, _b, _c;

  var router = Current.router;

  var timerFunc = function timerFunc() {
    setTimeout(function () {
      ctx ? cb.call(ctx) : cb();
    }, 1);
  };

  if (router !== null) {
    var pageElement = null;
    var path = getPath(removeLeadingSlash(router.path), router.params);
    pageElement = document$1.getElementById(path);

    if (pageElement !== null) {
      if (isBrowser) {
        (_c = (_b = (_a = pageElement.firstChild) === null || _a === void 0 ? void 0 : _a['componentOnReady']) === null || _b === void 0 ? void 0 : _b.call(_a).then(function () {
          timerFunc();
        })) !== null && _c !== void 0 ? _c : timerFunc();
      } else {
        pageElement.enqueueUpdateCallback(cb, ctx);
      }
    } else {
      timerFunc();
    }
  } else {
    timerFunc();
  }
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["requestAnimationFrame"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["cancelAnimationFrame"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@tarojs/shared/dist/shared.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@tarojs/shared/dist/shared.esm.js ***!
  \********************************************************/
/*! exports provided: BaseTemplate, EMPTY_ARR, EMPTY_OBJ, RecursiveTemplate, UnRecursiveTemplate, animationEvents, box, cacheDataGet, cacheDataHas, cacheDataSet, capitalize, controlledComponent, defaultReconciler, ensure, events, focusComponents, getUniqueKey, hasOwn, internalComponents, isArray, isBoolean, isBooleanStringLiteral, isFunction, isNull, isNumber, isObject, isString, isUndefined, mergeInternalComponents, mergeReconciler, nestElements, noop, queryToJson, singleQuote, specialEvents, styles, toCamelCase, toDashed, touchEvents, unbox, voidElements, warn */
/*! exports used: EMPTY_ARR, EMPTY_OBJ, cacheDataGet, cacheDataSet, capitalize, controlledComponent, defaultReconciler, ensure, getUniqueKey, hasOwn, internalComponents, isArray, isBooleanStringLiteral, isFunction, isNumber, isObject, isString, isUndefined, mergeInternalComponents, mergeReconciler, noop, queryToJson, singleQuote, toCamelCase, toDashed, warn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BaseTemplate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMPTY_ARR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EMPTY_OBJ; });
/* unused harmony export RecursiveTemplate */
/* unused harmony export UnRecursiveTemplate */
/* unused harmony export animationEvents */
/* unused harmony export box */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cacheDataGet; });
/* unused harmony export cacheDataHas */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cacheDataSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return controlledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return defaultReconciler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ensure; });
/* unused harmony export events */
/* unused harmony export focusComponents */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getUniqueKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return internalComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isArray; });
/* unused harmony export isBoolean */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isBooleanStringLiteral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isFunction; });
/* unused harmony export isNull */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return mergeInternalComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return mergeReconciler; });
/* unused harmony export nestElements */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return queryToJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return singleQuote; });
/* unused harmony export specialEvents */
/* unused harmony export styles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return toCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return toDashed; });
/* unused harmony export touchEvents */
/* unused harmony export unbox */
/* unused harmony export voidElements */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return warn; });
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");







function isString(o) {
  return typeof o === 'string';
}

function isUndefined(o) {
  return typeof o === 'undefined';
}

function isNull(o) {
  return o === null;
}

function isObject(o) {
  return o !== null && Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(o) === 'object';
}

function isBoolean(o) {
  return o === true || o === false;
}

function isFunction(o) {
  return typeof o === 'function';
}

function isNumber(o) {
  return typeof o === 'number';
}

function isBooleanStringLiteral(o) {
  return o === 'true' || o === 'false';
}

var isArray = Array.isArray;
var styles = {
  style: "i.".concat("st"
  /* Style */
  ),
  class: "i.".concat("cl"
  /* Class */
  )
};
var events = {
  bindtap: 'eh'
};
var touchEvents = {
  bindTouchStart: '',
  bindTouchMove: '',
  bindTouchEnd: '',
  bindTouchCancel: '',
  bindLongTap: ''
};
var animationEvents = {
  bindAnimationStart: '',
  bindAnimationIteration: '',
  bindAnimationEnd: '',
  bindTransitionEnd: ''
};
var specialEvents = new Set(['htouchmove', 'vtouchmove']);

function singleQuote(s) {
  return "'".concat(s, "'");
}

var View = Object.assign(Object.assign({
  'hover-class': singleQuote('none'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '50',
  'hover-stay-time': '400',
  animation: ''
}, touchEvents), animationEvents);
var Icon = {
  type: '',
  size: '23',
  color: ''
};
var MapComp = Object.assign({
  longitude: '',
  latitude: '',
  scale: '16',
  markers: '[]',
  covers: '',
  polyline: '[]',
  circles: '[]',
  controls: '[]',
  'include-points': '[]',
  'show-location': '',
  'layer-style': '1',
  bindMarkerTap: '',
  bindControlTap: '',
  bindCalloutTap: '',
  bindUpdated: ''
}, touchEvents);
var Progress = {
  percent: '',
  'stroke-width': '6',
  color: singleQuote('#09BB07'),
  activeColor: singleQuote('#09BB07'),
  backgroundColor: singleQuote('#EBEBEB'),
  active: 'false',
  'active-mode': singleQuote('backwards'),
  'show-info': 'false'
};
var RichText = {
  nodes: '[]'
};
var Text = {
  selectable: 'false',
  space: '',
  decode: 'false'
};
var Button = {
  size: singleQuote('default'),
  type: '',
  plain: 'false',
  disabled: '',
  loading: 'false',
  'form-type': '',
  'open-type': '',
  'hover-class': singleQuote('button-hover'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '20',
  'hover-stay-time': '70',
  name: ''
};
var Checkbox = {
  value: '',
  disabled: '',
  checked: 'false',
  color: singleQuote('#09BB07'),
  name: ''
};
var CheckboxGroup = {
  bindChange: '',
  name: ''
};
var Form = {
  'report-submit': 'false',
  bindSubmit: '',
  bindReset: '',
  name: ''
};
var Input = {
  value: '',
  type: singleQuote(''),
  password: 'false',
  placeholder: '',
  'placeholder-style': '',
  'placeholder-class': singleQuote('input-placeholder'),
  disabled: '',
  maxlength: '140',
  'cursor-spacing': '0',
  focus: 'false',
  'confirm-type': singleQuote('done'),
  'confirm-hold': 'false',
  cursor: 'i.value.length',
  'selection-start': '-1',
  'selection-end': '-1',
  bindInput: '',
  bindFocus: '',
  bindBlur: '',
  bindConfirm: '',
  name: ''
};
var Label = {
  for: '',
  name: ''
};
var Picker = {
  mode: singleQuote('selector'),
  disabled: '',
  range: '',
  'range-key': '',
  value: '',
  start: '',
  end: '',
  fields: singleQuote('day'),
  'custom-item': '',
  name: '',
  bindCancel: '',
  bindChange: '',
  bindColumnChange: ''
};
var PickerView = {
  value: '',
  'indicator-style': '',
  'indicator-class': '',
  'mask-style': '',
  'mask-class': '',
  bindChange: '',
  name: ''
};
var PickerViewColumn = {
  name: ''
};
var Radio = {
  value: '',
  checked: 'false',
  disabled: '',
  color: singleQuote('#09BB07'),
  name: ''
};
var RadioGroup = {
  bindChange: '',
  name: ''
};
var Slider = {
  min: '0',
  max: '100',
  step: '1',
  disabled: '',
  value: '0',
  activeColor: singleQuote('#1aad19'),
  backgroundColor: singleQuote('#e9e9e9'),
  'block-size': '28',
  'block-color': singleQuote('#ffffff'),
  'show-value': 'false',
  bindChange: '',
  bindChanging: '',
  name: ''
};
var Switch = {
  checked: 'false',
  disabled: '',
  type: singleQuote('switch'),
  color: singleQuote('#04BE02'),
  bindChange: '',
  name: ''
};
var Textarea = {
  value: '',
  placeholder: '',
  'placeholder-style': '',
  'placeholder-class': singleQuote('textarea-placeholder'),
  disabled: '',
  maxlength: '140',
  'auto-focus': 'false',
  focus: 'false',
  'auto-height': 'false',
  fixed: 'false',
  'cursor-spacing': '0',
  cursor: '-1',
  'selection-start': '-1',
  'selection-end': '-1',
  bindFocus: '',
  bindBlur: '',
  bindLineChange: '',
  bindInput: '',
  bindConfirm: '',
  name: ''
};
var CoverImage = {
  src: '',
  bindLoad: 'eh',
  bindError: 'eh'
};
var CoverView = Object.assign({
  'scroll-top': 'false'
}, touchEvents);
var MovableArea = {
  'scale-area': 'false'
};
var MovableView = Object.assign(Object.assign({
  direction: 'none',
  inertia: 'false',
  'out-of-bounds': 'false',
  x: '',
  y: '',
  damping: '20',
  friction: '2',
  disabled: '',
  scale: 'false',
  'scale-min': '0.5',
  'scale-max': '10',
  'scale-value': '1',
  animation: 'true',
  bindChange: '',
  bindScale: '',
  htouchmove: '',
  vtouchmove: '',
  width: singleQuote('10px'),
  height: singleQuote('10px')
}, touchEvents), animationEvents);
var ScrollView = Object.assign(Object.assign({
  'scroll-x': 'false',
  'scroll-y': 'false',
  'upper-threshold': '50',
  'lower-threshold': '50',
  'scroll-top': '',
  'scroll-left': '',
  'scroll-into-view': '',
  'scroll-with-animation': 'false',
  'enable-back-to-top': 'false',
  bindScrollToUpper: '',
  bindScrollToLower: '',
  bindScroll: ''
}, touchEvents), animationEvents);
var Swiper = Object.assign({
  'indicator-dots': 'false',
  'indicator-color': singleQuote('rgba(0, 0, 0, .3)'),
  'indicator-active-color': singleQuote('#000000'),
  autoplay: 'false',
  current: '0',
  interval: '5000',
  duration: '500',
  circular: 'false',
  vertical: 'false',
  'previous-margin': '\'0px\'',
  'next-margin': '\'0px\'',
  'display-multiple-items': '1',
  bindChange: '',
  bindTransition: '',
  bindAnimationFinish: ''
}, touchEvents);
var SwiperItem = {
  'item-id': ''
};
var Navigator = {
  url: '',
  'open-type': singleQuote('navigate'),
  delta: '1',
  'hover-class': singleQuote('navigator-hover'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '50',
  'hover-stay-time': '600',
  bindSuccess: '',
  bindFail: '',
  bindComplete: ''
};
var Audio = {
  id: '',
  src: '',
  loop: 'false',
  controls: 'false',
  poster: '',
  name: '',
  author: '',
  bindError: '',
  bindPlay: '',
  bindPause: '',
  bindTimeUpdate: '',
  bindEnded: ''
};
var Camera = {
  'device-position': singleQuote('back'),
  flash: singleQuote('auto'),
  bindStop: '',
  bindError: ''
};
var Image = Object.assign({
  src: '',
  mode: singleQuote('scaleToFill'),
  'lazy-load': 'false',
  bindError: '',
  bindLoad: ''
}, touchEvents);
var LivePlayer = {
  src: '',
  autoplay: 'false',
  muted: 'false',
  orientation: singleQuote('vertical'),
  'object-fit': singleQuote('contain'),
  'background-mute': 'false',
  'min-cache': '1',
  'max-cache': '3',
  animation: '',
  bindStateChange: '',
  bindFullScreenChange: '',
  bindNetStatus: ''
};
var Video = {
  src: '',
  duration: '',
  controls: 'true',
  'danmu-list': '',
  'danmu-btn': '',
  'enable-danmu': '',
  autoplay: 'false',
  loop: 'false',
  muted: 'false',
  'initial-time': '0',
  'page-gesture': 'false',
  direction: '',
  'show-progress': 'true',
  'show-fullscreen-btn': 'true',
  'show-play-btn': 'true',
  'show-center-play-btn': 'true',
  'enable-progress-gesture': 'true',
  'object-fit': singleQuote('contain'),
  poster: '',
  'show-mute-btn': 'false',
  animation: '',
  bindPlay: '',
  bindPause: '',
  bindEnded: '',
  bindTimeUpdate: '',
  bindFullScreenChange: '',
  bindWaiting: '',
  bindError: ''
};
var Canvas = Object.assign({
  'canvas-id': '',
  'disable-scroll': 'false',
  bindError: ''
}, touchEvents);
var Ad = {
  'unit-id': '',
  'ad-intervals': '',
  bindLoad: '',
  bindError: '',
  bindClose: ''
};
var WebView = {
  src: '',
  bindMessage: '',
  bindLoad: '',
  bindError: ''
};
var Block = {}; // For Vue，因为 slot 标签被 vue 占用了

var SlotView = {
  name: ''
}; // For React
// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
// 不给 View 直接加 slot 属性的原因是性能损耗

var Slot = {
  name: ''
};
var internalComponents = {
  View: View,
  Icon: Icon,
  Progress: Progress,
  RichText: RichText,
  Text: Text,
  Button: Button,
  Checkbox: Checkbox,
  CheckboxGroup: CheckboxGroup,
  Form: Form,
  Input: Input,
  Label: Label,
  Picker: Picker,
  PickerView: PickerView,
  PickerViewColumn: PickerViewColumn,
  Radio: Radio,
  RadioGroup: RadioGroup,
  Slider: Slider,
  Switch: Switch,
  CoverImage: CoverImage,
  Textarea: Textarea,
  CoverView: CoverView,
  MovableArea: MovableArea,
  MovableView: MovableView,
  ScrollView: ScrollView,
  Swiper: Swiper,
  SwiperItem: SwiperItem,
  Navigator: Navigator,
  Audio: Audio,
  Camera: Camera,
  Image: Image,
  LivePlayer: LivePlayer,
  Video: Video,
  Canvas: Canvas,
  Ad: Ad,
  WebView: WebView,
  Block: Block,
  Map: MapComp,
  Slot: Slot,
  SlotView: SlotView
};
var controlledComponent = new Set(['input', 'checkbox', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea']);
var focusComponents = new Set(['input', 'textarea']);
var voidElements = new Set(['progress', 'icon', 'rich-text', 'input', 'textarea', 'slider', 'switch', 'audio', 'live-pusher', 'ad', 'official-account', 'open-data', 'navigation-bar']);
var nestElements = new Map([['view', -1], ['catch-view', -1], ['cover-view', -1], ['block', -1], ['text', -1], ['slot', 8], ['slot-view', 8], ['label', 6], ['form', 4], ['scroll-view', 4], ['swiper', 4], ['swiper-item', 4]]);
var EMPTY_OBJ = {};
var EMPTY_ARR = [];

var noop = function noop() {};

var defaultReconciler = {};
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param v Value.
 * @returns Boxed value.
 */

var box = function box(v) {
  return {
    v: v
  };
};
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param b Boxed value.
 * @returns Value.
 */


var unbox = function unbox(b) {
  return b.v;
};

function toDashed(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function toCamelCase(s) {
  var camel = '';
  var nextCap = false;

  for (var i = 0; i < s.length; i++) {
    if (s[i] !== '-') {
      camel += nextCap ? s[i].toUpperCase() : s[i];
      nextCap = false;
    } else {
      nextCap = true;
    }
  }

  return camel;
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};

var reportIssue = '如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */

function ensure(condition, msg) {
  if (!condition) {
    throw new Error(msg + '\n' + reportIssue);
  }
}

function warn(condition, msg) {
  if (true) {
    if (condition) {
      console.warn(msg);
    }
  }
}

function queryToJson(str) {
  var dec = decodeURIComponent;
  var qp = str.split('&');
  var ret = {};
  var name;
  var val;

  for (var i = 0, l = qp.length, item; i < l; ++i) {
    item = qp[i];

    if (item.length) {
      var s = item.indexOf('=');

      if (s < 0) {
        name = dec(item);
        val = '';
      } else {
        name = dec(item.slice(0, s));
        val = dec(item.slice(s + 1));
      }

      if (typeof ret[name] === 'string') {
        // inline'd type check
        ret[name] = [ret[name]];
      }

      if (Array.isArray(ret[name])) {
        ret[name].push(val);
      } else {
        ret[name] = val;
      }
    }
  }

  return ret; // Object
}

var _uniqueId = 1;

var _loadTime = new Date().getTime().toString();

function getUniqueKey() {
  return _loadTime + _uniqueId++;
}

var cacheData = {};

function cacheDataSet(key, val) {
  cacheData[key] = val;
}

function cacheDataGet(key, delelteAfterGet) {
  var temp = cacheData[key];
  delelteAfterGet && delete cacheData[key];
  return temp;
}

function cacheDataHas(key) {
  return key in cacheData;
}

function mergeInternalComponents(components) {
  Object.keys(components).forEach(function (name) {
    if (name in internalComponents) {
      Object.assign(internalComponents[name], components[name]);
    } else {
      internalComponents[name] = components[name];
    }
  });
}

function mergeReconciler(hostConfig) {
  Object.assign(defaultReconciler, hostConfig);
}
/**
 * 这里我们需要关心的小程序种类有两类：
 * 1. 模板递归：
 *  - 支持：tmpl0 套 tmpl0
 *  - 不支持：这就使得我们必须生成多级的模板，tmpl0 套 tmpl1，tmpl1 套 tmpl2……
 *           直到超过阈值 N (N = config.miniapp.baseLevel) tmplN 会套组件 comp，组件 comp 重新再套 tmpl0。
 * 2. 小程序脚本语言（wxs, sjs, etc...）：
 *  - 支持：可以在模板使用函数缩减模板大小或提高性能（存疑），例如判断一个值是不是假值（falsy value）。
 *         将来或许会把数据序列化^1 的操作也放到小程序脚本语言里。
 *  - 不支持：使用纯 *xml 语法
 *
 * ^1: packages/taro-runtime/src/hydrate.ts
*/


var weixinAdapter = {
  if: 'wx:if',
  else: 'wx:else',
  elseif: 'wx:elif',
  for: 'wx:for',
  forItem: 'wx:for-item',
  forIndex: 'wx:for-index',
  key: 'wx:key',
  xs: 'wxs',
  type: 'weapp'
};

var BaseTemplate = /*#__PURE__*/function () {
  function BaseTemplate() {
    var _this = this;

    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, BaseTemplate);

    this.exportExpr = 'module.exports =';
    this.supportXS = false;
    this.Adapter = weixinAdapter;
    /** 组件列表 */

    this.internalComponents = internalComponents;
    /** 可以 focus 聚焦的组件 */

    this.focusComponents = focusComponents;
    /** 不需要渲染子节点的元素 */

    this.voidElements = voidElements;
    /** 可以递归调用自身的组件 */

    this.nestElements = nestElements;

    this.buildPageTemplate = function (baseTempPath) {
      var template = "<import src=\"".concat(baseTempPath, "\"/>\n<template is=\"taro_tmpl\" data=\"{{").concat(_this.dataKeymap('root:root'), "}}\" />");
      return template;
    };

    this.buildBaseComponentTemplate = function (ext) {
      var data = !_this.isSupportRecursive && _this.supportXS ? _this.dataKeymap('i:i,l:l') : _this.dataKeymap('i:i');
      return "<import src=\"./base".concat(ext, "\" />\n<template is=\"tmpl_0_", "container"
      /* Container */
      , "\" data=\"{{").concat(data, "}}\" />");
    };

    this.buildXScript = function () {
      return "".concat(_this.exportExpr, " {\n  a: ").concat(_this.buildXSTmplName(), ",\n  b: function (a, b) {\n    return a === undefined ? b : a\n  },\n  c: function(i, prefix) {\n    var s = i.focus !== undefined ? 'focus' : 'blur'\n    return prefix + i.", "nn"
      /* NodeName */
      , " + '_' + s\n  },\n  d: function (i, v) {\n    return i === undefined ? v : i\n  },\n  e: function (n) {\n    return 'tmpl_' + n + '_", "container"
      /* Container */
      , "'\n  },\n  ").concat(_this.buildXSTmpExtra(), "\n}");
    };
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(BaseTemplate, [{
    key: "buildAttribute",
    value: function buildAttribute(attrs, nodeName) {
      var _this2 = this;

      return Object.keys(attrs).map(function (k) {
        return "".concat(k, "=\"").concat(k.startsWith('bind') || k.startsWith('on') || k.startsWith('catch') ? attrs[k] : "{".concat(_this2.getAttrValue(attrs[k], k, nodeName), "}"), "\" ");
      }).join('');
    }
  }, {
    key: "replacePropName",
    value: function replacePropName(name, value, _componentName) {
      if (value === 'eh') return name.toLowerCase();
      return name;
    }
  }, {
    key: "createMiniComponents",
    value: function createMiniComponents(components) {
      var result = Object.create(null);

      for (var key in components) {
        if (hasOwn(components, key)) {
          var component = components[key];
          var compName = toDashed(key);
          var newComp = Object.create(null);

          if (isFunction(this.modifyCompProps)) {
            component = this.modifyCompProps(compName, component);
          }

          for (var prop in component) {
            if (hasOwn(component, prop)) {
              var propValue = component[prop];

              if (prop.startsWith('bind') || specialEvents.has(prop)) {
                propValue = 'eh';
              } else if (propValue === '') {
                propValue = "i.".concat(toCamelCase(prop));
              } else if (isBooleanStringLiteral(propValue) || isNumber(+propValue)) {
                propValue = this.supportXS ? "xs.b(i.".concat(toCamelCase(prop), ",").concat(propValue, ")") : "i.".concat(toCamelCase(prop), "===undefined?").concat(propValue, ":i.").concat(toCamelCase(prop));
              } else {
                propValue = "i.".concat(toCamelCase(prop), "||").concat(propValue || singleQuote(''));
              }

              prop = this.replacePropName(prop, propValue, compName);
              newComp[prop] = propValue;
            }
          }

          if (compName !== 'block') {
            Object.assign(newComp, styles, this.getEvents());
          }

          if (compName === 'swiper-item') {
            delete newComp.style;
          }

          if (compName === 'view') {
            (function () {
              var reg = /^(bind|on)(touchmove|TouchMove)$/;
              var comp = Object.assign({}, newComp);
              Object.keys(comp).forEach(function (originKey) {
                if (!reg.test(originKey)) return;
                var key = originKey.replace(reg, 'catch$2');
                comp[key] = comp[originKey];
                delete comp[originKey];
              });
              result['catch-view'] = comp;
            })();
          }

          if (compName === 'slot' || compName === 'slot-view') {
            result[compName] = {
              slot: 'i.name'
            };
          } else {
            result[compName] = newComp;
          }
        }
      }

      return result;
    }
  }, {
    key: "buildBaseTemplate",
    value: function buildBaseTemplate() {
      var Adapter = this.Adapter;
      var data = !this.isSupportRecursive && this.supportXS ? "".concat(this.dataKeymap('i:item,l:\'\'')) : this.dataKeymap('i:item');
      return "".concat(this.buildXsTemplate(), "\n<template name=\"taro_tmpl\">\n  <block ").concat(Adapter.for, "=\"{{root.cn}}\" ").concat(Adapter.key, "=\"uid\">\n    <template is=\"tmpl_0_", "container"
      /* Container */
      , "\" data=\"{{").concat(data, "}}\" />\n  </block>\n</template>\n");
    }
  }, {
    key: "buildThirdPartyAttr",
    value: function buildThirdPartyAttr(attrs) {
      return Array.from(attrs).reduce(function (str, attr) {
        if (attr.startsWith('@')) {
          // vue event
          return str + "bind".concat(attr.slice(1), "=\"eh\" ");
        } else if (attr.startsWith('bind')) {
          return str + "".concat(attr, "=\"eh\" ");
        } else if (attr.startsWith('on')) {
          return str + "bind".concat(attr.slice(2).toLowerCase(), "=\"eh\" ");
        }

        return str + "".concat(attr, "=\"{{i.").concat(toCamelCase(attr), "}}\" ");
      }, '');
    }
  }, {
    key: "buildComponentTemplate",
    value: function buildComponentTemplate(comp, level) {
      return this.focusComponents.has(comp.nodeName) ? this.buildFocusComponentTemplte(comp, level) : this.buildStandardComponentTemplate(comp, level);
    }
  }, {
    key: "buildFocusComponentTemplte",
    value: function buildFocusComponentTemplte(comp, level) {
      var attrs = Object.assign({}, comp.attributes);
      var templateName = this.supportXS ? "xs.c(i, 'tmpl_".concat(level, "_')") : "i.focus ? 'tmpl_".concat(level, "_").concat(comp.nodeName, "_focus' : 'tmpl_").concat(level, "_").concat(comp.nodeName, "_blur'");
      delete attrs.focus;
      return "\n<template name=\"tmpl_".concat(level, "_").concat(comp.nodeName, "\">\n  <template is=\"{{").concat(templateName, "}}\" data=\"{{").concat(this.dataKeymap('i:i'), "}}\" />\n</template>\n\n<template name=\"tmpl_").concat(level, "_").concat(comp.nodeName, "_focus\">\n  <").concat(comp.nodeName, " ").concat(this.buildAttribute(comp.attributes, comp.nodeName), " id=\"{{i.uid}}\" />\n</template>\n\n<template name=\"tmpl_").concat(level, "_").concat(comp.nodeName, "_blur\">\n  <").concat(comp.nodeName, " ").concat(this.buildAttribute(attrs, comp.nodeName), " id=\"{{i.uid}}\" />\n</template>\n");
    }
  }, {
    key: "buildStandardComponentTemplate",
    value: function buildStandardComponentTemplate(comp, level) {
      var isSupportRecursive = this.isSupportRecursive,
          Adapter = this.Adapter;
      var nextLevel = isSupportRecursive ? 0 : level + 1;
      var data = !this.isSupportRecursive ? "".concat(this.dataKeymap('i:item,l:l')) : this.dataKeymap('i:item');
      var child = this.supportXS ? "<template is=\"{{xs.e(".concat(isSupportRecursive ? 0 : 'cid+1', ")}}\" data=\"{{").concat(data, "}}\" />") : "<template is=\"tmpl_".concat(nextLevel, "_", "container"
      /* Container */
      , "\" data=\"{{").concat(this.dataKeymap('i:item'), "}}\" />");

      if (isFunction(this.modifyLoopBody)) {
        child = this.modifyLoopBody(child, comp.nodeName);
      }

      var children = this.voidElements.has(comp.nodeName) ? '' : "\n    <block ".concat(Adapter.for, "=\"{{i.", "cn"
      /* Childnodes */
      , "}}\" ").concat(Adapter.key, "=\"uid\">\n      ").concat(child, "\n    </block>\n  ");

      if (isFunction(this.modifyLoopContainer)) {
        children = this.modifyLoopContainer(children, comp.nodeName);
      }

      var nodeName = comp.nodeName === 'slot' || comp.nodeName === 'slot-view' || comp.nodeName === 'catch-view' ? 'view' : comp.nodeName;
      var res = "\n<template name=\"tmpl_".concat(level, "_").concat(comp.nodeName, "\">\n  <").concat(nodeName, " ").concat(this.buildAttribute(comp.attributes, comp.nodeName), " id=\"{{i.uid}}\">").concat(children, "</").concat(nodeName, ">\n</template>\n");

      if (isFunction(this.modifyTemplateResult)) {
        res = this.modifyTemplateResult(res, comp.nodeName, level, children);
      }

      return res;
    }
  }, {
    key: "buildPlainTextTemplate",
    value: function buildPlainTextTemplate(level) {
      return "\n<template name=\"tmpl_".concat(level, "_#text\" data=\"{{").concat(this.dataKeymap('i:i'), "}}\">\n  <block>{{i.", "v"
      /* Text */
      , "}}</block>\n</template>\n");
    }
  }, {
    key: "buildThirdPartyTemplate",
    value: function buildThirdPartyTemplate(level, componentConfig) {
      var _this3 = this;

      var Adapter = this.Adapter,
          isSupportRecursive = this.isSupportRecursive;
      var nextLevel = isSupportRecursive ? 0 : level + 1;
      var template = '';
      var data = !this.isSupportRecursive && this.supportXS ? "".concat(this.dataKeymap('i:item,l:l')) : this.dataKeymap('i:item');
      componentConfig.thirdPartyComponents.forEach(function (attrs, compName) {
        template += "\n<template name=\"tmpl_".concat(level, "_").concat(compName, "\">\n  <").concat(compName, " ").concat(_this3.buildThirdPartyAttr(attrs), " id=\"{{i.uid}}\">\n    <block ").concat(Adapter.for, "=\"{{i.", "cn"
        /* Childnodes */
        , "}}\" ").concat(Adapter.key, "=\"uid\">\n      <template is=\"tmpl_").concat(nextLevel, "_", "container"
        /* Container */
        , "\" data=\"{{").concat(data, "}}\" />\n    </block>\n  </").concat(compName, ">\n</template>\n  ");
      });
      return template;
    }
  }, {
    key: "buildContainerTemplate",
    value: function buildContainerTemplate(level) {
      var restart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var tmpl = '';

      if (restart) {
        if (!this.isSupportRecursive && this.supportXS) {
          tmpl = '<comp i="{{i}}" l="{{l}}" />';
        } else {
          tmpl = '<comp i="{{i}}" />';
        }
      } else {
        var xs = !this.isSupportRecursive ? "xs.a(".concat(level, ", i.", "nn"
        /* NodeName */
        , ", l)") : "xs.a(".concat(level, ", i.", "nn"
        /* NodeName */
        , ")");
        var data = !this.isSupportRecursive ? "".concat(this.dataKeymap("i:i,cid:".concat(level, ",l:xs.f(l,i.", "nn"
        /* NodeName */
        , ")"))) : "".concat(this.dataKeymap('i:i'));
        tmpl = this.supportXS ? "<template is=\"{{".concat(xs, "}}\" data=\"{{").concat(data, "}}\" />") : "<template is=\"{{'tmpl_".concat(level, "_' + i.", "nn"
        /* NodeName */
        , "}}\" data=\"{{").concat(this.dataKeymap('i:i'), "}}\" />");
      }

      return "\n<template name=\"tmpl_".concat(level, "_", "container"
      /* Container */
      , "\">\n  ").concat(tmpl, "\n</template>\n");
    }
  }, {
    key: "dataKeymap",
    value: function dataKeymap(keymap) {
      return keymap;
    }
  }, {
    key: "getEvents",
    value: function getEvents() {
      return events;
    }
  }, {
    key: "getAttrValue",
    value: function getAttrValue(value, _key, _nodeName) {
      return "{".concat(value, "}");
    }
  }, {
    key: "buildXsTemplate",
    value: function buildXsTemplate() {
      return '';
    }
  }, {
    key: "mergeComponents",
    value: function mergeComponents(ctx, patch) {
      ctx.helper.recursiveMerge(this.internalComponents, patch);
    }
  }, {
    key: "buildXSTmplName",
    value: function buildXSTmplName() {
      return "function (l, n) {\n    return 'tmpl_' + l + '_' + n\n  }";
    }
  }, {
    key: "buildXSTmpExtra",
    value: function buildXSTmpExtra() {
      return '';
    }
  }]);

  return BaseTemplate;
}();

var RecursiveTemplate = /*#__PURE__*/function (_BaseTemplate) {
  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(RecursiveTemplate, _BaseTemplate);

  var _super = Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(RecursiveTemplate);

  function RecursiveTemplate() {
    var _this4;

    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, RecursiveTemplate);

    _this4 = _super.apply(this, arguments);
    _this4.isSupportRecursive = true;

    _this4.buildTemplate = function (componentConfig) {
      var template = _this4.buildBaseTemplate();

      if (!_this4.miniComponents) {
        _this4.miniComponents = _this4.createMiniComponents(_this4.internalComponents);
      }

      var ZERO_FLOOR = 0;
      var components = Object.keys(_this4.miniComponents).filter(function (c) {
        return componentConfig.includes.size && !componentConfig.includeAll ? componentConfig.includes.has(c) : true;
      });
      template = components.reduce(function (current, nodeName) {
        var attributes = _this4.miniComponents[nodeName];
        return current + _this4.buildComponentTemplate({
          nodeName: nodeName,
          attributes: attributes
        }, ZERO_FLOOR);
      }, template);
      template += _this4.buildPlainTextTemplate(ZERO_FLOOR);
      template += _this4.buildThirdPartyTemplate(ZERO_FLOOR, componentConfig);
      template += _this4.buildContainerTemplate(ZERO_FLOOR);
      return template;
    };

    return _this4;
  }

  return RecursiveTemplate;
}(BaseTemplate);

var UnRecursiveTemplate = /*#__PURE__*/function (_BaseTemplate2) {
  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(UnRecursiveTemplate, _BaseTemplate2);

  var _super2 = Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(UnRecursiveTemplate);

  function UnRecursiveTemplate() {
    var _this5;

    Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, UnRecursiveTemplate);

    _this5 = _super2.apply(this, arguments);
    _this5.isSupportRecursive = false;
    _this5._baseLevel = 16;

    _this5.buildTemplate = function (componentConfig) {
      _this5.componentConfig = componentConfig;

      if (!_this5.miniComponents) {
        _this5.miniComponents = _this5.createMiniComponents(_this5.internalComponents);
      }

      var components = Object.keys(_this5.miniComponents).filter(function (c) {
        return componentConfig.includes.size && !componentConfig.includeAll ? componentConfig.includes.has(c) : true;
      });

      var template = _this5.buildBaseTemplate();

      for (var i = 0; i < _this5.baseLevel; i++) {
        template += _this5.supportXS ? _this5.buildOptimizeFloor(i, components, _this5.baseLevel === i + 1) : _this5.buildFloor(i, components, _this5.baseLevel === i + 1);
      }

      return template;
    };

    return _this5;
  }

  Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(UnRecursiveTemplate, [{
    key: "buildFloor",
    value: function buildFloor(level, components) {
      var _this6 = this;

      var restart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (restart) return this.buildContainerTemplate(level, restart);
      var template = components.reduce(function (current, nodeName) {
        var attributes = _this6.miniComponents[nodeName];
        return current + _this6.buildComponentTemplate({
          nodeName: nodeName,
          attributes: attributes
        }, level);
      }, '');
      template += this.buildPlainTextTemplate(level);
      template += this.buildThirdPartyTemplate(level, this.componentConfig);
      template += this.buildContainerTemplate(level, restart);
      return template;
    }
  }, {
    key: "buildOptimizeFloor",
    value: function buildOptimizeFloor(level, components) {
      var _this7 = this;

      var restart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (restart) return this.buildContainerTemplate(level, restart);
      var template = components.reduce(function (current, nodeName) {
        if (level !== 0) {
          if (!_this7.nestElements.has(nodeName)) {
            // 不可嵌套自身的组件只需输出一层模板
            return current;
          } else {
            // 部分可嵌套自身的组件实际上不会嵌套过深，这里按阈值限制层数
            var max = _this7.nestElements.get(nodeName);

            if (max > 0 && level >= max) {
              return current;
            }
          }
        }

        var attributes = _this7.miniComponents[nodeName];
        return current + _this7.buildComponentTemplate({
          nodeName: nodeName,
          attributes: attributes
        }, level);
      }, '');
      if (level === 0) template += this.buildPlainTextTemplate(level);
      template += this.buildThirdPartyTemplate(level, this.componentConfig);
      template += this.buildContainerTemplate(level);
      return template;
    }
  }, {
    key: "buildXSTmplName",
    value: function buildXSTmplName() {
      var comps = [].concat(Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Array.from(this.nestElements.keys())), Object(C_workspace_taro_convert_test_taroConvert_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Array.from(this.componentConfig.thirdPartyComponents.keys())));
      var hasMaxComps = [];
      this.nestElements.forEach(function (max, comp) {
        if (max > -1) hasMaxComps.push(comp);
      });
      return "function (l, n, s) {\n    var a = ".concat(JSON.stringify(comps), "\n    var b = ").concat(JSON.stringify(hasMaxComps), "\n    if (a.indexOf(n) === -1) {\n      l = 0\n    }\n    if (b.indexOf(n) > -1) {\n      var u = s.split(',')\n      var depth = 0\n      for (var i = 0; i < u.length; i++) {\n        if (u[i] === n) depth++\n      }\n      l = depth\n    }\n    return 'tmpl_' + l + '_' + n\n  }");
    }
  }, {
    key: "buildXSTmpExtra",
    value: function buildXSTmpExtra() {
      var hasMaxComps = [];
      this.nestElements.forEach(function (max, comp) {
        if (max > -1) hasMaxComps.push(comp);
      });
      return "f: function (l, n) {\n    var b = ".concat(JSON.stringify(hasMaxComps), "\n    if (b.indexOf(n) > -1) {\n      if (l) l += ','\n      l += n\n    }\n    return l\n  }");
    }
  }, {
    key: "baseLevel",
    set: function set(lv) {
      this._baseLevel = lv;
    },
    get: function get() {
      return this._baseLevel;
    }
  }]);

  return UnRecursiveTemplate;
}(BaseTemplate);



/***/ }),

/***/ "./node_modules/@tarojs/taro/index.js":
/*!********************************************!*\
  !*** ./node_modules/@tarojs/taro/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js"),
    CurrentReconciler = _require.CurrentReconciler;

var taro = __webpack_require__(/*! @tarojs/api */ "./node_modules/@tarojs/api/dist/index.esm.js").default;

if (typeof CurrentReconciler.initNativeApi === 'function') {
  CurrentReconciler.initNativeApi(taro);
}

module.exports = taro;
module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@tarojs/with-weapp/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@tarojs/with-weapp/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && _typeof2(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var _defineProperty = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _slicedToArray = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _classCallCheck = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _get = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _typeof = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var taro = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");

var runtime = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");

var _lifecycleMap;

var TaroLifeCycles;

(function (TaroLifeCycles) {
  TaroLifeCycles["WillMount"] = "componentWillMount";
  TaroLifeCycles["DidMount"] = "componentDidMount";
  TaroLifeCycles["DidShow"] = "componentDidShow";
  TaroLifeCycles["DidHide"] = "componentDidHide";
  TaroLifeCycles["WillUnmount"] = "componentWillUnmount";
})(TaroLifeCycles || (TaroLifeCycles = {}));

var lifecycleMap = (_lifecycleMap = {}, _defineProperty(_lifecycleMap, TaroLifeCycles.WillMount, ['created']), _defineProperty(_lifecycleMap, TaroLifeCycles.DidMount, ['attached']), _defineProperty(_lifecycleMap, TaroLifeCycles.DidShow, ['onShow']), _defineProperty(_lifecycleMap, TaroLifeCycles.DidHide, ['onHide']), _defineProperty(_lifecycleMap, TaroLifeCycles.WillUnmount, ['detached', 'onUnload']), _lifecycleMap);
var lifecycles = new Set(['ready']);

for (var key in lifecycleMap) {
  var lifecycle = lifecycleMap[key];
  lifecycle.forEach(function (l) {
    return lifecycles.add(l);
  });
}

var uniquePageLifecycle = ['onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onShareTimeline', 'onAddToFavorites', 'onPageScroll', 'onResize', 'onTabItemTap'];
var appOptions = ['onLaunch', 'onShow', 'onHide', 'onError', 'onPageNotFound', 'onUnhandledRejection', 'onThemeChange'];
/**
 * Simple bind, faster than native
 */

function bind(fn
/*: Function */
, ctx
/*: Object */
) {
  if (!fn) return false;

  function boundFn(a) {
    var l
    /*: number */
    = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  } // record original fn length


  boundFn._length = fn.length;
  return boundFn;
}

function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function safeGet(obj, propsArg, defaultValue) {
  if (!obj) {
    return defaultValue;
  }

  var props, prop;

  if (Array.isArray(propsArg)) {
    props = propsArg.slice(0);
  }

  if (typeof propsArg === 'string') {
    props = propsArg.replace(/\[(.+?)\]/g, '.$1');
    props = props.split('.');
  }

  if (_typeof(propsArg) === 'symbol') {
    props = [propsArg];
  }

  if (!Array.isArray(props)) {
    throw new Error('props arg must be an array, a string or a symbol');
  }

  while (props.length) {
    prop = props.shift();

    if (!obj) {
      return defaultValue;
    }

    obj = obj[prop];

    if (obj === undefined) {
      return defaultValue;
    }
  }

  return obj;
}

function safeSet(obj, props, value) {
  if (typeof props === 'string') {
    props = props.replace(/\[(.+?)\]/g, '.$1');
    props = props.split('.');
  }

  if (_typeof(props) === 'symbol') {
    props = [props];
  }

  var lastProp = props.pop();

  if (!lastProp) {
    return false;
  }

  var thisProp;

  while (thisProp = props.shift()) {
    if (typeof obj[thisProp] === 'undefined') {
      obj[thisProp] = {};
    } // 直接按路径修改 this.state 可能会导致 nextProps 也被修改
    // 因此按路径寻找时，每一层都复制一遍


    if (Array.isArray(obj[thisProp])) {
      obj[thisProp] = _toConsumableArray(obj[thisProp]);
    } else if (_typeof(obj[thisProp]) === 'object') {
      obj[thisProp] = Object.assign({}, obj[thisProp]);
    }

    obj = obj[thisProp];

    if (!obj || _typeof(obj) !== 'object') {
      return false;
    }
  }

  obj[lastProp] = value;
  return true;
}

function report(msg) {
  console.warn('[Taro Convert Warning] ' + msg);
}

var unsupport = new Map([['onError', '不支持 App 的 onError 生命周期方法。'], ['onPageNotFound', '不支持 App 的 onPageNotFound 生命周期方法。'], ['onUnhandledRejection', '不支持 App 的 onUnhandledRejection 生命周期方法。'], ['onThemeChange', '不支持 App 的 onThemeChange 生命周期方法。'], ['moved', '不支持自定义组件的 moved 生命周期。'], ['externalClasses', '不支持自定义组件的 externalClasses 功能。'], ['relations', '不支持自定义组件的 relations 功能。'], ['options', '不支持自定义组件的 options 功能。'], ['definitionFilter', '不支持自定义组件的 definitionFilter 功能。'], ['selectComponent', 'selectComponent 方法产生不到目标效果，请使用 React 的 ref 进行重构。'], ['selectAllComponents', 'selectAllComponents 方法产生不到目标效果，请使用 React 的 ref 进行重构。'], ['selectOwnerComponent', 'selectOwnerComponent 方法产生不到目标效果，请使用 React 语法重构。'], ['groupSetData', 'groupSetData 方法产生不到目标效果，请使用 React 语法重构。']]);

function flattenBehaviors(behavior, behaviorMap) {
  if (typeof behavior === 'string') {
    return report("\u4E0D\u652F\u6301\u4F7F\u7528\u5185\u7F6E Behavior: [".concat(behavior, "]"));
  }

  var subBehaviors = behavior.behaviors;

  if (subBehaviors === null || subBehaviors === void 0 ? void 0 : subBehaviors.length) {
    subBehaviors.forEach(function (subBehavior) {
      return flattenBehaviors(subBehavior, behaviorMap);
    });
  }

  Object.keys(behavior).forEach(function (key) {
    // 不支持的属性
    if (unsupport.has(key)) {
      var advise = unsupport.get(key);
      return report(advise);
    }

    if (behaviorMap.has(key)) {
      var list = behaviorMap.get(key);
      var value = behavior[key];
      list.push(value);
    }
  });
}
/*eslint-disable*/


var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var FUNCTIONTYPE = '[object Function]';

function diff(current, pre) {
  var result = {};
  syncKeys(current, pre);

  _diff(current, pre, '', result);

  return result;
}

function syncKeys(current, pre) {
  if (current === pre) return;
  var rootCurrentType = type(current);
  var rootPreType = type(pre);

  if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
    // if(Object.keys(current).length >= Object.keys(pre).length){
    for (var key in pre) {
      var currentValue = current[key];

      if (currentValue === undefined) {
        current[key] = null;
      } else {
        syncKeys(currentValue, pre[key]);
      }
    } // }

  } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
    if (current.length >= pre.length) {
      pre.forEach(function (item, index) {
        syncKeys(current[index], item);
      });
    }
  }
}

function _diff(current, pre, path, result) {
  if (current === pre) return;
  var rootCurrentType = type(current);
  var rootPreType = type(pre);

  if (rootCurrentType == OBJECTTYPE) {
    if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
      setResult(result, path, current);
    } else {
      var _loop = function _loop(key) {
        var currentValue = current[key];
        var preValue = pre[key];
        var currentType = type(currentValue);
        var preType = type(preValue);

        if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
          if (currentValue != pre[key]) {
            setResult(result, (path == '' ? '' : path + '.') + key, currentValue);
          }
        } else if (currentType == ARRAYTYPE) {
          if (preType != ARRAYTYPE) {
            setResult(result, (path == '' ? '' : path + '.') + key, currentValue);
          } else {
            if (currentValue.length < preValue.length) {
              setResult(result, (path == '' ? '' : path + '.') + key, currentValue);
            } else {
              currentValue.forEach(function (item, index) {
                _diff(item, preValue[index], (path == '' ? '' : path + '.') + key + '[' + index + ']', result);
              });
            }
          }
        } else if (currentType == OBJECTTYPE) {
          if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
            setResult(result, (path == '' ? '' : path + '.') + key, currentValue);
          } else {
            for (var subKey in currentValue) {
              _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + '.') + key + '.' + subKey, result);
            }
          }
        }
      };

      for (var key in current) {
        _loop(key);
      }
    }
  } else if (rootCurrentType == ARRAYTYPE) {
    if (rootPreType != ARRAYTYPE) {
      setResult(result, path, current);
    } else {
      if (current.length < pre.length) {
        setResult(result, path, current);
      } else {
        current.forEach(function (item, index) {
          _diff(item, pre[index], path + '[' + index + ']', result);
        });
      }
    }
  } else {
    setResult(result, path, current);
  }
}

function setResult(result, k, v) {
  if (type(v) != FUNCTIONTYPE) {
    result[k] = v;
  }
}

function type(obj) {
  return Object.prototype.toString.call(obj);
}

var json = JSON;

var clone = function clone(obj) {
  return json.parse(stringify(obj));
};

function stringify(obj, opts) {
  if (!opts) opts = {};
  if (typeof opts === 'function') opts = {
    cmp: opts
  };
  var space = opts.space || '';
  if (typeof space === 'number') space = Array(space + 1).join(' ');
  var cycles = typeof opts.cycles === 'boolean' ? opts.cycles : false;

  var replacer = opts.replacer || function (key, value) {
    return value;
  };

  var cmp = opts.cmp && function (f) {
    return function (node) {
      return function (a, b) {
        var aobj = {
          key: a,
          value: node[a]
        };
        var bobj = {
          key: b,
          value: node[b]
        };
        return f(aobj, bobj);
      };
    };
  }(opts.cmp);

  var seen = [];
  return function stringify(parent, key, node, level) {
    var indent = space ? '\n' + new Array(level + 1).join(space) : '';
    var colonSeparator = space ? ': ' : ':';

    if (node && node.toJSON && typeof node.toJSON === 'function') {
      node = node.toJSON();
    }

    node = replacer.call(parent, key, node);

    if (node === undefined) {
      return;
    }

    if (_typeof(node) !== 'object' || node === null) {
      return json.stringify(node);
    }

    if (isArray(node)) {
      var out = [];

      for (var i = 0; i < node.length; i++) {
        var item = stringify(node, i, node[i], level + 1) || json.stringify(null);
        out.push(indent + space + item);
      }

      return '[' + out.join(',') + indent + ']';
    } else {
      if (seen.indexOf(node) !== -1) {
        if (cycles) return json.stringify('__cycle__');
        throw new TypeError('Converting circular structure to JSON');
      } else seen.push(node);

      var keys = objectKeys(node).sort(cmp && cmp(node));
      var _out = [];

      for (var _i = 0; _i < keys.length; _i++) {
        var _key = keys[_i];
        var value = stringify(node, _key, node[_key], level + 1);
        if (!value) continue;
        var keyValue = json.stringify(_key) + colonSeparator + value;

        _out.push(indent + space + keyValue);
      }

      seen.splice(seen.indexOf(node), 1);
      return '{' + _out.join(',') + indent + '}';
    }
  }({
    '': obj
  }, '', obj, 0);
}

var isArray = Array.isArray || function (x) {
  return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
  var has = Object.prototype.hasOwnProperty || function () {
    return true;
  };

  var keys = [];

  for (var key in obj) {
    if (has.call(obj, key)) keys.push(key);
  }

  return keys;
};

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function defineGetter(component, key, getter) {
  Object.defineProperty(component, key, {
    enumerable: true,
    configurable: true,
    get: function get() {
      if (getter === 'props') {
        return component.props;
      }

      return Object.assign(Object.assign({}, component.state), component.props);
    }
  });
}

function isFunction(o) {
  return typeof o === 'function';
}

function withWeapp(weappConf) {
  var isApp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (_typeof(weappConf) === 'object' && Object.keys(weappConf).length === 0) {
    report('withWeapp 请传入“App/页面/组件“的配置对象。如果原生写法使用了基类，请将基类组合后的配置对象传入，详情请参考文档。');
  }

  return function (ConnectComponent) {
    var _a;

    var behaviorMap = new Map([['properties', []], ['data', []], ['methods', []], ['created', []], ['attached', []], ['ready', []], ['detached', []]]);
    var behaviorProperties = {};

    if ((_a = weappConf.behaviors) === null || _a === void 0 ? void 0 : _a.length) {
      var behaviors = weappConf.behaviors;
      behaviors.forEach(function (behavior) {
        return flattenBehaviors(behavior, behaviorMap);
      });
      var propertiesList = behaviorMap.get('properties');

      if (propertiesList.length) {
        propertiesList.forEach(function (property) {
          Object.assign(behaviorProperties, property);
        });
        Object.keys(behaviorProperties).forEach(function (propName) {
          var propValue = behaviorProperties[propName];

          if (!weappConf.properties) {
            weappConf.properties = {};
          }

          if (!weappConf.properties.hasOwnProperty(propName)) {
            if (propValue && _typeof(propValue) === 'object' && propValue.value) {
              propValue.value = clone(propValue.value);
            }

            weappConf.properties[propName] = propValue;
          }
        });
      }
    }

    var BaseComponent = /*#__PURE__*/function (_ConnectComponent) {
      _inherits(BaseComponent, _ConnectComponent);

      var _super = _createSuper(BaseComponent);

      function BaseComponent(props) {
        var _this;

        _classCallCheck(this, BaseComponent);

        _this = _super.call(this, props);
        _this._observeProps = []; // mixins 可以多次调用生命周期

        _this.willMounts = [];
        _this.didMounts = [];
        _this.didHides = [];
        _this.didShows = [];
        _this.willUnmounts = [];
        _this.eventDistoryList = [];
        _this.current = runtime.getCurrentInstance();
        _this.optionsExtraKeys = [];

        _this.safeExecute = function (func) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          if (isFunction(func)) func.apply(_assertThisInitialized(_this), args);
        };

        _this.setData = function (obj, callback) {
          var oldState;

          if (_this.observers && Object.keys(Object.keys(_this.observers))) {
            oldState = clone(_this.state);
          }

          Object.keys(obj).forEach(function (key) {
            safeSet(_this.state, key, obj[key]);
          });

          _this.setState(_this.state, function () {
            _this.triggerObservers(_this.state, oldState);

            if (callback) {
              callback.call(_assertThisInitialized(_this));
            }
          });
        };

        _this.triggerEvent = function (eventName, detail, options) {
          if (options) {
            report('triggerEvent 不支持事件选项。');
          }

          var props = _this.props;
          var dataset = {};

          for (var key in props) {
            if (!key.startsWith('data-')) continue;
            dataset[key.replace(/^data-/, '')] = props[key];
          }

          var func = props["on".concat(eventName[0].toUpperCase()).concat(eventName.slice(1))];

          if (isFunction(func)) {
            func.call(_assertThisInitialized(_this), {
              type: eventName,
              detail: detail,
              target: {
                id: props.id || '',
                dataset: dataset
              },
              currentTarget: {
                id: props.id || '',
                dataset: dataset
              }
            });
          }
        };

        _this.hasBehavior = _this.componentMethodsProxy('hasBehavior');
        _this.createSelectorQuery = _this.componentMethodsProxy('createSelectorQuery');
        _this.createIntersectionObserver = _this.componentMethodsProxy('createIntersectionObserver');
        _this.createMediaQueryObserver = _this.componentMethodsProxy('createMediaQueryObserver');
        _this.getRelationNodes = _this.componentMethodsProxy('getRelationNodes');
        _this.getTabBar = _this.componentMethodsProxy('getTabBar');
        _this.getPageId = _this.componentMethodsProxy('getPageId');
        _this.animate = _this.componentMethodsProxy('animate');
        _this.clearAnimation = _this.componentMethodsProxy('clearAnimation');
        _this.setUpdatePerformanceListener = _this.componentMethodsProxy('setUpdatePerformanceListener');
        _this.state = _this.state || {};

        _this.init(weappConf);

        defineGetter(_assertThisInitialized(_this), 'data', 'state');
        defineGetter(_assertThisInitialized(_this), 'properties', 'props');
        return _this;
      }

      _createClass(BaseComponent, [{
        key: "initProps",
        value: function initProps(props) {
          for (var propKey in props) {
            if (props.hasOwnProperty(propKey)) {
              var propValue = props[propKey]; // propValue 可能是 null, 构造函数, 对象

              if (propValue && !isFunction(propValue)) {
                if (propValue.observer) {
                  this._observeProps.push({
                    name: propKey,
                    observer: propValue.observer
                  });
                }
              }
            }
          }
        }
      }, {
        key: "init",
        value: function init(options) {
          var _this2 = this;

          var _a, _b, _c; // 处理 Behaviors


          if ((_a = options.behaviors) === null || _a === void 0 ? void 0 : _a.length) {
            var _iterator = _createForOfIteratorHelper(behaviorMap.entries()),
                _step;

            try {
              var _loop = function _loop() {
                var _step$value = _slicedToArray(_step.value, 2),
                    key = _step$value[0],
                    list = _step$value[1];

                switch (key) {
                  case 'created':
                  case 'attached':
                  case 'detached':
                  case 'ready':
                    list.forEach(function (fn) {
                      return _this2.initLifeCycles(key, fn);
                    });
                    break;
                }
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          for (var confKey in options) {
            // 不支持的属性
            if (unsupport.has(confKey)) {
              var advise = unsupport.get(confKey);
              report(advise);
            }

            var confValue = options[confKey];

            switch (confKey) {
              case 'behaviors':
                break;

              case 'data':
                {
                  this.state = Object.assign(Object.assign({}, confValue), this.state);
                  break;
                }

              case 'properties':
                this.initProps(Object.assign(behaviorProperties, confValue));
                break;

              case 'methods':
                for (var key in confValue) {
                  var method = confValue[key];
                  this[key] = bind(method, this);
                }

                break;

              case 'lifetimes':
                for (var _key2 in confValue) {
                  this.initLifeCycles(_key2, confValue[_key2]);
                }

                break;

              case 'pageLifetimes':
                for (var _key3 in confValue) {
                  var cb = confValue[_key3];

                  switch (_key3) {
                    case 'show':
                      {
                        this.initLifeCycleListener('show', cb);
                        break;
                      }

                    case 'hide':
                      {
                        this.initLifeCycleListener('hide', cb);
                        break;
                      }

                    case 'resize':
                      {
                        report('不支持组件所在页面的生命周期 pageLifetimes.resize。');
                        break;
                      }
                  }
                }

                break;

              default:
                if (lifecycles.has(confKey)) {
                  // 优先使用 lifetimes 中定义的生命周期
                  if ((_b = options.lifetimes) === null || _b === void 0 ? void 0 : _b[confKey]) {
                    break;
                  }

                  var lifecycle = options[confKey];
                  this.initLifeCycles(confKey, lifecycle);
                } else if (isFunction(confValue)) {
                  this[confKey] = bind(confValue, this);
                  isApp && !appOptions.includes(confKey) && this.optionsExtraKeys.push(confKey); // 原生页面和 Taro 页面中共计只能定义一次的生命周期

                  if (uniquePageLifecycle.includes(confKey) && ConnectComponent.prototype[confKey]) {
                    report("\u751F\u547D\u5468\u671F ".concat(confKey, " \u5DF2\u5728\u539F\u751F\u90E8\u5206\u8FDB\u884C\u5B9A\u4E49\uFF0CReact \u90E8\u5206\u7684\u5B9A\u4E49\u5C06\u4E0D\u4F1A\u88AB\u6267\u884C\u3002"));
                  }
                } else {
                  this[confKey] = confValue;
                  isApp && !appOptions.includes(confKey) && this.optionsExtraKeys.push(confKey);
                }

                break;
            }
          } // 处理 Behaviors


          if ((_c = options.behaviors) === null || _c === void 0 ? void 0 : _c.length) {
            (function () {
              var behaviorData = {};
              var methods = {};

              var _iterator2 = _createForOfIteratorHelper(behaviorMap.entries()),
                  _step2;

              try {
                var _loop2 = function _loop2() {
                  var _step2$value = _slicedToArray(_step2.value, 2),
                      key = _step2$value[0],
                      list = _step2$value[1];

                  switch (key) {
                    case 'data':
                      [].concat(_toConsumableArray(list), [_this2.state]).forEach(function (dataObject, index) {
                        Object.keys(dataObject).forEach(function (dataKey) {
                          var value = dataObject[dataKey];
                          var preValue = behaviorData[dataKey];

                          var valueType = _typeof(value);

                          var preValueType = _typeof(preValue);

                          if (valueType === 'object') {
                            if (!value) {
                              behaviorData[dataKey] = value;
                            } else if (preValueType !== 'object' || !preValueType || Array.isArray(value)) {
                              behaviorData[dataKey] = index === list.length ? value : clone(value);
                            } else {
                              var newVal = Object.assign({}, preValue, value);
                              behaviorData[dataKey] = index === list.length ? newVal : clone(newVal);
                            }
                          } else {
                            behaviorData[dataKey] = value;
                          }
                        });
                      });
                      _this2.state = behaviorData;
                      break;

                    case 'methods':
                      list.forEach(function (methodsObject) {
                        Object.assign(methods, methodsObject);
                      });
                      Object.keys(methods).forEach(function (methodName) {
                        if (!_this2[methodName]) {
                          var _method = methods[methodName];
                          _this2[methodName] = bind(_method, _this2);
                        }
                      });
                      break;

                    default:
                      break;
                  }
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop2();
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            })();
          }
        }
      }, {
        key: "initLifeCycles",
        value: function initLifeCycles(lifecycleName, lifecycle) {
          // 不支持的生命周期
          if (unsupport.has(lifecycleName)) {
            var advise = unsupport.get(lifecycleName);
            return report(advise);
          }

          if (lifecycleName === 'ready') {
            // 如果组件是延时渲染的，页面 onReady 的事件已经 emit 了，因此使用 componentDidMount + nextTick 模拟
            if (this.current.page.onReady.called) {
              this.didMounts.push(function () {
                var _this3 = this;

                for (var _len2 = arguments.length, args = new Array(_len2), _key4 = 0; _key4 < _len2; _key4++) {
                  args[_key4] = arguments[_key4];
                }

                taro.nextTick(function () {
                  if (isFunction(lifecycle)) {
                    lifecycle.apply(_this3, args);
                  }
                });
              });
            } else {
              this.initLifeCycleListener('ready', lifecycle);
            }
          } else {
            for (var lifecycleKey in lifecycleMap) {
              var cycleNames = lifecycleMap[lifecycleKey];

              if (cycleNames.indexOf(lifecycleName) !== -1) {
                switch (lifecycleKey) {
                  case TaroLifeCycles.DidHide:
                    this.didHides.push(lifecycle);
                    break;

                  case TaroLifeCycles.DidMount:
                    this.didMounts.push(lifecycle);
                    break;

                  case TaroLifeCycles.DidShow:
                    this.didShows.push(lifecycle);
                    break;

                  case TaroLifeCycles.WillMount:
                    this.willMounts.push(lifecycle);
                    break;

                  case TaroLifeCycles.WillUnmount:
                    this.willUnmounts.push(lifecycle);
                    break;
                }
              }
            }
          } // mixins 不会覆盖已经设置的生命周期，加入到 this 是为了形如 this.created() 的调用


          if (!isFunction(this[lifecycleName])) {
            this[lifecycleName] = lifecycle;
          }
        }
      }, {
        key: "initLifeCycleListener",
        value: function initLifeCycleListener(name, cb) {
          // 组件的 ready、show、hide 需要利用页面事件触发
          var router = this.current.router;
          var lifecycleName = "on".concat(name[0].toUpperCase()).concat(name.slice(1));
          cb = cb.bind(this);
          (router === null || router === void 0 ? void 0 : router[lifecycleName]) && taro.eventCenter.on(router[lifecycleName], cb); // unMount 时需要取消事件监听

          this.eventDistoryList.push(function () {
            return taro.eventCenter.off(router[lifecycleName], cb);
          });
        }
      }, {
        key: "executeLifeCycles",
        value: function executeLifeCycles(funcs) {
          for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key5 = 1; _key5 < _len3; _key5++) {
            args[_key5 - 1] = arguments[_key5];
          }

          for (var i = 0; i < funcs.length; i++) {
            var func = funcs[i];
            this.safeExecute.apply(this, [func].concat(args));
          }
        }
      }, {
        key: "triggerPropertiesObservers",
        value: function triggerPropertiesObservers(prevProps, nextProps) {
          var _this4 = this;

          this._observeProps.forEach(function (_ref) {
            var key = _ref.name,
                observer = _ref.observer;
            var prop = prevProps === null || prevProps === void 0 ? void 0 : prevProps[key];
            var nextProp = nextProps[key]; // 小程序是深比较不同之后才 trigger observer

            if (!isEqual(prop, nextProp)) {
              if (typeof observer === 'string') {
                var ob = _this4[observer];

                if (isFunction(ob)) {
                  ob.call(_this4, nextProp, prop, key);
                }
              } else if (isFunction(observer)) {
                observer.call(_this4, nextProp, prop, key);
              }
            }
          });
        }
      }, {
        key: "triggerObservers",
        value: function triggerObservers(current, prev) {
          var observers = this.observers;

          if (observers == null) {
            return;
          }

          if (Object.keys(observers).length === 0) {
            return;
          }

          var result = diff(current, prev);
          var resultKeys = Object.keys(result);

          if (resultKeys.length === 0) {
            return;
          }

          for (var observerKey in observers) {
            if (/\*\*/.test(observerKey)) {
              report('数据监听器 observers 不支持使用通配符 **。');
              continue;
            }

            var keys = observerKey.split(',').map(function (k) {
              return k.trim();
            });
            var isModified = false;

            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];

              for (var j = 0; j < resultKeys.length; j++) {
                var resultKey = resultKeys[j];

                if (resultKey.startsWith(key) || key.startsWith(resultKey) && key.endsWith(']')) {
                  isModified = true;
                }
              }
            }

            if (isModified) {
              observers[observerKey].apply(this, keys.map(function (key) {
                return safeGet(current, key);
              }));
            }
          }
        }
      }, {
        key: "privateStopNoop",
        value: function privateStopNoop() {
          var e;
          var fn;

          if (arguments.length === 2) {
            fn = arguments.length <= 0 ? undefined : arguments[0];
            e = arguments.length <= 1 ? undefined : arguments[1];
          } else if (arguments.length === 1) {
            e = arguments.length <= 0 ? undefined : arguments[0];
          }

          if (e.type === 'touchmove') {
            report('catchtouchmove 转换后只能停止回调函数的冒泡，不能阻止滚动穿透。如要阻止滚动穿透，可以手动给编译后的 View 组件加上 catchMove 属性');
          }

          e.stopPropagation();
          isFunction(fn) && fn(e);
        } // ================ React 生命周期 ================

      }, {
        key: "componentWillMount",
        value: function componentWillMount() {
          this.safeExecute(_get(_getPrototypeOf(BaseComponent.prototype), "componentWillMount", this));
          this.executeLifeCycles(this.willMounts, this.current.router || {});
          this.triggerObservers(this.data, BaseComponent.defaultProps);
          this.triggerPropertiesObservers(BaseComponent.defaultProps, this.props);
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.safeExecute(_get(_getPrototypeOf(BaseComponent.prototype), "componentDidMount", this));
          this.executeLifeCycles(this.didMounts);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.eventDistoryList.forEach(function (fn) {
            return fn();
          });
          this.safeExecute(_get(_getPrototypeOf(BaseComponent.prototype), "componentWillUnmount", this));
          this.executeLifeCycles(this.willUnmounts);
        }
      }, {
        key: "componentDidHide",
        value: function componentDidHide() {
          this.safeExecute(_get(_getPrototypeOf(BaseComponent.prototype), "componentDidHide", this));
          this.executeLifeCycles(this.didHides);
        }
      }, {
        key: "componentDidShow",
        value: function componentDidShow() {
          this.safeExecute(_get(_getPrototypeOf(BaseComponent.prototype), "componentDidShow", this), this.current.router || {});
          this.executeLifeCycles(this.didShows, this.current.router || {});
        }
      }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
          this.triggerObservers(nextProps, this.props);
          this.triggerPropertiesObservers(this.props, nextProps);
          this.safeExecute(_get(_getPrototypeOf(BaseComponent.prototype), "componentWillReceiveProps", this));
        } // ================ 小程序 App, Page, Component 实例属性与方法 ================

      }, {
        key: "componentMethodsProxy",
        value: function componentMethodsProxy(method) {
          var _this5 = this;

          return function () {
            var page = _this5.current.page;

            if (page === null || page === void 0 ? void 0 : page[method]) {
              return page[method].apply(page, arguments);
            } else {
              console.error("page \u4E0B\u6CA1\u6709 ".concat(method, " \u65B9\u6CD5"));
            }
          };
        }
      }, {
        key: "selectComponent",
        value: function selectComponent() {
          report(unsupport.get('selectComponent'));
        }
      }, {
        key: "selectAllComponents",
        value: function selectAllComponents() {
          report(unsupport.get('selectAllComponents'));
        }
      }, {
        key: "selectOwnerComponent",
        value: function selectOwnerComponent() {
          report(unsupport.get('selectOwnerComponent'));
        }
      }, {
        key: "groupSetData",
        value: function groupSetData() {
          report(unsupport.get('groupSetData'));
        }
      }, {
        key: "is",
        get: function get() {
          return this.current.page.is;
        }
      }, {
        key: "id",
        get: function get() {
          return this.current.page.id;
        }
      }, {
        key: "dataset",
        get: function get() {
          return this.current.page.dataset;
        }
      }]);

      return BaseComponent;
    }(ConnectComponent);

    var props = weappConf.properties;

    if (props) {
      for (var propKey in props) {
        var propValue = props[propKey];

        if (propValue != null && !isFunction(propValue)) {
          if (propValue.value !== undefined) {
            // 如果是 null 也赋值到 defaultProps
            BaseComponent.defaultProps = Object.assign(_defineProperty({}, propKey, propValue.value), BaseComponent.defaultProps);
          }
        }
      }
    }

    var staticOptions = ['externalClasses', 'relations', 'options'];
    staticOptions.forEach(function (option) {
      var value = weappConf[option];

      if (value != null) {
        BaseComponent[option] = value;
      }
    });
    return BaseComponent;
  };
}

exports.default = withWeapp;

/***/ }),

/***/ "./node_modules/@tarojs/with-weapp/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@tarojs/with-weapp/index.js ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/index.js */ "./node_modules/@tarojs/with-weapp/dist/index.js").default;
module.exports.default = module.exports;

/***/ })

}]);
//# sourceMappingURL=taro.js.map
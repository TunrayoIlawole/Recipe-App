// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"A7H4y":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "62d5dab885897b04655082d4fd532818";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] ???? Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ??? Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          ???? ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4ee1I":[function(require,module,exports) {
var _FunctionsGetResults = require('./Functions/getResults');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _FunctionsGetResultsDefault = _parcelHelpers.interopDefault(_FunctionsGetResults);
var _FunctionsDisplayResults = require('./Functions/displayResults');
var _FunctionsDisplayResultsDefault = _parcelHelpers.interopDefault(_FunctionsDisplayResults);
var _FunctionsGetRandomRecipe = require('./Functions/getRandomRecipe');
var _FunctionsGetRandomRecipeDefault = _parcelHelpers.interopDefault(_FunctionsGetRandomRecipe);
const domElements = {
  form: document.querySelector('.search'),
  input: document.querySelector('.search-field'),
  results: document.querySelector('.results'),
  loader: document.querySelector('.loader-con'),
  theCart: document.querySelector('.cart'),
  heartIcon: document.querySelector('.heart'),
  error: document.querySelector('.error'),
  pageBtns: document.querySelector('.pagination'),
  container: document.querySelector('.container'),
  modal: document.querySelector('.modal'),
  overlay: document.querySelector('.overlay'),
  modalClose: document.querySelector('.close-modal'),
  randomBtn: document.querySelector('.btn-random')
};
const loader = `
<div class = "loader"></div>
`;
let result;
function handleSubmit(e) {
  e.preventDefault();
  const inputValue = domElements.input.value;
  const searchQuery = inputValue.trim();
  const searchResults = domElements.results;
  searchResults.innerHTML = '';
  domElements.loader.insertAdjacentHTML('afterbegin', loader);
  try {
    const results = _FunctionsGetResultsDefault.default(searchQuery);
    results.then(response => {
      result = response.recipes;
      const loader = document.querySelector('.loader');
      if (loader) {
        loader.parentElement.removeChild(loader);
      }
      _FunctionsDisplayResultsDefault.default(result);
    });
  } catch (error) {
    console.log(error);
  }
}
function closeModal() {
  domElements.modal.classList.add('hidden');
  domElements.overlay.classList.add('hidden');
}
domElements.form.addEventListener('submit', handleSubmit);
domElements.heartIcon.addEventListener('click', () => {
  domElements.theCart.classList.toggle('show');
  domElements.overlay.classList.remove('hidden');
});
domElements.pageBtns.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    domElements.results.innerHTML = '';
    domElements.pageBtns.innerHTML = '';
    _FunctionsDisplayResultsDefault.default(result, goToPage);
  }
});
domElements.randomBtn.addEventListener('click', _FunctionsGetRandomRecipeDefault.default);
domElements.modalClose.addEventListener('click', closeModal);
domElements.overlay.addEventListener('click', () => {
  closeModal();
  domElements.theCart.classList.remove('show');
});

},{"./Functions/getResults":"6ms5S","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./Functions/displayResults":"50V6Q","./Functions/getRandomRecipe":"5Av4P"}],"6ms5S":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _api = require('./api');
var _apiDefault = _parcelHelpers.interopDefault(_api);
function getResults(searchQuery) {
  return _apiDefault.default.get('search?', {
    params: {
      q: searchQuery
    }
  }).then(response => {
    document.querySelector('.error').classList.add('hidden');
    return response.data;
  }).catch(error => {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.parentElement.removeChild(loader);
    }
    document.querySelector('.error').classList.remove('hidden');
  });
}
exports.default = getResults;

},{"./api":"7aSqL","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"50V6Q":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _displayResult = require('./displayResult');
var _displayResultDefault = _parcelHelpers.interopDefault(_displayResult);
var _displayButtons = require('./displayButtons');
var _displayButtonsDefault = _parcelHelpers.interopDefault(_displayButtons);
const displayResults = (recipes, page = 1, resPerPage = 10) => {
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;
  _displayResultDefault.default(recipes.slice(start, end));
  // render the pagination buttons
  _displayButtonsDefault.default(page, recipes.length, resPerPage);
};
exports.default = displayResults;

},{"./displayResult":"62ro5","./displayButtons":"5J4T3","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"62ro5":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _getClickedRecipe = require('./getClickedRecipe');
var _getClickedRecipeDefault = _parcelHelpers.interopDefault(_getClickedRecipe);
const domElements = {
  results: document.querySelector('.results')
};
const displayResult = results => {
  results.forEach(item => {
    const resultItem = document.createElement('li');
    resultItem.classList.add('preview');
    resultItem.id = `${item.recipe_id}`;
    const resultLink = document.createElement('a');
    resultLink.className = "preview-link preview-link-active";
    resultLink.setAttribute('href', `#${item.recipe_id}`);
    const figure = document.createElement('figure');
    figure.classList.add('preview-fig');
    const resultImage = document.createElement('img');
    resultImage.setAttribute('alt', `${item.title}`);
    resultImage.src = `${item.image_url}`;
    figure.append(resultImage);
    const resultData = document.createElement('div');
    resultData.classList.add('preview-data');
    const resultTitle = document.createElement('h4');
    resultTitle.classList.add('preview-title');
    resultTitle.textContent = `${item.title}`;
    const resultPublisher = document.createElement('p');
    resultPublisher.classList.add('preview-publisher');
    resultPublisher.textContent = `${item.publisher}`;
    const resultGenerated = document.createElement('div');
    resultGenerated.classList.add('preview-user-generated');
    const resultSvg = `<svg>
            <use href = "../assets/icons.svg#icon-user"></use>
        </svg>`;
    resultGenerated.innerHTML = resultSvg;
    resultData.append(resultTitle);
    resultData.append(resultPublisher);
    resultData.append(resultGenerated);
    resultLink.append(figure);
    resultLink.append(resultData);
    resultItem.append(resultLink);
    domElements.results.append(resultItem);
    resultItem.addEventListener('click', () => {
      const id = resultItem.id;
      _getClickedRecipeDefault.default(id);
    });
  });
};
exports.default = displayResult;

},{"./getClickedRecipe":"25SrF","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"25SrF":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _api = require('./api');
var _apiDefault = _parcelHelpers.interopDefault(_api);
var _displayClickedRecipe = require('./displayClickedRecipe');
var _displayClickedRecipeDefault = _parcelHelpers.interopDefault(_displayClickedRecipe);
function getClickedRecipe(keyword) {
  return _apiDefault.default.get('get?', {
    params: {
      rId: keyword
    }
  }).then(response => {
    _displayClickedRecipeDefault.default(response.data.recipe);
    return response.data;
  });
}
exports.default = getClickedRecipe;

},{"./api":"7aSqL","./displayClickedRecipe":"2gAkE","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2gAkE":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _getIngredients = require('./getIngredients');
var _getIngredientsDefault = _parcelHelpers.interopDefault(_getIngredients);
var _displayIngredients = require('./displayIngredients');
var _displayIngredientsDefault = _parcelHelpers.interopDefault(_displayIngredients);
var _displayShoppingList = require('./displayShoppingList');
var _displayShoppingListDefault = _parcelHelpers.interopDefault(_displayShoppingList);
var _likeRecipe = require('./likeRecipe');
var _likeRecipeDefault = _parcelHelpers.interopDefault(_likeRecipe);
const domElements = {
  recipe: document.querySelector('.recipe')
};
function displayClickedRecipe(result) {
  const ingredients = _getIngredientsDefault.default(result.ingredients);
  const markup = `
  <figure class="recipe-fig">
  <img src="${result.image_url}" alt="${result.title}" class="recipe-img" />
  <h1 class="recipe-title">
    <span>${result.title}</span>
  </h1>
</figure>

<div class="recipe-details">
  <div class="recipe-info">
    <svg class="recipe-info-icon">
      <use href="assets/icons.svg#icon-clock"></use>
    </svg>
    <span class="recipe-info-data recipe-info-data-minutes">45</span>
    <span class="recipe-info-text">minutes</span>
  </div>
  <button class="btn-round recipe-love">
    Add to favorites ????
  </button>
</div>

<div class="recipe-ingredients">
  <h2 class="heading-2">Recipe ingredients</h2>
  <ul class="recipe-ingredient-list">
    ${ingredients.map(el => _displayIngredientsDefault.default(el)).join('')};
  </ul>
  <button class = "btn-small recipe__btn recipe__btn--add">
    <svg class = "search__icon">
    <use href = "assets/icons.svg#icon-shopping-cart"></use>
    </svg>
    <span>Add to shopping list</span>
  </button>
</div>

<div class="recipe-directions">
  <h2 class="heading-2">How to cook it</h2>
  <p class="recipe-directions-text">
    This recipe was carefully designed and tested by
    <span class="recipe-publisher">${result.publisher}</span>. Please check out
    directions at their website.
  </p>
  <a
    class="btn-small recipe-btn"
    href="${result.publisher_url}"
    target="_blank"
  >
    <span>Directions</span>
    <svg class="search-icon">
      <use href="assets/icons.svg#icon-arrow-right"></use>
    </svg>
  </a>
</div>
  `;
  domElements.recipe.innerHTML = markup;
  const addButton = document.querySelector('.recipe__btn--add');
  addButton.addEventListener('click', () => {
    _displayShoppingListDefault.default(ingredients);
  });
  const likeButton = document.querySelector('.recipe-love');
  likeButton.addEventListener('click', () => {
    _likeRecipeDefault.default(result, result.recipe_id, likeButton);
  });
}
exports.default = displayClickedRecipe;

},{"./getIngredients":"4O2tS","./displayIngredients":"2L6BO","./displayShoppingList":"3Bf2D","./likeRecipe":"490hG","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"4O2tS":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
function getIngredients(ingredients) {
  const unitsLong = ['teaspoons', 'teaspoon', 'tablespoon', 'tablespoons', 'ounces', 'ounce', 'cups', 'pounds'];
  const unitsShort = ['tsp', 'tsp', 'tbsp', 'tbsp', 'oz', 'oz', 'cup', 'pound'];
  const units = [...unitsShort, 'kg', 'g'];
  const newIngredients = ingredients.map(el => {
    let ingredient = el.toLowerCase();
    unitsLong.forEach((unit, i) => {
      ingredient = ingredient.replace(unit, unitsShort[i]);
    });
    ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
    const arrIng = ingredient.split(' ');
    const unitIndex = arrIng.findIndex(e12 => units.includes(e12));
    let objIng;
    if (unitIndex > -1) {
      const arrCount = arrIng.slice(0, unitIndex);
      let count;
      if (arrCount.length === 1) {
        count = eval(arrIng[0].replace('-', '+'));
      } else {
        count = eval(arrIng.slice(0, unitIndex).join('+'));
      }
      objIng = {
        count,
        unit: arrIng[unitIndex],
        ingredient: arrIng.slice(unitIndex + 1).join(' ')
      };
    } else if (parseInt(arrIng[0], 10)) {
      objIng = {
        count: parseInt(arrIng[0], 10),
        unit: '',
        ingredient: arrIng.slice(1).join(' ')
      };
    } else if (unitIndex === -1) {
      objIng = {
        count: 1,
        unit: '',
        ingredient
      };
    }
    return objIng;
  });
  ingredients = newIngredients;
  return ingredients;
}
exports.default = getIngredients;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2L6BO":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
require('./getIngredients');
function displayIngredients(ingredient) {
  return `
    <li class="recipe-ingredient">
        <svg class="recipe-icon">
            <use href="../assets/icons.svg#icon-check"></use>
        </svg>
        <div class="recipe-quantity">${ingredient.count}</div>
        <div class="recipe-description">
            <span class="recipe-unit">${ingredient.unit}</span>
                ${ingredient.ingredient}
        </div>
    </li>`;
}
exports.default = displayIngredients;

},{"./getIngredients":"4O2tS","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3Bf2D":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
const domElement = {
  shoppingList: document.querySelector('.shopping-list')
};
const displayShoppingList = result => {
  result.forEach(ingredient => {
    const markup = `
            <li class="shopping-item" data-itemid=${ingredient.ingredient}>
                <div class="shopping-count">
                    <input type="number" value="${ingredient.count}" step="${ingredient.count}">
                    <p>${ingredient.unit}</p>
                </div>
                <p class="shopping-description">${ingredient.ingredient}</p>
                <button class="shopping-delete btn-tiny">
                    X
                </button>
            </li>
            `;
    domElement.shoppingList.insertAdjacentHTML('beforeend', markup);
  });
  const deleteButtons = document.querySelectorAll('.shopping-delete');
  deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', e => {
      const item = e.target.parentElement;
      if (item) item.parentElement.removeChild(item);
    });
  });
};
exports.default = displayShoppingList;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"490hG":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _displayLikedRecipe = require('./displayLikedRecipe');
var _displayLikedRecipeDefault = _parcelHelpers.interopDefault(_displayLikedRecipe);
const common = require('./common');
const domElement = {
  heart: document.querySelector('.heart')
};
const cart = [];
const likeRecipe = (recipe, id, button) => {
  domElement.heart.innerHTML = '????';
  const prevItem = cart.find(item => item.id === id || item.recipe_id === id);
  if (!prevItem) {
    cart.push({
      ...recipe,
      id: id
    });
  } else {
    button.disabled = true;
  }
  common.persistData({
    key: 'cartItems',
    isObject: true,
    data: cart
  });
  // localStorage.setItem('likes', JSON.stringify(cart));
  _displayLikedRecipeDefault.default(cart);
};
exports.default = likeRecipe;
window.addEventListener('load', () => {
  cartItem = common.readStorage({
    key: 'cartItems',
    isObject: true
  });
  _displayLikedRecipeDefault.default(cartItem);
});

},{"./displayLikedRecipe":"1SwjF","./common":"6ws4i","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1SwjF":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
const common = require('./common');
const domElement = {
  theCart: document.querySelector('.cart'),
  heart: document.querySelector('.heart'),
  cartEmpty: document.querySelector('.cart-empty')
};
const displayLikedRecipe = cart => {
  domElement.theCart.innerHTML = '';
  if (cart.length < 1) {
    domElement.theCart.innerHTML = `<p class = "cart-add">Add a recipe to your favourites list!</p>`;
  } else {
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.id = item.recipe_id;
      const itemDetails = document.createElement('div');
      itemDetails.classList.add('item-details');
      const itemImage = document.createElement('img');
      itemImage.src = item.image_url;
      itemImage.alt = item.title;
      const itemName = document.createElement('p');
      itemName.classList.add('item-title');
      itemName.textContent = item.title;
      itemDetails.append(itemImage);
      itemDetails.append(itemName);
      const removeItem = document.createElement('div');
      removeItem.classList.add('remove-nom');
      const remove = document.createElement('p');
      remove.classList.add('remove');
      remove.textContent = 'X';
      removeItem.append(remove);
      cartItem.append(itemDetails);
      cartItem.append(removeItem);
      removeItem.addEventListener('click', e => {
        const id = item.id;
        let ids, index;
        ids = cart.map(curr => {
          return curr.id;
        });
        index = ids.indexOf(id);
        if (index !== -1) {
          cart.splice(index, 1);
        }
        if (cart.length === 0) {
          domElement.cartEmpty.display = "block";
          domElement.heart.innerHTML = '????';
        } else {
          domElement.cartEmpty.display = "none";
          domElement.heart.innerHTML = '????';
        }
        displayLikedRecipe(cart);
        common.persistData({
          key: 'cartItems',
          isObject: true,
          data: cart
        });
      });
      domElement.theCart.append(cartItem);
    });
  }
};
exports.default = displayLikedRecipe;
window.addEventListener('load', () => {
  cartItem = common.readStorage({
    key: 'cartItems',
    isObject: true
  });
  displayLikedRecipe(cartItem);
});

},{"./common":"6ws4i","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"6ws4i":[function(require,module,exports) {
exports.readStorage = ({ key, isObject }) => {
    const item = localStorage.getItem(key);

    if (item) {
        return isObject ? JSON.parse(item) : item
    }

    return isObject ? [] : 0
}

exports.persistData = ({ key, isObject, data }) => {
    localStorage.setItem(key, isObject ? JSON.stringify(data) : data);
}
},{}],"5J4T3":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _getButtons = require('./getButtons');
var _getButtonsDefault = _parcelHelpers.interopDefault(_getButtons);
const domElements = {
  pageBtns: document.querySelector('.pagination')
};
const displayButtons = (page, numResults, resPerPage) => {
  console.log('Hey');
  const pages = Math.ceil(numResults / resPerPage);
  let button;
  if (page === 1 && pages > 1) {
    console.log('Well');
    button = _getButtonsDefault.default(page, 'next');
  } else if (page < pages) {
    button = `
        ${_getButtonsDefault.default(page, 'prev')}
        ${_getButtonsDefault.default(page, 'next')}
        `;
  } else if (page === pages && pages > 1) {
    button = _getButtonsDefault.default(page, 'prev');
  }
  domElements.pageBtns.insertAdjacentHTML('afterbegin', button);
};
exports.default = displayButtons;

},{"./getButtons":"6kpdy","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"6kpdy":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
const getButton = (page, type) => {
  return `
        <button class="btn-inline pagination-btn-${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
            <span>${type === 'prev' ? '??????' : '??????'}</span>
            <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        </button>
    `;
};
exports.default = getButton;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5Av4P":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _displayRandomRecipe = require('./displayRandomRecipe');
var _displayRandomRecipeDefault = _parcelHelpers.interopDefault(_displayRandomRecipe);
var _getResults = require('./getResults');
var _getResultsDefault = _parcelHelpers.interopDefault(_getResults);
const domElements = {
  modal: document.querySelector('.modal'),
  overlay: document.querySelector('.overlay'),
  modalClose: document.querySelector('.close-modal'),
  randomBtn: document.querySelector('.btn-random')
};
const getRandomRecipe = () => {
  const foods = ['pizza', 'fish', 'beef', 'pasta', 'steak', 'cake', 'lasagna', 'lobster'];
  const randomFood = foods[Math.trunc(Math.random() * foods.length)];
  domElements.modal.classList.remove('hidden');
  domElements.overlay.classList.remove('hidden');
  try {
    const results = _getResultsDefault.default(randomFood);
    results.then(response => {
      const recipes = response.recipes;
      const randomIndex = Math.trunc(Math.random() * recipes.length);
      const randomRecipe = recipes[randomIndex];
      _displayRandomRecipeDefault.default(randomRecipe);
    });
  } catch (error) {
    console.log(error);
  }
};
exports.default = getRandomRecipe;

},{"./displayRandomRecipe":"2nn9R","./getResults":"6ms5S","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2nn9R":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
const domElements = {
  dailyRecipe: document.querySelector('.recipe-con')
};
const displayRandomRecipe = result => {
  const markup = `
    <div class = "recipe-image">
        <img src = "${result.image_url}" alt = "${result.title}" />
    </div>
    <h3>${result.title}</h3>
    <div class = "recipe-details">
        <div class="recipe-directions">
            <h2 class="heading-2">How to cook it</h2>
            <p class="recipe-directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe-publisher">${result.publisher}</span>. Please check out
                directions at their website.
            </p>
            <a
                class="btn-small recipe-btn"
                href="${result.publisher_url}"
                target="_blank"
            >
                <span>Directions ??????</span>
            </a>
        </div>
    </div>`;
  domElements.dailyRecipe.innerHTML = markup;
};
exports.default = displayRandomRecipe;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["A7H4y","4ee1I"], "4ee1I", "parcelRequire5515")

//# sourceMappingURL=index.fd532818.js.map

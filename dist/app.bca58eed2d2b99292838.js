webpackJsonp([1],{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--2!./node_modules/pug-bem-plain-loader??ref--0-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/app/App.vue?vue&type=template&id=65e33e84&lang=pug&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;return _c('div', { attrs: { "id": "app" } }, [_c('router-view')], 1);
};
var staticRenderFns = [];


// CONCATENATED MODULE: ./src/app/App.vue?vue&type=template&id=65e33e84&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/app/App.vue?vue&type=script&lang=js&

/* harmony default export */ var Appvue_type_script_lang_js_ = ({
    name: 'App'
});
// CONCATENATED MODULE: ./src/app/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/app/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(7);

// CONCATENATED MODULE: ./src/app/providers/store/index.js



vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);

function createStore() {
    return new vuex_esm["a" /* default */].Store({
        // ВАЖНО: состояние должно быть функцией,
        // чтобы модуль мог инстанцироваться несколько раз
        state: () => ({}),
        actions: {},
        mutations: {}
    });
}
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Home/Home.vue?vue&type=template&id=7106fbda&
var Homevue_type_template_id_7106fbda__render = function render() {
  var _vm = this,
      _c = _vm._self._c;return _c('h1', [_vm._v("Index page")]);
};
var Homevue_type_template_id_7106fbda__staticRenderFns = [];


// CONCATENATED MODULE: ./src/pages/Home/Home.vue?vue&type=template&id=7106fbda&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Home/Home.vue?vue&type=script&lang=js&


/* harmony default export */ var Homevue_type_script_lang_js_ = ({
    name: 'Home',
    data: () => ({})
});
// CONCATENATED MODULE: ./src/pages/Home/Home.vue?vue&type=script&lang=js&
 /* harmony default export */ var Home_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/Home/Home.vue





/* normalize component */

var Home_component = Object(componentNormalizer["a" /* default */])(
  Home_Homevue_type_script_lang_js_,
  Homevue_type_template_id_7106fbda__render,
  Homevue_type_template_id_7106fbda__staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Home = (Home_component.exports);
// CONCATENATED MODULE: ./src/app/providers/router/index.js





vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

function createRouter() {
    return new vue_router_esm["a" /* default */]({
        mode: 'history',
        routes: [{
            path: '/',
            name: 'Index',
            component: Home
        }]
    });
}
// CONCATENATED MODULE: ./src/app/app.js





// экспортируем функцию фабрику для создания экземпляров
// нового приложения, маршрутизатора и хранилища
function createApp() {
    const router = createRouter();
    const store = createStore();

    const app = new vue_runtime_esm["a" /* default */]({
        router,
        store,
        // корневой экземпляр просто рендерит компонент App
        render: h => h(App)
    });
    return { app, router, store };
}
// CONCATENATED MODULE: ./src/app/entry-client.js


const { app: entry_client_app, router: entry_client_router } = createApp();

if (window.__INITIAL_STATE__) {
    // Инициализируем состояние хранилища данными, внедрёнными на сервере
    store.replaceState(window.__INITIAL_STATE__);
}

entry_client_router.onReady(() => {
    // подразумеваем что шаблон в App.vue имеет корневой элемент с id="app"
    entry_client_app.$mount('#app');
});

/***/ })

},[3]);
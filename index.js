"use strict";
(self["webpackChunkpersonal_portfolio"] = self["webpackChunkpersonal_portfolio"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

:root {
  --primary-color: #ffffff;
  --secondary-color: #dee3e3;
  --text-color: #343434;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--text-color);
  background-color: var(--secondary-color);
  font-family: 'Josefin Sans', sans-serif;
}

header {
  width: 100%;
  height: 75vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

.switch {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;
  cursor: pointer;
}

.slider {
  display: inline-block;
  width: 56px;
  height: 32px;
  background-color: var(--secondary-color);
  border-radius: 16px;
  position: relative;
  transition: 0.25s all ease-in-out;
}

.slider::after {
  content: "";
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: var(--primary-color);
  border-radius: 12px;
  position: absolute;
  top: 4px;
  transform: translateX(4px);
  box-shadow: 10px 0 calc(10px * 4) rgba(0, 0, 0, 0.1);
  transition: 0.25s all ease-in-out;
}

.switch input[type="checkbox"]:checked + .slider {
  background-color: var(--secondary-color);
}

.switch input[type="checkbox"]:checked + .slider::after {
  transform: translateX(28px);
  box-shadow: calc(-10px) 0 calc(10px * 4) rgba(0, 0, 0, 0.1);
  background-color: var(--primary-color);
}

.switch input[type="checkbox"] {
  display: none;
}

.switch input[type="checkbox"]:active + .slider::after {
  width: 48px;
}

.switch input[type="checkbox"]:checked:active + .slider::after {
  transform: translateX(4px);
}

.header-container {
  width: 100%;
  text-align: center;
  text-shadow: var(--primary-color) 0.7px 0 0.2px, var(--primary-color) -0.7px 0 0.2px;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #050505;
  z-index: 1;
}

.name {
  font-size: 2rem;
  font-weight: 700;
}

.job-title {
  font-size: 2rem;
  font-weight: 300;
}

.images-container {
  width: 100%;
  height: 75vh;
  pointer-events: none;
  position: relative;
  overflow-x: hidden;
  background: var(--primary-color);
}

.header-images {
  height: 100%;
  overflow: hidden;
  position: absolute;
}

.hill-one,
.hill-three,
.hill-five,
.hill-two,
.hill-four,
.hill-six {
  width: 100%;
  bottom: -2px;
  z-index: 1;
}

.hill-one {
  z-index: 1;
}

.person {
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

section {
  padding: 16px;
}

.about {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
}

.about-title,
.projects-title,
.contact-title {
  justify-self: center;
  align-self: center;
}

.about-section-paragraph {
  align-self: center;
  width: 100%;
  max-width: 950px;
  text-align: center;
  font-size: 1.25rem;
  font-family: 'Roboto', sans-serif;
  margin-block: 24px;
}

.scroller {
  align-self: center;
  width: 100%;
  max-width: 600px;
  -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  overflow: hidden;
}

.skills-list {
  padding-block: 16px;
  display: inline-block;
  white-space: nowrap;
}

.skills-list i {
  font-size: 48px;
  margin-left: 16px;
}

.projects {
  display: flex;
  flex-direction: column;
}

.projects-container {
  width: 90%;
  margin-top: 32px;
  margin-bottom: -32px;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 64px;
}

.project-container {
  height: 600px;
  position: relative;
}

.project-background-declaration {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 50%;
  border-radius: 5px;
  border: 1px dashed var(--text-color);
  z-index: -1;
}

.project-img {
  position: absolute;
  top: 0;
  width: 350px;
  height: 350px;
  margin-left: 75px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 20px 20px;
}

.project-container:nth-child(odd) .project-img {
  left: -55px;
}

.project-container:nth-child(even) .project-img {
  right: 20px;
}

.project-details-container {
  position: absolute;
  bottom: 0;
  height: 350px;
  width: 350px;
  padding: 10px;
  background-color: var(--secondary-color);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 30px;
  font-size: 1.25rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
}

.project-container:nth-child(odd) .project-details-container {
  right: 20px;
}

.project-container:nth-child(even) .project-details-container {
  left: 20px;
}

.project-title {
  position: absolute;
  top: -25px;
  background-color: var(--secondary-color);
  border-radius: 5px;
  font-size: 1em;
  padding: 10px;
  width: fit-content;
}

.project-container:nth-child(odd)
.project-details-container
.project-title {
  right: 0;
}

.project-container:nth-child(even)
.project-details-container
.project-title {
  left: 0;
}

.project-description {
  font-family: 'Roboto', sans-serif;
}

.project-links a {
  display: flex;
  justify-content: center;
  color: var(--text-color);
  font-size: 1rem;
  margin: 20px 8px 0 8px;
  cursor: pointer;
  border: 1px solid var(--text-color);
  border-radius: 5px;
  padding: 8px;
  transition: box-shadow 0.5s;
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}

.footer-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: 24px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin-top: 24px;
}

.contact-form .container {
  position: relative;
}

.contact-form .container label {
  font-size: 1rem;
  color: var(--text-color);
  position: absolute;
  top: -16px;
  left: 10px;
  padding: 0.5px;
  transition: all 0.25s ease;
}

.contact-form .container input,
.contact-form .container textarea {
  color: var(--text-color);
  font-size: 1rem;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--text-color);
  margin-bottom: 20px;
  outline: 0;
  width: 100%;
  background-color: transparent;
}

.contact-form .container input:placeholder-shown+label,
.contact-form .container textarea:placeholder-shown+label {
  top: 16px;
  background-color: transparent;
}

.contact-form .container input:focus+label,
.contact-form .container textarea:focus+label {
  top: -16px;
  left: 10px;
  background-color: var(--text-color);
  color: var(--secondary-color);
  padding: 0.5px;
  font-weight: 600;
  font-size: 1rem;
}

.contact-form .container input:focus:invalid+label,
.contact-form .container textarea:focus:invalid+label,
.contact-form .container input:not(:placeholder-shown):invalid+label,
.contact-form .container textarea:not(:placeholder-shown):invalid+label {
  background-color: red;
  color: var(--secondary-color);
}

.contact-form .container input:focus:invalid,
.contact-form .container textarea:focus:invalid,
.contact-form .container input:not(:placeholder-shown):invalid,
.contact-form .container textarea:not(:placeholder-shown):invalid {
  border: 1px solid red;
}

.contact-form .container textarea {
  resize: none;
  height: 100px;
}

.contact-form .submit {
  background-color: transparent;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 400;
  padding: 8px;
  cursor: pointer;
  transition: transform 0.25s, background-color 0.25s;
}

.submit:active {
  transform: scale(0.95);
}

.social-media {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-block: 24px;
}

.social-media a {
  font-size: 1.5rem;
  margin: 4px;
}

.copyright {
  font-size: 1rem;
  text-align: center;
}

.link {
  text-decoration: none;
  color: var(--text-color);
  display: flex;
  align-items: center;
  font-size: 1rem;
  transition: transform;
}

.link i {
  font-size: 1em;
}

.link:active {
  transform: scale(0.95);
}

@media (max-width: 999px) {
  .projects-container {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }
}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,wBAAwB;EACxB,wCAAwC;EACxC,uCAAuC;AACzC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,wCAAwC;EACxC,mBAAmB;EACnB,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,sCAAsC;EACtC,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;EACR,0BAA0B;EAC1B,oDAAoD;EACpD,iCAAiC;AACnC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,2BAA2B;EAC3B,2DAA2D;EAC3D,sCAAsC;AACxC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,oFAAoF;EACpF,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;;;;;EAME,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;AACxB;;AAEA;;;EAGE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,oFAAoF;EACpF,4EAA4E;EAC5E,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;EACb,oDAAoD;EACpD,SAAS;AACX;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,2BAA2B;EAC3B,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,oCAAoC;EACpC,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,4CAA4C;AAC9C;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,YAAY;EACZ,aAAa;EACb,wCAAwC;EACxC,4CAA4C;EAC5C,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,wCAAwC;EACxC,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,kBAAkB;AACpB;;AAEA;;;EAGE,QAAQ;AACV;;AAEA;;;EAGE,OAAO;AACT;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,wBAAwB;EACxB,eAAe;EACf,sBAAsB;EACtB,eAAe;EACf,mCAAmC;EACnC,kBAAkB;EAClB,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,wBAAwB;EACxB,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,cAAc;EACd,0BAA0B;AAC5B;;AAEA;;EAEE,wBAAwB;EACxB,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,mCAAmC;EACnC,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,6BAA6B;AAC/B;;AAEA;;EAEE,SAAS;EACT,6BAA6B;AAC/B;;AAEA;;EAEE,UAAU;EACV,UAAU;EACV,mCAAmC;EACnC,6BAA6B;EAC7B,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;;;;EAIE,qBAAqB;EACrB,6BAA6B;AAC/B;;AAEA;;;;EAIE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,mCAAmC;EACnC,wBAAwB;EACxB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,mDAAmD;AACrD;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;IACE,oDAAoD;EACtD;AACF","sourcesContent":["*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --primary-color: #ffffff;\n  --secondary-color: #dee3e3;\n  --text-color: #343434;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: var(--text-color);\n  background-color: var(--secondary-color);\n  font-family: 'Josefin Sans', sans-serif;\n}\n\nheader {\n  width: 100%;\n  height: 75vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.switch {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  z-index: 2;\n  cursor: pointer;\n}\n\n.slider {\n  display: inline-block;\n  width: 56px;\n  height: 32px;\n  background-color: var(--secondary-color);\n  border-radius: 16px;\n  position: relative;\n  transition: 0.25s all ease-in-out;\n}\n\n.slider::after {\n  content: \"\";\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  background-color: var(--primary-color);\n  border-radius: 12px;\n  position: absolute;\n  top: 4px;\n  transform: translateX(4px);\n  box-shadow: 10px 0 calc(10px * 4) rgba(0, 0, 0, 0.1);\n  transition: 0.25s all ease-in-out;\n}\n\n.switch input[type=\"checkbox\"]:checked + .slider {\n  background-color: var(--secondary-color);\n}\n\n.switch input[type=\"checkbox\"]:checked + .slider::after {\n  transform: translateX(28px);\n  box-shadow: calc(-10px) 0 calc(10px * 4) rgba(0, 0, 0, 0.1);\n  background-color: var(--primary-color);\n}\n\n.switch input[type=\"checkbox\"] {\n  display: none;\n}\n\n.switch input[type=\"checkbox\"]:active + .slider::after {\n  width: 48px;\n}\n\n.switch input[type=\"checkbox\"]:checked:active + .slider::after {\n  transform: translateX(4px);\n}\n\n.header-container {\n  width: 100%;\n  text-align: center;\n  text-shadow: var(--primary-color) 0.7px 0 0.2px, var(--primary-color) -0.7px 0 0.2px;\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #050505;\n  z-index: 1;\n}\n\n.name {\n  font-size: 2rem;\n  font-weight: 700;\n}\n\n.job-title {\n  font-size: 2rem;\n  font-weight: 300;\n}\n\n.images-container {\n  width: 100%;\n  height: 75vh;\n  pointer-events: none;\n  position: relative;\n  overflow-x: hidden;\n  background: var(--primary-color);\n}\n\n.header-images {\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n\n.hill-one,\n.hill-three,\n.hill-five,\n.hill-two,\n.hill-four,\n.hill-six {\n  width: 100%;\n  bottom: -2px;\n  z-index: 1;\n}\n\n.hill-one {\n  z-index: 1;\n}\n\n.person {\n  bottom: -2px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 3;\n}\n\nsection {\n  padding: 16px;\n}\n\n.about {\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n}\n\n.about-title,\n.projects-title,\n.contact-title {\n  justify-self: center;\n  align-self: center;\n}\n\n.about-section-paragraph {\n  align-self: center;\n  width: 100%;\n  max-width: 950px;\n  text-align: center;\n  font-size: 1.25rem;\n  font-family: 'Roboto', sans-serif;\n  margin-block: 24px;\n}\n\n.scroller {\n  align-self: center;\n  width: 100%;\n  max-width: 600px;\n  -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);\n  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);\n  overflow: hidden;\n}\n\n.skills-list {\n  padding-block: 16px;\n  display: inline-block;\n  white-space: nowrap;\n}\n\n.skills-list i {\n  font-size: 48px;\n  margin-left: 16px;\n}\n\n.projects {\n  display: flex;\n  flex-direction: column;\n}\n\n.projects-container {\n  width: 90%;\n  margin-top: 32px;\n  margin-bottom: -32px;\n  align-self: center;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(300px, 1fr));\n  gap: 64px;\n}\n\n.project-container {\n  height: 600px;\n  position: relative;\n}\n\n.project-background-declaration {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  height: 50%;\n  border-radius: 5px;\n  border: 1px dashed var(--text-color);\n  z-index: -1;\n}\n\n.project-img {\n  position: absolute;\n  top: 0;\n  width: 350px;\n  height: 350px;\n  margin-left: 75px;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 20px 20px;\n}\n\n.project-container:nth-child(odd) .project-img {\n  left: -55px;\n}\n\n.project-container:nth-child(even) .project-img {\n  right: 20px;\n}\n\n.project-details-container {\n  position: absolute;\n  bottom: 0;\n  height: 350px;\n  width: 350px;\n  padding: 10px;\n  background-color: var(--secondary-color);\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 30px;\n  font-size: 1.25rem;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  z-index: 2;\n}\n\n.project-container:nth-child(odd) .project-details-container {\n  right: 20px;\n}\n\n.project-container:nth-child(even) .project-details-container {\n  left: 20px;\n}\n\n.project-title {\n  position: absolute;\n  top: -25px;\n  background-color: var(--secondary-color);\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 10px;\n  width: fit-content;\n}\n\n.project-container:nth-child(odd)\n.project-details-container\n.project-title {\n  right: 0;\n}\n\n.project-container:nth-child(even)\n.project-details-container\n.project-title {\n  left: 0;\n}\n\n.project-description {\n  font-family: 'Roboto', sans-serif;\n}\n\n.project-links a {\n  display: flex;\n  justify-content: center;\n  color: var(--text-color);\n  font-size: 1rem;\n  margin: 20px 8px 0 8px;\n  cursor: pointer;\n  border: 1px solid var(--text-color);\n  border-radius: 5px;\n  padding: 8px;\n  transition: box-shadow 0.5s;\n}\n\nfooter {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 16px;\n}\n\n.footer-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-inline: 24px;\n}\n\n.contact-form {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 600px;\n  margin-top: 24px;\n}\n\n.contact-form .container {\n  position: relative;\n}\n\n.contact-form .container label {\n  font-size: 1rem;\n  color: var(--text-color);\n  position: absolute;\n  top: -16px;\n  left: 10px;\n  padding: 0.5px;\n  transition: all 0.25s ease;\n}\n\n.contact-form .container input,\n.contact-form .container textarea {\n  color: var(--text-color);\n  font-size: 1rem;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid var(--text-color);\n  margin-bottom: 20px;\n  outline: 0;\n  width: 100%;\n  background-color: transparent;\n}\n\n.contact-form .container input:placeholder-shown+label,\n.contact-form .container textarea:placeholder-shown+label {\n  top: 16px;\n  background-color: transparent;\n}\n\n.contact-form .container input:focus+label,\n.contact-form .container textarea:focus+label {\n  top: -16px;\n  left: 10px;\n  background-color: var(--text-color);\n  color: var(--secondary-color);\n  padding: 0.5px;\n  font-weight: 600;\n  font-size: 1rem;\n}\n\n.contact-form .container input:focus:invalid+label,\n.contact-form .container textarea:focus:invalid+label,\n.contact-form .container input:not(:placeholder-shown):invalid+label,\n.contact-form .container textarea:not(:placeholder-shown):invalid+label {\n  background-color: red;\n  color: var(--secondary-color);\n}\n\n.contact-form .container input:focus:invalid,\n.contact-form .container textarea:focus:invalid,\n.contact-form .container input:not(:placeholder-shown):invalid,\n.contact-form .container textarea:not(:placeholder-shown):invalid {\n  border: 1px solid red;\n}\n\n.contact-form .container textarea {\n  resize: none;\n  height: 100px;\n}\n\n.contact-form .submit {\n  background-color: transparent;\n  border: 1px solid var(--text-color);\n  color: var(--text-color);\n  border-radius: 5px;\n  font-size: 1rem;\n  font-weight: 400;\n  padding: 8px;\n  cursor: pointer;\n  transition: transform 0.25s, background-color 0.25s;\n}\n\n.submit:active {\n  transform: scale(0.95);\n}\n\n.social-media {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-block: 24px;\n}\n\n.social-media a {\n  font-size: 1.5rem;\n  margin: 4px;\n}\n\n.copyright {\n  font-size: 1rem;\n  text-align: center;\n}\n\n.link {\n  text-decoration: none;\n  color: var(--text-color);\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  transition: transform;\n}\n\n.link i {\n  font-size: 1em;\n}\n\n.link:active {\n  transform: scale(0.95);\n}\n\n@media (max-width: 999px) {\n  .projects-container {\n    grid-template-columns: repeat(1, minmax(300px, 1fr));\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visualEffects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualEffects.js */ "./src/visualEffects.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _images_hill_one_light_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/hill-one-light.png */ "./src/images/hill-one-light.png");
/* harmony import */ var _images_hill_one_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/hill-one.png */ "./src/images/hill-one.png");
/* harmony import */ var _images_hill_two_light_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/hill-two-light.png */ "./src/images/hill-two-light.png");
/* harmony import */ var _images_hill_two_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/hill-two.png */ "./src/images/hill-two.png");
/* harmony import */ var _images_hill_three_light_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/hill-three-light.png */ "./src/images/hill-three-light.png");
/* harmony import */ var _images_hill_three_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/hill-three.png */ "./src/images/hill-three.png");
/* harmony import */ var _images_hill_four_light_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/hill-four-light.png */ "./src/images/hill-four-light.png");
/* harmony import */ var _images_hill_four_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/hill-four.png */ "./src/images/hill-four.png");
/* harmony import */ var _images_person_light_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/person-light.png */ "./src/images/person-light.png");
/* harmony import */ var _images_person_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/person.png */ "./src/images/person.png");
/* harmony import */ var _images_weather_app_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/weather-app.jpg */ "./src/images/weather-app.jpg");
/* harmony import */ var _images_battleship_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/battleship.jpg */ "./src/images/battleship.jpg");
/* harmony import */ var _images_todo_list_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/todo-list.jpg */ "./src/images/todo-list.jpg");
/* harmony import */ var _images_library_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/library.jpg */ "./src/images/library.jpg");
/* harmony import */ var _images_calculator_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/calculator.jpg */ "./src/images/calculator.jpg");
/* harmony import */ var _images_etch_a_sketch_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/etch-a-sketch.jpg */ "./src/images/etch-a-sketch.jpg");



















const header = document.createElement('header');
const headerTextContainer = document.createElement('div');
headerTextContainer.classList = 'header-container';

const themeSwitch = document.createElement('label');
themeSwitch.className = 'switch';

const themeSwitchInput = document.createElement('input');
themeSwitchInput.type = 'checkbox';
themeSwitchInput.setAttribute('checked', true);
themeSwitchInput.setAttribute('aria-label', 'Dark theme');

const themeSwitchSpan = document.createElement('span');
themeSwitchSpan.className = 'slider';

const name = document.createElement('h1');
name.textContent = 'LAYTH ALQADHI';
name.classList = 'name';
const jobTitle = document.createElement('h2');
jobTitle.textContent = 'Web Developer';
jobTitle.classList = 'job-title';

function createImage(src, className) {
  const img = document.createElement('img');
  img.src = src;
  img.classList = className + ' header-images';
  img.loading = 'lazy';
  return img;
}

const imagesContainer = document.createElement('div');
imagesContainer.classList = 'images-container';
imagesContainer.setAttribute('aria-hidden', 'true');

const hillOneImg = createImage(_images_hill_one_light_png__WEBPACK_IMPORTED_MODULE_2__, 'hill-one');
const hillTwoImg = createImage(_images_hill_two_light_png__WEBPACK_IMPORTED_MODULE_4__, 'hill-two');
const hillThreeImg = createImage(_images_hill_three_light_png__WEBPACK_IMPORTED_MODULE_6__, 'hill-three');
const hillFourImg = createImage(_images_hill_four_light_png__WEBPACK_IMPORTED_MODULE_8__, 'hill-four');
const personImg = createImage(_images_person_light_png__WEBPACK_IMPORTED_MODULE_10__, 'person');

themeSwitch.append(themeSwitchInput, themeSwitchSpan);
imagesContainer.append(hillOneImg, hillTwoImg, hillThreeImg, hillFourImg, personImg);
headerTextContainer.append(name, jobTitle);
header.append(themeSwitch, imagesContainer, headerTextContainer);

function createSection(tagName, className, titleText, orderText) {
  const section = document.createElement(tagName);
  section.classList = className;

  const title = document.createElement('h2');
  title.textContent = titleText;
  title.classList = `${className}-title`;

  section.append(title);

  return section;
}

const aboutSection = createSection('section', 'about', 'About');
const aboutSectionParagraph = document.createElement('p');
aboutSectionParagraph.classList = 'about-section-paragraph';
aboutSectionParagraph.textContent = "A self-taught web developer on a perpetual learning journey. I firmly believe that in the face of doubt, self-belief becomes our most valuable asset. My passion for coding began as a personal challenge, and it has grown into a path of self-improvement and creativity. I thrive on the endless possibilities that the world of web development offers, and I'm committed to crafting innovative digital experiences.";

const scroller = document.createElement('div');
scroller.classList = 'scroller';
scroller.setAttribute('aria-hidden', true);

function createIcon(iconClass) {
    const icon = document.createElement('i');
    icon.classList = iconClass;
    return icon;
}

const skillsList = document.createElement('div');
skillsList.classList = 'skills-list';

const icons = [
    'devicon-git-plain', 'devicon-github-plain', 'devicon-html5-plain',
    'devicon-css3-plain', 'devicon-javascript-plain', 'devicon-jest-plain',
    'devicon-babel-plain', 'devicon-webpack-plain', 'devicon-npm-plain',
    'devicon-figma-plain', 'devicon-photoshop-plain', 'devicon-illustrator-plain'
];

const iconElements = icons.map(iconClass => createIcon(iconClass));
const iconElementClones = icons.map(iconClass => createIcon(iconClass));

skillsList.append(...iconElements, ...iconElementClones);
scroller.append(skillsList);
aboutSection.append(aboutSectionParagraph, scroller);

const projectsSection = createSection('section', 'projects', 'Projects');

function createProjectContainer(imgSrc, imgAlt, title, description, repository, preview) {
  const projectContainer = document.createElement('div');
  projectContainer.classList = 'project-container';
  const projectImg = document.createElement('img');
  projectImg.classList = 'project-img';

  projectImg.src = imgSrc;
  projectImg.alt = imgAlt;
  projectImg.loading = 'lazy';

  const projectDetailsContainer = document.createElement('div');
  projectDetailsContainer.classList = 'project-details-container';

  const projectBackgroundDeclaration = document.createElement('div');
  projectBackgroundDeclaration.classList = 'project-background-declaration';

  const projectTitle = document.createElement('h3');
  projectTitle.classList = 'project-title';
  projectTitle.textContent = title;

  const projectDescription = document.createElement('p');
  projectDescription.classList = 'project-description';
  projectDescription.textContent = description;

  const projectLinks = document.createElement('div');
  projectLinks.classList = 'project-links';

  const previewLink = document.createElement('a');
  previewLink.textContent = 'Live preview';
  previewLink.href = preview;
  previewLink.target = '_blank';
  previewLink.classList = 'link';

  const previewIcon = document.createElement('i');
  previewIcon.textContent = 'arrow_outward';
  previewIcon.setAttribute('aria-hidden', true);
  previewIcon.classList = 'material-symbols-outlined';

  const repositoryLink = document.createElement('a');
  repositoryLink.href = repository;
  repositoryLink.textContent = 'View code';
  repositoryLink.target = '_blank';
  repositoryLink.classList = 'link';

  const repositoryIcon = document.createElement('i');
  repositoryIcon.textContent = 'arrow_outward';
  repositoryIcon.setAttribute('aria-hidden', true);
  repositoryIcon.classList = 'material-symbols-outlined';

  previewLink.append(previewIcon);
  repositoryLink.append(repositoryIcon);
  projectLinks.append(previewLink, repositoryLink);
  projectDetailsContainer.append(projectTitle, projectDescription, projectLinks);
  projectContainer.append(projectBackgroundDeclaration, projectImg,  projectDetailsContainer);

  return projectContainer;
}

const projectsContainer = document.createElement('div');
projectsContainer.classList = 'projects-container';

const projectContainer1 = createProjectContainer(_images_weather_app_jpg__WEBPACK_IMPORTED_MODULE_12__,
  'Weather application',
  'Weather app',
  'A web application that allows users to check the weather forecast for a specific location. It utilizes the WeatherAPI to fetch weather data and provides users with detailed weather information for the current day and the next two days.',
  'https://github.com/LaythAlqadhi/weather-app',
  'https://LaythAlqadhi.github.io/weather-app');
const projectContainer2 = createProjectContainer(_images_battleship_jpg__WEBPACK_IMPORTED_MODULE_13__,
  'Battleship game',
  'Battleship',
  'A web application contains a JavaScript implementation of the classic game Battleship. It focuses on Test Driven Development (TDD) principles.',
  'https://github.com/LaythAlqadhi/battleship',
  'https://LaythAlqadhi.github.io/battleship');
const projectContainer3 = createProjectContainer(_images_todo_list_jpg__WEBPACK_IMPORTED_MODULE_14__,
  'To-do application',
  'To-do list',
  'A web application that allows users to create a to-do list. Users can add new tasks, mark them as completed, and delete them.',
  'https://github.com/LaythAlqadhi/to-do-list',
  'https://LaythAlqadhi.github.io/to-do-list');
const projectContainer4 = createProjectContainer(_images_library_jpg__WEBPACK_IMPORTED_MODULE_15__,
  'Library application',
  'Library',
  'A web application that allows users to create a personal book library. Users can enter the title, author, number of pages, and select whether they have read the book or not. The entered book details are displayed in a table, where users can also mark books as read or not read, as well as remove books from the library.',
  'https://github.com/LaythAlqadhi/library',
  'https://LaythAlqadhi.github.io/library');
const projectContainer5 = createProjectContainer(_images_calculator_jpg__WEBPACK_IMPORTED_MODULE_16__,
  'Calculator application',
  'Calculator',
  'A calculator application that provides basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator has a responsive user interface and supports keyboard input.',
  'https://github.com/LaythAlqadhi/calculator',
  'https://LaythAlqadhi.github.io/calculator');
const projectContainer6 = createProjectContainer(_images_etch_a_sketch_jpg__WEBPACK_IMPORTED_MODULE_17__,
  'Etch a sketch game',
  'Etch a sketch',
  'A web application that allows you to draw on a grid of boxes by changing their colors. You can choose the size of the grid, switch between different drawing modes (B&W, Random, Delete), and clear the drawing.',
  'https://github.com/LaythAlqadhi/etch-a-sketch',
  'https://LaythAlqadhi.github.io/etch-a-sketch');

projectsContainer.append(projectContainer1, projectContainer2, projectContainer3, projectContainer4, projectContainer5, projectContainer6);
projectsSection.append(projectsContainer);

const footer = createSection('footer', 'contact', 'Contact');
const footerContainer = document.createElement('div');
footerContainer.classList = 'footer-container';

const form = document.createElement('form');
form.classList = 'contact-form';
form.action = '#';
form.method = 'POST';

function createInputContainer(tagName, type, id, content) {
  const container = document.createElement('div');
  container.classList = 'container';

  const input = document.createElement(tagName);

  if (tagName === 'input') {
    input.type = type;
  }

  input.placeholder = '‎';
  input.id = id;
  input.name = id;
  input.required = true;
  input.setAttribute('minlength', 3);

  if (id === 'email') {
    input.setAttribute('pattern', '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}');
  }

  const label = document.createElement('label');
  label.htmlFor = id;
  label.textContent = content;

  const span = document.createElement('span');
  span.classList = `${id}Error error`;

  container.append(input, label, span);

  return container;
}

const nameContainer = createInputContainer('input', 'text', 'name', 'Name');
const emailContainer = createInputContainer('input', 'text', 'email', 'Email');
const messageContainer = createInputContainer('textarea', 'text', 'message', 'Message');

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
submitButton.classList = 'submit';

const copyright = document.createElement('p');
copyright.textContent = '© 2023 Layth Alqadhi';
copyright.classList = 'copyright';

function createLink(href, textContent) {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = textContent;
  link.target = '_blank';
  link.classList = 'link';

  const icon = document.createElement('i');
  icon.textContent = 'arrow_outward';
  icon.setAttribute('aria-hidden', true);
  icon.classList = 'material-symbols-outlined';

  link.append(icon);
  return link;
}

const socialMediaContainer = document.createElement('div');
socialMediaContainer.classList = 'social-media';

const contactLinkedinLink = createLink('https://www.linkedin.com', 'Linkedin');
const contactGithubLink = createLink('https://github.com/LaythAlqadhi', 'Github');

const openSourceLink = createLink('https://github.com/LaythAlqadhi/personal-portfolio', 'My portfolio is open source');

socialMediaContainer.append(contactLinkedinLink, contactGithubLink);
footerContainer.append(form, socialMediaContainer, copyright, openSourceLink)
form.append(nameContainer, emailContainer, messageContainer, submitButton);
footer.append(footerContainer);
document.body.append(header, aboutSection, projectsSection, footer);

(0,_visualEffects_js__WEBPACK_IMPORTED_MODULE_0__.parallax)(hillOneImg, 0.085);
(0,_visualEffects_js__WEBPACK_IMPORTED_MODULE_0__.parallax)(hillTwoImg, 0.065);
(0,_visualEffects_js__WEBPACK_IMPORTED_MODULE_0__.parallax)(hillThreeImg, 0.045);
(0,_visualEffects_js__WEBPACK_IMPORTED_MODULE_0__.parallax)(hillFourImg, 0.025);

const projectDetailsContainer = document.querySelectorAll('.project-details-container');
projectDetailsContainer.forEach(container => {
  (0,_visualEffects_js__WEBPACK_IMPORTED_MODULE_0__.parallax)(container, -0.003);
})

const projectImages = document.querySelectorAll('.project-img');
projectImages.forEach(img => {
  (0,_visualEffects_js__WEBPACK_IMPORTED_MODULE_0__.parallax)(img, 0.002);
});

let isDarkTheme = false;

themeSwitchInput.addEventListener('change', () => {
  isDarkTheme = !isDarkTheme;
  switchDarkTheme();
});

function switchDarkTheme() {
  const imageElements = document.querySelectorAll('.header-images');

  imageElements.forEach(img => {
    const currentSrc = img.src;
    const newSrc = isDarkTheme ? currentSrc.replace('-light.png', '.png') : currentSrc.replace('.png', '-light.png');
    img.src = newSrc;
  });

  document.body.style.setProperty('--primary-color', isDarkTheme ? '#e2e2e2' : '#ffffff');
  document.body.style.setProperty('--secondary-color', isDarkTheme ? '#343434' : '#dee3e3');
  document.body.style.setProperty('--text-color', isDarkTheme ? '#e2e2e2' : '#343434');
}

const elements = document.querySelectorAll('.header-images');
elements.forEach(element => {
  (0,_visualEffects_js__WEBPACK_IMPORTED_MODULE_0__.responsiveSizeAdjustment)(element, 'height', 525);
})

;(0,_visualEffects_js__WEBPACK_IMPORTED_MODULE_0__.infiniteScroll)(skillsList, { scrollStep: 0.035, maxScrollLimit: 50, transitionType: 'translateX' });

form.addEventListener('submit', e => {
  if (!form.checkValidity()) {
    e.preventDefault();
  }
});

/***/ }),

/***/ "./src/visualEffects.js":
/*!******************************!*\
  !*** ./src/visualEffects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   infiniteScroll: () => (/* binding */ infiniteScroll),
/* harmony export */   parallax: () => (/* binding */ parallax),
/* harmony export */   responsiveSizeAdjustment: () => (/* binding */ responsiveSizeAdjustment)
/* harmony export */ });
function parallax(elementSelector, speed = 0.025, property = 'translateY') {
  let requestId;

  function updateParallax() {
    let scroll = window.scrollY;
    let viewportWidth = window.innerWidth;

    let adjustedSpeed = speed * (viewportWidth / 100);

    let easeOutOffset = scroll * adjustedSpeed * (1 - Math.exp(-scroll / 300));

    if (scroll <= 1) {
      elementSelector.style.transform = 'none';
    } else {
      elementSelector.style.transform = `${property}(${easeOutOffset}px)`;
    }

    requestId = requestAnimationFrame(updateParallax);
  }

  window.addEventListener('scroll', function() {
    if (!requestId) {
      requestId = requestAnimationFrame(updateParallax);
    }
  });

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      if (!requestId) {
        requestId = requestAnimationFrame(updateParallax);
      }
    } else {
      cancelAnimationFrame(requestId);
      requestId = undefined;
    }
  });

  observer.observe(elementSelector);
}

function responsiveSizeAdjustment(element, property, perfectScreenWidth, sizeChange = 0) {
    const screenWidth = window.innerWidth;

    const adjustedWidth = Math.floor((screenWidth / perfectScreenWidth) * (100 + sizeChange));

    window.addEventListener('resize', () => {
      element.style[property] = adjustedWidth + '%';
    });
}

function infiniteScroll(element, options = {}) {
  let currentScrollPosition = 0;

  const scrollStep = options.scrollStep || 0.1;
  const maxScrollLimit = options.maxScrollLimit || 50;
  const transitionType = options.transitionType || "translateX";
  let isAnimating = true;

  function animate() {
    if (!isAnimating) {
      return;
    }
    currentScrollPosition += scrollStep;
    if (currentScrollPosition > maxScrollLimit) {
      currentScrollPosition = 0;
    }

    element.style.transform = `${transitionType}(-${currentScrollPosition}%)`;
    requestAnimationFrame(animate);
  }

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      isAnimating = true;
      animate();
    } else {
      isAnimating = false;
    }
  });

  observer.observe(element);
}

/***/ }),

/***/ "./src/images/battleship.jpg":
/*!***********************************!*\
  !*** ./src/images/battleship.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/battleship.jpg";

/***/ }),

/***/ "./src/images/calculator.jpg":
/*!***********************************!*\
  !*** ./src/images/calculator.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/calculator.jpg";

/***/ }),

/***/ "./src/images/etch-a-sketch.jpg":
/*!**************************************!*\
  !*** ./src/images/etch-a-sketch.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/etch-a-sketch.jpg";

/***/ }),

/***/ "./src/images/hill-four-light.png":
/*!****************************************!*\
  !*** ./src/images/hill-four-light.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hill-four-light.png";

/***/ }),

/***/ "./src/images/hill-four.png":
/*!**********************************!*\
  !*** ./src/images/hill-four.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hill-four.png";

/***/ }),

/***/ "./src/images/hill-one-light.png":
/*!***************************************!*\
  !*** ./src/images/hill-one-light.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hill-one-light.png";

/***/ }),

/***/ "./src/images/hill-one.png":
/*!*********************************!*\
  !*** ./src/images/hill-one.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hill-one.png";

/***/ }),

/***/ "./src/images/hill-three-light.png":
/*!*****************************************!*\
  !*** ./src/images/hill-three-light.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hill-three-light.png";

/***/ }),

/***/ "./src/images/hill-three.png":
/*!***********************************!*\
  !*** ./src/images/hill-three.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hill-three.png";

/***/ }),

/***/ "./src/images/hill-two-light.png":
/*!***************************************!*\
  !*** ./src/images/hill-two-light.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hill-two-light.png";

/***/ }),

/***/ "./src/images/hill-two.png":
/*!*********************************!*\
  !*** ./src/images/hill-two.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hill-two.png";

/***/ }),

/***/ "./src/images/library.jpg":
/*!********************************!*\
  !*** ./src/images/library.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/library.jpg";

/***/ }),

/***/ "./src/images/person-light.png":
/*!*************************************!*\
  !*** ./src/images/person-light.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/person-light.png";

/***/ }),

/***/ "./src/images/person.png":
/*!*******************************!*\
  !*** ./src/images/person.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/person.png";

/***/ }),

/***/ "./src/images/todo-list.jpg":
/*!**********************************!*\
  !*** ./src/images/todo-list.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/todo-list.jpg";

/***/ }),

/***/ "./src/images/weather-app.jpg":
/*!************************************!*\
  !*** ./src/images/weather-app.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/weather-app.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxPQUFPLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxV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Oi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3Zpc3VhbEVmZmVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG46cm9vdCB7XG4gIC0tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNkZWUzZTM7XG4gIC0tdGV4dC1jb2xvcjogIzM0MzQzNDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzV2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICB6LWluZGV4OiAyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zbGlkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC4yNXMgYWxsIGVhc2UtaW4tb3V0O1xufVxuXG4uc2xpZGVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xuICBib3gtc2hhZG93OiAxMHB4IDAgY2FsYygxMHB4ICogNCkgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0cmFuc2l0aW9uOiAwLjI1cyBhbGwgZWFzZS1pbi1vdXQ7XG59XG5cbi5zd2l0Y2ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLnN3aXRjaCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC5zbGlkZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI4cHgpO1xuICBib3gtc2hhZG93OiBjYWxjKC0xMHB4KSAwIGNhbGMoMTBweCAqIDQpIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5zd2l0Y2ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN3aXRjaCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06YWN0aXZlICsgLnNsaWRlcjo6YWZ0ZXIge1xuICB3aWR0aDogNDhweDtcbn1cblxuLnN3aXRjaCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZDphY3RpdmUgKyAuc2xpZGVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAwLjdweCAwIDAuMnB4LCB2YXIoLS1wcmltYXJ5LWNvbG9yKSAtMC43cHggMCAwLjJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6ICMwNTA1MDU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uam9iLXRpdGxlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uaW1hZ2VzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1dmg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5oZWFkZXItaW1hZ2VzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5oaWxsLW9uZSxcbi5oaWxsLXRocmVlLFxuLmhpbGwtZml2ZSxcbi5oaWxsLXR3byxcbi5oaWxsLWZvdXIsXG4uaGlsbC1zaXgge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAtMnB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uaGlsbC1vbmUge1xuICB6LWluZGV4OiAxO1xufVxuXG4ucGVyc29uIHtcbiAgYm90dG9tOiAtMnB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgei1pbmRleDogMztcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5hYm91dCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hYm91dC10aXRsZSxcbi5wcm9qZWN0cy10aXRsZSxcbi5jb250YWN0LXRpdGxlIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmFib3V0LXNlY3Rpb24tcGFyYWdyYXBoIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5NTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWJsb2NrOiAyNHB4O1xufVxuXG4uc2Nyb2xsZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICAtd2Via2l0LW1hc2s6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHdoaXRlIDIwJSwgd2hpdGUgODAlLCB0cmFuc3BhcmVudCk7XG4gIG1hc2s6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHdoaXRlIDIwJSwgd2hpdGUgODAlLCB0cmFuc3BhcmVudCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5za2lsbHMtbGlzdCB7XG4gIHBhZGRpbmctYmxvY2s6IDE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnNraWxscy1saXN0IGkge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4ucHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogLTMycHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ2FwOiA2NHB4O1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDYwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9qZWN0LWJhY2tncm91bmQtZGVjbGFyYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tdGV4dC1jb2xvcik7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ucHJvamVjdC1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBtYXJnaW4tbGVmdDogNzVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDIwcHggMjBweDtcbn1cblxuLnByb2plY3QtY29udGFpbmVyOm50aC1jaGlsZChvZGQpIC5wcm9qZWN0LWltZyB7XG4gIGxlZnQ6IC01NXB4O1xufVxuXG4ucHJvamVjdC1jb250YWluZXI6bnRoLWNoaWxkKGV2ZW4pIC5wcm9qZWN0LWltZyB7XG4gIHJpZ2h0OiAyMHB4O1xufVxuXG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDM1MHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMzBweCAzMHB4O1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB6LWluZGV4OiAyO1xufVxuXG4ucHJvamVjdC1jb250YWluZXI6bnRoLWNoaWxkKG9kZCkgLnByb2plY3QtZGV0YWlscy1jb250YWluZXIge1xuICByaWdodDogMjBweDtcbn1cblxuLnByb2plY3QtY29udGFpbmVyOm50aC1jaGlsZChldmVuKSAucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIGxlZnQ6IDIwcHg7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lcjpudGgtY2hpbGQob2RkKVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXJcbi5wcm9qZWN0LXRpdGxlIHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lcjpudGgtY2hpbGQoZXZlbilcbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyXG4ucHJvamVjdC10aXRsZSB7XG4gIGxlZnQ6IDA7XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4ucHJvamVjdC1saW5rcyBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW46IDIwcHggOHB4IDAgOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xufVxuXG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4taW5saW5lOiAyNHB4O1xufVxuXG4uY29udGFjdC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5jb250YWN0LWZvcm0gLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRhY3QtZm9ybSAuY29udGFpbmVyIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTZweDtcbiAgbGVmdDogMTBweDtcbiAgcGFkZGluZzogMC41cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xufVxuXG4uY29udGFjdC1mb3JtIC5jb250YWluZXIgaW5wdXQsXG4uY29udGFjdC1mb3JtIC5jb250YWluZXIgdGV4dGFyZWEge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgb3V0bGluZTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udGFjdC1mb3JtIC5jb250YWluZXIgaW5wdXQ6cGxhY2Vob2xkZXItc2hvd24rbGFiZWwsXG4uY29udGFjdC1mb3JtIC5jb250YWluZXIgdGV4dGFyZWE6cGxhY2Vob2xkZXItc2hvd24rbGFiZWwge1xuICB0b3A6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udGFjdC1mb3JtIC5jb250YWluZXIgaW5wdXQ6Zm9jdXMrbGFiZWwsXG4uY29udGFjdC1mb3JtIC5jb250YWluZXIgdGV4dGFyZWE6Zm9jdXMrbGFiZWwge1xuICB0b3A6IC0xNnB4O1xuICBsZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIHBhZGRpbmc6IDAuNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jb250YWN0LWZvcm0gLmNvbnRhaW5lciBpbnB1dDpmb2N1czppbnZhbGlkK2xhYmVsLFxuLmNvbnRhY3QtZm9ybSAuY29udGFpbmVyIHRleHRhcmVhOmZvY3VzOmludmFsaWQrbGFiZWwsXG4uY29udGFjdC1mb3JtIC5jb250YWluZXIgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bik6aW52YWxpZCtsYWJlbCxcbi5jb250YWN0LWZvcm0gLmNvbnRhaW5lciB0ZXh0YXJlYTpub3QoOnBsYWNlaG9sZGVyLXNob3duKTppbnZhbGlkK2xhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLmNvbnRhY3QtZm9ybSAuY29udGFpbmVyIGlucHV0OmZvY3VzOmludmFsaWQsXG4uY29udGFjdC1mb3JtIC5jb250YWluZXIgdGV4dGFyZWE6Zm9jdXM6aW52YWxpZCxcbi5jb250YWN0LWZvcm0gLmNvbnRhaW5lciBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKTppbnZhbGlkLFxuLmNvbnRhY3QtZm9ybSAuY29udGFpbmVyIHRleHRhcmVhOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pOmludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5jb250YWN0LWZvcm0gLmNvbnRhaW5lciB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmNvbnRhY3QtZm9ybSAuc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xufVxuXG4uc3VibWl0OmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbi5zb2NpYWwtbWVkaWEge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ibG9jazogMjRweDtcbn1cblxuLnNvY2lhbC1tZWRpYSBhIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbjogNHB4O1xufVxuXG4uY29weXJpZ2h0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtO1xufVxuXG4ubGluayBpIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5saW5rOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTlweCkge1xuICAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwi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VTtFQUNWLFVBQVU7RUFDVixjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLFVBQVU7RUFDVixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTs7OztFQUlFLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7O0FBRUE7Ozs7RUFJRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1DQUFtQztFQUNuQyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0Usb0RBQW9EO0VBQ3REO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZGVlM2UzO1xcbiAgLS10ZXh0LWNvbG9yOiAjMzQzNDM0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDc1dmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE1cHg7XFxuICByaWdodDogMTVweDtcXG4gIHotaW5kZXg6IDI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDU2cHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IDAuMjVzIGFsbCBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNsaWRlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XFxuICBib3gtc2hhZG93OiAxMHB4IDAgY2FsYygxMHB4ICogNCkgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgdHJhbnNpdGlvbjogMC4yNXMgYWxsIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAuc2xpZGVyOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjhweCk7XFxuICBib3gtc2hhZG93OiBjYWxjKC0xMHB4KSAwIGNhbGMoMTBweCAqIDQpIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmFjdGl2ZSArIC5zbGlkZXI6OmFmdGVyIHtcXG4gIHdpZHRoOiA0OHB4O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDphY3RpdmUgKyAuc2xpZGVyOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tcHJpbWFyeS1jb2xvcikgMC43cHggMCAwLjJweCwgdmFyKC0tcHJpbWFyeS1jb2xvcikgLTAuN3B4IDAgMC4ycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI1JTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgY29sb3I6ICMwNTA1MDU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubmFtZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uam9iLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5pbWFnZXMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmhlYWRlci1pbWFnZXMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmhpbGwtb25lLFxcbi5oaWxsLXRocmVlLFxcbi5oaWxsLWZpdmUsXFxuLmhpbGwtdHdvLFxcbi5oaWxsLWZvdXIsXFxuLmhpbGwtc2l4IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAtMnB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmhpbGwtb25lIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5wZXJzb24ge1xcbiAgYm90dG9tOiAtMnB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWJvdXQtdGl0bGUsXFxuLnByb2plY3RzLXRpdGxlLFxcbi5jb250YWN0LXRpdGxlIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXQtc2VjdGlvbi1wYXJhZ3JhcGgge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDk1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luLWJsb2NrOiAyNHB4O1xcbn1cXG5cXG4uc2Nyb2xsZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgLXdlYmtpdC1tYXNrOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCB3aGl0ZSAyMCUsIHdoaXRlIDgwJSwgdHJhbnNwYXJlbnQpO1xcbiAgbWFzazogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgd2hpdGUgMjAlLCB3aGl0ZSA4MCUsIHRyYW5zcGFyZW50KTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5za2lsbHMtbGlzdCB7XFxuICBwYWRkaW5nLWJsb2NrOiAxNnB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnNraWxscy1saXN0IGkge1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luLXRvcDogMzJweDtcXG4gIG1hcmdpbi1ib3R0b206IC0zMnB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICBnYXA6IDY0cHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdC1iYWNrZ3JvdW5kLWRlY2xhcmF0aW9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ucHJvamVjdC1pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAyMHB4IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lcjpudGgtY2hpbGQob2RkKSAucHJvamVjdC1pbWcge1xcbiAgbGVmdDogLTU1cHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lcjpudGgtY2hpbGQoZXZlbikgLnByb2plY3QtaW1nIHtcXG4gIHJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDMwcHggMzBweDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyOm50aC1jaGlsZChvZGQpIC5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIHtcXG4gIHJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXI6bnRoLWNoaWxkKGV2ZW4pIC5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIHtcXG4gIGxlZnQ6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXI6bnRoLWNoaWxkKG9kZClcXG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lclxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXI6bnRoLWNoaWxkKGV2ZW4pXFxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXJcXG4ucHJvamVjdC10aXRsZSB7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0LWxpbmtzIGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luOiAyMHB4IDhweCAwIDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4taW5saW5lOiAyNHB4O1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSAuY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSAuY29udGFpbmVyIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTE2cHg7XFxuICBsZWZ0OiAxMHB4O1xcbiAgcGFkZGluZzogMC41cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSAuY29udGFpbmVyIGlucHV0LFxcbi5jb250YWN0LWZvcm0gLmNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgb3V0bGluZTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jb250YWN0LWZvcm0gLmNvbnRhaW5lciBpbnB1dDpwbGFjZWhvbGRlci1zaG93bitsYWJlbCxcXG4uY29udGFjdC1mb3JtIC5jb250YWluZXIgdGV4dGFyZWE6cGxhY2Vob2xkZXItc2hvd24rbGFiZWwge1xcbiAgdG9wOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jb250YWN0LWZvcm0gLmNvbnRhaW5lciBpbnB1dDpmb2N1cytsYWJlbCxcXG4uY29udGFjdC1mb3JtIC5jb250YWluZXIgdGV4dGFyZWE6Zm9jdXMrbGFiZWwge1xcbiAgdG9wOiAtMTZweDtcXG4gIGxlZnQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgcGFkZGluZzogMC41cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIC5jb250YWluZXIgaW5wdXQ6Zm9jdXM6aW52YWxpZCtsYWJlbCxcXG4uY29udGFjdC1mb3JtIC5jb250YWluZXIgdGV4dGFyZWE6Zm9jdXM6aW52YWxpZCtsYWJlbCxcXG4uY29udGFjdC1mb3JtIC5jb250YWluZXIgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bik6aW52YWxpZCtsYWJlbCxcXG4uY29udGFjdC1mb3JtIC5jb250YWluZXIgdGV4dGFyZWE6bm90KDpwbGFjZWhvbGRlci1zaG93bik6aW52YWxpZCtsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSAuY29udGFpbmVyIGlucHV0OmZvY3VzOmludmFsaWQsXFxuLmNvbnRhY3QtZm9ybSAuY29udGFpbmVyIHRleHRhcmVhOmZvY3VzOmludmFsaWQsXFxuLmNvbnRhY3QtZm9ybSAuY29udGFpbmVyIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pOmludmFsaWQsXFxuLmNvbnRhY3QtZm9ybSAuY29udGFpbmVyIHRleHRhcmVhOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pOmludmFsaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIC5jb250YWluZXIgdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSAuc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xcbn1cXG5cXG4uc3VibWl0OmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJsb2NrOiAyNHB4O1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhIGEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW46IDRweDtcXG59XFxuXFxuLmNvcHlyaWdodCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtO1xcbn1cXG5cXG4ubGluayBpIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4ubGluazphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5OXB4KSB7XFxuICAucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHBhcmFsbGF4LCByZXNwb25zaXZlU2l6ZUFkanVzdG1lbnQsIGluZmluaXRlU2Nyb2xsIH0gZnJvbSAnLi92aXN1YWxFZmZlY3RzLmpzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGhpbGxPbmVMaWdodEltZ1NyYyBmcm9tICcuL2ltYWdlcy9oaWxsLW9uZS1saWdodC5wbmcnO1xuaW1wb3J0IGhpbGxPbmVJbWdTcmMgZnJvbSAnLi9pbWFnZXMvaGlsbC1vbmUucG5nJztcbmltcG9ydCBoaWxsVHdvTGlnaHRJbWdTcmMgZnJvbSAnLi9pbWFnZXMvaGlsbC10d28tbGlnaHQucG5nJztcbmltcG9ydCBoaWxsVHdvSW1nU3JjIGZyb20gJy4vaW1hZ2VzL2hpbGwtdHdvLnBuZyc7XG5pbXBvcnQgaGlsbFRocmVlTGlnaHRJbWdTcmMgZnJvbSAnLi9pbWFnZXMvaGlsbC10aHJlZS1saWdodC5wbmcnO1xuaW1wb3J0IGhpbGxUaHJlZUltZ1NyYyBmcm9tICcuL2ltYWdlcy9oaWxsLXRocmVlLnBuZyc7XG5pbXBvcnQgaGlsbEZvdXJMaWdodEltZ1NyYyBmcm9tICcuL2ltYWdlcy9oaWxsLWZvdXItbGlnaHQucG5nJztcbmltcG9ydCBoaWxsRm91ckltZ1NyYyBmcm9tICcuL2ltYWdlcy9oaWxsLWZvdXIucG5nJztcbmltcG9ydCBwZXJzb25MaWdodEltZ1NyYyBmcm9tICcuL2ltYWdlcy9wZXJzb24tbGlnaHQucG5nJztcbmltcG9ydCBwZXJzb25JbWdTcmMgZnJvbSAnLi9pbWFnZXMvcGVyc29uLnBuZyc7XG5pbXBvcnQgd2VhdGhlckFwcEltZ1NyYyBmcm9tICcuL2ltYWdlcy93ZWF0aGVyLWFwcC5qcGcnO1xuaW1wb3J0IGJhdHRsZXNoaXBJbWdTcmMgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcC5qcGcnO1xuaW1wb3J0IHRvZG9MaXN0SW1nU3JjIGZyb20gJy4vaW1hZ2VzL3RvZG8tbGlzdC5qcGcnO1xuaW1wb3J0IGxpYnJhcnlJbWdTcmMgZnJvbSAnLi9pbWFnZXMvbGlicmFyeS5qcGcnO1xuaW1wb3J0IGNhbGN1bGF0b3JJbWdTcmMgZnJvbSAnLi9pbWFnZXMvY2FsY3VsYXRvci5qcGcnO1xuaW1wb3J0IGV0Y2hBU2tldGNoSW1nU3JjIGZyb20gJy4vaW1hZ2VzL2V0Y2gtYS1za2V0Y2guanBnJztcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5jb25zdCBoZWFkZXJUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZWFkZXJUZXh0Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdoZWFkZXItY29udGFpbmVyJztcblxuY29uc3QgdGhlbWVTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xudGhlbWVTd2l0Y2guY2xhc3NOYW1lID0gJ3N3aXRjaCc7XG5cbmNvbnN0IHRoZW1lU3dpdGNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xudGhlbWVTd2l0Y2hJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbnRoZW1lU3dpdGNoSW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSk7XG50aGVtZVN3aXRjaElucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdEYXJrIHRoZW1lJyk7XG5cbmNvbnN0IHRoZW1lU3dpdGNoU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbnRoZW1lU3dpdGNoU3Bhbi5jbGFzc05hbWUgPSAnc2xpZGVyJztcblxuY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5uYW1lLnRleHRDb250ZW50ID0gJ0xBWVRIIEFMUUFESEknO1xubmFtZS5jbGFzc0xpc3QgPSAnbmFtZSc7XG5jb25zdCBqb2JUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5qb2JUaXRsZS50ZXh0Q29udGVudCA9ICdXZWIgRGV2ZWxvcGVyJztcbmpvYlRpdGxlLmNsYXNzTGlzdCA9ICdqb2ItdGl0bGUnO1xuXG5mdW5jdGlvbiBjcmVhdGVJbWFnZShzcmMsIGNsYXNzTmFtZSkge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNyYyA9IHNyYztcbiAgaW1nLmNsYXNzTGlzdCA9IGNsYXNzTmFtZSArICcgaGVhZGVyLWltYWdlcyc7XG4gIGltZy5sb2FkaW5nID0gJ2xhenknO1xuICByZXR1cm4gaW1nO1xufVxuXG5jb25zdCBpbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmltYWdlc0NvbnRhaW5lci5jbGFzc0xpc3QgPSAnaW1hZ2VzLWNvbnRhaW5lcic7XG5pbWFnZXNDb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbmNvbnN0IGhpbGxPbmVJbWcgPSBjcmVhdGVJbWFnZShoaWxsT25lTGlnaHRJbWdTcmMsICdoaWxsLW9uZScpO1xuY29uc3QgaGlsbFR3b0ltZyA9IGNyZWF0ZUltYWdlKGhpbGxUd29MaWdodEltZ1NyYywgJ2hpbGwtdHdvJyk7XG5jb25zdCBoaWxsVGhyZWVJbWcgPSBjcmVhdGVJbWFnZShoaWxsVGhyZWVMaWdodEltZ1NyYywgJ2hpbGwtdGhyZWUnKTtcbmNvbnN0IGhpbGxGb3VySW1nID0gY3JlYXRlSW1hZ2UoaGlsbEZvdXJMaWdodEltZ1NyYywgJ2hpbGwtZm91cicpO1xuY29uc3QgcGVyc29uSW1nID0gY3JlYXRlSW1hZ2UocGVyc29uTGlnaHRJbWdTcmMsICdwZXJzb24nKTtcblxudGhlbWVTd2l0Y2guYXBwZW5kKHRoZW1lU3dpdGNoSW5wdXQsIHRoZW1lU3dpdGNoU3Bhbik7XG5pbWFnZXNDb250YWluZXIuYXBwZW5kKGhpbGxPbmVJbWcsIGhpbGxUd29JbWcsIGhpbGxUaHJlZUltZywgaGlsbEZvdXJJbWcsIHBlcnNvbkltZyk7XG5oZWFkZXJUZXh0Q29udGFpbmVyLmFwcGVuZChuYW1lLCBqb2JUaXRsZSk7XG5oZWFkZXIuYXBwZW5kKHRoZW1lU3dpdGNoLCBpbWFnZXNDb250YWluZXIsIGhlYWRlclRleHRDb250YWluZXIpO1xuXG5mdW5jdGlvbiBjcmVhdGVTZWN0aW9uKHRhZ05hbWUsIGNsYXNzTmFtZSwgdGl0bGVUZXh0LCBvcmRlclRleHQpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gIHNlY3Rpb24uY2xhc3NMaXN0ID0gY2xhc3NOYW1lO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XG4gIHRpdGxlLmNsYXNzTGlzdCA9IGAke2NsYXNzTmFtZX0tdGl0bGVgO1xuXG4gIHNlY3Rpb24uYXBwZW5kKHRpdGxlKTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cblxuY29uc3QgYWJvdXRTZWN0aW9uID0gY3JlYXRlU2VjdGlvbignc2VjdGlvbicsICdhYm91dCcsICdBYm91dCcpO1xuY29uc3QgYWJvdXRTZWN0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuYWJvdXRTZWN0aW9uUGFyYWdyYXBoLmNsYXNzTGlzdCA9ICdhYm91dC1zZWN0aW9uLXBhcmFncmFwaCc7XG5hYm91dFNlY3Rpb25QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIkEgc2VsZi10YXVnaHQgd2ViIGRldmVsb3BlciBvbiBhIHBlcnBldHVhbCBsZWFybmluZyBqb3VybmV5LiBJIGZpcm1seSBiZWxpZXZlIHRoYXQgaW4gdGhlIGZhY2Ugb2YgZG91YnQsIHNlbGYtYmVsaWVmIGJlY29tZXMgb3VyIG1vc3QgdmFsdWFibGUgYXNzZXQuIE15IHBhc3Npb24gZm9yIGNvZGluZyBiZWdhbiBhcyBhIHBlcnNvbmFsIGNoYWxsZW5nZSwgYW5kIGl0IGhhcyBncm93biBpbnRvIGEgcGF0aCBvZiBzZWxmLWltcHJvdmVtZW50IGFuZCBjcmVhdGl2aXR5LiBJIHRocml2ZSBvbiB0aGUgZW5kbGVzcyBwb3NzaWJpbGl0aWVzIHRoYXQgdGhlIHdvcmxkIG9mIHdlYiBkZXZlbG9wbWVudCBvZmZlcnMsIGFuZCBJJ20gY29tbWl0dGVkIHRvIGNyYWZ0aW5nIGlubm92YXRpdmUgZGlnaXRhbCBleHBlcmllbmNlcy5cIjtcblxuY29uc3Qgc2Nyb2xsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNjcm9sbGVyLmNsYXNzTGlzdCA9ICdzY3JvbGxlcic7XG5zY3JvbGxlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUljb24oaWNvbkNsYXNzKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpY29uLmNsYXNzTGlzdCA9IGljb25DbGFzcztcbiAgICByZXR1cm4gaWNvbjtcbn1cblxuY29uc3Qgc2tpbGxzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2tpbGxzTGlzdC5jbGFzc0xpc3QgPSAnc2tpbGxzLWxpc3QnO1xuXG5jb25zdCBpY29ucyA9IFtcbiAgICAnZGV2aWNvbi1naXQtcGxhaW4nLCAnZGV2aWNvbi1naXRodWItcGxhaW4nLCAnZGV2aWNvbi1odG1sNS1wbGFpbicsXG4gICAgJ2Rldmljb24tY3NzMy1wbGFpbicsICdkZXZpY29uLWphdmFzY3JpcHQtcGxhaW4nLCAnZGV2aWNvbi1qZXN0LXBsYWluJyxcbiAgICAnZGV2aWNvbi1iYWJlbC1wbGFpbicsICdkZXZpY29uLXdlYnBhY2stcGxhaW4nLCAnZGV2aWNvbi1ucG0tcGxhaW4nLFxuICAgICdkZXZpY29uLWZpZ21hLXBsYWluJywgJ2Rldmljb24tcGhvdG9zaG9wLXBsYWluJywgJ2Rldmljb24taWxsdXN0cmF0b3ItcGxhaW4nXG5dO1xuXG5jb25zdCBpY29uRWxlbWVudHMgPSBpY29ucy5tYXAoaWNvbkNsYXNzID0+IGNyZWF0ZUljb24oaWNvbkNsYXNzKSk7XG5jb25zdCBpY29uRWxlbWVudENsb25lcyA9IGljb25zLm1hcChpY29uQ2xhc3MgPT4gY3JlYXRlSWNvbihpY29uQ2xhc3MpKTtcblxuc2tpbGxzTGlzdC5hcHBlbmQoLi4uaWNvbkVsZW1lbnRzLCAuLi5pY29uRWxlbWVudENsb25lcyk7XG5zY3JvbGxlci5hcHBlbmQoc2tpbGxzTGlzdCk7XG5hYm91dFNlY3Rpb24uYXBwZW5kKGFib3V0U2VjdGlvblBhcmFncmFwaCwgc2Nyb2xsZXIpO1xuXG5jb25zdCBwcm9qZWN0c1NlY3Rpb24gPSBjcmVhdGVTZWN0aW9uKCdzZWN0aW9uJywgJ3Byb2plY3RzJywgJ1Byb2plY3RzJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDb250YWluZXIoaW1nU3JjLCBpbWdBbHQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcmVwb3NpdG9yeSwgcHJldmlldykge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0ID0gJ3Byb2plY3QtY29udGFpbmVyJztcbiAgY29uc3QgcHJvamVjdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBwcm9qZWN0SW1nLmNsYXNzTGlzdCA9ICdwcm9qZWN0LWltZyc7XG5cbiAgcHJvamVjdEltZy5zcmMgPSBpbWdTcmM7XG4gIHByb2plY3RJbWcuYWx0ID0gaW1nQWx0O1xuICBwcm9qZWN0SW1nLmxvYWRpbmcgPSAnbGF6eSc7XG5cbiAgY29uc3QgcHJvamVjdERldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdERldGFpbHNDb250YWluZXIuY2xhc3NMaXN0ID0gJ3Byb2plY3QtZGV0YWlscy1jb250YWluZXInO1xuXG4gIGNvbnN0IHByb2plY3RCYWNrZ3JvdW5kRGVjbGFyYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdEJhY2tncm91bmREZWNsYXJhdGlvbi5jbGFzc0xpc3QgPSAncHJvamVjdC1iYWNrZ3JvdW5kLWRlY2xhcmF0aW9uJztcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0ID0gJ3Byb2plY3QtdGl0bGUnO1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QgPSAncHJvamVjdC1kZXNjcmlwdGlvbic7XG4gIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IHByb2plY3RMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0TGlua3MuY2xhc3NMaXN0ID0gJ3Byb2plY3QtbGlua3MnO1xuXG4gIGNvbnN0IHByZXZpZXdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBwcmV2aWV3TGluay50ZXh0Q29udGVudCA9ICdMaXZlIHByZXZpZXcnO1xuICBwcmV2aWV3TGluay5ocmVmID0gcHJldmlldztcbiAgcHJldmlld0xpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gIHByZXZpZXdMaW5rLmNsYXNzTGlzdCA9ICdsaW5rJztcblxuICBjb25zdCBwcmV2aWV3SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgcHJldmlld0ljb24udGV4dENvbnRlbnQgPSAnYXJyb3dfb3V0d2FyZCc7XG4gIHByZXZpZXdJY29uLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgcHJldmlld0ljb24uY2xhc3NMaXN0ID0gJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnO1xuXG4gIGNvbnN0IHJlcG9zaXRvcnlMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICByZXBvc2l0b3J5TGluay5ocmVmID0gcmVwb3NpdG9yeTtcbiAgcmVwb3NpdG9yeUxpbmsudGV4dENvbnRlbnQgPSAnVmlldyBjb2RlJztcbiAgcmVwb3NpdG9yeUxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gIHJlcG9zaXRvcnlMaW5rLmNsYXNzTGlzdCA9ICdsaW5rJztcblxuICBjb25zdCByZXBvc2l0b3J5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgcmVwb3NpdG9yeUljb24udGV4dENvbnRlbnQgPSAnYXJyb3dfb3V0d2FyZCc7XG4gIHJlcG9zaXRvcnlJY29uLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgcmVwb3NpdG9yeUljb24uY2xhc3NMaXN0ID0gJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnO1xuXG4gIHByZXZpZXdMaW5rLmFwcGVuZChwcmV2aWV3SWNvbik7XG4gIHJlcG9zaXRvcnlMaW5rLmFwcGVuZChyZXBvc2l0b3J5SWNvbik7XG4gIHByb2plY3RMaW5rcy5hcHBlbmQocHJldmlld0xpbmssIHJlcG9zaXRvcnlMaW5rKTtcbiAgcHJvamVjdERldGFpbHNDb250YWluZXIuYXBwZW5kKHByb2plY3RUaXRsZSwgcHJvamVjdERlc2NyaXB0aW9uLCBwcm9qZWN0TGlua3MpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0QmFja2dyb3VuZERlY2xhcmF0aW9uLCBwcm9qZWN0SW1nLCAgcHJvamVjdERldGFpbHNDb250YWluZXIpO1xuXG4gIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufVxuXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0ID0gJ3Byb2plY3RzLWNvbnRhaW5lcic7XG5cbmNvbnN0IHByb2plY3RDb250YWluZXIxID0gY3JlYXRlUHJvamVjdENvbnRhaW5lcih3ZWF0aGVyQXBwSW1nU3JjLFxuICAnV2VhdGhlciBhcHBsaWNhdGlvbicsXG4gICdXZWF0aGVyIGFwcCcsXG4gICdBIHdlYiBhcHBsaWNhdGlvbiB0aGF0IGFsbG93cyB1c2VycyB0byBjaGVjayB0aGUgd2VhdGhlciBmb3JlY2FzdCBmb3IgYSBzcGVjaWZpYyBsb2NhdGlvbi4gSXQgdXRpbGl6ZXMgdGhlIFdlYXRoZXJBUEkgdG8gZmV0Y2ggd2VhdGhlciBkYXRhIGFuZCBwcm92aWRlcyB1c2VycyB3aXRoIGRldGFpbGVkIHdlYXRoZXIgaW5mb3JtYXRpb24gZm9yIHRoZSBjdXJyZW50IGRheSBhbmQgdGhlIG5leHQgdHdvIGRheXMuJyxcbiAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9MYXl0aEFscWFkaGkvd2VhdGhlci1hcHAnLFxuICAnaHR0cHM6Ly9MYXl0aEFscWFkaGkuZ2l0aHViLmlvL3dlYXRoZXItYXBwJyk7XG5jb25zdCBwcm9qZWN0Q29udGFpbmVyMiA9IGNyZWF0ZVByb2plY3RDb250YWluZXIoYmF0dGxlc2hpcEltZ1NyYyxcbiAgJ0JhdHRsZXNoaXAgZ2FtZScsXG4gICdCYXR0bGVzaGlwJyxcbiAgJ0Egd2ViIGFwcGxpY2F0aW9uIGNvbnRhaW5zIGEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgY2xhc3NpYyBnYW1lIEJhdHRsZXNoaXAuIEl0IGZvY3VzZXMgb24gVGVzdCBEcml2ZW4gRGV2ZWxvcG1lbnQgKFRERCkgcHJpbmNpcGxlcy4nLFxuICAnaHR0cHM6Ly9naXRodWIuY29tL0xheXRoQWxxYWRoaS9iYXR0bGVzaGlwJyxcbiAgJ2h0dHBzOi8vTGF5dGhBbHFhZGhpLmdpdGh1Yi5pby9iYXR0bGVzaGlwJyk7XG5jb25zdCBwcm9qZWN0Q29udGFpbmVyMyA9IGNyZWF0ZVByb2plY3RDb250YWluZXIodG9kb0xpc3RJbWdTcmMsXG4gICdUby1kbyBhcHBsaWNhdGlvbicsXG4gICdUby1kbyBsaXN0JyxcbiAgJ0Egd2ViIGFwcGxpY2F0aW9uIHRoYXQgYWxsb3dzIHVzZXJzIHRvIGNyZWF0ZSBhIHRvLWRvIGxpc3QuIFVzZXJzIGNhbiBhZGQgbmV3IHRhc2tzLCBtYXJrIHRoZW0gYXMgY29tcGxldGVkLCBhbmQgZGVsZXRlIHRoZW0uJyxcbiAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9MYXl0aEFscWFkaGkvdG8tZG8tbGlzdCcsXG4gICdodHRwczovL0xheXRoQWxxYWRoaS5naXRodWIuaW8vdG8tZG8tbGlzdCcpO1xuY29uc3QgcHJvamVjdENvbnRhaW5lcjQgPSBjcmVhdGVQcm9qZWN0Q29udGFpbmVyKGxpYnJhcnlJbWdTcmMsXG4gICdMaWJyYXJ5IGFwcGxpY2F0aW9uJyxcbiAgJ0xpYnJhcnknLFxuICAnQSB3ZWIgYXBwbGljYXRpb24gdGhhdCBhbGxvd3MgdXNlcnMgdG8gY3JlYXRlIGEgcGVyc29uYWwgYm9vayBsaWJyYXJ5LiBVc2VycyBjYW4gZW50ZXIgdGhlIHRpdGxlLCBhdXRob3IsIG51bWJlciBvZiBwYWdlcywgYW5kIHNlbGVjdCB3aGV0aGVyIHRoZXkgaGF2ZSByZWFkIHRoZSBib29rIG9yIG5vdC4gVGhlIGVudGVyZWQgYm9vayBkZXRhaWxzIGFyZSBkaXNwbGF5ZWQgaW4gYSB0YWJsZSwgd2hlcmUgdXNlcnMgY2FuIGFsc28gbWFyayBib29rcyBhcyByZWFkIG9yIG5vdCByZWFkLCBhcyB3ZWxsIGFzIHJlbW92ZSBib29rcyBmcm9tIHRoZSBsaWJyYXJ5LicsXG4gICdodHRwczovL2dpdGh1Yi5jb20vTGF5dGhBbHFhZGhpL2xpYnJhcnknLFxuICAnaHR0cHM6Ly9MYXl0aEFscWFkaGkuZ2l0aHViLmlvL2xpYnJhcnknKTtcbmNvbnN0IHByb2plY3RDb250YWluZXI1ID0gY3JlYXRlUHJvamVjdENvbnRhaW5lcihjYWxjdWxhdG9ySW1nU3JjLFxuICAnQ2FsY3VsYXRvciBhcHBsaWNhdGlvbicsXG4gICdDYWxjdWxhdG9yJyxcbiAgJ0EgY2FsY3VsYXRvciBhcHBsaWNhdGlvbiB0aGF0IHByb3ZpZGVzIGJhc2ljIGFyaXRobWV0aWMgb3BlcmF0aW9ucyBzdWNoIGFzIGFkZGl0aW9uLCBzdWJ0cmFjdGlvbiwgbXVsdGlwbGljYXRpb24sIGFuZCBkaXZpc2lvbi4gVGhlIGNhbGN1bGF0b3IgaGFzIGEgcmVzcG9uc2l2ZSB1c2VyIGludGVyZmFjZSBhbmQgc3VwcG9ydHMga2V5Ym9hcmQgaW5wdXQuJyxcbiAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9MYXl0aEFscWFkaGkvY2FsY3VsYXRvcicsXG4gICdodHRwczovL0xheXRoQWxxYWRoaS5naXRodWIuaW8vY2FsY3VsYXRvcicpO1xuY29uc3QgcHJvamVjdENvbnRhaW5lcjYgPSBjcmVhdGVQcm9qZWN0Q29udGFpbmVyKGV0Y2hBU2tldGNoSW1nU3JjLFxuICAnRXRjaCBhIHNrZXRjaCBnYW1lJyxcbiAgJ0V0Y2ggYSBza2V0Y2gnLFxuICAnQSB3ZWIgYXBwbGljYXRpb24gdGhhdCBhbGxvd3MgeW91IHRvIGRyYXcgb24gYSBncmlkIG9mIGJveGVzIGJ5IGNoYW5naW5nIHRoZWlyIGNvbG9ycy4gWW91IGNhbiBjaG9vc2UgdGhlIHNpemUgb2YgdGhlIGdyaWQsIHN3aXRjaCBiZXR3ZWVuIGRpZmZlcmVudCBkcmF3aW5nIG1vZGVzIChCJlcsIFJhbmRvbSwgRGVsZXRlKSwgYW5kIGNsZWFyIHRoZSBkcmF3aW5nLicsXG4gICdodHRwczovL2dpdGh1Yi5jb20vTGF5dGhBbHFhZGhpL2V0Y2gtYS1za2V0Y2gnLFxuICAnaHR0cHM6Ly9MYXl0aEFscWFkaGkuZ2l0aHViLmlvL2V0Y2gtYS1za2V0Y2gnKTtcblxucHJvamVjdHNDb250YWluZXIuYXBwZW5kKHByb2plY3RDb250YWluZXIxLCBwcm9qZWN0Q29udGFpbmVyMiwgcHJvamVjdENvbnRhaW5lcjMsIHByb2plY3RDb250YWluZXI0LCBwcm9qZWN0Q29udGFpbmVyNSwgcHJvamVjdENvbnRhaW5lcjYpO1xucHJvamVjdHNTZWN0aW9uLmFwcGVuZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cbmNvbnN0IGZvb3RlciA9IGNyZWF0ZVNlY3Rpb24oJ2Zvb3RlcicsICdjb250YWN0JywgJ0NvbnRhY3QnKTtcbmNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9vdGVyQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdmb290ZXItY29udGFpbmVyJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmZvcm0uY2xhc3NMaXN0ID0gJ2NvbnRhY3QtZm9ybSc7XG5mb3JtLmFjdGlvbiA9ICcjJztcbmZvcm0ubWV0aG9kID0gJ1BPU1QnO1xuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dENvbnRhaW5lcih0YWdOYW1lLCB0eXBlLCBpZCwgY29udGVudCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdCA9ICdjb250YWluZXInO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgaW5wdXQucGxhY2Vob2xkZXIgPSAn4oCOJztcbiAgaW5wdXQuaWQgPSBpZDtcbiAgaW5wdXQubmFtZSA9IGlkO1xuICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgMyk7XG5cbiAgaWYgKGlkID09PSAnZW1haWwnKSB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwYXR0ZXJuJywgJ1thLXpBLVowLTkuXyUrLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Mix9Jyk7XG4gIH1cblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLmh0bWxGb3IgPSBpZDtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBjb250ZW50O1xuXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uY2xhc3NMaXN0ID0gYCR7aWR9RXJyb3IgZXJyb3JgO1xuXG4gIGNvbnRhaW5lci5hcHBlbmQoaW5wdXQsIGxhYmVsLCBzcGFuKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBuYW1lQ29udGFpbmVyID0gY3JlYXRlSW5wdXRDb250YWluZXIoJ2lucHV0JywgJ3RleHQnLCAnbmFtZScsICdOYW1lJyk7XG5jb25zdCBlbWFpbENvbnRhaW5lciA9IGNyZWF0ZUlucHV0Q29udGFpbmVyKCdpbnB1dCcsICd0ZXh0JywgJ2VtYWlsJywgJ0VtYWlsJyk7XG5jb25zdCBtZXNzYWdlQ29udGFpbmVyID0gY3JlYXRlSW5wdXRDb250YWluZXIoJ3RleHRhcmVhJywgJ3RleHQnLCAnbWVzc2FnZScsICdNZXNzYWdlJyk7XG5cbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbnN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuc3VibWl0QnV0dG9uLmNsYXNzTGlzdCA9ICdzdWJtaXQnO1xuXG5jb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb3B5cmlnaHQudGV4dENvbnRlbnQgPSAnwqkgMjAyMyBMYXl0aCBBbHFhZGhpJztcbmNvcHlyaWdodC5jbGFzc0xpc3QgPSAnY29weXJpZ2h0JztcblxuZnVuY3Rpb24gY3JlYXRlTGluayhocmVmLCB0ZXh0Q29udGVudCkge1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBsaW5rLmhyZWYgPSBocmVmO1xuICBsaW5rLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gIGxpbmsuY2xhc3NMaXN0ID0gJ2xpbmsnO1xuXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGljb24udGV4dENvbnRlbnQgPSAnYXJyb3dfb3V0d2FyZCc7XG4gIGljb24uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICBpY29uLmNsYXNzTGlzdCA9ICdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJztcblxuICBsaW5rLmFwcGVuZChpY29uKTtcbiAgcmV0dXJuIGxpbms7XG59XG5cbmNvbnN0IHNvY2lhbE1lZGlhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zb2NpYWxNZWRpYUNvbnRhaW5lci5jbGFzc0xpc3QgPSAnc29jaWFsLW1lZGlhJztcblxuY29uc3QgY29udGFjdExpbmtlZGluTGluayA9IGNyZWF0ZUxpbmsoJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbScsICdMaW5rZWRpbicpO1xuY29uc3QgY29udGFjdEdpdGh1YkxpbmsgPSBjcmVhdGVMaW5rKCdodHRwczovL2dpdGh1Yi5jb20vTGF5dGhBbHFhZGhpJywgJ0dpdGh1YicpO1xuXG5jb25zdCBvcGVuU291cmNlTGluayA9IGNyZWF0ZUxpbmsoJ2h0dHBzOi8vZ2l0aHViLmNvbS9MYXl0aEFscWFkaGkvcGVyc29uYWwtcG9ydGZvbGlvJywgJ015IHBvcnRmb2xpbyBpcyBvcGVuIHNvdXJjZScpO1xuXG5zb2NpYWxNZWRpYUNvbnRhaW5lci5hcHBlbmQoY29udGFjdExpbmtlZGluTGluaywgY29udGFjdEdpdGh1YkxpbmspO1xuZm9vdGVyQ29udGFpbmVyLmFwcGVuZChmb3JtLCBzb2NpYWxNZWRpYUNvbnRhaW5lciwgY29weXJpZ2h0LCBvcGVuU291cmNlTGluaylcbmZvcm0uYXBwZW5kKG5hbWVDb250YWluZXIsIGVtYWlsQ29udGFpbmVyLCBtZXNzYWdlQ29udGFpbmVyLCBzdWJtaXRCdXR0b24pO1xuZm9vdGVyLmFwcGVuZChmb290ZXJDb250YWluZXIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyLCBhYm91dFNlY3Rpb24sIHByb2plY3RzU2VjdGlvbiwgZm9vdGVyKTtcblxucGFyYWxsYXgoaGlsbE9uZUltZywgMC4wODUpO1xucGFyYWxsYXgoaGlsbFR3b0ltZywgMC4wNjUpO1xucGFyYWxsYXgoaGlsbFRocmVlSW1nLCAwLjA0NSk7XG5wYXJhbGxheChoaWxsRm91ckltZywgMC4wMjUpO1xuXG5jb25zdCBwcm9qZWN0RGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyJyk7XG5wcm9qZWN0RGV0YWlsc0NvbnRhaW5lci5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XG4gIHBhcmFsbGF4KGNvbnRhaW5lciwgLTAuMDAzKTtcbn0pXG5cbmNvbnN0IHByb2plY3RJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1pbWcnKTtcbnByb2plY3RJbWFnZXMuZm9yRWFjaChpbWcgPT4ge1xuICBwYXJhbGxheChpbWcsIDAuMDAyKTtcbn0pO1xuXG5sZXQgaXNEYXJrVGhlbWUgPSBmYWxzZTtcblxudGhlbWVTd2l0Y2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gIGlzRGFya1RoZW1lID0gIWlzRGFya1RoZW1lO1xuICBzd2l0Y2hEYXJrVGhlbWUoKTtcbn0pO1xuXG5mdW5jdGlvbiBzd2l0Y2hEYXJrVGhlbWUoKSB7XG4gIGNvbnN0IGltYWdlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyLWltYWdlcycpO1xuXG4gIGltYWdlRWxlbWVudHMuZm9yRWFjaChpbWcgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTcmMgPSBpbWcuc3JjO1xuICAgIGNvbnN0IG5ld1NyYyA9IGlzRGFya1RoZW1lID8gY3VycmVudFNyYy5yZXBsYWNlKCctbGlnaHQucG5nJywgJy5wbmcnKSA6IGN1cnJlbnRTcmMucmVwbGFjZSgnLnBuZycsICctbGlnaHQucG5nJyk7XG4gICAgaW1nLnNyYyA9IG5ld1NyYztcbiAgfSk7XG5cbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5LWNvbG9yJywgaXNEYXJrVGhlbWUgPyAnI2UyZTJlMicgOiAnI2ZmZmZmZicpO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KCctLXNlY29uZGFyeS1jb2xvcicsIGlzRGFya1RoZW1lID8gJyMzNDM0MzQnIDogJyNkZWUzZTMnKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10ZXh0LWNvbG9yJywgaXNEYXJrVGhlbWUgPyAnI2UyZTJlMicgOiAnIzM0MzQzNCcpO1xufVxuXG5jb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItaW1hZ2VzJyk7XG5lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICByZXNwb25zaXZlU2l6ZUFkanVzdG1lbnQoZWxlbWVudCwgJ2hlaWdodCcsIDUyNSk7XG59KVxuXG5pbmZpbml0ZVNjcm9sbChza2lsbHNMaXN0LCB7IHNjcm9sbFN0ZXA6IDAuMDM1LCBtYXhTY3JvbGxMaW1pdDogNTAsIHRyYW5zaXRpb25UeXBlOiAndHJhbnNsYXRlWCcgfSk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn0pOyIsImV4cG9ydCBmdW5jdGlvbiBwYXJhbGxheChlbGVtZW50U2VsZWN0b3IsIHNwZWVkID0gMC4wMjUsIHByb3BlcnR5ID0gJ3RyYW5zbGF0ZVknKSB7XG4gIGxldCByZXF1ZXN0SWQ7XG5cbiAgZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoKSB7XG4gICAgbGV0IHNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGxldCB2aWV3cG9ydFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICBsZXQgYWRqdXN0ZWRTcGVlZCA9IHNwZWVkICogKHZpZXdwb3J0V2lkdGggLyAxMDApO1xuXG4gICAgbGV0IGVhc2VPdXRPZmZzZXQgPSBzY3JvbGwgKiBhZGp1c3RlZFNwZWVkICogKDEgLSBNYXRoLmV4cCgtc2Nyb2xsIC8gMzAwKSk7XG5cbiAgICBpZiAoc2Nyb2xsIDw9IDEpIHtcbiAgICAgIGVsZW1lbnRTZWxlY3Rvci5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnRTZWxlY3Rvci5zdHlsZS50cmFuc2Zvcm0gPSBgJHtwcm9wZXJ0eX0oJHtlYXNlT3V0T2Zmc2V0fXB4KWA7XG4gICAgfVxuXG4gICAgcmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVBhcmFsbGF4KTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXJlcXVlc3RJZCkge1xuICAgICAgcmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVBhcmFsbGF4KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgIGlmIChlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICBpZiAoIXJlcXVlc3RJZCkge1xuICAgICAgICByZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUGFyYWxsYXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SWQpO1xuICAgICAgcmVxdWVzdElkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSk7XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50U2VsZWN0b3IpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzcG9uc2l2ZVNpemVBZGp1c3RtZW50KGVsZW1lbnQsIHByb3BlcnR5LCBwZXJmZWN0U2NyZWVuV2lkdGgsIHNpemVDaGFuZ2UgPSAwKSB7XG4gICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIGNvbnN0IGFkanVzdGVkV2lkdGggPSBNYXRoLmZsb29yKChzY3JlZW5XaWR0aCAvIHBlcmZlY3RTY3JlZW5XaWR0aCkgKiAoMTAwICsgc2l6ZUNoYW5nZSkpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gYWRqdXN0ZWRXaWR0aCArICclJztcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZmluaXRlU2Nyb2xsKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgY3VycmVudFNjcm9sbFBvc2l0aW9uID0gMDtcblxuICBjb25zdCBzY3JvbGxTdGVwID0gb3B0aW9ucy5zY3JvbGxTdGVwIHx8IDAuMTtcbiAgY29uc3QgbWF4U2Nyb2xsTGltaXQgPSBvcHRpb25zLm1heFNjcm9sbExpbWl0IHx8IDUwO1xuICBjb25zdCB0cmFuc2l0aW9uVHlwZSA9IG9wdGlvbnMudHJhbnNpdGlvblR5cGUgfHwgXCJ0cmFuc2xhdGVYXCI7XG4gIGxldCBpc0FuaW1hdGluZyA9IHRydWU7XG5cbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBpZiAoIWlzQW5pbWF0aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGN1cnJlbnRTY3JvbGxQb3NpdGlvbiArPSBzY3JvbGxTdGVwO1xuICAgIGlmIChjdXJyZW50U2Nyb2xsUG9zaXRpb24gPiBtYXhTY3JvbGxMaW1pdCkge1xuICAgICAgY3VycmVudFNjcm9sbFBvc2l0aW9uID0gMDtcbiAgICB9XG5cbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zaXRpb25UeXBlfSgtJHtjdXJyZW50U2Nyb2xsUG9zaXRpb259JSlgO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfVxuXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgIGlmIChlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICBpc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICBhbmltYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/tishchenko/Desktop/Projects/Archive/School/Internal Assessment (copy)/frontend/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "NUXy":
    /*!**********************************************!*\
      !*** ./src/app/results/results.component.ts ***!
      \**********************************************/

    /*! exports provided: floatValidator, ResultsComponent */

    /***/
    function NUXy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "floatValidator", function () {
        return floatValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultsComponent", function () {
        return ResultsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function ResultsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have errors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please fix the errors in the images");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResultsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading results...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please wait a second...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResultsComponent_div_2_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not a decimal with a dot as separator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResultsComponent_div_2_mat_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not a decimal with a dot as separator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResultsComponent_div_2_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not a decimal with a dot as separator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResultsComponent_div_2_p_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Used vials: ", ctx_r7.usedVials, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Dilutant volume: ", ctx_r7.dilutantVolume, " ml");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Dilutant per vial: ", ctx_r7.dilutantPerVial, " ml");
        }
      }

      function ResultsComponent_div_2_p_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " To calculate the optimal way to distribute cells into vials, please enter the above parameters with a dot (.) decimal separator. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResultsComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Measurement results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Estimated cell concentration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cells per 16th of image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cell distribution into vials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Volume of suspension (ml)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ResultsComponent_div_2_mat_error_28_Template, 2, 0, "mat-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Size of vials (ml)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ResultsComponent_div_2_mat_error_34_Template, 2, 0, "mat-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Max concentration in vial (cells/ml)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ResultsComponent_div_2_mat_error_40_Template, 2, 0, "mat-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ResultsComponent_div_2_p_42_Template, 7, 3, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ResultsComponent_div_2_p_43_Template, 2, 0, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.conc, " cells/ml");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\nAverage: ", ctx_r2.avg, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\nMaximum: ", ctx_r2.max, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\nMinimum: ", ctx_r2.min, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\nSt. dev.: ", ctx_r2.stdev, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n", ctx_r2._images.length, " images, ", ctx_r2.squares.length, " rectangles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.vialForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.volSusp.dirty || ctx_r2.volSusp.touched) && ctx_r2.volSusp.invalid && ctx_r2.volSusp.errors.notfloat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.vialSize.dirty || ctx_r2.vialSize.touched) && ctx_r2.vialSize.invalid && ctx_r2.vialSize.errors.notfloat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.maxConc.dirty || ctx_r2.maxConc.touched) && ctx_r2.maxConc.invalid && ctx_r2.maxConc.errors.notfloat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.vialForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.vialForm.valid);
        }
      }

      function floatValidator() {
        return function (control) {
          return Number.isNaN(parseFloat(control.value)) || control.value.includes(',') ? {
            notfloat: {
              value: control.value
            }
          } : null;
        };
      }

      var ResultsComponent = /*#__PURE__*/function () {
        function ResultsComponent() {
          _classCallCheck(this, ResultsComponent);

          this._images = [];
          this.squares = [];
          this.nx = 4;
          this.ny = 4;
        }

        _createClass(ResultsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.vialForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              volSusp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, floatValidator()]),
              vialSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('10', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, floatValidator()]),
              maxConc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('50000', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, floatValidator()])
            });
            this.vialForm.valueChanges.subscribe(function (x) {
              if (_this.vialForm.valid) {
                var numcells = _this.conc * parseFloat(x.volSusp);
                var maxcells = parseFloat(x.maxConc) * parseFloat(x.vialSize);
                var vials = Math.ceil(parseFloat(x.volSusp) / parseFloat(x.vialSize));

                while (numcells / vials > maxcells) {
                  vials += 1;
                }

                _this.usedVials = vials;
                _this.dilutantVolume = vials * parseFloat(x.vialSize) - parseFloat(x.volSusp);
                _this.dilutantPerVial = (_this.dilutantVolume / _this.usedVials).toFixed(2);
              }
            });
          }
        }, {
          key: "checkArea",
          value: function checkArea(x, y) {
            var width = 2048;
            var height = 1536;
            var aw = Math.floor(width / this.nx);
            var ah = Math.floor(height / this.ny);

            for (var i = 0; i < this.ny * this.nx; i++) {
              var ix = i % this.nx;
              var iy = Math.floor(i / this.nx);
              if (ix * aw <= x && (ix + 1) * aw > x && iy * ah <= y && (iy + 1) * ah > y) return i;
            }

            return 0;
          }
        }, {
          key: "updateSquares",
          value: function updateSquares() {
            var _this2 = this;

            this.squares = [];

            var _iterator = _createForOfIteratorHelper(this._images),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _this$squares;

                var image = _step.value;
                var a = Array(this.nx * this.ny).fill(0);

                var _iterator2 = _createForOfIteratorHelper(image.squares),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var _step2$value = _slicedToArray(_step2.value, 2),
                        x = _step2$value[0],
                        y = _step2$value[1];

                    a[this.checkArea(x, y)] += 1;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                (_this$squares = this.squares).push.apply(_this$squares, _toConsumableArray(a));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var multiplier = 11040;
            this.avg = this.squares.reduce(function (a, b) {
              return a + b;
            }) / this.squares.length;
            this.max = Math.max.apply(Math, _toConsumableArray(this.squares));
            this.min = Math.min.apply(Math, _toConsumableArray(this.squares));
            var squareD = this.squares.map(function (value) {
              var diff = value - _this2.avg;
              return diff * diff;
            });
            var avgSquareD = squareD.reduce(function (a, b) {
              return a + b;
            }) / (squareD.length - 1);
            this.stdev = parseFloat(Math.sqrt(avgSquareD).toFixed(2));
            this.conc = Math.round(this.avg * multiplier);
            this.avg = parseFloat(this.avg.toFixed(2));
          }
        }, {
          key: "images",
          set: function set(images) {
            this._images = images;

            if (images.length > 0) {
              this.errors = images.some(function (image) {
                return image.error;
              });
              this.loading = !images.every(function (image) {
                return image.isLoaded();
              });
              if (!this.errors && !this.loading) this.updateSquares();
            }
          }
        }, {
          key: "volSusp",
          get: function get() {
            return this.vialForm.get('volSusp');
          }
        }, {
          key: "vialSize",
          get: function get() {
            return this.vialForm.get('vialSize');
          }
        }, {
          key: "maxConc",
          get: function get() {
            return this.vialForm.get('maxConc');
          }
        }]);

        return ResultsComponent;
      }();

      ResultsComponent.ɵfac = function ResultsComponent_Factory(t) {
        return new (t || ResultsComponent)();
      };

      ResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ResultsComponent,
        selectors: [["app-results"]],
        inputs: {
          images: "images"
        },
        decls: 3,
        vars: 3,
        consts: [[4, "ngIf"], [3, "formGroup"], ["formDir", "ngForm"], ["appearance", "standard"], ["matInput", "", "placeholder", "25.0", "formControlName", "volSusp"], ["matInput", "", "placeholder", "10.0", "formControlName", "vialSize"], ["matInput", "", "placeholder", "50000", "formControlName", "maxConc"], ["style", "max-width: 200px;", 4, "ngIf"], [2, "max-width", "200px"]],
        template: function ResultsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResultsComponent_div_0_Template, 5, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultsComponent_div_1_Template, 5, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResultsComponent_div_2_Template, 44, 13, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading && !ctx.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.errors);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHRzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-results',
            templateUrl: './results.component.html',
            styleUrls: ['./results.component.css']
          }]
        }], function () {
          return [];
        }, {
          images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: CellImage, AppComponent, imgCanvas */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CellImage", function () {
        return CellImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "imgCanvas", function () {
        return imgCanvas;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      function AppComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.removeAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_ngx_dropzone_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_ngx_dropzone_6_Template_ngx_dropzone_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onSelectFiles($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-dropzone-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Drag and drop images here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " or click to open dialog ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_div_7_div_6_img_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_div_6_img_2_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var image_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.selectImage(image_r8.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r8.getSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function AppComponent_div_7_div_6_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Error on ", image_r8.fileName, ". ", image_r8.error, "");
        }
      }

      function AppComponent_div_7_div_6_div_4_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (loading)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_div_7_div_6_div_4_b_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (selected)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_div_7_div_6_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_7_div_6_div_4_span_2_Template, 2, 0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_7_div_6_div_4_b_3_Template, 2, 0, "b", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r8.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !image_r8.isLoaded());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", image_r8 == ctx_r11.selectedImage);
        }
      }

      function AppComponent_div_7_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_7_div_6_img_2_Template, 1, 1, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_7_div_6_div_3_Template, 2, 2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_7_div_6_div_4_Template, 4, 3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_div_6_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var image_r8 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.removeImage(image_r8.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !image_r8.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", image_r8.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !image_r8.error);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return [a0, a1];
      };

      function AppComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img-canvas", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_7_div_6_Template, 8, 3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-dropzone", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_div_7_Template_ngx_dropzone_change_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.onSelectFiles($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-dropzone-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Drag and drop images to add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " or click to open dialog ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-results", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r2.selectedImage.getSrc(), ctx_r2.selectedImage.squares));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx_r2.images);
        }
      }

      var _c1 = ["imgCanvas"];
      var currId = 0;

      var CellImage = /*#__PURE__*/function () {
        function CellImage(src, fileName, error, sanitizer, file) {
          _classCallCheck(this, CellImage);

          this.src = src;
          this.fileName = fileName;
          this.id = currId;
          currId += 1;
          if (error && fileName) this.error = error;else {
            this.sanitizer = sanitizer;
            this.file = file;
          }
        }

        _createClass(CellImage, [{
          key: "isLoaded",
          value: function isLoaded() {
            if (!this.squares) return false;else return true;
          }
        }, {
          key: "getSrc",
          value: function getSrc() {
            return this.sanitizer.bypassSecurityTrustUrl(this.src);
          }
        }]);

        return CellImage;
      }();

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(http, sanitizer) {
          _classCallCheck(this, AppComponent);

          this.title = 'app-frontend';
          this.images = [];
          this.http = http;
          this.sanitizer = sanitizer;
          this.selectedImage = new CellImage("", "", undefined, sanitizer);
        }

        _createClass(AppComponent, [{
          key: "getStyle",
          value: function getStyle() {
            return;
          }
        }, {
          key: "getDefaultSelectedImage",
          value: function getDefaultSelectedImage() {
            return this.images.filter(function (val, i, arr) {
              return !val.error;
            })[0];
          }
        }, {
          key: "onSelectFiles",
          value: function onSelectFiles(event) {
            var _this3 = this;

            if (event.addedFiles.length == 0) return;
            var toLoad = [];

            var _loop = function _loop() {
              var file = event.addedFiles[i];

              if (file.type.split('/').pop().toLowerCase() != "bmp") {
                _this3.images.push(new CellImage(undefined, file.name, "Incorrect file format."));

                _this3.images = _toConsumableArray(_this3.images); // Update Setter

                return "continue";
              }

              var img = new Image();
              img.src = URL.createObjectURL(file);

              img.onerror = function () {
                _this3.images.push(new CellImage(undefined, file.name, "Image is unreadable."));

                _this3.images = _toConsumableArray(_this3.images); // Update Setter
              };

              img.onload = function () {
                if (img.width != 2048 || img.height != 1536) {
                  _this3.images.push(new CellImage(undefined, file.name, "Image resolutions incorrect."));

                  _this3.images = _toConsumableArray(_this3.images); // Update Setter
                } else {
                  var newImg = new CellImage(img.src, file.name, undefined, _this3.sanitizer, file);

                  _this3.images.push(newImg);

                  _this3.selectedImage = _this3.getDefaultSelectedImage();
                  toLoad.push(newImg);

                  if (file == event.addedFiles[event.addedFiles.length - 1]) {
                    _this3.images = _toConsumableArray(_this3.images); // Update Setter

                    _this3.requestSquares(toLoad);
                  }
                }
              };
            };

            for (var i = 0; i < event.addedFiles.length; i++) {
              var _ret = _loop();

              if (_ret === "continue") continue;
            }
          }
        }, {
          key: "requestSquares",
          value: function requestSquares(toLoad) {
            var _this4 = this;

            var formData = new FormData();
            setTimeout(function () {
              var _iterator3 = _createForOfIteratorHelper(toLoad),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var image = _step3.value;
                  formData.append(image.id.toString(), image.file);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              _this4.http.post('/api/inference', formData).subscribe(function (res) {
                var _loop2 = function _loop2() {
                  var index = _Object$keys[_i2];
                  _this4.images.filter(function (img, i, arr) {
                    return img.id === parseInt(index);
                  })[0].squares = res[index];
                };

                for (var _i2 = 0, _Object$keys = Object.keys(res); _i2 < _Object$keys.length; _i2++) {
                  _loop2();
                }

                _this4.images = _toConsumableArray(_this4.images); // Update Setter
              });
            }, 2000);
          }
        }, {
          key: "removeImage",
          value: function removeImage(id) {
            if (this.images.length == 1) this.removeAll();else {
              this.images = this.images.filter(function (img, i, arr) {
                return img.id != id;
              });
              if (!this.images.includes(this.selectedImage)) this.selectedImage = this.getDefaultSelectedImage();
            }
          }
        }, {
          key: "removeAll",
          value: function removeAll() {
            this.images = [];
            this.selectedImage = new CellImage("", "", undefined, this.sanitizer);
          }
        }, {
          key: "selectImage",
          value: function selectImage(id) {
            this.selectedImage = this.images.filter(function (img, i, arr) {
              return img.id == id;
            })[0];
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 8,
        vars: 3,
        consts: [["color", "primary", 1, "header"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Reset session", 3, "click", 4, "ngIf"], [1, "content"], ["class", "init-dropzone", 3, "change", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Reset session", 3, "click"], [1, "init-dropzone", 3, "change"], [2, "font-size", "24px"], [1, "container"], [1, "view-container"], [1, "selected-image-container", "card"], [3, "image"], [1, "image-gallery", "card"], [1, "gallery-cards-container"], ["class", "image-card card", 4, "ngFor", "ngForOf"], [1, "view-dropzone", 3, "change"], [2, "font-size", "20px"], [1, "results-container", "card"], [3, "images"], [1, "image-card", "card"], [1, "image-card-content"], [3, "src", "click", 4, "ngIf"], ["class", "image-card-caption", 4, "ngIf"], ["mat-icon-button", "", 1, "image-card-close-btn", 3, "click"], [3, "src", "click"], [1, "image-card-caption"], [4, "ngIf"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cell counting app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_button_4_Template, 3, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_ngx_dropzone_6_Template, 6, 0, "ngx-dropzone", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 15, 6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images.length != 0);
          }
        },
        styles: ["html[_ngcontent-%COMP%] {\n\n  min-width: 1000px;\n\n}\n\n.header[_ngcontent-%COMP%] {\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n\n}\n\n.content[_ngcontent-%COMP%] {\n\n  position: absolute;\n  top: 84px;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: auto;\n  box-sizing: border-box;\n  padding: 0 20px;\n\n}\n\n.init-dropzone[_ngcontent-%COMP%] {\n\n  height: calc(100vh - 104px);\n\n}\n\n.view-dropzone[_ngcontent-%COMP%] {\n\n  height: 200px;\n\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n\n  flex: 1 1 auto;\n\n}\n\n.container[_ngcontent-%COMP%] {\n\n  display: flex;\n  flex-direction: row;\n  max-width: 1080px;\n  position: relative;\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%);\n\n}\n\n.view-container[_ngcontent-%COMP%] {\n\n  flex-grow: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  width: 500px;\n  flex-shrink: 1;\n\n}\n\n.results-container[_ngcontent-%COMP%] {\n\n  flex-grow: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  min-width: 200px;\n  flex-shrink: 0;\n\n}\n\n.selected-image-container[_ngcontent-%COMP%] {\n\n  width: 100%;\n  height: 400px;\n  margin-bottom: 20px;\n  background: #444;\n  overflow: hidden;\n\n  position: relative;\n\n}\n\n.selected-image-container[_ngcontent-%COMP%]   img-canvas[_ngcontent-%COMP%] {\n\n  width: 533px;\n  height: 100%;\n  position: relative;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n\n  display: inline-block;\n\n}\n\n.selected-image-container[_ngcontent-%COMP%]   .selected-image-container[_ngcontent-%COMP%] {\n\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 533px;\n\n  background: greenyellow;\n  border: 2px solid red;\n\n}\n\n.image-gallery[_ngcontent-%COMP%] {\n\n  max-width: 100%;\n  margin-bottom: 20px;\n  height: 190px;\n\n}\n\n.image-card[_ngcontent-%COMP%] {\n\n  flex-direction: row;\n  margin-left: 20px;\n  margin-top: 20px;\n  height: 150px;\n  width: 200px;\n  min-width: 200px;\n  background: #ff7777;\n\n}\n\n.image-card[_ngcontent-%COMP%]:first-of-type {\n\n  margin-left: 0px;\n\n}\n\n.image-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\n  height: 100%;\n  cursor: pointer;\n\n}\n\n.image-card-caption[_ngcontent-%COMP%] {\n\n  position: absolute;\n  color: white;\n  left: 10px;\n  bottom: 10px;\n  font-size: 14px;\n  max-width: 180px;\n  display: inline-block;\n\n}\n\n.image-card-content[_ngcontent-%COMP%] {\n\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n\n}\n\n.image-card-close-btn[_ngcontent-%COMP%] {\n\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  color: white;\n  font-size: 16px;\n  width: 30px;\n  height: 30px;\n\n}\n\n.gallery-cards-container[_ngcontent-%COMP%] {\n\n  display: flex;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  width: calc(100% - 40px);\n  position: relative;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  max-height: 100%;\n  box-sizing: border-box;\n\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);\n\n}\n\n.cell-box[_ngcontent-%COMP%] {\n\n  position: absolute;\n  top: 10px;\n  left: 10px;\n\n  width: 5px;\n  height: 5px;\n\n  border: 2px solid greenyellow;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGlCQUFpQjs7QUFFbkI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsY0FBYzs7QUFFaEI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7O0FBRWpCOztBQUVBOztFQUVFLDJCQUEyQjs7QUFFN0I7O0FBRUE7O0VBRUUsYUFBYTs7QUFFZjs7QUFFQTs7RUFFRSxjQUFjOztBQUVoQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE1BQU07RUFDTiwyQkFBMkI7O0FBRTdCOztBQUVBOztFQUVFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjOztBQUVoQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYzs7QUFFaEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7RUFFaEIsa0JBQWtCOztBQUVwQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULDJCQUEyQjs7RUFFM0IscUJBQXFCOztBQUV2Qjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLFlBQVk7O0VBRVosdUJBQXVCO0VBQ3ZCLHFCQUFxQjs7QUFFdkI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhOztBQUVmOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7QUFFckI7O0FBRUE7O0VBRUUsZ0JBQWdCOztBQUVsQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osZUFBZTs7QUFFakI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCOztBQUV2Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVzs7QUFFYjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZOztBQUVkOztBQUVBOztFQUVFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLHNCQUFzQjs7QUFFeEI7O0FBRUE7RUFJRSwyQ0FBMkM7O0FBRTdDOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTs7RUFFVixVQUFVO0VBQ1YsV0FBVzs7RUFFWCw2QkFBNkI7O0FBRS9CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG5cbiAgbWluLXdpZHRoOiAxMDAwcHg7XG5cbn1cblxuLmhlYWRlciB7XG5cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDAwO1xuXG59XG5cbi5jb250ZW50IHtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODRweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMCAyMHB4O1xuXG59XG5cbi5pbml0LWRyb3B6b25lIHtcblxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDRweCk7XG5cbn1cblxuLnZpZXctZHJvcHpvbmUge1xuXG4gIGhlaWdodDogMjAwcHg7XG5cbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcblxuICBmbGV4OiAxIDEgYXV0bztcblxufVxuXG4uY29udGFpbmVyIHtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXgtd2lkdGg6IDEwODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG59XG5cbi52aWV3LWNvbnRhaW5lciB7XG5cbiAgZmxleC1ncm93OiAxO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGZsZXgtc2hyaW5rOiAxO1xuXG59XG5cbi5yZXN1bHRzLWNvbnRhaW5lciB7XG5cbiAgZmxleC1ncm93OiAxO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBmbGV4LXNocmluazogMDtcblxufVxuXG4uc2VsZWN0ZWQtaW1hZ2UtY29udGFpbmVyIHtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogIzQ0NDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbn1cblxuLnNlbGVjdGVkLWltYWdlLWNvbnRhaW5lciBpbWctY2FudmFzIHtcblxuICB3aWR0aDogNTMzcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxufVxuXG4uc2VsZWN0ZWQtaW1hZ2UtY29udGFpbmVyIC5zZWxlY3RlZC1pbWFnZS1jb250YWluZXIge1xuXG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogNTMzcHg7XG5cbiAgYmFja2dyb3VuZDogZ3JlZW55ZWxsb3c7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcblxufVxuXG4uaW1hZ2UtZ2FsbGVyeSB7XG5cbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBoZWlnaHQ6IDE5MHB4O1xuXG59XG5cbi5pbWFnZS1jYXJkIHtcblxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmY3Nzc3O1xuXG59XG5cbi5pbWFnZS1jYXJkOmZpcnN0LW9mLXR5cGUge1xuXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG5cbn1cblxuLmltYWdlLWNhcmQgaW1nIHtcblxuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxufVxuXG4uaW1hZ2UtY2FyZC1jYXB0aW9uIHtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxufVxuXG4uaW1hZ2UtY2FyZC1jb250ZW50IHtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxufVxuXG4uaW1hZ2UtY2FyZC1jbG9zZS1idG4ge1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuXG59XG5cbi5nYWxsZXJ5LWNhcmRzLWNvbnRhaW5lciB7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG59XG5cbi5jYXJkIHtcblxuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4IHJnYmEoMCwwLDAsMC41KTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4IHJnYmEoMCwwLDAsMC41KTtcblxufVxuXG4uY2VsbC1ib3gge1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuXG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93O1xuXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
          }];
        }, null);
      })();

      var imgCanvas = /*#__PURE__*/function () {
        function imgCanvas() {
          _classCallCheck(this, imgCanvas);

          this.nx = 4;
          this.ny = 4;
          this.width = 533;
          this.height = 400;
        }

        _createClass(imgCanvas, [{
          key: "renderImage",
          value: function renderImage() {
            if (this.context) {
              this.context.drawImage(this._image, 0, 0, this.width, this.height);

              if (this.squares) {
                this.context.strokeStyle = "lime";

                var _iterator4 = _createForOfIteratorHelper(this.squares),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var square = _step4.value;
                    this.context.beginPath();
                    var x = square[0] / 2048 * 533;
                    var y = square[1] / 1536 * 400;
                    this.context.rect(x, y, 7, 7);
                    this.context.stroke();
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

                var aw = Math.floor(this.width / this.nx);
                var ah = Math.floor(this.height / this.ny);
                this.context.strokeStyle = "lightgray";

                for (var i = 0; i < this.ny * this.nx; i++) {
                  var ix = i % this.nx;
                  var iy = Math.floor(i / this.nx); //if (ix*aw <= x && (ix+1)*aw > x && iy*ah <= y && (iy+1)*ah > y)
                  //    return i

                  this.context.beginPath();
                  this.context.rect(ix * aw, iy * ah, aw, ah);
                  this.context.stroke();
                }
              }
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.context = this.canvas.nativeElement.getContext('2d');
            this.renderImage();
          }
        }, {
          key: "image",
          set: function set(_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                image = _ref2[0],
                squares = _ref2[1];

            var realImage = new Image();
            realImage.src = image.changingThisBreaksApplicationSecurity;
            this._image = realImage;
            this.squares = squares;
            this.renderImage();
          }
        }]);

        return imgCanvas;
      }();

      imgCanvas.ɵfac = function imgCanvas_Factory(t) {
        return new (t || imgCanvas)();
      };

      imgCanvas.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: imgCanvas,
        selectors: [["img-canvas"]],
        viewQuery: function imgCanvas_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
          }
        },
        inputs: {
          image: "image"
        },
        decls: 2,
        vars: 0,
        consts: [["width", "533", "height", "400", 1, "canvas"], ["imgCanvas", ""]],
        template: function imgCanvas_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0, 1);
          }
        },
        styles: [".canvas[_ngcontent-%COMP%] { width: 100%; height: 100%; }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](imgCanvas, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'img-canvas',
            template: '<canvas #imgCanvas class="canvas" width="533" height="400"></canvas>',
            styles: ['.canvas { width: 100%; height: 100%; }']
          }]
        }], null, {
          canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imgCanvas']
          }],
          image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-dropzone */
      "kvL/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _results_results_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./results/results.component */
      "NUXy");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "ihCf");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _results_results_component__WEBPACK_IMPORTED_MODULE_11__["ResultsComponent"], _app_component__WEBPACK_IMPORTED_MODULE_7__["imgCanvas"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _results_results_component__WEBPACK_IMPORTED_MODULE_11__["ResultsComponent"], _app_component__WEBPACK_IMPORTED_MODULE_7__["imgCanvas"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
          }]
        }], null, null);
      })();

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgPluralCase"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["ɵb"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzonePreviewComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneImagePreviewComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneRemoveBadgeComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneVideoPreviewComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Dir"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormArrayName"], _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _results_results_component__WEBPACK_IMPORTED_MODULE_11__["ResultsComponent"], _app_component__WEBPACK_IMPORTED_MODULE_7__["imgCanvas"]], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["KeyValuePipe"]]);
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
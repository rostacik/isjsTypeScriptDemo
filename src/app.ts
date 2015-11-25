/// <reference path="../typings/tsd.d.ts" />

//will build, will give IntelliSense but will not run (no folder is, folder is node_modules/is_js)
//import is = require("is");

//will not build but would run. TypeScript IntelliSense will not find is_js object, because
//in is_js.d.ts we declare module 'is', because at runtime, there will be object is
//but we need to load module from is_js folder 
//import is = require("is_js");

//compiles + works @ runtime + gives us IntelliSense
//TypeScript IntelliSense will be happy because we used var not import and we declare it as
//Is type (: Is) so later on we have IntelliSense in our souce code and we required from existing is_js folder
var is: Is = require("is_js");

console.log(is.string("abcd"));
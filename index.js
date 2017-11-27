#!/usr/bin/env node

var what = require('css-what');
var select = require('css-select');
require('css-select-extension-fs')(what, select);
var adapter = require('css-select-adapter-fs').adapter;
var Element = require('css-select-adapter-fs').Element;

var cwd = process.cwd();
var e = Element(cwd);
var selector = process.argv[2];
var f = select(selector, e, { adapter: adapter });
for (var i in f)
	console.log(f[i].path);

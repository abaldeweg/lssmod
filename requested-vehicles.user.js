// ==UserScript==
// @name lssmod-requested-vehicles
// @version 0.1.0
// @description Some enhancements for the UI.
// @author André Baldeweg
// @match https://www.leitstellenspiel.de/*
// @grant none
// @updateURL https://github.com/abaldeweg/lssmod/raw/master/requested-vehicles.user.js
// ==/UserScript==

(function() {
  'use strict';

  document.querySelector('#missing_text').style.position = 'fixed';
  document.querySelector('#missing_text').style.bottom = '30px';
  document.querySelector('#missing_text').style.left = '-0';
  document.querySelector('#missing_text').style.zIndex = '99999';
})();

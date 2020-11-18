// ==UserScript==
// @name lssmod-alerts
// @version 0.1.0
// @description Some enhancements for the UI.
// @author André Baldeweg
// @match https://www.leitstellenspiel.de/
// @grant none
// @updateURL https://github.com/abaldeweg/lssmod/raw/master/alerts.user.js

// ==/UserScript==

(function() {
  'use strict';

  document.querySelector('#important_messages_success').style.top = 'auto';
  document.querySelector('#important_messages_success').style.bottom = '-20px';
})();

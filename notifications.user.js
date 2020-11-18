// ==UserScript==
// @name lssmod-notifications
// @version 0.1.0
// @description Some enhancements for the UI.
// @author André Baldeweg
// @match https://www.leitstellenspiel.de/
// @grant none
// @updateURL https://github.com/abaldeweg/lssmod/raw/master/notifications.user.js
// ==/UserScript==

(function() {
  'use strict';

	function notify(title, message, vehicle) {
		if (!("Notification" in window)) {
			return null;
		}

		if ('granted' !== Notification.permission) {
			Notification.requestPermission(function (permission) {
				if (permission === "granted") {
					new Notification("Danke! Die Benachrichtigungen wurden aktiviert!");
				}
			});
		}

		if ("granted" === Notification.permission) {
			const notification = new Notification(title, {
				body: message
			});
      setTimeout(function () {
				notification.close();
			}, 10000);
			notification.onclick = function () {
				$("body").append('<a href="/vehicles/' + vehicle + '" id="v_' + vehicle + '_5" class="lightbox-open">' + title + '</a>');
				document.querySelector('#v_' + vehicle + '_5').click();
				document.querySelector('#v_' + vehicle + '_5').remove();
				window.focus();
			};
		}
	}

	const _radioMessage = radioMessage;
	radioMessage = function (e) {
		_radioMessage(e);
		if (e.fms_real == 5 && !e.fms_text.startsWith("[Verband]")) {
			notify(e.caption, e.fms_text, e.id);
		}
  };
})();

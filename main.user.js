// ==UserScript==
// @name LSSMod Main
// @version 0.1.0
// @description Some enhancements for the UI.
// @author André Baldeweg
// @match https://www.leitstellenspiel.de/
// @grant none
// @updateURL https://github.com/abaldeweg/lssmod/raw/master/main.user.js

// ==/UserScript==

(function() {
    'use strict';

    // reorder missions
    document.querySelector('#missions-panel-body').style.display = 'flex';
    document.querySelector('#missions-panel-body').style.flexDirection = 'column';
    const buttons = document.querySelectorAll('#missions-panel-body div');
    buttons.forEach((item) => {
        item.style.order = '99999';
    });
    document.querySelector('#eventInfo').style.order = '1';
    if(document.querySelector('#mission_sidebar_downtime_alert')) {
            document.querySelector('#mission_sidebar_downtime_alert').style.order = '2';
    }
    document.querySelector('#mission_list_krankentransporte').style.order = '3';
    document.querySelector('#mission_list_alliance').style.order = '4';
    document.querySelector('#mission_list_alliance_event').style.order = '5';
    document.querySelector('#mission_list').style.order = '6';
    document.querySelector('#mission_list_sicherheitswache').style.order = '7';

    // hide infos about no mission
    document.querySelector('#ktw_no_transports').style.display = 'none';
    document.querySelector('#alliance_no_mission').style.display = 'none';
    document.querySelector('#emergency_no').style.display = 'none';

    // Notifications
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

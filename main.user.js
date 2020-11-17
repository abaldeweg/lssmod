// ==UserScript==
// @name LSSMod
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
})();
// ==UserScript==
// @name         edge屏蔽chrome推荐
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       MeursaulT
// @match        https://www.google.com.*/*
// @match        https://www.google.com/*
// @match        https://play.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var i;

    var paras = document.getElementsByClassName('gb_fd gb_gd gb_4c gb_td gb_Ed');
    for(i=0;i<paras.length;i++){
        if (paras[i] != null){
            paras[i].remove()
        }
    }

})();

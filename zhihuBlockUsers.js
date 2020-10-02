// ==UserScript==
// @name         知乎屏蔽用户
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       MeursaulT
// @match        https://www.zhihu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 将想要屏蔽的用户写入userList即可
    var userList = ['立党','苏莉安']
    var answers = document.getElementsByClassName('ContentItem AnswerItem')
    function deleteAns(){
        for(var i = 0 ; i < answers.length ; i++){
            for(var user of userList){
                if(answers[i].dataset.zop.includes(user)){
                    answers[i].remove()
                }
            }
        }
    }
    (function(open) {
        XMLHttpRequest.prototype.open = function() {
            this.addEventListener("readystatechange", function() {
                deleteAns();
            }, false);
            open.apply(this, arguments);
        };
    })(XMLHttpRequest.prototype.open);

})();

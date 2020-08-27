// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var setGreeting = function() {
  $( document ).ready(function() {
    $("#greeting").html(timeOfDay());
  });
};

var timeOfDay = function() { 
  var d = new Date();
  var h = d.getHours();
  if (h < 12) {
    return "good morning";
  } else if (h < 18) {
    return "good afternoon"
  } else {
    return "good evening"
  }
}

var setTime = function() {
  $( document ).ready(function() {
    $("#time").html(time());
  });
};

var time = function() { 
  var d = new Date();
  var h = d.getHours();
  var x = "am"
  if (h > 12) {
    h = h-12;
    x = "pm"
  }
  h = ('0' + h).slice(-2)
  var m = d.getMinutes();
  m = ('0' + m).slice(-2)
  var s = d.getSeconds();
  s = ('0' + s).slice(-2)
  return h + ": <br>" + m + ": <br>" + s + "<br>" + x;
}

setTime();
setGreeting();
var timer =  setInterval(setTime, 1000);
var timer2 = setInterval(setGreeting, 1000*60*60);




// var setChromeTime = function() {
//   console.log("hi");
//   $( document ).ready(function() {
//     $("#time-chrome").html(timeChrome());
//   });
// };

// var timeChrome = function() {
//   var microsecondsPerDay = 1000 * 60 * 60 * 24;
//   var oneDayAgo = (new Date).getTime() - microsecondsPerDay;
//   var his;

//   chrome.history.search({'text': "", 'startTime': oneDayAgo}, function(arr1) {
//     var info = "INFO: ";
//     var obj;
//     for (obj of arr1) {
//       var t;
//       let x = chrome.history.getVisits({'url': obj.url}, function(arr) {
//         console.log((new Date).getTime() - arr[0].visitTime);
//         return (new Date).getTime() - arr[0].visitTime;
//       });
//       var spl = obj.url.split("/");
//       var str = spl[2];
//       info += "URL: " + str + ", TIME: " + x + "<br>";
//     }
//     // for (var i = 0; i < arr1.length; i++) {
//     //   console.log(arr1[i].url);
//     //   chrome.history.getVisits({'url': arr1[i].url}, function(arr) {
//     //     // console.log(arr[0].visitTime)
//     //     t = (new Date).getTime() - arr[0].visitTime;
//     //     console.log(i + ": " + t);
//     //   });
//     //   info += "URL: " + arr1[i].url + ", TIME: " + t + "<br>";
//     // };
//     $( document ).ready(function() {
//       $("#time-chrome").html(info);
//     });
//   });
// }


// setChromeTime();


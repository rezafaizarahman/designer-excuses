function getRandomArbitrary(t,n){return Math.floor(Math.random()*(n-t))+t}function fillData(){$.getJSON("data.json",function(t){var n=getRandomArbitrary(0,99);$(".excuse").html(t.items[n].excuse),$(".number").html(n+1)})}$(function(){fillData()}),$("button").click(function(t){t.preventDefault(),fillData()}),$(window).keypress(function(t){0!=t.keyCode&&32!=t.keyCode||fillData()});
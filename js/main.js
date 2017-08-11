console.log("main.js active");
/*
[_] Place output in circles
[_] Fix: first reindeer doesn't have a color
*/

/***********  SCRIPT  ***************/
var colors = ["Blue ", "Red ", "Orange ", "Purple ", "Hazel ", "Aquamarine ", "Periwinkle ", "Azure ", "Fuchsia ", "Chocolate ", "Amber ", "Amaranth "];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("output1");
	console.log("hohohoElement", hohohoElement);

for(i = 0; i < reindeer.length; i+=1){
	hohohoElement.innerHTML += `<li>${colors[i].concat(reindeer[i])}</li>`;
};

console.log("hohohoElement", hohohoElement);
console.log("output1", output1);

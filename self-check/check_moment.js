var moment = require('moment');
console.log(moment().format()); //2015-11-18T11:45:18+09:00
console.log(moment().format("YYYY-MM-DD")) //2015-11-18


/*var new_canvas = document.createElement("canvas");
var new_canvas_id = document.createAttribute("id");
var new_canvas_width = document.createAttribute("width");
var new_canvas_height = document.createAttribute("height");
var new_canvas_style = document.createAttribute("style");

new_canvas_id.value = "awesomeCloudwordcloud3";
new_canvas_width.value = "2130";
new_canvas_height.value = "1680";
new_canvas_style.value = "visibility: visible; display: block; position: relative; z-index: 10000; width: 710px; height: 560px;";
var new_canvas_text_node = document.createTextNode(".");
new_canvas.setAttributeNode(new_canvas_id);
new_canvas.setAttributeNode(new_canvas_width);
new_canvas.setAttributeNode(new_canvas_height);
new_canvas.setAttributeNode(new_canvas_style);
new_canvas.appendChild(new_canvas_text_node);
cloud.appendChild(new_canvas);*/

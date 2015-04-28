"use strict";

var chalk = require("chalk");

var constant = require("../constant");
var log = require("../log");

module.exports = function(input) {
	var data = "";
	input = input.split(" ");
	var type = input[0].split("(");
	var length = null;
	if (type.length > 1) {
		length = type[1].substring(0, type[1].length - 1);
	}
	type = type[0];
	if (constant.type[type]) {
		data = constant.type[type];
		if (length) {
			data += "(" + length + ")";
		}
		var first = true;
		input.forEach(function(value) {
			if (first) {
				first = false;
			} else {
				if (constant.property[value]) {
					data += "." + constant.property[value];
				} else {
					log.warning("Warning: Found illegal data type property " + chalk.blue(value) + ".");
				}
			}
		});
	} else {
		log.error("Error: Found illegal data type " + chalk.blue(type) + ".");
	}
	return data;
};

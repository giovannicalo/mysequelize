"use strict";

var chalk = require("chalk");
var fs = require("fs");
var path = require("path");

var config = require("./config");
var constant = require("./constant");
var log = require("./log");
var string_case = require("./string_case");

module.exports = function(name, content) {
	if ((content) && (content.length)) {
		var file = path.join(config.directory, string_case.convert(name, config.naming.file) + "." + constant.language[config.language].extension);
		var data = "";
		var i = "";
		content.forEach(function(line) {
			if (line.text) {
				for (i = 0; i < line.indentation; i++) {
					data += config.indentation;
				}
				data += line.text + config.end_of_line;
			}
		});
		fs.writeFile(file, data, function(error) {
			if (!error) {
				log.success("Model " + chalk.blue(string_case.convert(name, config.naming.model)) + " written to " + chalk.blue(file) + " successfully.");
			} else {
				log.error("Error: Failed to write the model file for " + chalk.blue(name) + ".", error);
			}
		});
	} else {
		log.error("Error: Attempting to create an empty model file for " + chalk.blue(name) + ".");
	}
};

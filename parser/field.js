"use strict";

var config = require("../config");
var constant = require("../constant");
var log = require("../log");
var string_case = require("../string_case");

module.exports = function(field, is_last) {
	if (field) {
		var name = string_case.convert(field.Field, config.naming.field);
		var language = constant.language[config.language].content;
		var content = [];
		content.push({
			end_of_line: true,
			indentation: 2,
			text: language.field(name)
		});
		if (field.Null == "NO") {
			content.push({
				end_of_line: true,
				indentation: 3,
				text: language.property("allowNull", "false")
			});
		}
		if (field.Extra == "auto_increment") {
			content.push({
				end_of_line: true,
				indentation: 3,
				text: language.property("autoIncrement", "true")
			});
		}
		if (field.Default !== null) {
			content.push({
				end_of_line: true,
				indentation: 3,
				text: language.property("defaultValue", ((field.Default == "CURRENT_TIMESTAMP") ? "type.NOW" : field.Default))
			});
		}
		if (field.Field != name) {
			content.push({
				end_of_line: true,
				indentation: 3,
				text: language.property("field", "\"" + field.Field + "\"")
			});
		}
		if (field.Key == "PRI") {
			content.push({
				end_of_line: true,
				indentation: 3,
				text: language.property("primaryKey", "true")
			});
		}
		content.push({
			end_of_line: true,
			indentation: 3,
			text: language.property("type", "type." + require("./type")(field.Type), (field.Key != "UNI"))
		});
		if (field.Key == "UNI") {
			content.push({
				end_of_line: true,
				indentation: 3,
				text: language.property("unique", ((field.Key == "UNI") ? "true" : "false"), true)
			});
		}
		content.push({
			end_of_line: true,
			indentation: 2,
			text: language.block_end(is_last)
		});
		return content;
	} else {
		log.error("Error: Attempting to parse a field without enough data.");
	}
};

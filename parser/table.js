"use strict";

var config = require("../config");
var constant = require("../constant");
var log = require("../log");
var string_case = require("../string_case");

module.exports = function(database, table) {
	if ((database) && (table)) {
		database.query("DESCRIBE `" + table + "`").spread(function(data) {
			var name = string_case.convert(table, config.naming.model);
			var language = constant.language[config.language].content;
			var content = [];
			var i = 0;
			if ((config.language == "javascript") && (config.strict)) {
				content.push({
					end_of_line: true,
					indentation: 0,
					text: "\"use strict\";\n"
				});
			}
			content.push({
				end_of_line: true,
				indentation: 0,
				text: language.module
			});
			content.push({
				end_of_line: true,
				indentation: 1,
				text: language.model(name)
			});
			data.forEach(function(field) {
				content = content.concat(require("./field")(field, (i == data.length - 1)));
				i++;
			});
			content.push({
				end_of_line: language.end_of_line,
				indentation: 1,
				text: language.block_end(false, false, false, true)
			});
			content.push({
				end_of_line: true,
				indentation: 1,
				text: language.block_start
			});
			if (table != name) {
				content.push({
					end_of_line: true,
					indentation: 2,
					text: language.property("tableName", "\"" + table + "\"", true)
				});
			}
			content.push({
				end_of_line: true,
				indentation: 1,
				text: language.block_end(true, true, true)
			});
			content.push({
				end_of_line: true,
				indentation: 0,
				text: language.block_end(true, false, true, false, true)
			});
			require("../file")(table, content);
		});
	} else {
		log.error("Error: Attempting to parse a table without enough data.");
	}
};

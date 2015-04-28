"use strict";

var chalk = require("chalk");

var log = require("../log");

module.exports = function(database, table) {
	if (database) {
		log.success("Target database " + chalk.blue(database.config.database) + " chosen successfully.");
		if (!table) {
			database.query("SHOW TABLES").spread(function(data) {
				data.forEach(function(table) {
					require("./table")(database, table[Object.keys(table)[0]]);
				});
			});
		} else {
			log.success("Target table " + chalk.blue(table) + " chosen successfully.");
			require("./table")(database, table);
		}
	} else {
		log.error("Error: Attempting to parse a database without enough data.");
	}
};

"use strict";

var chalk = require("chalk");
var minimist = require("minimist");
var sequelize = require("sequelize");

var config = require("./config");
var deep_extend = require("./deep_extend");
var log = require("./log");
var parameter = require("./parameter");

var parameter_list = minimist(process.argv.slice(2), parameter);
deep_extend(config, parameter_list);

module.exports = (function(database, table) {
	log.header();
	if (database) {
		database = new sequelize(database, config.server.user, config.server.password, {
			dialiect: "mysql",
			logging: false,
			host: config.server.host,
			port: config.server.port
		});
		require("./directory")().then(function() {
			log.success("Target directory " + chalk.blue(config.directory) + " prepared successfully.");
			require("./parser/database")(database, table);
		}).catch(function(error) {
			log.error("Error: Failed to prepare the target directory " + chalk.blue(config.directory) + ".", error);
		});
	} else {
		log.error("Error: A target database is required. You can pick one with the -d or --database parameters.");
	}
})(parameter_list.database, parameter_list.table);

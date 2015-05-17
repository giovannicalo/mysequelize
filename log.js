"use strict";

var chalk = require("chalk");

var config = require("./config");

module.exports = {

	error: function(data, error) {
		this.format(data, "red");
		if (error) {
			throw error;
		}
		process.exit();
	},

	format: function(data, color) {
		this.main("\n" + chalk[color]("> ") + data);
	},

	header: function() {
		if (!config.silent) {
			this.main("");
			this.main(chalk.blue("################################################################################"));
			this.main(chalk.blue("##                                                                            ##"));
			this.main(chalk.blue("##                                MySequelize                                 ##"));
			this.main(chalk.blue("##                                                                            ##"));
			this.main(chalk.blue("################################################################################"));
		}
	},

	main: function() {
		console.log.apply(this, arguments);
	},

	success: function(data) {
		if (!config.silent) {
			this.format(data, "green");
		}
	},

	warning: function(data) {
		if (!config.silent) {
			this.format(data, "yellow");
		}
	}

};

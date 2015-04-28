"use strict";

var chalk = require("chalk");

module.exports = {

	error: function(data, error) {
		this.format(data, "red");
		if (error) {
			throw error;
		}
	},

	format: function(data, color) {
		this.main("\n" + chalk[color]("> ") + data);
	},

	header: function() {
		this.main("");
		this.main(chalk.blue("################################################################################"));
		this.main(chalk.blue("##                                                                            ##"));
		this.main(chalk.blue("##                                MySequelize                                 ##"));
		this.main(chalk.blue("##                                                                            ##"));
		this.main(chalk.blue("################################################################################"));
	},

	main: function() {
		console.log.apply(this, arguments);
	},

	success: function(data) {
		this.format(data, "green");
	},

	warning: function(data) {
		this.format(data, "yellow");
	}

};

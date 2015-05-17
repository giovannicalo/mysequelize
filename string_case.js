"use strict";

var inflection = require("inflection");

var log = require("./log");

module.exports = {

	string: null,

	convert: function(string, destination) {
		destination = this.from(destination).to_snake();
		if (this["to_" + destination]) {
			return this.from(string)["to_" + destination]();
		} else {
			this.error(destination);
		}
	},

	error: function(error) {
		log.error("Case \"" + error + "\" is not supported.");
	},

	from: function(string) {
		var self = this;
		this.string = inflection.underscore(string.replace(/-/g, "_").replace(/[A-Z]{2,}/g, function(match) {
			return self.upper_case_first(match.toLowerCase());
		})).replace(/_{2,}/g, "_");
		return this;
	},

	to_camel: function() {
		return inflection.camelize(this.string, true);
	},

	to_pascal: function() {
		return inflection.camelize(this.string);
	},

	to_screaming_snake: function() {
		return this.string.toUpperCase();
	},

	to_snake: function() {
		return this.string;
	},

	to_spinal: function() {
		return inflection.dasherize(this.string);
	},

	to_train: function() {
		var self = this;
		return self.upper_case_first(inflection.dasherize(this.string).replace(/-[a-z]/g, function(match) {
			return "-" + self.upper_case_first(match.slice(1));
		}));
	},

	upper_case_first: function(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

};

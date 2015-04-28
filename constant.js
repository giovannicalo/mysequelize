"use strict";

module.exports = {

	language: {
		coffeescript: {
			content: {
				block_end: function() {
					return null;
				},
				block_start: null,
				field: function(name) {
					return name + ":";
				},
				model: function(name) {
					return "sequelize.define \"" + name + "\",";
				},
				module: "module.exports = (sequelize, type) ->",
				property: function(key, value) {
					return key + ": " + value;
				}
			},
			extension: "coffee"
		},
		javascript: {
			content: {
				block_end: function(is_last, is_function, is_end) {
					return "}" + ((is_function) ? ")" : "") + ((is_last) ? "" : ",") + ((is_end) ? ";" : "");
				},
				block_start: "{",
				field: function(name) {
					return name + ": {";
				},
				model: function(name) {
					return "sequelize.define(\"" + name + "\", {";
				},
				module: "module.exports = function(sequelize, type) {",
				property: function(key, value, is_last) {
					return key + ": " + value + ((is_last) ? "" : ",");
				}
			},
			extension: "js"
		}
	},

	property: {
		binary: "BINARY",
		unsigned: "UNSIGNED",
		zerofill: "ZEROFILL"
	},

	type: {
		bigint: "BIGINT",
		binary: "",
		bit: "",
		blob: "BLOB",
		char: "CHAR",
		curve: "",
		decimal: "DECIMAL",
		date: "DATEONLY",
		datetime: "DATE",
		double: "FLOAT",
		enum: "ENUM",
		float: "FLOAT",
		geometry: "",
		geometrycollection: "",
		int: "INTEGER",
		linestring: "",
		longblob: "BLOB(\"long\")",
		longtext: "TEXT",
		mediumblob: "BLOB(\"medium\")",
		mediumint: "INTEGER",
		mediumtext: "TEXT",
		multicurve: "",
		multilinestring: "",
		multipoint: "",
		multipolygon: "",
		multisurface: "",
		point: "",
		polygon: "",
		set: "",
		smallint: "INTEGER",
		surface: "",
		text: "TEXT",
		time: "TIME",
		timestamp: "TIME",
		tinyblob: "BLOB(\"tiny\")",
		tinyint: "INTEGER",
		tinytext: "TEXT",
		varbinary: "",
		varchar: "STRING",
		year: "DATEONLY"
	}

};

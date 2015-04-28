"use strict";

var mkdirp = require("mkdirp");
var q = require("q");
var rimraf = require("rimraf");

var config = require("./config");

module.exports = function() {
	var deferred = q.defer();
	rimraf(config.directory, function(error) {
		if (!error) {
			mkdirp(config.directory, function(error) {
				if (!error) {
					deferred.resolve();
				} else {
					deferred.reject(error);
				}
			});
		} else {
			deferred.reject(error);
		}
	});
	return deferred.promise;
};

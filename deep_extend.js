"use strict";

module.exports = function(destination) {
	var i = 0;
	var key = 0;
	var source = null;
	for (i = 0; i < arguments.length; i++) {
		if (i !== 0) {
			source = arguments[i];
			for (key in source) {
				if (source.hasOwnProperty(key)) {
					if ((destination[key]) && (source[key].constructor === Object) && (destination[key].constructor === Object)) {
						destination[key] = module.exports(destination[key], source[key]);
					} else {
						destination[key] = source[key];
					}
				}
			}
		}
	}
	return destination;
};

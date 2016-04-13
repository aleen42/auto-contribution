/***********************************************************************
 *                                                                   _
 *       _____  _                           ____  _                 |_|
 *      |  _  |/ \   ____  ____ __ ___     / ___\/ \   __   _  ____  _
 *      | |_| || |  / __ \/ __ \\ '_  \ _ / /    | |___\ \ | |/ __ \| |
 *      |  _  || |__. ___/. ___/| | | ||_|\ \___ |  _  | |_| |. ___/| |
 *      |_/ \_|\___/\____|\____||_| |_|    \____/|_| |_|_____|\____||_| 
 *                                                                      
 *      ================================================================
 *                 More than a coder, More than a designer              
 *      ================================================================
 *
 *
 *      - Document: index.js
 *      - Author: aleen42
 *      - Description: the main entrance for automatically generating repo
 *      			   and return the path
 *      - Create Time: Apr 13th, 2016
 *      - Update Time: Apr 13th, 2016
 *
 *
 **********************************************************************/

/**
 * [Contributions: gh-contributions module]
 * @type {Object}
 */
const Contributions = require("./../node_modules/gh-contributions/lib/contributions");

/**
 * [fs: file system module]
 * @type {Object}
 */
const fs = require("fs");

module.exports =  {
	run: function (clientDataPath) {
		/** Generate repository */
		try {
			const parseData = JSON.parse(fs.readFileSync(clientDataPath, 'utf8'));
		} catch (error) {
			console.log('[' + error + ']');
			return;
		}

		Contributions(parseData, function (err, repoLink) {
			if (err) {
				console.log(err);
				return;
			}

			/** Prepare the path to the repository */
		    repoLink += "/";
		    
		    /** Return the path */
		    console.log(repoLink)
		}, function (progress) {});
	},
	test: function (testCase) {
		var output = Contributions(JSON.parse(testCase), function (err, repoLink) {
			/** Store output info */
			return err;
		}, function (progress) {});

		output = output || 'null';
		return output;
	}
};

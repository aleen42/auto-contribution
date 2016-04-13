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
 *      - Document: start.js
 *      - Author: aleen42
 *      - Description: for shell script to use
 *      - Create Time: Apr 13th, 2016
 *      - Update Time: Apr 13th, 2016
 *
 *
 **********************************************************************/

/**
 * [autoContribution: import the module]
 * @type {Object}
 */
const autoContribution = require("./index");

/**
 * [clientData: point out where is the json file]
 * @type {String}
 */
const clientDataPath = process.argv[2];

autoContribution.run(clientDataPath);

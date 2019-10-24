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
 *      - Description: this is the entrace of some tests
 *      - Create Time: Apr 13th, 2016
 *      - Update Time: Apr 13th, 2016
 *
 *
 **********************************************************************/

/**
 * [autoContribution: import the module]
 * @type {Object}
 */
const autoContribution = require("../lib/index");

/**
 * [should: test framework module]
 * @type {Object}
 */
const should = require('chai').should();

describe('tests', function () {
    it('test case 1', function () {
        autoContribution.test('{\"coordinates\": [{\"x\": 3,\"y\": 3}],\"commitsPerDay\": 1}').should.equal('null');
    });

    it('test case 2', function () {
        autoContribution.test('{\"coordinates\": [{\"x\": 34,\"y\": 3}],\"commitsPerDay\": 2}').should.equal('null');
    });
});

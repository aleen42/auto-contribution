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
 *                   and return the path
 *      - Create Time: Apr 13rd, 2016
 *      - Update Time: Oct 24th, 2019
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
const fs = require('fs');

/**
 * [progressBar: a module to shopw progress]
 * @type {Object}
 */
const progressBar = require('progress');

const bar = new progressBar('generating [:bar] :situation', {
    complete: '=',
    incomplete: ' ',
    width: 40,
    total: 100
});

module.exports = {
    run: function ({path, name = '', email = ''}, callback) {
        let currentProgress = 0;

        /** Generate repository */
        let parseData;
        try {
            parseData = JSON.parse(fs.readFileSync(path, 'utf8'));
        } catch (error) {
            console.log(`[${error}]`);
            return;
        }

        Contributions(parseData, (err, repoLink) => {
            if (err) {
                console.log(err);
                return;
            }

            callback(repoLink)
        }, progress => {
            bar.tick(progress - currentProgress, {situation: `${progress.toFixed(2)}%`});
            currentProgress = progress;
        });
    },
    /** Store output info */
    test: testCase => Contributions(JSON.parse(testCase), err => err, () => {}) || 'null'
};

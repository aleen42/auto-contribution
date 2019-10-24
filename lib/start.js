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
 *      - Create Time: Apr 13rd, 2016
 *      - Update Time: Oct 24th, 2019
 *
 *
 **********************************************************************/

const {execFileSync} = require('child_process');

const [, , repo, path] = process.argv;
require('./index').run({path}, cwd => {
    const time = new Date().valueOf();
    execFileSync('git', ['remote', 'add', time, repo], {cwd});
    execFileSync('git', ['push', time, 'head', '-f'], {cwd});
    execFileSync('rm', ['-rf', cwd]);
});

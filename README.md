## auto-contribution

a node.js module for automatically generating contributions on github without worrying about its movement

#### Installation

###### NPM Installation

```bash
npm install auto-contribution
cd ./node_modules/auto-contribution
npm i
```

###### Clone Installation

```bash
git clone https://github.com/aleen42/auto-contribution.git
cd auto-contribution
npm i
```

#### Usage

**i.** Setup your repository to store generated commits history

**ii.** Make sure you have set up SSH for this repo, because I should update your remote repo

**iii.** Enter root mode to run:

```bash
npm start <repo-url under SSH> <coordinates data json file's path>

# example: npm start git@github.com:aleen42/contribution.git example.json
```

*Notice that: the repo url should be under SSH protocol like `git@github.com:aleen42/contribution.git`

<img src="./screenshot1.png">

*Notice that: you should put your data generated by [**IonicaBizau/github-contributions**](https://github.com/IonicaBizau/github-contributions) into a json file and give the path of it*

#### Tests

```bash
npm test
```

*Notice that: the repository generated with test case will be in `./auto-contribution/node_modules/gh-contributions/lib/public/repos/`*

#### Release History

* 1.0.0 Initial release
	* 1.1.0 Catch some exceptions

#### :yum: How to contribute

Have an idea? Found a bug? See [how to contribute](https://aleen42.gitbooks.io/personalwiki/content/contribution.html).

#### :scroll: License

[MIT](https://aleen42.gitbooks.io/personalwiki/content/MIT.html) © aleen42

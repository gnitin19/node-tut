//npm - global command , comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it on any project
//npm install -g <packageName>

//package.json - manifest file(stores important info about project/package)
//manual approach (create package.json in the root , create properties etc)
//npm init (step by step ,press enter to skip)
//npm init -y (everything default)
// we need json file because the packages we install from npm is stored as dependencies

//.gitignore is used to place modules that should be ignored by the git

const _ = require('lodash') // we have installed it from npm

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);

//Modules - Encapsulated code
//every file by default is a module
const names = require('./4-names')
const sayHi = require('./5-utils')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
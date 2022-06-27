const { join } = require('path')
const { existsSync } = require('fs')
global.l = console.log

class Load{

  constructor(moduleName,path){
    this.moduleName = moduleName
    this.path = path || join(__dirname,'../addons')
  }

  init(moduleName,path){
    this.moduleName = moduleName
    this.path = path || join(__dirname,'../addons')
  }

  getModule(moduleName){
    moduleName = moduleName || this.moduleName
    let path = join(this.path,moduleName,'build/Release',moduleName+'.node')
    if(!existsSync(path)) throw Error('invaild path: '+path)
    return require(path)
  }

}

module.exports = Load

// test
// let hi = new Load('greet').getModule()
// l(hi)
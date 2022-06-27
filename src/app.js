const Load = require('./load')
const load = new Load() 

const greet = load.getModule('greet')
l(greet.hello())
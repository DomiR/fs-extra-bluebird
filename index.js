// Bluebird promisify fs-extra
//

var Promise = require("bluebird")
var fs = require("fs-extra")
module.exports = Promise.promisifyAll(fs)

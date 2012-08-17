var fs = require('fs')
,   envFile = '/home/dotcloud/environment.json'

,   ENV = require('./dotcloud') || require('./local')

module.exports = {
     port_www: ENV.PORT_WWW || 8080

    ,redis: ENV.REDIS || undefined

    ,auth: ENV.AUTH
}

var fs = require('fs')
,   envFile = '/home/dotcloud/environment.json'
,   is_dotcloud = fs.existsSync(envFile)

,   ENV = is_dotcloud
        ? require('./config_dotcloud.js')
        : fs.existsSync('./config_local.js')
            ? require('./config_local')
            : {}


module.exports = {
     port_www: ENV.PORT_WWW || 8080

    ,redis: ENV.REDIS || undefined

    ,auth: ENV.AUTH
}

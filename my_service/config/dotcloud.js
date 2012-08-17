var fs = require('fs')
,   envFile = '/home/dotcloud/environment.json'
,   is_dotcloud = fs.existsSync(envFile)
,   rawENV = is_dotcloud && JSON.parse(fs.readFileSync(envFile))

module.exports = !is_dotcloud ? null : {
    PORT_WWW: rawENV.PORT_WWW

    ,REDIS: {
         host:      rawENV.DOTCLOUD_REDIS_REDIS_HOST
        ,port:      rawENV.DOTCLOUD_REDIS_REDIS_PORT
        ,user:      rawENV.DOTCLOUD_REDIS_REDIS_USER
        ,pass:      rawENV.DOTCLOUD_REDIS_REDIS_PASS
    }

    ,AUTH: {
         user:      rawENV.AUTH_USER
        ,pass:      rawENV.AUTH_PASS
    }
}
    

var fs = require('fs')
,   envFile = '/home/dotcloud/environment.json'

,   rawENV = JSON.parse(fs.readFileSync(envFile))


module.exports = {
    REDIS: {
         host:   rawENV.DOTCLOUD_REDIS_REDIS_HOST
        ,port:  rawENV.DOTCLOUD_REDIS_REDIS_PORT
        ,user:  rawENV.DOTCLOUD_REDIS_REDIS_USER
        ,pass:  rawENV.DOTCLOUD_REDIS_REDIS_PASS
    }
}
        

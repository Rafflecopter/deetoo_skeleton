var fs = require('fs')
,   envFile = '/home/dotcloud/environment.json'
,   is_dotcloud = fs.existsSync(envFile)

,   ENV = is_dotcloud
        ? JSON.parse(fs.readFileSync(envFile))
        : fs.existsSync('./config_local.js')
            ? require('./config_local')
            : {}


// TODO:
//  write a config_dotcloud file that exports a function
//  that takes in the dotcloud ENV and spits out
//  a config.
//
//  ie, it would take in 
//  {
//       DOTCLOUD_REDIS_REDIS_HOST: 'shinerdog'
//      ,DOTCLOUD_REDIS_REDIS_PORT: 1234
//      ,DOTCLOUD_REDIS_REDIS_USER: 'hund'
//      ,DOTCLOUD_REDIS_REDIS_PASS: 'meatm0uth'
//  }
//
//  and spit out
//  {
//      redis: {
//           host: 'shinerdog'
//          ,port: 1234
//          ,user: 'hund'
//          ,pass: 'meatmouth'
//      }
//  }
//


module.exports = {

}


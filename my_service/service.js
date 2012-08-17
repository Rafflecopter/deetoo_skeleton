var CONF = require('./config')
,   d2 = require('deetoo').init(CONF)


d2.can('hammer', function(job, $done) {

  // A sample task that takes 10 seconds
  // and updates progress 5 times

  function nextStep() {
    job.progress(++step, 5)
    console.log('  ---]')
  }

  function stop() {
    clearTimeout(ticker)
    $done()
    console.log('Finished hammering... ' + job.id)
  }

  var step = 0
    , ticker = setInterval(nextStep, 2000)

  setTimeout(stop, 10000)

  console.log('Starting to hammer... ' + job.id)
})

d2.speaks('http')

d2.start(function(){})



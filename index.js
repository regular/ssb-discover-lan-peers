const pull = require('pull-stream')
const onEnd = require('pull-through-end')
const Lan = require('ssb-lan')

module.exports = function(netKey, opts) {
  opts = opts || {}
  const {legacy} = opts
  const shs = netKey
  const id = ''

  const config = {
    caps: {shs},
    lan: {legacy}
  }
  const ssb = {
    id,
    getAddress: ()=>undefined
  }
  const {start, stop, discoveredPeers} = Lan.init(ssb, config)
  start()
  return pull(
    discoveredPeers(),
    onEnd( (err, cb) =>{
      stop()
      cb()
    })
  )
}

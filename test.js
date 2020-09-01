const pull = require('pull-stream')
const discovery = require('.')

pull(
  discovery('FZ0EmZO8NAhI8BLk5F1gxdBOTOO42BV9V6R4+KZS77c=', {legacy: false}),
  pull.take(5),
  pull.log()
)


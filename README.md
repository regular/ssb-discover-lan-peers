ssb-discover-lan-peers
---

Uses ssb-lan to discover ssb peers on the local network sharing a specified caps.shs (network key). This is useful for clients to auto-discover ssb-servers around them. The differences to ssb-lan are:

- it does not broadcast
- it is not a plugin for ssb-server but a stand-alone module (that wraps ssb-lan)

``` js
const pull = require('pull-stream')
const discovery = require('.')

pull(
  discovery('FZ0EmZO8NAhI8BLk5F1gxdBOTOO42BV9V6R4+KZS77c=', {legacy: false}),
  pull.take(1),
  pull.log()
)
```

output:

```
{
  address: 'net:192.168.1.125:63942~shs:B7xq7G7kCUJ1YIlb8p29UizHP/p8Aw3DVrdx00EDO8g=',
  verified: true
}
```

---
License: MIT

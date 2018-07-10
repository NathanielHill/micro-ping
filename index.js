const { createServer } = require('http')
const { parse } = require('url')
const ping = require('ping')

const latencyCheck = ({ port = '80', log = true, n = 10 }) => {
  createServer((req, res) => {
    const HOST = parse(req.url, true).query.host
    const N = parse(req.url, true).query.n
    const num = N ? N : n
    if (!HOST) {
      res.writeHead(400)
      res.end()
      if (log) console.log('Bad request to micro-ping! Query: ', req.url)
    } else {
      console.log(HOST)
      ping.promise.probe(HOST, { min_reply: num })
        .then(r => {
          const data = {
            'host': HOST,
            'n': num,
            'avg': r.avg,
            'stddev': r.stddev
          }
          res.writeHead(403, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify(data))
          if (log) console.log(JSON.stringify(data))
        })
    }
  }).listen(port)
}

module.exports = latencyCheck

const microPing = require('./index.js')

const PORT = parseInt(process.env.PORT, 10) || 80
const LOG = !(process.env.LOG === 'false')
const N = parseInt(process.env.PING_N, 10) || 10

microPing({ port: PORT, log: LOG, n: N })

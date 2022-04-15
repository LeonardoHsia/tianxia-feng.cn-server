import {IncomingMessage, ServerResponse} from 'http'


const http = require('http')
const ProgressBar = require('progress')
const hostname = '127.0.0.1'
const port = 3000

const foo = 123;
const bar = foo.toString()

let libs = require('./library')

const server = http.createServer((req:IncomingMessage, res:ServerResponse) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
  console.log(require('minimist')(process.argv.slice(2)))
  doAfter()
})

function doAfter(){
  
  console.log(require('./utils/test').helloworld('Xiatian'))

    // let bar = new ProgressBar(':bar', {total: 20})
    // const timer = setInterval(() => {
    //   bar.tick()
    //   if(bar.complete) {
    //     clearInterval(timer)
    //   }
    // }, 100)
}

import { Console } from 'console'
import express from 'express'
const app = express()
const port = prcess.env.PORT ||3000

app.get('/', (req, res) => {
    Console.LOG('Response from Shahmir computer',+ req.ip);
    res.send('Response from Shahmir computer')
  res.send('Hello World!',+ req.ip);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
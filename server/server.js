const fs = require('fs')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// const uid = require('uid')

const { DB_URL, PORT = 2234 } = process.env

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error))

const serverApp = express()
serverApp.use(express.json())
serverApp.use(cors())

serverApp.use('/users', require('./routes/users'))

serverApp.listen(PORT, () =>
  console.log(`Server ready on http://localhost:${PORT}`)
)

// function saveToJson(pathToJson, contentToSave, res, output) {
//   fs.writeFile(pathToJson, JSON.stringify(contentToSave, null, 2), err => {
//     if (err) {
//       res.end('Error: could not write file.')
//     } else {
//       res.json(output)
//     }
//   })
// }

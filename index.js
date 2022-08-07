// const axios = require('axios')
// const cheerio = require('cheerio')
// const pretty = require('pretty')

// // <input id="SearchBar-input">
// const scrape = async () => {
//   try {
//     const { data } = await axios.get(
//       'https://www.smithsfoodanddrug.com/p/powerade-mountain-berry-blast-electrolyte-vitamin-sports-drink/0004900007935?fulfillment=PICKUP&searchType=default_search'
//     )
//     // Load HTML we fetched in the previous line
//     const $ = cheerio.load(data)
//     const items = $('data[typeOf=Price]')
//     items.each((i, item) => {
//       console.log(item.attribs.value)
//     })
//   } catch (e) {
//     console.log(e)
//   }
// }

// scrape()

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()

const app = express()
// const validatePayload = require('./utils/ValidatePayload')

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/routes'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app

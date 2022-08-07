const axios = require('axios')
const cheerio = require('cheerio')
const pretty = require('pretty')

class ProductController {
  constructor() {}

  Scrape = async () => {
    try {
      const { data } = await axios.get(
        'https://www.smithsfoodanddrug.com/p/powerade-mountain-berry-blast-electrolyte-vitamin-sports-drink/0004900007935?fulfillment=PICKUP&searchType=default_search'
      )
      // Load HTML we fetched in the previous line
      const $ = cheerio.load(data)
      const items = $('data[typeOf=Price]')
      return items
      // items.each((i, item) => {
      //     console.log(item.attribs.value)
      // })
    } catch (e) {
      console.log(e)
      return null
    }
  }
}

module.exports = ProductController

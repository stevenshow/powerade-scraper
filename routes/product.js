const { json } = require('express')
const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

const productController = new ProductController()

router.get('/', async (req, res) => {
  res.status(200).send(await productController.Scrape())
})

module.exports = router

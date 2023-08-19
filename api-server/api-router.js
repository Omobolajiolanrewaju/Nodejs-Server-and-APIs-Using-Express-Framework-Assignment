const express = require('express')
const controller = require('./api-controller')
const bodyParser = require('body-parser')

const router = express.Router();

router.use(bodyParser.json())

// Add Items
router.post('/', controller.addItem)

// Get one Item
router.get('/:id', controller.getOneItem)

// Get all items
router.get('/', controller.getAllItem)

// Update Item
router.put('/:id', controller.updateItem)

// Delete item
router.delete('/:id', controller.deleteItem)

module.exports = router
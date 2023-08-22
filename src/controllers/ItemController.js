const Item = require('../models/Item')

// Get list
const getAll = async (req, res) => {
  try {
    const items = await Item.find()
    res.json(items)
  } catch (error) {
    res.status(500).json({ message: 'Error getting list - ', error })
  }
};

// Get by ID
const getById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
    if (!item) {
      return res.status(404).json({ message: 'Not found'})
    }
    res.json(item)
  } catch (error) {
    res.status(500).json({ message: 'Error getting the item - ', error})
  }
};

// Create
const create = async (req, res) => {
  try {
    const newItem = await Item.create(req.body)
    res.status(201).json(newItem)
  } catch (error) {
    res.status(500).json({ message: 'Error while creating the item - ', error})
  }
};

// Update by ID
const updateById = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.body.id, req.body, { new: false })
    if (!updatedItem) {
      return res.status(404).json({ message: 'Not found'})
    }
    res.json(updatedItem)
  } catch (error) {
    res.status(500).json({ message: 'Error while updating - ', error })
  }
};

// Delete by ID
const deleteById = async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndRemove(req.params.id)
    if (!deletedItem) {
      return res.status(404).json({ message: 'Not found' })
    }
    res.json({ message: 'Deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting - ', error })
  }
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
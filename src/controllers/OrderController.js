const Order = require('../models/Order');

// Controller to get all orders
const getAll = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving orders', error });
  }
};

// Controller to get a specific order by ID
const getById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving order', error });
  }
};

// Controller to create a new order
const create = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
};

// Controller to update an existing order by ID
const updateById = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.body.id, req.body, { new: false });
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error updating order', error });
  }
};

// Controller to delete an order by ID
const deleteById = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndRemove(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting order', error });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
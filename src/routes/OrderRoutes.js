const express = require('express')
const router = express.Router()
const orderController = require('../controllers/OrderController')
const ms = 'order'

/**
 * @openapi
 * /api/order:
 *   get:
 *     summary: GET Order[{}]
 *     description: All Orders
 *     tags:
 *       - Orders
 *     responses:
 *       '200':
 *         description: Order[{}]
 *       '400':
 *         description: Bad request - Invalid input data
 *       '500':
 *         description: Internal server error
 */
router.get(`/${ms}`, (req, res) => orderController.getAll(req, res))

/**
 * @openapi
 * /api/order/{id}:
 *   get:
 *     summary: GET Order{}
 *     description: Get 1 Order by its GUID
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Order{}
 *       '400':
 *         description: Bad request - Invalid input data
 *       '404':
 *         description: Order not found
 *       '500':
 *         description: Internal server error
 */
router.get(`/${ms}/:id`, (req, res) => orderController.getById(req, res))

/**
 * @openapi
 * /api/order:
 *   post:
 *     summary: POST Order{}
 *     description: Create 1 Order
 *     tags:
 *       - Orders
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum:
 *                   - Approve
 *                   - Cancel
 *                   - Delivery
 *                   - Traveling
 *                 description: The status of the order.
 *               client:
 *                 type: string
 *                 description: The client's name.
 *               shippingAddress:
 *                 type: string
 *                 description: The shipping address.
 *               shippingPromise:
 *                 type: string
 *                 format: date-time
 *                 description: The promised shipping date and time.
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: The title of the item.
 *                     description:
 *                       type: string
 *                       description: The description of the item.
 *                     url:
 *                       type: string
 *                       description: The URL of the item.
 *                     price:
 *                       type: number
 *                       description: The price of the item.
 *                     quantity:
 *                       type: integer
 *                       description: The quantity of the item.
 *     responses:
 *       '200':
 *         description: Order{}
 *       '400':
 *         description: Bad request - Invalid input data
 *       '500':
 *         description: Internal server error
 */
router.post(`/${ms}`, (req, res) => orderController.create(req, res))

/**
 * @swagger
 * /api/order:
 *   put:
 *     summary: PUT Order{}
 *     description: Update existing order
 *     tags:
 *       - Orders
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The id of the order.
 *               status:
 *                 type: string
 *                 enum:
 *                   - Approve
 *                   - Cancel
 *                   - Delivery
 *                   - Traveling
 *                 description: The status of the order.
 *               client:
 *                 type: string
 *                 description: The client's name.
 *               shippingAddress:
 *                 type: string
 *                 description: The shipping address.
 *               shippingPromise:
 *                 type: string
 *                 format: date-time
 *                 description: The promised shipping date and time.
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: The title of the item.
 *                     description:
 *                       type: string
 *                       description: The description of the item.
 *                     url:
 *                       type: string
 *                       description: The URL of the item.
 *                     price:
 *                       type: number
 *                       description: The price of the item.
 *                     quantity:
 *                       type: integer
 *                       description: The quantity of the item.
 *     responses:
 *       '200':
 *         description: Order updated successfully
 *       '400':
 *         description: Bad request - Invalid input data
 *       '404':
 *         description: Not found
 *       '500':
 *         description: Error
 */
router.put(`/${ms}`, (req, res) => orderController.updateById(req, res))

/**
 * @openapi
 * /api/order/{id}:
 *   delete:
 *     summary: DELETE Order{}
 *     description: Delete 1 Order by its ID
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Deleted
 *       '400':
 *         description: Bad request - Invalid input data
 *       '404':
 *         description: Not found
 *       '500':
 *         description: Error
 */
router.delete(`/${ms}/:id`, (req, res) => orderController.deleteById(req, res))

module.exports = router
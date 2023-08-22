const express = require('express')
const router = express.Router()
const itemController = require('../controllers/ItemController')
const ms = 'item'

/**
 * @openapi
 * /api/item:
 *   get:
 *     summary: GET Item[{}]
 *     description: All Items in DB
 *     tags:
 *       - Items
 *     responses:
 *       '200':
 *         description: Item[{}]
 *       '400':
 *         description: Bad request - Invalid input data
 *       '500':
 *         description: Internal server error
 */
router.get(`/${ms}`, (req, res) => itemController.getAll(req, res));

/**
 * @openapi
 * /api/item/{id}:
 *   get:
 *     summary: GET Item{}
 *     description: Get Item by GUID
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Item GUID
 *     responses:
 *       '200':
 *         description: Item{}
 *       '400':
 *         description: Bad request - Invalid input data
 *       '404':
 *         description: Not found
 *       '500':
 *         description: Internal server error
 */
router.get(`/${ms}/:id`, (req, res) => itemController.getById(req, res));

/**
 * @openapi
 * /api/item:
 *   post:
 *     summary: POST Item{}
 *     description: Insert Items one at a time
 *     tags:
 *       - Items
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the item.
 *               description:
 *                 type: string
 *                 description: The description of the item.
 *               url:
 *                 type: string
 *                 description: The URL of the item.
 *               price:
 *                 type: number
 *                 description: The price of the item.
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the item.
 *     responses:
 *       '200':
 *         description: Created - object
 *       '400':
 *         description: Bad request - Invalid input data
 *       '500':
 *         description: Internal server error
 */
router.post(`/${ms}`, (req, res) => itemController.create(req, res));

/**
 * @openapi
 * /api/item:
 *   put:
 *     summary: PUT Item{}
 *     description: Update 1 Item
 *     tags:
 *       - Items
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the item.
 *               description:
 *                 type: string
 *                 description: The description of the item.
 *               url:
 *                 type: string
 *                 description: The URL of the item.
 *               price:
 *                 type: number
 *                 description: The price of the item.
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the item.
 *     responses:
 *       '200':
 *         description: Updated
 *       '400':
 *         description: Bad request - Invalid input data
 *       '404':
 *         description: Not found
 *       '500':
 *         description: Internal server error
 */
router.put(`/${ms}`, (req, res) => itemController.updateById(req, res));

/**
 * @openapi
 * /api/item/{id}:
 *   delete:
 *     summary: DELETE Item{}
 *     description: Delete 1 Item by it's ID
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Item GUID
 *     responses:
 *       '200':
 *         description: Deleted
 *       '400':
 *         description: Bad request - Invalid input data
 *       '404':
 *         description: Not found
 *       '500':
 *         description: Error deleting
 */
router.delete(`/${ms}/:id`, (req, res) => itemController.deleteById(req, res));

module.exports = router;
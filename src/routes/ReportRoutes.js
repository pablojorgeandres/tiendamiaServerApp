const express = require('express')
const router = express.Router()
const reportController = require('../controllers/ReportController')
const ms = 'reports'

/**
 * @openapi
 * /api/reports/approve-and-near-delivery:
 *   get:
 *     summary: GET Approve near delivery Order[{}]
 *     description: All approve near delivery Orders
 *     tags:
 *       - Reports
 *     responses:
 *       '200':
 *         description: Order[{}]
 *       '400':
 *         description: Bad request - Invalid input data
 *       '500':
 *         description: Internal server error
 */
router.get('/reports/approve-and-near-delivery', (req, res) => reportController.getApproveAndNearDeliveryOrders(req, res))

/**
 * @openapi
 * /api/reports/traveling-between-dates:
 *   get:
 *     summary: GET traveling between dates Order[{}]
 *     description: All traveling between dates Orders
 *     tags:
 *       - Reports
 *     parameters:
 *       - in: path
 *         name: startDate
 *         required: true
 *         schema:
 *           type: Date
 *       - in: path
 *         name: endDate
 *         required: true
 *         schema:
 *           type: Date
 *     responses:
 *       '200':
 *         description: Order[{}]
 *       '400':
 *         description: Bad request - Invalid input data
 *       '500':
 *         description: Internal server error
 */
router.get('/reports/traveling-between-dates', (req, res) => reportController.getTravelingOrdersBetweenDates(req, res))

module.exports = router
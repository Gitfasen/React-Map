const express = require('express')

const MarkerCtrl = require('../controllers/marker-ctrl')

const router = express.Router()

router.post('/marker', MarkerCtrl.createMarker)
router.delete('/marker/clear', MarkerCtrl.clearMarkers)
router.get('/markers', MarkerCtrl.getMarkers)

module.exports = router
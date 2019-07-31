const Marker = require('../models/Marker-model')

createMarker = (req, res) => {
		const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const marker = new Marker({
			lat : body.lat,
			lng : body.lng
		})

    if (!marker) {
        return res.status(400).json({ success: false, error: err })
    }

    marker
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: marker._id,
                message: 'Marker created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Marker not created!',
            })
        })
}

getMarkers = async (req, res) => {
    await Marker.find({}, (err, markers) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!markers.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: markers })
    }).catch(err => console.log(err))
}

module.exports = {
    createMarker,
    getMarkers,
}
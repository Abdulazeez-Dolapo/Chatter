const { Participant } = require("../database/models")

const saveParticipants = async participants => {
	return await Participant.bulkCreate(participants)
}

module.exports = { saveParticipants }

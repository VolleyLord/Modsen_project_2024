const Meetup = require('../models/meetupModel');
const MeetupAttendee = require('../models/meetupAttendeeModel');

async function createMeetup(data) {
    return await Meetup.create(data);
}

async function getMeetupById(id) {
    return await Meetup.findByPk(id);
}

async function registerAttendee(meetupId, userId) {
    return await MeetupAttendee.create({ meetupId, userId, status: 'registered' });
}

async function updateAttendeeStatus(meetupId, userId, status) {
    const attendee = await MeetupAttendee.findOne({
        where: { meetupId, userId },
    });
    if (attendee) {
        attendee.status = status;
        await attendee.save();
        return attendee;
    }
    return null;
}

module.exports = {
    createMeetup,
    getMeetupById,
    registerAttendee,
    updateAttendeeStatus,
};

import MeetupAttendee from '../models/meetupAttendeeModel.js';
import Meetup from '../models/meetupModel.js';


async function createMeetup(data) {
    return await Meetup.create(data);
}

async function getMeetupById(id) {
    return await Meetup.findByPk(id);
}

async function registerAttendee(meetupId, userId) {
    return await MeetupAttendee.create({ meetupId, userId, status: 'registered' });
}


export const updateAttendeeStatus = async (meetupId, userId, status) => {
    const attendee = await MeetupAttendee.findOne({ where: { meetupId, userId } });
    if (!attendee) {
        throw new Error(`No attendee found for meetup ${meetupId} and user ${userId}`);
    }
    attendee.status = status;
    await attendee.save();
    return attendee;
};

module.exports = {
    createMeetup,
    getMeetupById,
    registerAttendee,
    updateAttendeeStatus,
};

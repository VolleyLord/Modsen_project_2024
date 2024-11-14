import Meetup from '../models/meetupModel.js';

export const createMeetup = async (req, res) => {
    try {
        const meetup = await Meetup.create(req.body);
        res.status(201).json(meetup);
    } catch (error) {
        res.status(500).json({ error: 'Error creating meetup' });
    }
};

export const getMeetups = async (req, res) => {
    try {
        const meetups = await Meetup.findAll();
        res.json(meetups);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching meetups' });
    }
};

export const getMeetupById = async (req, res) => {
    try {
        const meetup = await Meetup.findByPk(req.params.id);
        if (!meetup) return res.status(404).json({ error: 'Meetup not found' });
        res.json(meetup);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching meetup' });
    }
};

export const updateMeetup = async (req, res) => {
    try {
        const meetup = await Meetup.findByPk(req.params.id);
        if (!meetup) return res.status(404).json({ error: 'Meetup not found' });
        await meetup.update(req.body);
        res.json(meetup);
    } catch (error) {
        res.status(500).json({ error: 'Error updating meetup' });
    }
};

export const deleteMeetup = async (req, res) => {
    try {
        const meetup = await Meetup.findByPk(req.params.id);
        if (!meetup) return res.status(404).json({ error: 'Meetup not found' });
        await meetup.destroy();
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting meetup' });
    }
};

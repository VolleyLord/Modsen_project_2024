import express from 'express';
import {
    createMeetup,
    getMeetups,
    getMeetupById,
    updateMeetup,
    deleteMeetup,
} from '../controllers/meetupController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createMeetup);
router.get('/', getMeetups);
router.get('/:id', getMeetupById);
router.put('/:id', authMiddleware, updateMeetup);
router.delete('/:id', authMiddleware, deleteMeetup);

export default router;

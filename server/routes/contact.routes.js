import express from 'express';
import contactController from '../controllers/contactController.js';
import { validateRequest } from '../middleware/validationMiddleware.js';
import { contactSchema } from '../models/contactModel.js';

const router = express.Router();

router.post('/submit', validateRequest(contactSchema), contactController.submitForm);

export default router;

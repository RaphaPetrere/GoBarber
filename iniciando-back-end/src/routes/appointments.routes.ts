import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import AppointmentsRespository from '../repositories/AppointmentsRespository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();

appointmentsRouter.get('/', async (request, response) => {
    const appointmentsRespository = getCustomRepository(AppointmentsRespository);
    const appointments = await appointmentsRespository.find();

    return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
    try {
        const { provider_id, date } = request.body;

        const parsedDate = parseISO(date);

        const createAppointment = new CreateAppointmentService();
        
        const appointment = await createAppointment.execute({ provider_id, date: parsedDate });

        return response.json(appointment);
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
});

export default appointmentsRouter;
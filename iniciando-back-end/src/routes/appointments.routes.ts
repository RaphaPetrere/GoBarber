import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRespository from '../repositories/AppointmentsRespository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRespository = new AppointmentsRespository();

appointmentsRouter.get('/', (request, response) => {
    const appointments = appointmentsRespository.all();

    return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
    try {
        const { provider, date } = request.body;

        const parsedDate = parseISO(date);

        const createAppointment = new CreateAppointmentService(appointmentsRespository);
        
        const appointment = createAppointment.execute({ provider, date: parsedDate });

        return response.json(appointment);
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
});

export default appointmentsRouter;
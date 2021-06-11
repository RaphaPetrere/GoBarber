import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import AppointmentsRespository from '../repositories/AppointmentsRespository';
import CreateAppointmentService from '../services/CreateAppointmentService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated); 
//Aplicando o middleware em todas as rotas de appointments

appointmentsRouter.get('/', async (request, response) => {
    const appointmentsRespository = getCustomRepository(AppointmentsRespository);
    const appointments = await appointmentsRespository.find();

    return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();
    
    const appointment = await createAppointment.execute({ provider_id, date: parsedDate });

    return response.json(appointment);
});

export default appointmentsRouter;
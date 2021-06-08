import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import Appointment from '../models/Appointment';
import AppointmentsRespository from '../repositories/AppointmentsRespository';

interface Request {
    provider_id: string;
    date: Date;
}

class CreateAppointmentService {
    public async execute({ provider_id, date }: Request): Promise<Appointment> {
        const appointmentsRespository = getCustomRepository(AppointmentsRespository);
        
        const appointmentDate = startOfHour(date);

        const findAppointmentInSameDate = await appointmentsRespository.findByDate(
            appointmentDate
        );

        if(findAppointmentInSameDate){
            throw Error('This appointment is already booked');
        }

        const appointment = appointmentsRespository.create({
            provider_id, date: appointmentDate
        });

        await appointmentsRespository.save(appointment);

        return appointment;
    }
}

export default CreateAppointmentService;
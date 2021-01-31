import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentsRespository from '../repositories/AppointmentsRespository';

interface Request {
    provider: string;
    date: Date;
}

class CreateAppointmentService {
    private appointmentsRespository: AppointmentsRespository;
    
    constructor(appointmentsRepository: AppointmentsRespository) {
        this.appointmentsRespository = appointmentsRepository;
    }

    public execute({ provider, date }: Request): Appointment {
        const appointmentDate = startOfHour(date);

        const findAppointmentInSameDate = this.appointmentsRespository.findByDate(appointmentDate);

        if(findAppointmentInSameDate){
            throw Error('This appointment is already booked');
        }

        const appointment = this.appointmentsRespository.create({provider, date: appointmentDate});

        return appointment;
    }
}

export default CreateAppointmentService;
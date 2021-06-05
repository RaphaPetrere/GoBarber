import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

//Esta falando de qual Entity ele é um repositório.
//Abaixo ele da um Extends do Repository passando como parametro a model
//que será utilizada.
@EntityRepository(Appointment)
class AppointmentsRespository extends Repository<Appointment> {
    public async findByDate(date: Date): Promise<Appointment | null> {
        const findAppointment = await this.findOne({
            where: {date},
        })

        return findAppointment || null;
    }
}

export default AppointmentsRespository;
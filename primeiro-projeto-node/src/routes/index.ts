import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
/*
Toda rota que utilizar /appointments, vai repassar oq estiver dps de appointments 
para esse appointmentsRouter.
Então tipo, vamos supor que vc cria um rota de post para criar usuários
/appointments/user
Você passará para o appointmentsRouter que vai utilizar a rota users.
*/
export default routes;
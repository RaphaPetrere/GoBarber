import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
            email: 'raphael.petrere@etapa.com.br', 
            password: '123456',
            techs: [
                'Node.js',
                'React JS',
                'React Native',
                {title: 'JavaScript', experience: 100},
            ],
        });
    
    return response.json({ message : 'Hello World'});
}
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

/*
    Utilizando o Decorator "@", ele funciona como se fosse uma função.
    Ele pega a função Entity e passa a classe como um parametro.
    Toda vez que nossa model Appointment for salva, ela será salva na tabela.
    Graças a Entity, o constructor é criado de forma automatica, 
    então n é necessário.
*/

@Entity('appointments')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    provider: string;

    @Column('timestamp with time zone')
    date: Date;
}

export default Appointment;
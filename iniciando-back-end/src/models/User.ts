import { 
    Column, 
    PrimaryGeneratedColumn, 
    Entity, 
    CreateDateColumn, 
    UpdateDateColumn 
} from 'typeorm';

/*
    Utilizando o Decorator "@", ele funciona como se fosse uma função.
    Ele pega a função Entity e passa a classe como um parametro.
    Toda vez que nossa model Appointment for salva, ela será salva na tabela.
    Graças a Entity, o constructor é criado de forma automatica, 
    então n é necessário.
*/

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @Column('varchar')
    email: string;
    
    @Column('varchar')
    password: string;
    
    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;
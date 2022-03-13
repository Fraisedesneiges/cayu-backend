import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUser(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(userId: number): Promise<User>;
    findUserByMail(mail: string): Promise<User>;
    remove(mail: string): Promise<void>;
}

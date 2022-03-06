import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUser(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(mail: string): Promise<User>;
    remove(mail: string): Promise<void>;
}

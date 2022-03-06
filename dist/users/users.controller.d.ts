import { User } from './user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(user: User): Promise<User>;
    test(req: any): Promise<User>;
}

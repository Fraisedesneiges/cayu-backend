import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(mail: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    getProfile(userId: number): Promise<{
        userId?: number;
        username: string;
        mail: string;
    }>;
}

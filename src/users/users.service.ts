import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  createUser(user: User) {
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(userId: number): Promise<User> {
    return this.usersRepository.findOne(userId);
  }

  findUserByMail(mail: string): Promise<User> {
    return this.usersRepository.findOne({ where: { mail: mail } });
  }

  async remove(mail: string): Promise<void> {
    await this.usersRepository.delete(mail);
  }
}

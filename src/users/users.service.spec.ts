import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { TypeOrmModuleConfigured } from './../orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule, TypeOrmModuleConfigured],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
function TypeOrmModuleOptions(
  TypeOrmModuleOptions: any,
):
  | import('@nestjs/common').Type<any>
  | import('@nestjs/common').DynamicModule
  | Promise<import('@nestjs/common').DynamicModule>
  | import('@nestjs/common').ForwardReference<any> {
  throw new Error('Function not implemented.');
}

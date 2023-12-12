import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { CreateUserInDto } from './dto/create-user-in-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async createUser(dto: CreateUserInDto) {
    return this.usersRepository.save(dto);
  }
  async getAllUsers() {
    return this.usersRepository.find();
  }
}

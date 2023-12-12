import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserInDto } from './dto/create-user-in-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserInDto) {
    return this.usersService.createUser(userDto);
  }
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }
}

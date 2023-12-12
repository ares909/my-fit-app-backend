import { ApiProperty } from '@nestjs/swagger';

export class CreateUserInDto {
  @ApiProperty({ example: 'some@yandex.ru', description: 'Электронная почта' })
  readonly email: string;
  @ApiProperty({ example: 'somepassword', description: 'Пароль пользователя' })
  readonly password: string;
}

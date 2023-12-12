import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class User {
  @ApiProperty({ example: '594d25b2-29c4-4e9e-a7c0-f813e9ab1c50', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ApiProperty({ example: 'some@yandex.ru', description: 'Электронная почта' })
  @Column({ unique: true })
  email: string;
  @ApiProperty({ example: 'false', description: 'Признак удаления пользователя' })
  @Column({ default: false })
  isDeleted: boolean;
  @ApiProperty({ example: 'Васян', description: 'Имя пользователя' })
  @Column({ nullable: true })
  name: string;
  @ApiProperty({ example: 'somepassword', description: 'Пароль пользователя' })
  @Column()
  password: string;
  @ApiProperty({ example: '594d25b2-29c4-4e9e-a7c0-f813e9ab1c50', description: 'Когда создано' })
  @CreateDateColumn()
  createdAt: Date;
  @ApiProperty({ example: '594d25b2-29c4-4e9e-a7c0-f813e9ab1c50', description: 'Когда обновлено' })
  @UpdateDateColumn()
  updatedAt: Date;
}

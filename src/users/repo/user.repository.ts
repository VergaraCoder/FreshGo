import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { IUserRepository } from 'src/common/utils/interfaces/user.repository.interface';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(data: CreateUserDto): Promise<User | User[]> {
    const dataCreate = this.userRepository.create(data);
    await this.userRepository.save(dataCreate);
    return dataCreate;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOneBy({ id });
  }

  async update(id: number, updateData: UpdateUserDto): Promise<boolean> {
    const { affected }: UpdateResult = await this.userRepository.update(
      id,
      updateData,
    );
    return affected !== 0;
  }
  async delete(id: number): Promise<boolean> {
    const { affected }: DeleteResult = await this.userRepository.delete(id);
    return affected !== 0;
  }
}

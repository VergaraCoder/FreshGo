import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserRepository } from 'src/common/utils/interfaces/user.repository.interface';
import { Result } from 'src/common/utils/patterResult/patternResult';
import { User } from './entities/user.entity';
import { CustomHttpException } from 'src/common/error/error.custom';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPO')
    private userRepo: IUserRepository,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      return await this.userRepo.create(createUserDto);
    } catch (err: any) {
      console.log(err);
    }
  }

  async findAll(): Promise<Result<User[]>> {
    const registers: User[] = await this.userRepo.findAll();
    if (registers.length == 0) {
      return {
        data: null,
        error: new CustomHttpException('THERE ARE NOT USERS', 404),
      };
    }
    return {
      data: registers,
      error: null,
    };
  }

  async findOne(id: number): Promise<Result<User>> {
    const register: User = await this.userRepo.findOne(id);
    if (!register) {
      return {
        data: null,
        error: new CustomHttpException('USER NOT FOUND', 404),
      };
    }
    return {
      data: register,
      error: null,
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const verify: boolean = await this.userRepo.update(id, updateUserDto);
    if (!verify) {
      return {
        data: null,
        error: new CustomHttpException('USER NOT FOUND', 404),
      };
    }
    return {
      data: true,
      error: null,
    };
  }

  async remove(id: number) {
    const verify: boolean = await this.userRepo.delete(id);
    if (!verify) {
      return {
        data: null,
        error: new CustomHttpException('USER NOT FOUND', 404),
      };
    }
    return {
      data: true,
      error: null,
    };
  }
}

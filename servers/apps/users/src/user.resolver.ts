import { RegisterDto } from './dto/user.dto';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './UsersService';
import { RegisterResponse } from './types/user.types';
import { Response } from 'express';
import { BadRequestException } from '@nestjs/common';
import { User } from './entities/user.entity';

@Resolver('User')
// UserFilters
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerInput') registerDto: RegisterDto,
    @Context() context: { res: Response },
  ): Promise<RegisterResponse> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please provide all required fields.');
    }

    const user = await this.userService.register(registerDto, context.res);
    return { user };
  }

  @Query(() => [User])
  async getUsers() {
    return this.userService.getUsers();
  }
}

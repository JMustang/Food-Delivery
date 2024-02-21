import { RegisterDto } from './dto/user.dto';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { RegisterResponse } from './types/user.types';
// import { Response } from 'express';
import { BadRequestException } from '@nestjs/common';

@Resolver('User')
// UserFilters
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerInput') registerDto: RegisterDto,
  ): Promise<RegisterResponse> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please provide all required fields.');
    }

    const user = await this.userService.register(registerDto);
    return { user };
  }
}

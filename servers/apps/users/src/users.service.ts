import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly JwtService: JwtService,
    // private readonly prisma
    private readonly ConfigService: ConfigService,
  ) {}

  // register user

  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;
    const user = {
      name,
      email,
      password,
    };
    return user;
  }
}

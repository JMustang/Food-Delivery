import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/user.dto';

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

  // Login service
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = { email, password };
    return user;
  }

  // Get all user service
  async getUsers() {
    const users = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        password: '1235467f',
      },
    ];
    return users;
  }
}

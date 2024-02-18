import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    private readonly JwtService: JwtService,
    // private readonly prisma
    private readonly ConfigService: ConfigService,
  ) {}
}

// src/auth-users/auth-users.service.ts
import { Injectable } from '@nestjs/common';

export type AuthUser = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class AuthUsersService {
  private readonly authUsers: AuthUser[] = [
    {
      userId: 1,
      username: process.env.AUTH_USERNAME,
      password: process.env.AUTH_PASSWORD,
    },
  ];

  async findOne(username: string): Promise<AuthUser | undefined> {
    return this.authUsers.find((user) => user.username === username);
  }
}

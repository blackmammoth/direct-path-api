// src/auth-users/auth-users.module.ts
import { Module } from '@nestjs/common';
import { AuthUsersService } from './auth-users.service';

@Module({
  providers: [AuthUsersService],
  exports: [AuthUsersService], // Export the AuthUsersService
})
export class AuthUsersModule {}

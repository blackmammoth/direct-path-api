import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstructionsModule } from './instructions/instructions.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthUsersModule } from './auth-users/auth-users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    InstructionsModule,
    UsersModule,
    AuthModule,
    AuthUsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

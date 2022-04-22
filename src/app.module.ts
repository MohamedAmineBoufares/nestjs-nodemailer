import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmailsModule } from './emails/emails.module';

@Module({
  imports: [ConfigModule.forRoot(), EmailsModule],
})
export class AppModule {}

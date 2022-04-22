import { Controller, Post, Body } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { CreateEmailDto } from './dto/create-email.dto';

@Controller('emails')
export class EmailsController {
  constructor(private emailsService: EmailsService) {}

  @Post()
  async sendEmail(@Body() createEmailDto: CreateEmailDto): Promise<string> {
    return this.emailsService.sendEmail(createEmailDto);
  }
}

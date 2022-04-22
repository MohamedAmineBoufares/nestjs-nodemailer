import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';

import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailsService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(createEmailDto: CreateEmailDto): Promise<string> {
    const { email, name } = createEmailDto;

    const emailSent = await this.mailerService.sendMail({
      to: email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Test email from NestJS!',
      template: 'confirmation', // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        name,
      },
    });
    console.log(emailSent);
    return 'email sent';
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { initializeTheWallet } from './utils/wallet';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    initializeTheWallet(process.env.WALLET_SECRET)
  }
  
  @Post('transferToken')
  transferToken(@Body() body): Promise<any> {
    return this.appService.transferToken(body);
  }

}

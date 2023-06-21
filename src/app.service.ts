import { Injectable } from '@nestjs/common';
import { transferCustomToken } from './utils/transferToken';
import { connection, payerAccount } from './utils/wallet'
import { PublicKey } from '@solana/web3.js';
@Injectable()
export class AppService {

  async transferToken(body: any): Promise<any>{
    try{
      console.log(body,'---body---')
      const {solAmount, toPublicKey} = body
      const result = await transferCustomToken(connection, payerAccount, solAmount, new PublicKey(toPublicKey))
      return result
    }catch(err){
      return err
    }
  }
}

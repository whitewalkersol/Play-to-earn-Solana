 import {sendAndConfirmTransaction, SystemProgram, Transaction} from '@solana/web3.js';

  export const transferCustomToken = async(connection, provider, tokenToTransfer, toPubkey)=>{
    try{
      if(tokenToTransfer <= 0){
        return {status: false, error: "You can not transfer, Token to transfer should be greater than 0."}
    }
    const createTransferTransaction = async (solStake) => {
      let transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: provider.publicKey,
          toPubkey: toPubkey,
          lamports: solStake ? solStake * 1000000000 : 1000000000, //amount in lamports
        })
      );
      transaction.feePayer = provider.publicKey;
      console.log('Getting recent blockhash');
      transaction.recentBlockhash = (
        await connection.getRecentBlockhash()
      ).blockhash;
      return transaction;
    };
    const transferSOLTransaction = await createTransferTransaction(tokenToTransfer)
    
    const transferSOLTransactionSignature = await sendAndConfirmTransaction(connection,transferSOLTransaction,[provider])
    return {
      status: true,
      transferSOLTransactionSignature
    }
    }catch(err){
      return {
        status: false,
        error: err
      }
    }
    
  }

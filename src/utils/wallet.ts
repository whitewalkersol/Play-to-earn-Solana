import * as bs58 from 'bs58';
const { Keypair, Connection } = require("@solana/web3.js");
let payerAccount;
let connection;
export const initializeTheWallet = (walletSecret) =>{
    const keypairString = walletSecret;
    const decoded = bs58.decode(keypairString);
    payerAccount = Keypair.fromSecretKey(decoded)
    const rpcUrl = 'https://api.devnet.solana.com'
    connection = new Connection(rpcUrl, 'confirmed');
}

export {
    payerAccount,
    connection
} 
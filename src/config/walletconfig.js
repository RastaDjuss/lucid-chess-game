import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

export const wallets = [
  new PhantomWalletAdapter(),
  // @ts-ignore
  new SolflareWalletAdapter({ network: WalletAdapterNetwork.event })
];
import { WalletProvider as SolanaWalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { wallets } from '../../config/walletconfig.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import React from 'react';
export const WalletProvider = ({ children }) => {
  return (
    <SolanaWalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>{children}</WalletModalProvider>
    </SolanaWalletProvider>
  );
};
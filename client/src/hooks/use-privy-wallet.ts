import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useMemo, useState, useEffect } from 'react';
import { ethers } from 'ethers';

export function usePrivyWallet() {
  const { authenticated, login, logout, user } = usePrivy();
  const { wallets } = useWallets();
  const [balance, setBalance] = useState<string>("0.0");
  const [isLoading, setIsLoading] = useState(false);

  const wallet = useMemo(() => {
    if (!authenticated || !wallets.length) return null;
    return wallets[0]; // Use first connected wallet
  }, [authenticated, wallets]);

  const address = wallet?.address || '';
  const isConnected = authenticated && !!wallet;

  const connect = async () => {
    try {
      setIsLoading(true);
      await login();
    } catch (error) {
      console.error('Privy connection error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const disconnect = async () => {
    try {
      await logout();
      setBalance("0.0");
    } catch (error) {
      console.error('Privy disconnection error:', error);
    }
  };

  const getProvider = async () => {
    if (!wallet) return null;
    
    try {
      const provider = await wallet.getEthereumProvider();
      return new ethers.BrowserProvider(provider);
    } catch (error) {
      console.error('Failed to get provider:', error);
      return null;
    }
  };

  const getSigner = async () => {
    const provider = await getProvider();
    if (!provider) return null;
    
    try {
      return await provider.getSigner();
    } catch (error) {
      console.error('Failed to get signer:', error);
      return null;
    }
  };

  const fetchBalance = async () => {
    if (!wallet || !address) return;
    
    try {
      const provider = await getProvider();
      if (!provider) return;
      
      console.log(`💰 Fetching balance for ${address}...`);
      
      // Get HYPE balance (native token on HyperEVM)
      const balanceWei = await provider.getBalance(address);
      const balanceEth = ethers.formatEther(balanceWei);
      
      console.log(`💰 Balance fetched: ${balanceEth} HYPE`);
      setBalance(parseFloat(balanceEth).toFixed(6));
      
    } catch (error) {
      console.error('Failed to fetch balance:', error);
      setBalance("0.0");
    }
  };

  // Auto-fetch balance when wallet connects
  useEffect(() => {
    if (isConnected && address) {
      fetchBalance();
      
      // Refresh balance every 30 seconds
      const interval = setInterval(fetchBalance, 30000);
      return () => clearInterval(interval);
    } else {
      setBalance("0.0");
    }
  }, [isConnected, address]);

  return {
    isConnected,
    address,
    balance,
    user,
    wallet,
    connect,
    disconnect,
    getProvider,
    getSigner,
    fetchBalance,
    isLoading,
  };
}
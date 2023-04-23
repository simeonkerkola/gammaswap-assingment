import { ReactNode, useEffect, useState } from 'react';

import { ethers } from 'ethers';
import useFavouritePools from '../hooks/useFavouritePools';
import createContext from './createContext';

interface Props {
  children: ReactNode;
}

type TAccountContext = {
  account: string;
  connect: () => void;
  addFavouritePool: (poolAddress: string) => void;
};

const provider = new ethers.BrowserProvider(window.ethereum);

const [useAccountContext, Provider] = createContext<TAccountContext>();

// const AccountContext = createContext<TAccountContext | undefined>(undefined);

export function AccountProvider({ children }: Props) {
  const [account, setAccount] = useState<string>('');
  const { favouritePools, addFavouritePool } = useFavouritePools(account);

  useEffect(() => {
    (window.ethereum as any).on('accountsChanged', connect);

    return () =>
      (window.ethereum as any).removeListener('accountsChanged', connect);
  }, []);

  async function connect() {
    const accounts = await provider.send('eth_requestAccounts', []);
    setAccount(accounts[0]);
  }

  const value = {
    account,
    connect,
    addFavouritePool,
  };
  return <Provider value={value}>{children}</Provider>;
}

export const useAccount = useAccountContext;

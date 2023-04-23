import { PropsWithChildren, useEffect, useState } from 'react';

import { ethers } from 'ethers';
import createContext from './createContext';

type TAccountContext = {
  account: string;
  connect: () => void;
};

const provider = new ethers.BrowserProvider(window.ethereum);

const [useAccountContext, Provider] = createContext<TAccountContext>();

// const AccountContext = createContext<TAccountContext | undefined>(undefined);

export function AccountProvider({ children }: PropsWithChildren) {
  const [account, setAccount] = useState<string>('');

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
  };
  return <Provider value={value}>{children}</Provider>;
}

export const useAccount = useAccountContext;

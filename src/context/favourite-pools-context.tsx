import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import createContext from './createContext';
import { getMany, set } from 'idb-keyval';

type Props = {
  account: string;
};

const [useFavouritePoolsContext, Provider] = createContext<{
  removeFavouritePool: (poolAddress: string) => void;
  addFavouritePool: (poolAddress: string) => void;
  favouritePools: string[];
}>();

export function FavouritePoolsProvider({
  children,
  account,
}: PropsWithChildren<Props>) {
  const [favouritePools, setFavouritePools] = useState<string[]>([]);
  const [prevAccount, setPrevAccount] = useState(account);
  const didMount = useRef(false);
  const key = account || 'unknown';

  if (account !== prevAccount) {
    console.log('account changed', { account });
    setInitialFavouritePools(account);
    setPrevAccount(account);
  }
  useEffect(() => {
    console.log('set default state here');
    setInitialFavouritePools(account);
  }, []);

  useEffect(() => {
    if (didMount.current) {
      updateCachedFavouritePools(account, favouritePools);
    }
  }, [favouritePools]);

  function addFavouritePool(poolAddress: string) {
    setFavouritePools([...favouritePools, poolAddress]);
  }

  function removeFavouritePool(poolAddress: string) {
    setFavouritePools(
      favouritePools.filter((address) => address !== poolAddress),
    );
  }

  async function setInitialFavouritePools(account: string) {
    const [cachedAccountPools = [], cachedPools = []] = await getMany<
      string[] | undefined
    >([account, 'unknown']);
    console.log({ cachedAccountPools, account });

    // Remove unknown from cached pools
    set('unknown', []);

    // TODO: Remove duplicate pools
    setFavouritePools([...cachedAccountPools, ...cachedPools]);
    didMount.current = true;
  }

  async function updateCachedFavouritePools(account: string, pools: string[]) {
    console.log('updateCachedFavouritePools', { account, pools });
    set(key, pools);
  }

  const value = {
    removeFavouritePool,
    addFavouritePool,
    favouritePools,
  };
  return <Provider value={value}>{children}</Provider>;
}

export const useFavouritePools = useFavouritePoolsContext;

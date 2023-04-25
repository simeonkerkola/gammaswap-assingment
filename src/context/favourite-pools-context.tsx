import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import createContext from './createContext';
import { getMany, set } from 'idb-keyval';

type Props = {
  account: string;
};

function getCacheKey(account: string): string {
  const prefix = 'favourite-pools:';
  return prefix + (account || 'unknown');
}

const [useFavouritePoolsContext, Provider] = createContext<{
  removeFromFavourites: (poolAddress: string) => void;
  addToFavourites: (poolAddress: string) => void;
  favouritePools: string[];
}>();

export function FavouritePoolsProvider({
  children,
  account,
}: PropsWithChildren<Props>) {
  const [favouritePools, setFavouritePools] = useState<string[]>([]);
  const [prevAccount, setPrevAccount] = useState(account);
  const didMount = useRef(false);
  const cacheKey = getCacheKey(account);

  if (account !== prevAccount) {
    setInitialFavouritePools();
    setPrevAccount(account);
  }
  useEffect(() => {
    setInitialFavouritePools();
  }, []);

  // Everytime favouritePools changes, update cache
  useEffect(() => {
    if (didMount.current) {
      set(cacheKey, favouritePools);
    }
  }, [favouritePools]);

  function addToFavourites(poolAddress: string) {
    setFavouritePools([...favouritePools, poolAddress]);
  }

  function removeFromFavourites(poolAddress: string) {
    setFavouritePools(
      favouritePools.filter((address) => address !== poolAddress),
    );
  }

  async function setInitialFavouritePools() {
    const unknownAccountKey = getCacheKey('');

    // Get cached pools of current account and unknown account
    const [cachedAccountPools = [], cachedPools = []] = await getMany<
      string[] | undefined
    >([cacheKey, unknownAccountKey]);

    // Remove duplicate pools when merging
    const uniquePools = [...new Set([...cachedAccountPools, ...cachedPools])];
    setFavouritePools(uniquePools);

    // Remove cached pools of unknown account
    set(unknownAccountKey, []);

    didMount.current = true;
  }

  const value = {
    removeFromFavourites,
    addToFavourites,
    favouritePools,
  };
  return <Provider value={value}>{children}</Provider>;
}

export const useFavouritePools = useFavouritePoolsContext;

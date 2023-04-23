import { useEffect, useRef, useState } from 'react';
import { set, getMany } from 'idb-keyval';

export default function useFavouritePools(account: string) {
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
    setFavouritePools([...cachedAccountPools, ...cachedPools]);
    didMount.current = true;
  }

  async function updateCachedFavouritePools(account: string, pools: string[]) {
    console.log('updateCachedFavouritePools', { account, pools });
    set(key, pools);
  }

  return {
    favouritePools,
    addFavouritePool,
    removeFavouritePool,
  };
}

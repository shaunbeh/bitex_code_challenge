// src/store.js
import { create } from 'zustand';

import endpoints from '@/lib/endpoints';
import type { CoinsList } from '@/types/api/gecko/data-contracts';

// Define types
type CoinsListStore = {
  coinsList: CoinsList | null;
  lastFetchedTimestamp: number | null;
  fetchCoinsList: () => Promise<void>;
};

const useLazyDataStore = create<CoinsListStore>((set, get) => ({
  coinsList: null,
  lastFetchedTimestamp: null,
  fetchCoinsList: async () => {
    try {
      const ONE_DAY_MS = 24 * 60 * 60 * 1000;
      const lastTime = get().lastFetchedTimestamp;
      const hasData = get().coinsList?.length;
      const shouldRefetch =
        !hasData && (!lastTime || Date.now() - lastTime > ONE_DAY_MS);

      if (shouldRefetch) {
        const response = await fetch(endpoints.coins.coinsList.url);
        const data = await response.json();
        set({ coinsList: data, lastFetchedTimestamp: Date.now() });
      }
    } catch (error) {
      console.error('Error fetching lazy data:', error);
    }
  },
}));

export default useLazyDataStore;

import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';

import HomepageTableHeader from '@/components/pages/homepage/HomepageTableHeader';
import { TokensTableColumns } from '@/components/pages/homepage/services/TokenTableColumns';
import BasicTable from '@/components/ui/Table';
import { TablePagingation } from '@/components/ui/Table/TablePagination';
import { TABLE_LIMIT } from '@/lib/config';
import endpoints from '@/lib/endpoints';
import useDebounce from '@/lib/hooks/useDebounce';
import useLazyDataStore from '@/store/zustandStore';
import {
  type CoinsMarkets,
  type CoinsMarketsParams,
  OrderEnum,
} from '@/types/api/gecko/data-contracts';
import type { ApiParamsT } from '@/types/commonTypes';

export default function Home() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // STORE
  const { coinsList, fetchCoinsList } = useLazyDataStore();

  useEffect(() => {
    // Fetch data lazily when the component mounts
    fetchCoinsList();
  }, []);

  // STATES
  const { searchText, debouncedText, setSearchText } = useDebounce('');

  // CONSTANTS
  // pagination
  const page = searchParams.get('page');
  const currPage = page ? +page : 1;
  const pageCount = coinsList?.length ?? 0 / TABLE_LIMIT;
  // sort
  const orderParam = searchParams.get('order');
  const order = orderParam
    ? (orderParam as OrderEnum)
    : OrderEnum.MarketCapDesc;
  const ids = useMemo(() => {
    if (coinsList && coinsList.length > 0 && debouncedText) {
      const filteredCoins = coinsList
        .filter(
          (el) =>
            el?.id?.includes(debouncedText) ||
            el?.name?.includes(debouncedText) ||
            el?.symbol?.includes(debouncedText),
        )
        .map((el) => el.id)
        .slice(0, 50);
      return `${filteredCoins.join(',')},${debouncedText}`;
    }
    return debouncedText;
  }, [debouncedText, coinsList]);

  // api call params
  const queryParams: ApiParamsT<CoinsMarketsParams> = {
    method: endpoints.coins.coinsWithMarketData.method,
    vs_currency: 'usd',
    sparkline: true,
    order,
    ids,
    per_page: TABLE_LIMIT,
    page: currPage,
  };

  // FUNCTIONS
  const handleSearchSort = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('order', term);
    } else {
      params.delete('order');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleCurrPage = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('page', term);
    } else {
      params.delete('page');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  // API CALLS
  const { data: marketsData } = useQuery<CoinsMarkets[]>({
    queryKey: [endpoints.coins.coinsWithMarketData.url, queryParams],
  });

  return (
    <div className='flex h-full py-4 sm:px-6'>
      <div className='custom-scroll-thin relative mx-auto flex h-[calc(100vh-100px)] w-full max-w-3xl flex-col overflow-hidden rounded-lg bg-white px-4'>
        <HomepageTableHeader
          handleSearchSort={handleSearchSort}
          search={searchText}
          setSearchText={setSearchText}
          sort={order}
          sortsList={Object.values(OrderEnum).slice(0, 4)}
        />
        <BasicTable data={marketsData ?? []} columns={TokensTableColumns} />
        <TablePagingation
          currPage={currPage}
          handleCurrPage={handleCurrPage}
          pageCount={pageCount}
        />
      </div>
    </div>
  );
}

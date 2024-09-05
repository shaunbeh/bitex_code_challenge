/* eslint-disable react/no-danger */
import { Separator } from '@radix-ui/react-select';
import axios from 'axios';
import { Refresh } from 'iconsax-react';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { useRouter } from 'next/router';

import MaxWidthWrapper from '@/components/basic/MaxWidthWrapper';
import TradingViewWidget from '@/components/common/TradingViewWidget';
import CoinSummaryCard from '@/components/pages/coins/CoinSummaryCard';
import type { CoinsIdParams } from '@/types/api/gecko/data-contracts';

export default function Coin({
  coinData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // HOOKS
  const router = useRouter();

  if (router.isFallback || !coinData) {
    return (
      <div className='flex h-[calc(100vh-64px)] w-full items-center justify-center'>
        <Refresh className='animate-spin' />
      </div>
    );
  }

  // CONSTANTS
  // const { coin } = router.query;
  // const queryParams: ApiParamsT<CoinsIdParams> = {
  //   method: endpoints.coins.coinDataWithId.method,
  //   developer_data: false,
  //   community_data: false,
  //   sparkline: false,
  //   localization: false,
  //   tickers: false,
  //   id: (coin as string) ?? '',
  // };
  // const { data: coinData } = useQuery<CoinsDataBase>({
  //   queryKey: [`${endpoints.coins.coinDataWithId.url}${coin}/`, queryParams],
  //   enabled: !!coin,
  // });

  return (
    <MaxWidthWrapper className='flex size-full flex-col justify-around gap-8 p-10'>
      <CoinSummaryCard coinData={coinData} />
      <div className='flex flex-1 flex-col gap-4 rounded-lg bg-white p-4 shadow-sm md:flex-row'>
        <div
          dir='ltr'
          dangerouslySetInnerHTML={{
            // __html: DOMPurify.sanitize(coinData?.description?.en ?? ''),
            __html: coinData?.description?.en ?? '',
          }}
          className='highlight min-w-[50%] md:w-min'
        />
        <Separator className='h-96 w-px bg-gray-300' />
        <div className='mb-8 flex h-96 grow items-center justify-center'>
          <TradingViewWidget symbol={coinData?.name} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
export const getStaticPaths = (async () => ({
  paths: [],
  fallback: true,
})) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const coin = params?.coin;

  const queryParams: CoinsIdParams = {
    developer_data: false,
    community_data: false,
    sparkline: false,
    localization: false,
    tickers: false,
    id: (coin as string) ?? '',
  };

  let coinData = {};
  try {
    const url = `https://api.coingecko.com/api/v3/coins/${coin}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': process.env.GECKO_SECRET,
      },
    };
    const res = await axios.get(url, {
      ...options,
      params: queryParams,
    });
    coinData = res.data;
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      coinData,
    },
    revalidate: 3600, // every hour
  };
};

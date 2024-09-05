import { Separator } from '@radix-ui/react-select';
import { BuyCrypto, DocumentCopy, ExportSquare, Global } from 'iconsax-react';
import Image from 'next/image';
import texts from 'public/locales/fa/fa.json';

import type { CoinsDataBase } from '@/types/api/gecko/data-contracts';

import CoinSummarySkeleton from './CoinSummarySkeleton';
import SummaryCardBadge from './SummaryCardBadge';

type PropsT = {
  coinData?: CoinsDataBase;
};

export default function CoinSummaryCard({ coinData }: PropsT) {
  if (!coinData) return <CoinSummarySkeleton />;

  return (
    <div className='flex w-full flex-col rounded-lg bg-white p-6 shadow-lg'>
      <div className='flex justify-between gap-4'>
        <div className='flex flex-col gap-4'>
          {coinData?.image?.large ? (
            <Image
              src={coinData.image.large.split('?')[0]}
              width={148}
              height={148}
              className='w-16 md:w-32'
              alt={`${coinData.name} icon`}
            />
          ) : (
            <BuyCrypto className='w-16 lg:w-32' />
          )}{' '}
        </div>
        <div className='flex grow flex-col items-start justify-end gap-4'>
          <h2 className='text-xl font-bold'>{coinData.name}</h2>

          <div className='flex items-center gap-2'>
            {coinData?.links && (
              <div className='flex items-center gap-4'>
                {typeof coinData.links.whitepaper === 'string' && (
                  <SummaryCardBadge
                    title={texts.coins.whitepater}
                    url={coinData.links.whitepaper}
                    prefixIcon={<ExportSquare size={12} />}
                    suffixIcon={<DocumentCopy size={14} />}
                  />
                )}
                {coinData?.links?.homepage?.[0] && (
                  <SummaryCardBadge
                    title={texts.coins.website}
                    url={coinData.links.homepage[0]}
                    suffixIcon={<Global size={14} />}
                    prefixIcon={<ExportSquare size={12} />}
                  />
                )}
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <span className='text-lg font-bold'>{texts.coins.price}</span>
          <div className='flex h-10 w-28 items-center gap-2 rounded-lg font-bold'>
            <span className='text-xl'>
              {coinData.market_data?.current_price?.usd?.toLocaleString()}
            </span>
            <span className='h-5 font-medium'>USD</span>
          </div>
        </div>
      </div>
      <Separator className='my-5 border' />
      <div className='flex gap-4'>
        {coinData?.links && (
          <div className='flex w-full items-center gap-4'>
            <div className='flex w-full items-center justify-between'>
              <div>
                <p className='text-sm font-semibold'>Current Price</p>
                <p className='text-gray-600'>
                  {coinData?.market_data?.current_price?.usd}
                </p>
              </div>
              <div>
                <p className='text-sm font-semibold'>All-Time High</p>
                <p className='text-gray-600'>
                  {coinData?.market_data?.ath?.usd}
                </p>
              </div>
              <div>
                <p className='text-sm font-semibold'>24-Hour Volume</p>
                <p className='text-gray-600'>
                  {coinData?.market_data?.total_volume?.usd}
                </p>
              </div>
              <div>
                <p className='text-sm font-semibold'>Market Cap</p>
                <p className='text-gray-600'>
                  {coinData?.market_data?.market_cap?.usd}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { createColumnHelper, type SortingFn } from '@tanstack/react-table';
import clsx from 'clsx';
import { BuyCrypto } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import texts from 'public/locales/fa/fa.json';
import { Sparklines, SparklinesLine } from 'react-sparklines';

import { roundDecimalDigits } from '@/lib/utils';
import type { CoinsMarkets } from '@/types/api/gecko/data-contracts';

const sortStatusFn: SortingFn<CoinsMarkets> = (rowA, rowB, _columnId) => {
  const rankA = rowA.original.market_cap_rank ?? 0;
  const rankB = rowB.original.market_cap_rank ?? 1;
  return rankA - rankB;
};
const columnHelper = createColumnHelper<CoinsMarkets>();
export const TokensTableColumns = [
  columnHelper.accessor('market_cap_rank', {
    header: texts.tokensList.table.rank,
    sortingFn: sortStatusFn,
    cell: ({ getValue }) => (
      <div className=' flex items-center justify-center gap-1'>
        <span className='text-sm'>{Number(getValue())}</span>
      </div>
    ),
  }),
  columnHelper.accessor('name', {
    header: texts.tokensList.table.name,
    cell: ({ row, getValue }) => (
      <Link href={`/coins/${row.original?.id}`}>
        <div className='flex h-10 w-fit items-center gap-2'>
          {row.original?.image ? (
            <Image
              src={row.original.image}
              className='size-6'
              width={24}
              height={24}
              alt={`${getValue()} icon`}
            />
          ) : (
            <BuyCrypto size={24} />
          )}
          <span className='h-4 max-w-[20ch] truncate'>{getValue()}</span>
        </div>
      </Link>
    ),
  }),
  columnHelper.accessor('price_change_percentage_24h', {
    header: texts.tokensList.table['24HourChange'],
    cell: ({ getValue }) => {
      const percent = getValue() ?? 0 * 100;
      return (
        <div className='flex items-center justify-center gap-1'>
          <span
            dir='ltr'
            className={clsx(
              percent > 0 ? 'text-green-700' : 'text-red-700',
              'text-sm',
            )}
          >
            {roundDecimalDigits(percent, 2)}%
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor('market_cap', {
    header: texts.tokensList.table.marketCap,
    cell: ({ getValue }) => (
      <div className='flex items-center justify-center gap-1'>
        <span className='text-sm'>${Number(getValue()).toLocaleString()}</span>
      </div>
    ),
  }),
  columnHelper.accessor('sparkline_in_7d.price', {
    header: texts.tokensList.table.weeklyChart,
    cell: ({ getValue }) => {
      const data = getValue();
      let color = 'grey';
      if (data) {
        color = data[data.length - 1] > data[0] ? 'green' : 'red';
      }
      return (
        <div className='min-w-32 md:min-w-48'>
          <Sparklines data={getValue()}>
            <SparklinesLine color={color} style={{ fill: 'none' }} />
          </Sparklines>
        </div>
      );
    },
  }),
];

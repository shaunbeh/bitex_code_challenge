import { Separator } from '@radix-ui/react-select';

import { Skeleton } from '@/components/ui/skeleton';

export default function CoinSummarySkeleton() {
  return (
    <div className='flex h-56 w-full flex-col rounded-lg bg-white p-6 shadow-lg md:h-64'>
      <div className='flex justify-between gap-4'>
        <div className='flex flex-col gap-4'>
          <Skeleton className='size-16 rounded-full md:size-32' />
        </div>
        <div className='flex grow flex-col items-start justify-end gap-4'>
          <Skeleton className='h-6 w-20 rounded-lg md:h-8 md:w-24' />
          <Skeleton className='h-6 w-20 rounded-lg md:h-8 md:w-24' />
          <div className='flex items-center gap-2'>
            <Skeleton className='h-8 w-20 rounded-lg md:h-10 md:w-24' />
            <Skeleton className='h-8 w-20 rounded-lg md:h-10 md:w-24' />
            <Skeleton className='h-8 w-20 rounded-lg md:h-10 md:w-24' />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Skeleton className='h-6 w-24 rounded-lg md:h-8 md:w-28' />
          <Skeleton className='h-8 w-24 rounded-lg md:h-10 md:w-28' />
          <Skeleton className='h-8 w-24 rounded-lg md:h-10 md:w-28' />
        </div>
      </div>
      <Separator className='my-5 border' />
      <div className='flex gap-4'>
        <Skeleton className='h-8 w-20 rounded-lg md:h-10 md:w-24' />
        <Skeleton className='h-8 w-20 rounded-lg md:h-10 md:w-24' />
        <Skeleton className='h-8 w-20 rounded-lg md:h-10 md:w-24' />
      </div>
    </div>
  );
}

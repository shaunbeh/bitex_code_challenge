import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

export default function HomepageTableHeader({
  search,
  setSearchText,
  handleSearchSort,
  sort,
  sortsList,
}: {
  search: string;
  setSearchText: (text: string) => void;
  handleSearchSort: (sort: string) => void;
  sort: string | null;
  sortsList: string[];
}) {
  return (
    <div className='sticky top-0 mx-auto flex h-fit w-full flex-col gap-4 bg-white pb-4 shadow-sm'>
      <div className='flex items-center justify-center p-4'>
        <div className='relative grow'>
          <Input
            value={search}
            onChange={(e) => setSearchText(e.target.value)}
            className='border-none bg-muted ps-10 text-popover-foreground'
            type='search'
            placeholder='جستجو'
          />
          <MagnifyingGlassIcon className='absolute right-2 top-1.5 size-6 rotate-90 text-input' />
        </div>
      </div>
      <div className='flex items-center gap-4 overflow-x-auto'>
        {sortsList?.map((t) => (
          <Button
            key={t}
            variant='secondary'
            onClick={() => handleSearchSort(t)}
            className={clsx(
              sort === t
                ? 'bg-popover-foreground text-popover hover:bg-popover hover:text-popover-foreground'
                : 'hover:bg-primary/30',
              'h-7 rounded-3xl px-3 pb-1 pt-2 capitalize',
            )}
          >
            {t.split('_').join(' ')}
          </Button>
        ))}
      </div>
    </div>
  );
}

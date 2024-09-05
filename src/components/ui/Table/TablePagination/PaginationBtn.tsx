import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';

import { Button } from '../../button';
import { PaginationItem } from '../../pagination';

type PropsT = {
  page: number;
  isPrev?: boolean;
  isNext?: boolean;
  isCurr?: boolean;
  disabled?: boolean;
  handleCurrPage: (term: string) => void;
};

const PaginationBtn = ({
  page,
  isPrev,
  isNext,
  isCurr,
  disabled = false,
  handleCurrPage,
}: PropsT) => (
  <PaginationItem>
    <Button
      disabled={disabled}
      onClick={() => handleCurrPage(page.toString())}
      variant='secondary'
      className={cn(
        isCurr ? 'bg-primary' : 'hover:bg-primary',
        'flex items-base rounded-md gap-2 justify-center',
      )}
    >
      {isPrev && (
        <>
          <ChevronLeftIcon />
          <span className='hidden md:block'>قبلی</span>
        </>
      )}
      {!isPrev && !isNext && page}
      {isNext && (
        <>
          <span className='hidden md:block'> بعدی</span>
          <ChevronRightIcon />
        </>
      )}
    </Button>
  </PaginationItem>
);

export default PaginationBtn;

import Link from 'next/link';
import type { ReactNode } from 'react';

import { Badge } from '@/components/ui/badge';

const SummaryCardBadge = ({
  title,
  url,
  prefixIcon,
  suffixIcon,
  target = '_blank',
}: {
  title: string;
  url: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  target?: string;
}) => (
  <Link href={url} target={target}>
    <Badge variant='outline'>
      {prefixIcon || null}
      <span className='leading-5'>{title}</span>
      {suffixIcon || null}
    </Badge>
  </Link>
);

export default SummaryCardBadge;

'use client';

import { useSubscribers } from './use-subscribers';
import { formatCompactNumber } from '@/lib/utils';

export const YouTubeSubscriberCounter = () => {
  const { count, error, isLoading } = useSubscribers();

  if (isLoading) return <div className="animate-pulse">...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex items-center gap-2">
      <span>
        {formatCompactNumber(count!)} Subscribers
      </span>
    </div>
  );
};
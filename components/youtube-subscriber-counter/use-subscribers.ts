'use client';

import { useState, useEffect } from 'react';

export const useSubscribers = () => {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch('/api/subscribers');
        const data = await response.json();
        
        if (data.error) throw new Error(data.error);
        setCount(Number(data.count));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubscribers();
    const interval = setInterval(fetchSubscribers, 300000); // 5 min refresh
    
    return () => clearInterval(interval);
  }, []);

  return { count, error, isLoading };
};
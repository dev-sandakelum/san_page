// components/YouTubeSubscriberCount.tsx
"use client"
import { useEffect, useState} from 'react';

export default function YouTubeSubscriberCount() {
  const [subscribers, setSubscribers] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch('api/youtube_stats');
        const data = await response.json();
        
        if (data.error) {
          setError(data.error);
        } else {
          setSubscribers(data.subscribers);
        }
      } catch (err) {
        setError('Failed to load subscriber count');
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchSubscribers, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-gray-500">Loading subscribers...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex items-center space-x-2">
      <span className="font-bold text-lg">{subscribers}</span>
      <span className="text-gray-600">YouTube subscribers</span>
    </div>
  );
}
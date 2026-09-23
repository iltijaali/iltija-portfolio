import { useEffect, useState } from 'react';
import type { PortfolioData } from '../types/portfolio';

interface UsePortfolioDataResult {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
}

export function usePortfolioData(): UsePortfolioDataResult {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/portfolio', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json();
      })
      .then((json: PortfolioData) => setData(json))
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message ?? 'Failed to load');
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { data, loading, error };
}

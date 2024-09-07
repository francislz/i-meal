import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export function useGetRequest<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get<T>(url);
      setData(response.data);
    } catch (error) {
      setError(error as Error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return { data, loading, error };
}


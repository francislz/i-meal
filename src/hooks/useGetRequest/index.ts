import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export interface IQueryParams {
  [key: string]: string | number | boolean;
}

export function useGetRequest<T>(rawUrl: string, queryParams?: IQueryParams | null): [T | null, boolean, Error | undefined] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  function buildUrlWithQueryParams(url: string, queryParams: IQueryParams) {
    const urlObj = new URL(url);
    for (const key in queryParams) {
      urlObj.searchParams.append(key, queryParams[key].toString());
    }
    return urlObj.toString();
  }

  const url = buildUrlWithQueryParams(rawUrl, queryParams ?? {});

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

  return [data, loading, error];
}


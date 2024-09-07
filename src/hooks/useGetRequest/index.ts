import { useCallback, useEffect, useState } from 'react';
import { Api } from '../../service/api';

export interface IQueryParams {
  [key: string]: string | number | boolean;
}

export interface IGetRequestArgs {
  path?: string;
  queryParams?: IQueryParams;
}

export function useGetRequest<T>({ path, queryParams }: IGetRequestArgs): [T | null, boolean, Error | undefined] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  function buildUrlWithQueryParams(queryParams: IQueryParams) {
    const urlObj = new URLSearchParams();
    for (const key in queryParams) {
      urlObj.append(key, queryParams[key].toString());
    }
    return urlObj.toString();
  }

  const url = (path ?? '') + '?' + buildUrlWithQueryParams(queryParams ?? {});

  const handleRequest = useCallback(async () => {
    try {
      const response = await Api.get<T>(url);
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


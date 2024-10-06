// hooks/useFetch.ts
import { useState } from 'react';

type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT'; // Add other methods as needed

interface FetchOptions {
  method: HttpMethod;
  body?: Record<string, any>; // Request body for POST, PUT, etc.
  headers?: Record<string, string>; // Optional headers
}

export const useFetch = (initialUrl: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<any>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const fetchData = async (url: string, options: FetchOptions) => {
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch(url, {
        method: options.method,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setData(result);
      setSuccess(true);
      return result; // Optional: return response if needed
    } catch (error) {
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, data, fetchData };
};

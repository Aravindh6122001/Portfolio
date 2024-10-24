// hooks/useFetch.ts
import { useState } from 'react';
export const useFetch = (initialUrl) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState(null);
    const [success, setSuccess] = useState(false);
    const fetchData = async (url, options) => {
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
        }
        catch (error) {
            setError('Failed to fetch data. Please try again.');
        }
        finally {
            setLoading(false);
        }
    };
    return { loading, error, success, data, fetchData };
};

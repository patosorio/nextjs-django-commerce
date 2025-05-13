'use client';
import { useEffect, useState } from 'react';
import { API_URL } from '@/config/constants';

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch(API_URL + '/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch((err) => console.error('Failed to fetch from Flask:', err));
  }, []);

  return (
    <main className="container mx-auto py-8">
      <div className="flex justify-center">
        <div className="text-center p-6 bg-white">
        <h1 className="text-2xl font-bold mb-4">Naturwest Platform</h1>
        <p>Flask says: {message}</p>
        </div>
      </div>
    </main>
  );
}

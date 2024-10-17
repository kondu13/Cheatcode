// app/signin/page.tsx
import { Button } from '@/components/ui/Button';
import React from 'react';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4 text-black">Sign In</h2>
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 border border-gray-300 rounded text-black" required />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border border-gray-300 text-black rounded" required />
        
        <div className='flex flex-col justify-content spae between'>
          <Button variant="outline" className="bg-black text-white hover:bg-gray-800"> Forgot Password</Button>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign In</button>
        </div>
      </form>
    </div>
  );
}

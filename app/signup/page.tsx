'use client'

import React, { useState } from 'react';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can send data to your backend
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password, phone }), // Include phone in the request body
    });

    // Handle the response
    if (response.ok) {
      console.log('User signed up successfully!');
      // Optionally, redirect to login or show success message
    } else {
      console.error('Error signing up');
      // Handle error response, show error message to user
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4 text-black">Sign Up</h2>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="w-full mb-4 p-2 border border-gray-300 rounded text-black" 
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full mb-4 p-2 border border-gray-300 rounded text-black" 
          required 
        />
        <input 
          type="tel" // Keep type as 'tel' for phone number input
          placeholder="Phone Number" 
          value={phone} 
          onChange={handlePhoneChange} // Use custom change handler
          className="w-full mb-4 p-2 border border-gray-300 rounded text-black" 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full mb-4 p-2 border border-gray-300 rounded text-black" 
          required 
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}

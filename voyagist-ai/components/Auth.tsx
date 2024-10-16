"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useAppContext } from '@/context/AppContext';

export function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { setUser } = useAppContext();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else setUser(data.user);
    setLoading(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else setUser(data.user);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <button onClick={handleSignUp} disabled={loading} className="mb-2 p-2 bg-blue-500 text-white rounded">
        Sign Up
      </button>
      <button onClick={handleSignIn} disabled={loading} className="p-2 bg-green-500 text-white rounded">
        Sign In
      </button>
    </div>
  );
}

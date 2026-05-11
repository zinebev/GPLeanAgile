'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // TODO: Appel API plus tard (Zineb)
    console.log('Login:', { email, password });
    
    setTimeout(() => {
      setLoading(false);
      alert('Login fonctionnel ! (API à connecter)');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-4">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">LeanAgile</h1>
          <p className="text-gray-600 mt-2">Connectez-vous à votre compte</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="votreemail@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            label="Mot de passe"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600">Se souvenir de moi</span>
            </label>
            <a href="#" className="text-purple-600 hover:underline">
              Mot de passe oublié ?
            </a>
          </div>

          <Button type="submit" fullWidth disabled={loading}>
            {loading ? 'Connexion...' : 'Se connecter'}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Pas encore de compte ?{' '}
          <Link href="/register" className="text-purple-600 font-medium hover:underline">
            Créer un compte
          </Link>
        </div>
      </Card>
    </div>
  );
}
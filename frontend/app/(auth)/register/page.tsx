'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas !');
      return;
    }

    setLoading(true);
    
    // TODO: Appel API plus tard (Zineb)
    console.log('Register:', formData);
    
    setTimeout(() => {
      setLoading(false);
      alert('Inscription fonctionnelle ! (API à connecter)');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Créer un compte</h1>
          <p className="text-gray-600 mt-2">Rejoignez LeanAgile aujourd'hui</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Prénom"
              type="text"
              name="firstName"
              placeholder="Prénom"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Input
              label="Nom"
              type="text"
              name="lastName"
              placeholder="Nom"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="votreemail@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Mot de passe"
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Input
            label="Confirmer le mot de passe"
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="text-xs text-gray-600">
            En créant un compte, vous acceptez nos{' '}
            <a href="#" className="text-purple-600 hover:underline">
              Conditions d'utilisation
            </a>{' '}
            et notre{' '}
            <a href="#" className="text-purple-600 hover:underline">
              Politique de confidentialité
            </a>
            .
          </div>

          <Button type="submit" fullWidth disabled={loading}>
            {loading ? 'Création...' : 'Créer mon compte'}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Déjà un compte ?{' '}
          <Link href="/login" className="text-purple-600 font-medium hover:underline">
            Se connecter
          </Link>
        </div>
      </Card>
    </div>
  );
}
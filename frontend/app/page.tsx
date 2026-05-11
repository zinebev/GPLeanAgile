import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 flex items-center justify-center p-4">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">LeanAgile</h1>
        <p className="text-xl mb-8 opacity-90">
          Plateforme de gestion de projets Agile
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link href="/login">
            <Button variant="primary">
              Se connecter
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="secondary">
              Créer un compte
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

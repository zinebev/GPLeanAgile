import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function DashboardPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Bienvenue, Hajar ! 👋
        </h1>
        <p className="text-gray-600">
          Voici un aperçu de vos projets et tâches
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-l-4 border-purple-600">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600 text-sm mb-1">Projets Actifs</p>
              <p className="text-3xl font-bold text-gray-800">0</p>
            </div>
            <span className="text-3xl">📁</span>
          </div>
          <p className="text-sm text-green-600 mt-2">+0% ce mois</p>
        </Card>

        <Card className="border-l-4 border-blue-600">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600 text-sm mb-1">Tâches en cours</p>
              <p className="text-3xl font-bold text-gray-800">0</p>
            </div>
            <span className="text-3xl">⏳</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">0 prioritaires</p>
        </Card>

        <Card className="border-l-4 border-green-600">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600 text-sm mb-1">Terminées</p>
              <p className="text-3xl font-bold text-gray-800">0</p>
            </div>
            <span className="text-3xl">✅</span>
          </div>
          <p className="text-sm text-green-600 mt-2">100% complétées</p>
        </Card>

        <Card className="border-l-4 border-orange-600">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600 text-sm mb-1">En retard</p>
              <p className="text-3xl font-bold text-gray-800">0</p>
            </div>
            <span className="text-3xl">⚠️</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">Aucune urgence</p>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Projects */}
        <Card className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Projets Récents
            </h2>
            <Button variant="secondary">Voir tout</Button>
          </div>
          
          <div className="text-center py-12 text-gray-500">
            <span className="text-6xl mb-4 block">📂</span>
            <p className="mb-4">Aucun projet pour le moment</p>
            <Button>Créer votre premier projet</Button>
          </div>
        </Card>

        {/* Activity Feed */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Activité Récente
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
                H
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">Vous</span> avez créé votre compte
                </p>
                <p className="text-xs text-gray-500 mt-1">Il y a 5 minutes</p>
              </div>
            </div>

            <div className="text-center py-8 text-gray-400 text-sm">
              Plus d'activités à venir...
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Actions Rapides
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition">
            <span className="text-3xl mb-2 block">➕</span>
            <p className="text-sm font-medium text-gray-700">Nouveau Projet</p>
          </button>
          
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition">
            <span className="text-3xl mb-2 block">✓</span>
            <p className="text-sm font-medium text-gray-700">Nouvelle Tâche</p>
          </button>
          
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 hover:bg-green-50 transition">
            <span className="text-3xl mb-2 block">👥</span>
            <p className="text-sm font-medium text-gray-700">Inviter Équipe</p>
          </button>
          
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-400 hover:bg-orange-50 transition">
            <span className="text-3xl mb-2 block">📊</span>
            <p className="text-sm font-medium text-gray-700">Voir Rapports</p>
          </button>
        </div>
      </Card>
    </div>
  );
}
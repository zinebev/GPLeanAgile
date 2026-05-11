import Card from '@/components/ui/Card';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Projets Actifs
            </h3>
            <p className="text-4xl font-bold text-purple-600">0</p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Tâches en cours
            </h3>
            <p className="text-4xl font-bold text-blue-600">0</p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Tâches terminées
            </h3>
            <p className="text-4xl font-bold text-green-600">0</p>
          </Card>
        </div>

        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Projets Récents
          </h2>
          <p className="text-gray-600 text-center py-8">
            Aucun projet pour le moment. Créez votre premier projet !
          </p>
        </Card>
      </div>
    </div>
  );
}
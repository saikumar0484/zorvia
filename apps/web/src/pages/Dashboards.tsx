import React from 'react';
import { Link } from 'react-router-dom';

const Dashboards: React.FC = () => {
  const dashboards = [
    { id: 1, name: 'Sales Overview', description: 'Track sales performance and trends' },
    { id: 2, name: 'Marketing Analytics', description: 'Monitor marketing campaign effectiveness' },
    { id: 3, name: 'Financial Reports', description: 'View financial metrics and KPIs' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Dashboards</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Dashboard
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboards.map((dashboard) => (
          <Link
            key={dashboard.id}
            to={`/dashboards/${dashboard.id}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{dashboard.name}</h3>
            <p className="text-gray-600">{dashboard.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboards;

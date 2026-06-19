import React from 'react';

const DataSources: React.FC = () => {
  const dataSources = [
    { id: 1, name: 'PostgreSQL Database', type: 'Database', status: 'Connected', lastSync: '5 minutes ago' },
    { id: 2, name: 'Google Analytics', type: 'API', status: 'Connected', lastSync: '1 hour ago' },
    { id: 3, name: 'Salesforce CRM', type: 'API', status: 'Error', lastSync: '2 days ago' },
    { id: 4, name: 'CSV Upload', type: 'File', status: 'Connected', lastSync: '1 week ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Connected':
        return 'bg-green-500';
      case 'Error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Data Sources</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Data Source
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Sync
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dataSources.map((source) => (
              <tr key={source.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{source.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {source.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className={`h-2 w-2 rounded-full ${getStatusColor(source.status)} mr-2`}></span>
                    <span className="text-sm text-gray-900">{source.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {source.lastSync}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-lg font-semibold text-gray-800">Database</h3>
          <p className="text-gray-600 text-sm mt-2">Connect to PostgreSQL, MySQL, or MongoDB</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🔌</div>
          <h3 className="text-lg font-semibold text-gray-800">API</h3>
          <p className="text-gray-600 text-sm mt-2">Connect to REST APIs and web services</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">📁</div>
          <h3 className="text-lg font-semibold text-gray-800">File</h3>
          <p className="text-gray-600 text-sm mt-2">Upload CSV, Excel, or JSON files</p>
        </div>
      </div>
    </div>
  );
};

export default DataSources;

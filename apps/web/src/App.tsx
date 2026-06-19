import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Dashboards from './pages/Dashboards';
import DataSources from './pages/DataSources';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboards />} />
        <Route path="dashboards" element={<Dashboards />} />
        <Route path="dashboards/:id" element={<Dashboard />} />
        <Route path="datasources" element={<DataSources />} />
      </Route>
    </Routes>
  );
}

export default App;

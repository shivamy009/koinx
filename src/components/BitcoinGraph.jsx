import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import bitcoinLogo from '../assets/bitcoin-logo.png';
import Overview from './tabs/Overview';
import PlaceholderTab from './tabs/PlaceholderTab';

ChartJS.register(...registerables);

const BitcoinGraph = () => {
  const [chartData, setChartData] = useState(null);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [activeTab, setActiveTab] = useState('overview'); // Default active tab

  useEffect(() => {
    // Mock chart data
    const mockData = {
      labels: ['16 Dec', '17 Dec', '18 Dec', '19 Dec', '20 Dec', '21 Dec', '22 Dec'],
      datasets: [
        {
          label: '',
          data: [42000, 44000, 46000, 43000, 45000, 47000, 46000],
          borderColor: '#F7931A',
          backgroundColor: 'rgba(247, 147, 26, 0.1)',
          tension: 0.4,
        },
      ],
    };

    setChartData(mockData);
  }, []);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div className="bg-white p-6 shadow rounded">
      {/* Header Section with Logo and Price */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <img src={bitcoinLogo} alt="Bitcoin Logo" className="w-8 h-8" />
          <h2 className="text-2xl font-bold text-orange-500">Bitcoin</h2>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-700">₹46,953.04</p>
          <p className="text-sm text-gray-500">$39,42,343</p>
        </div>
      </div>
      {/* Line Chart */}
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false } },
            y: { grid: { color: '#E5E7EB' } },
          },
        }}
      />

      {/* Tab Navigation */}
      <div className="flex space-x-4 mt-6 border-b border-gray-300">
        {['overview', 'fundamentals', 'team', 'newsinsights', 'sentiments', 'technicals'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 font-medium ${
              activeTab === tab ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-600'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'overview' && <Overview />}
        {activeTab !== 'overview' && <PlaceholderTab tabName={activeTab} />}
      </div>
    </div>
  );
};

export default BitcoinGraph;

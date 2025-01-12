import { useEffect, useState } from 'react';
import { getCoinData } from '../services/api';

const PerformanceCard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const coinData = await getCoinData();
      setData(coinData.bitcoin);
    };
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-xl font-bold mb-2">Bitcoin Performance</h2>
      <p className="text-3xl font-bold text-gray-800">₹{data.inr.toLocaleString()}</p>
      <p
        className={`text-sm ${
          data.inr_24h_change > 0 ? 'text-green-500' : 'text-red-500'
        } mt-1`}
      >
        24h Change: {data.inr_24h_change.toFixed(2)}%
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div>
          <p className="text-gray-600 text-sm">Today's Low</p>
          <p className="text-gray-800 font-medium">₹{(data.inr - 10000).toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Today's High</p>
          <p className="text-gray-800 font-medium">₹{(data.inr + 10000).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;

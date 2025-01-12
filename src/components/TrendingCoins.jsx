import { useEffect, useState } from 'react';
import { getTrendingCoins } from '../services/api';

const TrendingCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const data = await getTrendingCoins();
      setCoins(data);
    };
    fetchCoins();
  }, []);

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Trending Coins (24h)</h2>
      <ul className="divide-y">
        {coins.map((coin) => (
          <li key={coin.item.id} className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-2">
              <img
                src={coin.item.small}
                alt={`${coin.item.name} logo`}
                className="w-6 h-6"
              />
              <span className="text-gray-700">{coin.item.name} ({coin.item.symbol.toUpperCase()})</span>
            </div>
            <span className="text-green-500">+{coin.item.price_btc.toFixed(4)} BTC</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;

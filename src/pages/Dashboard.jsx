import BitcoinGraph from '../components/BitcoinGraph';
import PerformanceCard from '../components/PerformanceCard';
import TrendingCoins from '../components/TrendingCoins';
import PromoCard from '../components/PromoCard';

const Dashboard = () => (
  <main className="max-w-6xl mx-auto p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {/* Bitcoin Section */}
    <div className="md:col-span-2">
      <BitcoinGraph />
    </div>
    {/* Promo Card */}
    <div>
      <PromoCard />
    </div>
    {/* Performance Section */}
    <div className="md:col-span-2">
      <PerformanceCard />
    </div>
    {/* Trending Coins */}
    <TrendingCoins />
  </main>
);

export default Dashboard;

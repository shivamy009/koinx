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
    <div className='md:col-span-1 space-y-4'>
      <PromoCard />
    <TrendingCoins />
    </div>
    {/* Performance Section */}
    <div className="md:col-span-2">
      <PerformanceCard />
    </div>
    {/* Trending Coins */}
  </main>
);

export default Dashboard;

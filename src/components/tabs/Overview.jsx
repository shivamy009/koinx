const Overview = () => {
    return (
      <div>
        {/* Performance Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Performance</h3>
          <div className="flex justify-between items-center">
            <div className="text-gray-700">
              <p>Today's Low</p>
              <p className="font-semibold">₹46,930.22</p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="font-semibold text-orange-500">₹48,637.83</p>
              <div className="h-1 w-32 bg-gray-200">
                <div className="h-1 bg-orange-500" style={{ width: '50%' }}></div>
              </div>
              <p className="font-semibold text-orange-500">₹49,343.83</p>
            </div>
            <div className="text-gray-700 text-right">
              <p>Today's High</p>
              <p className="font-semibold">₹49,743.83</p>
            </div>
          </div>
        </div>
  
        {/* Fundamentals Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Fundamentals</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Bitcoin Price</p>
              <p className="font-semibold">₹18,815.46</p>
            </div>
            <div>
              <p className="text-gray-600">Market Cap</p>
              <p className="font-semibold">₹32,350,729,047</p>
            </div>
            <div>
              <p className="text-gray-600">24h Low / 24h High</p>
              <p className="font-semibold">₹16,382.07 / ₹18,874.12</p>
            </div>
            <div>
              <p className="text-gray-600">Market Cap Dominance</p>
              <p className="font-semibold">38.34%</p>
            </div>
            <div>
              <p className="text-gray-600">Trading Volume</p>
              <p className="font-semibold">₹23,249,202,782</p>
            </div>
            <div>
              <p className="text-gray-600">All-Time High</p>
              <p className="font-semibold">₹69,044.77</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Overview;
  
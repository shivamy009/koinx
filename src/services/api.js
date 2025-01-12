import axios from 'axios';

const API_KEY = import.meta.env.VITE_SOME_KEY;

export const getCoinData = async () => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true&x_cg_demo_api_key=${API_KEY}`
  );
  return response.data;
};


export const getTrendingCoins = async () => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=${API_KEY}`
  );
  return response.data.coins;
};

export enum ApiMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
}

const endpoints = {
  simple: {
    coinById: { url: '/api/gecko/v3/simple/price/', method: ApiMethods.GET },
    supportedCoins: {
      url: '/api/gecko/v3/simple/supported_vs_currencies/',
      method: ApiMethods.GET,
    },
  },
  coins: {
    coinsList: {
      url: '/api/gecko/v3/coins/list/',
      method: ApiMethods.GET,
    },
    coinsWithMarketData: {
      url: '/api/gecko/v3/coins/markets/',
      method: ApiMethods.GET,
    },
    coinDataWithId: {
      url: '/api/gecko/v3/coins/',
      method: ApiMethods.GET,
    },
  },
};

export default endpoints;

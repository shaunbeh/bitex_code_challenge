/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Ping {
  /** @example "(V3) To the Moon!" */
  gecko_says?: string;
}

/** @example {"usd":67187.3358936566,"usd_market_cap":1317802988326.25,"usd_24h_vol":31260929299.5248,"usd_24h_change":3.63727894677354,"last_updated_at":1711356300} */
export interface SimplePrice {
  /** price in USD */
  usd?: number;
  /** market cap in USD */
  usd_market_cap?: number;
  /** 24h volume in USD */
  usd_24h_vol?: number;
  /** 24h change in USD */
  usd_24h_change?: number;
  /** last updated timestamp */
  last_updated_at?: number;
}

/** @example ["btc","eth","ltc","bch","bnb","eos","xrp","xlm","link","dot","yfi","usd","aed","ars","aud","bdt","bhd","bmd","brl","cad","chf","clp","cny","czk","dkk","eur","gbp","gel","hkd","huf","idr","ils","inr","jpy","krw","kwd","lkr","mmk","mxn","myr","ngn","nok","nzd","php","pkr","pln","rub","sar","sek","sgd","thb","try","twd","uah","vef","vnd","zar","xdr","xag","xau","bits","sats"] */
export type CurrencyList = string[];

/** @example [{"id":"0chain","symbol":"zcn","name":"Zus","platforms":{"ethereum":"0xb9ef770b6a5e12e45983c5d80545258aa38f3b78","polygon-pos":"0x8bb30e0e67b11b978a5040144c410e1ccddcba30"}},{"id":"01coin","symbol":"zoc","name":"01coin","platforms":{}}] */
export type CoinsList = {
  /** coin id */
  id?: string;
  /** coin symbol */
  symbol?: string;
  /** coin name */
  name?: string;
  /** coin asset platform and contract address */
  platforms?: Record<string, string>;
}[];

/** @example [{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400","current_price":70187,"market_cap":1381651251183,"market_cap_rank":1,"fully_diluted_valuation":1474623675796,"total_volume":20154184933,"high_24h":70215,"low_24h":68060,"price_change_24h":2126.88,"price_change_percentage_24h":3.12502,"market_cap_change_24h":44287678051,"market_cap_change_percentage_24h":3.31157,"circulating_supply":19675987,"total_supply":21000000,"max_supply":21000000,"ath":73738,"ath_change_percentage":-4.77063,"ath_date":"2024-03-14T07:10:36.635Z","atl":67.81,"atl_change_percentage":103455.83335,"atl_date":"2013-07-06T00:00:00.000Z","roi":null,"last_updated":"2024-04-07T16:49:31.736Z"}] */
export interface CoinsMarkets {
  /** coin id */
  id?: string;
  /** coin symbol */
  symbol?: string;
  /** coin name */
  name?: string;
  /** coin image url */
  image?: string;
  /** coin current price in currency */
  current_price?: number;
  /** coin market cap in currency */
  market_cap?: number;
  /** coin rank by market cap */
  market_cap_rank?: number;
  /** coin fully diluted valuation (fdv) in currency */
  fully_diluted_valuation?: number;
  /** coin total trading volume in currency */
  total_volume?: number;
  /** coin 24h price high in currency */
  high_24h?: number;
  /** coin 24h price low in currency */
  low_24h?: number;
  /** coin 24h price change in currency */
  price_change_24h?: number;
  /** coin 24h price change in percentage */
  price_change_percentage_24h?: number;
  /** coin 24h market cap change in currency */
  market_cap_change_24h?: number;
  /** coin 24h market cap change in percentage */
  market_cap_change_percentage_24h?: number;
  /** coin circulating supply */
  circulating_supply?: number;
  /** coin total supply */
  total_supply?: number;
  /** coin max supply */
  max_supply?: number;
  /** coin all time high (ath) in currency */
  ath?: number;
  /** coin all time high (ath) change in percentage */
  ath_change_percentage?: number;
  /**
   * coin all time high (ath) date
   * @format date-time
   */
  ath_date?: string;
  /** coin all time low (atl) in currency */
  atl?: number;
  /** coin all time low (atl) change in percentage */
  atl_change_percentage?: number;
  /**
   * coin all time low (atl) date
   * @format date-time
   */
  atl_date?: string;
  /** @example null */
  roi?: string;
  /**
   * coin last updated timestamp
   * @format date-time
   */
  last_updated?: string;
  /** coin 1h price change in percentage */
  price_change_percentage_1h?: number;
  /** coin price sparkline in 7 days */
  sparkline_in_7d?: {
    price?: number[];
  };
}

export interface CoinsDataBase {
  /** coin id */
  id?: string;
  /** coin symbol */
  symbol?: string;
  /** coin name */
  name?: string;
  /** coin web slug */
  web_slug?: string;
  /** coin asset platform id */
  asset_platform_id?: string;
  /** coin asset platform and contract address */
  platforms?: Record<string, string>;
  /** detailed coin asset platform and contract address */
  detail_platforms?: Record<string, string>;
  /** blockchain block time in minutes */
  block_time_in_minutes?: number;
  /** blockchain hashing algorithm */
  hashing_algorithm?: string;
  /** coin categories */
  categories?: string[];
  /** preview listing coin */
  preview_listing?: boolean;
  /** public notice */
  public_notice?: string;
  /** additional notices */
  additional_notices?: string[];
  /** coin name localization */
  localization?: Record<string, string>;
  /** coin description */
  description?: Record<string, string>;
  /** links */
  links?: {
    /** coin website url */
    homepage?: string[];
    /** coin whitepaper url */
    whitepaper?: string[];
    /** coin block explorer url */
    blockchain_site?: string[];
    /** coin official forum url */
    official_forum_url?: string[];
    /** coin chat url */
    chat_url?: string[];
    /** coin announcement url */
    announcement_url?: string[];
    /** coin twitter handle */
    twitter_screen_name?: string;
    /** coin facebook username */
    facebook_username?: string;
    /** coin bitcointalk thread identifier */
    bitcointalk_thread_identifier?: string;
    /** coin telegram channel identifier */
    telegram_channel_identifier?: string;
    /** coin subreddit url */
    subreddit_url?: string;
    /** coin repository url */
    repos_url?: {
      /** coin github repository url */
      github?: string[];
      /** coin bitbucket repository url */
      bitbucket?: string[];
    };
  };
  /** coin image url */
  image?: {
    thumb?: string;
    small?: string;
    large?: string;
  };
  /** coin country of origin */
  country_origin?: string;
  /**
   * coin genesis date
   * @format date-time
   */
  genesis_date?: string;
  /** coin sentiment votes up percentage */
  sentiment_votes_up_percentage?: number;
  /** coin sentiment votes down percentage */
  sentiment_votes_down_percentage?: number;
  /** coin rank by market cap */
  market_cap_rank?: number;
  /** coin market data */
  market_data?: {
    /** coin current price in currency */
    current_price?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** total value locked */
    total_value_locked?: number;
    /** market cap to total value locked ratio */
    mcap_to_tvl_ratio?: number;
    /** fully diluted valuation to total value locked ratio */
    fdv_to_tvl_ratio?: number;
    /** coin return on investment */
    roi?: number;
    /** coin all time high (ath) in currency */
    ath?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin all time high (ath) change in percentage */
    ath_change_percentage?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin all time high (ath) date */
    ath_date?: {
      btc?: string;
      eur?: string;
      usd?: string;
    };
    /** coin all time low (atl) in currency */
    atl?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin all time low (atl) change in percentage */
    atl_change_percentage?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin all time low (atl) date */
    atl_date?: {
      btc?: string;
      eur?: string;
      usd?: string;
    };
    /** coin market cap in currency */
    market_cap?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin rank by market cap */
    market_cap_rank?: number;
    /** coin fully diluted valuation (fdv) in currency */
    fully_diluted_valuation?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** market cap to fully diluted valuation ratio */
    market_cap_fdv_ratio?: number;
    /** coin total trading volume in currency */
    total_volume?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin 24h price high in currency */
    high_24h?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin 24h price low in currency */
    low_24h?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin 24h price change in currency */
    price_change_24h?: number;
    /** coin 24h price change in percentage */
    price_change_percentage_24h?: number;
    /** coin 7d price change in percentage */
    price_change_percentage_7d?: number;
    /** coin 14d price change in percentage */
    price_change_percentage_14d?: number;
    /** coin 30d price change in percentage */
    price_change_percentage_30d?: number;
    /** coin 60d price change in percentage */
    price_change_percentage_60d?: number;
    /** coin 200d price change in percentage */
    price_change_percentage_200d?: number;
    /** coin 1y price change in percentage */
    price_change_percentage_1y?: number;
    /** coin 24h market cap change in currency */
    market_cap_change_24h?: number;
    /** coin 24h market cap change in percentage */
    market_cap_change_percentage_24h?: number;
    /** coin 1h price change in currency */
    price_change_percentage_1h_in_currency?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin 24h price change in currency */
    price_change_percentage_24h_in_currency?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin 7d price change in currency */
    price_change_percentage_7d_in_currency?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin 14d price change in currency */
    price_change_percentage_14d_in_currency?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin 30d price change in currency */
    price_change_percentage_30d_in_currency?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin 60d price change in currency */
    price_change_percentage_60d_in_currency?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin 200d price change in currency */
    price_change_percentage_200d_in_currency?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin 1y price change in currency */
    price_change_percentage_1y_in_currency?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin 24h market cap change in currency */
    market_cap_change_24h_in_currency?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin 24h market cap change in percentage */
    market_cap_change_percentage_24h_in_currency?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin total supply */
    total_supply?: number;
    /** coin max supply */
    max_supply?: number;
    /** coin circulating supply */
    circulating_supply?: number;
    /**
     * coin market data last updated timestamp
     * @format date-time
     */
    last_updated?: string;
  };
  /** coin community data */
  community_data?: {
    /** coin facebook likes */
    facebook_likes?: number;
    /** coin twitter followers */
    twitter_followers?: number;
    /** coin reddit average posts in 48 hours */
    reddit_average_posts_48h?: number;
    /** coin reddit average comments in 48 hours */
    reddit_average_comments_48h?: number;
    /** coin reddit subscribers */
    reddit_subscribers?: number;
    /** coin reddit active accounts in 48 hours */
    reddit_accounts_active_48h?: number;
    /** coin telegram channel user count */
    telegram_channel_user_count?: number;
  };
  /** coin developer data */
  developer_data?: {
    /** coin repository forks */
    forks?: number;
    /** coin repository stars */
    stars?: number;
    /** coin repository subscribers */
    subscribers?: number;
    /** coin repository total issues */
    total_issues?: number;
    /** coin repository closed issues */
    closed_issues?: number;
    /** coin repository pull requests merged */
    pull_requests_merged?: number;
    /** coin repository pull request contributors */
    pull_request_contributors?: number;
    /** coin code additions and deletions in 4 weeks */
    code_additions_deletions_4_weeks?: {
      additions?: number;
      deletions?: number;
    };
    /** coin repository commit count in 4 weeks */
    commit_count_4_weeks?: number;
    /**
     * coin repository last 4 weeks commit activity series
     * @example []
     */
    last_4_weeks_commit_activity_series?: number[];
  };
  /**
   * coin status updates
   * @example []
   */
  status_updates?: object[];
  /**
   * coin last updated timestamp
   * @format date-time
   */
  last_updated?: string;
  /** coin tickers */
  tickers?: {
    /** coin ticker base currency */
    base?: string;
    /** coin ticker target currency */
    target?: string;
    /** coin ticker exchange */
    market?: {
      /** coin ticker exchange name */
      name?: string;
      /** coin ticker exchange identifier */
      identifier?: string;
      /** coin ticker exchange trading incentive */
      has_trading_incentive?: boolean;
    };
    /** coin ticker last price */
    last?: number;
    /** coin ticker volume */
    volume?: number;
    /** coin ticker converted last price */
    converted_last?: {
      btc?: number;
      eth?: number;
      usd?: number;
    };
    /** coin ticker converted volume */
    converted_volume?: {
      btc?: number;
      eth?: number;
      usd?: number;
    };
    /** coin ticker trust score */
    trust_score?: string;
    /** coin ticker bid ask spread percentage */
    bid_ask_spread_percentage?: number;
    /**
     * coin ticker timestamp
     * @format date-time
     */
    timestamp?: string;
    /**
     * coin ticker last traded timestamp
     * @format date-time
     */
    last_traded_at?: string;
    /**
     * coin ticker last fetch timestamp
     * @format date-time
     */
    last_fetch_at?: string;
    /** coin ticker anomaly */
    is_anomaly?: boolean;
    /** coin ticker stale */
    is_stale?: boolean;
    /** coin ticker trade url */
    trade_url?: string;
    /** coin ticker token info url */
    token_info_url?: string;
    /** coin ticker base currency coin id */
    coin_id?: string;
    /** coin ticker target currency coin id */
    target_coin_id?: string;
  }[];
}

export type CoinsID = CoinsDataBase;

/** @example {"name":"Bitcoin","tickers":[{"base":"BTC","target":"USDT","market":{"name":"Binance","identifier":"binance","has_trading_incentive":false,"logo":"https://assets.coingecko.com/markets/images/52/small/binance.jpg?1706864274"},"last":69476,"volume":20242.03975,"cost_to_move_up_usd":19320706.3958517,"cost_to_move_down_usd":16360235.3694131,"converted_last":{"btc":1.000205,"eth":20.291404,"usd":69498},"converted_volume":{"btc":20249,"eth":410802,"usd":1406996874},"trust_score":"green","bid_ask_spread_percentage":0.010014,"timestamp":"2024-04-08T04:02:01+00:00","last_traded_at":"2024-04-08T04:02:01+00:00","last_fetch_at":"2024-04-08T04:03:00+00:00","is_anomaly":false,"is_stale":false,"trade_url":"https://www.binance.com/en/trade/BTC_USDT?ref=37754157","token_info_url":null,"coin_id":"bitcoin","target_coin_id":"tether"}]} */
export interface CoinsTickers {
  /** coin name */
  name?: string;
  /** list of tickers */
  tickers?: {
    /** coin ticker base currency */
    base?: string;
    /** coin ticker target currency */
    target?: string;
    /** coin ticker exchange */
    market?: {
      /** exchange name */
      name: string;
      /** exchange identifier */
      identifier: string;
      /** exchange trading incentive */
      has_trading_incentive: boolean;
      /** exchange image url */
      logo?: string;
    };
    /** coin ticker last price */
    last?: number;
    /** coin ticker volume */
    volume?: number;
    /** coin ticker cost to move up in usd */
    cost_to_move_up_usd?: number;
    /** coin ticker cost to move down in usd */
    cost_to_move_down_usd?: number;
    /** coin ticker converted last price */
    converted_last?: {
      btc?: number;
      eth?: number;
      usd?: number;
    };
    /** coin ticker converted volume */
    converted_volume?: {
      btc?: number;
      eth?: number;
      usd?: number;
    };
    /** coin ticker trust score */
    trust_score?: string;
    /** coin ticker bid ask spread percentage */
    bid_ask_spread_percentage?: number;
    /** coin ticker timestamp */
    timestamp?: string;
    /** coin ticker last traded timestamp */
    last_traded_at?: string;
    /** coin ticker last fetch timestamp */
    last_fetch_at?: string;
    /** coin ticker anomaly */
    is_anomaly?: boolean;
    /** coin ticker stale */
    is_stale?: boolean;
    /** coin ticker trade url */
    trade_url?: string;
    /** coin ticker token info url */
    token_info_url?: string | null;
    /** coin ticker base currency coin id */
    coin_id?: string;
    /** coin ticker target currency coin id */
    target_coin_id?: string;
  }[];
}

/** @example {"id":"bitcoin","symbol":"btc","name":"Bitcoin","localization":{"en":"Bitcoin","de":"Bitcoin","es":"Bitcoin","fr":"Bitcoin","it":"Bitcoin","pl":"Bitcoin","ro":"Bitcoin","hu":"Bitcoin","nl":"Bitcoin","pt":"Bitcoin","sv":"Bitcoin","vi":"Bitcoin","tr":"Bitcoin","ru":"Биткоин","ja":"ビットコイン","zh":"比特币","zh-tw":"比特幣","ko":"비트코인","ar":"بيتكوين","th":"บิตคอยน์","id":"Bitcoin","cs":"Bitcoin","da":"Bitcoin","el":"Bitcoin","hi":"Bitcoin","no":"Bitcoin","sk":"Bitcoin","uk":"Bitcoin","he":"Bitcoin","fi":"Bitcoin","bg":"Bitcoin","hr":"Bitcoin","lt":"Bitcoin","sl":"Bitcoin"},"image":{"thumb":"https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1696501400","small":"https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1696501400"},"market_data":{"current_price":{"aed":154530.091081427,"ars":33947900.261883,"aud":61738.4056950475,"bch":165.381674946306,"bdt":4617857.43751472,"bhd":15859.4297419179,"bmd":42074.7071561885,"bnb":134.15687497174,"brl":204167.474400698,"btc":1,"cad":55797.3728951794,"chf":35380.4108741032,"clp":37070945.9743491,"cny":297872.096782952,"czk":941726.6142466,"dkk":284202.024427907,"dot":5078.18455042231,"eos":49611.9119761598,"eth":18.2965432154039,"eur":38057.7086398657,"gbp":33025.6578133999,"gel":113180.962250147,"hkd":328622.396508053,"huf":14607917.5775571,"idr":647533950.604456,"ils":151504.709263362,"inr":3501412.9510955,"jpy":5933586.69083973,"krw":54466970.6549007,"kwd":12928.7160149536,"lkr":13628686.3687709,"ltc":573.662179787236,"mmk":88364275.7448308,"mxn":714058.270089106,"myr":193333.279382686,"ngn":37725865.4245248,"nok":429848.167317426,"nzd":66531.8087825235,"php":2330938.69230343,"pkr":11705926.3598065,"pln":165640.548626626,"rub":3755167.36124159,"sar":157780.151835706,"sek":423808.006507498,"sgd":55568.0657411781,"thb":1438863.97715007,"try":1240206.60639855,"twd":1291001.38076227,"uah":1599892.6750506,"usd":42074.7071561885,"vef":4212.94042754915,"vnd":1021106970.8227,"xag":1768.32799402537,"xau":20.3961350410339,"xdr":31351.757663898,"xlm":324963.641046826,"xrp":67529.863610982,"yfi":5.11694276059855,"zar":769994.699891437,"bits":1000195.71393105,"link":2709.66083650503,"sats":100019571.393105},"market_cap":{"aed":3022434823129.84,"ars":663982757051427,"aud":1207533794818.66,"bch":3239927812.61396,"bdt":90320099015790.6,"bhd":310192612917.673,"bmd":822933961870.542,"bnb":2629923038.04924,"brl":3993286227042.84,"btc":19584275,"cad":1091498460326.99,"chf":692169755329.313,"clp":725066019537891,"cny":5826043276458.69,"czk":18419113668077,"dkk":5558672032246.96,"dot":99489102293.3619,"eos":971966018054.879,"eth":358260658.630535,"eur":744365987728.877,"gbp":645995753662.719,"gel":2213692357431.75,"hkd":6427484562491.77,"huf":285714442221834,"idr":12665035966583838,"ils":2963261756601.54,"inr":68483700226206.6,"jpy":116054283764085,"krw":1065312701660270,"kwd":252871147803.58,"lkr":266561780855891,"ltc":11241964101.6977,"mmk":1728305874039080,"mxn":13966176853697.3,"myr":3781381554795.15,"ngn":737875507571602,"nok":8407346818129.71,"nzd":1301287369358.73,"php":45590539841760.1,"pkr":228954757091481,"pln":3239742879771.2,"rub":73446851159342,"sar":3086002357014.53,"sek":8289208064431.51,"sgd":1086848883442.42,"thb":28142561489813.1,"try":24257046694416.7,"twd":25250535365752.9,"uah":31292101755089.6,"usd":822933961870.542,"vef":82400377602.0975,"vnd":19971704184972804,"xag":34586507200.3442,"xau":398925467.356364,"xdr":613205127018.025,"xlm":6366989968394.3,"xrp":1322171541704.13,"yfi":100197984.577011,"zar":15060230523976,"bits":19587833186725.1,"link":53027090934.8881,"sats":1958783318672510},"total_volume":{"aed":91203312150.0806,"ars":20035974370796.5,"aud":36437868164.374,"bch":97607892.5371449,"bdt":2725449072027.67,"bhd":9360199758.84335,"bmd":24832397519.0506,"bnb":79179085.8304717,"brl":120499184128.796,"btc":590313.260481799,"cad":32931483969.889,"chf":20881438911.7821,"clp":21879188925189.9,"cny":175803441475.871,"czk":555804929370.771,"dkk":167735395521.931,"dot":2997133098.58748,"eos":29280838849.3072,"eth":10798578.6487541,"eur":22461574030.7143,"gbp":19491668952.2309,"gel":66799149326.2464,"hkd":193952199202.669,"huf":8621560094639.22,"idr":382173081057941,"ils":89417738606.4736,"inr":2066526047518,"jpy":3501989517686,"krw":32146283560336.6,"kwd":7630499109.6539,"lkr":8043620037935.51,"ltc":338574128.091738,"mmk":52152396774457.3,"mxn":421435584775.312,"myr":114104866600.038,"ngn":22265720911481.5,"nok":253695421433.057,"nzd":39266923884.1294,"php":1375714772890.61,"pkr":6908811405778.09,"pln":97760679200.9487,"rub":2216291329580.89,"sar":93121490696.4396,"sek":250130532110.017,"sgd":32796147403.4102,"thb":849214282675.698,"try":731967149325.999,"twd":761946110895.665,"uah":944253057952.188,"usd":24832397519.0506,"vef":2486467963.58254,"vnd":602655037260634,"xag":1043663204.32594,"xau":12037753.021335,"xdr":18503736849.333,"xlm":191792809959.604,"xrp":39855973598.8211,"yfi":3020008.10704923,"zar":454449139819.002,"bits":590313260481.799,"link":1599235730.48563,"sats":59031326048179.9}},"community_data":{"facebook_likes":null,"twitter_followers":null,"reddit_average_posts_48h":0,"reddit_average_comments_48h":0,"reddit_subscribers":null,"reddit_accounts_active_48h":null},"developer_data":{"forks":36262,"stars":72871,"subscribers":3961,"total_issues":7736,"closed_issues":7377,"pull_requests_merged":11204,"pull_request_contributors":846,"code_additions_deletions_4_weeks":{"additions":973,"deletions":-290},"commit_count_4_weeks":163},"public_interest_stats":{"alexa_rank":null,"bing_matches":null}} */
export interface CoinsHistoricalData {
  /** coin id */
  id?: string;
  /** coin symbol */
  symbol?: string;
  /** coin name */
  name?: string;
  /** coin localization */
  localization?: Record<string, string>;
  /** coin image url */
  image?: {
    thumb?: string;
    small?: string;
  };
  /** coin market data */
  market_data?: {
    /** coin current price */
    current_price?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin market cap */
    market_cap?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
    /** coin total volume */
    total_volume?: {
      btc?: number;
      eur?: number;
      usd?: number;
    };
  };
  /** coin community data */
  community_data?: {
    /** coin facebook likes */
    facebook_likes?: number;
    /** coin twitter followers */
    twitter_followers?: number;
    /** coin reddit average posts 48h */
    reddit_average_posts_48h?: number;
    /** coin reddit average comments 48h */
    reddit_average_comments_48h?: number;
    /** coin reddit subscribers */
    reddit_subscribers?: number;
    /** coin reddit accounts active 48h */
    reddit_accounts_active_48h?: number;
  };
  /** coin developer data */
  developer_data?: {
    /** coin repository forks */
    forks?: number;
    /** coin repository stars */
    stars?: number;
    /** coin repository subscribers */
    subscribers?: number;
    /** coin repository total issues */
    total_issues?: number;
    /** coin repository closed issues */
    closed_issues?: number;
    /** coin repository pull requests merged */
    pull_requests_merged?: number;
    /** coin repository pull request contributors */
    pull_request_contributors?: number;
    /** coin code additions deletions 4 weeks */
    code_additions_deletions_4_weeks?: {
      additions?: number;
      deletions?: number;
    };
    /** coin commit count 4 weeks */
    commit_count_4_weeks?: number;
  };
  /** coin public interest stats */
  public_interest_stats?: {
    /** coin alexa rank */
    alexa_rank?: number;
    /** coin bing matches */
    bing_matches?: number;
  };
}

export interface CoinsMarketChart {
  /** @example [[1711843200000,69702.3087473573],[1711929600000,71246.9514406015],[1711983682000,68887.7495158568]] */
  prices?: number[][];
  /** @example [[1711843200000,1370247487960.09],[1711929600000,1401370211582.37],[1711983682000,1355701979725.16]] */
  market_caps?: number[][];
  /** @example [[1711843200000,16408802301.8374],[1711929600000,19723005998.215],[1711983682000,30137418199.6431]] */
  total_volumes?: number[][];
}

export interface CoinsMarketChartRange {
  /** @example [[1704067241331,42261.0406175669],[1704070847420,42493.2764087546],[1704074443652,42654.0731066594]] */
  prices?: number[][];
  /** @example [[1704067241331,827596236151.196],[1704070847420,831531023621.411],[1704074443652,835499399014.932]] */
  market_caps?: number[][];
  /** @example [[1704067241331,14305769170.9498],[1704070847420,14130205376.1709],[1704074443652,13697382902.2424]] */
  total_volumes?: number[][];
}

/** @example [[1709395200000,61942,62211,61721,61845],[1709409600000,61828,62139,61726,62139],[1709424000000,62171,62210,61821,62068]] */
export type CoinsOHLC = number[][];

export type SupplyChartBase = number[][];

export type CoinsContractAddress = CoinsDataBase;

/** @example [{"id":"polygon-pos","chain_identifier":137,"name":"Polygon POS","shortname":"MATIC","native_coin_id":"matic-network"},{"id":"ethereum","chain_identifier":1,"name":"Ethereum","shortname":"Ethereum","native_coin_id":"ethereum"},{"id":"stargaze","chain_identifier":null,"name":"Stargaze","shortname":"","native_coin_id":"stargaze"}] */
export interface AssetPlatforms {
  /** asset platform id */
  id?: string;
  /** chainlist's chain id */
  chain_identifier?: number | null;
  /** chain name */
  name?: string;
  /** chain shortname */
  shortname?: string;
  /** chain native coin id */
  native_coin_id?: string;
}

/** @example [{"category_id":"aave-tokens","name":"Aave Tokens"},{"category_id":"aaccount-abstraction","name":"Account Abstraction"}] */
export interface CategoriesList {
  /** category id */
  category_id?: string;
  /** category name */
  name?: string;
}

/** @example [{"id":"layer-1","name":"Layer 1 (L1)","market_cap":2061406861196.14,"market_cap_change_24h":-0.66091235190398,"content":"","top_3_coins":["https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1696501400","https://assets.coingecko.com/coins/images/279/small/ethereum.png?1696501628","https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1696501970"],"volume_24h":61146432400.1739,"updated_at":"2024-04-06T08:25:46.402Z"},{"id":"smart-contract-platform","name":"Smart Contract Platform","market_cap":744929499224.655,"market_cap_change_24h":-0.584411329310148,"content":"Smart contract platforms are usually blockchains that host smart contracts or decentralized applications...","top_3_coins":["https://assets.coingecko.com/coins/images/279/small/ethereum.png?1696501628","https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1696501970","https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756"],"volume_24h":30987638383.6307,"updated_at":"2024-04-06T08:25:33.203Z"}] */
export interface Categories {
  /** category id */
  id?: string;
  /** category name */
  name?: string;
  /** category market cap */
  market_cap?: number;
  /** category market cap change in 24 hours */
  market_cap_change_24h?: number;
  /** category description */
  content?: string;
  /** top 3 coins in the category */
  top_3_coins?: string[];
  /** category volume in 24 hours */
  volume_24h?: number;
  /** category last updated time */
  updated_at?: string;
}

/** @example [{"id":"bybit_spot","name":"Bybit","year_established":2018,"country":"British Virgin Islands","description":"Bybit is a cryptocurrency exchange that offers a professional platform featuring an ultra-fast matching engine, excellent customer service and multilingual community support for crypto traders of all levels...","url":"https://www.bybit.com","image":"https://assets.coingecko.com/markets/images/698/small/bybit_spot.png?1706864649","has_trading_incentive":false,"trust_score":10,"trust_score_rank":1,"trade_volume_24h_btc":51075.6271283852,"trade_volume_24h_btc_normalized":47765.5886637453},{"id":"gdax","name":"Coinbase Exchange","year_established":2012,"country":"United States","description":"","url":"https://www.coinbase.com/","image":"https://assets.coingecko.com/markets/images/23/small/Coinbase_Coin_Primary.png?1706864258","has_trading_incentive":false,"trust_score":10,"trust_score_rank":2,"trade_volume_24h_btc":37443.7299607648,"trade_volume_24h_btc_normalized":37443.7299607648}] */
export interface Exchanges {
  /** exchange id */
  id?: string;
  /** exchange name */
  name?: string;
  /** exchange established year */
  year_established?: number;
  /** exchange country */
  country?: string;
  /** exchange description */
  description?: string;
  /** exchange website url */
  url?: string;
  /** exchange image url */
  image?: string;
  /** exchange trading incentive */
  has_trading_incentive?: boolean;
  /** exchange trust score */
  trust_score?: number;
  /** exchange trust score rank */
  trust_score_rank?: number;
  /** exchange trade volume in BTC in 24 hours */
  trade_volume_24h_btc?: number;
  /** normalized trading volume by traffic in BTC in 24 hours <br>*refers to [`this blog`](https://blog.coingecko.com/trust-score/). */
  trade_volume_24h_btc_normalized?: number;
}

/** @example [{"id":"10kswap-starknet-alpha","name":"10KSwap"},{"id":"1bch","name":"1BCH"},{"id":"3xcalibur","name":"3xcalibur"}] */
export interface ExchangesList {
  /** exchange id */
  id?: string;
  /** exchange name */
  name?: string;
}

/** @example {"name":"Binance","year_established":2017,"country":"Cayman Islands","description":"","url":"https://www.binance.com/","image":"https://assets.coingecko.com/markets/images/52/small/binance.jpg?1706864274","facebook_url":"https://www.facebook.com/binanceexchange","reddit_url":"https://www.reddit.com/r/binance/","telegram_url":"","slack_url":"","other_url_1":"https://medium.com/binanceexchange","other_url_2":"https://steemit.com/@binanceexchange","twitter_handle":"binance","has_trading_incentive":false,"centralized":true,"public_notice":"","alert_notice":"","trust_score":9,"trust_score_rank":6,"trade_volume_24h_btc":207319.133772613,"trade_volume_24h_btc_normalized":81673.2971244154,"tickers":[{"base":"BTC","target":"USDT","market":{"name":"Binance","identifier":"binance","has_trading_incentive":false,"logo":"https://assets.coingecko.com/markets/images/52/small/binance.jpg?1706864274"},"last":69476,"volume":20242.03975,"cost_to_move_up_usd":19320706.3958517,"cost_to_move_down_usd":16360235.3694131,"converted_last":{"btc":1.000205,"eth":20.291404,"usd":69498},"converted_volume":{"btc":20249,"eth":410802,"usd":1406996874},"trust_score":"green","bid_ask_spread_percentage":0.010014,"timestamp":"2024-04-08T04:02:01+00:00","last_traded_at":"2024-04-08T04:02:01+00:00","last_fetch_at":"2024-04-08T04:03:00+00:00","is_anomaly":false,"is_stale":false,"trade_url":"https://www.binance.com/en/trade/BTC_USDT?ref=37754157","token_info_url":null,"coin_id":"bitcoin","target_coin_id":"tether"}]} */
export interface ExchangeData {
  /** exchange name */
  name?: string;
  /** exchange established year */
  year_established?: number;
  /** exchange incorporated country */
  country?: string;
  /** exchange description */
  description?: string;
  /** exchange website url */
  url?: string;
  /** exchange image url */
  image?: string;
  /** exchange facebook url */
  facebook_url?: string;
  /** exchange reddit url */
  reddit_url?: string;
  /** exchange telegram url */
  telegram_url?: string;
  /** exchange slack url */
  slack_url?: string;
  other_url_1?: string;
  other_url_2?: string;
  /** exchange twitter handle */
  twitter_handle?: string;
  /** exchange trading incentive */
  has_trading_incentive?: boolean;
  /** exchange type (true for centralized, false for decentralized) */
  centralized?: boolean;
  /** public notice for exchange */
  public_notice?: string;
  /** alert notice for exchange */
  alert_notice?: string;
  /** exchange trust score */
  trust_score?: number;
  /** exchange trust score rank */
  trust_score_rank?: number;
  trade_volume_24h_btc?: number;
  /** normalized trading volume by traffic in BTC in 24 hours <br>*refers to [`this blog`](https://blog.coingecko.com/trust-score/). */
  trade_volume_24h_btc_normalized?: number;
  tickers?: any[];
}

export type ExchangeTickers = CoinsTickers;

/** @example [[1711792200000,"306800.0517941023777005"],[1711795800000,"302561.8185582217570913"],[1711799400000,"298240.5127048246776691"]] */
export type ExchangeVolumeChart = number[][];

/** @example [{"market":"Deepcoin (Derivatives)","symbol":"ETHUSDT","index_id":"ETH","price":"3395.91","price_percentage_change_24h":1.5274069068216,"contract_type":"perpetual","index":3393.5342,"basis":-0.0523015571479482,"spread":0.01,"funding_rate":-0.007182,"open_interest":9327998764.66,"volume_24h":392642535.232121,"last_traded_at":1712467658,"expired_at":null},{"market":"BYDFi (Futures)","symbol":"BTC-PERPUSDT","index_id":"BTC","price":"69434.1","price_percentage_change_24h":2.04057930105749,"contract_type":"perpetual","index":69407.5,"basis":-0.000576303273834822,"spread":0.01,"funding_rate":0.012,"open_interest":7690212057.6,"volume_24h":132888173.547,"last_traded_at":1712467920,"expired_at":null}] */
export interface DerivativesTickersList {
  /** derivative market name */
  market?: string;
  /** derivative ticker symbol */
  symbol?: string;
  /** derivative underlying asset */
  index_id?: string;
  /** derivative ticker price */
  price?: string;
  /** derivative ticker price percentage change in 24 hours */
  price_percentage_change_24h?: number;
  /** derivative contract type */
  contract_type?: string;
  /** derivative underlying asset price */
  index?: number;
  /** difference of derivative price and index price */
  basis?: number;
  /** derivative bid ask spread */
  spread?: number;
  /** derivative funding rate */
  funding_rate?: number;
  /** derivative open interest */
  open_interest?: number;
  /** derivative volume in 24 hours */
  volume_24h?: number;
  /** derivative last updated time */
  last_traded_at?: number;
  expired_at?: string | null;
}

/** @example [{"name":"Binance (Futures)","id":"binance_futures","open_interest_btc":279958.61,"trade_volume_24h_btc":"574366.94","number_of_perpetual_pairs":330,"number_of_futures_pairs":44,"image":"https://assets.coingecko.com/markets/images/466/small/binance_futures.jpg?1706864452","year_established":2019,"country":null,"description":"","url":"https://www.binance.com/"},{"name":"Bitget Futures","id":"bitget_futures","open_interest_btc":123267.93,"trade_volume_24h_btc":"228027.47","number_of_perpetual_pairs":254,"number_of_futures_pairs":0,"image":"https://assets.coingecko.com/markets/images/591/small/2023-07-25_21.47.43.jpg?1706864543","year_established":null,"country":null,"description":"","url":"https://www.bitget.com/en/"}] */
export interface DerivativesExchanges {
  /** derivatives exchange name */
  name?: string;
  /** derivatives exchange id */
  id?: string;
  /** derivatives exchange open interest in BTC */
  open_interest_btc?: number;
  /** derivatives exchange trade volume in BTC in 24 hours */
  trade_volume_24h_btc?: string;
  /** number of perpetual pairs in the derivatives exchange */
  number_of_perpetual_pairs?: number;
  /** number of futures pairs in the derivatives exchange */
  number_of_futures_pairs?: number;
  /** derivatives exchange image url */
  image?: string;
  /** derivatives exchange established year */
  year_established?: number | null;
  /** derivatives exchange incorporated country */
  country?: string | null;
  /** derivatives exchange description */
  description?: string;
  /** derivatives exchange website url */
  url?: string;
}

/** @example {"name":"Binance (Futures)","open_interest_btc":280210.26,"trade_volume_24h_btc":"568502.31","number_of_perpetual_pairs":330,"number_of_futures_pairs":44,"image":"https://assets.coingecko.com/markets/images/466/small/binance_futures.jpg?1706864452","year_established":2019,"country":null,"description":"","url":"https://www.binance.com/","tickers":{"tickers":[{"symbol":"1000BONKUSDT","base":"1000BONK","target":"USDT","trade_url":"https://www.binance.com/en/futuresng/1000BONKUSDT","contract_type":"perpetual","last":0.023,"h24_percentage_change":-0.811,"index":0.0229866,"index_basis_percentage":-0.071,"bid_ask_spread":0.000217533173808922,"funding_rate":0.005,"open_interest_usd":28102263.9997715,"h24_volume":2679284723,"converted_volume":{"btc":"888.799603175094638929930629459045946","eth":"18029.8066338945133622149580216234476206402026327668","usd":"61648664.9602525617243462802989936852339753270611794"},"converted_last":{"btc":"0.000000331730179904099217651505502","eth":"0.0000067293358108303271067525726423602078742716","usd":"0.0230093742673322299700755918127159362875878"},"last_traded":1712550723,"expired_at":null}]}} */
export interface DerivativesExchangesID {
  /** derivatives exchange name */
  name?: string;
  /** derivatives exchange open interest in BTC */
  open_interest_btc?: number;
  /** derivatives exchange trade volume in BTC in 24 hours */
  trade_volume_24h_btc?: string;
  /** number of perpetual pairs in the derivatives exchange */
  number_of_perpetual_pairs?: number;
  /** number of futures pairs in the derivatives exchange */
  number_of_futures_pairs?: number;
  /** derivatives exchange image url */
  image?: string;
  /** derivatives exchange established year */
  year_established?: number | null;
  /** derivatives exchange incorporated country */
  country?: string | null;
  /** derivatives exchange description */
  description?: string;
  /** derivatives exchange website url */
  url?: string;
  tickers?: DerivativesTickersList[];
}

/** @example [{"id":"binance_futures","name":"Binance (Futures)"},{"id":"bybit","name":"Bybit (Futures)"},{"id":"deepcoin_derivatives","name":"Deepcoin (Derivatives)"}] */
export interface DerivativesExchangesList {
  /** derivatives exchange id */
  id?: string;
  /** derivatives exchange name */
  name?: string;
}

/** @example [{"id":"bored-ape-yacht-club","contract_address":"0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d","name":"Bored Ape Yacht Club","asset_platform_id":"ethereum","symbol":"BAYC"},{"id":"pudgy-penguins","contract_address":"0xBd3531dA5CF5857e7CfAA92426877b022e612cf8","name":"Pudgy Penguins","asset_platform_id":"ethereum","symbol":"PPG"}] */
export interface NFTList {
  /** nft collection id */
  id?: string;
  /** nft collection contract address */
  contract_address?: string;
  /** nft collection name */
  name?: string;
  /** nft collection asset platform id */
  asset_platform_id?: string;
  /** nft collection symbol */
  symbol?: string;
}

/** @example {"id":"pudgy-penguins","contract_address":"0xBd3531dA5CF5857e7CfAA92426877b022e612cf8","asset_platform_id":"ethereum","name":"Pudgy Penguins","symbol":"PPG","image":{"small":"https://assets.coingecko.com/nft_contracts/images/38/small/da64989d9762c8a61b3c65917edfdf97.png?1707287183"},"description":"Pudgy Penguins is a collection of 8,888 unique NFTs featuring cute cartoon penguins, which are generated from a collection of 150 different hand-drawn traits.","native_currency":"ethereum","native_currency_symbol":"ETH","floor_price":{"native_currency":12.5,"usd":42317},"market_cap":{"native_currency":111100,"usd":376114941},"volume_24h":{"native_currency":429.88,"usd":1455314},"floor_price_in_usd_24h_percentage_change":1.07067,"floor_price_24h_percentage_change":{"usd":1.07067060717791,"native_currency":1.21457489878543},"market_cap_24h_percentage_change":{"usd":1.07067060717767,"native_currency":-0.404858299595142},"volume_24h_percentage_change":{"usd":-3.19833776698741,"native_currency":-1.80185531390094},"number_of_unique_addresses":4752,"number_of_unique_addresses_24h_percentage_change":0.08425,"volume_in_usd_24h_percentage_change":-3.19834,"total_supply":8888,"one_day_sales":36,"one_day_sales_24h_percentage_change":-2.7027027027027,"one_day_average_sale_price":11.9411943888889,"one_day_average_sale_price_24h_percentage_change":0.925870927379588,"links":{"homepage":"https://www.pudgypenguins.com/","twitter":"https://twitter.com/pudgypenguins","discord":"https://discord.gg/pudgypenguins"},"floor_price_7d_percentage_change":{"usd":-18.0014948262365,"native_currency":-13.7931034482759},"floor_price_14d_percentage_change":{"usd":-8.63235339431041,"native_currency":-8.61905110022663},"floor_price_30d_percentage_change":{"usd":-14.3765649314409,"native_currency":-0.777901254167328},"floor_price_60d_percentage_change":{"usd":15.2779758703282,"native_currency":-18.0327868852459},"floor_price_1y_percentage_change":{"usd":429.5685372855,"native_currency":196.208530805687},"explorers":[{"name":"Etherscan","link":"https://etherscan.io/token/0xBd3531dA5CF5857e7CfAA92426877b022e612cf8"},{"name":"Ethplorer","link":"https://ethplorer.io/address/0xBd3531dA5CF5857e7CfAA92426877b022e612cf8"}],"user_favorites_count":3660,"ath":{"native_currency":22.9,"usd":67535},"ath_change_percentage":{"native_currency":-59.825327510917,"usd":-64.3396788440525},"ath_date":{"native_currency":"2024-02-17T09:25:05.056Z","usd":"2024-02-29T11:45:08.150Z"}} */
export interface NFTData {
  /** nft collection id */
  id?: string;
  /** nft collection contract address */
  contract_address?: string;
  /** nft collection asset platform id */
  asset_platform_id?: string;
  /** nft collection name */
  name?: string;
  /** nft collection symbol */
  symbol?: string;
  /** nft collection image url */
  image?: {
    small?: string;
  };
  /** nft collection description */
  description?: string;
  /** nft collection native currency */
  native_currency?: string;
  /** nft collection native currency symbol */
  native_currency_symbol?: string;
  /** nft collection floor price */
  floor_price?: {
    native_currency?: number;
    usd?: number;
  };
  /** nft collection market cap */
  market_cap?: {
    native_currency?: number;
    usd?: number;
  };
  /** nft collection volume in 24 hours */
  volume_24h?: {
    native_currency?: number;
    usd?: number;
  };
  /** nft collection floor price in usd 24 hours percentage change */
  floor_price_in_usd_24h_percentage_change?: number;
  floor_price_24h_percentage_change?: {
    usd?: number;
    native_currency?: number;
  };
  /** nft collection market cap 24 hours percentage change */
  market_cap_24h_percentage_change?: {
    usd?: number;
    native_currency?: number;
  };
  /** nft collection volume in 24 hours percentage change */
  volume_24h_percentage_change?: {
    usd?: number;
    native_currency?: number;
  };
  /** number of unique address owning the nfts */
  number_of_unique_addresses?: number;
  /** number of unique address owning the nfts 24 hours percentage change */
  number_of_unique_addresses_24h_percentage_change?: number;
  /** nft collection volume in usd 24 hours percentage change */
  volume_in_usd_24h_percentage_change?: number;
  /** nft collection total supply */
  total_supply?: number;
  /** nft collection one day sales */
  one_day_sales?: number;
  /** nft collection one day sales 24 hours percentage change */
  one_day_sales_24h_percentage_change?: number;
  /** nft collection one day average sale price */
  one_day_average_sale_price?: number;
  /** nft collection one day average sale price 24 hours percentage change */
  one_day_average_sale_price_24h_percentage_change?: number;
  /** nft collection links */
  links?: {
    homepage?: string;
    twitter?: string;
    discord?: string;
  };
  /** nft collection floor price 7 days percentage change */
  floor_price_7d_percentage_change?: {
    usd?: number;
    native_currency?: number;
  };
  /** nft collection floor price 14 days percentage change */
  floor_price_14d_percentage_change?: {
    usd?: number;
    native_currency?: number;
  };
  /** nft collection floor price 30 days percentage change */
  floor_price_30d_percentage_change?: {
    usd?: number;
    native_currency?: number;
  };
  /** nft collection floor price 60 days percentage change */
  floor_price_60d_percentage_change?: {
    usd?: number;
    native_currency?: number;
  };
  /** nft collection floor price 1 year percentage change */
  floor_price_1y_percentage_change?: {
    usd?: number;
    native_currency?: number;
  };
  /** nft collection block explorers links */
  explorers?: {
    name?: string;
    link?: string;
  }[];
  /** nft collection user favorites count */
  user_favorites_count?: number;
  /** nft collection all time highs */
  ath?: {
    native_currency?: number;
    usd?: number;
  };
  /** nft collection all time highs change percentage */
  ath_change_percentage?: {
    native_currency?: number;
    usd?: number;
  };
  /** nft collection all time highs date */
  ath_date?: {
    /** @format date-time */
    native_currency?: string;
    /** @format date-time */
    usd?: string;
  };
}

/** @example {"rates":{"btc":{"name":"Bitcoin","unit":"BTC","value":1,"type":"crypto"},"eth":{"name":"Ether","unit":"ETH","value":20.656,"type":"crypto"},"ltc":{"name":"Litecoin","unit":"LTC","value":684.945,"type":"crypto"},"bch":{"name":"Bitcoin Cash","unit":"BCH","value":102.254,"type":"crypto"},"bnb":{"name":"Binance Coin","unit":"BNB","value":119.846,"type":"crypto"}}} */
export interface ExchangeRates {
  rates?: Record<
    string,
    {
      /** name of the currency */
      name?: string;
      /** unit of the currency */
      unit?: string;
      /** value of the currency */
      value?: number;
      /** type of the currency */
      type?: string;
    }
  >;
}

/** @example {"coins":[{"id":"ethereum","name":"Ethereum","api_symbol":"ethereum","symbol":"ETH","market_cap_rank":2,"thumb":"https://assets.coingecko.com/coins/images/279/thumb/ethereum.png","large":"https://assets.coingecko.com/coins/images/279/large/ethereum.png"},{"id":"ethereum-classic","name":"Ethereum Classic","api_symbol":"ethereum-classic","symbol":"ETC","market_cap_rank":27,"thumb":"https://assets.coingecko.com/coins/images/453/thumb/ethereum-classic-logo.png","large":"https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png"},{"id":"sweth","name":"Swell Ethereum","api_symbol":"sweth","symbol":"SWETH","market_cap_rank":142,"thumb":"https://assets.coingecko.com/coins/images/30326/thumb/_lB7zEtS_400x400.jpg","large":"https://assets.coingecko.com/coins/images/30326/large/_lB7zEtS_400x400.jpg"}],"exchanges":[{"id":"uniswap_v3","name":"Uniswap V3 (Ethereum)","market_type":"spot","thumb":"https://assets.coingecko.com/markets/images/665/thumb/uniswap-v3.png","large":"https://assets.coingecko.com/markets/images/665/large/uniswap-v3.png"},{"id":"uniswap_v2","name":"Uniswap V2 (Ethereum)","market_type":"spot","thumb":"https://assets.coingecko.com/markets/images/535/thumb/256x256_Black-1.png","large":"https://assets.coingecko.com/markets/images/535/large/256x256_Black-1.png"},{"id":"curve_ethereum","name":"Curve (Ethereum)","market_type":"spot","thumb":"https://assets.coingecko.com/markets/images/538/thumb/Curve.png","large":"https://assets.coingecko.com/markets/images/538/large/Curve.png"}],"icos":[],"categories":[{"id":158,"name":"Ethereum PoS IOU"},{"id":146,"name":"Ethereum Ecosystem"},{"id":167,"name":"EthereumPoW Ecosystem"}],"nfts":[{"id":"cyberkongz-genkai","name":"CyberKongz Genkai (Ethereum)","symbol":"GENKAI","thumb":"https://assets.coingecko.com/nft_contracts/images/3388/thumb/cyberkongz-genkai.png"},{"id":"ethereum-peppets","name":"Ethereum Peppets","symbol":"PEPPET","thumb":"https://assets.coingecko.com/nft_contracts/images/3880/thumb/ethereum-peppets.png"},{"id":"ens-ethereum-name-service","name":"ENS: Ethereum Name Service","symbol":"ENS","thumb":"https://assets.coingecko.com/nft_contracts/images/373/thumb/ens-ethereum-name-service.png"},{"id":"league-of-kingdoms-ethereum","name":"League of Kingdoms (Ethereum)","symbol":"LOKR","thumb":"https://assets.coingecko.com/nft_contracts/images/1001/thumb/league-of-kingdoms-ethereum.jpg"}]} */
export interface Search {
  coins?: {
    /** coin id */
    id?: string;
    /** coin name */
    name?: string;
    /** coin api symbol */
    api_symbol?: string;
    /** coin symbol */
    symbol?: string;
    /** coin market cap rank */
    market_cap_rank?: number;
    /** coin thumb image url */
    thumb?: string;
    /** coin large image url */
    large?: string;
  }[];
  exchanges?: {
    /** exchange id */
    id?: string;
    /** exchange name */
    name?: string;
    /** exchange market type */
    market_type?: string;
    /** exchange thumb image url */
    thumb?: string;
    /** exchange large image url */
    large?: string;
  }[];
  icos?: string[];
  categories?: {
    /** category id */
    id?: number;
    /** category name */
    name?: string;
  }[];
  nfts?: {
    /** nft collection id */
    id?: string;
    /** nft name */
    name?: string;
    /** nft collection symbol */
    symbol?: string;
    /** nft collection thumb image url */
    thumb?: string;
  }[];
}

/** @example {"coins":[{"item":{"id":"moon-tropica","coin_id":28470,"name":"Moon Tropica","symbol":"CAH","market_cap_rank":530,"thumb":"https://assets.coingecko.com/coins/images/28470/standard/MTLOGO.png?1696527464","small":"https://assets.coingecko.com/coins/images/28470/small/MTLOGO.png?1696527464","large":"https://assets.coingecko.com/coins/images/28470/large/MTLOGO.png?1696527464","slug":"moon-tropica","price_btc":0.000530163474333298,"score":0,"data":{"price":36.9717118016975,"price_btc":"0.000530163474333299","price_change_percentage_24h":{"aed":-4.04467447608756,"ars":-4.04990008945855,"aud":-4.04990008945802,"bch":-2.37567962487489,"bdt":-4.0499000894585,"bhd":-4.16927013396437,"bmd":-4.04990008945853,"bnb":-3.4734695990217,"brl":-4.04990008945847,"btc":-5.98585375059246,"cad":-4.04990008945848,"chf":-4.04990008945855,"clp":-5.02567556756719,"cny":-4.0499000894584,"czk":-4.04990008945864,"dkk":-4.04990008945864,"dot":-5.98238779521245,"eos":-5.74405098071799,"eth":-5.05689445119971,"eur":-4.09661619752604,"gbp":-4.04990008945847,"gel":-4.04990008945897,"hkd":-4.04990008945852,"huf":-4.05387716450818,"idr":-4.04990008945821,"ils":-4.40922021210977,"inr":-4.04990008945856,"jpy":-4.04990008945905,"krw":-4.04990008945847,"kwd":-4.12041469685036,"lkr":-4.0499000894589,"ltc":-5.29341338838337,"mmk":-4.04990008945877,"mxn":-4.0499000894592,"myr":-4.04990008945872,"ngn":-4.04990008945849,"nok":-4.04990008945854,"nzd":-4.0499000894586,"php":-4.04990008945844,"pkr":-4.04990008945845,"pln":-4.04990008945856,"rub":-4.04990008945847,"sar":-4.04990008945841,"sek":-4.04990008945854,"sgd":-4.04990008945858,"thb":-4.04105687070854,"try":-4.04990008945837,"twd":-4.04990008945847,"uah":-4.17945939929411,"usd":-4.04990008945853,"vef":-4.0499000894584,"vnd":-4.04990008945868,"xag":-4.06208301025163,"xau":-4.04990008945842,"xdr":-4.04990008945852,"xlm":-4.12493924900392,"xrp":-4.48127069993476,"yfi":-4.04427366181248,"zar":-4.0499000894588,"bits":-5.98585375059245,"link":-5.12005806599531,"sats":-5.98585375059245},"market_cap":"$99,703,583","market_cap_btc":"1428.83459310001","total_volume":"$282,142","total_volume_btc":"4.04583894742915","sparkline":"https://www.coingecko.com/coins/28470/sparkline.svg","content":null}}},{"item":{"id":"gala","coin_id":12493,"name":"GALA","symbol":"GALA","market_cap_rank":53,"thumb":"https://assets.coingecko.com/coins/images/12493/standard/GALA_token_image_-_200PNG.png?1709725869","small":"https://assets.coingecko.com/coins/images/12493/small/GALA_token_image_-_200PNG.png?1709725869","large":"https://assets.coingecko.com/coins/images/12493/large/GALA_token_image_-_200PNG.png?1709725869","slug":"gala","price_btc":8.99538550992028e-7,"score":1,"data":{"price":0.0627306136161425,"price_btc":"0.000000899538550992028","price_change_percentage_24h":{"aed":9.60780028942887,"ars":9.60183117845321,"aud":9.60183117845384,"bch":11.4674219663065,"bdt":9.60183117845328,"bhd":9.4654772249098,"bmd":9.60183117845317,"bnb":10.2234284851282,"brl":9.60183117845336,"btc":7.38745825724124,"cad":9.60183117845328,"chf":9.60183117845322,"clp":8.48722286309518,"cny":9.60183117845327,"czk":9.60183117845312,"dkk":9.60183117845326,"dot":7.37688026427037,"eos":7.62858932956233,"eth":8.45108220753484,"eur":9.54846832636144,"gbp":9.60183117845332,"gel":9.60183117845289,"hkd":9.60183117845327,"huf":9.59728824719456,"idr":9.60183117845271,"ils":9.19138717205251,"inr":9.60183117845323,"jpy":9.60183117845302,"krw":9.60183117845328,"kwd":9.52128378869318,"lkr":9.60183117845326,"ltc":8.06524825045215,"mmk":9.60183117845293,"mxn":9.60183117845321,"myr":9.60183117845329,"ngn":9.60183117845327,"nok":9.6018311784532,"nzd":9.60183117845338,"php":9.60183117845333,"pkr":9.60183117845299,"pln":9.6018311784534,"rub":9.60183117845327,"sar":9.6018311784533,"sek":9.60183117845319,"sgd":9.60183117845319,"thb":9.61193260585552,"try":9.60183117845312,"twd":9.601831178453,"uah":9.45383823610663,"usd":9.60183117845317,"vef":9.60183117845337,"vnd":9.60183117845306,"xag":9.58791487790447,"xau":9.60183117845332,"xdr":9.60183117845335,"xlm":9.4911259696921,"xrp":8.99767343610987,"yfi":9.54409111376635,"zar":9.6018311784527,"bits":7.38745825724125,"link":8.37662653267695,"sats":7.38745825724125},"market_cap":"$2,365,621,969","market_cap_btc":"33901.3141933559","total_volume":"$212,777,204","total_volume_btc":"3051.16253202022","sparkline":"https://www.coingecko.com/coins/12493/sparkline.svg","content":{"title":"What is GALA?","description":"Gala is a blockchain gaming ecosystem. Gamers can explore different type of games and have their experiences interact across each other on the Gala platform. The GALA token is the utility token and primary medium of exchange of the ecosystem. Game items are represented as NFTs on the Ethereum blockchain and users can trade them on all marketplaces."}}}}],"nfts":[{"id":"chameleon-travel-club","name":"ChameleonTravelClub","symbol":"CTC","thumb":"https://assets.coingecko.com/nft_contracts/images/3610/standard/chameleon-travel-club.png?1707290106","nft_contract_id":3610,"native_currency_symbol":"eth","floor_price_in_native_currency":4.29,"floor_price_24h_percentage_change":57.3120347225931,"data":{"floor_price":"4.29 ETH","floor_price_in_usd_24h_percentage_change":"57.3120347225931","h24_volume":"11.26 ETH","h24_average_sale_price":"2.82 ETH","sparkline":"https://www.coingecko.com/nft/3610/sparkline.svg","content":null}},{"id":"natcats","name":"Natcats","symbol":"DMTNATCATS","thumb":"https://assets.coingecko.com/nft_contracts/images/4171/standard/natcats.png?1709517703","nft_contract_id":4171,"native_currency_symbol":"btc","floor_price_in_native_currency":0.05139,"floor_price_24h_percentage_change":52.5917829733019,"data":{"floor_price":"0.051 BTC","floor_price_in_usd_24h_percentage_change":"52.5917829733019","h24_volume":"3.93 BTC","h24_average_sale_price":"0.049 BTC","sparkline":"https://www.coingecko.com/nft/4171/sparkline.svg","content":null}}],"categories":[{"id":251,"name":"Solana Meme Coins","market_cap_1h_change":1.44537649465531,"slug":"solana-meme-coins","coins_count":79,"data":{"market_cap":8237562936.01112,"market_cap_btc":118852.276224895,"total_volume":1207846273.32444,"total_volume_btc":17426.911336459,"market_cap_change_percentage_24h":{"aed":14.2303965235397,"ars":14.224569755904,"aud":14.2241756714483,"bch":10.544446407888,"bdt":14.2241756714484,"bhd":14.0820711301687,"bmd":14.2241756714485,"bnb":12.6244772393324,"brl":14.221695576047,"btc":11.84681099263,"cad":14.232580997301,"chf":14.2241756714485,"clp":13.0625598968815,"cny":14.2178586614014,"czk":14.2241756714486,"dkk":14.2241756714484,"dot":10.6966484935826,"eos":10.1217314444624,"eth":11.8847596390012,"eur":14.1685622959589,"gbp":14.2241756714485,"gel":14.2241756714491,"hkd":14.2241756714487,"huf":14.2194411467367,"idr":14.2241756714489,"ils":13.7964216112624,"inr":14.2241756714486,"jpy":14.2241756714483,"krw":14.2241756714485,"kwd":14.1402312783772,"lkr":14.2241756714485,"ltc":8.6428668776247,"mmk":14.224175671449,"mxn":14.2241756714481,"myr":14.2241756714485,"ngn":14.2241756714486,"nok":14.2241756714485,"nzd":14.2241756714481,"php":14.2241756714486,"pkr":14.2241756714484,"pln":14.2068251066482,"rub":14.2241756714486,"sar":14.2241756714487,"sek":14.2241756714486,"sgd":14.2241756714485,"thb":14.2347031161614,"try":14.2241756714486,"twd":14.224175671449,"uah":14.0699412789845,"usd":14.2241756714485,"vef":14.2241756714486,"vnd":14.2241756714489,"xag":14.2096724652385,"xau":14.2241756714488,"xdr":14.2241756714487,"xlm":11.8320435642723,"xrp":12.4172400147244,"yfi":12.7954918554954,"zar":14.2241756714481,"bits":11.84681099263,"link":11.6566512723034,"sats":11.84681099263},"sparkline":"https://www.coingecko.com/categories/25211443/sparkline.svg"}},{"id":327,"name":"Gaming Platform","market_cap_1h_change":1.10506929591162,"slug":"gaming-platform","coins_count":20,"data":{"market_cap":3665275001.85375,"market_cap_btc":52882.9072802773,"total_volume":218189404.503211,"total_volume_btc":3148.05575080902,"market_cap_change_percentage_24h":{"aed":5.95319529244364,"ars":5.94779073579304,"aud":5.94742520692706,"bch":2.53433127439418,"bdt":5.94742520692721,"bhd":5.81561764368333,"bmd":5.94742520692732,"bnb":4.46364185726444,"brl":5.94512482068669,"btc":3.7423257608765,"cad":5.95522147796062,"chf":5.94742520692729,"clp":4.8699807896516,"cny":5.9415659311167,"czk":5.94742520692735,"dkk":5.94742520692723,"dot":2.67550470808869,"eos":2.14224648404119,"eth":3.7775246261735,"eur":5.89584160909828,"gbp":5.94742520692727,"gel":5.94742520692782,"hkd":5.94742520692747,"huf":5.94303374864054,"idr":5.94742520692765,"ils":5.55066645570739,"inr":5.94742520692736,"jpy":5.94742520692707,"krw":5.9474252069273,"kwd":5.86956347359295,"lkr":5.94742520692729,"ltc":0.770541307223899,"mmk":5.9474252069277,"mxn":5.94742520692689,"myr":5.94742520692724,"ngn":5.94742520692737,"nok":5.94742520692729,"nzd":5.94742520692689,"php":5.94742520692736,"pkr":5.94742520692717,"pln":5.93133187418339,"rub":5.94742520692736,"sar":5.94742520692747,"sek":5.94742520692736,"sgd":5.94742520692729,"thb":5.95718982684932,"try":5.94742520692738,"twd":5.94742520692774,"uah":5.80436672859846,"usd":5.94742520692732,"vef":5.94742520692733,"vnd":5.94742520692767,"xag":5.93397291150769,"xau":5.94742520692753,"xdr":5.94742520692749,"xlm":3.72862838900029,"xrp":4.27142116295708,"yfi":4.62226465448499,"zar":5.94742520692694,"bits":3.7423257608765,"link":3.5659451249189,"sats":3.74232576087651},"sparkline":"https://www.coingecko.com/categories/25211410/sparkline.svg"}}]} */
export interface TrendingSearch {
  coins?: {
    /** coin id */
    id?: string;
    coin_id?: number;
    /** coin name */
    name?: string;
    /** coin symbol */
    symbol?: string;
    /** coin market cap rank */
    market_cap_rank?: number;
    /** coin thumb image url */
    thumb?: string;
    /** coin small image url */
    small?: string;
    /** coin large image url */
    large?: string;
    /** coin web slug */
    slug?: string;
    /** coin price in btc */
    price_btc?: number;
    /** coin sequence in the list */
    score?: number;
    data?: {
      /** coin price in usd */
      price?: number;
      /** coin price in btc */
      price_btc?: string;
      /** coin price change percentage in 24 hours */
      price_change_percentage_24h?: {
        btc?: number;
        usd?: number;
      };
      /** coin market cap in usd */
      market_cap?: string;
      /** coin market cap in btc */
      market_cap_btc?: string;
      /** coin total volume in usd */
      total_volume?: string;
      /** coin total volume in btc */
      total_volume_btc?: string;
      /** coin sparkline image url */
      sparkline?: string;
      content?: string;
    };
  }[];
  nfts?: {
    /** nft collection id */
    id?: string;
    /** nft collection name */
    name?: string;
    /** nft collection symbol */
    symbol?: string;
    /** nft collection thumb image url */
    thumb?: string;
    nft_contract_id?: number;
    /** nft collection native currency symbol */
    native_currency_symbol?: string;
    /** nft collection floor price in native currency */
    floor_price_in_native_currency?: number;
    /** nft collection floor price 24 hours percentage change */
    floor_price_24h_percentage_change?: number;
    data?: {
      /** nft collection floor price */
      floor_price?: string;
      /** nft collection floor price in usd 24 hours percentage change */
      floor_price_in_usd_24h_percentage_change?: string;
      /** nft collection volume in 24 hours */
      h24_volume?: string;
      /** nft collection 24 hours average sale price */
      h24_average_sale_price?: string;
      /** nft collection sparkline image url */
      sparkline?: string;
      content?: string;
    };
  }[];
  categories?: {
    id?: number;
    /** category name */
    name?: string;
    /** category market cap 1 hour change */
    market_cap_1h_change?: number;
    /** category web slug */
    slug?: string;
    /** category number of coins */
    coins_count?: number;
    data?: {
      /** category market cap */
      market_cap?: number;
      /** category market cap in btc */
      market_cap_btc?: number;
      /** category total volume */
      total_volume?: number;
      /** category total volume in btc */
      total_volume_btc?: number;
      /** category market cap change percentage in 24 hours */
      market_cap_change_percentage_24h?: {
        btc?: number;
        usd?: number;
      };
      /** category sparkline image url */
      sparkline?: string;
    };
  }[];
}

/** @example {"date":{"active_cryptocurrencies":13690,"upcoming_icos":0,"ongoing_icos":49,"ended_icos":3376,"markets":1046,"total_market_cap":{"btc":39003738.0847159,"eth":803832137.207531,"ltc":26721173267.5358,"bch":3981159931.51342,"bnb":4670513150.58714,"eos":2641998753398.41,"xrp":4567762968374.06,"xlm":21049307801356.5,"link":153517938957.199,"dot":315120726481.166,"yfi":324671967.610845,"usd":2721226850772.63,"aed":9993705609462.48,"ars":2341775032921960,"aud":4135040261091.56,"bdt":298245137607204,"bhd":1024582727718.66,"bmd":2721226850772.63,"brl":13785980136430.7,"cad":3698283351542.55,"chf":2454228235855.38,"clp":2557393918759370,"cny":19681001075528,"czk":63568675602103.7,"dkk":18728571677757.6,"eur":2508293570926.52,"gbp":2153208842849.76,"gel":7292887960070.66,"hkd":21307070180207.2,"huf":979811947048335,"idr":43234171898362830,"ils":10201683535213.3,"inr":226670207147326,"jpy":412551596711386,"krw":3677112086909555,"kwd":836219405108.176,"lkr":812593109477406,"mmk":5706555839881336,"mxn":44773978111872.4,"myr":12919024474043.1,"ngn":3522998071018357,"nok":29197131372679.9,"nzd":4524820631515.69,"php":153994230206450,"pkr":755251422720381,"pln":10747177948492.4,"rub":251732363568359,"sar":10207395390373.1,"sek":29054498267296.6,"sgd":3672056167154.8,"thb":99649147572586.4,"try":87273829665781.3,"twd":87422678053291.6,"uah":105534042826572,"vef":272476444567.864,"vnd":67937284004880150,"zar":50878778428896,"xdr":2052425485204.54,"xag":99002369095.9216,"xau":1167950564.35161,"bits":39003738084715.9,"sats":3900373808471590},"total_volume":{"btc":993675.225562481,"eth":20478757.1519219,"ltc":680759567.614816,"bch":101425662.954523,"bnb":118987908.244129,"eos":67308643636.0751,"xrp":116370202467.687,"xlm":536260797157.883,"link":3911085965.39774,"dot":8028144848.20593,"yfi":8271476.18386717,"usd":69327091133.5489,"aed":254603742187.958,"ars":59660021021604.7,"aud":105345981331.984,"bdt":7598215425943.58,"bhd":26102689718.1482,"bmd":69327091133.5489,"brl":351217283120.761,"cad":94218983205.0497,"chf":62524924932.7986,"clp":65153216175224.4,"cny":501401253914.28,"czk":1619501647007.04,"dkk":477136772017.537,"eur":63902315579.4398,"gbp":54856031438.6965,"gel":185796604237.911,"hkd":542827657221.132,"huf":24962090950805.3,"idr":1101451492157040,"ils":259902273109.113,"inr":5774743147085.06,"jpy":10510333651301.7,"krw":93679615385638.7,"kwd":21303868469.8839,"lkr":20701955274048.2,"mmk":145382556642719,"mxn":1140680226674.96,"myr":329130365156.523,"ngn":89753343519839.4,"nok":743838091608.3,"nzd":115276185884.681,"php":3923220156574.62,"pkr":19241094948336.3,"pln":273799512470.654,"rub":6413236921211.56,"sar":260047790673.403,"sek":740204312126.535,"sgd":93550808700.7045,"thb":2538702546310.57,"try":2223423872616.7,"twd":2227215995174.62,"uah":2688628550997.98,"vef":6941721635.20225,"vnd":1730798106095000,"zar":1296208622923.97,"xdr":52288433291.4744,"xag":2522224952.61704,"xau":29755187.5145192,"bits":993675225562.481,"sats":99367522556248.1},"market_cap_percentage":{"btc":50.4465263233584,"eth":14.9228066918211,"usdt":3.92900641199819,"bnb":3.29395203563452,"sol":2.95074801328159,"usdc":1.20922049263535,"xrp":1.20523481041161,"steth":1.18309266793764,"doge":1.05778560354543,"ada":0.765987294694099},"market_cap_change_percentage_24h_usd":1.72179506060272,"updated_at":1712512855}} */
export interface Global {
  data?: {
    /** number of active cryptocurrencies */
    active_cryptocurrencies?: number;
    /** number of upcoming icos */
    upcoming_icos?: number;
    /** number of ongoing icos */
    ongoing_icos?: number;
    /** number of ended icos */
    ended_icos?: number;
    /** number of exchanges */
    markets?: number;
    /** cryptocurrencies total market cap */
    total_market_cap?: {
      btc?: number;
      eth?: number;
    };
    /** cryptocurrencies total volume */
    total_volume?: {
      btc?: number;
      eth?: number;
    };
    /** cryptocurrencies market cap percentage */
    market_cap_percentage?: {
      btc?: number;
      eth?: number;
    };
  };
  /** cryptocurrencies market cap change percentage in 24 hours in usd */
  market_cap_change_percentage_24h_usd?: number;
  updated_at?: number;
}

/** @example {"data":{"defi_market_cap":"105273842288.229620442228701667","eth_market_cap":"406184911478.5772415794509920285","defi_to_eth_ratio":"25.9177136602677348904422532573101031788841174510865443130135278","trading_volume_24h":"5046503746.288261648853195485635","defi_dominance":"3.8676503084614763642371703099489945457095080090859886","top_coin_name":"Lido Staked Ether","top_coin_defi_dominance":30.589442518868}} */
export interface GlobalDeFi {
  data?: {
    /** defi market cap */
    defi_market_cap?: string;
    /** eth market cap */
    eth_market_cap?: string;
    /** defi to eth ratio */
    defi_to_eth_ratio?: string;
    /** defi trading volume in 24 hours */
    trading_volume_24h?: string;
    /** defi dominance */
    defi_dominance?: string;
    /** defi top coin name */
    top_coin_name?: string;
    /** defi top coin dominance */
    top_coin_defi_dominance?: number;
  };
}

/** @example {"total_holdings":264136,"total_value_usd":18403306939.1513,"market_cap_dominance":1.34,"companies":[{"name":"MicroStrategy Inc.","symbol":"NASDAQ:MSTR","country":"US","total_holdings":174530,"total_entry_value_usd":4680000000,"total_current_value_usd":12160134022,"percentage_of_total_supply":0.831},{"name":"Galaxy Digital Holdings","symbol":"TSE: GLXY","country":"US","total_holdings":17518,"total_entry_value_usd":0,"total_current_value_usd":1220542186,"percentage_of_total_supply":0.083},{"name":"Marathon Digital Holdings","symbol":"NASDAQ:MARA","country":"US","total_holdings":13716,"total_entry_value_usd":189087000,"total_current_value_usd":955643145,"percentage_of_total_supply":0.065},{"name":"Tesla, Inc.","symbol":"NASDAQ:TSLA","country":"US","total_holdings":10500,"total_entry_value_usd":336000000,"total_current_value_usd":731572836,"percentage_of_total_supply":0.05},{"name":"Hut 8 Mining Corp","symbol":"NASDAQ:HUT","country":"CA","total_holdings":9366,"total_entry_value_usd":0,"total_current_value_usd":652562970,"percentage_of_total_supply":0.045},{"name":"Coinbase Global, Inc","symbol":"NASDAQ:COIN","country":"US","total_holdings":9181,"total_entry_value_usd":207783800,"total_current_value_usd":639673353,"percentage_of_total_supply":0.044},{"name":"Block Inc.","symbol":"NYSE:SQ","country":"US","total_holdings":8027,"total_entry_value_usd":220000000,"total_current_value_usd":559270015,"percentage_of_total_supply":0.038},{"name":"Riot Platforms, Inc","symbol":"NASDAQ:RIOT","country":"US","total_holdings":7327,"total_entry_value_usd":0,"total_current_value_usd":510498492,"percentage_of_total_supply":0.035},{"name":"Hive Blockchain","symbol":"NASDAQ:HIVE","country":"CA","total_holdings":2596,"total_entry_value_usd":0,"total_current_value_usd":180872674,"percentage_of_total_supply":0.012},{"name":"CleanSpark Inc.","symbol":"NASDAQ:CLSK","country":"US","total_holdings":2575,"total_entry_value_usd":0,"total_current_value_usd":179409529,"percentage_of_total_supply":0.012},{"name":"NEXON Co Ltd","symbol":"TYO:3659","country":"JP","total_holdings":1717,"total_entry_value_usd":99974042,"total_current_value_usd":119629577,"percentage_of_total_supply":0.008},{"name":"Exodus Movement Inc","symbol":"EXOD:OTCMKTS","country":"US","total_holdings":1651,"total_entry_value_usd":23163000,"total_current_value_usd":115031119,"percentage_of_total_supply":0.008},{"name":"Meitu Inc","symbol":"HKG:1357","country":"HK","total_holdings":940,"total_entry_value_usd":49500000,"total_current_value_usd":65493187,"percentage_of_total_supply":0.004},{"name":"Bit Digital, Inc","symbol":"NASDAQ:BTBT","country":"US","total_holdings":821,"total_entry_value_usd":0,"total_current_value_usd":57202028,"percentage_of_total_supply":0.004},{"name":"Bitfarms Limited","symbol":"NASDAQ:BITF","country":"US","total_holdings":760,"total_entry_value_usd":0,"total_current_value_usd":52951938,"percentage_of_total_supply":0.004},{"name":"NFT Investments PLC","symbol":"AQSE:NFT","country":"GB","total_holdings":517,"total_entry_value_usd":8505363,"total_current_value_usd":36021253,"percentage_of_total_supply":0.002},{"name":"Cipher Mining","symbol":"NASDAQ:CIFR","country":"US","total_holdings":507,"total_entry_value_usd":0,"total_current_value_usd":35324516,"percentage_of_total_supply":0.002},{"name":"DMG Blockchain Solutions Inc.","symbol":"OTCMKTS:DMGGF","country":"CA","total_holdings":462,"total_entry_value_usd":0,"total_current_value_usd":32189204,"percentage_of_total_supply":0.002},{"name":"Neptune Digital Assets Corp.","symbol":"TSXV: DASH","country":"CA","total_holdings":313,"total_entry_value_usd":0,"total_current_value_usd":21807837,"percentage_of_total_supply":0.001},{"name":"BIGG Digital Assets Inc.","symbol":"CNSX:BIGG","country":"CA","total_holdings":283,"total_entry_value_usd":2690387,"total_current_value_usd":19717629,"percentage_of_total_supply":0.001},{"name":"Advanced Bitcoin Technologies AG","symbol":"ABT:GR","country":"DE","total_holdings":228,"total_entry_value_usd":2117978,"total_current_value_usd":15885581,"percentage_of_total_supply":0.001},{"name":"FRMO Corp.","symbol":"OTCMKTS:FRMO","country":"US","total_holdings":143,"total_entry_value_usd":0,"total_current_value_usd":9963325,"percentage_of_total_supply":0.001},{"name":"The Brooker Group","symbol":"BKK:BROOK","country":"TH","total_holdings":122,"total_entry_value_usd":6600000,"total_current_value_usd":8500179,"percentage_of_total_supply":0.001},{"name":"DigitalX","symbol":"ASX:DCC","country":"AU","total_holdings":115,"total_entry_value_usd":610350,"total_current_value_usd":8012464,"percentage_of_total_supply":0.001},{"name":"LQwD Technologies Corp","symbol":"TSXV:LQWD","country":"CA","total_holdings":113,"total_entry_value_usd":4360275,"total_current_value_usd":7873117,"percentage_of_total_supply":0.001},{"name":"Cypherpunk Holdings Inc","symbol":"CSE:HODL","country":"CA","total_holdings":69,"total_entry_value_usd":1910000,"total_current_value_usd":4807478,"percentage_of_total_supply":0},{"name":"Core Scientific","symbol":"CORZ:NASDAQ","country":"US","total_holdings":21,"total_entry_value_usd":0,"total_current_value_usd":1463145,"percentage_of_total_supply":0},{"name":"Mogo Inc.","symbol":"NASDAQ:MOGO","country":"CA","total_holdings":18,"total_entry_value_usd":595494,"total_current_value_usd":1254124,"percentage_of_total_supply":0}]} */
export interface CompaniesTreasury {
  /** total btc/eth holdings of companies */
  total_holdings?: number;
  /** total btc/eth holdings value in usd */
  total_value_usd?: number;
  /** market cap dominance */
  market_cap_dominance?: number;
  companies?: {
    /** company name */
    name?: string;
    /** company symbol */
    symbol?: string;
    /** company incorporated country */
    country?: string;
    /** total btc/eth holdings of company */
    total_holdings?: number;
    /** total entry value in usd */
    total_entry_value_usd?: number;
    /** total current value of btc/eth holdings in usd */
    total_current_value_usd?: number;
    /** percentage of total btc/eth supply */
    percentage_of_total_supply?: number;
  }[];
}

export interface SimplePriceParams {
  /** coins' ids, comma-separated if querying more than 1 coin.  <br>*refers to [`/coins/list`](/reference/coins-list). */
  ids: string;
  /** target currency of coins, comma-separated if querying more than 1 currency.  <br>*refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies). */
  vs_currencies: string;
  /** include market cap, default: false  */
  include_market_cap?: boolean;
  /** include 24hr volume, default: false */
  include_24hr_vol?: boolean;
  /** include 24hr change, default: false */
  include_24hr_change?: boolean;
  /** include last updated price time in UNIX, default: false */
  include_last_updated_at?: boolean;
  /** decimal place for currency price value  */
  precision?: PrecisionEnum;
}

/** decimal place for currency price value  */
export enum PrecisionEnum {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

/** decimal place for currency price value  */
export enum SimplePriceParams1PrecisionEnum {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

export interface SimpleTokenPriceParams {
  /** the contract addresses of tokens, comma-separated if querying more than 1 token's contract address */
  contract_addresses: string;
  /** target currency of coins, comma-separated if querying more than 1 currency.  <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies). */
  vs_currencies: string;
  /** include market capitalization, default: false */
  include_market_cap?: boolean;
  /** include 24hr volume, default: false */
  include_24hr_vol?: boolean;
  /** include 24hr change  default: false */
  include_24hr_change?: boolean;
  /** include last updated price time in UNIX , default: false */
  include_last_updated_at?: boolean;
  /** decimal place for currency price value  */
  precision?: PrecisionEnum1;
  /**
   * asset platform's id  <br>*refers to [`/asset_platforms`](/reference/asset-platforms-list).
   * @example "ethereum"
   */
  id: string;
}

/** decimal place for currency price value  */
export enum PrecisionEnum1 {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

/** decimal place for currency price value  */
export enum SimpleTokenPriceParams1PrecisionEnum {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

export interface CoinsListParams {
  /** include platform and token's contract addresses, default: false */
  include_platform?: boolean;
}

export interface CoinsMarketsParams {
  /**
   * target currency of coins and market data <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   * @example "usd"
   */
  vs_currency: string;
  /** coins' ids, comma-separated if querying more than 1 coin.  <br> *refers to [`/coins/list`](/reference/coins-list). */
  ids?: string;
  /**
   * filter based on coins' category <br> *refers to [`/coins/categories/list`](/reference/coins-categories-list).
   * @example "layer-1"
   */
  category?: string;
  /** sort result by field, default: market_cap_desc */
  order?: OrderEnum;
  /** total results per page, default: 100 <br> Valid values: 1...250 */
  per_page?: number;
  /** page through results, default: 1 */
  page?: number;
  /** include sparkline 7 days data, default: false */
  sparkline?: boolean;
  /** include price change percentage timeframe, comma-separated if query more than 1 price change percentage timeframe <br> Valid values: 1h, 24h, 7d, 14d, 30d, 200d, 1y */
  price_change_percentage?: string;
  /** language background, default: en */
  locale?: LocaleEnum;
  /** decimal place for currency price value */
  precision?: PrecisionEnum2;
}

/** sort result by field, default: market_cap_desc */
export enum OrderEnum {
  MarketCapAsc = "market_cap_asc",
  MarketCapDesc = "market_cap_desc",
  VolumeAsc = "volume_asc",
  VolumeDesc = "volume_desc",
  IdAsc = "id_asc",
  IdDesc = "id_desc",
}

/** language background, default: en */
export enum LocaleEnum {
  Ar = "ar",
  Bg = "bg",
  Cs = "cs",
  Da = "da",
  De = "de",
  El = "el",
  En = "en",
  Es = "es",
  Fi = "fi",
  Fr = "fr",
  He = "he",
  Hi = "hi",
  Hr = "hr",
  Hu = "hu",
  Id = "id",
  It = "it",
  Ja = "ja",
  Ko = "ko",
  Lt = "lt",
  Nl = "nl",
  No = "no",
  Pl = "pl",
  Pt = "pt",
  Ro = "ro",
  Ru = "ru",
  Sk = "sk",
  Sl = "sl",
  Sv = "sv",
  Th = "th",
  Tr = "tr",
  Uk = "uk",
  Vi = "vi",
  Zh = "zh",
  ZhTw = "zh-tw",
}

/** decimal place for currency price value */
export enum PrecisionEnum2 {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

/** sort result by field, default: market_cap_desc */
export enum CoinsMarketsParams1OrderEnum {
  MarketCapAsc = "market_cap_asc",
  MarketCapDesc = "market_cap_desc",
  VolumeAsc = "volume_asc",
  VolumeDesc = "volume_desc",
  IdAsc = "id_asc",
  IdDesc = "id_desc",
}

/** language background, default: en */
export enum CoinsMarketsParams1LocaleEnum {
  Ar = "ar",
  Bg = "bg",
  Cs = "cs",
  Da = "da",
  De = "de",
  El = "el",
  En = "en",
  Es = "es",
  Fi = "fi",
  Fr = "fr",
  He = "he",
  Hi = "hi",
  Hr = "hr",
  Hu = "hu",
  Id = "id",
  It = "it",
  Ja = "ja",
  Ko = "ko",
  Lt = "lt",
  Nl = "nl",
  No = "no",
  Pl = "pl",
  Pt = "pt",
  Ro = "ro",
  Ru = "ru",
  Sk = "sk",
  Sl = "sl",
  Sv = "sv",
  Th = "th",
  Tr = "tr",
  Uk = "uk",
  Vi = "vi",
  Zh = "zh",
  ZhTw = "zh-tw",
}

/** decimal place for currency price value */
export enum CoinsMarketsParams1PrecisionEnum {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

export interface CoinsIdParams {
  /** include all the localized languages in the response, default: true */
  localization?: boolean;
  /** include tickers data, default: true */
  tickers?: boolean;
  /** include market data, default: true */
  market_data?: boolean;
  /** include community data, default: true */
  community_data?: boolean;
  /** include developer data, default: true */
  developer_data?: boolean;
  /** include sparkline 7 days data, default: false */
  sparkline?: boolean;
  /**
   * coin id <br> *refers to [`/coins/list`](/reference/coins-list).
   * @example "bitcoin"
   */
  id: string;
}

export interface CoinsIdTickersParams {
  /**
   * exchange id <br> *refers to [`/exchanges/list`](/reference/exchanges-list).
   * @example "binance"
   */
  exchange_ids?: string;
  /** include exchange logo, default: false */
  include_exchange_logo?: boolean;
  /** page through results */
  page?: number;
  /** use this to sort the order of responses, default: trust_score_desc */
  order?: OrderEnum1;
  /** include 2% orderbook depth, ie. `cost_to_move_up_usd` and `cost_to_move_down_usd` <br> default: false */
  depth?: boolean;
  /**
   * coin id <br> *refers to [`/coins/list`](/reference/coins-list).
   * @example "bitcoin"
   */
  id: string;
}

/** use this to sort the order of responses, default: trust_score_desc */
export enum OrderEnum1 {
  TrustScoreDesc = "trust_score_desc",
  TrustScoreAsc = "trust_score_asc",
  VolumeDesc = "volume_desc",
  VolumeAsc = "volume_asc",
}

/** use this to sort the order of responses, default: trust_score_desc */
export enum CoinsIdTickersParams1OrderEnum {
  TrustScoreDesc = "trust_score_desc",
  TrustScoreAsc = "trust_score_asc",
  VolumeDesc = "volume_desc",
  VolumeAsc = "volume_asc",
}

export interface CoinsIdHistoryParams {
  /**
   * the date of data snapshot <br> Format: `dd-mm-yyyy`
   * @example "30-12-2023"
   */
  date: string;
  /** include all the localized languages in response, default: true */
  localization?: boolean;
  /**
   * coin id <br> *refers to [`/coins/list`](/reference/coins-list).
   * @example "bitcoin"
   */
  id: string;
}

export interface CoinsIdMarketChartParams {
  /**
   * target currency of market data <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   * @example "usd"
   */
  vs_currency: string;
  /** data up to number of days ago <br> you may use any integer for number of days */
  days: string;
  /** data interval, leave empty for auto granularity Possible value: daily */
  interval?: IntervalEnum;
  /** decimal place for currency price value */
  precision?: PrecisionEnum3;
  /**
   * coin id <br> *refers to [`/coins/list`](/reference/coins-list).
   * @example "bitcoin"
   */
  id: string;
}

/** data interval, leave empty for auto granularity Possible value: daily */
export enum IntervalEnum {
  Daily = "daily",
}

/** decimal place for currency price value */
export enum PrecisionEnum3 {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

/** data interval, leave empty for auto granularity Possible value: daily */
export enum CoinsIdMarketChartParams1IntervalEnum {
  Daily = "daily",
}

/** decimal place for currency price value */
export enum CoinsIdMarketChartParams1PrecisionEnum {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

export interface CoinsIdMarketChartRangeParams {
  /**
   * target currency of market data <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   * @example "usd"
   */
  vs_currency: string;
  /**
   * starting date in UNIX timestamp
   * @example "1711929600"
   */
  from: number;
  /**
   * ending date in UNIX timestamp
   * @example "1712275200"
   */
  to: number;
  /** decimal place for currency price value */
  precision?: PrecisionEnum4;
  /**
   * coin id <br> *refers to [`/coins/list`](/reference/coins-list).
   * @example "bitcoin"
   */
  id: string;
}

/** decimal place for currency price value */
export enum PrecisionEnum4 {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

/** decimal place for currency price value */
export enum CoinsIdMarketChartRangeParams1PrecisionEnum {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

export interface CoinsIdOhlcParams {
  /**
   * target currency of price data <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   * @example "usd"
   */
  vs_currency: string;
  /** data up to number of days ago  */
  days: DaysEnum;
  /** decimal place for currency price value */
  precision?: PrecisionEnum5;
  /**
   * coin id <br> *refers to [`/coins/list`](/reference/coins-list).
   * @example "bitcoin"
   */
  id: string;
}

/** data up to number of days ago  */
export enum DaysEnum {
  Value1 = "1",
  Value7 = "7",
  Value14 = "14",
  Value30 = "30",
  Value90 = "90",
  Value180 = "180",
  Value365 = "365",
}

/** decimal place for currency price value */
export enum PrecisionEnum5 {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

/** data up to number of days ago  */
export enum CoinsIdOhlcParams1DaysEnum {
  Value1 = "1",
  Value7 = "7",
  Value14 = "14",
  Value30 = "30",
  Value90 = "90",
  Value180 = "180",
  Value365 = "365",
}

/** decimal place for currency price value */
export enum CoinsIdOhlcParams1PrecisionEnum {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

export interface ContractAddressMarketChartParams {
  /**
   * target currency of market data <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   * @example "usd"
   */
  vs_currency: string;
  /** data up to number of days ago <br> you may use any integer for number of days */
  days: string;
  /** data interval, leave empty for auto granularity Possible value: daily */
  interval?: IntervalEnum1;
  /** decimal place for currency price value */
  precision?: PrecisionEnum6;
  /**
   * asset platform id <br> *refers to [`/asset_platforms`](/reference/asset-platforms-list).
   * @example "ethereum"
   */
  id: string;
  /**
   * the contract address of token
   * @example "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
   */
  contractAddress: string;
}

/** data interval, leave empty for auto granularity Possible value: daily */
export enum IntervalEnum1 {
  Daily = "daily",
}

/** decimal place for currency price value */
export enum PrecisionEnum6 {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

/** data interval, leave empty for auto granularity Possible value: daily */
export enum ContractAddressMarketChartParams1IntervalEnum {
  Daily = "daily",
}

/** decimal place for currency price value */
export enum ContractAddressMarketChartParams1PrecisionEnum {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

export interface ContractAddressMarketChartRangeParams {
  /**
   * target currency of market data <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   * @example "usd"
   */
  vs_currency: string;
  /**
   * starting date in UNIX timestamp
   * @example "1711929600"
   */
  from: number;
  /**
   * ending date in UNIX timestamp
   * @example "1712275200"
   */
  to: number;
  /** decimal place for currency price value */
  precision?: PrecisionEnum7;
  /**
   * asset platform id <br> *refers to [`/asset_platforms`](/reference/asset-platforms-list)
   * @example "ethereum"
   */
  id: string;
  /**
   * the contract address of token
   * @example "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
   */
  contractAddress: string;
}

/** decimal place for currency price value */
export enum PrecisionEnum7 {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

/** decimal place for currency price value */
export enum ContractAddressMarketChartRangeParams1PrecisionEnum {
  Full = "full",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
  Value18 = "18",
}

export interface AssetPlatformsListParams {
  /** apply relevant filters to results */
  filter?: FilterEnum;
}

/** apply relevant filters to results */
export enum FilterEnum {
  Nft = "nft",
}

/** apply relevant filters to results */
export enum AssetPlatformsListParams1FilterEnum {
  Nft = "nft",
}

export interface CoinsCategoriesParams {
  /** sort results by field, default: market_cap_desc */
  order?: OrderEnum2;
}

/** sort results by field, default: market_cap_desc */
export enum OrderEnum2 {
  MarketCapDesc = "market_cap_desc",
  MarketCapAsc = "market_cap_asc",
  NameDesc = "name_desc",
  NameAsc = "name_asc",
  MarketCapChange24HDesc = "market_cap_change_24h_desc",
  MarketCapChange24HAsc = "market_cap_change_24h_asc",
}

/** sort results by field, default: market_cap_desc */
export enum CoinsCategoriesParams1OrderEnum {
  MarketCapDesc = "market_cap_desc",
  MarketCapAsc = "market_cap_asc",
  NameDesc = "name_desc",
  NameAsc = "name_asc",
  MarketCapChange24HDesc = "market_cap_change_24h_desc",
  MarketCapChange24HAsc = "market_cap_change_24h_asc",
}

export interface ExchangesParams {
  /** total results per page, default: 100 <br> Valid values: 1...250 */
  per_page?: number;
  /** page through results, default: 1 */
  page?: number;
}

export interface ExchangesIdTickersParams {
  /** filter tickers by coin_ids, comma-separated if querying more than 1 coin <br> *refers to [`/coins/list`](/reference/coins-list). */
  coin_ids?: string;
  /** include exchange logo, default: false */
  include_exchange_logo?: boolean;
  /** page through results */
  page?: number;
  /** include 2% orderbook depth (Example: cost_to_move_up_usd & cost_to_move_down_usd),default: false */
  depth?: boolean;
  /** use this to sort the order of responses, default: trust_score_desc */
  order?: OrderEnum3;
  /**
   * exchange id <br> *refers to [`/exchanges/list`](/reference/exchanges-list).
   * @example "binance"
   */
  id: string;
}

/** use this to sort the order of responses, default: trust_score_desc */
export enum OrderEnum3 {
  TrustScoreDesc = "trust_score_desc",
  TrustScoreAsc = "trust_score_asc",
  VolumeDesc = "volume_desc",
  VolumeAsc = "volume_asc",
}

/** use this to sort the order of responses, default: trust_score_desc */
export enum ExchangesIdTickersParams1OrderEnum {
  TrustScoreDesc = "trust_score_desc",
  TrustScoreAsc = "trust_score_asc",
  VolumeDesc = "volume_desc",
  VolumeAsc = "volume_asc",
}

export interface ExchangesIdVolumeChartParams {
  /** data up to number of days ago */
  days: DaysEnum1;
  /** exchange id or derivatives exchange id <br> *refers to [`/exchanges/list`](/reference/exchanges-list) or [`/derivatives/exchanges/list`](/reference/derivatives-exchanges-list). */
  id: string;
}

/** data up to number of days ago */
export enum DaysEnum1 {
  Value1 = "1",
  Value7 = "7",
  Value14 = "14",
  Value30 = "30",
  Value90 = "90",
  Value180 = "180",
  Value365 = "365",
}

/** data up to number of days ago */
export enum ExchangesIdVolumeChartParams1DaysEnum {
  Value1 = "1",
  Value7 = "7",
  Value14 = "14",
  Value30 = "30",
  Value90 = "90",
  Value180 = "180",
  Value365 = "365",
}

export interface DerivativesExchangesParams {
  /** use this to sort the order of responses, default: open_interest_btc_desc */
  order?: OrderEnum4;
  /** total results per page */
  per_page?: number;
  /** page through results, default: 1 */
  page?: number;
}

/** use this to sort the order of responses, default: open_interest_btc_desc */
export enum OrderEnum4 {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  OpenInterestBtcAsc = "open_interest_btc_asc",
  OpenInterestBtcDesc = "open_interest_btc_desc",
  TradeVolume24HBtcAsc = "trade_volume_24h_btc_asc",
  TradeVolume24HBtcDesc = "trade_volume_24h_btc_desc",
}

/** use this to sort the order of responses, default: open_interest_btc_desc */
export enum DerivativesExchangesParams1OrderEnum {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  OpenInterestBtcAsc = "open_interest_btc_asc",
  OpenInterestBtcDesc = "open_interest_btc_desc",
  TradeVolume24HBtcAsc = "trade_volume_24h_btc_asc",
  TradeVolume24HBtcDesc = "trade_volume_24h_btc_desc",
}

export interface DerivativesExchangesIdParams {
  /** include tickers data */
  include_tickers?: IncludeTickersEnum;
  /**
   * derivative exchange id <br> *refers to [`/derivatives/exchanges/list`](/reference/derivatives-exchanges-list).
   * @example "binance_futures"
   */
  id: string;
}

/** include tickers data */
export enum IncludeTickersEnum {
  All = "all",
  Unexpired = "unexpired",
}

/** include tickers data */
export enum DerivativesExchangesIdParams1IncludeTickersEnum {
  All = "all",
  Unexpired = "unexpired",
}

export interface NftsListParams {
  /** use this to sort the order of responses */
  order?: OrderEnum5;
  /** total results per page <br> Valid values: 1...250 */
  per_page?: number;
  /** page through results */
  page?: number;
}

/** use this to sort the order of responses */
export enum OrderEnum5 {
  H24VolumeUsdAsc = "h24_volume_usd_asc",
  H24VolumeUsdDesc = "h24_volume_usd_desc",
  H24VolumeNativeAsc = "h24_volume_native_asc",
  H24VolumeNativeDesc = "h24_volume_native_desc",
  FloorPriceNativeAsc = "floor_price_native_asc",
  FloorPriceNativeDesc = "floor_price_native_desc",
  MarketCapNativeAsc = "market_cap_native_asc",
  MarketCapNativeDesc = "market_cap_native_desc",
  MarketCapUsdAsc = "market_cap_usd_asc",
  MarketCapUsdDesc = "market_cap_usd_desc",
}

/** use this to sort the order of responses */
export enum NftsListParams1OrderEnum {
  H24VolumeUsdAsc = "h24_volume_usd_asc",
  H24VolumeUsdDesc = "h24_volume_usd_desc",
  H24VolumeNativeAsc = "h24_volume_native_asc",
  H24VolumeNativeDesc = "h24_volume_native_desc",
  FloorPriceNativeAsc = "floor_price_native_asc",
  FloorPriceNativeDesc = "floor_price_native_desc",
  MarketCapNativeAsc = "market_cap_native_asc",
  MarketCapNativeDesc = "market_cap_native_desc",
  MarketCapUsdAsc = "market_cap_usd_asc",
  MarketCapUsdDesc = "market_cap_usd_desc",
}

export interface SearchDataParams {
  /** search query */
  query: string;
}

/** coin id */
export enum CompaniesPublicTreasuryParamsCoinIdEnum {
  Bitcoin = "bitcoin",
  Ethereum = "ethereum",
}

export enum CompaniesPublicTreasuryParamsEnum {
  Bitcoin = "bitcoin",
  Ethereum = "ethereum",
}

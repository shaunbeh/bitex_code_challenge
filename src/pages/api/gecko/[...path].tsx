import httpProxy from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';

const target = process.env.NEXT_PUBLIC_BASE_API_URL;
const geckoSecret = process.env.GECKO_SECRET;
const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

async function ProxyRoute(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    if (req.url && geckoSecret) {
      req.headers.accept = 'application/json';
      req.headers['x-cg-demo-api-key'] = geckoSecret;
      const newUrlArr = req.url.split('?');
      req.url =
        newUrlArr[0].replace(/\/gecko/, '') +
        (newUrlArr[1] ? `?${newUrlArr[1]}` : '');
      proxy.once('proxyRes', resolve).on('error', reject).web(req, res, {
        target,
        autoRewrite: false,
        changeOrigin: true,
      });
    } else {
      res.status(401).end();
    }
  });
}

export default ProxyRoute;

# Bitex Code Challenge

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone git@github.com:shaunbeh/bitex_code_challenge.git
   cd bitex_code_challenge
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   - Copy `.env.example` to either `.env.local` or `.env`.
   - In the newly created file, set your CoinGecko API secret key:
     ```
     GECKO_SECRET=your-secret-key-here
     ```

4. **Run in Development Mode:**
   ```bash
   npm run dev
   ```

   This will start the development server at [http://localhost:3000](http://localhost:3000).

5. **Build for Production:**
   ```bash
   npm run build
   ```

6. **Run in Production Mode:**
   ```bash
   npm start
   ```

## Demo

Check out the live demo of this project: [Bitex Code Challenge Demo](https://bitex-code-challenge-ruddy.vercel.app/)
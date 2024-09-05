import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' className='min-w-[375px]'>
      <Head />
      <body dir='rtl' className='relative h-full font-sans antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import type { AppProps } from 'next/app';
import '@neato/guider/style.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

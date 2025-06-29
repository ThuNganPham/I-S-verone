import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@/components/theme-provider'
import '@/lib/i18n'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>v0 App</title>
        <meta name="description" content="Created with v0" />
        <meta name="generator" content="v0.dev" />
        <html lang="en" />
      </Head>

      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

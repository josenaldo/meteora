import { MeteoraThemeProvider, Header, Footer } from '@/features/layout'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'
import styles from './layout.module.css'

export const metadata = {
  title: 'Meteora',
  description: 'Peças versáteis e atemporais para o seu dia a dia.',
}

const mainFont = Inter({
  subsets: ['latin'],
})

export default function RootLayout({ children, banner, categories }) {
  return (
    <html lang="en">
      <MeteoraThemeProvider>
        <body className={mainFont.className} id="__next">
          <Header />
          <main className={styles.main}>
            {banner}
            {categories}
            {children}
          </main>
          <Footer />
        </body>
      </MeteoraThemeProvider>
    </html>
  )
}

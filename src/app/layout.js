import { BaseLayout } from '@/features/layout'

export const metadata = {
  title: 'Meteora',
  description: 'Peças versáteis e atemporais para o seu dia a dia.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BaseLayout>{children}</BaseLayout>
    </html>
  )
}

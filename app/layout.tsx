import './globals.css'

export const metadata = {
  title: 'Rizvanda Mau Mau Ajaa',
  description: 'Layanan spesial, santai, dan humanis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
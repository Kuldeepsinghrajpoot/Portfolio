import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'portfolio site ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>

    </html>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-gb">
      <head>
        <link rel="stylesheet" href="/ebay/styles.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}

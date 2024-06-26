import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en-gb">
      <head>
        <link rel="stylesheet" href="/ebay/styles.css" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

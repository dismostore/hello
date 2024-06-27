import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en-gb">
      <head>
        <link rel="stylesheet" href="/ebay/styles.css" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="min-h-screen font-quicksand subpixel-antialiased bg-white dark:bg-gray-900">
        <NavBar />
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">
            <div>{children}</div>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

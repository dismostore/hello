import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en-gb" className="giv ujq">
      <head>
        <link rel="stylesheet" href="/ebay/styles.css" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="qos ddx ijc">
        <NavBar />
        <div className="knq yez qos goz">
          <main className="tgq">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

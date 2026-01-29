import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/generalComps/Header";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/generalComps/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "SEO Report Generator",
  description: "Generate comprehensive SEO reports with ease using our advanced SEO Report Generator tool.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Header />
        <NextTopLoader
          color="#430D4B"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}

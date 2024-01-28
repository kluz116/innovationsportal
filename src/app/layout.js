//import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Innovation Portal",
  description: "This is an Innovation Portal for Financetrust Bank",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

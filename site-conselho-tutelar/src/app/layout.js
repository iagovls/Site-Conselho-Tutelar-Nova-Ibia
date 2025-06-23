import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Conselho Tutelar de Nova Ibiá",
  description: "O Conselho Tutelar é o órgão colegiado encarrregado pela sociedade de zelar pelos direitos das crianças e adolescentes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-3 px-10`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

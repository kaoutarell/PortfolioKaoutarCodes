// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kaoutar's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Include your external stylesheet here */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <script
          src="https://kit.fontawesome.com/b78d1e4150.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}

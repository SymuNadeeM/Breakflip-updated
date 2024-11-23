import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import NavSmall from "@/components/shared/Navbar/NavSmall";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breakflip",
  description: "Breakflip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed z-50 bottom-2 right-2 bg-primary text-on-primary py-2 px-4 rounded-lg">
          <span className="inline sm:hidden">xs</span>
          <span className="hidden sm:inline md:hidden">sm</span>
          <span className="hidden md:inline lg:hidden">md</span>
          <span className="hidden lg:inline xl:hidden">lg</span>
          <span className="hidden xl:inline">xl</span>
        </div>
        <div>
          <Navbar />
          <NavSmall />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}

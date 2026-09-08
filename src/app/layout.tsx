import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "NACOS Nile — Nigeria Association of Computing Students",
    template: "%s | NACOS Nile",
  },
  description:
    "NACOS Nile is the community for computing students at Nile University of Nigeria. Explore disciplines, meet the executive council, and join the community.",
  openGraph: {
    title: "NACOS Nile — Nigeria Association of Computing Students",
    description:
      "The community for computing students at Nile University of Nigeria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("nacos-theme");var d=t&&t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.add(d?"dark":"light")}catch(e){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}

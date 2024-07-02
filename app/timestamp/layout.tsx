import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "../providers";
import { siteConfig } from "@/config/site";
import { fontSen } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";
import { dir } from 'i18next'

export const metadata: Metadata = {
  metadataBase: new URL('https://discordts.com'),
  title: {
    default: siteConfig.name,
    template: `%s - DiscordTS.com`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: './',
}
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
  params: {
    lang
  }
}: {
  children: React.ReactNode;
  params: {
    lang : string[]
  }
}) {
  let lng
  if (!lang || lang.length === 0) {
    lng = 'en'
  } else {
    lng = lang[0]
  }
  return (
    <html suppressHydrationWarning lang={lng} dir={dir(lng)}>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background antialiased",
          fontSen.className,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col bg-[#424347] min-h-screen" >
          {/* h-screen */}
            <Navbar />
            <main className="md:container md:mx-auto w-full flex-grow">
              {children}
            </main>
          </div>
        </Providers>
        <Analytics/>
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-F5R2TBL93D5`} />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F5R2TBL93D',{
          page_path: window.location.pathname});
        `}
      </Script>
      </body>
    </html>
  );
}

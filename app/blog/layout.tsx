import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "../providers";
import { siteConfig } from "@/config/site";
import { fontSen } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react"
import { dir } from 'i18next'
import GoogleAnalytics from "@/components/analytic/GoogleAnalytic";
import UmamiAnalytic from "@/components/analytic/UmamiAnalytic";


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
      <head>
      <UmamiAnalytic/>
      </head>
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
        <GoogleAnalytics/>
      </body>
    </html>
  );
}

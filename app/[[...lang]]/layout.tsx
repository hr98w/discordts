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
import { getDictionary, localeNames } from "@/dictionaries/dictionaries";
import { Link } from "@nextui-org/link";

// export const metadata: Metadata = {
//   metadataBase: new URL('https://discordts.com'),

//   title: {
//     default: "Discord Timestamp Generator - DiscordTS.com",
//     template: `%s - DiscordTS.com`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon.svg",
//   },
//   alternates: {
//     canonical: './',
//   }
// };

// or Dynamic metadata
export async function generateMetadata({
  params: {
    lang
  }
}: {
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
  const dict = await getDictionary(lng)
  return {
    metadataBase: new URL('https://discordts.com'),
  
    title: {
      default: dict["title"] + " - DiscordTS.com",
      template: `%s - DiscordTS.com`,
    },
    description: dict["description"],
    icons: {
      icon: "/favicon.svg",
    },
    alternates: {
      canonical: './',
    }
  }
}

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
      <script defer src="https://cloud.umami.is/script.js" data-website-id="ce225415-f07f-4d67-8fa6-1e9c8f902fda"></script>
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

              <footer className="flex w-full items-center justify-center py-3">
              <div className="flex flex-row flex-wrap gap-1">
              {Object.keys(localeNames).map((key: string) => {
                const name = localeNames[key];
                return (
                  <Link
                  className="flex-row w-24 items-center gap-2 text-current"
                  key = {key}
                  href={key}
                  title={key}
                >
                  <p className="text-primary">{name}</p>
                </Link>
                );
            })}
            </div>
              
            </footer>
            </main>
            
          </div>
        </Providers>
        <Analytics/>
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-F5R2TBL93D`} />
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

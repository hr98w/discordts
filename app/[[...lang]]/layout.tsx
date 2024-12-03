import "@/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";
import { Providers } from "../providers";
import { fontSen } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react"
import { dir } from 'i18next'
import { getDictionary, localeNames } from "@/dictionaries/dictionaries";
import { Link } from "@nextui-org/link";
import GoogleAnalytics from "@/components/analytic/GoogleAnalytic";
import UmamiAnalytic from "@/components/analytic/UmamiAnalytic";

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
    lang: string[]
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
    lang: string[]
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
        <UmamiAnalytic />
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


              <footer className="flex flex-col w-full items-center justify-center py-3">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                  {Object.keys(localeNames).map((key: string) => {
                    const name = localeNames[key];
                    return (
                      <Link
                        className="flex items-center justify-center w-full h-10 text-sm text-gray-600 bg-gray-100 bg-opacity-70 hover:bg-opacity-100 rounded"
                        key={key}
                        href={key}
                        title={key}
                      >
                        <p className="text-primary">{name}</p>
                      </Link>
                    );
                  })}
                </div>
                <div className="w-full text-center mt-4">
                  <a href="https://digitalmarketings.io/" title="Digital Marketing Tools" className="hidden-link text-gray-400">Digital Marketing Tools</a>
                </div>
              </footer>

            </main>

          </div>
        </Providers>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}

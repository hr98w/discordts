import { Fira_Code as FontMono, Inter as FontSans, Poppins, Sen } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontPoppins = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const fontSen = Sen({
  weight: ['400','500','600','700','800'],
  subsets: ["latin"],
  variable: "--font-sen",
});
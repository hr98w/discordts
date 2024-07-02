export const defaultLocale = 'en'
export const locales = ["", "en", "en-UK", "zh-CN", "zh-TW", 'ja', "ar", "es", "ru", "ko", "de", "fr"];
export const localeNames: any = {
  en: "🇺🇸 English",
  "en-UK": "🇬🇧 English",
  "de": "🇩🇪 Deutsch",
  es: "🇪🇸 Español",
  "fr": "🇫🇷 Français",
  ar: "🇸🇦 العربية",
  ru: "🇷🇺 Русский",
  "zh-CN": "🇨🇳 中文",
  "zh-TW": "繁體中文",
  ja: "🇯🇵 日本語",
  ko: "🇰🇷 한국어"
  
};

const dictionaries: any = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  "en-UK": () => import("@/dictionaries/en.json").then((module) => module.default),
  "zh-CN": () => import("@/dictionaries/zh-CN.json").then((module) => module.default),
  "zh-TW": () => import("@/dictionaries/zh-TW.json").then((module) => module.default),
  ja: () => import("@/dictionaries/ja.json").then((module) => module.default),
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
  ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
  ru: () => import("@/dictionaries/ru.json").then((module) => module.default),
  ko: () => import("@/dictionaries/ko.json").then((module) => module.default),
  de: () => import("@/dictionaries/de.json").then((module) => module.default),
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default),


};
 
export const getDictionary = async (locale: string) => {
  // if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
  //   locale = "zh";
  // }

  if (!Object.keys(dictionaries).includes(locale)) {
    locale = defaultLocale;
  }

  return dictionaries[locale]();
};
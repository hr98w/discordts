export const defaultLocale = 'en'
export const locales = ["", "en", "en-GB", "zh-CN", "zh-TW", 'ja', "ar", "es", "ru", "ko", "de", "fr"];
export const localeNames: any = {
  en: "🇺🇸 English",
  "en-GB": "🇬🇧 English",
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

const todo_1 = ["id", "ms", "ca", "cs", "da", "hr", "it", "lv", "lt", "hu", "nl", "pl", "pt", "pt-BR", "ro", "sr", "sv", "vi", "tr", "el", "bg", "uk", "he", "ur", "fa", "hi", "th" ]
const todo = {
  id: "🇮🇩 Bahasa Indonesia",
  ms: "🇲🇾 Bahasa Melayu",
  ca: "🇪🇸 Català",
  cs: "🇨🇿 Čeština",
  da: "🇩🇰 Dansk",
  hr: "🇭🇷 Hrvatski",
  it: "🇮🇹 Italiano",
  lv: "🇱🇻 Latviski",
  lt: "🇱🇹 Lietuviškai",
  hu: "🇭🇺 Magyar",
  nl: "🇳🇱 Nederlands",
  pl: "🇵🇱 Polski",
  pt: "🇵🇹 Português",
  "pt-BR": "🇧🇷 Português do Brasil",
  ro: "🇷🇴 Română",
  sr: "🇷🇸 Srpski",
  sv: "🇸🇪 Svenska",
  vi: "🇻🇳 Tiếng Việt",
  tr: "🇹🇷 Türkçe",
  el: "🇬🇷 Ελληνικά",
  bg: "🇧🇬 Български",
  uk: "🇺🇦 Українська",
  he: "🇮🇱 עִברִית",
  ur: "🇵🇰 اردو",
  fa: "🇮🇷 فارسی",
  hi: "🇮🇳 हिंदी",
  th: "🇹🇭 ไทย",
}


const dictionaries: any = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  "en-GB": () => import("@/dictionaries/en-GB.json").then((module) => module.default),
  "zh-CN": () => import("@/dictionaries/zh-CN.json").then((module) => module.default),
  "zh-TW": () => import("@/dictionaries/zh-TW.json").then((module) => module.default),
  ja: () => import("@/dictionaries/ja.json").then((module) => module.default),
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
  ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
  ru: () => import("@/dictionaries/ru.json").then((module) => module.default),
  ko: () => import("@/dictionaries/ko.json").then((module) => module.default),
  de: () => import("@/dictionaries/de.json").then((module) => module.default),
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default),
  id: () => import("@/dictionaries/id.json").then((module) => module.default),
  ms: () => import("@/dictionaries/ms.json").then((module) => module.default),
  ca: () => import("@/dictionaries/ca.json").then((module) => module.default),
  cs: () => import("@/dictionaries/cs.json").then((module) => module.default),
  da: () => import("@/dictionaries/da.json").then((module) => module.default),
  hr: () => import("@/dictionaries/hr.json").then((module) => module.default),
  it: () => import("@/dictionaries/it.json").then((module) => module.default),
  lv: () => import("@/dictionaries/lv.json").then((module) => module.default),
  lt: () => import("@/dictionaries/lt.json").then((module) => module.default),
  hu: () => import("@/dictionaries/hu.json").then((module) => module.default),
  nl: () => import("@/dictionaries/nl.json").then((module) => module.default),
  pl: () => import("@/dictionaries/pl.json").then((module) => module.default),
  pt: () => import("@/dictionaries/pt.json").then((module) => module.default),
  "pt-BR": () => import("@/dictionaries/pt-BR.json").then((module) => module.default),
  ro: () => import("@/dictionaries/ro.json").then((module) => module.default),
  sr: () => import("@/dictionaries/sr.json").then((module) => module.default),
  sv: () => import("@/dictionaries/sv.json").then((module) => module.default),
  vi: () => import("@/dictionaries/vi.json").then((module) => module.default),
  tr: () => import("@/dictionaries/tr.json").then((module) => module.default),
  el: () => import("@/dictionaries/el.json").then((module) => module.default),
  bg: () => import("@/dictionaries/bg.json").then((module) => module.default),
  uk: () => import("@/dictionaries/uk.json").then((module) => module.default),
  he: () => import("@/dictionaries/he.json").then((module) => module.default),
  ur: () => import("@/dictionaries/ur.json").then((module) => module.default),
  fa: () => import("@/dictionaries/fa.json").then((module) => module.default),
  hi: () => import("@/dictionaries/hi.json").then((module) => module.default),
  th: () => import("@/dictionaries/th.json").then((module) => module.default),
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
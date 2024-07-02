import { MyDatePicker } from "@/components/datapicker"
import { Faq } from "@/components/faq";
import { getDictionary, locales } from '@/dictionaries/dictionaries'

export async function generateStaticParams() {
  return locales.map(item => ({ lang: [item] }));
}

export default async function Home(
  {
    params: { 
      lang 
    } 
  } : 
  {
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

  return (
    <section className="py-4 flex flex-col items-center justify-center w-full gap-4">

      <div className="flex md:w-3/4 bg-[#2D2F33] rounded-2xl flex-col justify-center drop-shadow-xl">
        <h1 className="text-center px-8 text-[#EDEEF0] font-bold text-3xl p-2 py-8">{dict["title"]}</h1>
        <MyDatePicker lang={lang?lang[0]:'en'} dict={dict}/>
      </div>

      <div className="flex md:w-3/4 bg-[#2D2F33] rounded-2xl drop-shadow-xl">
        <Faq dict={dict}/>
      </div>

    </section>
  );
}

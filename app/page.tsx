import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { title, subtitle } from "@/components/primitives";
import { MyDatePicker } from "@/components/datapicker"
import { Faq } from "@/components/faq";


export default function Home() {
  return (
    <section className="py-4 flex flex-col items-center justify-center w-full gap-4">
      
      {/* <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>
          websites regardless of your design experience.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </h2>
      </div> */}

      {/* <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div> */}

      <div className="flex md:w-3/4 bg-[#2D2F33] rounded-2xl flex-col justify-center drop-shadow-xl">
        <h1 className="text-center px-8 text-[#EDEEF0] font-bold text-3xl p-2 py-8">Discord Timestamp Generator</h1>
        <MyDatePicker/>
      </div>


      <div className="flex md:w-3/4 bg-[#2D2F33] rounded-2xl drop-shadow-xl">
        <Faq/>
      </div>
      


    </section>
  );
}

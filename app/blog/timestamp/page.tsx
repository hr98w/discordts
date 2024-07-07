import {Link} from "@nextui-org/link";
import { Metadata } from "next";
import { ExampleTable } from "./exampletable";

export const metadata: Metadata = {
  title: "Discord Timestamp Documentation",
  description: "A timestamp is a sequence of characters or encoded information identifying times.",
};

export default function AboutPage() {
  return (
    <section className="py-4 flex flex-col items-center justify-center w-full gap-4">
    {/* outmost */}
      <div className="flex md:w-3/4 bg-[#2D2F33] rounded-2xl drop-shadow-xl">
        {/* content block */}
        <div className="flex flex-col p-8 text-[#EDEEF0] gap-4 content-center w-full" >
          {/* overall text color */}
          <h1 className="text-2xl font-bold text-center">Discord Timestamp</h1>

          <div className="flex flex-col gap-4 px-16 text-lg">
            <div className="flex flex-col gap-1">
            <h2>Discord Timestamp Formatting</h2>
            <p className="text-[#888888]">Discord utilizes a subset of markdown for rendering message content on its clients, while also adding some custom functionality to enable things like mentioning users and channels.
            </p>

            <h2>Discord Timestamp Styles</h2>
            <p className="text-[#888888]">Timestamps are expressed in seconds and display the given timestamp in the user timezone and locale. Different format and example result are shown as follows:
            </p>
            <ExampleTable/>
            <h2>Discord Timestamp Generator</h2>
            <p className="text-[#888888]">You can use <Link href="/">DiscordTS</Link> to generator the discord timecode to embed in your message.

            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

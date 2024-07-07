import { Metadata } from "next";
import { Link } from "@nextui-org/link";

export const metadata: Metadata = {
  title: "About",
  description: "DiscordTS.com is a responsive and multilingual Discord timestamp generator.",
};

export default function AboutPage() {
  return (
    <section className="py-4 flex flex-col items-center justify-center w-full gap-4">
    {/* outmost */}
      <div className="flex md:w-3/4 bg-[#2D2F33] rounded-2xl drop-shadow-xl">
        {/* content block */}
        <div className="flex flex-col p-8 text-[#EDEEF0] gap-4 content-center w-full" >
          {/* overall text color */}
          <h1 className="text-2xl font-bold text-center">About DiscordTS.com</h1>

          <div className="flex flex-col gap-4 px-16 text-lg">
            <div className="flex flex-col gap-1">
            <h2>What is DiscordTS.com</h2>
            <p className="text-[#888888]"> <Link href="/">DiscordTS.com</Link> is a responsive and multilingual Discord timestamp generator. We offer the most convenient Discord timestamp generation service. You can select your desired date and time, choose the format you prefer, and click the corresponding button to copy the timecode to your clipboard. You can then embed it into your Discord messages.
            </p>

            <h2>What is the tech stack of DiscordTS.com?</h2>
            {/* <p className="text-[#888888]">content
            </p> */}
            <ul className="text-[#888888] list-disc indent-2 pl-4">
            <li>Built with Next.js, Next UI, and Tailwind CSS.</li>
            <li>Core JavaScript libraries include Moment.js.</li>
            <li>Website analytics are handled by Google Analytics and Umami.</li>
            <li>Translation services provided by Chat-GPT.</li>
            <li>Deployed on Vercel.</li>
            <li>Domain hosted on Cloudflare.</li>
            </ul>

            <h2>Is DiscordTS.com open sourced?</h2>
            <p className="text-[#888888]">Currently, DiscordTS.com is not open sourced, but we have plans to make it open source in the near future. We believe in the power of open source collaboration, which allows for transparency, community involvement, and continuous improvement. Opening our project to the community will enable developers to contribute enhancements, suggest new features, and ensure that DiscordTS.com evolves to meet the needs of its users. We look forward to welcoming contributions and feedback from the community.
            </p>

            {/* <h2>How to contribute to DiscordTS.com</h2>
            <p className="text-[#888888]">content
            </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

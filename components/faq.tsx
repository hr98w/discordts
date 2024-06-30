"use client";

export const Faq = () => {


  return (
    <div className="flex flex-col p-8 text-[#EDEEF0] gap-4 content-center w-full" >
      <h2 className="text-2xl font-bold text-center">FAQ About Discrod Timestamps</h2>

      <div className="flex flex-col gap-4 px-16 text-lg">

        <div className="flex flex-col gap-1">
        <h3>Q: What is DiscordTS.com?</h3>
        <p className="text-[#888888]">A: DiscordTS.com is a responsive Discord timestamp generator, also known as a Discord time converter. Our aim is to provide the most convenient timestamp generation functionality.</p>
        </div>
    
        <div className="flex flex-col gap-1">
        <h3>Q: What is Discord timestamps?</h3>
        <p className="text-[#888888]">A: Discord time stamp is a formatted string that represents a specific date and time. It can be embedded in your messages to display dates and times in a standardized format across different time zones.</p>
        </div>

        <div className="flex flex-col gap-1">
        <h3>Q: How to do timestamps on discord?</h3>
        <p className="text-[#888888]">A: You can use our Discord Timestamp Generator. Simply enter the date and time you want, and the tool will provide a formatted timestamp that you can copy and paste into your Discord messages.</p>
        </div>


        <div className="flex flex-col gap-1">
        <h3>Q: Does DiscordTS.com support different timezones?</h3>
        <p className="text-[#888888]">A: Currently, we do not support a discord timezone converter. We can only generate discord local time at the moment, but we plan to add this feature in the future.</p>
        </div>
      </div>
    </div>
  );
};

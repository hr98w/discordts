"use client";
import { Link } from "@nextui-org/link";

interface Props {
  dict: any
}

export const Faq : React.FC<Props> = ({dict}) => {


  return (
    <div className="flex flex-col p-8 text-[#EDEEF0] gap-4 content-center w-full" >
      <h2 className="text-2xl font-bold text-center">{dict["FAQ"]["title"]}</h2>

      <div className="flex flex-col gap-4 px-16 text-lg">

        <div className="flex flex-col gap-1">
        <h3>Q: {dict["FAQ"]["a"]["q"]}</h3>
        <p className="text-[#888888]">A: {dict["FAQ"]["a"]["a"]}</p>
        </div>
    
        <div className="flex flex-col gap-1">
        <h3>Q: {dict["FAQ"]["b"]["q"]}</h3>
        <p className="text-[#888888]">A: <Link href="/timestamp">{dict["FAQ"]["b"]["a1"]}</Link>  {dict["FAQ"]["b"]["a2"]}</p>
        </div>

        <div className="flex flex-col gap-1">
        <h3>Q: {dict["FAQ"]["c"]["q"]}</h3>
        <p className="text-[#888888]">A: {dict["FAQ"]["c"]["a"]}</p>
        </div>


        <div className="flex flex-col gap-1">
        <h3>Q: {dict["FAQ"]["d"]["q"]}</h3>
        <p className="text-[#888888]">A: {dict["FAQ"]["d"]["a"]}</p>
        </div>

        <div className="flex flex-col gap-1">
        <h3>Q: {dict["FAQ"]["e"]["q"]}</h3>
        <p className="text-[#888888]">A: {dict["FAQ"]["e"]["a"]}</p>
        </div>
      </div>
    </div>
  );
};

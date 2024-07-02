"use client";
import { useParams, useRouter } from "next/navigation";
import { localeNames, defaultLocale } from "@/dictionaries/dictionaries"
import { Select, SelectItem} from "@nextui-org/select";



export const LangSwitcher = () => {
    const params = useParams();
    const lang = params.lang;
  
    // const lang = (params.lang && params.lang[0]) || defaultLocale;
    let langName =
      lang && lang[0] && lang[0] !== "index" ? lang[0] : defaultLocale;
    const router = useRouter();

  
    const handleSwitchLanguage = (keys: any) => {
      const [value] = keys
      if (value === defaultLocale) {
        router.push("/");
        return;
      }
      router.push(value);
    };
  
    return (
        <div className="flex w-36 flex-wrap md:flex-nowrap gap-4">
        <Select
        // label="select language"
        aria-label="select language"
        className="max-w-xs"
        selectedKeys={[langName]}
        onSelectionChange={handleSwitchLanguage}
        >
            {Object.keys(localeNames).map((key: string) => {
                const name = localeNames[key];
                return (
                <SelectItem className="cursor-pointer" key={key} value={key} >
                    {name}
                </SelectItem>
                );
            })}
        </Select>
      </div>
    );
  };
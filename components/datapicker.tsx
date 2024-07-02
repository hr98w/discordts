"use client" 
import React from "react";
import { DatePicker} from "@nextui-org/date-picker";
import {now, getLocalTimeZone } from "@internationalized/date";
import {I18nProvider} from "@react-aria/i18n";
import {Button, ButtonGroup} from "@nextui-org/button";
import moment, {Moment} from 'moment';
import { MyCard } from "./mycard";
import { RestLogo } from "./icons"
import {Tooltip} from "@nextui-org/tooltip";
import { fontSans } from "@/config/fonts";

interface Props {
  lang: string;
  dict: any
}


interface ResultItem {
  title: string;
  result: string;
  timestamp: string;
}

export const MyDatePicker : React.FC<Props> = ( {lang, dict} ) => {

  const formatMoment = (m: Moment): ResultItem[] => {
    console.log("10086")
    console.log(lang)
    moment.locale(lang);
    console.log(lang)
    console.log("10086")

    return [
      { title: dict["shorttime"], result: m.format("LT"), timestamp: `<t:${m.unix()}:t>`},
      { title: dict["longtime"], result: m.format("LTS"), timestamp: `<t:${m.unix()}:T>`},
      { title: dict["shortdate"], result: m.format("L") , timestamp: `<t:${m.unix()}:d>`},
      { title: dict["longdate"], result: m.format("LL"), timestamp: `<t:${m.unix()}:D>`},
      { title: dict["shortdt"], result: m.format("LLL"), timestamp: `<t:${m.unix()}:f>`},
      { title: dict["longdt"], result: m.format("LLLL"), timestamp: `<t:${m.unix()}:F>`},
      { title: dict["rt"], result: m.fromNow(), timestamp: `<t:${m.unix()}:R>`},
      { title: dict["timestamp"], result: `${m.unix()}`, timestamp: `${m.unix()}`},
    ];
  };

  let [date, setDate] = React.useState(now(getLocalTimeZone()));
  let [nowDate, setNowDate] = React.useState(now(getLocalTimeZone()));
  let [list, setList] = React.useState(formatMoment(moment(date.toDate())))

  const setToCurrentTime = () => {
    setNowDate(now(getLocalTimeZone()));
    setDate(nowDate);
  };


  React.useEffect(() => {
    setList(formatMoment(moment(date.toDate())));
  }, [date]);



  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setNowDate(now(getLocalTimeZone()));
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);


  return (
    
    <div className="flex flex-col justify-center items-center gap-4">
      {/* <div>
          <p className="text-center px-8 text-[#EDEEF0] font-bold text-2xl p-2">
            Select the date and time
            </p>
      </div> */}
      <div className="flex items-center flex-row gap-4 p-2">
        
        <div className={fontSans.className}>   
        <I18nProvider locale={lang}> 
          <DatePicker
            showMonthAndYearPickers
            granularity="minute"
            value={date}
            label={dict["datetime"]}
            size="lg"
            radius="lg"
            onChange={setDate}
          />
        </I18nProvider>
        </div>
      
 
      <Tooltip color="secondary" content={dict["stct"]} closeDelay={0}>
        <Button 
        className="hover:scale-125"
        size="md"
        isIconOnly
        color="primary"
        onPress={setToCurrentTime}>
          <RestLogo />
        </Button> 
      </Tooltip>
    

      </div>

      {/* <div>
      <ButtonGroup radius="none" color="primary" variant="shadow">
      <div className="flex flex-col">
      <div>
      <Button className="w-28 h-8" onPress={()=>{setDate(date.add({ days: 1 }))}}>1 day later</Button>
      <Button className="w-28 h-8" onPress={()=>{setDate(date.add({ weeks: 1 }))}}>1 week later</Button>
      <Button className="w-28 h-8" onPress={()=>{setDate(date.add({ months: 1 }))}}>1 month later</Button>
      <Button className="w-28 h-8" onPress={()=>{setDate(date.add({ years: 1 }))}}>1 year later</Button>

      </div>
      <div>
      <Button className="w-28 h-8" onPress={()=>{setDate(date.subtract({ days: 1 }))}}>1 day ago</Button>
      <Button className="w-28 h-8" onPress={()=>{setDate(date.subtract({ weeks: 1 }))}}>1 week ago</Button>
      <Button className="w-28 h-8" onPress={()=>{setDate(date.subtract({ months: 1 }))}}>1 month ago</Button>
      <Button className="w-28 h-8" onPress={()=>{setDate(date.subtract({ years: 1 }))}}>1 year ago</Button>

      </div>
      </div>
      </ButtonGroup>
      </div> */}

      <div>
        <div>
          <h2 className="text-left px-8 pt-8 text-[#EDEEF0] font-bold text-2xl">
            {dict["text-instruction"]}
            </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
          {
            list.map(
              (item, index) => <MyCard key={index} title={item.title} result={item.result} timestamp={item.timestamp} dict={dict} />
            )
          }
          {/* <MyCard title="Current" result={moment(nowDate.toDate()).unix().toString()}  timestamp="" /> */}
        </div>
      </div>
      

    </div>
  );
}

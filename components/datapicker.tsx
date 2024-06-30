"use client" 
import React from "react";
import { DatePicker} from "@nextui-org/date-picker";
import {now, getLocalTimeZone } from "@internationalized/date";
import {I18nProvider} from "@react-aria/i18n";
import {Button} from "@nextui-org/button";
import moment, {Moment} from 'moment';
import { MyCard } from "./mycard";
import { RestLogo } from "./icons"
import {Tooltip} from "@nextui-org/tooltip";
import { fontSans } from "@/config/fonts";




interface ResultItem {
  title: string;
  result: string;
  timestamp: string;
}

export const MyDatePicker = () => {
  const formatMoment = (m: Moment): ResultItem[] => {
    return [
      { title: "Short Time", result: m.format("LT"), timestamp: `<t:${m.unix()}:t>`},
      { title: "Long Time", result: m.format("LTS"), timestamp: `<t:${m.unix()}:T>`},
      { title: "Short Date", result: m.format("L") , timestamp: `<t:${m.unix()}:d>`},
      { title: "Long Date", result: m.format("LL"), timestamp: `<t:${m.unix()}:D>`},
      { title: "Short Date/Time", result: m.format("LLL"), timestamp: `<t:${m.unix()}:f>`},
      { title: "Long Date/Time", result: m.format("LLLL"), timestamp: `<t:${m.unix()}:F>`},
      { title: "Relative Time", result: m.fromNow(), timestamp: `<t:${m.unix()}:R>`},
      { title: "Timestamp", result: `${m.unix()}`, timestamp: `${m.unix()}`},
    ];
  };

  let [date, setDate] = React.useState(now(getLocalTimeZone()));
  let [nowDate, setNowDate] = React.useState(now(getLocalTimeZone()));
  let [list, setList] = React.useState(formatMoment(moment(date.toDate())))

  const setToCurrentTime = () => {
    setDate(nowDate);
  };

  React.useEffect(() => {
    setList(formatMoment(moment(date.toDate())));
  }, [date]);



  React.useEffect(() => {
    const interval = setInterval(() => {
      setNowDate(now(getLocalTimeZone()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);



  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {/* <div>
          <p className="text-center px-8 text-[#EDEEF0] font-bold text-2xl p-2">
            Select the date and time
            </p>
      </div> */}
      <div className="flex items-center flex-row gap-4 p-2">
        {/* <I18nProvider locale="hi-IN-u-ca-indian"> */}
        <div className={fontSans.className}>    
          <DatePicker
            showMonthAndYearPickers
            granularity="minute"
            value={date}
            label="Select date and time"
            size="lg"
            radius="lg"
            onChange={setDate}
          />
        {/* </I18nProvider> */}
        </div>
 
 
      <Tooltip color="secondary" content="Set to current time" closeDelay={0}>
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

      <div>
        <div>
          <h2 className="text-left px-8 pt-8 text-[#EDEEF0] font-bold text-2xl">
            Click to copy the timestamp to embed in your discord message
            </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
          {
            list.map(
              (item, index) => <MyCard key={index} title={item.title} result={item.result} timestamp={item.timestamp} />
            )
          }
          {/* <MyCard title="Current" result={moment(nowDate.toDate()).unix().toString()}  timestamp="" /> */}
        </div>
      </div>
      

    </div>
  );
}

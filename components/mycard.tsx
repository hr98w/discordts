"user client"
import React from "react";
import {Tooltip} from "@nextui-org/tooltip";
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";



interface CardProps {
    title: string,
    result: string,
    timestamp: string,
  }

export const MyCard: React.FC<CardProps> = ({title, result, timestamp}) => {
  const [effect, setEffect] = React.useState(false);
  return (
    <div className="flex gap-8 justify-center flex-wrap">
        <Tooltip color="secondary" content="click to copy" closeDelay={0}>

          <Card 
          isBlurred
          isPressable
          isHoverable
          onPress={() => {navigator.clipboard.writeText(timestamp)}}
          className={`${
            effect && "animate-wiggle"
          } 
          w-80 h-20
          sm:w-80 sm:h-32
          bg-[#6F7BF5] text-[#EDEEF0] hover:text-[#6F7BF5] p-1 rounded-lg shadow-2xl gap-0`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
          >
            {/* <CardHeader>
            </CardHeader> */}
            <CardBody>
            <p suppressHydrationWarning className="text-xl font-bold">{result}</p>
              {/* <p suppressHydrationWarning className="bottom-0 right-0">{timestamp}</p> */}
            </CardBody>

            <CardFooter suppressHydrationWarning>
            <p suppressHydrationWarning className="hidden sm:block text-lg text-[#bdbec0]">{title}</p>
            </CardFooter>
          </Card>
        </Tooltip>
    </div>
  );
}


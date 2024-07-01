"use client";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/table";
import {Link} from "@nextui-org/link";


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
            <p className="text-[#888888]">Timestamps are expressed in seconds and display the given timestamp in the user's timezone and locale. Different format and example result are shown as follows:
            </p>
            <div className="p-4">
            <Table className="text-[#888888]" aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>STYLE</TableColumn>
              <TableColumn>EXAMPLE OUTPUT	</TableColumn>
              <TableColumn>DESCRIPTION</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>t</TableCell>
                <TableCell>16:20</TableCell>
                <TableCell>Short Time</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>T</TableCell>
                <TableCell>16:20:30	</TableCell>
                <TableCell>Long Time</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>d</TableCell>
                <TableCell>20/04/2021</TableCell>
                <TableCell>Short Date</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>D</TableCell>
                <TableCell>20 April 2021</TableCell>
                <TableCell>Long Date</TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell>f</TableCell>
                <TableCell>20 April 2021 16:20</TableCell>
                <TableCell>Short Date/Time</TableCell>
              </TableRow>
              <TableRow key="6">
                <TableCell>F</TableCell>
                <TableCell>Tuesday, 20 April 2021 16:20	</TableCell>
                <TableCell>Long Date/Time</TableCell>
              </TableRow>
              <TableRow key="7">
                <TableCell>R</TableCell>
                <TableCell>2 months ago</TableCell>
                <TableCell>Relative Time</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </div>

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

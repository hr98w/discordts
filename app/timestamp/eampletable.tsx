"use client";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/table";


export const ExampleTable = () => {
    return (
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
    )
}
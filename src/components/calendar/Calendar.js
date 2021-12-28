import "./Calendar.css";
import { DateRange } from "react-date-range";
import { useState } from "react";

export default function Calendar() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const selectionHandler = (item) => {
    setState([
      {
        startDate: item.selection.endDate,
        endDate: item.selection.endDate,
        key: "selection",
      },
    ]);
    console.log(item.selection);
  };

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => selectionHandler(item)}
      moveRangeOnFirstSelection={false}
      showPreview={false}
      showDateDisplay={false}
      ranges={state}
    />
  );
}

import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./date-range-overrides.css";
import styles from "./DateRange.module.css";


export default function DateRangeInput() {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  });

  const handleSelect = (ranges: any) => {
    setDateRange(ranges.selection);
    // Hier kannst du die Daten weiterverarbeiten
    console.log("Start:", ranges.selection.startDate);
    console.log("Ende:", ranges.selection.endDate);
  };

  return (
    <DateRangePicker
      ranges={[dateRange]}
      onChange={handleSelect}
      moveRangeOnFirstSelection={false}
      rangeColors={["#24cebd"]}
    />
  );
}

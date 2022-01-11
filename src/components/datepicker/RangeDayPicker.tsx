import DayPicker, { DateUtils } from "react-day-picker";
import "./style.css";

export type Range = {
  from: any;
  to: any;
};

export interface RangeDayPickerProp {
  range: Range | undefined;

  setRange: React.Dispatch<React.SetStateAction<Range | undefined>>;
}

export const RangeDayPicker = ({ range, setRange }: RangeDayPickerProp) => {
  const modifiers = {
    start: range?.from,
    end: range?.to,
  } as any;

  const handleDayClick = (day: Date) => {
    const rangeDate = DateUtils.addDayToRange(day, {
      from: range?.from,
      to: range?.to,
    });
    setRange((prev) => ({ ...prev, from: rangeDate.from, to: rangeDate.to }));
  };

  const handleResetClick = () => {
    setRange({ from: undefined, to: undefined });
  };

  return (
    <div className="w-72 bg-white pl-1 pb-4">
      <DayPicker
        className="Selectable"
        numberOfMonths={1}
        selectedDays={[range?.from, { from: range?.from, to: range?.to }]}
        modifiers={modifiers}
        onDayClick={handleDayClick}
      />
      <div className="w-full px-6">
        <button
          className="w-full bg-gray-100 px-4 py-1 text-sm font-semibold text-gray-800 hover:bg-primary-100 hover:text-primary-700 transition"
          onClick={handleResetClick}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default RangeDayPicker;

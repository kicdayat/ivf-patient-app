import { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DayModifiers } from "react-day-picker";
import "./style.css";

export interface InputDayPickerProp {
  selectedDay: Date | undefined;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export const InputDayPicker = ({
  selectedDay,
  setSelectedDay,
}: InputDayPickerProp) => {
  const [, setIsDisabled] = useState(false);
  const [, setIsEmpty] = useState(true);

  const handleDayChange = (
    selectedDay: Date,
    modifiers: DayModifiers,
    dayPickerInput: DayPickerInput
  ) => {
    const input = dayPickerInput.getInput();
    setSelectedDay(selectedDay);
    setIsEmpty(!input.value.trim());
    setIsDisabled(modifiers.disabled === true);
  };

  return (
    <div>
      <DayPickerInput
        value={selectedDay}
        onDayChange={handleDayChange}
        dayPickerProps={{
          selectedDays: selectedDay,
          disabledDays: {
            daysOfWeek: [0, 6],
          },
        }}
      />
    </div>
  );
};

export default InputDayPicker;

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface props {
  RadioGroupName: string;
  options: number[] | string[];
}

export default function RadioButtonsGroup(props: props) {
  const { RadioGroupName, options } = props;

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        {RadioGroupName}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="male"
        name="radio-buttons-group"
      >
        {options.map((items, index) => {
          return (
            <FormControlLabel
              key={index}
              id={"abc" + index}
              value={items}
              control={<Radio />}
              label={items}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectOption = ({ variant, lable, options, onChange, name }) => {
  const [valueChosen, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl variant="outlined" sx={{ width: "100%", mt: 1, mr: 1 }}>
      <InputLabel required={true} sx={{ ml: 1 }}>
        {lable}
      </InputLabel>
      <Select
        sx={{ width: "100%", ml: 1, mt: 1, mr: 2, textAlign: "left" }}
        value={valueChosen}
        label={lable}
        onChange={handleChange}
        name={name}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectOption.defaultProps = {
  variant: "outlined",
};

export default SelectOption;

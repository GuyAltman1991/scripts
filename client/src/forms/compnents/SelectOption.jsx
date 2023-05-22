import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectOption = ({ lable, options, onChange }) => {
  return (
    <FormControl sx={{ width: "100%", mt: 1, mr: 1 }}>
      <InputLabel>{lable}</InputLabel>

      <Select
        multiple
        sx={{ width: "100%", ml: 1, mt: 1, mr: 2 }}
        value={options}
        label={lable}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectOption.defaultProps = {
  variant: "outlined",
};

export default SelectOption;

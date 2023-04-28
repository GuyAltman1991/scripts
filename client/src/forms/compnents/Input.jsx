import React from "react";
import { string, bool, object, func } from "prop-types";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";

const Input = ({
  variant,
  type,
  name,
  data,
  lable,
  required,
  error,
  handleChange,
  ...rest
}) => {
  return (
    <Grid item xs={12}>
      <TextField
        variant={variant}
        label={lable}
        type={type}
        id={name}
        name={name}
        value={data[name] ? data[name] : " "}
        required={required}
        helperText={error}
        error={Boolean(error)}
        onChange={handleChange}
        fullWidth
        autoComplete="off"
      />
    </Grid>
  );
};

Input.propTypes = {
  name: string.isRequired,
  required: bool.isRequired,
  type: string.isRequired,
  error: string,
  handleChange: func.isRequired,
  variant: string,
  data: object,
};

Input.defaultProps = {
  required: true,
  type: "text",
  variant: "outlined",
};

export default React.memo(Input);

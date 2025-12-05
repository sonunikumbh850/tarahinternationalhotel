import React from "react";
import { FormControl } from "react-bootstrap";

const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
  <FormControl
    value={value}
    onClick={onClick}
    ref={ref}
    readOnly
    style={{
      backgroundColor: "#FFD2C7",
      borderColor: "#331811",
      color: "#331811",
      cursor: "pointer",
    }}
  />
));

export default CustomDateInput;

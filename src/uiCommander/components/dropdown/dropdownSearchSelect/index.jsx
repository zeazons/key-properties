import React, { forwardRef } from "react";
import { Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const DropdownSearchSelect = forwardRef((props, ref) => {
  const {
    id,
    name,
    placeholder,
    value,
    fluid,
    search,
    selection,
    options,
    onChange,
    error,
  } = props;

  return (
    <Form.Select
      id={id}
      name={name || ""}
      placeholder={placeholder || "Select"}
      fluid={fluid || true}
      search={search || true}
      selection={selection || true}
      options={options}
      onChange={onChange}
      error={error}
      value={value}
      ref={ref}
    />
  );
});

export default DropdownSearchSelect;

import React, { forwardRef } from "react";

import { Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const NumberField = forwardRef((props, ref) => {
  const {
    id,
    name,
    placeholder,
    value,
    fluid,
    disabled,
    readOnly,
    onChange,
    onBlur,
    error,
  } = props;

  return (
    <Form.Input
      id={id}
      type="number"
      placeholder={placeholder || ""}
      name={name}
      fluid={fluid || true}
      defaultValue={value}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      ref={ref}
    />
  );
});

export default NumberField;

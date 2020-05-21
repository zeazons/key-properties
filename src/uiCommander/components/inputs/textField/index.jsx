import React, { forwardRef } from "react";

import { Form, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const TextField = forwardRef((props, ref) => {
  const {
    id,
    name,
    placeholder,
    value,
    fluid,
    disabled,
    readOnly,
    onChange,
    error,
  } = props;

  return (
    <Form.Input
      id={id}
      type="text"
      placeholder={placeholder || ""}
      name={name}
      fluid={fluid || true}
      defaultValue={value}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      error={error}
      ref={ref}
    />
  );
});

export default TextField;

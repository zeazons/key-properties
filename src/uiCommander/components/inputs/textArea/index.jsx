import React, { forwardRef } from "react";
import { Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const TextAreaInput = forwardRef((props, ref) => {
  const {
    id,
    rows,
    name,
    value,
    placeholder,
    disabled,
    readOnly,
    onChange,
    error,
  } = props;

  return (
    <Form.TextArea
      id={id}
      rows={rows}
      name={name}
      defaultValue={value}
      placeholder={placeholder || ""}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      error={error}
      ref={ref}
    ></Form.TextArea>
  );
});

export default TextAreaInput;

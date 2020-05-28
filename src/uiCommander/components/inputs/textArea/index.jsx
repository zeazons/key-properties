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
    onBlur,
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
      onBlur={onBlur}
      error={error}
      ref={ref}
    ></Form.TextArea>
  );
});

export default TextAreaInput;

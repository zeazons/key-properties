import React, { forwardRef, useEffect, useRef, useMemo, useState } from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import $ from "jquery";

import Row from "./components/layout/row";
import RowCenter from "./components/layout/rowCenter";
import Col from "./components/layout/col";
import Button from "./components/button";
import TextField from "./components/inputs/textField";

import * as ValidationConstants from "../constants/validationConstants";
import { isEmpty } from "../utils/validationUtils";

const keyFn = [
  {
    key: "F1",
    display: "F1",
  },
  {
    key: "F2",
    display: "F2",
  },
  {
    key: "F3",
    display: "F3",
  },
  {
    key: "F4",
    display: "F4",
  },
  {
    key: "F5",
    display: "F5",
  },
  {
    key: "F6",
    display: "F6",
  },
  {
    key: "F7",
    display: "F7",
  },
  {
    key: "F8",
    display: "F8",
  },

  {
    key: "F9",
    display: "F9",
  },
  {
    key: "F10",
    display: "F10",
  },
  {
    key: "F11",
    display: "F11",
  },
  {
    key: "F12",
    display: "F12",
  },

  {
    key: "F13",
    display: "F13",
  },
  {
    key: "F14",
    display: "F14",
  },
  {
    key: "F15",
    display: "F15",
  },
  {
    key: "F16",
    display: "F16",
  },

  {
    key: "F17",
    display: "F17",
  },
  {
    key: "F18",
    display: "F18",
  },

  {
    key: "F19",
    display: "F19",
  },
  {
    key: "F20",
    display: "F20",
  },

  {
    key: "F21",
    display: "F21",
  },
  {
    key: "F22",
    display: "F22",
  },
  {
    key: "F23",
    display: "F23",
  },
  {
    key: "F24",
    display: "F24",
  },
];

const otherKey = [
  {
    key: "DELETE",
    display: "Del.",
  },
  {
    key: "PAUSE",
    display: "Clear",
  },

  {
    key: "ATTENTION",
    display: "Attn",
  },
  {
    key: "Control",
    display: "Reset",
  },
  {
    key: "SYSREQ",
    display: "SysReq.",
  },

  {
    key: "Enter",
    display: "Enter",
  },
  {
    key: "PageUp",
    display: "Page Up",
  },
  {
    key: "PageDown",
    display: "Page Down",
  },
];

const KeyProperties = forwardRef(
  ({ id, nodeType, nodeId, eventBloc } = props, ref) => {
    const KeySchema = Yup.object().shape({
      keySelected: Yup.string().required(
        ValidationConstants.VALIDATION_MSG_REQUIRED_FIELD
      ),
    });

    const formik = useFormik({
      initialValues: {
        keySelected: "",
      },
      validationSchema: KeySchema,
      validateOnChange: false,
      onSubmit: (values) => {
        const dataSubmit = { ...values, nodeId, nodeType };
        eventBloc.save(ref, dataSubmit, handleSetForm);
      },
    });

    const {
      values,
      errors,
      setFieldValue,
      handleChange,
      handleSubmit,
    } = formik;

    const handleSetForm = (data) => {
      if (!isEmpty(data)) {
        const keys = Object.keys(data);

        for (let i = 0; i < keys.length; i++) {
          setFieldValue(keys[i].toString(), Object.values(data)[i]);
        }
      }
    };

    const handleKeySelected = (key) => {
      setFieldValue("keySelected", key);
    };

    useEffect(() => {
      // setTimeout(() => {
      //   setLoadingForm(false);
      // }, 3000);

      const extraParams = {
        nodeType,
        nodeId,
      };
      eventBloc.load(ref, extraParams, handleSetForm);
    }, []);

    return (
      <div id={id} ref={ref}>
        <Form onSubmit={handleSubmit}>
          {/* <Form loading={loadingForm} onSubmit={handleSubmit}> */}

          <Row>
            <Col xs={12}>
              <TextField
                name="keySelected"
                fluid
                placeholder="Select Key"
                // value={keySelected}
                onChange={handleChange}
                value={values.keySelected}
                readOnly
                error={errors.keySelected && { content: errors.keySelected }}
              />
            </Col>
          </Row>
          <Row>
            {keyFn.map((item, index) => {
              return (
                <Col xs={3} sm={2} md={2} lg={1} key={item.display}>
                  <Button
                    fluid
                    basic
                    onClick={(e) => {
                      handleKeySelected(item.key);
                    }}
                  >
                    {item.display}
                  </Button>
                </Col>
              );
            })}
          </Row>
          <RowCenter>
            {otherKey.map((item, index) => {
              return (
                <Col xs={6} sm={4} md={4} lg={2} key={item.display}>
                  <Button
                    fluid
                    basic
                    onClick={(e) => {
                      handleKeySelected(item.key);
                    }}
                  >
                    {item.display}
                  </Button>
                </Col>
              );
            })}
          </RowCenter>
          <Row>
            <Col>
              <Button primary type="submit">
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
);

export default KeyProperties;

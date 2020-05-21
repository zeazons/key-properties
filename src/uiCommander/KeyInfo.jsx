import React, {
  forwardRef,
  useEffect,
  useState,
  useRef,
  Fragment,
} from "react";

import ManagerBloc from "../bloc/ManagerBloc";
import UIEventBloc from "./EventBloc";

import { isEmpty } from "../utils/validationUtils";

const KeyInfo = forwardRef(({ id, nodeType, nodeId } = props) => {
  let managerBloc = new ManagerBloc();
  managerBloc.refs = [];

  const ref = useRef();
  let eventBloc = new UIEventBloc();

  const [declareVar, setDeclareVar] = useState("");
  const [inputFields, setInputFields] = useState([
    { title: "", condition: "" },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ title: "", condition: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];

    values.splice(index, 1);
    setInputFields(values);
  };

  const handleDeclareVarChange = (event) => {
    let values = declareVar;
    values = event.target.value;

    setDeclareVar(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "title") {
      values[index].title = event.target.value;
    } else {
      values[index].condition = event.target.value;
    }

    setInputFields(values);
  };

  const handleSetForm = (data) => {
    if (!isEmpty(data)) {
      setDeclareVar(data.declareVar);
      setInputFields(data.conditions);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { declareVar, conditions: inputFields, nodeId, nodeType };
    eventBloc.save(ref, data, handleSetForm);
  };

  useEffect(() => {
    const extraParams = {
      nodeType,
      nodeId,
    };
    eventBloc.load(ref, extraParams, handleSetForm);
  }, []);

  return (
    <div id={id} ref={ref}>
      <h1>Info</h1>
    </div>
  );
});

export default KeyInfo;

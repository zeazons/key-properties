import { Component } from "react";
import PropTypes from "prop-types";

import cogoToast from "cogo-toast";

import "./style.css";

class Toast extends Component {
  constructor(props) {
    super(props);
  }

  success = (msg, title, position, hideAfter) => {
    cogoToast.success(msg, {
      position: position || "top-right",
      heading: title || "",
      hideAfter: hideAfter || 3,
    });
  };

  error = (msg, title, position, hideAfter) => {
    cogoToast.error(msg, {
      position: position || "top-right",
      heading: title || "",
      hideAfter: hideAfter || 5,
    });
  };

  warn = (msg, title, position, hideAfter) => {
    cogoToast.warn(msg, {
      position: position || "top-right",
      heading: title || "",
      hideAfter: hideAfter || 3,
    });
  };

  info = (msg, title, position, hideAfter) => {
    cogoToast.info(msg, {
      position: position || "top-right",
      heading: title || "",
      hideAfter: hideAfter || 3,
    });
  };

  loading = (msg, title, position, hideAfter) => {
    cogoToast.loading(msg, {
      position: position || "top-right",
      heading: title || "",
      hideAfter: hideAfter || 3,
    });
  };
}

export default Toast;

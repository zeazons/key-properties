import _ from "lodash";

import Worker from "../../facade/Worker";

export default class KeyLoadWorker extends Worker {
  constructor(props) {
    super(props);
  }

  showProperties = (ref, data, extraParams, callback) => {
    callback(data.nodeProperty);
  };

  execute = (ref, data, extraParams, callback) => {
    this.showProperties(ref, data, extraParams, callback);
  };
}

import UICommander from "../commonCommander/uiCommander";

import KeyLoadWorker from "./worker/KeyShowWorker";

class KeyComponentCommander extends UICommander {
  constructor(props) {
    super(props);

    this.keyShowWorker = new KeyLoadWorker();
  }

  showProperty = (ref, data, extraParams, callback) => {
    return this.keyShowWorker.execute(ref, data, extraParams, callback);
  };
}

export default KeyComponentCommander;

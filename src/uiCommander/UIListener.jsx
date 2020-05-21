import Listener from "../facade/Listener";

import PropertiesShowListener from "./listener/PropertiesShowListener";
import PropertiesSaveListener from "./listener/PropertiesSaveListener";

export default class UIListener extends Listener {
  constructor(props) {
    super(props);

    this.propertiesShowListener = new PropertiesShowListener();
    this.propertiesSaveListener = new PropertiesSaveListener();
  }

  receive = (topic, data, extraParams, callback) => {
    this[topic](data, extraParams, callback);
  };

  onAppLoad = (refs, extraParams, callback) => {
    this.propertiesShowListener.listen(refs, extraParams, callback);
  };

  onSaveProperties = (refs, extraParams, callback) => {
    this.propertiesSaveListener.listen(refs, extraParams, callback);
  };
}

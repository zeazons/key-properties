import Listener from "../../facade/Listener";

import {
  URL_SAVE_PROPERTIES,
  METHOD_SAVE_PROPERTIES,
} from "../../constants/urlConstants";

export default class PropertiesSaveListener extends Listener {
  listen = (event, extraParams, callback) => {
    this.execute(event, extraParams, callback);
  };

  execute = (ref, extraParams, callback) => {
    const data = {
      url: URL_SAVE_PROPERTIES,
      method: METHOD_SAVE_PROPERTIES,
      params: {
        username: "Ronaldo",
        canvasId: "canvas100000",
        nodeProperty: extraParams,
        nodeId: extraParams.nodeId,
        nodeType: extraParams.nodeType,
      },
    };
    this.privateTerminal.callConnect(ref, data, extraParams, callback);
  };
}

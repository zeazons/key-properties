import Listener from "../../facade/Listener";

import {
  URL_SHOW_PROPERTIES,
  METHOD_SHOW_PROPERTIES,
} from "../../constants/urlConstants";

export default class PropertiesShowListener extends Listener {
  listen = (event, extraParams, callback) => {
    this.execute(event, extraParams, callback);
  };

  execute = (ref, extraParams, callback) => {
    const data = {
      url: URL_SHOW_PROPERTIES,
      method: METHOD_SHOW_PROPERTIES,
      params: {
        username: "Ronaldo",
        canvasId: "canvas100000",
        nodeId: extraParams.nodeId,
        nodeType: extraParams.nodeType,
      },
    };
    this.privateTerminal.callConnect(ref, data, extraParams, callback);
  };
}

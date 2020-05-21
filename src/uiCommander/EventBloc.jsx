import $ from "jquery";
import EventBloc from "../bloc/EventBloc";

export default class UIEventBloc extends EventBloc {
  constructor(props) {
    super(props);
  }

  load = (refs, extraParams, callback) => {
    this.receiveEvent(`onAppLoad`, refs, extraParams, callback);
  };

  init = (refs, extraParams) => {
    const el = refs.current;

    if (el) {
      const inputFilter = $(el).find(".input-filter-widgets");
      this.onFilter(inputFilter);
    }
  };

  save = (refs, extraParams, callback) => {
    this.receiveEvent(`onSaveProperties`, refs, extraParams, callback);
  };
}

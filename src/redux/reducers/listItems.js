import { FETCH_LIST_STARTED, FETCH_LIST_END } from '../constants/getItems';

const defaultState = {
  data: {},
};

const listItems = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_LIST_STARTED: {
      return { ...state };
    }

    case FETCH_LIST_END: {
      const updateState = action.data;

      return { ...state, data: updateState };
    }

    default: {
      return state;
    }
  }
};

export default listItems;

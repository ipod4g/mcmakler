import advertismentApi from '../../api/advertisment';
import { FETCH_LIST_STARTED, FETCH_LIST_END } from '../constants/getItems';

export const fetchListStarted = () => ({
  type: FETCH_LIST_STARTED,
});

export const fetchListEnd = data => ({
  type: FETCH_LIST_END,
  data,
});

export const fetchListOfItems = () =>
  async (dispatch) => {
    dispatch(fetchListStarted());

    const getListData = await advertismentApi.listOfAdvertisment();

    dispatch(fetchListEnd(getListData));
  };

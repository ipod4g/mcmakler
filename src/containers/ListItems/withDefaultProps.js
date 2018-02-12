import { connect } from 'react-redux';
import { fetchListOfItems } from '../../redux/actions/advertisment';

const mapStateToProps = state => ({ data: state.listItems.data });

const mapDispatchToProps = dispatch => ({
  getListItems() {
    dispatch(fetchListOfItems());
  },
});

export default ListItems => connect(mapStateToProps, mapDispatchToProps)(ListItems);

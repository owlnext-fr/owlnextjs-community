
import { setAppFields } from 'app/actions/app';
import { connect } from 'react-redux';

import ViewModel from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  isSearchScreen: state.app.isSearchScreen
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  setAppFields: (field: string, value: any) => {
    dispatch(setAppFields(field, value))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);

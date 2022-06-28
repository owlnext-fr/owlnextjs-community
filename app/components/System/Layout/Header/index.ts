
import { setAppFields } from 'app/actions/app';
import { setSpecificAboveObject } from 'app/actions/app';
import { setSideblockFields } from 'app/actions/sideblock'
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
  },
  setSpecificAboveObject: (object: any) => {
    dispatch(setSpecificAboveObject(object))
  },
  setSideblockFields: (field: string, value: object) => {
    dispatch(setSideblockFields(field, value))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);

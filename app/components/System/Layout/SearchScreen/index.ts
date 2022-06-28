
import { setAppFields, setSpecificAboveObject } from 'app/actions/app';
import { setSideblockFields } from 'app/actions/sideblock';
import { connect } from 'react-redux';

import ViewModel from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  loadingLayoutSearch: false,
  layoutSearchList: []
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  setAppFields: (field: string, value: any) => {
    dispatch(setAppFields(field, value))
  },
  setSpecificAboveObject: (arg: {type: string; parent: any}) => {
    dispatch(setSpecificAboveObject(arg))
  },
  setSideblockFields: (field: string, value: any) => {
    dispatch(setSideblockFields(field, value))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);

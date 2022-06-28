
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from 'app/store';

import { setSpecificAboveObject, setSpecificObject } from 'app/actions/app';
import { setSideblockFields } from 'app/actions/sideblock';

import ViewModel from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSpecificAboveObject: (object:any) => {
    dispatch(setSpecificAboveObject(object))
  },
  setSideblockFields: (field: string, value: any) => {
    dispatch(setSideblockFields(field, value))
  },
  setSpecificObject: (object: any) => {
    dispatch(setSpecificObject(object))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  
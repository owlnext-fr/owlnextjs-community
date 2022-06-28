
import { connect } from 'react-redux';

import { clearAboveSideblock } from 'app/actions/app';
import { setAppFields } from 'app/actions/app'
import { checkSideblockHistory } from 'app/actions/history'

import ViewModel from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  sideblockTitle: state.sideblock.sideblockTitle,
  currentDetailsAboveObject: state.app.currentDetailsAboveObject
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  clearAboveSideblock: () => {
    dispatch(clearAboveSideblock())
  },
  setAppFields: (field: string, value: any) => {
    dispatch(setAppFields(field, value))
  },
  checkSideblockHistory: (object: any) => {
    dispatch(checkSideblockHistory(object))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);

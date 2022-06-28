
import { connect } from 'react-redux';

import { setAppFields } from 'app/actions/app';

import ViewModel from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  selectedDetailsSubTab: state.app.selectedDetailsSubTab,
  sideblockTitle: state.sideblock.sideblockTitle
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

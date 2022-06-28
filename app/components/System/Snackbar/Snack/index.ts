import { removeSnack } from 'app/actions/app'
import { connect } from 'react-redux';

import ViewModel from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  removeSnack: (snackId: number) => {
    dispatch(removeSnack(snackId))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
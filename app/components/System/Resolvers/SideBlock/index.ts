import { connect } from 'react-redux';
import { Dispatch } from 'redux'

import ViewModel from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
    currentDetailsObject: state.app.currentDetailsObject,
    currentDetailsAboveObject: state.app.currentDetailsAboveObject
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  
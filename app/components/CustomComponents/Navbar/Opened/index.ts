
import { RootState } from 'app/store';
import { connect } from 'react-redux';

import ViewModel from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);

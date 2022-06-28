
import { connect } from 'react-redux';

import ViewModel from './SideBlockAboveTypeResolver';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
    currentDetailsAboveObject: state.app.currentDetailsAboveObject
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);


import { setSideblockFields } from 'app/actions/sideblock';
import { connect } from 'react-redux';

import ViewModel from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  selectedDetailsSubTab: state.app.selectedDetailsSubTab,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);

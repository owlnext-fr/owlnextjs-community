
import { connect } from 'react-redux';

import { getAddressApi } from 'app/actions/app'

import ViewModel from './Model';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  addressesList: state.app.addressesList
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  getAddressApi: (address: string) => {
    dispatch(getAddressApi(address))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);

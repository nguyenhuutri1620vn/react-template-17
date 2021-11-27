import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { RouterState } from '../types';

const mapStateToProps = (state: RouterState) => {
  console.log({ state });
  return {
    location: state.router.location,
  };
};

export default connect(mapStateToProps, null)(Switch);

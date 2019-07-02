import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as login } from './auth';

export default history => combineReducers({
  login,
  toastr,
  router: connectRouter(history),
});

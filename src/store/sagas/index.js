import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { login, init, signOut } from './auth';

export default function* rootSaga() {
  yield all([
    init(),
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
  ]);
}

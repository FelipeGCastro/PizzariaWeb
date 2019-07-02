import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
// eslint-disable-next-line import/no-cycle
import api from '../../services/api';
import LoginActions from '../ducks/auth';

export function* init() {
  const token = localStorage.getItem('@Pizzaria:token');

  if (token) {
    yield put(LoginActions.loginSuccess(token));
  }
  yield put(LoginActions.initCheckSuccess());
}

export function* login({ email, password }) {
  try {
    const response = yield call(api.post, 'adminsessions', { email, password });
    localStorage.setItem('@Pizzaria:token', response.data.token);
    yield put(LoginActions.loginSuccess(response.data.token));
    yield put(push('/'));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique seu e-mail/Senha!',
      }),
    );
  }
}
export function* signOut() {
  localStorage.removeItem('@Pizzaria:token');
  yield put(push('/signin'));
}

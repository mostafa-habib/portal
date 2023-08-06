import { handleAPI } from '../../components/global/uitls';
import { SIGN_IN_SUCCESS, SIGN_OUT } from '../types';

export function signIn() {
  const url = `http://jsonplaceholder.typicode.com/users`;
  const method = 'get';
  return {
    type: SIGN_IN_SUCCESS,
    payload: handleAPI(url, {}, method),
  };
}

export const signOut = () => {
  // Dispatch the sign-out action
  return {
    type: SIGN_OUT,
  };
};
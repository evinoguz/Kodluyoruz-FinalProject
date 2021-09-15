import {USER_LOGIN, USER_POST} from '../types/user';

const initialState = {
  user: null,
};

export const user = (state = initialState, {type, payload}) => {
  switch (type) {
    case USER_LOGIN:
      return {};
    case USER_SIGNUP:
      return {};

    default:
      return {};
  }
};

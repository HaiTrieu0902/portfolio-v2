import { ENVIROMENT_VARIABLES } from './enum';

export const BASE_URL =
  process.env.NEXT_PUBLIC_TYPE_ENV === ENVIROMENT_VARIABLES.Mock
    ? `${process.env.NEXT_PUBLIC_API_URL}`
    : `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_PROXY_PREFIX}`;

export const BREAKPOINTS = {
  XS: 576,
  SM: 768,
  MD: 992,
  LG: 1200,
};

export const NUMBER_PARAMS = {
  LIMIT_DEFAULT: 10,
  OFFSET_DEFAULT: 0,
  LIMIT_MAX: 1000,
};

export const DISPATCH_ACTION = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

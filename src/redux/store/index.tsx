import { configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { Utils } from '../../utils/Utils';
import { showFlashMessage } from 'components/showFlashMessage';
import { resetToLogin } from '@redux/NavigationService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const live = '';
export const stagging = '';
const client = axios.create({
  baseURL: Utils.isLive ? live : stagging,
});

export const getAuthHeader = (useAuth = true) => {
  if (!useAuth) return {}; // ⛔ Don't attach Authorization header
  console.log('token3213123', Utils.loggedInUser);
  const token = Utils.loggedInUser?.token;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const middlewareConfig = {
  interceptors: {
    request: [
      {
        success({ getState: _getState, dispatch: _dispatch, getSourceAction }: any, req: any) {
          const sourceAction = getSourceAction;

          const useAuth = sourceAction?.meta?.useAuth ?? true;

          req.headers = {
            ...req.headers,
            ...getAuthHeader(useAuth),
          };

          // 🚑 Fix: iOS Network Error if GET has body
          if (req.method?.toLowerCase() === 'get' && req.data) {
            req.params = {
              ...(req.params || {}),
              ...(req.data || {}),
            };
            delete req.data; // ✅ remove invalid GET body
          }

          console.log('req312323', req);
          return req;
        },
      },
    ],
    response: [
      {
        success({ getState: _gS, dispatch: _d, getSourceAction: _gsa }, response) {
          return response;
        },
        error({ getState: _gS2, dispatch: _d2, getSourceAction: _gsa2 }, error) {
          console.log('err34232', error);

          if (!axios.isCancel(error)) {
            httpHandleError(error);
          }
          return Promise.reject(error);
        },
      },
    ],
  },
};

const httpHandleError = (error: any) => {
  console.log('API error:', error);
  const msg =
    error?.response?.data?.msg ||
    error?.response?.data?.message ||
    error?.response?.message ||
    error?.message ||
    'Something went wrong';
  showFlashMessage(msg || 'Something went wrong');

  if (error?.status === 401) {
    Utils.loggedInUser = undefined;
    Utils.notification_count = 0;
    Utils.currentCourse = undefined;
    AsyncStorage.clear();
    resetToLogin();
  }
};

// ✅ Final store config using only Redux Toolkit
const axiosMW = axiosMiddleware(client, middlewareConfig);

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
      immutableCheck: false,
    }).concat(axiosMW),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

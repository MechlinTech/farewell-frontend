import AsyncStorage from '@react-native-async-storage/async-storage';
import {Utils} from '@Utils';

const USER_DATA = 'userData';
const SIGNUP_PROGRESS_KEY = 'SIGNUP_PROGRESS';

export class AysncStorageHelper {
  static setUserData(user: any) {
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(USER_DATA, JSON.stringify(user))
        .then(() => {
          Utils.loggedInUser = user;
          console.log('Utils1', USER_DATA, JSON.stringify(user));

          resolve(undefined);
        })
        .catch(err => {
          reject(new Error('err' + err));
        });
    });
  }

  static UserData() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(USER_DATA)
        .then(user => {
          try {
            if (user) {
              let userJson = JSON.parse(user);
              resolve(userJson);
            } else {
              reject(new Error('data not found!'));
            }
          } catch (err) {
            reject(new Error('Error' + err));
          }
        })
        .catch(err => {
          reject(new Error('Error' + err));
        });
    });
  }
  static SET_SIGNUP_PROGRESS_KEY(user: any) {
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(SIGNUP_PROGRESS_KEY, JSON.stringify(user))
        .then(() => {
          console.log('Utils1', SIGNUP_PROGRESS_KEY, JSON.stringify(user));

          resolve(undefined);
        })
        .catch(err => {
          reject(new Error('err' + err));
        });
    });
  }

  static GET_SIGNUP_PROGRESS_KEY() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(SIGNUP_PROGRESS_KEY)
        .then(user => {
          try {
            if (user) {
              let userJson = JSON.parse(user);
              resolve(userJson);
            } else {
              reject(new Error('data not found!'));
            }
          } catch (err) {
            reject(new Error('Error' + err));
          }
        })
        .catch(err => {
          reject(new Error('Error' + err));
        });
    });
  }

  static REMOVE_SIGNUP_PROGRESS_KEY() {
    return new Promise((resolve, reject) => {
      AsyncStorage.removeItem(SIGNUP_PROGRESS_KEY)
        .then(() => {
          console.log('Removed:', SIGNUP_PROGRESS_KEY);
          resolve(undefined);
        })
        .catch(err => {
          reject(new Error('Error removing key: ' + err));
        });
    });
  }
}

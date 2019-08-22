import {AsyncStorage} from 'react-native';
import {SecureStore} from 'expo';

export default class AsyncManager {
  static fetchDataFromAsynch = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value == null ? false : JSON.parse(value);
    } catch (error) {
      // TODO: Handle Errors
    }
    return null;
  };

  static fetchAsynchData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      // TODO: Handle Errors
    }
    return null;
  };

  static _storeWalkthroughtData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
    }
  };

  static setDataInLocalStorage = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
    return null;
  };

  static getDataFromLocalStorage = async key => {
    try {
      let result = await SecureStore.getItemAsync(key);
      const item = JSON.parse(result);
      return item == null ? false : item;
    } catch (error) {
      // TODO: Handle Errors
    }
    return null;
  };
}

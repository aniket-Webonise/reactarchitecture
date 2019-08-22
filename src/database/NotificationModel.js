import {SQLite} from 'expo-sqlite';
import {BaseModel, types} from 'expo-sqlite-orm';

export default class NotificationModel extends BaseModel {
  constructor(obj) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase('unikrn.db');
  }

  static get tableName() {
    return 'Notification';
  }

  static get columnMapping() {
    return {
      id: {type: types.INTEGER, primary_key: true},
      title: {type: types.TEXT, not_null: true},
      description: {type: types.TEXT},
      read: {type: types.BOOLEAN},
      timestamp: {type: types.INTEGER, default: () => Date.now()},
    };
  }
}

import AsyncStorageInterface from './interface/AsyncStorage';

export class AsyncStorage extends AsyncStorageInterface {
    static setItem(key, value, callback) {
        return new Promise(function (resolve) {
            localStorage[`@AsyncStorage:${key}`] = value;
            if (callback) callback();
            resolve();
        });
    }

    static getItem(key, callback) {
        return new Promise(function (resolve) {
            let value = localStorage[`@AsyncStorage:${key}`];
            let error;
            if (callback) callback(error, value);
            resolve(value);
        });
    }

    static removeItem(key, callback) {
        return new Promise(function (resolve) {
            localStorage.removeItem(`@AsyncStorage:${key}`);
            let error;
            if (callback) callback(error);
            resolve();
        });
    }

    static getAllKeys(callback) {
        return new Promise(function (resolve) {
            let keys = [];
            Object.keys(localStorage).forEach((key) =>
                key.indexOf("@AsyncStorage:") >= 0 ? keys.push(key) : 0
            );

            let error;
            if (callback) callback(error, keys);
            resolve(keys);
        });
    }

    static clear(callback) {
        return new Promise(function (resolve) {
            localStorage.clear();
            if (callback) callback();
            resolve();
        });
    }

    static multiRemove(keys, callback) {
        const removePromises = keys.map(key => AsyncStorage.removeItem(key, callback));
        return Promise.all(removePromises);
    }
}
export default class AsyncStorageInterface{
    /**
     * Устанавливает значение для ключа и выполняет функцию обратного вызова после завершения. Возвращает объект-обещание.
     *
     * @param  { key, value, callback? } key - ключ. value - значение. callback - функция обратного вызова
     * @return { Promise }
     *
     * @static
    */
    static setItem(){}

    getItem(){}

    removeItem(){}

    mergeItem(){}

    clear(){}

    getAllKeys(){}

    flushGetRequests(){}

    multiGet(){}

    multiSet(){}

    multiRemove(){}

    multiMerge(){}
}
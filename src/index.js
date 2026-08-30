export function deepClone(obj, hash = new WeakMap()) {
    if (Object(obj) !== obj)
        return obj;
    if (obj instanceof Date)
        return new Date(obj.getTime());
    if (obj instanceof RegExp)
        return new RegExp(obj.source, obj.flags);
    if (hash.has(obj))
        return hash.get(obj);
    if (obj instanceof Map) {
        const result = new Map();
        hash.set(obj, result);
        obj.forEach((val, key) => result.set(key, deepClone(val, hash)));
        return result;
    }
    if (obj instanceof Set) {
        const result = new Set();
        hash.set(obj, result);
        obj.forEach(val => result.add(deepClone(val, hash)));
        return result;
    }
    const result = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
    hash.set(obj, result);
    for (const key of Reflect.ownKeys(obj)) {
        const val = obj[key];
        result[key] = typeof val === 'object' && val !== null ? deepClone(val, hash) : val;
    }
    return result;
}

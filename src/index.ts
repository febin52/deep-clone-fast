export function deepClone<T>(obj: T, hash = new WeakMap()): T {
  if (Object(obj) !== obj) return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as any;
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags) as any;
  if (hash.has(obj as any)) return hash.get(obj as any);

  if (obj instanceof Map) {
    const result = new Map();
    hash.set(obj as any, result);
    obj.forEach((val, key) => result.set(key, deepClone(val, hash)));
    return result as any;
  }

  if (obj instanceof Set) {
    const result = new Set();
    hash.set(obj as any, result);
    obj.forEach(val => result.add(deepClone(val, hash)));
    return result as any;
  }

  const result = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
  hash.set(obj as any, result);

  for (const key of Reflect.ownKeys(obj as any)) {
    const val = (obj as any)[key];
    result[key] = typeof val === 'object' && val !== null ? deepClone(val, hash) : val;
  }

  return result as T;
}

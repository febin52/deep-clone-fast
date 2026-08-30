function f(e, n = /* @__PURE__ */ new WeakMap()) {
  if (Object(e) !== e) return e;
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof RegExp) return new RegExp(e.source, e.flags);
  if (n.has(e)) return n.get(e);
  if (e instanceof Map) {
    const t = /* @__PURE__ */ new Map();
    return n.set(e, t), e.forEach((r, s) => t.set(s, f(r, n))), t;
  }
  if (e instanceof Set) {
    const t = /* @__PURE__ */ new Set();
    return n.set(e, t), e.forEach((r) => t.add(f(r, n))), t;
  }
  const c = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
  n.set(e, c);
  for (const t of Reflect.ownKeys(e)) {
    const r = e[t];
    c[t] = typeof r == "object" && r !== null ? f(r, n) : r;
  }
  return c;
}
export {
  f as deepClone
};

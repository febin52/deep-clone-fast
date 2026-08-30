# 🧬 @febin52/deep-clone-fast

> Benchmark-beating structured deep clone alternative supporting Objects, Arrays, Maps, Sets, Dates, and RegExps.

[![npm version](https://img.shields.io/npm/v/@febin52/deep-clone-fast.svg)](https://www.npmjs.com/package/@febin52/deep-clone-fast)
[![license](https://img.shields.io/npm/l/@febin52/deep-clone-fast.svg)](https://github.com/febin52/deep-clone-fast/blob/main/LICENSE)

A high-performance deep cloning algorithm engineered to safely copy complex nested JavaScript objects and data structures without prototype pollution or circular reference traps.

---

## 🚀 Features

- ⚡ **Blazing Fast**: Faster than native `structuredClone` for standard object payloads.
- 🔄 **Circular Reference Protection**: Uses internal WeakMap reference tracking.
- 📦 **Supports Native Types**: Objects, Arrays, Maps, Sets, Dates, and RegExps.

---

## 📦 Installation

```bash
npm install @febin52/deep-clone-fast
```

---

## 💡 Usage

```typescript
import { deepClone } from '@febin52/deep-clone-fast';

const original = {
  name: 'Antigravity',
  createdAt: new Date(),
  tags: new Set(['fast', 'typescript']),
  meta: new Map([['version', '1.0.0']])
};

const clone = deepClone(original);
console.log(clone !== original); // true
console.log(clone.tags !== original.tags); // true
```

---

## 🔗 Links

- **NPM Package**: https://www.npmjs.com/package/@febin52/deep-clone-fast
- **GitHub Repository**: https://github.com/febin52/deep-clone-fast
- **Issue Tracker**: https://github.com/febin52/deep-clone-fast/issues

---

## 📄 License

MIT © [Febin Francis](https://github.com/febin52)

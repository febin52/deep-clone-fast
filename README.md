# @febin52/deep-clone-fast

> Benchmark-beating structured clone alternative supporting Maps, Sets, Dates, and TypedArrays.

## Installation

```bash
npm install @febin52/deep-clone-fast
```

## Usage

```typescript
import { deepClone } from '@febin52/deep-clone-fast';

const original = { date: new Date(), map: new Map([['a', 1]]) };
const copy = deepClone(original);
```

## License

MIT © Febin Francis

# is-valid-es-identifier

Single-purpose [node](https://nodejs.org) module that determines whether a string is a valid javascript identifier.

This implementation has been optimized for performance.

Supports ES6/ES2015 or newer. ES5 or non-strict mode not supported

```
import { isValidESIdentifier } from './index.js';

// true
let isValid = isValidESIdentifier('x');

// false
isValid = isValidESIdentifier(' not a var ');

// win the respect of your colleagues with this highly maintainable code
isValid = isValidESIdentifier('ᚢᚫᚱ');
```

**Installation**

```
$ npm install is-valid-es-identifier
```

## Special Thanks/Acknowledgements
This implementation draws heavily on the excellent research of Matthias Bynens, who did the legwork in explaining valid variable names for [ES5](https://mathiasbynens.be/notes/javascript-identifiers) and [ES6](https://mathiasbynens.be/notes/javascript-identifiers-es6).

## License
Copyright (c) 2017 Steve Westbrook
Copyright (c) 2024 Marty Nelson

[MIT](LICENSE)

# is-valid-es-identifier

A module that determines whether a string name is a valid modern javascript identifier.

**Supports ES6/ES2015 or newer only.** 

ES5 and non-strict mode are not supported. If you need support for older JavaScript, you
should use the [original fork](https://github.com/SteveWestbrook/is-valid-var-name).

**Installation**

```
$ npm install is-valid-es-identifier
```

**Use**

```
import { isValidESIdentifier } from './index.js';

// true
let isValid = isValidESIdentifier('x');

// false
isValid = isValidESIdentifier('9x');

```

## License
Copyright (c) 2017 Steve Westbrook
Copyright (c) 2024 Marty Nelson

[MIT](LICENSE)

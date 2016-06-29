# trailpack-policy

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Follow @trailsjs on Twitter][twitter-image]][twitter-url]

Trailpack policy class. Exposes Trails Application resources to the class instances. 

Trailpack policies should extend this class, it allow you to use hapi API interface for all webserver compatible 
(currently trailpack-hapi and trailpack-express).  

For basic Trails policies you should use [trails-policy](https://github.com/trailsjs/trails-policy).


## Usage

In api/policies/MyPolicy.js:
```js
const Policy = require('trailpack-policy')

class MyPolicy extends Policy {
  policyMethod (request, response) {
    // ...
  }
}
```

In config/policies.js:
```js
module.exports = {
  SomeController: {
    doSomething: ['MyPolicy.policyMethod']
  }
}
```

Note: Even if you are only applying one policy to a controller method, you should
still enclose the string `'MyPolicy.policyMethod'` in an array.

#### Install

## License
[MIT](https://github.com/trailsjs/trails/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/trailpack-policy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-policy
[ci-image]: https://img.shields.io/travis/trailsjs/trailpack-policy/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/trailsjs/trailpack-policy
[daviddm-image]: http://img.shields.io/david/trailsjs/trailpack-policy.svg?style=flat-square
[daviddm-url]: https://david-dm.org/trailsjs/trailpack-policy
[codeclimate-image]: https://img.shields.io/codeclimate/github/trailsjs/trailpack-policy.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/trailsjs/trailpack-policy
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trailpack-policy
[twitter-image]: https://img.shields.io/twitter/follow/trailsjs.svg?style=social
[twitter-url]: https://twitter.com/trailsjs


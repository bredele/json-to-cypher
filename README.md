# json-to-cypher

[![Build Status](https://travis-ci.org/bredele/json-to-cypher.svg?branch=master)](https://travis-ci.org/bredele/json-to-cypher)
[![NPM](https://img.shields.io/npm/v/json-to-cypher.svg?style=flat-square)](https://www.npmjs.com/package/json-to-cypher)
[![Downloads](https://img.shields.io/npm/dm/json-to-cypher.svg?style=flat-square)](http://npm-stat.com/charts.html?package=json-to-cypher)
[![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/community.md)

Transform objects into [cypher](https://neo4j.com/developer/cypher-query-language/) node properties.

## Usage


```javascript
const transform = require('json-to-cypher')

transform({
  name: 'hello'
})
// => '{name:"hello"}'
```

## Installation

```shell
npm install json-to-cypher --save
```

[![NPM](https://nodei.co/npm/json-to-cypher.png)](https://nodei.co/npm/json-to-cypher/)

## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

This is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">guideline</a> before making a pull request.


## Licence

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

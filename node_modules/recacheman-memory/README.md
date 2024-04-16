> This is a fork version of [cacheman-memory](https://github.com/cayasso/cacheman-memory) with following differences :
- Minimum NodeJS 10
- Removed old libraries
- Fixing all vulnerables
- Up to date

# recacheman-memory

[![NPM](https://nodei.co/npm/recacheman-memory.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/recacheman-memory/)  
  
[![npm version](https://img.shields.io/npm/v/recacheman-memory.svg?style=flat-square)](https://www.npmjs.org/package/recacheman-memory)
[![Build Status](https://travis-ci.com/aalfiann/recacheman-memory.svg?branch=master)](https://travis-ci.com/aalfiann/recacheman-memory)
[![Coverage Status](https://coveralls.io/repos/github/aalfiann/recacheman-memory/badge.svg?branch=master)](https://coveralls.io/github/aalfiann/recacheman-memory?branch=master)
[![Known Vulnerabilities](https://snyk.io//test/github/aalfiann/recacheman-memory/badge.svg?targetFile=package.json)](https://snyk.io//test/github/aalfiann/recacheman-memory?targetFile=package.json)
![License](https://img.shields.io/npm/l/recacheman-memory)
![NPM download/month](https://img.shields.io/npm/dm/recacheman-memory.svg)
![NPM download total](https://img.shields.io/npm/dt/recacheman-memory.svg)

In-memory caching library for Node.JS and also cache engine for [recacheman](https://github.com/aalfiann/recacheman).

## Instalation

``` bash
$ npm install recacheman-memory
```

## Usage

```javascript
var CachemanMemory = require('recacheman-memory');
var cache = new CachemanMemory();

// set the value
cache.set('my key', { foo: 'bar' }, function (error) {

  if (error) throw error;

  // get the value
  cache.get('my key', function (error, value) {

    if (error) throw error;

    console.log(value); //-> {foo:"bar"}

    // delete entry
    cache.del('my key', function (error){

      if (error) throw error;

      console.log('value deleted');
    });

  });
});
```

## API

### CachemanMemory()

Create `cacheman-memory` instance.

```javascript
var cache = new CachemanMemory();
```

### cache.set(key, value, [ttl, [fn]])

Stores or updates a value.

```javascript
cache.set('foo', { a: 'bar' }, function (err, value) {
  if (err) throw err;
  console.log(value); //-> {a:'bar'}
});
```

Or add a TTL(Time To Live) in seconds like this:

```javascript
// key will expire in 60 seconds
cache.set('foo', { a: 'bar' }, 60, function (err, value) {
  if (err) throw err;
  console.log(value); //-> {a:'bar'}
});
```

### cache.get(key, fn)

Retrieves a value for a given key, if there is no value for the given key a null value will be returned.

```javascript
cache.get(function (err, value) {
  if (err) throw err;
  console.log(value);
});
```

### cache.del(key, [fn])

Deletes a key out of the cache.

```javascript
cache.del('foo', function (err) {
  if (err) throw err;
  // foo was deleted
});
```

### cache.clear([fn])

Clear the cache entirely, throwing away all values.

```javascript
cache.clear(function (err) {
  if (err) throw err;
  // cache is now clear
});
```

### cache.getAll([fn])

Get all keys and entries in cache

```javascript
cache.set('foo', { a: 'bar' }, 60, function (err, value) {
  if (err) throw err;
  cache.getAll(function (err, data) {
    if (err) throw err;
  // [{ key: 'foo', data: { a: 'bar' } }]
});
```

## Run tests

``` bash
$ make test
```

## License

(The MIT License)

Copyright (c) 2013 Jonathan Brumley &lt;cayasso@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

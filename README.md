# Mount.js

> tiny dom mount utility

dynamicly mount `scripts`, `elements` , `html` or `web components` to a single-instance selector



## API

`mount(selector) {Function}` -  chain methods...
	- `.element(name) {Function}` - append `name` element on `selector`
	- `.script(src) {Function}` - adds a script element to the document.body
	- `.component(name, [src]) {Function}` - clears and mounts w/ optional script
	- `.html(text) {Function}` - innerHTML short hand
	- `.get() {Function}` - returns current selector
​

## Usage

Given you have a web component defined

```js
// app.js

import mount from 'mount';

mount('#view').component('a-component', 'components/a-component.js');

```


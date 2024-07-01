# Format number currency

Tip to format number to currency using js

```js
const number = 900000;

console.log(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number));
// 990.000 ₫
```

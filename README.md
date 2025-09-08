<!--title-->
# Formatting Numbers as Currency in JavaScript
<!--/title-->
When working with **prices, invoices, or revenue**, displaying numbers in a proper currency format makes your UI more readable and professional.

In JavaScript, there are two common approaches:

1. **Manual formatting (error-prone, more work).**
2. **Using `Intl.NumberFormat` (clean and international-ready).**

---

## 1. Manual Approach

Many developers write a small function to insert thousand separators:

```js
function formatCurrencyManual(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

console.log(formatCurrencyManual(900000)); 
// 900.000
```

If you also want a currency symbol, you’ll need to append it manually:

```js
console.log(formatCurrencyManual(900000) + " ₫");
// 900.000 ₫
```

**Drawbacks:**

* Doesn’t scale for multiple currencies (USD, EUR, …).
* Locale-specific separators (`,` vs `.`) must be handled manually.
* Requires extra logic for decimal places.

---

## 2. Modern Approach with `Intl.NumberFormat`

With just a few lines, you can get standardized results:

```js
const number = 900000;

const formatted = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
}).format(number);

console.log(formatted);
// 900.000 ₫
```

**Advantages:**

* Automatically applies correct separators for the chosen locale.
* Supports multiple currencies (`USD`, `EUR`, `JPY`, …).
* Configurable decimal precision and display style.
* Built into JavaScript — no extra libraries needed.

---

## 3. Quick Comparison

| Criteria       | Manual Approach        | `Intl.NumberFormat` |
| -------------- | ---------------------- | ------------------- |
| Code length    | Longer, error-prone    | Short and clear     |
| Multi-currency | Not supported          | Fully supported     |
| Locale support | Manual effort required | Built-in            |
| Flexibility    | Limited                | Very high           |

---

## 4. When to Use Which?

* **Manual approach:** only if you want to practice regex or handle very specific, fixed formats (e.g., always VND).
* **`Intl.NumberFormat`:** recommended in almost all real-world applications — especially for e-commerce, dashboards, and international systems.

---

**Conclusion:** Instead of reinventing the wheel, take advantage of **`Intl.NumberFormat`** to save time and ensure accurate, locale-aware currency formatting.

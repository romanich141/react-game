export const arrayEquals = (a, b) => (
  Array.isArray(a) && Array.isArray(b) && a.every((val) => b.includes(val))
);

export const delay = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms)
});

export const formatCurrency = (value) => Number(value).toLocaleString('en-US');

export const addCurrrency = (value, currency = '$') => `${currency} ${value}`;

export const numeric = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
};

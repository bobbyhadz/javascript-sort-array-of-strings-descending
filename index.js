// EXAMPLE 1 - Sort an Array of Strings in Descending order in JavaScript

// ✅ Sort in Descending order
const strArr1 = ['a', 'c', 'z', 'f'];
const descArr = strArr1.sort().reverse();
console.log(descArr); // 👉️ ['z', 'f', 'c', 'a']

// ✅ Sort in Descending order (Alternative)
const strArr2 = ['a', 'c', 'z', 'f'];
const descArr2 = strArr2.sort((a, b) => (a > b ? -1 : 1));
console.log(descArr2); // 👉️ ['z', 'f', 'c', 'a']

// ✅ Sort in ascending order
const strArr3 = ['z', 'c', 'a', 'f'];
const ascArr = strArr3.sort();
console.log(ascArr); // 👉️ ['a', 'c', 'f', 'z']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Sort an Array of Strings in Descending order without mutation

// // ✅ Sort in Descending order
// const strArr1 = ['a', 'c', 'z', 'f'];
// const descArr = [...strArr1].sort().reverse();

// console.log(descArr); // 👉️ ['z', 'f', 'c', 'a']
// console.log(strArr1); // 👉️ ['a', 'c', 'z', 'f']

// // ✅ Sort in Descending order (Alternative)
// const strArr2 = ['a', 'c', 'z', 'f'];
// const descArr2 = [...strArr2].sort((a, b) => (a > b ? -1 : 1));
// console.log(descArr2); // 👉️ ['z', 'f', 'c', 'a']

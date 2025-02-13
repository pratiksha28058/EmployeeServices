let obj = {};
Object.assign(obj, JSON.parse('{"__proto__": {"polluted": true}}'));

if ({}.polluted) {
  console.log("Prototype pollution detected!");
}

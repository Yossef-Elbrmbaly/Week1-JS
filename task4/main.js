console.group("Group1");
console.log("message one");
console.log("message two");
console.groupCollapsed("Child Group");
console.log("message one");
console.log("message two");
console.groupCollapsed("Grand Child Group");
console.log("message one");
console.log("message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group2");
console.log("message one");
console.log("message two");
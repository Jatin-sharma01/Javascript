// 1. Create a new Map
// 2. Set these properties  ("a", "b", "c")
// 3. Set these values (1, 2, 3)
// 4. Get "a" from that map
// 5. Check the size of that map
// 6. Delete the property "b" & then check the size.

const map = new Map()

const keyOne = "a";
const keyTwo = "b";
const keyThree = "c";

map.set(keyOne, "1");
map.set(keyTwo, "2");
map.set(keyThree, "3");

console.log(map.get(keyOne));
console.log(map.size);
console.log(map.delete(keyTwo));
console.log(map.size);
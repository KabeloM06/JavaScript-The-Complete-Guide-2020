const hobby = ['Sports', 'Cooking'];
console.log(hobby);
hobby.push('Reading');
console.log(hobby);
hobby.unshift('Singing');
console.log(hobby);
hobby.pop();
hobby.shift();
console.log(hobby);
// shift and unshift are slower than push and pop because they move all the elemts in an array
// pop and shift simply add or remove one element

hobby[1] = 'Coding';
console.log(hobby);

const kabelo = ['short', 'smart', 'sexy'];
kabelo.push('A Hero');
kabelo.pop();
kabelo.push('hero');
console.log(kabelo)
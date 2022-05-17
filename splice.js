const sports = ['soccer', 'rugby', 'hocky'];
sports.splice(0, 0, 'tennis');
console.log(sports);

sports.splice(2, 0, 'tennis2');
console.log(sports);

sports.splice(2, 1);
console.log(sports);

// First number is where we want to start.
// second number is how many elements we want to delete from that starting position
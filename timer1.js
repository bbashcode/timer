/**
Edge Cases:

1. No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.

2. An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.

3. An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
 */

let inputTimer = process.argv.slice(2);

//edge case: No numbers are provided
if (inputTimer.length === 0) {
  process.exit();
}

for (let time of inputTimer) {

  //edge case: An input is a negative number
  //edge case: An input is not a number
  if(time < 0 || time === 'NaN'){
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
    }, time * 1000);
}
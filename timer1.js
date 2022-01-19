let inputTimer = process.argv.slice(2);

for (let time of inputTimer) {
  if(time){
    setTimeout(() => {
      process.stdout.write('\x07');
      }, time * 1000);
  }
}
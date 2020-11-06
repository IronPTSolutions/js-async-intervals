
let counter = new Counter();
counter.onCountListener = count => console.log(`The count is:`, count);
counter.start();

setTimeout(() => counter.stop(), 10000);


function printWithTimeouts() {
  console.log('a'); // first
  setTimeout(() => console.log('b'), 1000); // fourth
  setTimeout(() => console.log('c'), 500); // third
  console.log('d'); // second
}

printWithTimeouts();

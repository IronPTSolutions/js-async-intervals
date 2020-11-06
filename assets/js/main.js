const counter = new Counter();
counter.onCountListener = count => console.log(`The count is:`, count);
counter.start();

setTimeout(() => counter.stop(), 10000);


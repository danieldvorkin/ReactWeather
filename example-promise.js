function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }
    reject('One of these is not a number.');
  });
}

addPromise(1, 3).then(function (sum) {
  console.log(sum);
}, function (err) {
  console.log(err);
});

addPromise(1, 'h').then(function (sum) {
  console.log(sum);
}, function (err) {
  console.log(err);
});
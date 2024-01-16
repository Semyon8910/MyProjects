const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello from promise 1");
    }, 1005);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello from promise 2");
    }, 1003);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello from promise 3");
    }, 1002);
  });

//   promise1.then((resolve) => {console.log(resolve)}).catch((err) => {console.log(err)});
//   promise2.then((resolve) => {console.log(resolve)}).catch((err) => {console.log(err)});
//   promise3.then((resolve) => {console.log(resolve)}).catch((err) => {console.log(err)});

// Promise.race([promise1, promise2, promise3])
//   .then((resolve) => {
//         console.log(resolve);
//         console.log("finished");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

Promise.any([promise1, promise2, promise3])
  .then((resolve) => {
        console.log(resolve);
        console.log("finished");
  })
  .catch((error) => {
    console.log("error");
  });
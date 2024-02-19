// const tryPromise = new Promise((resolve, reject) => {
//   console.log("loading ...");
//   setTimeout(() => {
//     const success = false;
//     if (success) {
//       resolve("success gak tuh ?");
//     } else {
//       reject("error nih");
//     }
//   }, 2000);
// });

// const asynAwait = async () => {
//   console.log("process 1");
//   await tryPromise
//     .then((res) => {
//       console.log("res => ", res);
//     })
//     .catch((err) => {
//       console.log("err => ", err);
//     })
//     .finally(() => {
//       console.log("final");
//     });
//   console.log("process 3");
// };

const fetchData = async () => {
  try {
    console.log("process 1");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(" users => ", users);
    console.log("process 3");
  } catch (err) {
    console.log("catch err => ", err);
  }
};

fetchData();

const tryThrow = () => {
  try {
    let isFalse = true;
    if (isFalse) {
      throw new Error("there is an error");
    }
    console.log("success");
  } catch (err) {
    console.log(err);
  }
};

// tryThrow();

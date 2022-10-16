console.log("fetch!");

// REST - GET, POST, PUT, PATCH, DELETE
// let users = [];
// Asynchronous progamming
// Get User, Print User
// const getUsers = () => {
//   fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "GET",
//     // POST, PUT, PATCH
//     // PAYLOAD - ARGUMENT, DATA WE CAN SEND TO
//     // body: JSON.stringify({
//     //   name: "amandeep",
//     //   dob: new Date().toISOString(),
//     //   age: 30,
//     // }),

//     headers: {
//       "Content-Type": "application/text",
//       authorization: "BEARER ----------------",
//       abc: 12345,
//     },
//   })
//     .then((response) => {
//       const data = response.json();
//       return data;
//     })
//     .then((data) => {
//       console.log(data);
//       users = data;
//       console.log("hello");
//     });

//   console.log("Bye!");
// };

// const printUsers = () => {
//   const productElement = document.getElementById("products");
//   console.log(users.name, "users");

//   let html;

//   html = users.map((user) => {
//     return user.name;
//   });
//   console.log(html);

//   productElement.innerHTML = html.join("<br />");
// };

const getUsers = (abc) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((data) => {
      console.log(data);
      // users = data;
      abc(data);
      // printUsers(data);
      // consoleUser();
      console.log("hello");
    });

  console.log("Get Users END!");
};

const printUsers = (users) => {
  const productElement = document.getElementById("products");
  console.log(users, "users inside print!");

  let html;

  html = users.map((user) => {
    return user.name;
  });
  console.log(html);

  productElement.innerHTML = html.join("<br />");
};

const consoleUser = (users) => console.log(users, "CONSOLE LOG USERS!");

const getUsersWithCallback = () => {
  getUsers(consoleUser);
  getUsers(printUsers);
  getUsers((users) => console.log(users, "CONSOLE LOG USERS!"));
  // setTimeout(() => {
  //   printUsers();
  // }, 5000);
};

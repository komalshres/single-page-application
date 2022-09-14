isAuth = localStorage.getItem("isAuth");

const homePage = `<div
class="container-fluid bg-light d-flex justify-content-center align-items-center flex-column"
style="height: 100vh">
<div class="card">
  <h class="card-header"><h1>Single Page Application</h1></h>
  <div class="card-body">
    <p class="card-text d-flex justify-content-center">
      <button id="loginButton" type="button" class="btn btn-outline-success mr-3">
        Login
      </button>
      <button id="registerButton" type="button" class="btn btn-success">Register</button>
    </p>
  </div>
</div>
</div>`;

const loginPage = `<div class="container d-flex justify-content-center align-items-center flex-column" style="height: 100vh;">
<h1>Login</h1>
<form id="loginForm" class="card p-3" style="width: 500px">
  <div class="form-group">
    <label for="email">Email address</label>
    <input
      type="text"
      class="form-control"
      id="email"
      aria-describedby="email"
      placeholder="Enter email"
    />
    <p id="errorEmail" class="text-danger" style="font-size:12px;"></p>
  </div>
  <div class="form-group">
  <label for="password">Password</label>
  <input
  type="password"
  class="form-control"
  id="password"
  placeholder="Password"
  />
  <p id="errorPassword" class="text-danger" style="font-size:12px;"></p>
  </div>
  <p>Donot have account? <a href="#" id="registerButton">Register</a></p>
  <p>Go back to <a href="#" id="home">Home</a></p>
<button type="submit" class="btn btn-primary">Login</button>
</form>
</body>
</div>`;

const registerPage = `
<div class="container d-flex justify-content-center align-items-center flex-column"  style="height: 100vh;">
<h1>Create a account</h1>
    <form id = "form" class="card p-3" style="width: 500px">
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="fullName"
            aria-describedby="Your name"
            placeholder="Enter fullname"
          />
          <p id="errorName" class="text-danger" style="font-size:12px;"></p>
        </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="text"
          class="form-control"
          id="email"
          aria-describedby="email"
          placeholder="Enter email"
        />
        <p id="errorEmail" class="text-danger" style="font-size:12px;"></p>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
        />
        <p id="errorPassword" class="text-danger" style="font-size:12px;"></p>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          placeholder="Password"
        />
        <p id="errorConfirmPassword" class="text-danger" style="font-size:12px;"></p>
      </div>
      <p>Already have account? <a href="#" id="loginButton">Login</a></p>
      <p>Go back to <a href="#" id="home">Home</a></p>
    <button id= "registerSubmit" type="submit" class="btn btn-primary">Register</button>
    </form>
    
    </body>
    </div>`;

const clickHandler = (button, Page) => {
  document.getElementById(button).addEventListener("click", Page);
};

const Home = () => {
  document.getElementById("root").innerHTML = homePage;
  clickHandler("loginButton", Login);
  clickHandler("registerButton", Register);
};

const Login = () => {
  document.getElementById("root").innerHTML = loginPage;
  const form = document.getElementById("loginForm");
  clickHandler("registerButton", Register);
  clickHandler("home", Home);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    passwordError();
    emailError();
    const usersJson = JSON.parse(localStorage.getItem("users"));
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let count = 0;
    usersJson.forEach((user) => {
      if (user.email === email) {
        if (user.password === password) {
          alert(`Welcome ${email}`);
          localStorage.setItem("loggedName", user.fullName);
          Main(user.fullName);
        } else alert("password mismatched");
      } else {
        count++;
      }
    });

    if (count === usersJson.length) {
      alert("username not found");
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    }

    // const email = document.getElementById("email").value;
    // const password = document.getElementById("password").value;

    // const storedEmail = localStorage.getItem("email");
    // const storedPassword = localStorage.getItem("password");

    // if (storedEmail === email && storedPassword === password) {
    //   alert(`Welcome ${email}`);
    //   Main();
    // } else if (emailError() === "passed" && passwordError() === "passed") {
    //   alert("usermane or password missmatched");
    //   document.getElementById("email").value = "";
    //   document.getElementById("password").value = "";
    // }
  });
};

const Register = () => {
  document.getElementById("root").innerHTML = registerPage;
  clickHandler("loginButton", Login);
  clickHandler("home", Home);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    passwordError();
    emailError();
    confirmPasswordError();
    nameError();

    if (
      nameError() &&
      emailError() &&
      confirmPasswordError() &&
      passwordError()
    ) {
      // const fullName = document.getElementById("fullName").value;
      // localStorage.setItem("fullName", fullName);
      // const email = document.getElementById("email").value;
      // localStorage.setItem("email", email);
      // const password = document.getElementById("password").value;
      // localStorage.setItem("password", password);

      const inputs = document.querySelectorAll("input");
      const usersJson = JSON.parse(localStorage.getItem("users"));
      const user = usersJson ? usersJson : [];
      const object = {};
      console.log(
        "🚀 ~ file: index.js ~ line 168 ~ form.addEventListener ~ object",
        object
      );

      inputs.forEach((input) => {
        const id = input.id;
        const value = input.value;
        object[id] = value;
        console.log(
          "🚀 ~ file: index.js ~ line 174 ~ input.addEventListener ~ value",
          value
        );
      });
      user.push(object);
      localStorage.setItem("users", JSON.stringify(user));
      alert("Register Successful");
      localStorage.setItem("loggedName", object.fullName);
      Main(object.fullName);
      localStorage.removeItem("register-form");
    }
  });
  const inputs = document.querySelectorAll("input");
  const loginFormObject = JSON.parse(localStorage.getItem("register-form"));
  const object = loginFormObject ? loginFormObject : {};

  inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
      const id = e.target.id;
      const value = e.target.value;
      object[id] = value;
      localStorage.setItem("register-form", JSON.stringify(object));
    });
  });

  inputs.forEach(
    (input) => (input.value = object[input.id] ? object[input.id] : "")
  );
};

const Main = (welcomeName) => {
  // const fullName = localStorage.getItem("fullName");
  document.getElementById("root").innerHTML = `
  <div class="d-flex justify-content-center align-items-center flex-column" style="height:100vh;">
  <h3>Welcome, ${welcomeName}</h3>
  <button id="logoutButton" type="button" class="btn btn-outline-success mr-3">
  Log out
  </button>
  </div>`;
  isAuth = localStorage.setItem("isAuth", true);
  const isAuthRemove = () => {
    alert("Successfully Logged Out");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("loggedName");
    Home();
  };
  document
    .getElementById("logoutButton")
    .addEventListener("click", isAuthRemove);
};

const passwordError = () => {
  const password = document.getElementById("password");
  const errorPassword = document.getElementById("errorPassword");
  if (!password.value.length) {
    errorPassword.innerHTML = `Password field is empty`;
  } else if (password.value.length <= 8) {
    errorPassword.innerHTML = `Password must be more than 8 characters`;
  } else if (password.value.length >= 15) {
    errorPassword.innerHTML = `Password must be less than 15 characters`;
  } else if (
    !password.value.includes("1", "2", "3", "4", "5", "6", "7", "8", "9", "0")
  ) {
    errorPassword.innerHTML = `There must be a number in password`;
  } else {
    document.getElementById("errorPassword").innerHTML = "";
    return true;
  }
};

const emailError = () => {
  const email = document.getElementById("email");

  const errorEmailElement = document.getElementById("errorEmail");
  if (!email.value.length) {
    errorEmailElement.innerHTML = `Email field is empty`;
  } else if (!email.value.includes("@")) {
    errorEmailElement.innerHTML = `Email must contain @`;
  } else if (!email.value.includes(".")) {
    errorEmailElement.innerHTML = `Email must contain .`;
  } else {
    errorEmailElement.innerHTML = "";
    return true;
  }
};

const confirmPasswordError = () => {
  const confirmPassword = document.getElementById("confirmPassword");
  const errorConfirmPasswordElement = document.getElementById(
    "errorConfirmPassword"
  );
  if (!(confirmPassword.value === password.value)) {
    errorConfirmPasswordElement.innerHTML = `Both password doesnot match`;
    console.log("hello");
  } else {
    errorConfirmPasswordElement.innerHTML = "";
    return true;
  }
};

const nameError = () => {
  const fullName = document.getElementById("fullName");
  const errorName = document.getElementById("errorName");
  if (!fullName.value.length) {
    errorName.innerHTML = `Name field is empty`;
    console.log("hello");
  } else {
    errorName.innerHTML = "";
    return true;
  }
};

if (isAuth) {
  Main(localStorage.getItem("loggedName"));
} else {
  Home();
}

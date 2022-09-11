// document.getElementById("loginButton").addEventListener("click", Login);

const homePage = `<div
class="container-fluid bg-light d-flex justify-content-center align-items-center flex-column"
style="height: 100vh"
>
<div class="card">
  <h class="card-header"><h1>Single Page Application</h1></h>
  <div class="card-body">
    <p class="card-text d-flex justify-content-center">
      <button id="loginButton" onclick="Login()" type="button" class="btn btn-outline-success mr-3">
        Login
      </button>
      <button type="button" onclick="Register()" class="btn btn-success">Register</button>
    </p>
  </div>
</div>
</div>`;

const loginPage = `<div class="container d-flex justify-content-center align-items-center" style="height: 100vh;">
<form id="form" class="card p-3" style="width: 500px">
  <div class="form-group">
    <label for="email">Email address</label>
    <input
      type="text"
      class="form-control"
      id="email"
      aria-describedby="emailHelp"
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
  <p>Donot have account? <a href="#" onclick="Register()">Register</a></p>
  <p>Go back to <a href="#" onclick="Home()">Home</a></p>
<button type="submit" class="btn btn-primary">Login</button>
</form>
</body>
</div>`;

const registerPage = `
<div class="container d-flex justify-content-center align-items-center" style="height: 100vh;">
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
          aria-describedby="emailHelp"
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
      </div>
      <p id="errorPassword" class="text-danger" style="font-size:12px;"></p>
      <div class="form-group">
        <label for="confirmPassword">Reenter Password</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          placeholder="Password"
        />
        <p id="errorConfirmPassword" class="text-danger" style="font-size:12px;"></p>
      </div>
      <p>Already have account? <a href="#" onclick="Login()">Login</a></p>
      <p>Go back to <a href="#" onclick="Home()">Home</a></p>
    <button type="submit" class="btn btn-primary">Register</button>
    </form>
    
    </body>
    </div>`;

const Home = () => {
  document.getElementById("root").innerHTML = homePage;
};

const Login = () => {
  document.getElementById("root").innerHTML = loginPage;
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    passwordError();
    emailError();
  });
};

const Register = () => {
  document.getElementById("root").innerHTML = registerPage;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    passwordError();
    emailError();
    confirmPasswordError();
    nameError();
  });
};

const passwordError = () => {
  const password = document.getElementById("password");
  const errorPassword = document.getElementById("errorPassword");
  if (password.value.length === 0) {
    errorPassword.innerHTML = `Password field is empty`;
  } else if (password.value.length <= 8) {
    errorPassword.innerHTML = `Password must be more than 8 characters`;
  } else if (password.value.length >= 15) {
    errorPassword.innerHTML = `Password must be less than 15 characters`;
  } else if (
    !password.value.includes("1", "2", "3", "4", "5", "6", "7", "8", "9", "0")
  ) {
    errorPassword.innerHTML = `There must be a number in password`;
  } else document.getElementById("errorPassword").innerHTML = ``;
};

const emailError = () => {
  const email = document.getElementById("email");

  const errorEmailElement = document.getElementById("errorEmail");
  if (email.value.length === 0) {
    errorEmailElement.innerHTML = `Email field is empty`;
  } else if (!email.value.includes("@")) {
    errorEmailElement.innerHTML = `Email must contain @`;
  } else if (!email.value.includes(".")) {
    errorEmailElement.innerHTML = `Email must contain .`;
  } else errorEmailElement("errorEmail").innerHTML = ``;
};

const confirmPasswordError = () => {
  const confirmPassword = document.getElementById("confirmPassword");
  const errorConfirmPasswordElement = document.getElementById(
    "errorConfirmPassword"
  );
  if (!(confirmPassword.value === password.value)) {
    errorConfirmPasswordElement.innerHTML = `Both password doesnot match`;
    console.log("hello");
  } else errorConfirmPasswordElement.innerHTML = ``;
};

const nameError = () => {
  const fullName = document.getElementById("fullName");
  const errorName = document.getElementById("errorName");
  if (fullName.value.length === 0) {
    errorName.innerHTML = `Name field is empty`;
    console.log("hello");
  } else errorName.innerHTML = ``;
};
Home();

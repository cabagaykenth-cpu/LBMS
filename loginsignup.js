document.addEventListener("DOMContentLoaded", () => {
  // Redirect buttons
  const goSignUp = document.getElementById("goSignUp");
  const goLogin = document.getElementById("goLogin");

  if (goSignUp) {
    goSignUp.addEventListener("click", () => {
      window.location.href = "signup.html";
    });
  }

  if (goLogin) {
    goLogin.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }

  // LOGIN FUNCTION
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      let users = JSON.parse(localStorage.getItem("users")) || [];
      const validUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (validUser) {
        alert("Login successful!");
        window.location.href = "index.html"; // redirect page after login
      } else {
        alert("Invalid email or password!");
      }
    });
  }

  // SIGN UP FUNCTION
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      let users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.find((u) => u.email === email);

      if (userExists) {
        alert("User already exists!");
        return;
      }

      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Account created successfully!");
      window.location.href = "login.html";
    });
  }
});

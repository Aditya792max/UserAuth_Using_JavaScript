document.addEventListener('DOMContentLoaded', function () {
     document.getElementById('loginForm').onsubmit = function (e) {
          e.preventDefault();

          const Thisusername = document.getElementById('username').value.trim();
          const Thispassword = document.getElementById('password').value.trim();

          if (!Thisusername || !Thispassword) {
               alert('Please fill in both username and password!');
               return;
          }

          const users = JSON.parse(localStorage.getItem('users')) || [];

          // Check if username exists
          const user = users.find(user => user.username === Thisusername);

          if (!user) {
               alert('Username not registered!');
          } else if (user.password !== Thispassword) {
               alert('Incorrect password!');
          } else {
               alert('Login successful!');
               sessionStorage.setItem('loggedInUser', JSON.stringify(user));
               window.location.href = '../homepage.html';
               // window.location.href = 'dashboard.html';
          }

          document.getElementById('loginForm').reset();
     };
});
document.addEventListener('DOMContentLoaded', function () {
     document.getElementById('registerForm').onsubmit = function (e) {
          e.preventDefault();

          const username = document.getElementById('username').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          const confirmPassword = document.getElementById('confirmPassword').value;

          // Validate required fields
          if (!username || !email || !password || !confirmPassword) {
               alert('Please fill in all fields!');
               return;
          }

          // Validate password match
          if (password !== confirmPassword) {
               alert('Passwords do not match!');
               return;
          }

          // Validate password length
          if (password.length < 6) {
               alert('Password must be at least 6 characters long!');
               return;
          }

          // Get users from localStorage
          let users = JSON.parse(localStorage.getItem('users')) || [];

          // Check if username already exists
          //usernameExists is boolean that checks if the username already exists in the users array
          const usernameExists = users.some(user => user.username === username);
          if (usernameExists) {
               alert('Username already taken!');
               return;
          }

          // Save user
          const user = {
               username: username,
               email: email,
               password: password
          };

          users.push(user);// Add new user to the array
          localStorage.setItem('users', JSON.stringify(users));
          alert('Registration successful!');
          document.getElementById('registerForm').reset();
     };
});
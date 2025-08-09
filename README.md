# UserAuth_Using_JavaScript

## Overview

**UserAuth_Using_JavaScript** is a simple, front-end-only authentication system built with vanilla HTML, CSS, and JavaScript. It demonstrates user registration, login, and user listing functionality using browser `localStorage` and `sessionStorage`—no backend or database required. This project is ideal for learning the basics of authentication flows and client-side storage.

---

## Features

- **User Registration:**  
  Users can register with a unique username, email, and password. Duplicate usernames are prevented.

- **User Login:**  
  Registered users can log in with their credentials. Only valid, registered users are allowed access.

- **User Listing:**  
  View all registered users (excluding passwords) on the `OurUsers.html` page.

- **Session Management:**  
  Logged-in user information is stored in `sessionStorage` for the session.

- **Responsive UI:**  
  Clean, user-friendly interface styled with CSS.

---

## Folder Structure

```
MYPROJECTPRO/
│
├── homepage.html
├── OurUsers.html
├── styles.css
│
├── Login/
│   ├── login.html
│   ├── loginScript.js
│   └── style.css
│
└── Register/
    ├── register.html
    ├── registerScript.js
    └── style.css
```

---

## How to Use

1. **Clone or Download the Repository.**

2. **Open `Register/register.html` in your browser** to create a new user account.

3. **Open `Login/login.html` to log in** with your registered credentials.

4. **After logging in, you can navigate to `homepage.html`** or view all users on `OurUsers.html`.

---

## Technical Details

- **All user data is stored in `localStorage`** as a JSON array under the key `users`.
- **Session state is managed with `sessionStorage`** for the currently logged-in user.
- **No backend/server required**—all logic is handled client-side.
- **Password fields are masked** but not encrypted (for demo/learning purposes only).

---

## Disclaimer

This project is for educational/demo purposes only.  
**Do not use this code in production** as it lacks security features like password hashing, HTTPS, and backend validation.

---

## Author

Aditya Vikram

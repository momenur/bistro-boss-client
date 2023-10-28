# Bistro boss
Bistro boss

![Mylogo] ![01](https://github.com/momenur/bistro-boss-client/assets/115945613/513b3e17-ed58-4b26-9ee5-d38db551a986)



# Features
### 1. Security && Login
Enjoy a secure login system with Firebase authentication, email verification, and JWT token for enhanced user security.

### 2. Admin Panel
Admins can add and manage food items, update user roles (including granting admin privileges), ensuring smooth platform control.

### 3. User Panel
Users can add food on her cart, give a review for share User opinion.


# Installation
Clone the repository:

```
git clone https://github.com/momenur/bistro-boss-client.git
```
#### Prerequisites

- [React](https://react.dev)
- [Node](https://nodejs.org/en/)
- [Mongodb](https://www.mongodb.com/)

##### Steps

#### Server commands

- Create a `.env` file inside the `backend` directory. Add the below entries or change accordingly. You can follow the `.env.sample` file to see the format.

  ```
  MONGO_URL=
  PORT=8080
  JWT_SECRET=
  ACCESS_TOKEN_SECRET=
  REFRESH_TOKEN_SECRET=
  ```

- Open your terminal and run the following command

```sh
cd backend
npm install
npm start
```

#### Client commands

- Create a `.env` file inside the `frontend` directory. Add the below entries or change accordingly. You can follow the `.env.sample` file to see the format.

```
REACT_APP_BASE_API_URL=
```

- Run the following command

```sh
cd frontend
npm install
npm start
```

Access the app through your browser:
```
http://localhost:3000
```

# Technologies Used
- Node.js
- Express.js
- React
- SimplePair (for video and audio calling)
- MongoDB (for data storage)
- Socket.IO (for real-time messaging)

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

Please ensure that your pull request adheres to the following guidelines:

Follow the existing coding style and conventions.
Make sure your changes are well-documented.
Write clear and concise commit messages.

### Contact
If you have any questions, feel free to reach out to the project maintainer:

- Name: Sakib
- Email: cse.sakibhasan@gmail.com

We hope you enjoy using our chatting app! Happy chatting!

// dotenv import
require('dotenv').config();

// jwt import
const jwt = require('jsonwebtoken');

//bcryptjs import
const bcrypt = require('bcryptjs');

// cors(cross origin resource sharing) import
const cors = require('cors');

// express init
const express = require('express');
const app = express();

// connect DB
const dbConnector = require('./db/connect-db');

// models
const userModel = require('./models/user');

// middlewares
// const authMiddleware = require('./middlewares/auth');

// express middleware for handling json data in post-requests
app.use(express.json());

// use cors
app.use(cors());

// home/test route
app.get('/api', (req, res) => {
  res.status(200).send('app is live - welcome to Virtual Tours Ng');
});

// create user
app.post('/api/sign-up', async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;

  // check if all fields are filled

  if (!fullName || !email || !password || !confirmPassword) {
    return res.status(400).json({
      requestStatus: 'account creation failed: please fill in all fields',
    });
  }

  // reject passwords if less than 6 characters

  if (password.length < 6 || confirmPassword.length < 6) {
    return res.status(400).json({
      requestStatus:
        'account creation failed: password must be at least 6 characters',
    });
  }

  // hashing passwords for security

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // console.log(hashedPassword);

  const hashedConfirmPassword = await bcrypt.hash(confirmPassword, salt);
  // console.log(hashedConfirmPassword);

  // create user with hashed password

  const user = await userModel.create({
    fullName: fullName,
    email: email,
    password: hashedPassword,
    confirmPassword: hashedConfirmPassword,
  });

  // console.log(user);

  try {
    // create token
    const token = jwt.sign(
      { userId: user._id, userEmail: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_LIFETIME }
    );

    // return response

    res.status(201).json({
      requestStatus: 'account created successfully',
      user: user,
      token: token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ requestStatus: 'account creation failed', errorMessage: error });
    // console.log(error);
  }
});

// log-in user
app.post('/api/log-in', async (req, res) => {
  const { email, password } = req.body;

  // check if email and password are provided

  if (!email || !password) {
    return res.status(400).json({
      requestStatus: 'login unsuccessful: email or password not provided',
      errorMessage: error.message,
    });
  }

  // find user by email

  const user = await userModel.findOne({ email: email });

  // return error if user is not valid

  if (!user) {
    return res.status(404).json({
      requestStatus: 'login unsuccessful: user not found',
      errorMessage: error.message,
    });
  }

  // compare hashed password with password in db

  const isMatch = await bcrypt.compare(password, user.password);
  // console.log(isMatch);

  if (!isMatch) {
    return res.status(401).json({
      requestStatus: 'login unsuccessful: password does not match',
      errorMessage: error.message,
    });
  }

  try {
    // create token

    const token = jwt.sign(
      { userId: user._id, userEmail: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_LIFETIME }
    );

    res
      .status(200)
      .json({ requestStatus: 'login successful', user: user, token: token });
  } catch (error) {
    res.status(500).json({
      requestStatus: 'login unsuccessful: user not returned',
      errorMessage: error.message,
    });
  }
});

//get single user
app.get('/api/get-user/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userModel.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({
        requestStatus: 'request unseccessful',
        errorMessage: 'user not found',
      });
    }

    res
      .status(200)
      .json({ requestStatus: 'user fetched successfully', user: user });
  } catch (error) {
    res
      .status(500)
      .json({ requestStatus: 'request unsuccessful', errorMessage: error });
    console.log(error);
  }
});

// get all users - pending delete
app.get('/api/get-all-users', async (req, res) => {
  try {
    const allUsers = await userModel.find({});

    res.status(200).json({
      requestStatus: 'users fetched successfully',
      count: allUsers.length,
      users: allUsers,
    });
  } catch (error) {
    res
      .status(500)
      .json({ requestStatus: 'request unsuccessful', errorMessage: error });
    console.log(error);
  }
});

// serve
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await dbConnector(process.env.MONGO_DB_CONNECTION_STRING);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

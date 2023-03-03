const express = require('express');
const cors = require('cors');
const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const db = require('./db')

const app = express();

const Port = 3500;
app.use(cors());

app.use(express.json());
// app.use(express.urlencoded());

app.use('/', postsRouter);
app.use('/', usersRouter); 
app.use('/', authRouter);
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});
app.listen(Port, () => {
  console.log(`Connected to Port: ${Port}`);
});

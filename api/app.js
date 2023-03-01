const express = require('express');
const postsRouter = require('./routes/posts')
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')

const app = express();

const Port = 3500;

app.use(express.json());
// app.use(express.urlencoded());

app.use('/',postsRouter)
app.use('/',usersRouter)
app.use('/',authRouter)

app.listen(Port, () => {
  console.log(`Connected to Port: ${Port}`);
});

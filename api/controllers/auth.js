const db = require('../db');
const bcrypt = require('bcrypt');
const register = async (req, res) => {
  try {
    const {email,password,name,img} = req.body
    // check all details available
    if(!email,!password,!name) res.status(404).json('All fields are required')
    // check existing user
    // email unique
    const q = 'SELECT * FROM user WHERE email = ? OR username = ?';
    db.query(q, [email,name], (err, data) => {
      if (err) res.status(400).json(err.message);
      if (data.length) res.status(409).json('user already exist');
      // bcrypt password
      const hashedPassword = bcrypt.hash(password, 10);
      const q = "INSERT INTO user(username,email,password) VALUES(?) ";
      const values = [email,hashedPassword,name]
      db.query(q,[values],(err,data)=>{
        if(err) res.status(400).json(err.message)
        return res.status(200).json(`Welcome ${name} `)
      })
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
const login = async (req, res) => {
  try {
    res.send('login');
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
const logout = async (req, res) => {
  try {
    res.send('logout');
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = { register, login, logout };

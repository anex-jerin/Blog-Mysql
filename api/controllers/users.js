const getUsers = async (req, res) => {
  try {
    res.send('Users');
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = { getUsers };

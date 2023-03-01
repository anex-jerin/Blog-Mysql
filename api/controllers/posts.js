const getPosts = async (req, res) => {
  try {
    res.send('posts')
  } catch (e) {
     res.status(400).json({ error: e.message });
  }
};

module.exports = { getPosts };

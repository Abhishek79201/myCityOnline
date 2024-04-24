const authService = require('.');

const signUp = async (req, res) => {
  try {
    // eslint-disable-next-line object-curly-newline
    const { firstname, lastname, username, email, password } = req.body;
    const user = await authService.createUser(
      firstname,
      lastname,
      username,
      email,
      password,
    );
    // You can handle response accordingly
    res.status(200).json({ message: 'User created successfully', user });
  } catch (error) {
    // Handle error
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { signUp };

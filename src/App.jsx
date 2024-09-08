import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validatePassword = (password) => {
    //password starts with capital letter
    //one special character
    //one numerical value
    // min length of the password is 8
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (!username || !password) {
      setError('Both fields are required!');
    } else if (!validatePassword(password)) {
      setError(
        'Password must start with a capital letter, contain exactly 8 characters, at least one number, and one special character.'
      );
    } else {
      setError('');
      alert(`Username: ${username}\nPassword: ${password}`);
    }
  };

  return (
    <React.Fragment>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {/* username block */}
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter the name"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          {/* password block */}
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter the password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {error && <p>
          {error}
          </p>}
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default App;

// src/components/AuthForm.js
const AuthForm = ({
    isLogin,
    username,
    setUsername,
    secret,
    setSecret,
    email,
    setEmail,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    onLogin,
    onSignup,
  }) => {
    return isLogin ? (
      <form className="auth-form" onSubmit={onLogin}>
        <h2 className="form-title login-title">Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          name="secret"
          placeholder="Password"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">
          LOG IN
        </button>
      </form>
    ) : (
      <form className="auth-form" onSubmit={onSignup}>
        <h2 className="form-title signup-title">Sign Up</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          name="secret"
          placeholder="Password"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="first_name"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit" className="btn-secondary">
          SIGN UP
        </button>
      </form>
    );
  };
  
  export default AuthForm;
  
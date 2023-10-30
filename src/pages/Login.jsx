import "./login.css";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Login</h1>
        <input type="text" placeholder="Email or phone number" />
        <input type="password" placeholder="Password" />
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};
export default Login;

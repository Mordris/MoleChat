// src/components/FormToggle.js
const FormToggle = ({ isLogin, setIsLogin }) => {
    return (
      <div className="form-toggle">
        <button
          className={`toggle-btn ${isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`toggle-btn ${!isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>
    );
  };
  
  export default FormToggle;
  
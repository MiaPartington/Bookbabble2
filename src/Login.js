import './Login.css';
import {Nav, Button, Container} from 'react-bootstrap';

const Login = () => {
    return ( 
      <div className="login">
      <div className="center">
        <h1>Login</h1>
        <form action="" method="POST">
          <div className="txt_field">
            <input type="text" name="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input type="password" name="password" required />
            <span></span>
            <label>Password</label>
          </div>
          {/* <div className="pass">Forget Password?</div> */}
          <a href='/'>Login</a>
          <div className="signup_link">
            Not a Member? <a href="/signup">Signup</a>
          </div>
        </form>
      </div>
    </div>
     );
}
 
export default Login;
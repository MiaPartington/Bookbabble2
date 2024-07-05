import './Signup.css';

const signup = () => {
    return (  
    <div class="signup-container">
        <h2>Create an account</h2>
        <p>Enter your details to sign up for this app</p>
        <input type="text" placeholder="Username"/>
        <input type="email" placeholder="email@domain.com"/>
        <input type="password" placeholder="Password"/>
        <a href='/'>Sign up</a>
    <p>By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></p>
    </div>
    );
}
 
export default signup;
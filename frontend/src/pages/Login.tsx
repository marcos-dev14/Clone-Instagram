import { MdEmail, MdLock } from 'react-icons/md';

import '../styles/pages/Login.css';

import phoneInsta from '../assets/insta01.png';
import logoInsta from '../assets/logoinsta.png';

export function Login() {
  return (
    <div className="login">
      <div className="login-left">
        <img src={phoneInsta} alt=""/>
      </div>

      <section>
        <div className="login-right">
          <h1>
            <img src={logoInsta} alt=""/>
          </h1>

          <div className="login-loginInputEmail">
            <MdEmail />
            <input 
              type="text" 
              placeholder="Phone number, username, or email"
            />
          </div>

          <div className="login-loginInputPassword">
            <MdLock />
            <input 
              type="password" 
              placeholder="Password"
            />
          </div>

          <button type="submit">
            Log in
          </button>
        </div>

        <div className="register">
          <p>Don't have an account?</p>
          <span>Register</span>
        </div>
      </section>
    </div>
  );
}

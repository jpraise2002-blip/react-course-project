import { useState } from "react";
import './LoginForm.css'

 export function LoginForm () {
  const [showPassword, setShowPassword] = useState(false);

      function viewPassword () {
        if(showPassword) {
          setShowPassword(false)
        } else {
          setShowPassword (true)
        }
      }
      
      return (
        <div>
          <div>
            <input placeHolder='Email'></input>
          </div>
          <div>
            <input placeHolder='Password'
            type={showPassword ? 'text' : 'password'}>
            </input>
            <button className='password-button'
            onClick={viewPassword}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button>Login</button>
          <button>Sign up</button>
        </div>
      )
}


import side from '../images/Side Image.png';
import Gicon from '../images/Icon-Google.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useForm } from 'react-hook-form';

export const Sign = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, SetTheEmail } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  // إرسال البيانات
  const sendData = async (data) => {
    setError(null);
    setSuccess(false);
    try {
      const url = isLogin
        ? 'https://digi-backend-project.vercel.app/api/login'
        : 'https://digi-backend-project.vercel.app/api/register';

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          isLogin
            ? { email: data.email, password: data.password }
            : { username: data.name, email: data.email, password: data.password }
        ),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMsg = Array.isArray(result.msg) ? result.msg.join(', ') : result.msg;
        throw new Error(errorMsg || 'Something went wrong');
      }

      if (!isLogin) {
        setSuccess(true);
        return;
      }

      
      const userResponse = await fetch(`https://digi-backend-project.vercel.app/api/email/${encodeURIComponent(data.email)}`);
      const userData = await userResponse.json();

      const userInfo = {
        user_email: data.email,
        user_username: userData.username,
        user_address: userData.address
      };

      SetTheEmail(userInfo);
      login(result.token, userInfo);
      navigate('/home');

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row min-vh-100 align-items-center">
        <div className="col-lg-7 d-none d-lg-block p-0">
          <img src={side} alt="" className="w-80 h-100 object-fit-cover" />
        </div>

        <div className="col-lg-5 d-flex justify-content-center">
          <div className="w-75">
            <h4 className="mb-3">{isLogin ? 'Login' : 'Create an account'}</h4>
            <p className="mb-3">Enter your details below</p>

            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">Account created successfully!</div>}

            <form onSubmit={handleSubmit(sendData)}>
              {!isLogin && (
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className="text-danger">{errors.name.message}</p>}
                </div>
              )}

              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  {...register('password', { required: 'Password is required', minLength: { value: 10, message: 'Minimum 10 characters' } })}
                />
                {errors.password && <p className="text-danger">{errors.password.message}</p>}
              </div>

              <button className="btn btn-danger w-100 p-3" type="submit">
                {isLogin ? 'Login' : 'Create Account'}
              </button>

              {!isLogin && (
                <button className="btn border mt-3 w-100 p-3">
                  <img src={Gicon} alt="" className="pe-2" />
                  Sign up with Google
                </button>
              )}
            </form>

            <p className="text-center mt-3">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span
                className="ms-2 text-dark fw-bold"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError(null);
                  setSuccess(false);
                }}
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
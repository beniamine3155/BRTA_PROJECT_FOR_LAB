import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleLogin = () => {
    console.log('Form Data:', formData);
    // Add your logic for handling login (e.g., API call) here
    signIn(formData.email, formData.password)
    .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
            title: "Successfully logged in!",
            text: "Now you are ready to go ahead and explore",
            icon: "success"
        });
        navigate(from, { replace: true });
    })
    .catch(error => {
        console.error('Login failed:', error);
        Swal.fire({
            title: "Login Failed",
            text: "There was an error during login. Please try again.",
            icon: "error"
        });
    });
};

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Please Login!</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <div className="py-1">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="py-1">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="password"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input
                type="checkbox"
                name="rememberMe"
                id="ch"
                className="mr-2"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span className="text-md">Remember for 30 days</span>
            </div>
            <span className="font-bold text-md">Forgot password</span>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign in
          </button>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
          >
            <img src="google.svg" alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Don't have an account?
            <Link to="/signup"><span className="font-bold text-black cursor-pointer hover:text-gray-500"> Signup for free</span></Link>
          </div>
        </div>
        {/* right side */}
        <div className="relative">
          <img
            src="image.jpg"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          {/* text on image */}
          <div
            className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span className="text-white text-xl">
            Stop accidents before they stop you.
              <br />
              A fast drive could be your last drive.
              <br />
              No belt, no excuse!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

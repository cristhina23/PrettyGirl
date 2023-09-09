import { AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";

import { toast } from "react-toastify";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const newForm = new FormData();

    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);

    toast.success("Usuario creado exitasamente!");
    setName("");
    setEmail("");
    setPassword("");
    setAvatar();

    navigate("/");
    window.location.reload(true);
  };

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Register New User
        </h2>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm: max-w-md'>
        <div className='bg-white p-10 shadow  shadow-lg sm:px-4 sm:rounded-lg sm-px-10'>
          <form
            className='space-y-6'
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor='email'
                className='block text-gray-700 text-sm font-medium'
              >
                Full Name
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='text'
                  autoComplete='name'
                  required
                  value={name}
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-gray-700 text-sm font-medium'
              >
                Email Address
              </label>
              <div className='mt-1'>
                <input
                  type='email'
                  name='email'
                  autoComplete='email'
                  required
                  value={email}
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-gray-700 text-sm font-medium'
              >
                Password
              </label>
              <div className='mt-1 relative'>
                <input
                  type={visible ? "text" : "password"}
                  name='password'
                  autoComplete='current-password'
                  required
                  value={password}
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  onChange={(e) => setPassword(e.target.value)}
                />
                {visible ? (
                  <AiOutlineEye
                    className='absolute right-2 top-2 cursor-pointer'
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className='absolute right-2 top-2 cursor-pointer'
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor='avatar'
                className='block text-sm font-mediun text-gray-700'
              ></label>
              <div className='mt-2 flex items-center'>
                <span className='inline-block h-8 w-8 rounded-full overflow-hidden'>
                  {avatar ? (
                    <img
                      className='h-full w-full object-cover rounded-full'
                      src={URL.createObjectURL(avatar)}
                      alt='avatar'
                    />
                  ) : (
                    <RxAvatar className='h-8 w-8' />
                  )}
                </span>
                <label
                  htmlFor='file-input'
                  className='ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm text-medium text-gray-700 bg-white hover:bg-gray-50'
                >
                  <span>Upload a file</span>
                  <input
                    type='file'
                    name='avatar'
                    id='file-input'
                    accept='.jpg,.jpeg,.png'
                    onChange={handleFileInputChange}
                    className='sr-only'
                  />
                </label>
              </div>
            </div>
            <div>
              <button
                type='submit'
                className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-mediun rounded-md text-white bg-blue-600 hover:bg-blue-700'
              >
                Submit
              </button>
            </div>
            <div className={`${styles.normalFlex} w-full`}>
              <h4>AAlready have an account?</h4>
              <Link
                to='/login'
                className='text-blue-600 pl-2'
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';


Modal.setAppElement('#root');

const LoginModal = ({ show, onClose }) => {
  const [loginValue, setLoginValue] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (validateInput(loginValue, password)) {
      const isAuthenticated = fakeAuth(loginValue, password);
      if (isAuthenticated) {
        onClose();
      } else {
        setError('Invalid email, phone number, or password');
      }
    }
  };

  const validateInput = (loginValue, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!emailRegex.test(loginValue) && !phoneRegex.test(loginValue)) {
      setError('Invalid email or phone number format');
      return false;
    }
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one digit');
      return false;
    }
    setError('');
    return true;
  };

  const fakeAuth = (loginValue, password) => {
    return (loginValue === 'test@example.com' || loginValue === '1234567890') && password === 'Password123';
  };
  if (!show) return null;

  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      contentLabel="Login Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className='bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative'>
        <button className='absolute top-4 right-4 text-gray-600' onClick={onClose}>
          <AiOutlineClose size={24} />
        </button>
        <h1 className='text-2xl font-bold mb-4'>Log In</h1>
        <p className='mb-4'>It's quick and easy.</p>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <input
          type="text"
          placeholder="Email or Phone Number"
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
          className='w-full p-2 mb-4 border border-gray-300 rounded'
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full p-2 mb-4 border border-gray-300 rounded'
        />
        <p className='flex justify-end mb-4'>
          <span className='text-[#163390]'>
            Forget Password
          </span>
        </p>
        <div className='flex items-center justify-center'>
        <button
          onClick={handleLogin}
          className='w-[50%] bg-[#163390] text-white p-2 rounded'
        >
          Log In
        </button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
